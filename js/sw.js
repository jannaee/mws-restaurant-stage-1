/**
 * Adding a service worker.
 */

 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw.js').then(
    function(serviceWorkerRegister) {
    if(serviceWorkerRegister.installing) {
      console.log('Installation in progress');
    } else if(serviceWorkerRegister.waiting) {
      console.log('Installation complete');
    } else if(serviceWorkerRegister.active) {
      console.log('Service Worker is Active');
    }
  }).catch(function(error) {
    // registration failed
    console.log('Uh oh! Failure detected: ' + error);
  });
}

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open().then(
      function(cache){
        return cache.addAll([
        '/'
      ]);
    })
  );
});