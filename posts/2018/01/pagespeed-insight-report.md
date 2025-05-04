---
# Astrowind
title: 'Google PageSpeed Insightでわかるのは、画像の表示サイズが適切かどうか。画質の軽量化でもっと表示は速くなる。'
excerpt: 'Googleは、簡単に利用できるいろいろな無料のチェックツールを提供しています。...'
updateDate: 2018-03-16
publishedDate: 2018-01-15
tags: 
  - web-imaging

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-01-15-ogp.jpg
category: performance

# カスタム
updatedAt: 2018-03-16 16:46:30
publishedAt: 2018-01-15 10:52:01
categories: 
  - web-imaging

  - performance

categoryLabels: 
  - Web画像最適化

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p><a href="https://www.google.co.jp/" target="_blank">Google</a>は、簡単に利用できるいろいろな無料のチェックツールを提供しています。今回は、ページ表示のスピードに関するチェックをしてくれるPagespeed Insightのお話です。</p>
<ul><li><a href="https://developers.google.com/speed/pagespeed/insights/?hl=ja" target="_blank">Google Pagespeed Insight</a></li></ul>
<p>利用の仕方は、表示をチェックしたいURLを入力して「分析ボタン」をクリックするだけ。しばらく待つと、チェック結果がレポートされます。</p>
<p style="text-align: center;"><img alt="2018-01-15-psi-01.jpg" src="https://blog.ideamans.com/assets/2018-01-15-psi-01.jpg" width="968" height="599" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">シンプルなインターフェース。URLを入力し、「分析」ボタンをクリック</span></p>
<p> </p>
<h3>診断結果レポートをみる</h3>
<p><img alt="2018-01-15-psi-02.jpg" src="https://blog.ideamans.com/assets/2018-01-15-psi-02.jpg" width="970" height="600" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>1分も待たずに診断レポートが生成されます。モバイルでの表示と、デスクトップでの表示、２種類のレポートが行われます。今回は、本ブログ記事の中から１ページを診断にかけてみました。</p>
<ul><li>対象ページ　<a href="https://blog.ideamans.com/2017/12/photoshop-qualitycheck-100-80.html" target="_blank">元画像に近いのは画質99まで！Photoshopの画質設定を100から80まで試してみた結果、画質80でいいんじゃない？と思った話</a></li></ul>
<p> </p>
<h3>「最適化についての提案」レポートの画像部分に注目</h3>
<p><img alt="2018-01-15-psi-03.jpg" src="https://blog.ideamans.com/assets/2018-01-15-psi-03.jpg" width="970" height="600" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">レポートには、改善するためのポイントと対象が示されています。これらが無料でレポートされるというのは、本当に驚きですよね。</p>
<p>この中に、「<strong>画像を最適化する</strong>」という項目があります。ココが今回のポイントです。</p>
<p> </p>
<h3>「画像を最適化する」は、「表示サイズを合わせる」ということ</h3>
<p>結論からいうと、<strong>この項目は画像の表示サイズに適した画像を利用しているかどうか</strong>、を診断しています。小さなサムネイル画像の部分に、何倍も大きい画像を利用している、というような具合です。表示サイズに合わせた画像を利用することで、この項目は改善することが可能です。</p>
<p>今回診断対象としたページでは、比較をする部分の画像に、表示よりも大きな画像を利用しています。そのため、今回のチェックに引っかかっています。</p>
<p style="text-align: center;"><img alt="2018-01-15-psi-04.jpg" src="https://blog.ideamans.com/assets/2018-01-15-psi-04.jpg" width="858" height="678" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">改善提案に該当する比較写真部分。比較対象に加工を極力入れないため、サイズ変更の処理などを入れられない。</span></p>
<p> </p>
<h3>画像のファイルサイズは診断されないので、軽量化はこのレポートからは判断できない</h3>
<p><strong>ファイル容量が大きい画像が、軽量化しているかどうかは判断されません。また、これは機械的に判断することも困難かもしれません。そのため、軽量化はこのレポートには含まれないので、しっかりと対策することが重要</strong>です。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p>弊社のLightFileは、画質の劣化を最小限にしつつ、ファイルサイズは最大限に軽量化することができます。しかも自動化できるため、人の手をわずらわせることなく、画像を最適化することができます。LightFile以外にも、JPEGminiなどの最適化ツールがありますので、ぜひぜひ導入していきましょう！</p>
<p>LightFileと競合ツールの対決記事は、こちらから！</p>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/JPG%E3%83%80%E3%82%A4%E3%82%A8%E3%83%83%E3%83%88?src=hash&amp;ref_src=twsrc%5Etfw">#JPGダイエット</a> についてまとめてみました。ピーンとくる方から、なにそれ？という方まで、画像ファイルにちょこっと詳しくなれると思います。画像が軽くなるとメリットはみんなにあるんです。<a href="https://t.co/kfIven8xXV">https://t.co/kfIven8xXV</a></p>
-- アイデアマンズ (@ideamans) <a href="https://twitter.com/ideamans/status/938663830347046912?ref_src=twsrc%5Etfw">2017年12月7日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<p> </p>
<h2>最後に</h2>
<p>サムネイルに大きな画像を利用しないように、と記載しました。これはあくまでPagespeed Insightのレポートに対するものです。</p>
<p>実は、同じページで大きな画像を呼び出している場合は、大きな画像をサムネイル画像に利用するケースも存在します。これは、画像の呼び出しを１回にすることで、ダウンロードを減らす事ができるからです。サムネイル画像といえど、数KBや数0KBはありますし、PNGなどの重いデータにしている場合は、無視できない容量になることも多々あります。このあたりは、ケースバイケースですので、ページを作ってくれた方に聞いてみるのがよいと思います。</p>
<p> </p>
