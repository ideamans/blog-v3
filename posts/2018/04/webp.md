---
# Astrowind
title: 'WebPってなに？Googleが作った新しい画像フォーマットは、軽くてアルファチャンネルもサポート！表示高速化するなら検討してみよう！'
excerpt: 'Webで利用できる画像の種類はいくつかあります。Webで使えるというと、端的にい...'
updateDate: 2019-02-21
publishedDate: 2018-04-12
tags: 
  - webp

  - web-imaging

  - performance

author: nose
image: https://blog.ideamans.com/images/2018-04-12-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2019-02-21 17:33:30
publishedAt: 2018-04-12 12:00:00
categories: 
  - webp

  - web-imaging

  - performance

categoryLabels: 
  - WebP

  - Web画像最適化

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>Webで利用できる画像の種類はいくつかあります。Webで使えるというと、端的にいうとWebブラウザで表示できるかどうか、ということになるかと思います。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://sim.lightfile.net/webp/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','webp-simulator',,{'nonInteraction':1});"><img src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="/assets/service-webp-simulator.jpg" alt="WebP導入シュミレータ"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://sim.lightfile.net/webp/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','webp-simulator',,{'nonInteraction':1});">無料でチェック！WebP導入シュミレータ</a></p>
<p class="serviceDesc">あなたのウェブサイトをWebP対応したらどのぐらいかわるのか、無料でチェックしてみよう！チェクしたいURLを入れるだけで、30秒以内にシュミレーション！</p>
<p class="serviceLink"><a href="https://sim.lightfile.net/webp/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','webp-simulator',,{'nonInteraction':1});">https://sim.lightfile.net/webp/</a></p>
</div>
</div>
<p>(2019年2月追記) <a href="https://blog.ideamans.com/2019/02/webp-pagespeed-insights.html">こちらの記事</a>でWebPの利用と、Googleのページスピード測定ツール <a href="https://developers.google.com/speed/pagespeed/insights/?hl=ja">PageSpeed Insights</a> の関係を検証しました。<strong>平均 +3.2ポイント、最大 +22.6ポイントのスコア改善</strong>につながりました。</p>
<p> </p>
<h2>WebPは、軽くてキレイでアルファチャンネルをサポートする新しい画像フォーマット</h2>
<p><img alt="2018-04-12-ogp.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="/images/2018-04-12-ogp.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>WebPの開発は、Googleが行なっています。まずは、WikiPediaをみてみましょう。</p>
<ul><li><a href="https://ja.wikipedia.org/wiki/WebP" target="_blank">Webp - WikiPedia</a></li></ul>
<blockquote>
<p><a href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88" title="ウェブサイト">ウェブサイト</a><span>のトラフィック量軽減と表示速度短縮を目的としており、</span><a href="https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88" title="インターネット">インターネット</a><span>のWebページで広く使われている非可逆圧縮の</span><a href="https://ja.wikipedia.org/wiki/JPEG" title="JPEG">JPEG</a><span>や可逆圧縮の</span><a href="https://ja.wikipedia.org/wiki/GIF" class="mw-redirect" title="GIF">GIF</a><span>、</span><a href="https://ja.wikipedia.org/wiki/Portable_Network_Graphics" title="Portable Network Graphics">PNG</a><span>の置き換えを意図する規格である。JPEGとは異なり、非可逆圧縮でも</span><a href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB" title="アルファチャンネル">アルファチャンネル</a><span>を扱える。ただし、競合各社の思惑もあってブラウザでの採用が進んでいないため、ウエブサイトでも採用が進んでいない。</span></p>
</blockquote>
<p>もっとも特徴的なのは、<strong>非可逆圧縮でもアルファチャンネルを扱えること</strong>でしょう。これができるということは、GIFやPNGのように透過した画像を作ってもWebPで書き出せるということになります。JPGの欠点を補うことができます。</p>
<p> </p>
<h2>問題はサポートブラウザ、スマホ全盛のいま、InternetExplorerをどう考えるか</h2>
<p><strong>JPGと違い、サポートブラウザの種類が少ないのが現状</strong>です。そのため、導入する場合は、非対象ブラウザに対するアプローチを考える必要が出てきます。そのため、WebPの導入には以下の判断を求められます。</p>
<ol><li><strong>ユーザーエージェントを判定して、WebP以外の画像を表示する</strong></li><li>非対象ブラウザは切り捨てる</li></ol>
<p>サポートブラウザは、まだまだ少ないのが現状です。</p>
<ul><li><a href="https://developers.google.com/speed/webp/faq?hl=ja#which_web_browsers_natively_support_webp" target="_blank">Which web browsers natively support WebP? - WebP</a></li></ul>
<blockquote>
<p>Webmasters interested in improving site performance can easily create optimized WebP alternatives for their current images, and serve them on a targeted basis to browsers that support WebP.</p>
<ul><li>WebP lossy support
<ul><li>Google Chrome (desktop) 17+</li><li>Google Chrome for Android version 25+</li><li>Opera 11.10+</li><li>Native web browser, Android 4.0+ (ICS)</li></ul>
</li><li>WebP lossy, lossless &amp; alpha support
<ul><li>Google Chrome (desktop) 23+</li><li>Google Chrome for Android version 25+</li><li>Opera 12.10+</li><li>Native web browser, Android 4.2+ (JB-MR1)</li><li>Pale Moon 26+</li></ul>
</li><li>WebP Animation support
<ul><li>Google Chrome (desktop and Android) 32+</li><li>Opera 19+</li></ul>
</li></ul>
</blockquote>
<p>MicrosoftのInternetExplorerやEdgeは入っていません (Edgeはバージョン18から対応予定)。Firefoxも見当たりません (Firefoxはバージョン65から対応予定)。Chromeについても、iPhone版ではサポートされていません。Googleの領域にあるデバイスはサポートされていますね。<strong>現状では、このサポートブラウザの少なさがデメリット</strong>です。</p>
<ul><li><a href="https://blog.ideamans.com/2018/11/201811-webp.html" target="_blank">Firefoxは65で対応予定！2018年11月現在の WebP (ウェッピー)のブラウザ対応状況を確認してみよう。Safari対応をどうするかが課題。</a></li><li><a href="https://blog.ideamans.com/2018/08/webp-20180810.html">2018年8月現在の WebP (ウェッピー)のブラウザ対応状況を確認してみよう。WebPはJPGにかわる軽量画像フォーマット。</a></li></ul>
<h2>どうやってWebP画像をつくるの？</h2>
<h3>Photoshopで作る</h3>
<p>Webデザイナーの方は、コマンドラインよりもPhotoshopの方が利用頻度は高いと思います（最近ではgulpなどでコマンドラインを扱う人もかなり増えてきました）。PhotoshopでWebPを書き出すには、プラグインをインストールすれば可能です。利用は自己責任でお願いします。</p>
<ul><li><a href="http://telegraphics.com.au/sw/product/WebPFormat" target="_blank">WebP Photoshop Plugin | Telegraphics - Free plugins for Photoshop &amp; Illustrator...and other software</a></li></ul>
<p>なんと、MacのPhotoshopであればCS2から対応しているっぽいです！</p>
<h3>cwebpコマンドで作る</h3>
<p>コマンドラインからも作成できます。WebPはHomebrewを使うと、すぐにインストールすることができます。コマンド例はこんな感じです。</p>
<pre class="prettyprint"><code class="lang-bsh">$ cwebp [options] -q quality input.png -o output.webp</code></pre>
<p>以前コチラの記事にもWebPの使い方を書いているので、参考まで。</p>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/WebP?src=hash&amp;ref_src=twsrc%5Etfw">#WebP</a> ご存知ですか？ウェッピーと読むのですが、かわいい名前でその実力は非常に高いです。才色兼備なWebP。<a href="https://twitter.com/hashtag/JPG?src=hash&amp;ref_src=twsrc%5Etfw">#JPG</a> よりも <a href="https://twitter.com/hashtag/%E5%86%99%E7%9C%9F?src=hash&amp;ref_src=twsrc%5Etfw">#写真</a> をかるくできるので、<a href="https://twitter.com/hashtag/Web%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9?src=hash&amp;ref_src=twsrc%5Etfw">#Webパフォーマンス</a> あげるには一度検討してみましょう。<a href="https://t.co/8iiysIdJT0">https://t.co/8iiysIdJT0</a></p>
-- アイデアマンズ (@ideamans) <a href="https://twitter.com/ideamans/status/984229503827296256?ref_src=twsrc%5Etfw">2018年4月12日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<p> </p>
<h2>今の制作フローにどうやって取り込むのか？</h2>
<p>現在運用しているサイトに取り込むのには、検討すべき事項が多くあります。開発が必要になるケースもあるでしょう。<strong>最もかんたんなのは、Googleが用意している mod_pagespeed を利用すること</strong>です。このモジュールを入れることで、開発は不要になり、画像の作成も今まで通りで良くなります。</p>
<p>画像作成の枚数が増えればその分負荷は増えます。UA判定をいれればずっとブラウザのアップデートに追随する必要が出てきます。mod_pagespeedは、Apacheもnginxも出ているので、これらのウェブサーバであれば、導入が可能です。CDNが入っている場合は、master側に入れておいてmod_pagespeedが生成したファイルもCDNに乗せてしまえば問題ないでしょう。</p>
<ul><li><a href="https://developers.google.com/speed/pagespeed/module/" target="_blank">PageSpeed Module - PageSpeed Tools</a></li></ul>
<p> </p>
<h2>WebP入れるのが難しい場合、どうすればいい？</h2>
<p>どうしても入れられないケースももちろん存在するはずです。WebPの導入を考えるケースは、画像を軽くしたいというケースです。であれば、既存のJPGやPNGを軽くすることが有効です。</p>
<h3>PNGは重い。透過していなければ、JPGやPNG-8を使おう</h3>
<p>基本的に、PNGはJPGよりも重くなる傾向があります。</p>
<p>ただし、色数が少ない場合は、PNGの方が軽いです。そのため、ロゴやなにかしらの図版などは、PNGやGIFが良いでしょう。PNGにはPNG-8とPNG-24があります（PNG-32もあります）。それぞれ扱える色数が異なるので、GIFと同じPNG-8は軽いです。約1678色扱うことができるPNG-24はどうしても重いデータになります。</p>
<p>まずは、以下を確認しましょう。</p>
<ol><li>PNG画像のうち、明らかに重いデータが存在しないかどうか（約1MB以上あれば、それはウェブページの表示としては相当重い）</li><li>JPGファイルがどのくらいあり、容量がどのくらいあるか</li></ol>
<p>ウェブページで利用されているJPGファイルの数や容量は、無料のLightFileシミュレータをご利用ください。かんたんに調べることができます。</p>
<ul><li><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator</a></li></ul>
<p> </p>
<h3>LightFileは開発不要なので、導入もかんたん！作業フローもかわりません！</h3>
<p>WebPの導入は、mod_pagespeedをいれるとかんたんです。しかし、それも難しい場合もあります。そんな時は、弊社の画像最適化ツールLightFileを検討してみてください。LightFileシミュレータで出た結果と同じだけの画像最適化が行なえます。開発不要ですし、自動処理なので気にすることはもうなにもありません。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<h2>最後に</h2>
<p>いかがでしたでしょうか？WebPは本当に優れた画像フォーマットですが、まだ導入の障壁を高いかもしれません。Firefox陣営がJPGと比べてもそんなに変わらないとコメントしているのも気になります（ただ、JPGはアルファチャンネルを扱えない）。何事もチャレンジしてみて、良ければ採用するようにしましょう。まずは挑戦！</p>
<p>画像軽量化のLightFileでどのぐらい効果が出るのか興味のある方は、こちらのフォームからリクエストいただければ処理結果をレポートいたします！無料で利用できますので、お気軽に！</p>
