const CACHE_NAME = 'snowiest-city-cache-v7';

// Cache core document shells
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './favicon.svg',
  './canopy_bg_mobile.webp',
  './canopy_bg_desktop.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Cache interception strategy
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);

  // Network-First strategy for the main HTML shell to prevent caching deploy traps
  const isHtml = event.request.mode === 'navigate' || requestUrl.pathname.endsWith('/') || requestUrl.pathname.endsWith('index.html');

  if (isHtml) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Cache static assets from local origin, remote CDN images (Cloudinary), or Google Fonts
  const isLocalStatic = requestUrl.origin === self.location.origin;
  const isCloudinary = requestUrl.hostname.includes('cloudinary.com');
  const isGoogleFont = requestUrl.hostname.includes('fonts.gstatic.com') || requestUrl.hostname.includes('fonts.googleapis.com');

  if (isLocalStatic || isCloudinary || isGoogleFont) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache and update in the background (Stale-While-Revalidate)
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, networkResponse);
                });
              }
            })
            .catch(() => {});
          
          return cachedResponse;
        }

        // Fetch from network and cache
        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
    );
  }
});
