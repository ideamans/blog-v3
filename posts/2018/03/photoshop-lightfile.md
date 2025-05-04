---
# Astrowind
title: 'クリアな画質のまま軽くするには？Photoshop作ったバナーを、最高画質で書き出したファイルにLightFileの処理をしてみた'
excerpt: 'みんな大好きPhotoshopで作った画像は、できるだけ画質が良い状態で書き出し...'
updateDate: 2018-03-16
publishedDate: 2018-03-15
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/images/2018-03-15-ps80-lf-min.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:52:28
publishedAt: 2018-03-15 11:14:12
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

<p>みんな大好きPhotoshopで作った画像は、できるだけ画質が良い状態で書き出したいですよね。</p>
<p>今回は、<strong>LightFileの「画質を落とさずに軽量化する」という特徴を利用して、Photoshopで書き出しの際に設定する画質をどうすればよいのか比較</strong>してみました。</p>
<p> </p>
<h2>Photshopの画質設定は悩みどころが多い</h2>
<p style="text-align: center;"><img alt="2018-03-15-ps80-lf-min.jpg" src="https://blog.ideamans.com/images/2018-03-15-ps80-lf-min.jpg" width="1200" height="540" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">検証用のPhotoshopで作成したバナー。春スキーももうすぐ終わり？</span></p>
<p>以前、以下のブログ記事で検証しましたが、<strong>Photoshopの書き出し時の画質設定は、悩むところが多い</strong>です。</p>
<ol><li><a href="https://blog.ideamans.com/2017/12/photoshop.html">Web制作の必須アプリ！みんな大好きPhotoshop！書き出すファイルのファイルサイズは画質設定次第、意外と画質60でも...[JPGダイエット対決 vol.05]</a></li><li><a href="https://blog.ideamans.com/2017/12/photoshop-web-publish.html">人間の目ではなかなかわからない！Photoshopの画質設定ごとに、画像にどんな差分があるのか調べてみた。</a></li></ol>
<p>一般的にはデフォルト値に近い「やや高画質の80」を利用されていることが多いのではないでしょうか？今回は、その「やや高画質の80」と「最高画質の100」で比較してみました。</p>
<p> </p>
<h2>比較した結果</h2>
<p>ファイルサイズでは、<strong>「やや高画質の80」×LightFile(容量優先) が最も軽い</strong>結果となりました！</p>
<p>しかし、一度画質を下げたものをLightFileで処理するよりは、できるだけ高画質なものをLightFileで処理するほうが、高画質を保つことができます。<strong>ファイルサイズを最優先で考えるか、画質とファイルサイズをいいバランスのトレードで考えるか</strong>。好みが分かれるところです。</p>
<p>ファイルサイズの単位はB（バイト）です。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル名</th><th>ファイルサイズ</th><th><span><span>削減量</span></span></th><th><span>削減割合</span></th></tr>
<tr>
<td>①Photoshop画質100</td>
<td style="text-align: right;">415,890</td>
<td style="text-align: right;">-</td>
<td style="text-align: right;">-</td>
</tr>
<tr>
<td>②Photoshop画質80</td>
<td style="text-align: right;">192,895</td>
<td style="text-align: right;">222,995</td>
<td style="text-align: right;">53.62%</td>
</tr>
<tr class="text-white bg-success">
<td>①をLightFile(画質優先)で処理</td>
<td style="text-align: right;">149,405</td>
<td style="text-align: right;">266,485</td>
<td style="text-align: right;">64.08%</td>
</tr>
<tr>
<td>②をLightFile（画質優先）で処理</td>
<td style="text-align: right;">160,945</td>
<td style="text-align: right;">254,945</td>
<td style="text-align: right;">61.30%</td>
</tr>
<tr class="text-white bg-success">
<td>②をLightFile（容量優先）で処理</td>
<td style="text-align: right;">134,978</td>
<td style="text-align: right;">280,912</td>
<td style="text-align: right;">67.54%</td>
</tr>
</tbody>
</table>
<p> </p>
<h2>それぞれの画像はこちら</h2>
<p>よっぽど細かく比較しないと、違いがわからないレベルですが、ファイルサイズは大きく異なります。なるべく軽くしましょう！</p>
<p style="text-align: center;"><img alt="2018-03-15-ogp.jpg" src="https://blog.ideamans.com/images/2018-03-15-ogp.jpg" width="1200" height="540" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Photoshop画質100</span></p>
<p style="text-align: center;"><img alt="2018-03-15-ps100-lf-best.jpg" src="https://blog.ideamans.com/images/2018-03-15-ps100-lf-best.jpg" width="1200" height="540" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Photoshop画質100にLightFile(画質優先)で処理。これが最もオススメな処理結果。</span></p>
<p style="text-align: center;"><img alt="2018-03-15-ps80.jpg" src="https://blog.ideamans.com/images/2018-03-15-ps80.jpg" width="1200" height="540" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Photoshop画質80</span></p>
<p style="text-align: center;"><img alt="2018-03-15-ps80-lf-min.jpg" src="https://blog.ideamans.com/images/e302f1eab1e2fc3084a056b62f754b50094a48dd.jpg" width="1200" height="540" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Photoshop画質80にLightFile(容量優先)で処理。これが最も軽量。</span></p>
<p> </p>
<h2>最後に</h2>
<p>retinaディスプレイや、今後の4Kや8Kのディスプレイをみていると、画質が荒いとどうしても汚く見えてしまいます。高解像度化は仕方がないことですが、<strong>できるだけキレイで高画質な画像をみれるようにしておきたい</strong>ところですね。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<h3>今回利用させていただいた素材</h3>
<ul><li><span>Photo by </span><a href="https://unsplash.com/photos/bPsY__UVZHA?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anton Tevajärvi</a><span> on </span>Unsplash<br><a href="https://unsplash.com/search/photos/ski?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">https://unsplash.com/search/photos/ski</a></li></ul>
