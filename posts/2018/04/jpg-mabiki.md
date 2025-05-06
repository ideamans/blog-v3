---
# Astrowind
title: '画質が悪い？JPGがパキッっとした画像に向いていないのは、どうしてなのか？画像の特性を知れば解決策が見えてくる！'
excerpt: '画質の向上には、画像の種類について特性を知ってく必要があります。Webで利用され...'
updateDate: 2018-04-09
publishedDate: 2018-04-09
tags: 
  - web-imaging

author: nose
image: https://blog.ideamans.com/images/2018-04-09-100.jpg
category: web-imaging

# カスタム
updatedAt: 2018-04-09 13:04:34
publishedAt: 2018-04-09 11:00:00
categories: 
  - web-imaging

categoryLabels: 
  - Web画像最適化

authorId: nose
subTheme: 
recommended: false
---

<p>画質の向上には、画像の種類について特性を知ってく必要があります。Webで利用される画像は、一般的には以下のものがあります。</p>
<h2>Webで利用される一般的な画像</h2>
<ol><li><strong>JPG</strong></li><li>GIF</li><li>PNG</li><li>SVG</li><li>WebP</li><li>ビットマップ</li><li>TIFF</li></ol>
<p>今回は<strong>JPGがパキッとした画像に向いていないのはどうしてなのか？</strong>にスポットをあててみました。</p>
<p> </p>
<h2>色数が約２色しかない画像を、Photoshopから低画質で書き出した結果</h2>
<p>まずは結果をご覧ください。</p>
<p style="text-align: center;"><img alt="2018-04-09-000-03.jpg" src="https://blog.ideamans.com/images/2018-04-09-000-03.jpg" width="756" height="352" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">画質をさげて書き出したものを、さらに２回ほど荒く書き出したもの</span></p>
<p>モアレがひどく、デザイナーとしては許せない品質になりました。本来なら色数が少ないものはPNG-8（またはGIF）で書き出すとキレイに軽く書き出すことができます。</p>
<p> </p>
<h2>どうして文字がにじんでるの？</h2>
<p>JPGは、GIF（256色）やPNG-8（256色）・PNG-24（約1678色）のように色数による画質コントロールを行なっていません。画像全体で画質のコントロールをしています。そのため、写真やグラデーションなどのように多くの色を必要とする画像に対し、とても有効な画像と言えます。</p>
<p><strong>JPGは、画質を軽くするために、情報の間引きを行います。これは、近くにある色との差を間引くことで、情報を軽くしています。</strong></p>
<p style="text-align: center;"><img alt="2018-04-09-mabiki.png" src="https://blog.ideamans.com/images/2018-04-09-mabiki.png" width="720" height="240" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">間引くイメージ。近くにある情報をベースに間引く。</span></p>
<p>上記はかんたんに示しましたが、<strong>実は近くにある情報は隣のピクセルというわけではありません。もう少し離れた情報もベースとしています。そのため、白地に黒文字の画像の場合、文字のすぐそばだけでなく、少し離れたところにも影響が出てしまうのです。</strong></p>
<p>これは黒と白に限った話ではありません。他の色でもパキッとわかれていれば影響が出ます。</p>
<p style="text-align: center;"><img alt="2018-04-09-002-02.jpg" src="https://blog.ideamans.com/images/2018-04-09-002-02.jpg" width="783" height="365" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">文字色を赤にしても同じように、画質の劣化が出てしまいます。</span></p>
<p style="text-align: center;"><img alt="2018-04-09-001-01.jpg" src="https://blog.ideamans.com/images/2018-04-09-001-01.jpg" width="720" height="240" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">直線的な描画の画像にも向いていません。波形に合わないと画質が落ちてしまうのです。</span></p>
<p> </p>
<h2>色数の少ない画像はどうすればよい？</h2>
<p>色数が少ない場合は、GIFまたはPNGで書き出しましょう。ファイルサイズも軽くなり、なおかつとてもキレイに書き出すことができます。例えば以下のようなものは、JPGよりもGIFやPNGの方がキレイで軽くなることが多いです。</p>
<ul><li>ロゴ</li><li>国旗</li><li>地図</li><li>路線図</li><li>標識</li><li>ピクトグラム</li></ul>
<p> </p>
<h2>画質を比較しながら軽量化するから、LightFileは画質劣化が少ない</h2>
<p>今回はPhotoshopを利用しました。書き出し時の画質は「0」としています。このようにPhotoshopは書き出し時に画質を設定することができます。しかし、日々100枚を超えるデータを扱ったり、日々の業務が忙しい場合は、画像ごとに画質を細かくコントロールすることはなかなか難しいところです。</p>
<p>弊社のLightFileは、SSIM値を利用して、画像ごとに異なる圧縮率の中から最適な画質＆ファイルサイズのものを選びだします。1つのパラメータで一括処理をするのではなく、画像ごとに最適な圧縮率で処理を行うので、画像を落とさずに軽量化することができるのです。</p>
<p>まずは無料のシミュレータでお試しいただけます。</p>
<ul><li><a href="https://simulator.lightfile.net/" target="_blank">LightFileシミュレータβ版</a></li></ul>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="ja" dir="ltr">β版公開中！ウェブページで利用している画像がどのぐらい <a href="https://twitter.com/hashtag/%E7%94%BB%E5%83%8F%E6%9C%80%E9%81%A9%E5%8C%96?src=hash&amp;ref_src=twsrc%5Etfw">#画像最適化</a> できるかわかります！ <a href="https://twitter.com/hashtag/Web%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9?src=hash&amp;ref_src=twsrc%5Etfw">#Webパフォーマンス</a> にお困りの方、まずは無料でお試しください！(^-^)<a href="https://t.co/qy9sy74yNa">https://t.co/qy9sy74yNa</a></p>
-- アイデアマンズ (@ideamans) <a href="https://twitter.com/ideamans/status/978095028592521216?ref_src=twsrc%5Etfw">2018年3月26日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<p> </p>
<h2>最後に</h2>
<p>いかがでしたでしょうか？画像それぞれの特性を知っておくことで、キレイで軽い画像を作り出すことができます。画質にこだわることで、きれいなものをキレイに、美味しいものを美味しそうに、感動的なものを感動的に伝えることができるでしょう。</p>
<p> </p>
<h4>参考URL</h4>
<ul><li><a href="https://funini.com/kei/math/jpeg.shtml" target="_blank"><span>JPEG の仕組み</span></a></li></ul>
<p> </p>
