---
# Astrowind
title: '表示サイズごとにファイルサイズを比較！画像最適化は、表示サイズと画質調整が重要！'
excerpt: '画像の表示サイズが大きければ、その分ファイルサイズが大きくなる。これは、色数が2...'
updateDate: 2019-02-19
publishedDate: 2018-06-18
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-06-18-imagesize-jpeg-png-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2019-02-19 00:23:05
publishedAt: 2018-06-18 13:00:00
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

<p>画像の表示サイズが大きければ、その分ファイルサイズが大きくなる。これは、色数が256色より多い画像であればたいていはそうなります。今回も、JPEGとPNGのファイルサイズの違いについて、調べてみました。</p>
<h2>画像の表示サイズにかかわらず、Photoshopから書き出したJPEG最高画質でも1.4倍も差がある</h2>
<p style="text-align: center;"><img alt="2018-06-18-imagesize-jpeg-png-ogp.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-06-18-imagesize-jpeg-png-ogp.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">今回の比較画像は美味しそうなピザ。食べ物の画像、はシズル感が損なわれないようにすることが重要。</span></p>
<p>結果としては、画像の表示サイズが異なっても、その割合に大きな変化はみられませんでした。<strong>JPEGの最高画質と比べ、PNGの方が約1.4倍ほどファイルサイズが大きく</strong>なります。</p>
<p>表示サイズが大きな場合ほど、そのファイル容量は肥大します。<strong>大きな画像では約3MBもの差</strong>がありました。サムネイル画像程度であれば、今回のケースで40KBほどの差があります。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>画像(長辺のサイズ)</th><th>2400px</th><th>1200px</th><th>600px</th><th>300px</th></tr>
<tr>
<td>JPEG最高画質</td>
<td style="text-align: right;">3,855KB</td>
<td style="text-align: right;">1,234KB</td>
<td style="text-align: right;">364KB</td>
<td style="text-align: center;">100KB</td>
</tr>
<tr>
<td>JPEG高画質</td>
<td style="text-align: right;">1.926KB</td>
<td style="text-align: right;">652KB</td>
<td style="text-align: right;">197KB</td>
<td style="text-align: center;">57KB</td>
</tr>
<tr>
<td>PNG最高画質</td>
<td style="text-align: right;"><span style="color: #ff0000;">7.094KB</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">1,970KB</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">537KB</span></td>
<td style="text-align: center;"><span style="color: #ff0000;">141KB</span></td>
</tr>
<tr>
<td>LightFile標準画質</td>
<td style="text-align: right;"><span style="color: #99cc00;">888KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">484KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">140KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">40KB</span></td>
</tr>
</tbody>
</table>
<p>比較対象は、それぞれ以下の様になっています。</p>
<ol><li>JPEG最高画質・・・PhotoshopのWeb用に書き出しで、JPEG画質100</li><li>JPEG高画質・・・PhotoshopのWeb用に書き出しで、JPEG画質80</li><li>PNG最高画質・・・PhotoshopのWeb用に書き出しで、PNG-24</li><li>LightFile標準画質・・・JPEG最高画質のものを、LightFile標準画質で処理</li></ol>
<h2>画像の表示サイズごとのファイルサイズの差</h2>
<p>Photoshopでは書き出す際に、2アップや4アップでプレビューすると画質とファイルサイズを確認することができて便利です。</p>
<p style="text-align: center;"><img alt="2018-06-18-imagesize-jpeg-png01.png" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-06-18-imagesize-jpeg-png01.png" width="1236" height="756" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">長辺が2400pxの場合。右下のPNGはなんと7MBも。</span></p>
<p style="text-align: center;"><img alt="2018-06-18-imagesize-jpeg-png02.png" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-06-18-imagesize-jpeg-png02.png" width="1235" height="750" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">長辺が1200pxの場合。JPEGの最高画質でも1MBを超えてしまう。</span></p>
<p style="text-align: center;"><img alt="2018-06-18-imagesize-jpeg-png03.png" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-06-18-imagesize-jpeg-png03.png" width="1235" height="753" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">長辺が600pxの場合。スマホではこのサイズがディスプレイのフルサイズ表示に近いかも。</span></p>
<p style="text-align: center;"><img alt="2018-06-18-imagesize-jpeg-png04.png" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-06-18-imagesize-jpeg-png04.png" width="1235" height="754" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">長辺が300pxの場合。記事の挿絵などに利用されることが多いサイズですが、100KBを超えるので枚数次第では無視できない容量。</span></p>
<h2>LightFileシミュレータで、JPEG最高画質を処理してみる</h2>
<p>弊社の画像最適化ツールで、Photoshopから書き出した最高画質の画像を、標準品質で処理してみました。LightFileは画質評価指数SSIM値を利用して処理をするので、画質を落とさずにファイルサイズを軽量化してくれます。</p>
<p style="text-align: center;"><img alt="2018-06-18-imagesize-jpeg-png05.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-06-18-imagesize-jpeg-png05.jpg" width="1280" height="1215" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">1が長辺300pxの画像、その下に600px、1200px、2400pxと続く。</span></p>
<p>一番下の4をみると、<strong>JPEG最高画質の画像が3.86MB</strong>となっています。</p>
<p><strong>LightFileでは、標準画質で-3.01MBの削減を行っており、結果として888KB</strong>になっています。<strong>削減割合としては78%もの削減ができています。</strong>画質のコントロールはとても重要であり、劣化しすぎると印象が悪くなってしまいます。<strong>画質の劣化を極力行わず、ファイルサイズを最大限まで引き下げることができれば、画像最適化は完璧にできている</strong>と言えます。</p>
<h3>JPEGの最適化・軽量化にはLightFileがおすすめ</h3>
<p>JPEG画像はツールを使うことで、さらに軽くすることができます。弊社のLightFileなら、画質をキレイに保ったまま、ファイルサイズを軽くすることが可能です。無料のシミュレータを利用して、どのぐらい軽くなるのか、せひ試してみてください。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://simulator.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="/images/service-simulator.jpg" alt="LightFile Simulator β版"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator β版</a></p>
<p class="serviceDesc">無料で使える画像最適化チェックシミュレータ。チェック結果がレポートになるので、URLを共有すればみんなでみれる。</p>
<p class="serviceLink"><a href="https://simulator.lightfile.net/" target="_blank">https://simulator.lightfile.net/</a></p>
<p> </p>
</div>
</div>
<h2>最後に</h2>
<p>PNGはとても優れた画像形式であり、汎用性も非常に高いです。しかしその分、ファイルサイズが重くなってしまうケースが多くあります。まずは、管理されているウェブサイトがどのような構成になっているのかを確認して、画像最適化を一歩づつ進めていきましょう。</p>
<p>画像最適化をすることで、ウェブサイトの表示は高速化し、不要な転送量を抑えることができます。</p>
<p> </p>
