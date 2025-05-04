---
# Astrowind
title: '画像の色味が変わる？色空間は再現範囲が異なるから、Exif情報のColorまわりの項目には気をつけよう！'
excerpt: '人生の一瞬を切り撮ることができる写真。素敵ですよね。人生の過程であったり、その時...'
updateDate: 2018-03-16
publishedDate: 2017-11-09
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/exif-color.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:39:56
publishedAt: 2017-11-09 00:00:00
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

<p>人生の一瞬を切り撮ることができる写真。素敵ですよね。人生の過程であったり、その時の出来事であったり、その瞬間は人それぞれですが、その人の人生のドラマでもあります。そのドラマの主人公はあなたです（意味なし）。</p>
<p> </p>
<h2>大切な写真の色味が変わる</h2>
<p>印刷した写真だと、色あせたり変色したり、経年変化するのが一般的です。それはそれで味があっていいですよね！でも、デジタルデータは経年変化しないので、色あせることはない！ですが、とあるメタデータが失われると、色味が変化してしまいます。今回は、色味が変化した時に注意する（原因はなにか）部分を説明します。</p>
<p> </p>
<h2>Color Space Dataなどの色項目がなくなった・または書き換えられた</h2>
<p>画像にはExif情報というメタデータが存在します。詳しくは前回の「<a href="https://blog.ideamans.com/2017/11/exiftool.html" target="_blank">カメラの機種名や撮影場所のGPSデータを確認しよう！画像のメタデータは、exiftoolで要チェックや！</a>」をご覧ください。</p>
<p>このメタデータには、「この画像のカラースペース（色空間）はコレですよ」という情報を持っています。</p>
<pre class="prettyprint"><code class="lang-bsh">Color Space Data                : RGB</code></pre>
<pre class="prettyprint"><code class="lang-bsh">Photometric Interpretation      : RGB</code></pre>
<pre class="prettyprint"><code class="lang-bsh">Color Mode                      : CMYK</code></pre>
<p><strong>Color Space Data</strong>は、たいていの画像に含まれているもののようで、これはカメラの機種ごとに固定または変更ができるようになっています。ハイエンドなカメラだと、カラースペースの変更が可能ですね。自分もデジイチや<a href="http://www.ricoh-imaging.co.jp/japan/products/gr-digital4/" target="_blank">RICHO GR DIGITAL</a>で変更できるようになっていました。</p>
<p> </p>
<h2>Color Space DataがRGBの時、そのカラースペースを削除すると色味がかわる</h2>
<p>テスト用のデータを使って比べてみましょう。テストデータはこちらを利用させていただきました。</p>
<ul><li><a href="https://github.com/haraldk/TwelveMonkeys/blob/master/imageio/imageio-jpeg/src/test/resources/jpeg/cmm-exception-corbis-rgb.jpg" target="_blank">haraldk TMI-34: Handling of problematic Corbis RGB ICC profiles.</a></li></ul>
<table border="0">
<tbody>
<tr>
<td><img alt="colorspace-normal.jpg" src="https://blog.ideamans.com/assets/colorspace-normal.jpg" width="512" height="384" class="mt-image-none"><br> オリジナル画像</td>
<td><img alt="colorspace-delete.jpg" src="https://blog.ideamans.com/assets/colorspace-delete.jpg" width="512" height="384" class="mt-image-none"><br> カラースペースを削除</td>
</tr>
</tbody>
</table>
<p> </p>
<p>オリジナル画像は、カラースペースがRGBです。この部分のメタデータを削除したものが、右側の画像です。</p>
<p>ぱっとみてわかるのは、「<strong>色の鮮やかさが減っている</strong>」ことではないでしょうか。右側の画像は、全体的に少し暗く感じます。カラースペースを正しく指定しないと、このようにくすんだ画像になってしまいます。テストデータはまだいいですが、これが撮影した画像や、モデル事務所から提供されたものだとすると、注意されるかもしれません。</p>
<p> </p>
<h2>LightFile Coreは、カラースペースを残すので安心</h2>
<p>弊社の<a href="https://core.lightfile.net/" target="_blank">JPG最適化ツールであるLightFile Core</a>は、カラースペースを残す仕様となっています。そのため、色味が変わる心配はありません。大切な写真を、劣化を最小限にしながら、最大限に軽量化することができる素晴らしいツールです。</p>
<p><a href="https://core.lightfile.net/" target="_blank"></a></p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">https://core.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<p> </p>
<p> </p>
<h2>最後に</h2>
<p>カラープロファイルは奥が深い世界です。印刷物のCMYKもありますし、RGB/sRGB/Adobe RGBなど、RGBもいろいろな種類があります。個人的にはsRGBを選択することが多いですが、最適なものを見つけていきたいですね。あなたの人生の一瞬が、色鮮やかな思い出でありますように！</p>
<p> </p>
