---
# Astrowind
title: '画質を保ちながら、ファイルサイズを軽くするLightFileの処理は、「比較して選ぶ」が重要なのです。'
excerpt: '画質にこだわってますか？画像軽くしてますか？キレイで軽い！が一番ですよね！ 今回...'
updateDate: 2018-03-16
publishedDate: 2018-03-13
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/images/711aff3dcbc72589984cdc5f9746185048b628ee.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:52:07
publishedAt: 2018-03-13 14:00:00
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

<p>画質にこだわってますか？画像軽くしてますか？キレイで軽い！が一番ですよね！</p>
<p>今回は、画像最適化のLightFileの機能について、ちょっとご説明します。なかなかお話してても伝わりづらく、どこかに一度まとめないといけない！と思っていました。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<h2>LightFileの特徴</h2>
<p>LightFileは、大きく２つの特徴を持っています。</p>
<ol><li><strong>複数の処理結果から、最適な画像を選び出す</strong></li><li><strong>自動で処理する</strong></li></ol>
<p>それぞれについて、説明していきます。</p>
<p> </p>
<h2>複数の処理結果から、最適な画像を選び出す</h2>
<p>LightFileは、「<span style="text-decoration: underline;"><strong>比較して選ぶ</strong></span>」という処理があります。これが、画質にとても重要な意味を持っています。</p>
<p style="text-align: center;"><a href="https://blog.ideamans.com/images/ece935272a1791f70348703970b2c734546fc457.jpg"><img alt="処理イメージ.jpg" src="https://blog.ideamans.com/assets_c/2018/03/ece935272a1791f70348703970b2c734546fc457-thumb-1200xauto-370.jpg" width="1200" height="629" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></a><span style="color: #888888;">LightFileの処理イメージ</span></p>
<p>処理の流れを見ていただくと、わかりやすいかもしれません。</p>
<ol><li>画像に対して、圧縮率の異なる複数の画像を生成する</li><li>生成された画像の中から、ファイルサイズとSSIM値を比較する</li><li>その中でバランスの良い画像を抽出する</li></ol>
<p>という流れです。処理イメージは上記の画像のとおりになります。</p>
<p>一般的な画像の軽量化処理は、１つのパラメータで処理して、１つの処理結果を得ることが普通です。ImageMagickの場合、以下のようなコードとなります。</p>
<pre class="prettyprint"><code class="lang-bsh">convert -quality 80</code></pre>
<p>しかし、これでは<strong>すべての画像に同じパラメータが適用されてしまうため、それぞれの画像に最適な圧縮率で処理することができません</strong>。</p>
<p>LightFileはこの問題を解決して、<strong>それぞれの画像に最適な処理を行うことができるツール</strong>となっています。</p>
<p> </p>
<h2>自動で処理する</h2>
<p>AWS Lambda版もオンプレミス版も、やり方は異なりますが、それぞれ自動化することができます。自動化することで、以下のメリットが生まれます。</p>
<ol><li>人的リソースを消費しない</li><li>作業漏れがなくなる</li><li>品質が均一化する</li><li>作業チェックが低減される</li></ol>
<p>AWS Lambda版は、AWS S3にファイルがアップロードされた時に処理が走るようになっています。オンプレミス版は、Cronの定期タスクに登録することで、定期的な自動処理にすることができます。</p>
<p> </p>
<h2>最後に</h2>
<p>いかがだったでしょうか？パラメータを指定してすべての画像に同じ処理をしてしまうと、劣化がひどい画像が生成されることもありますが、LightFileではそれを防ぐために「比較して選び出す」という処理が入っています。せっかくの画像ですから、できるだけきれいな方がいいですよね！</p>
<p> </p>
