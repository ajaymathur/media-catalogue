var cacheName = 'media-catalogue-v1';

var filesToCache = [
    '.',
    'media-catalogue/index.html',
    'media-catalogue/static/js/bundle.js',
    'media-catalogue/static/css/main.css',
    'media-catalogue/static/media/app-store.svg',
    'media-catalogue/static/media/facebook.svg',
    'media-catalogue/static/media/instagram.svg',
    'media-catalogue/static/media/play-store.svg',
    'media-catalogue/static/media/twitter.svg',
    'media-catalogue/static/media/windows-store.svg',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function(cache) {
                console.log('cache open');
                return cache.addAll(filesToCache);
            })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
