---
# Astrowind
title: 'レスポンシブ・ウェブ・デザインにおいて、画像最適化が意味するもの。高速回線ではない環境で、不要なデータサイズをダウンロードさせない事が重要。'
excerpt: 'スマートフォンでウェブサイトをみることが、本当に多くなってきました。ウェブサイト...'
updateDate: 2020-06-18
publishedDate: 2018-06-15
tags: 
  - web-imaging

  - lightfile

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-06-14-rwd-image-optimisation-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2020-06-18 10:28:41
publishedAt: 2018-06-15 08:30:00
categories: 
  - web-imaging

  - lightfile

  - performance

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>スマートフォンでウェブサイトをみることが、本当に多くなってきました。ウェブサイトの作りは十人十色であり、全く同じサイトは存在しないと行ってよいでしょう。今回は、レスポンシブ・ウェブ・デザイン（RWD）と画像最適化の関係について説明します。</p>
<p style="text-align: center;"><img alt="2018-06-14-rwd-image-optimisation-02.jpg" src="https://blog.ideamans.com/assets/2018-06-14-rwd-image-optimisation-02.jpg" width="1280" height="578" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">レスポンシブ・ウェブ・デザインを大きく普及させたBootstrap。現在のバージョンは4。</span></p>
<h2>レスポンシブ・ウェブ・デザインとは</h2>
<p>語弊を恐れずにいうならば、PCサイトとして作成したものを、同じソースコードでスマートフォンでも閲覧できるようにする方法です。CSSとJavascriptを利用して、ブラウザのウィンドウサイズによって表示を切り替えます。</p>
<p>今でこそスマートフォンが主流なので「スマホファーストのWeb制作」が当たり前ですが、RWDが出始めた頃は、まだまだPCサイトでの閲覧が多かった時代なのです。ガラケーサイトもあった時代ですし。</p>
<h2>レスポンシブ・ウェブ・デザインで利用する画像は、スマホのウィンドウには画角が大きい</h2>
<p>PCサイトでよく利用されている表現の一つに、スライダーがあります。トップページアクセスすると一番大きく表示されている画像が、時間とともに横にスライドしたりフェードイン・フェードアウトして切り替わるお馴染みの機能です。</p>
<p>このメインビジュアルに用いることが多いスライダーですが、一般的には「横幅1000pxから1200px」の画像サイズが多いです。PCであれば、モニタが1280px以上の解像度を持っているのがほとんどですので、問題ないなく表示することができます。</p>
<h3>スマートフォンのディスプレイサイズは多種多様。しかし720pxのディスプレイも</h3>
<p>iPhoneでは、750px以上のディスプレイサイズを持っています。しかもRetinaディスプレイですので横幅いっぱいにきれいな画像を表示するには倍角にあたる1500px以上が必要となります。</p>
<p>Androidでは、各社からさまざまな端末が発売されているため、ディスプレイサイズもさまざまです。その中で、720pxの端末がいくつか存在ます。この720pxの端末に上記の「横幅1000pxから1200px」の画像を表示すると、画角サイズとしてはオーバースペックなものとなります。本来は720pxあれば十分なので。</p>
<ul><li>参考：<a href="http://sounansa.net/archives/2428" target="_blank">2017年最新版　iPhone・Androidスマホ　機種別画面サイズ、解像度、縦横比のまとめ</a></li></ul>
<h2>画角が大きい画像は、ファイルサイズも大きい</h2>
<p>PNGやGIFであれば色数でファイルサイズが決まるので、画角サイズにはあまり影響されません。JPEGは画角サイズが大きければ大きいほど、ファイルサイズは大きくなります（PNGも利用する色数が多ければ、JPEGよりもファイルサイズが大きくなることがあります）。</p>
<p>実際にどのぐらい異なるのか、みていきましょう。</p>
<p style="text-align: center;"><img alt="2018-06-14-rwd-image-optimisation-ogp.jpg" src="https://blog.ideamans.com/assets/2018-06-14-rwd-image-optimisation-ogp.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">横幅1200pxの画像</span></p>
<p style="text-align: center;"><img alt="2018-06-14-rwd-image-optimisation-600.jpg" src="https://blog.ideamans.com/assets/2018-06-14-rwd-image-optimisation-600.jpg" width="600" height="338" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">横幅600pxの画像（アスペクト比は保持）</span></p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>画像</th><th>ファイルサイズ</th><th>容量の差</th></tr>
<tr>
<td>1200px - 675px</td>
<td style="text-align: right;">987KB</td>
<td style="text-align: center;"><span style="color: #000000;">-</span></td>
</tr>
<tr>
<td>600px - 338px</td>
<td style="text-align: right;">274KB</td>
<td style="text-align: center;"><span style="color: #99cc00;"><strong>713KB(約72%)軽い</strong></span></td>
</tr>
</tbody>
</table>
<p>ファイルサイズが大きく異なることがわかります。これは表示サイズが約1/4になっているためです。それに伴い、ファイルサイズも約72%と1/4近くまで削減されていることがわかります。</p>
<p>JPEGは画角サイズでファイルサイズが変わりますので、できるだけ最適な表示サイズで作成することが重要です。ディスプレイ表示サイズよりも大きな画像は重要ではないのです。</p>
<p style="text-align: center;"><img alt="2018-06-14-rwd-image-optimisation-01.jpg" src="https://blog.ideamans.com/assets/2018-06-14-rwd-image-optimisation-01.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #999999;">上に重なっているのが600pxの画像。表示サイズが変わると面積が大きく変わるのがよくわかります</span></p>
<h3>JPEGの最適化・軽量化にはLightFileがおすすめ</h3>
<p>JPEG画像はツールを使うことで、さらに軽くすることができます。弊社のLightFileなら、画質をキレイに保ったまま、ファイルサイズを軽くすることが可能です。無料のシミュレータを利用して、どのぐらい軽くなるのか、せひ試してみてください。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://simulator.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/images/service-simulator.jpg" alt="LightFile Simulator β版"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator β版</a></p>
<p class="serviceDesc">無料で使える画像最適化チェックシミュレータ。チェック結果がレポートになるので、URLを共有すればみんなでみれる。</p>
<p class="serviceLink"><a href="https://simulator.lightfile.net/" target="_blank">https://simulator.lightfile.net/</a></p>
<p> </p>
</div>
</div>
<p> </p>
<h2>最後に</h2>
<p>レスポンシブ・ウェブ・デザインは、デバイスごとにページ作成しなくてよいため、効率よくPCサイトとスマホサイトを制作することができます。有料のテーマもたくさんありますし、汎用的なテンプレートも数多く出ています。画像については制作するウェブサイトごとにオリジナルで作ることが多いでしょう。その時、画角サイズや画像軽量化をしっかりと行うことで、ウェブページの表示速度が速くなり、閲覧者にとってUXが高いウェブサイトと感じることができるようになります。</p>
<p> </p>
