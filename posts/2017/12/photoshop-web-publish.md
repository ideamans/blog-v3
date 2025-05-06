---
# Astrowind
title: '人間の目ではなかなかわからない！Photoshopの画質設定ごとに、画像にどんな差分があるのか調べてみた。'
excerpt: 'Photoshop使ってますか？写真の加工をしたり、Webデザインをしたりと、W...'
updateDate: 2018-03-16
publishedDate: 2017-12-21
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/bab3640f084ea62e74a8d07f4f3f5c1bbe358800.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:44:32
publishedAt: 2017-12-21 13:40:48
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

<p><a href="https://www.adobe.com/jp/products/photoshop.html" target="_blank">Photoshop</a>使ってますか？写真の加工をしたり、Webデザインをしたりと、Web系では万能ツールとして<a href="https://www.adobe.com/jp/products/photoshop.html" target="_blank">Photoshop</a>は利用されています。</p>
<p><strong><a href="https://www.adobe.com/jp/products/photoshop.html" target="_blank">Photoshop</a>で加工・作成したものを書き出す時、「Web用に保存」という方法で書き出すことが多い</strong>のですないでしょうか。<strong>今回は、「Web用に保存」で行う際の画質に注目</strong>してみました。</p>
<p> </p>
<h2>画質の設定は、選択するか数値指定する</h2>
<p><a href="https://www.adobe.com/jp/products/photoshop.html" target="_blank">Photoshop</a>では画質の設定は「Web用に保存」で書き出す場合、２種類の方法で行うことができます。</p>
<ol><li>プルダウンから選択する</li><li>画質に数値を入れる</li></ol>
<p><a href="https://blog.ideamans.com/assets/2017-12-21-ps-panel.jpg"><img alt="2017-12-21-ps-panel.jpg" src="https://blog.ideamans.com/assets_c/2017/12/2017-12-21-ps-panel-thumb-1200xauto-191.jpg" width="1200" height="513" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></a></p>
<p>プルダウンは５つの選択肢から、数値入力は０〜１００までの数値を入力します。画像ごとに毎回細かく設定するのも面倒だと思うので、なんとなく８０や８５に設定していたりする人も多いかもしれません。</p>
<p> </p>
<h2>JPGの差分は、ImageMagickのcompareコマンドで調べる</h2>
<p>今回も、<a href="https://imagemagick.org/script/index.php" target="_blank">ImageMagick</a>のcompareコマンドで調べてみます。以前も同じようにして調べていますので、興味のある方は参考にしてください。</p>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="ja" dir="ltr">違いがわかれば変化がわかる！<a href="https://twitter.com/hashtag/imagemagick?src=hash&amp;ref_src=twsrc%5Etfw">#imagemagick</a> で <a href="https://twitter.com/hashtag/%E7%94%BB%E5%83%8F%E6%9C%80%E9%81%A9%E5%8C%96?src=hash&amp;ref_src=twsrc%5Etfw">#画像最適化</a> ツールの処理後の差分をみてみよう！画質優先型は、にじむように差分があるのが確認できるんです。<a href="https://twitter.com/hashtag/jpegmini?src=hash&amp;ref_src=twsrc%5Etfw">#jpegmini</a> <a href="https://twitter.com/hashtag/tinypng?src=hash&amp;ref_src=twsrc%5Etfw">#tinypng</a> <a href="https://twitter.com/hashtag/lightfilecore?src=hash&amp;ref_src=twsrc%5Etfw">#lightfilecore</a><a href="https://t.co/4rF2rmhXSI">https://t.co/4rF2rmhXSI</a></p>
-- アイデアマンズ (@ideamans) <a href="https://twitter.com/ideamans/status/937517930069229569?ref_src=twsrc%5Etfw">2017年12月4日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<p> </p>
<p>今回も、グラフィカルにわかるように、差分を画像として出力します</p>
<p> </p>
<h2>比較するのは画質をプルダウンで選んだ場合の５つの画質</h2>
<p>プルダウンで選択できるのは、以下の５つです。あわせて画質の数値も記載します。中画質で「３０」って、意外な気もしませんか？</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>画質名</th><th>画質数値</th></tr>
<tr>
<td>最高画質</td>
<td style="text-align: right;">100</td>
</tr>
<tr>
<td>高画質</td>
<td style="text-align: right;">80</td>
</tr>
<tr>
<td>やや高画質</td>
<td style="text-align: right;">60</td>
</tr>
<tr>
<td>中画質</td>
<td style="text-align: right;">30</td>
</tr>
<tr>
<td>低画質</td>
<td style="text-align: right;">10</td>
</tr>
</tbody>
</table>
<p> </p>
<h2>compareコマンドで比較する</h2>
<p>今回のコマンドはこちらです。<a href="https://blog.ideamans.com/mt/ImageMagick">ImageMagick</a>はものすごい高機能であり、画像ライブラリとしてはデファクトスタンダードです。</p>
<pre class="prettyprint"><code class="lang-bsh">$ compare -metric AE /path/to/origin.jpg /path/to/photoshop.jpg /path/to/diff-photoshop.jpg</code></pre>
<p>画像を３つ指定していますが、最後の画像パスは差分結果の画像ファイルとなります。それでは、それぞれの差分結果です。<strong>差分がある部分は赤くなり、差分がないところは白になります</strong>。</p>
<table border="0">
<tbody>
<tr>
<td><img alt="2017-12-21-iphone-photoshop.jpg" src="https://blog.ideamans.com/assets/2017-12-21-iphone-photoshop.jpg" width="600" height="600" class="mt-image-none"><br>オリジナル画像<span>(434,381</span><span>Byte</span><span>)</span></td>
<td><img alt="2017-12-21-c-origin.jpg" src="https://blog.ideamans.com/assets/2017-12-21-c-origin.jpg" width="600" height="600" class="mt-image-none"><br>オリジナル画像同士の比較<span><br></span></td>
</tr>
<tr>
<td><img alt="2017-12-21-p100.jpg" src="https://blog.ideamans.com/assets/2017-12-21-p100.jpg" width="600" height="600" class="mt-image-none"><br>最高画質処理後(395,814Byte)</td>
<td><img alt="2017-12-21-c-p100.jpg" src="https://blog.ideamans.com/assets/2017-12-21-c-p100.jpg" width="600" height="600" class="mt-image-none"><br>オリジナル画像との比較 (約-38KBの削減、約9%軽量化)<span><br></span></td>
</tr>
<tr>
<td><img alt="2017-12-21-p080.jpg" src="https://blog.ideamans.com/assets/2017-12-21-p080.jpg" width="600" height="600" class="mt-image-none"><br>高画質処理後(192,734Byte)</td>
<td><img alt="2017-12-21-c-p080.jpg" src="https://blog.ideamans.com/assets/2017-12-21-c-p080.jpg" width="600" height="600" class="mt-image-none"><br>オリジナル画像との比較<span> (約-241KBの削減、約56%軽量化)</span></td>
</tr>
<tr>
<td><img alt="2017-12-21-p060.jpg" src="https://blog.ideamans.com/assets/2017-12-21-p060.jpg" width="600" height="600" class="mt-image-none"><br><span>やや高画質処理後</span>(112,313Byte)</td>
<td><img alt="2017-12-21-c-p060.jpg" src="https://blog.ideamans.com/assets/2017-12-21-c-p060.jpg" width="600" height="600" class="mt-image-none"><br>オリジナル画像との比較<span> (約-322KBの削減、約74%軽量化)</span></td>
</tr>
<tr>
<td><img alt="2017-12-21-p030.jpg" src="https://blog.ideamans.com/assets/2017-12-21-p030.jpg" width="600" height="600" class="mt-image-none"><br><span>中画質処理後</span>(55,026Byte)</td>
<td><img alt="2017-12-21-c-p030.jpg" src="https://blog.ideamans.com/assets/2017-12-21-c-p030.jpg" width="600" height="600" class="mt-image-none"><br>オリジナル画像との比較<span> (約-379KBの削減、約87%軽量化)</span><span><br></span></td>
</tr>
<tr>
<td><img alt="2017-12-21-p010.jpg" src="https://blog.ideamans.com/assets/2017-12-21-p010.jpg" width="600" height="600" class="mt-image-none"><br><span>低画質処理後</span>(32,788Byte)</td>
<td><img alt="2017-12-21-c-p010.jpg" src="https://blog.ideamans.com/assets/2017-12-21-c-p010.jpg" width="600" height="600" class="mt-image-none"><br>オリジナル画像との比較<span> (約-401KBの削減、約93%軽量化)</span><span><br></span></td>
</tr>
</tbody>
</table>
<p> </p>
<p><strong>高画質処理から、全体的に差分が見られます（全体的に赤い）。ファイルサイズの削減量も半分以上</strong>となっており、かなりの削減量です。<strong>やや高画質までは画質も見て悪いレベルにはなさそう</strong>です。中画質〜低画質になると、器の店名の部分にブロックノイズが入ってきているのがわかります。半熟卵のシズル感も荒くなってきています。<strong>食べ物系のサイトであれば、高画質くらいの画質をキープしないと美味しそうに見えない</strong>でしょう。個人ブログであれば、やや高画質でも問題なさそうです。</p>
<p><a href="https://core.lightfile.net/" target="_blank">LightFile Core</a>でも試してみましたが、<strong>元画像のファイル容量が小さかったので、大幅なファイルサイズの削減は行なえませんでしたが、それでも約５９％の削減ができています。<a href="https://www.adobe.com/jp/products/photoshop.html" target="_blank">Photoshop</a>の高画質よりも軽量化</strong>されています。</p>
<table border="0">
<tbody>
<tr>
<td><img alt="2017-12-21-lfc-better.jpg" src="https://blog.ideamans.com/assets/bab3640f084ea62e74a8d07f4f3f5c1bbe358800.jpg" width="600" height="600" class="mt-image-none"><br>LightFile Coreの高画質処理後<span>(<span>179,222</span></span><span>Byte</span><span>)</span></td>
<td><img alt="2017-12-21-c-lfc-better.jpg" src="https://blog.ideamans.com/assets/be7aff8341e562207635c8e1eb7d4005bbaffe47.jpg" width="600" height="600" class="mt-image-none"><br><span><span>オリジナル画像との比較</span><span> (約-255KBの削減、約59%軽量化)</span></span></td>
</tr>
</tbody>
</table>
<p>半熟卵のシズル感や、スープに浮いている油などもいい感じになっています。<strong>画質の品質は、Photoshopの高画質と比べても遜色ない</strong>状態です。<strong>LightFile Coreはサーバで実行されますので、Photoshopで個別で処理をしなくても、ファイルをアップロードしてしまえば、劣化が少なくファイルサイズが軽くなるように自動で処理を行います。自動処理なので、品質も均一、手間もかかりません</strong>。</p>
<p> </p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','lightfilecore',,{'nonInteraction':1});">https://core.lightfile.net/</a></p>
</div>
</div>
<p>無料トライアルも受付中ですので、お問い合せお待ちしてます！</p>
<p> </p>
<h2>最後に</h2>
<p>いかがでしたでしょうか？なお、<strong>JPGファイルは、Photoshopでひらいてそのまま最高画質で書き出すと、元ファイルよりもファイルサイズが肥大化するケースがあります</strong>。書き出したファイルのファイルサイズは、都度チェックするようにしましょう。</p>
<p> </p>
