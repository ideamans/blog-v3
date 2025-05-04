---
# Astrowind
title: '2018年8月現在の SVGのブラウザ対応状況を確認してみよう。SVGは透過PNGも変換できる軽量画像フォーマット。'
excerpt: '透過PNGも変換できる軽量な画像フォーマットのSVG (Scalable Vec...'
updateDate: 2018-08-28
publishedDate: 2018-08-28
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-08-27-png-svg-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2018-08-28 10:23:05
publishedAt: 2018-08-28 07:00:00
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

<p>透過PNGも変換できる軽量な画像フォーマットのSVG (<span>Scalable Vector Graphics</span>) について、2018年8月27日時点でのブラウザ対応状況を調べてみました。</p>
<p><img alt="2018-08-27-svg-01.jpg" src="https://blog.ideamans.com/assets/2018-08-27-svg-01.jpg" width="1280" height="623" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p style="text-align: center;"><span style="color: #888888;">各ブラウザでも、最新版であればSVGはサポートされている。filterなどは一部未対応のブラウザも。</span></p>
<p>Can I use... でみてみると、基本的なSVGのサポートは、ほぼすべてのブラウザで対応しているのがわかります。IE11でもサポートされているので、導入に対する閾値は低い状況です。</p>
<ul><li><a href="https://caniuse.com/#search=svg" target="_blank"><span>SVG | Can I use... Support tables for HTML5, CSS3, etc</span></a></li></ul>
<p><span>現状、そこまで多くのウェブサイトがSVGやWebPを利用していないのには、技術的な障壁の影響が多いと考えられます。WebPについては、まだブラウザの対応が柔軟ではなく、iOSで表示できないのは致命的です。SVGについては、WebデザイナーさんのデファクトスタンダードのツールであるPhotoshopからSVGに書き出すのがスムーズにできないためでしょう。Illistrator からはSVGが書き出せますが、Photoshopからは書き出せません。</span></p>
<p><span>もちろん、Photoshopで全くできないという訳ではなく、<strong>「書き出し」＞「書き出し形式」からSVGを選択することで書き出しが可能</strong>です。通常の書き出しフローではないので、手間がかかってしまいます。</span></p>
<h3><span>JPGでは表現できない透過も、SVGは対応している</span></h3>
<p><span>SVGが画像として優れているのは、透過もサポートしているところです。利用されている画像種類で、透過をサポートしていないのはJPGくらいです。しかし、PNG24はファイルサイズが非常に重いので、PNG8の色数で表現ができない場合は、かなり重いデータになってしまいます。そこで、SVGを利用することで、透過画像も軽いファイルサイズで扱えるようになります。必ずしも透過PNGよりもSVGの方が軽くなるわけではありませんので、ファイルサイズをチェックしながら比較してみてください。</span></p>
<p><span>SVGは、XMLファイルです。テキストエディタなどでひらくと、各項目の定義をみることができます。これらをJavaScriptで操作することもできるので、SVGはアニメーションや動きのある表現でも非常に重宝されるのです。</span></p>
<h2><span>最後に</span></h2>
<p><span>SVGは、積極的に利用していきたい画像フォーマットです。おすすめなのは、あまり変化しない画像 (ロゴやアイコンなど)はSVG化し、更新頻度が高いコンテンツの画像フォーマットはJPGを利用することです。こうすることで、軽量な画像フォーマットでのウェブサイト構築＆運用が可能となります。</span></p>
<p><span>JPGの画像軽量化は、ぜひ弊社のLightFileをおすすめします。無料トライアルも２週間あるので、検証することも可能です。ぜひお問い合わせください。</span></p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの軽量化は、LightFile | 画像最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank">https://core.lightfile.net/contents/web-developer.html</a></p>
</div>
</div>
<p> </p>
