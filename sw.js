var CACHE_NAME = 'test_appv1.0.0';
var urlsToCache = [
  '/img/1659197542821.webp',
  '/audio-data/カロリーゼロ.flac',
  '/js/lyrics.js',
  '/css/index.css',
  'https://kit.fontawesome.com/a75100396c.js',
  'https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap'
];

// インストール処理
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
    .open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
    .match(event.request)
    .then(function(response) {
      return response || fetch(event.request);
    })
  );
});
