---
# Astrowind
title: '3G回線で何秒かかりますか？手軽に回線速度をかえて表示ができるChrome DevToolsのPerformanceパネルを使ってみよう！'
excerpt: '回線は速いほうがいいですよね！でも、すべての人が速い回線ではないとなると、今みて...'
updateDate: 2018-03-16
publishedDate: 2018-02-08
tags: 
  - web-imaging

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-02-08-chrome-performance-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:49:01
publishedAt: 2018-02-08 10:58:56
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

<p>回線は速いほうがいいですよね！でも、すべての人が速い回線ではないとなると、今みているページってどのくらいで表示されるんだろう？自分が作ったページはどのくらいかな？</p>
<p>通常はあまり意識されないかもしれませんが、<strong>「このページ、なかなか表示されないね？」と聞くとドキッとするWebデザイナーさんも多い</strong>と思います。WebデザイナーさんやWebエンジニアさんは、たいていの人は高速回線でインターネットを利用しているケースが多く、遅い回線での表示がそもそもできないのです。</p>
<p> </p>
<h2>DevToolsのPerformanceパネルなら、擬似的に3G回線が体感できる！</h2>
<p style="text-align: center;"><img alt="2018-02-08-chrome-performance01.jpg" src="https://blog.ideamans.com/assets/2018-02-08-chrome-performance01.jpg" width="1200" height="682" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">DevToolsのPerformanceパネル。さまざまな情報が細かく計測されています。</span></p>
<p><strong>ChromeのDevToolsにある「Performanceパネル」を利用</strong>しましょう。擬似的に回線速度を選ぶことができます。選べるネットワークは、以下の4つです。</p>
<ol><li>Online・・・設定なし（通常）</li><li>Fast 3G・・・擬似的に高速な3G回線</li><li>Slow 3G・・・擬似的に低速な3G回線</li><li>Offline・・・？？？</li></ol>
<p>まずはFast 3Gで試してみましょう。というのも、Slow 3Gは本当に遅くて、とても時間がかかってしまいます。</p>
<p>また、自分で設定を追加することもできます。低速な128Kbpsやプラチナバンドなど、自分に必要な設定を追加すれば、納品チェック時に大いに役立つでしょう。</p>
<p> </p>
<h2>ちょっと試す場合は、設定を変更しておこう</h2>
<p style="text-align: center;"><img alt="2018-02-08-chrome-performance02.jpg" src="https://blog.ideamans.com/assets/2018-02-08-chrome-performance02.jpg" width="1200" height="84" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">この３つを設定変更すると、かなり処理が速くなります。人前で使う時はオススメ。</span></p>
<p>かなり高機能なパネルですので、そのまま利用するとかなり時間がかかります。「ちょっと調べてみたい」という程度でしたら、設定を変更しておきましょう。</p>
<ol><li>Screenshots のチェックボックスをOFF</li><li>Disable JavaScript samples のチェックボックスをOFF</li><li>Enable advanced paint instrumentation(slow) のチェックボックスをOFF</li></ol>
<p>とくにScreenshotsは重いです。でも、これ楽しいというかわかりやすいです。</p>
<p> </p>
<h2>Screenshotsで経過時間ごとの表示が確認できる</h2>
<p style="text-align: center;"><img alt="2018-02-08-chrome-performance03.jpg" src="https://blog.ideamans.com/assets/2018-02-08-chrome-performance03.jpg" width="1200" height="729" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Yahoo! JapanをPCで計測したところ。トップページの描画が段階的にみれます。</span></p>
<p>ms(ミリ秒)で計測されていて、ところどころスクリーンショットをとってくれます。どの段階でどこまで表示されているか、が確認できるので、パラパラ漫画のような感じで眺められます。やっぱり表示が遅いのは外部広告系のJSですかね。外部ネットワークだし、パーソナライズまでしているので、ほかのコンテンツよりは表示に時間がかかってそうです。</p>
<p> </p>
<h2>高速表示には画像最適化が最も効果あり</h2>
<p>ページで利用されるファイルのうち、容量が重いのは画像とフォントです。フォントは変更されることがほとんどないので、キャッシュしちゃいましょう。でも、画像は日々更新され増えていきます。スマホのカメラも解像度上がっていますし、容量も増えています。</p>
<p><strong>LightFileは、SSIMという画像評価指数を元に、キレイで軽い画像に処理します。１つのパラメータで一括処理するのではなく、複数枚の処理画像を作成し、その中でキレイで軽い画像を選ぶ機能があります。</strong>なので、「この画像だけずいぶん劣化してる...」ということもないのです！</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p>サーバで処理するので、サイト全体をまるまる画像最適化できちゃいます！</p>
<p> </p>
<h2>最後に</h2>
<p>ChromeのDevToolsは本当に高機能です。ほかにもDevToolsのNetworkパネルについて記事を書いているのであわせてどうぞ！</p>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/Chrome?src=hash&amp;ref_src=twsrc%5Etfw">#Chrome</a> 便利ですよね！今回はNetworkパネルで、画像がどのくらい読み込まれているのかがわかる！というご紹介です。ちなみに画像と同じく重いのは、<a href="https://twitter.com/hashtag/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88?src=hash&amp;ref_src=twsrc%5Etfw">#フォント</a> です。<a href="https://t.co/iA9tes17Zt">https://t.co/iA9tes17Zt</a></p>
-- アイデアマンズ (@ideamans) <a href="https://twitter.com/ideamans/status/959235287011483653?ref_src=twsrc%5Etfw">2018年2月2日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<p> </p>
<p>ツールを上手く使って、品質を上げていきましょう！では！</p>
<p> </p>
