---
# Astrowind
title: 'Photoshopの書き出した画像は、どこがかわっているの？画像処理の結果は、人間の目ではわからなくても、差分をとればみえてくる。'
excerpt: 'Webデザイナーさん御用達ツールの１つでもあるAdobe Photoshopは、...'
updateDate: 2018-04-25
publishedDate: 2018-04-25
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/images/2018-04-25-image-diff-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2018-04-25 15:44:35
publishedAt: 2018-04-25 15:00:00
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

<p>Webデザイナーさん御用達ツールの１つでもあるAdobe Photoshopは、非常に高機能な画像処理ツールです。画像を作り出すこともできますし、写真の加工もお手のもの。非常に多機能であり、画像処理ツールのデファクトスタンダードです。</p>
<p>今回は、<strong>何気なく書き出している画像が人間の目にはわかりづらいので、差分を取ることでどのようにかわっているのか</strong>をみていきます。</p>
<h2>画質を落として書き出せば、画像は必ず違いが出る</h2>
<p>Photoshopから画像を書き出す際に、画質を設定することができます。今回は以下の条件で書き出したものを、オリジナル画像と比較してみました。なお、Photoshopから書き出す際は「Web用に保存」で書き出す前提となります。</p>
<h3>比較対象画像</h3>
<ul><li>オリジナル画像</li><li>Photoshopから画質100で書き出し</li><li>Photoshopから画質80で書き出し</li><li>Photoshopから画質60で書き出し</li><li>オリジナル画像をLightFileで最適化</li></ul>
<h2>比較結果</h2>
<p>右側が差分を取った画像です。白は差分なし、赤は差分があった部分となります。</p>
<p><img alt="2018-04-25-image-diff-result.png" src="https://blog.ideamans.com/images/2018-04-25-image-diff-result.png" width="650" height="1262" class="mt-image-none"></p>
<p>※このブログは自動でLightFileの処理が入るので、説明文もまとめて1枚のPNG画像にしました。それぞれ書き出した画像は再現されています。</p>
<h2>オリジナル画像と画像処理した4枚、区別がつくのか？</h2>
<p>Webデザイナーさんが画像を書き出す時、画質の設定はどのようになっていますか？<strong>いくつかの画質数値を設定して、プレビュー画面で目を凝らしながらチェック</strong>していたら、その人は素晴らしい方です。<strong>プレビュー画面で画像を拡大表示すれば、細部まで細かくみることができます。</strong></p>
<p style="text-align: center;"><strong><img alt="2018-04-25-image-diff-02.jpg" src="https://blog.ideamans.com/images/2018-04-25-image-diff-02.jpg" width="1179" height="788" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></strong><span style="color: #888888;">書き出し時に600%拡大したところ。ここまで拡大すればノイズはみえるが、チェックに非常に時間がかかる。</span></p>
<p>しかし、多くの場合は制作レギュレーションで決まった数値で決め打ちしている場合や、感覚的な数値で決める、３段階くらいの数値で比較して書き出すのが一般的ではないでしょうか。<strong>この画質設定をして書き出すというのは、細かくやろうとすると非常に時間がかかることであり、ある程度の妥協があるところでもあります。</strong></p>
<p>そもそも、<span style="text-decoration: underline;"><strong>画像の画質設定はコンピュータに任せてしまい、もっとクリエイティブなことに時間を使うべき</strong></span>ではないでしょうか。</p>
<h2>LightFileは自動処理で画質をしっかりと保ち、軽量化します。</h2>
<p>画像最適化を行うLightFileは、<strong>画像処理の中でも「画質を保ったまま軽量化」することに特化</strong>しています。画質80ですべて処理するという方法ではなく、一つ一つの画像に最適な画質設定値を比較しながら、自動的に最適化していきます。AWS S3やサーバに画像をアップロードするだけで、あとはなにもしなくても最適化が行われます。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<h2>画像の細分はcompareコマンドで</h2>
<p>今回利用した差分方法は、ImageMagickのcompareコマンドです。2つの画像を比較して、差分を表したものを画像として出力してくれます。</p>
<pre class="prettyprint"><code class="lang-bsh">compare -metric AE /path/to/A.jpg /path/to/B.jpg diff-result.jpg</code></pre>
<p> </p>
<h2>最後に</h2>
<p>Photoshopは非常に高機能なツールですが、部分的にPhotoshopよりも優れているツールはいろいろあります。Photoshopを使い倒すのも良いですが、いろいろなツールを試すとまた違う味方ができてきます。</p>
<p> </p>
