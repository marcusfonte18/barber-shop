if(!self.define){let e,t={};const s=(s,c)=>(s=new URL(s+".js",c).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(t[a])return;let i={};const r=e=>s(e,a),u={module:{uri:a},exports:i,require:r};t[a]=Promise.all(c.map((e=>u[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/ apple-icon.png",revision:"baf984c42d504fb1d43be6198ab212e0"},{url:"/_next/app-build-manifest.json",revision:"19cccb44b55a22e2e6d3312470973f83"},{url:"/_next/static/_-AHucCpYrMY7tQ7fNSt9/_buildManifest.js",revision:"852ef602a7e172bf357e4fb7ba165460"},{url:"/_next/static/_-AHucCpYrMY7tQ7fNSt9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1282-1c28570888079ec2.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/169-9045b98c4b0baee4.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/1727-474f987f98556800.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/1784-c4a3d0447334b5bb.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/181-ac2d2c9083ea7fa4.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/2362-1f29246c06005ffd.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/3098-5328477451248bec.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/3118-790fb7ac5cb52119.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/3403-574c6eb0dd6886f2.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/3824-85648d436f66c869.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/3851-60c2dd424a12ecff.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/3875-c30b6cac591f8e25.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/4079-71c3c5a7840a6b7c.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/4238-bef70068ad337328.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/4489-9ac44473b8968e06.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/4732-a225c43c329da255.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/5037-d355dcfbf076fcd0.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/5068-5af359d447af1e8a.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/5182-103dc6e5526344f7.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/5572-a5eaad0024a6f84f.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/5690-79b1c71fc16066b8.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/6077-34190e77fba55f6e.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/6246-0b7861269653bcde.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/6474-a827aa29144b6e20.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/6625-b1dbe4ca81ea1b8a.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/6661-c1ed0b01d92870b0.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/6717-8aef01ea248f105d.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/6861-dc2965ad8655d7d7.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/7149-3fab627e60b8f879.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/7389-95e67f16affde72c.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/7412-904706391e266e84.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/7506-452d59f922df8e59.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/7663-79f195ee2464451c.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/7931-9c29b5101bbf3a1c.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/7935-1a5af175cee6805a.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/8184-7e51bd6155a2b79d.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/821-d50eccc4431a6bdd.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/8449-9dfcc03e34fae7a8.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/9593-01f74bf8a78afbd2.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/9831-eb0b982705f117e6.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(auth)/barbeiros/page-3c49cf101fd2ce10.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(auth)/configuracoes/page-b65277c10c01a726.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(auth)/cortes/page-7404603611670460.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(auth)/layout-e93584104ea69402.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(auth)/page-2fc236a2896cb460.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(auth)/sobre/page-a766fea40e6c4c9d.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(unauth)/cadastrar/page-8b363d3b03da9e58.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(unauth)/entrar/page-88b809adfa513f11.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(unauth)/esqueci-senha/page-fcf899506a3846b1.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/(unauth)/resetar-senha/page-66d92c4d7cff760f.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/_not-found/page-68cd9a78bc7fa0f7.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-a1f9ae42f58bb483.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/barbers/%5BbarberId%5D/queue/route-a62b2c4c1e35ed0c.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/barbers/%5BbarberId%5D/route-9affb899f75d3e31.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/barbers/route-4cc1242b72015b6b.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/forgot-password/route-bae6c0a1ec969bdb.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/open/route-716be2beec24acf7.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/queue/route-4be8eaee6772efe3.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/register/route-726b1e8a3aacc020.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/reset-password/route-e3326dc83e44c98d.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/api/user/route-880fd06cbcac48b8.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/layout-219173a6e302ba5a.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/loading-199e095cc5e04797.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/app/not-found-3f8fedd0363e0ff2.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/main-0e1195eec77b9143.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/main-app-74da00158f633728.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/pages/_app-5abf42c8199eb46b.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/pages/_error-36591b4be94c52d1.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-835f0d8aabc2b5bb.js",revision:"_-AHucCpYrMY7tQ7fNSt9"},{url:"/_next/static/css/fd2c947322d08bd8.css",revision:"fd2c947322d08bd8"},{url:"/_next/static/media/22ee5c1efb5e5f9f-s.p.ttf",revision:"c3972579bd5cb0090c0c9fc6201fda19"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon.png",revision:"baf984c42d504fb1d43be6198ab212e0"},{url:"/icons/favicon-96x96.png",revision:"0a511211f36e02bb166afc8e3e7bf152"},{url:"/icons/web-app-manifest-1280-720.png",revision:"3ad6c206dccb74771981f1fe67df6b72"},{url:"/icons/web-app-manifest-192x192.png",revision:"baf984c42d504fb1d43be6198ab212e0"},{url:"/icons/web-app-manifest-512x512.png",revision:"bb067a7ed65d99a4b1451eb817267a9c"},{url:"/manifest.json",revision:"4b14153a29bd8196377496f676ccac4a"},{url:"/notification-old-sw.js",revision:"77da2c4555c8f68bbb2466221ac15ed4"},{url:"/sw-next.js",revision:"c978b15279ed0544968f610b6bca09f0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:t,event:s,state:c})=>t&&"opaqueredirect"===t.type?new Response(t.body,{status:200,statusText:"OK",headers:t.headers}):t}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const t=e.pathname;return!t.startsWith("/api/auth/")&&!!t.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
