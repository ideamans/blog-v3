---
# Astrowind
title: 'カンタンにページで読み込まれる画像がわかる！Google Chromeのデベロッパーツールの「Networkパネル」を使ってみよう！'
excerpt: '東京は４年振りの積雪でしたね！白銀に包まれる都会はなかなか見ることができないので...'
updateDate: 2018-12-10
publishedDate: 2018-01-25
tags: 
  - lightfile

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-01-25-chrome-network-ogp.jpg
category: performance

# カスタム
updatedAt: 2018-12-10 21:37:06
publishedAt: 2018-01-25 17:00:00
categories: 
  - lightfile

  - performance

categoryLabels: 
  - 画像軽量化AI LightFile

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>東京は４年振りの積雪でしたね！白銀に包まれる都会はなかなか見ることができないので、幻想的な感じでしたね！</p>
<p>さて、今回はGoogle Chromeをお使いの方であれば、<strong>今みているウェブページでどのくらいの画像が読み込まれているのかを調べる方法</strong>です。フロントエンドの表示にこだわる方は、ぜひぜひ試してみましょう！</p>
<h2>Google Chromeのダウンロード</h2>
<p><img alt="2018-01-25-chrome-network04.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-01-25-chrome-network04.jpg" width="913" height="650" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>Chromeを利用していない方は、まずはダウンロードしましょう。</p>
<ul><li><a href="https://www.google.co.jp/chrome/browser/" target="_blank">Google Chrome</a></li></ul>
<p> </p>
<h2>Google Chromeのデベロッパーツールを起動する</h2>
<p>起動方法は３種類あります。</p>
<ol><li>ブラウザメニュー（ツールバー）から、「表示」＞「開発 / 管理」＞「デベロッパーツール」</li><li>F12キー（Windowsのみ？）</li><li>右クリックから、「検証」</li></ol>
<p>自分は右クリックから「検証」が多いです（Mac）。Windowsの時は問答無用でF12キーでした。</p>
<p> </p>
<h2>Networkパネルを開く</h2>
<p><img alt="2018-01-25-chrome-network01.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-01-25-chrome-network01.jpg" width="813" height="592" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>まずは上部にある「<strong>Network</strong>」をクリックします。他にも以下のパネルが存在します。</p>
<ol><li>Elements</li><li>Console</li><li>Sources</li><li><span style="color: #ff0000;"><strong>Network（今回はこれ）</strong></span></li><li>Performance</li><li>Memory</li><li>Application</li><li>Security</li><li>Audits</li></ol>
<p>パネルをひらいたら、ブラウザをスーパーリフレッシュします。WindowsであればCtrl+F5、MacであればComnd+Shift+Rです。ブラウザ上部のリロードボタンを長押しして、「キャッシュの消去とハード読み込み」をしても同じです。</p>
<p> </p>
<h2>Networkパネルで img 要素だけを調べる</h2>
<p><img alt="2018-01-25-chrome-network02.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-01-25-chrome-network02.jpg" width="814" height="740" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>次に、Networkパネルタブの下にある「<strong>img</strong>」をクリックします。そうすると、画像要素のみが項目として一覧になります。「All」がデフォルトになっていて、すべての要素が読み込まれた状態です。</p>
<p>下部にトータルのリクエスト数やダウンロード容量などが表示されています。それぞれ見ていきます。</p>
<ul><li>30 / 57 requests　リクエスト数です。全57リクエストあり、そのうちの30が画像のリクエスト。</li><li>483 KB / 4.2 MB transferred　転送量です。4.2MBのうち、483KBが画像の転送量。</li><li>Finish: 2.56 s　ページが表示されるまでの時間です。</li><li>DOMContentLoaded: 806 ms　HTMLの読み込みと解析が終わるまでの時間です。</li><li>Load: 2.17 s　ページの読み込みが終わるまでの時間です。</li></ul>
<p>Networkパネルの詳しい説明は、こちらがとても参考になります。</p>
<ul><li><a href="https://developers.google.com/web/tools/chrome-devtools/network-performance/resource-loading?hl=ja" target="_blank">リソース読み込み時間の測定 - CHROME DEVTOOLS</a></li></ul>
<p> </p>
<h2>キャッシュされているかどうかは、リロードするとわかる</h2>
<p><img alt="2018-01-25-chrome-network03.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-01-25-chrome-network03.jpg" width="812" height="695" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>Sizeの列が以下になっているものは、それぞれブラウザやPCにキャッシュされています。</p>
<ul><li>from disk cache</li><li>from memory cache</li></ul>
<p>キャッシュが効いているので、リクエスト数も転送量も減っていることがわかります。表示も速くなっていますね。</p>
<p> </p>
<h2>最後に</h2>
<p>いかがでしたでしょうか？Chromeブラウザは、閲覧も高速で、開発者にもよく使われているブラウザです。今回のように表示しているページのことを調べるにはとても便利なブラウザです。ぜひぜひ試してみましょう。</p>
<p>また、今回はこのブログのトップページを計測しました。このブログは、JPG最適化ツールのLightFileが導入されているので、サムネイルのサイズなどもかなり軽くなっています。ページ表示速度が気になる方は、画像の最適化も取り組みましょう。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<p>まだまだ雪も残っていますし、路面が凍結しているところもあります。転ばないように、歩きスマホとかしないようにしましょう！では！</p>
<p> </p>
