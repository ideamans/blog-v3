---
# Astrowind
title: '画像を軽量化しよう！WordPressの人気画像最適化プラグイン「EWWW Image Optimizer」は、有料APIを利用すると本気になる？[JPGダイエット対決 vol.02]'
excerpt: '今回はJPGダイエット対決 vol.02 ということで、WordPressの人気...'
updateDate: 2018-07-03
publishedDate: 2017-11-20
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2017-11-17-wp-ewww-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2018-07-03 20:02:13
publishedAt: 2017-11-20 11:08:07
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

<p>今回は<strong>JPGダイエット対決 vol.02</strong> ということで、<a href="https://ja.wordpress.org/" target="_blank">WordPress</a>の人気プラグインとの勝負になります。<a href="https://ja.wordpress.org/" target="_blank">WordPress</a>は利用者が多いので、みなさん利用しているのではないでしょうか？対決シリーズの記事はこちら。</p>
<ul><li><a href="https://blog.ideamans.com/2017/11/jpg-diet-jpegoptim.html">マルチな環境で動作する"jpegoptim"との対決は、劣化の最適化が決め手！[JPGダイエット対決 vol.01]</a></li><li><a href="https://blog.ideamans.com/2017/11/wp-ewww-image-optimizer.html">WordPressの人気画像最適化プラグイン「EWWW Image Optimizer」は、有料APIを利用すると本気になる？[JPGダイエット対決 vol.02]</a></li><li><a href="https://blog.ideamans.com/2017/11/wp-tinypng.html">最強の相手はTinyPNG。そのWordPressプラグインの実力は？「Compress JPEG &amp; PNG images」を試してみた。[JPGダイエット対決 vol.03]</a></li><li><a href="https://blog.ideamans.com/2017/12/jpegmini.html">お手軽！かんたん！PCにインストールする「JPEGmini」アプリは画質を優先した画像の最適化が得意！[JPGダイエット対決 vol.04]</a></li></ul>
<p> </p>
<h2>今回の対戦相手は、EWWW Image Optimize というWordPress人気プラグイン</h2>
<p><a href="https://ja.wordpress.org/" target="_blank">WordPress</a>には、画像最適化プラグインがいろいろとあります。今回は昔からあるプラグインで現在のバージョンは、4.0.2。メジャーバージョンが4ともなると、かなりのプラグインということがなんとなくわかります。</p>
<ul><li><a href="https://wordpress.org/plugins/ewww-image-optimizer/" target="_blank"><span>EWWW Image Optimizer -- WordPress Plugins</span></a></li></ul>
<p>無償でも利用でき、さらに機能を求める場合は、有料のプランが存在します。ご利用用途にあったプランを選びましょう。<strong>今回は、有料のAPIを利用せず、無償の場合での計測</strong>となります。</p>
<p> </p>
<h2>プラグインをインストールする</h2>
<p><span style="color: #ff0000;">※インストールや、それによる影響などは自己責任でお願いします！※</span></p>
<p><a href="https://ja.wordpress.org/" target="_blank">WordPress</a>のプラグイン追加に関しては、詳しい人に聞いてください。メチャメチャ簡単です。</p>
<p>プラグインの検索窓に、「<strong>EWWW</strong>」と入力すると、候補のプラグインが表示されます。クラウド版ではないほうをインストールします。</p>
<p><img alt="wp-ewww02.jpg" src="https://blog.ideamans.com/assets/wp-ewww02.jpg" width="1162" height="680" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">「今すぐインストール」ボタンをクリックすると、自動的にインストールされます。あとは、プラグインの有効化などを行います。</p>
<p> </p>
<h2>効果測定した結果</h2>
<p>今回の素材はこちら！ホテルのサイトや、不動産サイトに利用されていそうなタイプです。</p>
<ul><li><a href="https://unsplash.com/photos/iAftdIcgpFc" target="_blank">https://unsplash.com/photos/iAftdIcgpFc</a></li></ul>
<p><img alt="wp-ewww01.png" src="https://blog.ideamans.com/assets/wp-ewww01.png" width="1162" height="680" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">オリジナル画像から、長辺を2400pxにリサイズしたものを元画像としました。メタデータなどは意図的にはいじっていません。</p>
<p> </p>
<h3>EWWW Image Optimizeプラグイン導入前</h3>
<pre class="prettyprint"><code class="lang-bsh">$ ll
total 10144
drwxr-xr-x  9 nose  staff      306 11 17 14:41 .
drwxr-xr-x  3 nose  staff      102 11 17 14:28 ..
-rw-r--r--  1 nose  staff     3918 11 17 14:41 neonbrand-381374-resize2400-100x100.jpg
-rw-r--r--  1 nose  staff   173968 11 17 14:41 neonbrand-381374-resize2400-1024x683.jpg
-rw-r--r--  1 nose  staff     7173 11 17 14:41 neonbrand-381374-resize2400-150x150.jpg
-rw-r--r--  1 nose  staff   515014 11 17 14:41 neonbrand-381374-resize2400-2000x1200.jpg
-rw-r--r--  1 nose  staff    16805 11 17 14:41 neonbrand-381374-resize2400-300x200.jpg
-rw-r--r--  1 nose  staff   100130 11 17 14:41 neonbrand-381374-resize2400-768x512.jpg
-rw-r--r--  1 nose  admin  4365922 11 17 14:41 neonbrand-381374-resize2400.jpg</code></pre>
<p> </p>
<p>元画像は、約4MBとなります。</p>
<p> </p>
<h3>EWWW Image Optimizeプラグインインストール後</h3>
<pre class="prettyprint"><code class="lang-bsh">$ ll
total 9264
drwxr-xr-x  9 nose  staff      306 11 17 14:43 .
drwxr-xr-x  3 nose  staff      102 11 17 14:28 ..
-rw-r--r--  1 nose  staff     3543 11 17 14:43 neonbrand-381374-resize2400-100x100.jpg
-rw-r--r--  1 nose  staff   166396 11 17 14:43 neonbrand-381374-resize2400-1024x683.jpg
-rw-r--r--  1 nose  staff     6738 11 17 14:43 neonbrand-381374-resize2400-150x150.jpg
-rw-r--r--  1 nose  staff   492636 11 17 14:43 neonbrand-381374-resize2400-2000x1200.jpg
-rw-r--r--  1 nose  staff    15881 11 17 14:43 neonbrand-381374-resize2400-300x200.jpg
-rw-r--r--  1 nose  staff    95384 11 17 14:43 neonbrand-381374-resize2400-768x512.jpg
-rw-r--r--  1 nose  staff  3950970 11 17 14:43 neonbrand-381374-resize2400.jpg</code></pre>
<p> </p>
<p>わかりやすく表にまとめました。ファイルサイズの単位はB（バイト）です。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル名</th><th>導入前</th><th>導入後</th><th>削減割合</th></tr>
<tr>
<td>サムネイル100x100</td>
<td style="text-align: right;">3,918</td>
<td style="text-align: right;">3,543</td>
<td style="text-align: right;">約10%</td>
</tr>
<tr>
<td>サムネイル150x150</td>
<td style="text-align: right;">7,173</td>
<td style="text-align: right;">6,738</td>
<td style="text-align: right;">約6%</td>
</tr>
<tr>
<td>サムネイル300x200</td>
<td style="text-align: right;">16,805</td>
<td style="text-align: right;">15,881</td>
<td style="text-align: right;">約5.5%</td>
</tr>
<tr>
<td>サムネイル768x512</td>
<td style="text-align: right;">100,130</td>
<td style="text-align: right;">95,384</td>
<td style="text-align: right;">約5%</td>
</tr>
<tr>
<td>サムネイル1024x683</td>
<td style="text-align: right;">173,968</td>
<td style="text-align: right;">166,396</td>
<td style="text-align: right;">約4.5%</td>
</tr>
<tr>
<td>サムネイル2000x1200</td>
<td style="text-align: right;">515,014</td>
<td style="text-align: right;">492,636</td>
<td style="text-align: right;">約4.4%</td>
</tr>
<tr>
<td>元画像</td>
<td style="text-align: right;">4,365,922</td>
<td style="text-align: right;">3,950,970</td>
<td style="text-align: right;">約10%</td>
</tr>
</tbody>
</table>
<p> </p>
<p><a href="https://ja.wordpress.org/plugins/ewww-image-optimizer/" target="_blank">EWWW Image Optimize</a>で処理をした結果、<strong>全体的に約5〜10%ほどの軽量化</strong>が行われています！1割でも軽くなると、若干ですが体感できるかもしれない速度改善が見込めます。</p>
<p> </p>
<h2>プラグイン導入後の画像にLightFile Coreの処理をかけて比較</h2>
<p>では、プラグインの画像最適化処理が入った後の画像に対して、<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>の処理をかけてみます。<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>は、細かい設定ができますが、ある一定以下のファイルサイズに対しては処理を行わないという仕様があるため、もともとファイルサイズが小さいサムネイル画像には処理をスキップしているのがわかります。</p>
<p>こちらも、わかりやすく表にまとめました。ファイルサイズの単位はB（バイト）です。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル名</th><th>導入前</th><th>導入後</th><th>削減割合</th><th>LFC処理後</th><th>LFC処理後の削減割合</th></tr>
<tr>
<td>サムネイル100x100</td>
<td style="text-align: right;">3,918</td>
<td style="text-align: right;">3,543</td>
<td style="text-align: right;">約10%</td>
<td style="text-align: right;">3,543</td>
<td style="text-align: right;">0%</td>
</tr>
<tr>
<td>サムネイル150x150</td>
<td style="text-align: right;">7,173</td>
<td style="text-align: right;">6,738</td>
<td style="text-align: right;">約6%</td>
<td style="text-align: right;">6,738</td>
<td style="text-align: right;">0%</td>
</tr>
<tr>
<td>サムネイル300x200</td>
<td style="text-align: right;">16,805</td>
<td style="text-align: right;">15,881</td>
<td style="text-align: right;">約5.5%</td>
<td style="text-align: right;">15,881</td>
<td style="text-align: right;">0%</td>
</tr>
<tr>
<td>サムネイル768x512</td>
<td style="text-align: right;">100,130</td>
<td style="text-align: right;">95,384</td>
<td style="text-align: right;">約5%</td>
<td style="text-align: right;">95,384</td>
<td style="text-align: right;">0%</td>
</tr>
<tr>
<td>サムネイル1024x683</td>
<td style="text-align: right;">173,968</td>
<td style="text-align: right;">166,396</td>
<td style="text-align: right;">約4.5%</td>
<td style="text-align: right;" class="text-white bg-success">129,833</td>
<td style="text-align: right;" class="text-white bg-success">約22%</td>
</tr>
<tr>
<td>サムネイル2000x1200</td>
<td style="text-align: right;">515,014</td>
<td style="text-align: right;">492,636</td>
<td style="text-align: right;">約4.4%</td>
<td style="text-align: right;" class="text-white bg-success">296,160</td>
<td style="text-align: right;" class="text-white bg-success">約40%</td>
</tr>
<tr>
<td>元画像</td>
<td style="text-align: right;">4,365,922</td>
<td style="text-align: right;">3,950,970</td>
<td style="text-align: right;">約10%</td>
<td style="text-align: right;" class="text-white bg-success">427,567</td>
<td style="text-align: right;" class="text-white bg-success">約89%</td>
</tr>
</tbody>
</table>
<p> </p>
<p>小さいサムネイル画像には処理をスキップしています。768px以上のサムネイル画像から処理をかけています。大きなファイルサイズほど、しっかりと削減しているのがわかります。<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>に限りませんが、<strong>画像最適化ツールの多くは、ファイルサイズが大きいものに対して削減割合が高くなる傾向</strong>があります。今回の場合、<strong>元画像＋EWWW Imgae Optimize で処理した画像から、約89%もの削減</strong>を行っています。<strong>9割もファイル容量が減ると、体感速度は段違いに速く</strong>なります。</p>
<p>ファイルサイズが大きいものほど、ウェブページの表示速度には影響をおよぼすものです。このあたりは人の手をかけることなく自動で処理を行うことで、漏れがなく画像の最適化ができるようになります。</p>
<p> </p>
<h2>最後に</h2>
<p><a href="https://ja.wordpress.org/plugins/ewww-image-optimizer/" target="_blank">EWWW Image Optimize</a>の有料APIの実力は、「<strong>最大80％の圧縮を実現する API キーを入手し、品質を確認してください。</strong>」というテキストリンクがプラグイン画面に表示されていますので、この通りなら素晴らしい結果が期待できそうですね。すでにこのプラグインを入れている方は、より効果を出すために有料のAPIプランを申し込むのがよさそうです。</p>
<p>料金プランは、期間と処理枚数で異なっています。ファイル数が無制限というわけではないので、どのくらいの画像ファイルがあるのかどうか、一度調べたほうがよいです。</p>
<ul><li>期間・・・月額、先払い</li><li>処理枚数・・・プランによる</li></ul>
<p>詳細はこちらをご覧ください。</p>
<ul><li><a href="https://ewww.io/plans/" target="_blank"><span>Plans &amp; Pricing - EWWW Image Optimizer</span></a></li></ul>
<p> </p>
<p>すでに<a href="https://ja.wordpress.org/plugins/ewww-image-optimizer/" target="_blank">EWWW Image Optimize</a>を入れていて、<strong>もっとファイルを軽量化した！とか、まだ軽量化に取り掛かっていない！という方は、最小限の劣化・最大限のファイルサイズの削減ができる<a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>も検討してみてください！トライアルは無料でお申し込みいただけます！</strong></p>
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
<p>画像の最適化を行って、<span>快適な閲覧環境を整えましょう！</span></p>
<p> </p>
<p> </p>
