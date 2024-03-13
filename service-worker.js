/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "260e4047db12c97ca70f2d7f1ce1cef1"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.e775e175.js",
    "revision": "732d84c2f294985aef70f1a58100a99f"
  },
  {
    "url": "assets/js/10.0e486c50.js",
    "revision": "a0a59afeea7015ea9499c708369311c0"
  },
  {
    "url": "assets/js/14.0b4e62ec.js",
    "revision": "ff30f2b8c8998b211f494cd41caa5e2e"
  },
  {
    "url": "assets/js/15.6dda31e5.js",
    "revision": "edeee6bf4ab2ea7de466835df7c47cfa"
  },
  {
    "url": "assets/js/16.1a41a9d8.js",
    "revision": "fdc798da7e3ed0a97832bb22ba0e0ee3"
  },
  {
    "url": "assets/js/17.62cab6c2.js",
    "revision": "bcf77957ee8efdd6a16c372fcecc477c"
  },
  {
    "url": "assets/js/18.b5ad6b6b.js",
    "revision": "3e4a6b717bd5092f8390fe2ca5d3f263"
  },
  {
    "url": "assets/js/19.f16cc729.js",
    "revision": "4e18e917213769d24f7710515217c02e"
  },
  {
    "url": "assets/js/2.5ee3dab3.js",
    "revision": "fdda7066d57655179aefaa2433efe95a"
  },
  {
    "url": "assets/js/20.c91a7fd6.js",
    "revision": "2437af4a90b1cfa4d8054e954d45714e"
  },
  {
    "url": "assets/js/21.d25a62ef.js",
    "revision": "9d63ca487401c573e2fe4079b5e6981a"
  },
  {
    "url": "assets/js/22.6d8c64c4.js",
    "revision": "950115a8ca5a76d0c364d6ae2ca0cae8"
  },
  {
    "url": "assets/js/23.9b7b0063.js",
    "revision": "4290c0bcd40241ea6d8807f62ba99f1e"
  },
  {
    "url": "assets/js/24.65c291ca.js",
    "revision": "915b19398980f58708a1495a9a9ec51d"
  },
  {
    "url": "assets/js/25.968ea1d6.js",
    "revision": "088d3712d337608583a19d91f1129e19"
  },
  {
    "url": "assets/js/26.e08efa9c.js",
    "revision": "f2d7e17258bab1e524c3684bf0a6958e"
  },
  {
    "url": "assets/js/27.a102c182.js",
    "revision": "a2c2b42d551b60038891b4fc11a52545"
  },
  {
    "url": "assets/js/28.7df0b088.js",
    "revision": "0ca5b13bd12e3087b376301cf7ce61d7"
  },
  {
    "url": "assets/js/29.81ed2ce2.js",
    "revision": "87eb5a979595de108d77a29c0b92625a"
  },
  {
    "url": "assets/js/3.93769365.js",
    "revision": "e090ac9bcf72b6e9cc25abb7956f40bb"
  },
  {
    "url": "assets/js/30.587e5f10.js",
    "revision": "fe4801edec1acb909a0101f8fac2752c"
  },
  {
    "url": "assets/js/31.107ee136.js",
    "revision": "6b94a86f23567740d6a99fc9e1010025"
  },
  {
    "url": "assets/js/32.e7c3b70d.js",
    "revision": "47373bf79555f2af330c90ddc88346d8"
  },
  {
    "url": "assets/js/33.dffe7e7f.js",
    "revision": "a93e628393abf8812143e9052238eb78"
  },
  {
    "url": "assets/js/34.9e434435.js",
    "revision": "22360f2f966e48b3234c5d4eef12533a"
  },
  {
    "url": "assets/js/35.ee66cc51.js",
    "revision": "e6b4118324d68d7bb6d9b5a684e6972d"
  },
  {
    "url": "assets/js/36.96611999.js",
    "revision": "0601d9bb0b3e6ffdfba62c62c23ea717"
  },
  {
    "url": "assets/js/37.6041fb3f.js",
    "revision": "0961d64cf388b6613e8a3cb3adc6c670"
  },
  {
    "url": "assets/js/38.12e60854.js",
    "revision": "cd8c48e062447f7a2e2257cd3a4940de"
  },
  {
    "url": "assets/js/39.dcb8bbc5.js",
    "revision": "772efdd2efb75e784ff4817a71a38784"
  },
  {
    "url": "assets/js/4.a76c7c2e.js",
    "revision": "0729c97fe2a654b3c275f4f55c64d4c2"
  },
  {
    "url": "assets/js/40.3de064db.js",
    "revision": "c3a16aac4cb998bfe1525b9582b0b52c"
  },
  {
    "url": "assets/js/41.df292826.js",
    "revision": "9c3e010c6a7530d09dfdc54ef2cbd1ca"
  },
  {
    "url": "assets/js/42.dbc130bf.js",
    "revision": "6338748067743f47b3b6bb72d5cad0a2"
  },
  {
    "url": "assets/js/43.6a8010b4.js",
    "revision": "e897bb78bf9eb3de235307bc50324551"
  },
  {
    "url": "assets/js/44.f34a7450.js",
    "revision": "6a40ec445e9f24cf26b7becb520f8609"
  },
  {
    "url": "assets/js/45.e7b7604f.js",
    "revision": "da93d00d56584904624842f9d3e25262"
  },
  {
    "url": "assets/js/5.727aef9d.js",
    "revision": "887f1fe271dde47ad04551330a517874"
  },
  {
    "url": "assets/js/6.5ce15e59.js",
    "revision": "01aab0e0f77bcfede04dcb349d8264a3"
  },
  {
    "url": "assets/js/7.487d215b.js",
    "revision": "8029b2c9f8cbe9618c4350941e7f071a"
  },
  {
    "url": "assets/js/8.dcf98705.js",
    "revision": "24ced4e7b4079e2dd06d4823e4b06f68"
  },
  {
    "url": "assets/js/9.75443d07.js",
    "revision": "a28799bdf3710d8be6bc59f5f7555de1"
  },
  {
    "url": "assets/js/app.f4849aac.js",
    "revision": "48923a1815b427372babeae672309e98"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.c3d48c3b.js",
    "revision": "624ee701e7a010ee3947f51674f8e2cf"
  },
  {
    "url": "assets/js/vendors~flowchart.fe2b37f5.js",
    "revision": "4235d5f3268d7819b19dd0e704a2ea18"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "00bd6fde5f42b51969c0c8646dcf3330"
  },
  {
    "url": "categories/java/index.html",
    "revision": "45908d682f295e5e8e64593fc80dcbf1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "10e0bae8b2a33f75d003be44b1f2470e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4c2b9a8880d23580678a5381221a7848"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6aea6a992465f94bb3387c3b929ca338"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ff651e982a7592be2230f03442cf151d"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "5a245aea0e92ec2d760dbbc71dda9ea0"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "35b21d6ead55b0c3f9d439bbfecef85f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2f56100bb7ebf7e662c689da4699932d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e78a2b62cb19a102cd35021f7e46cd08"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6afd2edf99a2e05f01f3cde93da9d857"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "cd8345766115523398b3719266fc938c"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "38e143937f4304f55b31f93d30cfb50d"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bd965e16770135870ba8d9da73c865d2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1d4fae1b3fbe31431fbc0486ba318acb"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "69f32aee4898a8ca50fe543c6d1f1620"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "08a6fbd3cbf139034d9a3e38c37a9ad4"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "acc01f87a97e18a824dbade45db47304"
  },
  {
    "url": "timeline/index.html",
    "revision": "33eccebcaad306030dbe026641161c36"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c3818c05ef5a56a742d326446ea05158"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "015816785b609272d084947407ed5fbb"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "829fe7b0b9eec061140d3c16d957a327"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1e961180494c2b51d59409c2f298b81d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6720fbf4406456330d0819218e07a799"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
