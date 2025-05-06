---
# Astrowind
title: '速いは正義！dev.toにみるウェブページ表示高速化の画像最適化手法をみてみた'
excerpt: 'ウェブページの表示高速化の第一歩は、画像の最適化だと信じています。なぜなら、ダウ...'
updateDate: 2018-03-16
publishedDate: 2017-11-16
tags: 
  - web-imaging

  - performance

author: nose
image: https://blog.ideamans.com/assets/devto01.png
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:41:03
publishedAt: 2017-11-16 11:26:19
categories: 
  - web-imaging

  - performance

categoryLabels: 
  - Web画像最適化

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>ウェブページの表示高速化の第一歩は、画像の最適化だと信じています。なぜなら、ダウンロード容量が減れば、そのページの表示も速くなるし、インターネット全体も回線に余裕ができるはず。<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>がインターネット全体の表示速度に貢献できることを信じています！</p>
<h2>dev.toの表示が爆速で、ページ遷移も待たされない</h2>
<p style="text-align: center;"><img alt="devto01.png" src="https://blog.ideamans.com/assets/devto01.png" width="1288" height="685" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">表示が爆速なdev.to</span></p>
<p><a href="https://dev.to/" target="_blank">dev.to</a>というエンジニアの広場的なサービスが話題です。というのも、その表示がハンパなく速い！という。自分もアカウント登録（Twitter認証で）したり、ページ閲覧や投稿を試してみましたが、すべてのページの表示と遷移が爆速でした。AMPよりも速いんじゃないか？！と思えるほどで、社内Slackでもちょっとワイワイガヤガヤしてました。</p>
<ul><li><a href="https://dev.to/" target="_blank"><span>The DEV Community</span></a></li><li><a href="https://www.itmedia.co.jp/news/articles/1711/15/news133.html" target="_blank"><span>「爆速すぎて笑う」　表示速度が"異常な"Webサイト「dev.to」　その仕組みは</span></a></li></ul>
<p> </p>
<h2><span>どうしてページ表示が爆速なのか</span></h2>
<p><span>dev.toのエンジニアの方が、少しタネ明かしをしています。詳しくはそちらを見ていただくのが間違いないです。</span></p>
<ul><li><a href="https://dev.to/ben/making-devto-insanely-fast" target="_blank"><span>Making dev.to insanely fast</span></a></li></ul>
<p><span>弊社では、画像の最適化をどのようにしているのかを見ていきます。画像は最適化しましょう！</span></p>
<p> </p>
<h2><span><span>Cloudinaryというクラウドの画像管理サービス</span></span></h2>
<p style="text-align: center;"><span><span><img alt="cloudinary01.png" src="https://blog.ideamans.com/assets/cloudinary01.png" width="1288" height="685" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">クラウドの画像管理サービス Cloudinary</span></span></span></p>
<p><span>画像の最適化には、<a href="https://cloudinary.com/" target="_blank">Cloudinary</a>というサービスが採用されています。</span></p>
<ul><li><span><a href="https://cloudinary.com/" target="_blank"><span>Cloudinary - Cloud image service, upload, storage &amp; CDN</span></a><br></span></li></ul>
<p>2012年の<a href="https://jp.techcrunch.com/" target="_blank">TechCrunch</a>の記事では、<a href="https://www.adobe.com/jp/products/photoshop/beginner.html" target="_blank">Photoshop</a>いらず！とまでいわれているサービスでした。<strong>サイズ変更やトリミング、角丸処理などもクラウド上で出来ちゃう</strong>ようです。さらにAPIが充実してて、今は<a href="https://www.heroku.com/" target="_blank">Heroku</a>の拡張機能に対応しているとのこと。</p>
<ul><li><a href="https://jp.techcrunch.com/2012/06/01/20120531goodbye-photoshop-hello-cloudinary/" target="_blank">さらばPhotoshop。Cloudinaryはクラウドで画像を変換する</a></li></ul>
<p>使用感などは、フリーミアムのアカウントが取得できるようなので、あとで試してみよっと。</p>
<p> </p>
<h2>dev.toでは、ブラウザごとに配信する画像が最適化されている</h2>
<p>先日の日経電子版の高速化でもありましたが、こちらもWebPが採用されています。</p>
<ul><li><a href="https://blog.ideamans.com/2017/11/webp.html" target="_blank">日経電子版が爆速になったということで、その対応策にあるWebP（ウェッピー）について、JPGと比べてどのくらい軽くなるのか試してみた</a></li></ul>
<p>手元のMacで確認したところ、以下のような結果が得られました。</p>
<h4>Google Chromeで閲覧</h4>
<ul><li>WebP画像が配信される</li><li>配信された画像は、約5KBだった</li></ul>
<h4>Safariで閲覧</h4>
<ul><li>JPG画像が配信される</li><li>配信された画像は、約7KBだった</li></ul>
<p>このように、WebPに対応しているブラウザでの閲覧は、WebPが配信されるようです。たった数KBでも最適化して配信するというこだわりは、本当に素晴らしいですね！</p>
<p>動的なページであればアップロードした画像を、API経由で最適化した画像にして戻してもらうというのが可能になります。JavascriptのAPIがあれば、静的ページでも最適化できちゃいますね。このあたりはAPIドキュメントを確認しましょう。</p>
<ul><li><a href="https://cloudinary.com/documentation/image_optimization" target="_blank"><span>Image Optimization | Cloudinary</span></a></li></ul>
<p><span>JavascriptやjQueryのAPIも用意されていました。</span></p>
<pre class="prettyprint"><code class="lang-js">cl.imageTag('woman.jpg', {quality: "auto"}).toHtml();</code></pre>
<pre class="prettyprint"><code class="lang-js">$.cloudinary.image("woman.jpg", {quality: "auto"})</code></pre>
<p>以下のAPIが用意されているようです。もう、なんでもできそうですね。</p>
<ol><li>URLベース</li><li>Ruby</li><li>PHP</li><li>Python</li><li>Node.js</li><li>Java</li><li>Javascript</li><li>jQuery</li><li>React</li><li>Angular</li><li>.Net</li><li>Android</li></ol>
<p> </p>
<p>弊社の<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>も、画像の最適化ではWebPといい勝負ができているので、サイト構造を変更しないですぐに画像を最適化したい！という方にはオススメです！AWS Lambda版のほか、オンプレミスサーバ（オンプレ）版も開発中です！無料のトライアルも受付中です！</p>
<p> </p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">https://core.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<ul><li><a href="https://core.lightfile.net/pages/contact.html" target="_blank"><span>トライアルのお申込み・お問い合せ | 自動でJPEG画像のファイル容量を削減するLightFire Core</span></a></li></ul>
<p> </p>
<p><span>ウェブページの表示を高速化して、快適な閲覧環境を整えましょう！</span></p>
<p> </p>
