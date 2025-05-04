---
# Astrowind
title: '画像の差分をみてみよう！変化がわかると、違いがわかる！比べてわかるクオリティと差分の関係。'
excerpt: '今回は、画像最適化した際に、実際に表示される画像にどのくらいの差分が発生している...'
updateDate: 2018-03-16
publishedDate: 2017-12-04
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2017-12-04-ogp-compare.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:42:18
publishedAt: 2017-12-04 10:41:57
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

<p>今回は、画像最適化した際に、実際に表示される画像にどのくらいの差分が発生しているのかをみてみます。<strong>注意点としては、「差分がある」＝「劣化」という捉え方ではない</strong>ということです。<strong>「劣化」はあくまで人間の目がみて感じるものであり、差分は機械的にみて違いを表しているもの</strong>となります。</p>
<h2>JPGの差分は、ImageMagickのcompareコマンドで調べる</h2>
<p>今回は、<a href="http://imagemagick.org/script/index.php" target="_blank">ImageMagick</a>のcompareコマンドで調べてみます。また、グラフィカルにわかるように、差分を画像として出力します。普段実施することはないコマンドですが、比較する時にはとても便利です。また、今回は差分の見え方がメインなので、ファイルサイズを小さくしたものを利用しています（長辺640px）</p>
<p><img alt="2017-12-04-ogp-compare.jpg" src="https://blog.ideamans.com/assets/2017-12-04-ogp-compare.jpg" width="1200" height="800" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>今回の素材は、こちらを利用させていただきました。</p>
<ul><li><a href="https://unsplash.com/photos/_0JpjeqtSyg" target="_blank">https://unsplash.com/photos/_0JpjeqtSyg</a><br><span>Photo by </span><a href="https://unsplash.com/photos/_0JpjeqtSyg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Carissa Gan</a><span> on </span><a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></li></ul>
<p>ITとピザは切っても切れない関係ですね。サラミとオリーブがいい感じです。</p>
<p> </p>
<h2>compareコマンドで比較する</h2>
<p>今回のコマンドはこちらです。<a href="https://blog.ideamans.com/mt/ImageMagick">ImageMagick</a>はものすごい高機能であり、画像ライブラリとしてはデファクトスタンダードです。</p>
<pre class="prettyprint"><code class="lang-bsh">$ compare -metric AE /path/to/origin.jpg /path/to/jpegmini.jpg /path/to/diff-jpegmini.jpg</code></pre>
<p>画像を３つ指定していますが、最後の画像パスは差分結果の画像ファイルとなります。それでは、それぞれの差分結果です。差分がある部分は赤くなり、差分がないところは白になります。</p>
<table border="0">
<tbody>
<tr>
<td><img alt="オリジナル画像" src="https://blog.ideamans.com/assets/origin.jpg" width="640" class="mt-image-none"><br>オリジナル画像<span>(</span><span>116,631Byte</span><span>)</span></td>
<td><img alt="オリジナル画像同士の比較" src="https://blog.ideamans.com/assets/diff-origin.jpg" width="640" class="mt-image-none"><br>オリジナル画像同士の比較<span><br></span></td>
</tr>
<tr>
<td><img alt="JPEGmini処理後" src="https://blog.ideamans.com/assets/jpegmini.jpg" width="640" class="mt-image-none"><br>JPEGmini処理後(66,234Byte)</td>
<td><img alt="オリジナル画像同士の比較" src="https://blog.ideamans.com/assets/diff-jpegmini.jpg" width="640" class="mt-image-none"><br>オリジナル画像との比較 (約-50KBの削減、約43%軽量化)<span><br></span></td>
</tr>
<tr>
<td><img alt="TinyPNG処理後" src="https://blog.ideamans.com/assets/tinypng.jpg" width="640" class="mt-image-none"><br>TinyPNG処理後(53,428Byte)</td>
<td><img alt="オリジナル画像同士の比較" src="https://blog.ideamans.com/assets/diff-tinypng.jpg" width="640" class="mt-image-none"><br>オリジナル画像との比較<span> (約-63KBの削減、約54%軽量化)</span></td>
</tr>
<tr>
<td><img alt="LightFIle Core画質最高" src="https://blog.ideamans.com/assets/4dc7f28ac2b038837ce07809ee45ce0c186b8876.jpg" width="640" class="mt-image-none"><br>LightFIle Core画質最高(94,087Byte)</td>
<td><img alt="オリジナル画像同士の比較" src="https://blog.ideamans.com/assets/diff-lfc-best.jpg" width="640" class="mt-image-none"><br>オリジナル画像との比較<span> (約-22KBの削減、約19%軽量化)</span></td>
</tr>
<tr>
<td><img alt="LightFIle Core画質低" src="https://blog.ideamans.com/assets/fe782501f960cd3d5805a5df42691b12c938333b.jpg" width="640" class="mt-image-none"><br>LightFIle Core画質低(58,305Byte)</td>
<td><img alt="オリジナル画像同士の比較" src="https://blog.ideamans.com/assets/diff-lfc-low.jpg" width="640" class="mt-image-none"><br>オリジナル画像との比較<span> (約-58KBの削減、約50%軽量化)</span><span><br></span></td>
</tr>
</tbody>
</table>
<p> </p>
<p>ツールごとに差分が異なることが確認できます。一番上のオリジナル画像は、オリジナル画像同士を比較しているので差分がないことがわかります。<strong>ファイル容量の削減が多い場合は、赤が多く、白の部分がくっきりと出ているのが特徴</strong>です。分類としては、画質優先型とファイル容量削減型の２パターンに分かれそうです。</p>
<ol><li>画質優先型の場合、<strong>JPEGminiやLightFIle Coreの画質最高は、白の周りがにじむように白点が存在します。</strong></li><li>容量削減優先型の場合、<strong>TinyPNGとLightFile Coreの画質低は、白の部分がくっきりと輪郭が見えます。</strong></li></ol>
<p>JPG画像は減色処理ではないので、<strong>画質はぼやけたりブロックノイズが入ってくると「劣化」という風に視覚的に判断する気がします。そして、ぼやけるよりはブロックノイズとして現れるほうが、劣化と判断しているのかもしれません。</strong></p>
<p><a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>は、<strong>quality値やSSIM値によって画質の細かく設定できるため、画質の劣化を最小限にすることができます。</strong>その上で、ファイルサイズを大きく削減できるのが特徴です。<strong>極力劣化がでないようにまんべんなく変化をしつつ、ファイル削減するところは削減するので、画質を標準よりも少し落としても、他のツールよりも劣化が少なくなるというのが大きな特徴なのです。</strong></p>
<p> </p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">https://core.lightfile.net/</a></p>
</div>
</div>
<p>無料トライアルも受付中ですので、お問い合せお待ちしてます！</p>
<p> </p>
<p> </p>
<p> </p>
