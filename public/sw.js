let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/vendors~main.chunk.js',
                // '/manifest.json',
                // '/favicon.ico',
                // '/logo192.png',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/users',
                '/about',
                '/'
            ])
        })
    )
})

this.addEventListener('fetch', (event) => {
    if(!navigator.online) {
        event.respondWith(
            fetch(event.request).catch(function () { 
                const requestUrl = event.request.clone();
                fetch(requestUrl)
                return caches.match(event.request);
            })
        )
    }
});

// this.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request).then((resp) => {
//             if (resp) {
//                 return resp
//             }
            
//         })
//     )
// })
