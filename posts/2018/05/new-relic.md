---
# Astrowind
title: '合成モニタリングツール New Relicを試してみよう。グラフィカルなグラフは、視覚的にみやすい上に直感的に状況を把握できる！'
excerpt: '前回ブログ記事「Webパフォーマンスは、RAILモデルで計測する。ユーザーファー...'
updateDate: 2018-05-25
publishedDate: 2018-05-16
tags: 
  - performance

author: nose
image: https://blog.ideamans.com/assets/5cd2a002d3fcbfac606fb632d60e10752b641713.jpg
category: performance

# カスタム
updatedAt: 2018-05-25 09:08:16
publishedAt: 2018-05-16 19:00:00
categories: 
  - performance

categoryLabels: 
  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>前回ブログ記事「<a href="https://blog.ideamans.com/2018/05/rail.html" target="_blank">Webパフォーマンスは、RAILモデルで計測する。ユーザーファーストで考える最適化。</a>」では、RAILモデルでの計測概念をお伝えしました。</p>
<p>今回は、いくつかある定点観測用のツールのうちNew Relicというサービスをご紹介します。グラフィカルでわかりやすく、シンプルなのが特徴です。サーバーのパフォーマンスモニターとして超有名なのでプログラマーの方にはきっとお馴染みですが、フロントエンドの性能測定にも使うことができるのでご紹介します。</p>
<ul><li><a href="https://newrelic.com/" target="_blank">New Relic: Digital Performance Monitoring and Management</a></li></ul>
<p> </p>
<h2>合成モニタリングツール New Relic</h2>
<p style="text-align: center;"><img alt="2018-05-16-newrelic-04.jpg" src="https://blog.ideamans.com/assets/2018-05-16-newrelic-04.jpg" width="1149" height="652" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">New Relicのウェブサイト</span></p>
<p>合成モニタリングツールとは、複数のデータを組み合わせて（合成）、それをモニタリング（監視）するツールです。<strong>個別に指標をたてて監視してもよいのですが、リリースされているサービスを利用することで、すぐに一般的な指標をモニタリングすることができる</strong>ようになります。学習コストが少ない状態からすぐに始めることができます。</p>
<p>New Relicは有料のサービスですが、Trialも可能です。Trial版は14日間利用できるそうですので、検証期間としては十分ですね。</p>
<h3>利用方法</h3>
<p>かんたんに利用できるように、さらっと利用方法を記載します。</p>
<ol><li>トライアル申し込みする　<a href="https://newrelic.com/signup?trial=apm" target="_blank">https://newrelic.com/signup?trial=apm</a></li><li>利用するサービスを選ぶ</li><li>JavascriptのコードをWebサイトに埋め込む</li></ol>
<p>利用できるNew Relicのサービスは、6種類あります。Webサイトの場合は、「<strong>New Relic BROWSER</strong>」を選びます。</p>
<p style="text-align: center;"><img alt="2018-05-16-newrelic-01.jpg" src="https://blog.ideamans.com/assets/2018-05-16-newrelic-01.jpg" width="1280" height="623" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">AWS用のAPMや、スマホアプリ用もあるので用途が広い</span></p>
<p> </p>
<p>トライアルの申込がわかりづらいですが、トップページの下の方にあります。</p>
<p style="text-align: center;"><img alt="2018-05-16-newrelic-05.jpg" src="https://blog.ideamans.com/assets/2018-05-16-newrelic-05.jpg" width="1149" height="652" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Start a free trial をクリックして申込みに進める</span></p>
<p>試しにこのブログにJavascriptのコードを埋め込んでみました。overviewで概要がみれますが、シンプルでわかりやすいです。そして、意外と読み込みに時間がかかっているのと、時間がかかるケースとかからないケースが混ざっています。ちょっとした変化も見やすいですね。</p>
<p style="text-align: center;"><img alt="2018-05-16-newrelic-03.jpg" src="https://blog.ideamans.com/assets/2018-05-16-newrelic-03.jpg" width="1282" height="815" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">他のモニタリングツールよりもクールで見やすいグラフ</span></p>
<p style="text-align: center;"><img alt="2018-05-16-newrelic-07.jpg" src="https://blog.ideamans.com/assets/2018-05-16-newrelic-07.jpg" width="1200" height="667" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">10秒を超えるケースも。ページの描画部分で大きく時間がかかっているのがわかります。</span></p>
<p>AJAXやJSエラーなどもモニタリングできるので、細かいところでもわかりやすくモニタリングすることができます。Zabbixのような監視ツールとは異なり、次世代型の合成モニタリングツールと行った印象があります。</p>
<p> </p>
<h2>あなたのウェブサイトの画像は最適化されているか無料でチェックしよう</h2>
<p>ページの読み込み速度の向上には、画像最適化が非常に大きな効果を発揮します。HTMLやCSSといったテキストファイルはもともとのファイルサイズが大きくないので、削減効果としては少なめ。画像はテキストファイルの最適化に比べると10倍以上の効果を発揮することができます。無料のチェックツールで、すぐに調べてみましょう。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://simulator.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/images/service-simulator.jpg" alt="LightFile Simulator β版"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator β版</a></p>
<p class="serviceDesc">無料で使える画像最適化チェックシミュレータ。チェック結果がレポートになるので、URLを共有すればみんなでみれる。</p>
<p class="serviceLink"><a href="https://simulator.lightfile.net/" target="_blank">https://simulator.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<h2>最後に</h2>
<p>合成モニタリングは、定点観測して変化があると通知してくれたりします。月次でのチェックや、アクセスが多くなる・多かったときなどにも見直しができるので、入れておくことをオススメします。レコーディングすることで、数値も意識できるようになり、改善策もきっとみえてきます。</p>
<p> </p>
