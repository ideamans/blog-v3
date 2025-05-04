---
# Astrowind
title: 'スマホでアクセスした時に、ファーストビューの表示までどのくらいかかる？WebPagetestですぐに調べてみよう！'
excerpt: 'スマホでページを開く時、サクサクみれるのが普通で、遅いとイライラする、というのが...'
updateDate: 2018-05-25
publishedDate: 2018-05-21
tags: 
  - performance

author: nose
image: https://blog.ideamans.com/assets/341df2df07df2d79db62a98187f7a4de146d0cbd.jpg
category: performance

# カスタム
updatedAt: 2018-05-25 09:07:59
publishedAt: 2018-05-21 08:00:00
categories: 
  - performance

categoryLabels: 
  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>スマホでページを開く時、サクサクみれるのが普通で、遅いとイライラする、というのが一般的です。これは、人それぞれ個体差があるのですが、Webページの場合、表示が早くて困る人は誰もいません。Webパフォーマンスをあげて、表示を速くする取組みをしっかり行なっていきましょう。</p>
<h2>もともとはAOLの社内ツール、Googleが開発＆サポートするオープンソースプロジェクト「Web Pagetest」</h2>
<p style="text-align: center;"><img alt="2018-05-18-webpagetest-01.jpg" src="https://blog.ideamans.com/assets/2018-05-18-webpagetest-01.jpg" width="1280" height="623" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Web Pagetestは日本語化されていないけど、シンプルなインターフェースなのでわかりやすい</span></p>
<p>最近のチェックツールも含めると、GoogleやGoogle関連のWebパフォーマンス関連のチェックツールは多くあります。</p>
<ol><li>TestMySite</li><li>Pagespeed Insight</li><li>Lighthouse</li><li><strong>Web Pagetest</strong></li></ol>
<p>今回は、Web Pagetestでファーストビューがどのくらいの時間がかかるのか、計測する手順をご紹介します。Web Pagetestのページでも紹介されていますが、もともとはAOLの社内ツールとして開発されたもの。現在は、Googleが開発＆サポートするオープンソースであり、プラットフォームはgithub上で開発状況などを診ることができます。</p>
<ul><li><a href="https://www.webpagetest.org/" target="_blank"><span>WebPagetest - Website Performance and Optimization Test</span></a></li><li><a href="https://github.com/WPO-Foundation/webpagetest" target="_blank"><span><span>GitHub - WPO-Foundation/webpagetest: Official repository for WebPagetest</span></span></a></li></ul>
<p> </p>
<h2>ファーストビューが表示されるまでを調べる手順</h2>
<p>今回は、シンプルであまり時間をかけない方法で、<strong>ファーストビューが表示されるまでの計測方法</strong>をご紹介します。</p>
<h3>手順</h3>
<ol><li>Simple testing タブに切り替える</li><li>計測したいURLを入力する</li><li>Test Configuration をMobile 4Gにする</li><li>Include Repeat View のチェックを外す</li><li>Run Lighthouse Audit のチェックを外す</li><li>Start Test ボタンをクリックする</li></ol>
<p>上記を行うことで、あとは計測が開始されて結果を待ちます。</p>
<p style="text-align: center;"><img alt="2018-05-18-webpagetest-02.jpg" src="https://blog.ideamans.com/assets/2018-05-18-webpagetest-02.jpg" width="1280" height="623" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">アイデアマンズブログで設定した画面。右側の黄色いStart Test ボタンをクリックすると計測が始まる。</span></p>
<p style="text-align: center;"><img alt="2018-05-18-webpagetest-03.jpg" src="https://blog.ideamans.com/assets/2018-05-18-webpagetest-03.jpg" width="1280" height="623" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">計測中の画面。タスクランナーのGruntが紹介されています。</span></p>
<h2>ファーストビューが計測されるどのように表示されるかをみてみよう</h2>
<p>計測が終わると、結果画面が表示されます。いろいろな計測数値が出ていますが、今回はファーストビューに限った部分でみていきます。計測結果画面を少し下にスクロールしてください。First Viewのエリアが出てきます。右側にある Filmstrip View をクリックします。</p>
<p style="text-align: center;"><img alt="2018-05-18-webpagetest-04.jpg" src="https://blog.ideamans.com/assets/985cddff78825dc416c90b6683cf028fca7c3903.jpg" width="1280" height="867" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">少し下にスクロールすると、First Viewに関する項目が最初に出てくる</span></p>
<p>クリックすると、Filmstrip Viewという画面に遷移します。この画面は、0.5秒ごとの画面キャプチャを取得してそれを並べて表示してくれます。なにかが画面が表示されるまでどのぐらいかかるのか、きちんと表示されるまでどのぐらい時間がかかるのかが、すぐにわかるようになっています。</p>
<p style="text-align: center;"><img alt="2018-05-18-webpagetest-05.jpg" src="https://blog.ideamans.com/assets/2018-05-18-webpagetest-05.jpg" width="1280" height="579" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">アイデアマンズブログでは、3.0sに描画がされていることがわかります。</span></p>
<p style="text-align: center;"><img alt="2018-05-18-webpagetest-06.jpg" src="https://blog.ideamans.com/assets/2018-05-18-webpagetest-06.jpg" width="1280" height="579" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">きちんと表示されるまでに6.0sかかっていることがわかります。</span></p>
<p>日本国内からアクセスしているわけではなさそうなので、実際の表示速度とは異なるケースもあると思います。しかし、計測する指標としては有効に利用できることでしょう。</p>
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
<p>ファーストビューの表示は、閲覧者にとってすぐに情報が手に入るかどうかを感じる第一歩です。ここに時間がかかってしまうと、閲覧者は離脱したり、再訪してくれなくなったりします。ページの描画速度は、JavascriptやCSSの処理でも大きく異なりますので、ファイルサイズのミニマム化はもちろん、リッチな表示を行うためのフロントエンドの最適化もしっかりと行いましょう。</p>
<p> </p>
