---
# Astrowind
title: 'SSLが推奨されるChrome 68の登場。じゃあ、ブラウザのシェアってどうなんだろう？やっぱり多いのはChrome?'
excerpt: '前回のブログ記事は、Chrome 68が登場し「保護されていない通信」という表示...'
updateDate: 2020-06-18
publishedDate: 2018-08-03
tags: 
  - lighthouse

author: nose
image: https://blog.ideamans.com/assets/2018-08-02-ga-browser-ogp.jpg
category: lighthouse

# カスタム
updatedAt: 2020-06-18 06:36:04
publishedAt: 2018-08-03 08:25:00
categories: 
  - lighthouse

categoryLabels: 
  - Lighthouse

authorId: nose
subTheme: 
recommended: false
---

<p>前回のブログ記事は、Chrome 68が登場し「保護されていない通信」という表示が非SSLページで表示されることをお伝えいたしました。今回は、「じゃあ、Chromeってどれくらいシェアがあるの？」「実はそんなにないんじゃないの？」という疑問について調べてみました。</p>
<ul><li>前回記事: <a href="https://blog.ideamans.com/2018/08/chrome68.html" target="_blank">もうSSL対応した？Chrome 68登場でかわる「ウェブサイト暗号化通信」の当たり前。バージョン70ではより警告色が強くなる。</a></li></ul>
<h2>結論として、Chromeのシェアは非常に高く、40%を占める</h2>
<p>圧倒的にシェアが高いChromeでした。今回は、弊社のランキングツール「<a href="https://ranklet.com/" target="_blank">Ranklet</a>」ウェブサイトのGoogleアナリティクスのデータを元にみてみました。Rankletはランキングウィジェットを生成するウェブサービスです。アクセスする人は、どちらかというとITリテラシーは高めの人が多いかと思います。</p>
<p>まずは、Googleアナリティクスの画面から「OSとブラウザ」の項目を見てみました。</p>
<p style="text-align: center;"><img alt="2018-08-02-ga-browser-02.jpg" src="https://blog.ideamans.com/assets/2018-08-02-ga-browser-02.jpg" width="1200" height="813" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">40%のシェアを記録したChrome。意外とSafariが多い印象も。</span></p>
<h3>シェア順位 [OSとブラウザ]</h3>
<ol><li><span style="color: #ff0000;">Chrome</span></li><li>Safari</li><li>Internet Explorer</li><li>Android Webview</li><li>Safari(in-app)</li><li>Firefox</li><li>Edge</li><li>Samsumg Internet</li><li>Android Browser</li><li>Opera</li></ol>
<p>といっても、これはOS関係なしのデータなので、デバイスは考慮されていません。デスクトップもモバイルも混ざっていて、SafariはMacOSも込み、ChromeはAndroid端末込みになります。</p>
<h2>プライマリをOS、セカンダリをブラウザにすると実態が見えてくる</h2>
<p>OS＋ブラウザの組み合わせだと、より詳細な情報が見えてきます。プライマリディメンションをOSに、セカンダリディメンションをブラウザにすると、より詳細なシェアがみえてきます。</p>
<p style="text-align: center;"><img alt="2018-08-02-ga-browser-03.jpg" src="https://blog.ideamans.com/assets/2018-08-02-ga-browser-03.jpg" width="1200" height="848" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">OS＋ブラウザだと、iOSのSafariが最もアクセスが多い。Chromeは複数のOSをすべて足すと、シェアが最もある。</span></p>
<h3>シェア順位 [プライマリ：OS ＋ セカンダリ：ブラウザ]</h3>
<ol><li>iOS + Safari</li><li><span style="color: #ff0000;">Windows + Chrome</span></li><li><span style="color: #ff0000;">Android + Chrome</span></li><li>Windows + Internet Explorer</li><li>Android + Android Webview</li><li>iOS + Safari (in-app)</li><li><span style="color: #ff0000;">Macintosh + Chrome</span></li><li>Windows + Edge</li><li>Windows + Firefox</li><li><span style="color: #ff0000;">Linux + Chrome</span></li></ol>
<p>いづれの場合でも、Chromeのシェアはすでに非常に高い状況にあります。これだけスマートフォン全盛の中で、Windows＋Chromeが２割近いシェアがあることも特筆すべきポイントです。Windowsのシェアは、まだまだあります。</p>
<p>Chromeは、デスクトップ版もスマートフォン版も、それぞれバージョンが68にアップデートされています。アーリーアップデートのブラウザなので、自動的にアップデートも行われますので、セキュリティ対策も大丈夫ですね。</p>
<h3>参考サイト情報</h3>
<ul><li><a href="https://www.tam-tam.co.jp/tipsnote/others/post13405.html" target="_blank">スマートフォン・PCのブラウザシェア調査（2018年6月分） ｜ Tips Note by TAM</a></li><li><a href="https://webrage.jp/techblog/pc_browser_share/" target="_blank"><span>WebブラウザシェアランキングTOP10(日本国内・世界) | ソフトウェアテスト・第三者検証ならウェブレッジ</span></a></li></ul>
<h2>最後に</h2>
<p>ブラウザのシェアは、以前に比べるとだいぶ種類が少なくなっています。しかし、各ブラウザのバージョンは非常に多くあり、それらの対応に苦労するケースがあることもあります。また、アプリ内でWebviewする場合も、極稀に挙動が異なるケースもあります。できるだけ最新版バージョンを推奨して、セキュリティの啓蒙も含めて進めていきましょう。SSL対応は、ぜひ進めましょう！</p>
<p> </p>

