const CACHE='sonolex-v4';
const ASSETS=['./','./index.html','./styles.css','./vocab.js','./engine.js','./app.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sonolex-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).then(res=>{if(res.ok&&!res.redirected&&res.url.startsWith(self.location.origin)){const copy=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));}return res;}).catch(()=>caches.match('./index.html')));return;}
if(ASSETS.some(p=>new URL(p,self.registration.scope).href===url.href))event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));});
