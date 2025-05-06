---
# Astrowind
title: '60%以上の軽量化も！iPhoneで撮影した風景写真を、LightFile CoreでJPGダイエットしてみた'
excerpt: 'だいぶ東京も寒くなってきましたね。北海道ではもう雪が降ったとか。今年は釧路が最初...'
updateDate: 2018-03-16
publishedDate: 2017-10-18
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/recompress-low.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:38:08
publishedAt: 2017-10-18 10:51:31
categories: 
  - web-imaging

  - lightfile

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

authorId: nose
subTheme: 
recommended: false
---

<p>だいぶ東京も寒くなってきましたね。北海道ではもう雪が降ったとか。今年は釧路が最初の雪が降った場所みたいです。雪景色の風景写真も、自然の厳しさがあっていいですよね。</p>
<p>写真撮影はもっぱらiPhoneが多いですが、気合入れる時はデジイチを使っています。コンデジもあるけど、なかなか出番がない。カメラは楽しいですよね！</p>
<h2>テーマ「JPGダイエットしよう！」</h2>
<p><img alt="recompress-low.jpg" src="https://blog.ideamans.com/2017/10/recompress-low.jpg" width="1200" height="900" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>さて今回は、写真（JPG）を軽量化したいと思います。JPGダイエットする画像はこちらの写真。弊社のサービスと、他の競合サービスとの比較結果も混ぜてレポートします。<strong>レッツJPGダイエット！</strong></p>
<p> </p>
<h2>どんなメリットがあるの？</h2>
<p><strong>JPGダイエット</strong>すると、４つのメリットを得ることができます。</p>
<ol><li>ウェブページの表示が早くなる</li><li>サーバの転送量が少なくなる</li><li>同時アクセスに効果がある</li><li>サイトで設定しているコンバージョンがあがる？</li></ol>
<p> </p>
<h2>どうしてJPGダイエットするとそうなるの？</h2>
<p>一つ一つ説明していきます。</p>
<h3>1. ウェブページの表示が早くなる</h3>
<p>これは、ファイルサイズが軽くなるので、ダウンロードする容量が減るためです。容量が少なければダウンロードも早く終わります。そう、ギガも減らなくなります。ギガ、重要。</p>
<h3>2. サーバの転送量が少なくなる</h3>
<p>ファイルが軽くなるので、その分サーバからの転送量も減ります。クラウドの場合、専用線とかじゃないので転送量での課金が多いですよね。人気が高いモンスター級のサイトだと、転送量も半端なさそうです。転送料もその分高そう。</p>
<h3>3. 同時アクセスに効果がある</h3>
<p>ファイルが軽くなると、サーバのプロセスが処理する時間も少なくなります。けっこう重い画像だとプロセスを長く使ってしまうので、瞬間的にアクセスが増えると、プロセス数がMAXになっちゃうこともありますよね。サーバチューニングも大事ですが、そもそもファイルが軽い事が重要です。</p>
<h3>4. サイトで設定しているコンバージョンがあがる？</h3>
<p>コンバージョンが上がるといいきれないですが、上記のように同時アクセスにも強くなるし、ページがサクサク表示される方が離脱率も減ります。コンテンツや商材がよければ、上記のメリットでコンバージョンが上がるのではないでしょうか。</p>
<p> </p>
<h2>JPGダイエットしようと思ったきっかけ</h2>
<p>もともとは、瞬間的なアクセス過多でサイトが見れなくなることがありました。画像もふんだんに利用しているサイトだったので、インフラ増強（CDNや画像サーバたてるなど）も視野に入れつつ、テキストファイルのminify化や画像の圧縮などを行って、最適化しようとしたのがきっかけです。</p>
<p> </p>
<h2>JPGダイエットしてみた結果</h2>
<p>今回は、弊社の<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>と、人気サービスの<a href="https://www.jpegmini.com/" target="_blank">JpegMini</a>、<a href="https://tinypng.com/" target="_blank">TinyPNG</a>の軽量化の比較を行ってみました。先に結果からいうと、<a href="https://tinypng.com/" target="_blank">TinyPNG</a>の軽量化もすごいけど、設定次第で<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>のがさらに軽くなりました。</p>
<p>こちらのグラフにそれぞれの削減結果を乗せています。<a href="https://www.jpegmini.com/" target="_blank">JpegMini</a>とTinyPNGは画質設定ができないので、それぞれ一回処理をしたもの。<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>は画質設定ごとに測定しています。</p>
<p><img alt="hikaku-graph.jpg" src="https://blog.ideamans.com/2017/10/hikaku-graph.jpg" width="763" height="418" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><img alt="hikaku-table.png" src="https://blog.ideamans.com/2017/10/hikaku-table.png" width="652" height="210" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p><a href="https://www.jpegmini.com/" target="_blank">JpegMini</a>と<a href="https://tinypng.com/" target="_blank">TinyPNG</a>を比べると、<a href="https://tinypng.com/" target="_blank">TinyPNG</a>の方がファイル容量が削減されています。すごいですね、<a href="https://tinypng.com/" target="_blank">TinyPNG</a>。 <a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>は、最高画質と高画質では、ファイル容量削減はされませんでした。標準画質では<a href="https://www.jpegmini.com/" target="_blank">JpegMini</a>よりは削減しているものの、<a href="https://tinypng.com/" target="_blank">TinyPNG</a>よりは削減していません。 低画質では、<a href="https://tinypng.com/" target="_blank">TinyPNG</a>よりもファイル容量を削減していますね。</p>
<p><strong>LFC低画質　＜　TinyPNG　＜　LFC標準画質　＜　JpegMini　という結果になりました！</strong></p>
<p>今回処理したファイルの結果は、こちらのZIPファイルにまとめていますので、ダウンロードして確認することができます。元画像と、それぞれ処理したファイルが入っていますので、画質も比較することが可能です。やっぱり、ファイルサイズが軽いものは、ちょっと違いがあります。でも、ほぼ見た目変わらないレベルです。</p>
<ul><li><a href="https://www.ideamans.com/_mautic/asset/3:jpgdietzip" target="_blank" ga="" send="" event="" download="" zip="" jpgdiet="" 1="">集計に利用したファイル（約1.9MB）</a></li></ul>
<p> </p>
<h2>JPGダイエットした結果</h2>
<p>今回はファイル容量削減にのみ焦点を当てています。画質との兼ね合いがあるので、単純にファイル容量が軽いことがよいわけではありません（ここ注意）。 <a href="https://www.jpegmini.com/" target="_blank">JpegMini</a>、<a href="https://tinypng.com/" target="_blank">TinyPNG</a>、<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>と、それぞれ画質が劣化しないわけではないので、試してみてから利用するようにしましょう。<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>のトライアル申込は、こちらからどうぞ。</p>
<ul><li><a href="https://core.lightfile.net/pages/contact.html" target="_blank">LightFile Coreトライアル申込</a></li></ul>
<p> </p>
<h2>JPGダイエットした結果得られたメリット</h2>
<p>繰り返しになりますが、写真の軽量化であるJPGダイエットを行うと、みなさんにとって４つのメリットが得られます。</p>
<ol><li>ウェブページの表示が早くなる</li><li>サーバの転送量が少なくなる</li><li>同時アクセスに効果がある</li><li>サイトで設定しているコンバージョンがあがる？</li></ol>
<p>JPGダイエットをやらない理由がないですね！</p>
<p> </p>
<h2>まずはやってみよう！</h2>
<p>まずは、<a href="https://www.jpegmini.com/" target="_blank">JpegMini</a>も<a href="https://tinypng.com/" target="_blank">TinyPNG</a>も<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>もお試しができるようになっています。必ず画質チェックして、どのサービスを利用するのか判断するようにしましょう。また、ブツ撮りの場合やスタジオ撮影、レタッチ作業などのフローに組み込む場合は、作業フローに滞りなく組み込めるものがいいですね。 <a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>は、ディレクトリに画像をおくだけで自動で処理しますので、今までの作業フローをかえることなくJPGダイエットができちゃいます！</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">https://core.lightfile.net/</a></p>
</div>
</div>
<p>それではまた！</p>
<h4>参考URL</h4>
<ul><li><a href="https://core.lightfile.net/" target="_blank">LightFile Core</a></li><li><a href="https://www.jpegmini.com/" target="_blank">JpegMini</a></li><li><a href="https://tinypng.com/" target="_blank">TinyPNG</a></li></ul>
<p> </p>
