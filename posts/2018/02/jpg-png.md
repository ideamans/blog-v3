---
# Astrowind
title: 'JPGにする？PNGにする？背景の透過がなければ、どちらの画像形式にするほうが軽くなるのか試してみよう'
excerpt: ' 1枚でWeb画像フォーマットがまるわかり！チートシート公開中 SMUSH PR...'
updateDate: 2020-12-19
publishedDate: 2018-02-05
tags: 
  - web-imaging

author: nose
image: https://blog.ideamans.com/assets/2018-02-05-jpg-png-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2020-12-19 10:43:48
publishedAt: 2018-02-05 15:20:02
categories: 
  - web-imaging

categoryLabels: 
  - Web画像最適化

authorId: nose
subTheme: bs4
recommended: false
---

<div class="serviceBox">
<div class="serviceImage"><a href="https://sim.lightfile.net/webp/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','cheatsheet',,{'nonInteraction':1});"><img src="https://blog.ideamans.com/assets/Smush-Guide-to-Image-formates-JP-fs8.png" data-echo="/assets/Smush-Guide-to-Image-formates-JP-fs8.png" alt="チートシート公開中" style="width:150px"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://sim.lightfile.net/webp/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','cheatsheet',,{'nonInteraction':1});">1枚でWeb画像フォーマットがまるわかり！チートシート公開中</a></p>
<p class="serviceDesc">SMUSH PRO Guide to Image Formats 日本語版。Web画像の正しい使い方と「今」がわかる海外ブログの最新記事<a href="https://premium.wpmudev.org/blog/best-image-formats-png-vs-jpg-svg-gif-webp/">Best Image Formats for Websites Compared! PNG, JPG, GIF, and WebP
</a>から著者の許可を得て翻訳しました。</p>
<p class="serviceLink"><a href="https://blog.ideamans.com/2019/02/-smush-pro-guide-to-image-formats.html" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','cheatsheet',,{'nonInteraction':1});">画像フォーマットの今が1枚でわかるチートシート SMUSH PRO Guide to Image Formats 日本語版</a></p>
</div>
</div>

<p><strong>Web制作の現場では、毎日さまざまな画像作成が行われています。</strong>今回はその画像作成の時にでてくる疑問について、ちょっと調べてみました。調べたのは、こんな疑問です。</p>
<ul><li><strong><span style="color: #ff0000;">この画像、どの画像形式で保存しようかな？JPG？PNG？それともGIF？</span></strong></li></ul>
<p>経験が多いWebデザイナーさんでも、意識して画像形式を選んでいる方はどのくらいいらっしゃるでしょうか。多忙を極めるWebデザイナーさんのために、ファイルサイズの違いを調べてみました。</p>
<p> </p>
<h2>結果</h2>
<p><strong>気になる結果ですが、JPGが軽いです。</strong>画質についても、JPGの画質を下げれば悪くなりますが、Photoshopでいうところの70や80では、画質が大きく損なわれることはないでしょう。透過がない条件が必要ですが、JPGにするのがファイルサイズが軽くなります！</p>
<p> </p>
<h2>調査してみて</h2>
<p><strong>当初の予想としては、やはりPNGよりJPGのほうが軽いという予想</strong>でした。これは、不可逆圧縮と可逆圧縮の違いもありますし、JPGのような枯れた画像形式の方がデータ量は少ないと考えていたからです。今回は予想通りという感じです。</p>
<p> </p>
<h2>実際の計測データ</h2>
<p>640×480という小さめな写真で比較しました。PNG8が最も軽いのですが、画質の劣化（減色処理）がかなりあるため、処理後の画像は写真としては利用できる品質にないと判断しました。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>画像形式</th><th>ファイルサイズ</th></tr>
<tr>
<td>PNG24</td>
<td style="text-align: right;" class="text-red"><span style="color: #000000;">294KB</span></td>
</tr>
<tr>
<td>PNG8</td>
<td style="text-align: right;">91KB</td>
</tr>
<tr>
<td>JPG(画質80)</td>
<td style="text-align: right;">161KB</td>
</tr>
</tbody>
</table>
<p style="text-align: center;"><img alt="2018-02-05-jpg-png01.png" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-02-05-jpg-png01.png" width="640" height="320" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #808080;">PNG24の画像。さすがにキレイで問題のない画質。</span></p>
<p style="text-align: center;"><img alt="2018-02-05-jpg-png02.png" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-02-05-jpg-png02.png" width="640" height="320" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #808080;">PNG8の画像。雲や水面の波紋の劣化が特にひどい。</span></p>
<p style="text-align: center;"><img alt="2018-02-05-jpg-png03.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-02-05-jpg-png03.jpg" width="640" height="320" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #808080;">写真といえばJPG。不可逆圧縮なので、容量はとても軽い。</span></p>
<h2>PNGには、PNG8とPNG24がある(PNG32もある)</h2>
<p>PNGは、PNG8とPNG24を試してみました。PNG8よりもPNG24の方が扱える色数が多いので、写真などにも利用しやすい画像形式です。PNG8は、GIFと同じ256色を扱うことができます。写真などには厳しい色数ですので、ロゴやベクターデータで作成したもの（色数少ないもの）にはよさそうです。ケースバイケースで使い分けましょう。</p>
<p>PNG8とGIFの違いは、Adobeさんのページがよくまとまっています。</p>
<ul><li><a href="https://helpx.adobe.com/jp/photoshop-elements/mac-app-store/help/optimizing-images-gif-or-png.html" target="_blank">GIF や PNG-8 形式として最適化</a></li></ul>
<p>PNG32もあるんですが、Photoshopで扱えないので割愛します。</p>
<p> </p>
<h2>最後に</h2>
<p>透過がある場合は、<strong>JPGは透過ができないのでPNG</strong>での保存になります。この透過のありなしが画像形式を選ぶ際の大きなポイントになります。</p>
<p>Photoshopは書き出し時の設定を記憶するので、前回保存した画像形式で保存しやすいようになっています。しかし、<strong>PNGとJPGでは約50％ちかいファイルサイズの差</strong>があります。ファイルサイズは、ウェブページでの表示に大きく影響を与えますので、できるだけ軽くなる画像形式を都度選びましょう。</p>
<p>Webデザイナーさんは本当に忙しい職業なので、年度末のデスマーチに向けて体調管理を気をつけてくださいね！</p>
<p>--</p>
<p>今回利用した素材はこちら　<span>Photo by </span><a href="https://unsplash.com/photos/9R1QOrTRR9s?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Will O</a><span> on </span><a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash<br></a><a href="https://unsplash.com/photos/9R1QOrTRR9s" target="_blank">https://unsplash.com/photos/9R1QOrTRR9s</a></p>
<p> </p>
