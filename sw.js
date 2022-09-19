var CACHE_NAME = 'test_appv1.0.2';
var urlsToCache = [
  '/audio-player/img/1659197542821.webp',
  '/audio-player/audio-data/カロリーゼロ.flac',
  '/audio-player/js/lyrics.js',
  '/audio-player/css/index.css',
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
