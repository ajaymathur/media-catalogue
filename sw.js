var cacheName = 'media-catalogue-v1';

var filesToCache = [
    '.',
    'index.html',
    'static/js/bundle.js',
    'static/css/main.css',
    'static/media/app-store.svg',
    'static/media/facebook.svg',
    'static/media/instagram.svg',
    'static/media/play-store.svg',
    'static/media/twitter.svg',
    'static/media/windows-store.svg',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function(cache) {
                console.log('cache open');
                return cache.addAll(filesToCache);
            })
    )
})
