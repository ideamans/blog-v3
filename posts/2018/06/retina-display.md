---
# Astrowind
title: 'Retinaディスプレイに合わせるには、解像度はいくつがいい？画像最適化するなら解像度も理解しよう！'
excerpt: '4KディスプレイやRetinaディスプレイなど、高解像度のディスプレイが普及して...'
updateDate: 2018-06-20
publishedDate: 2018-06-20
tags: 
  - web-imaging

  - lightfile

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-06-19-retina-display-ogp.jpg
category: performance

# カスタム
updatedAt: 2018-06-20 11:19:58
publishedAt: 2018-06-20 10:30:00
categories: 
  - web-imaging

  - lightfile

  - performance

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>4KディスプレイやRetinaディスプレイなど、高解像度のディスプレイが普及しています。画像には解像度というものがあり、72dpiや350dpiなど、さまざまな解像度が知られています。今回は、Apple製品に多いRetinaディスプレイには、どの解像度が良いのか？というところを説明していきます。</p>
<h2>解像度は72dpiでよい。画像の表示サイズで調整しよう。</h2>
<p>288dpiや144dpiなど、さまざまな解像度の画像を用意して、実際に確認してみましょう。<strong>結論としては、解像度は72dpiで問題ないです。</strong>Retinaディスプレイでキレイに見せたい場合は、表示サイズの倍角の画像を用意して、srcset属性で読み込ませれば問題ありません。</p>
<p>srcset属性を使わずに、src属性で倍角の画像を読み込ませ、HTMLやCSS側でサイズを指定する（CSSで指定が推奨）というのも可能です。</p>
<p style="text-align: center;"><img alt="2018-06-19-retina-display-072.jpg" src="https://blog.ideamans.com/assets/2018-06-19-retina-display-072.jpg" width="600" height="300" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">72dpiの画像</span></p>
<p style="text-align: center;"><img alt="2018-06-19-retina-display-144.jpg" src="https://blog.ideamans.com/assets/2018-06-19-retina-display-144.jpg" width="600" height="300" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">144dpiの画像</span></p>
<p style="text-align: center;"><img alt="2018-06-19-retina-display-288.jpg" src="https://blog.ideamans.com/assets/2018-06-19-retina-display-288.jpg" width="600" height="300" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">288dpiの画像</span></p>
<p>このように高解像度なJPEGで作成しても、見た目はかわらないです。</p>
<p> </p>
<h2>倍角の画像を表示するのがキレイにみえる</h2>
<p>解像度ではなく、倍角の表示サイズの画像を用意するのがよいです。どのぐらいキレイになるのか、実際に比べてみましょう。スマホでこのページを閲覧していただくと、下の二枚がほぼ同じサイズで表示されますが、精細さの違いが見えると思います。ぜひピンチアウト（拡大）してみてください。72dpiで1200pxの画像のほうがきれいに見えることがわかります。</p>
<p style="text-align: center;"><img alt="2018-06-19-retina-display-072x2.jpg" src="https://blog.ideamans.com/assets/2018-06-19-retina-display-072x2.jpg" width="1200" height="600" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">72dpiで横幅1200pxの画像</span></p>
<p style="text-align: center;"><img alt="2018-06-19-retina-display-288.jpg" src="https://blog.ideamans.com/assets/2018-06-19-retina-display-288.jpg" width="600" height="300" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">288dpiで横幅600pxの画像</span></p>
<p>倍角の画像を小さく表示するほうが、見た目がきれいに見えます。</p>
<p> </p>
<h2>最後に</h2>
<p>印刷物などは300dpiなどの高解像度で作成することも多いですが、Webでは72dpiでの作成で問題ありません。画角サイズをしっかりと把握してWeb構築するようにしましょう。</p>
<p>そういえば、Retinaと書いてあるカメラが以前ありました。コダックだったような。</p>
<p style="text-align: center;"><img alt="2018-06-19-retina-display-kodak.jpg" src="https://blog.ideamans.com/assets/2018-06-19-retina-display-kodak.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">フィルムカメラもいいですよね</span></p>
<p> </p>

