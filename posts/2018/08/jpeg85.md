---
# Astrowind
title: '画質85がよいという記事をみたので、LightFileの処理と比較してみた。画像軽量化は、画質とのバランスの戦いなのだ。'
excerpt: '先週、このブログ記事が社内で話題になったので、画質85が気になっています。 JP...'
updateDate: 2018-08-28
publishedDate: 2018-08-13
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-08-13-jpeg85-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2018-08-28 15:47:14
publishedAt: 2018-08-13 13:46:07
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

<p>先週、このブログ記事が社内で話題になったので、画質85が気になっています。</p>
<ul><li><a href="https://parashuto.com/rriver/development/optimizing-jpeg-images-with-85-percent-quality" target="_blank">JPEG画像の最適化には85%の品質がいいらしいので画像の最適化プロセスを見直してみた</a></li></ul>
<p>要約すると、「LPで画像たくさん使うけど、めっちゃ容量が重いから軽くしようと思った。そうしたら、Google DeveloperでJPEGの品質は85がいいよ！って書いてあったよ！」というお話です。</p>
<p>なるほどなるほどと思いつつ、サンプルまでダウンロードできるので、中身をみてみました。そして、あらためてなるほどと感じたのです。</p>
<h2>画質85は、とっても軽い。</h2>
<p>最初に断りを入れさせていただくと、上記の記事はとても参考になるものであり、素晴らしい記事です。調査した結果を共有し、結果を共有するというのは、インターネットの概念とあっており、人類の英知として積み重なっていくものだと思います。</p>
<p>さて、この方のやり方は、Photoshopの「Web用で書き出し 画質100」のあとに、imageOptimで圧縮をかけています。このimageOptimの画質を「85」がよいということになります。弊社でも、Web用に書き出しするか、JPEGで保存「画質12」のデータを利用して調査をすることが多いです。</p>
<p style="text-align: center;"><img alt="2018-08-13-jpeg85-01.jpg" src="https://blog.ideamans.com/assets/2018-08-13-jpeg85-01.jpg" width="1606" height="574" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">画質85は、91に比べてもかなり軽くなっているのがわかる</span></p>
<p>imageOptimは非常に便利なデスクトップツールです。Macを利用している方でしたら、無料で利用することができます。以下のリンクに使い方などがのっています。</p>
<ul><li><a href="https://gist.github.com/t32k/6606334" target="_blank">画像最適化ツールImageOptim.app（Mac）の使い方</a></li></ul>
<h2>sample01.jpをLightFileで処理してみよう</h2>
<p>さて、早速LightFileで処理した結果です。</p>
<p><img alt="2018-08-13-jpeg85-02.jpg" src="https://blog.ideamans.com/assets/2018-08-13-jpeg85-02.jpg" width="2290" height="712" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">それぞれの処理結果を、参考サイトの数値と比較してみます。</p>
<div class="tablewrap">
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>対象</th><th>オリジナル</th><th>画質91</th><th>画質85</th><th>画質81</th><th>LightFIle<br>標準</th><th>LightFIle<br>容量優先</th></tr>
<tr>
<td>sample01.jpg</td>
<td style="text-align: right;">582KB</td>
<td style="text-align: right;">164KB</td>
<td style="text-align: right;">128KB</td>
<td style="text-align: right;">112KB</td>
<td style="text-align: center;">222.47KB</td>
<td style="text-align: center;">169.13KB</td>
</tr>
</tbody>
</table>
</div>
<p>LightFileは、imageOptimよりもファイルサイズがやや大きめです。容量優先でも、imageOptimの画質91より5KBほど重いです。これは、AI的なアルゴリズムを持つLightFileは、SSIM値での画質コントロールをしており、画質の劣化を抑えているためです。実際、画質85の画像を２〜３倍程度拡大すると、部分的に画像が荒れているのがわかります。</p>
<p style="text-align: center;"><img alt="2018-08-13-jpeg85-03.png" src="https://blog.ideamans.com/assets/2018-08-13-jpeg85-03.png" width="600" height="360" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">画質85の画像。100%だと荒さはわかりづらいけれど...</span></p>
<p style="text-align: center;"><img alt="2018-08-13-jpeg85-04.png" src="https://blog.ideamans.com/assets/2018-08-13-jpeg85-04.png" width="1200" height="600" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">画質85の画像を拡大すると、ブロックノイズとして葉の上に白い点が２つ現れている。</span></p>
<p style="text-align: center;"><img alt="2018-08-13-jpeg85-05.png" src="https://blog.ideamans.com/assets/2018-08-13-jpeg85-05.png" width="1200" height="600" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">LightFileの容量優先の処理。葉の上に白い部分はあるが、周囲となじんでいるのがわかる</span></p>
<p>JPEGはブロックノイズが発生するので、画質を落とす場合はしっかりと拡大しながら確認することで荒れは把握することができます。多くの場合は画質85でも問題ない気はしますが、ECなどの購買する商品だったり、作品、美しさを重視するものは、画質のコントロールが不可欠です。軽量化と画質はトレードオフなので、しっかりと確認しましょう。</p>
<p>LightFileは、この画質の確認を自動で判断して処理を行います。SSIM値での判別なので、人間の目でみているのと同等の判断をすることができるのです。</p>
<ul><li><a href="https://simulator.lightfile.net/reports/53ea35c5bed0ed232f7fa40abe6062da63445aece6ea818c72bbad378212d2d5" target="_blank">サンプル画像のLightFile シミュレータの処理結果はこちら</a></li></ul>
<h2>最後に</h2>
<p>Webデザイナーさんは日々大量の画像ファイルを書き出していると思います。しかし、画質調整は一つ一つチェックして書き出すのは非常に労力がかかる作業です。たいていは、画質を固定して書き出すことが多いでしょう。画質を優先する人は９０くらい、あとは８５や８０にすることが多いと思います。</p>
<p>画像圧縮ツールは、それぞれに画質の数値を持っているので、８５が同じというわけではありません (処理エンジンが異なる場合)。手間はかかりますが、しっかりとチェックしながら画質とファイルサイズを確認していきましょう。</p>
<p>LightFileは無料シミュレータがあるので、画像やウェブページのURLを入力していただくだけでどのぐらい軽量化できるのかを確認することができます。ぜひ利用してみてください。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://simulator.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/images/service-simulator.jpg" alt="LightFile Simulator β版"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator β版</a></p>
<p class="serviceDesc">無料で使える画像最適化チェックシミュレータ。チェック結果がレポートになるので、URLを共有すればみんなでみれる。</p>
<p class="serviceLink"><a href="https://simulator.lightfile.net/" target="_blank">https://simulator.lightfile.net/</a></p>
</div>
</div>
<p>画像に関してお困りの方は、以下のフォームからお問い合わせください！</p>
