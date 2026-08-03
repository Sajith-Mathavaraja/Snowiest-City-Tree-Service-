import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
// Home is statically imported so the Hero renders immediately with no Suspense delay
// This eliminates the 3,020ms LCP "element render delay" caused by lazy loading the landing page
import Home from './pages/Home';

// Lazy load non-landing route pages — only visited after navigation, never on first paint
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));

// Helper component to scroll window to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Layout>
        {/* Invisible fallback — only shown when navigating to other pages, never on initial load */}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
