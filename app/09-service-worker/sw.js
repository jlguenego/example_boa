'use strict';

console.log('sw.js start', new Date());

var CACHE_NAME = 'example-boa-09-service-worker-cache';
var urlsToCache = [
    './',
    './index.html',
    './contact.html',
    './style.css',
    './main.js'
];

self.addEventListener('install', event => {
    console.log('install event catched', event);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});


console.log('sw.js end.');