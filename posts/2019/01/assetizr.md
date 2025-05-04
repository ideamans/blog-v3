---
# Astrowind
title: 'Assetizrは、WindowsでもMacでも利用できる画像リサイズ・最適化ツール。JPEGからWebPに変換すると重くなる？！'
excerpt: 'Assetizrは、WindowsでもMacでも利用できる画像リサイズ・最適化ツ...'
updateDate: 2019-01-23
publishedDate: 2019-01-23
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2019-01-23-asstizr-ogp.jpeg
category: web-imaging

# カスタム
updatedAt: 2019-01-23 14:38:29
publishedAt: 2019-01-23 14:11:59
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

<p><strong>Assetizr</strong>は、WindowsでもMacでも利用できる画像リサイズ・最適化ツールです。シンプルなインターフェースで、対応する画像フォーマットも多く、使いやすいツールではないでしょうか。</p>
<p style="text-align: center;"><img alt="2019-01-23-asstizr-04.jpeg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2019-01-23-asstizr-04.jpeg" width="1280" height="609" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Mac App StoreでAssetizrをダウンロード</span></p>
<ul><li><a href="https://itunes.apple.com/de/app/assetizr/id1449126727?l=en&amp;mt=12" target="_blank">Assetizr on the Mac App Store</a></li><li><a href="https://www.microsoft.com/ja-jp/p/assetizr/9pj6j7v92n8n" target="_blank">Assetizr on Microsoft Store</a></li></ul>
<h3>対応する画像フォーマット</h3>
<ol><li>JPEG</li><li>PNG</li><li>GIF</li><li>SVG</li><li>WebP</li><li>TIFF</li><li>BMP</li></ol>
<p>ウェブ上で利用する画像フォーマットのほとんどに対応しています。</p>
<h2>JPEG / PNG / WebP で利用してみたが、少しクセがある</h2>
<p style="text-align: center;"><img alt="2019-01-23-asstizr-06.jpeg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2019-01-23-asstizr-06.jpeg" width="1375" height="768" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Assetizrの画面。シンプルで使いやすい。ドラッグアンドドロップするだけで処理が始まる。</span></p>
<p>JPEGとPNGの画像を試してみました。<strong>JPEGの最適化は、画質の粗さは気になりますが、かなり軽く</strong>なります。TinyPNGと同じような印象ですので、TinyPNGを利用されている方には問題なさそうです。</p>
<p style="text-align: center;"><img alt="2019-01-23-assettizr-01-min.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2019-01-23-assettizr-01-min.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">JPEGは色数の多い食べ物の写真。シズル感などが画質と大きく関係する。</span></p>
<p>PNGに関しては、大きな画像軽量化は期待できませんが、それでも軽くなります。PNG8などの大幅な減色（256色）にするようなタイプではなく、丁寧に最適化する感じです。JPEGには画質を大きく落とすのに対し、PNGは画質を維持している印象があります。</p>
<p>JPEGとPNG、それぞれWebPにも変換してみました。</p>
<h3>WebP変換は期待するほどの効果は難しい。</h3>
<p style="text-align: center;"><img alt="2019-01-23-assettizr-03-min.png" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2019-01-23-assettizr-03-min.png" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">PNGは猫が寝ている画像をピックアップ。毛のような繊細な画像は、画質が問われやすい。</span></p>
<p>大幅な軽量化が期待できるWebP変換は、逆にファイルサイズが増えるケースがありました。理由はよくわかりませんが、PNGと同じように、WebPについても画質を優先しているのかもしれません。</p>
<p><strong>JPEGからWebPに変換した場合、957KBから1.25MBにサイズアップ</strong>してしまいました。<strong>PNGは、1.5MBから936KBに削減</strong>ができています。ただ、WebPの軽量化としてはもの足りないと思うので、JPEG変換だけに利用するのがよい気がします。</p>
<p> </p>
<h2>画像軽量化ツール「LightFile」と比べてみよう！</h2>
<p>JPEGファイルについて、AssetizrとLightFileの処理を比べてみました。なんと、AssetizrでJPEGからWebPに変換したら、ファイルサイズが1.25MBに増えてしまいました...。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル名</th><th>ファイルサイズ</th><th>削減容量</th><th>削減割合</th></tr>
<tr>
<td>元画像(JPEG)</td>
<td style="text-align: right;">957.3KB</td>
<td style="text-align: right;">-</td>
<td style="text-align: right;">-</td>
</tr>
<tr>
<td><span style="color: #99cc00;">Assetizr JPEG最適化</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">195.9KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">761.4KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">-79%</span></td>
</tr>
<tr>
<td><span>Assetizr WebP変換</span></td>
<td style="text-align: right;">1.25MB</td>
<td style="text-align: right;">-</td>
<td style="text-align: right;">-</td>
</tr>
<tr>
<td><span style="color: #99cc00;">LightFile 容量優先</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">238.8KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">696.0KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">-74%</span></td>
</tr>
<tr>
<td>TinyPNG</td>
<td style="text-align: right;">274.6KB</td>
<td style="text-align: right;">682.7KB</td>
<td style="text-align: right;">-71%</td>
</tr>
</tbody>
</table>
<p>次に、PNGファイルについて、AssetizrとTinyPNGの処理を比べてみました。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル名</th><th>ファイルサイズ</th><th>削減容量</th><th>削減割合</th></tr>
<tr>
<td>元画像(PNG)</td>
<td style="text-align: right;">1.50MB</td>
<td style="text-align: right;">-</td>
<td style="text-align: right;">-</td>
</tr>
<tr>
<td><span style="color: #99cc00;">Assetizr PNG最適化</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">1.33MB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">174.0KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">-11%</span></td>
</tr>
<tr>
<td><span>Assetizr WebP変換</span></td>
<td style="text-align: right;">936.3KB</td>
<td style="text-align: right;">599.7KB</td>
<td style="text-align: right;">-39%</td>
</tr>
<tr>
<td>TinyPNG</td>
<td style="text-align: right;">393.7KB</td>
<td style="text-align: right;">1,142KB</td>
<td style="text-align: right;">-74%</td>
</tr>
</tbody>
</table>
<p>Assetizrは、PNGやWebPに関してはファイルサイズはあまり削減せず、JPEGに関してはかなりファイルサイズを削減していることがわかります。透過がない画像の場合は、PNGではなくJPEGにすることで、ファイルサイズはかなり軽くなります。</p>
<p> </p>
<h2>最後に</h2>
<p>ツールの処理後の画質は、必ずご自身で確認してください。AssetizrのJPEG画質は、TinyPNGよりも低いと感じます。そのため、画質を気にする人は別のツールを使うことをオススメします。ファイルサイズをとにかく軽くしたい！という方には、かなりオススメなツールです。リサイズもできるので便利だと思います。</p>
<p><strong>画像軽量化ツールのLightFileは、画質そのままでぐっと軽くなる</strong>ツールです。今回のJPEG勝負でも、Assetizrとの差はTinyPNGよりもありません。画質に関しては、LightFileはSSIM値ベースでTinyPNGよりも優れています。画質を劣化させたくないけど、ファイルサイズを軽くしたい！という方は、ぜひ下のフォームよりお問い合わせください。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
