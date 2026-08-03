export * from 'preact/compat';
export { createRoot, hydrateRoot } from 'preact/compat/client';
import * as preactCompat from 'preact/compat';

// Shim missing React 19 APIs for complete compatibility with react-router-dom v7
export const use = preactCompat.use || ((promise) => {
  if (promise.status === 'fulfilled') return promise.value;
  if (promise.status === 'rejected') throw promise.reason;
  if (promise.status === 'pending') throw promise;
  promise.status = 'pending';
  promise.then(
    (v) => { promise.status = 'fulfilled'; promise.value = v; },
    (e) => { promise.status = 'rejected'; promise.reason = e; }
  );
  throw promise;
});

export const useOptimistic = preactCompat.useOptimistic || ((state) => [state, () => {}]);

const defaultExport = {
  ...preactCompat.default,
  use,
  useOptimistic
};

export default defaultExport;
