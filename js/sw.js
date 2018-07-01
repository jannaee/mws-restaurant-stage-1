/**
 * Adding a service worker.
*/ 

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
