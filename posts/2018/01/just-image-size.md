---
# Astrowind
title: 'PC向けとスマホ向けでこんなにファイルサイズがかわる？！トップページのスライダー画像を調べてみた'
excerpt: 'だいぶ見慣れた感があるトップページに表示されるスライダー画像。最もアクセスの多い...'
updateDate: 2018-03-16
publishedDate: 2018-01-30
tags: 
  - web-imaging

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-01-30-imagesize01.jpg
category: performance

# カスタム
updatedAt: 2018-03-16 16:46:52
publishedAt: 2018-01-30 13:23:58
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

<p>だいぶ見慣れた感があるトップページに表示されるスライダー画像。<strong>最もアクセスの多いトップページの一番目に飛び込む位置に配置されていることが多く、見た目にもサイトの印象に大きな影響を与える表現</strong>の1つです。</p>
<p>今回は、PC向けとスマホ向けで、どのくらい容量に差があるのかを検証してみました。</p>
<p> </p>
<h2>なんと約85%も軽量化できる結果に</h2>
<p>PC向けのスライダー画像を、iPhone8のディスプレイで表示した場合、以下のような結果になります。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル</th><th>ファイルサイズ</th><th><span><span>PC向けとの差<br>(サイズ)</span></span></th><th><span>PC向けとの差<br>(割合)</span></th></tr>
<tr>
<td>PC向け</td>
<td style="text-align: right;">240KB</td>
<td style="text-align: right;">-</td>
<td style="text-align: right;">-</td>
</tr>
<tr>
<td>スマホ向け(Retina対応)</td>
<td style="text-align: right;">104KB</td>
<td style="text-align: right;"><span style="color: #ff0000;">136KB</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">約56%軽量化</span></td>
</tr>
<tr>
<td>スマホ向け</td>
<td style="text-align: right;">35KB</td>
<td style="text-align: right;"><strong><span style="color: #ff0000;">205KB</span></strong></td>
<td style="text-align: right;"><strong><span style="color: #ff0000;">約85%軽量化</span></strong></td>
</tr>
</tbody>
</table>
<p>なんと、スマホ向けに表示する画像を適切に利用すると、<strong>最大で約85%も軽量化できる</strong>結果に！iPhoneはRetinaディスプレイなので、キレイに表示するには倍角画像が必要ですが、それでも約56%の軽量化ができる結果になります。</p>
<p>比較した画像は以下の３枚です。</p>
<p style="text-align: center;"><img alt="2018-01-30-imagesize02.jpg" src="https://blog.ideamans.com/assets/2018-01-30-imagesize02.jpg" width="1200" height="540" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">1200px - 550pxのPC用画像</span></p>
<p style="text-align: center;"><img alt="2018-01-30-imagesize03.jpg" src="https://blog.ideamans.com/assets/2018-01-30-imagesize03.jpg" width="750" height="338" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">750px - 338px のRetinaディスプレイ向けスマホ用画像</span></p>
<p style="text-align: center;"><img alt="2018-01-30-imagesize04.jpg" src="https://blog.ideamans.com/assets/2018-01-30-imagesize04.jpg" width="375" height="169" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">375px - 169px のスマホ用画像</span></p>
<h2>どのくらい面積が異なるの？</h2>
<p><img alt="2018-01-30-imagesize01.jpg" src="https://blog.ideamans.com/assets/2018-01-30-imagesize01.jpg" width="1200" height="540" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>それぞれの画像を重ねてみると、どのくらい面積が異なるのかが直感的にわかります。本来375px（または750px）でよい表示に1200pxの画像を読み込んでいると、かなりのオーバースペックであることがわかります。</p>
<p> </p>
<h2>表示ロジックの選択が肝</h2>
<p>PC向けとスマホ向け、フロントエンドの実装では大まかに２つの流れがあります。</p>
<ol><li>デバイス向けにページ表示を出し分ける</li><li>レスポンシブ・ウェブ・デザインで表示する</li></ol>
<p>デバイス向けにページ表示を出し分ける場合は、それぞれのデバイスに最適化した画像を表示することが通常です。この場合は、上記の表の通り、最適化したサイズを用意して表示させるようになります。</p>
<p>レスポンシブ・ウェブ・デザインの場合は、表示に利用するHTMLは共有化することが多いため、画像表示の部分はデバイス判定で出し分けをする必要があります。PCの場合はPC用の画像を、スマホ端末の場合はスマホ用の画像を表示する。といった具合です。ただ、アクセスの負荷が高いトップページで動的な処理を入れるのを嫌うサイトも多くあるため、JSなどでクライアントサイドで画像の呼び出しを分けたり、PC用の画像をスマホでも表示するというケースもあります。</p>
<p> </p>
<h2>課題となるスマホ向けの画像サイズ</h2>
<p>PCは比較的ディスプレイサイズに規定があります。また、販売されているノートPCやデスクトップモニタは汎用的なサイズが主流です。比較的大きなサイズなので、その表示領域をすべて使うことはなく、各サイトの指定したサイズで表示が可能。PC向けの画像は１種類あればほぼ問題ありません。</p>
<p>しかし、スマホ端末のディスプレイは、ある程度汎用的なサイズがあるものの、毎年のように新しい規格のサイズが登場します。</p>
<ul><li><a href="https://sounansa.net/archives/2428" target="_blank">2017年最新版　iPhone・Androidスマホ　機種別画面サイズ、解像度、縦横比のまとめ</a></li></ul>
<p>さらに、どの端末が多く売れているかで、主流となるディスプレイサイズが決まります。高解像度のディスプレイが増えているため、倍角画像にするとPC用よりも大きな画像を用意しないと...なんていうケースも...。それぞれの端末ごとに画像を作成することは、かなり難しい（運用に時間がかかる）のが現状です。</p>
<p>このような状況から、PC用の画像をスマホ表示でも流用することで、制作側の運用負荷を軽減しつつ、表示をキレイに見せられるというのが現状のような気もします。もちろん、きちんとデバイス分けして表示しているサイトも多くあります。</p>
<p> </p>
<h2>最後に</h2>
<p>いかがでしたでしょうか。実際に数字にすると大きな違いがあるスライダー画像。しかし、運用側で対応しきれるケースも少ないのかもしれません。CMSでデバイスごとに画像をリサイズして出力するというケースも多くあるので、Web制作会社などに相談してみてはいかがでしょうか？</p>
<p>またリサイズではなく、そもそもの画像を軽量化するというのも重要なやり方です。画像が軽ければ、レスポンシブ・ウェブ・デザインでも、今までよりもスマホ表示が高速化することが可能になります。あわせて検討してみてください。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<p><span>利用した素材<br>Photo by </span><a href="https://unsplash.com/photos/4hgYULBzVEE?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jakub Kapusnak</a><span> on </span><a href="https://unsplash.com/search/photos/meat?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
<p> </p>
