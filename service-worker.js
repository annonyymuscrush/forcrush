const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/photocont/f1.png',
    '/photocont/f2.png',
    '/photocont/f3.png',
    '/photocont/f4.png',
    '/imgPIN/p1.png',
    '/imgPIN/p2.png',
    '/imgPIN/p3.png',
    '/imgPIN/p4.png',
    '/imgPIN/p5.png',
    '/imgPIN/p6.png',
    '/imgPIN/p7.png',
    '/imgPIN/p8.png',
    '/imgbook/1.png',
    '/imgbook/2.png',
    '/imgbook/3.png',
    '/imgbook/4.png',
    '/imgbook/5.png',
    '/imgbook/6.png',
    '/musik/yung kai - blue (Official Music Video).mp3',
    '/musik/ktngg kau pts.mp3'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});