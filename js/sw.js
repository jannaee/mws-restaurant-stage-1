/*
  Adding a service worker.
  TO DO: leverage install, activate and fetch states
*/ 


const cachedFiles= [
  '/',
  '/restaurant.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/img/1-sm.jpg',
  '/img/2-sm.jpg',
  '/img/3-sm.jpg',
  '/img/4-sm.jpg',
  '/img/5-sm.jpg',
  '/img/6-sm.jpg',
  '/img/7-sm.jpg',
  '/img/8-sm.jpg',
  '/img/9-sm.jpg',
  '/img/bad-review.svg',
  '/img/good-review.svg'
];

// cache of items and installing of sw is successful.
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('v1').then(
      function(cache){
      return cache.addAll(cachedFiles);
    })
  );
});


// the fetch event intercepts and allows custom responses to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(
      function(response){
      return response || fetch(event.request.url);
    })
  );
});