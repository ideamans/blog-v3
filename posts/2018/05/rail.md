---
# Astrowind
title: 'Webパフォーマンスは、RAILモデルで計測する。ユーザーファーストで考える最適化。'
excerpt: '表示高速化は、体感ではなく数値化して効果測定をしていくのが一般的です。Webパフ...'
updateDate: 2018-05-25
publishedDate: 2018-05-15
tags: 
  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-05-15-rail-ogp.jpg
category: performance

# カスタム
updatedAt: 2018-05-25 09:08:30
publishedAt: 2018-05-15 09:00:00
categories: 
  - performance

categoryLabels: 
  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>表示高速化は、体感ではなく数値化して効果測定をしていくのが一般的です。Webパフォーマンスにおいても、何かしらの数値化と定点観測を行うことで、状況の把握が正確にできるようになります。今回は、数値化についてRAILモデルをご紹介します。</p>
<h2>RAIL（Response Animation Idle Load）モデル</h2>
<p style="text-align: center;"><img alt="2018-05-15-rail-01.jpg" src="https://blog.ideamans.com/images/2018-05-15-rail-01.jpg" width="1280" height="730" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">RAILモデルの紹介ページ（Web Fundamentalsより）</span></p>
<p>RAILモデルは、Google Web Fundamentalsで公開されています。ユーザーファーストに基いて考えられた、ユーザーを中心に考えるパフォーマンスモデルです。4つの異なる視点を最適化するモデルとなります。</p>
<ul><li><a href="https://developers.google.com/web/fundamentals/performance/rail" target="_blank">RAIL モデルでパフォーマンスを計測する | Web Fundamentals</a></li></ul>
<p> </p>
<h3>4つの異なる側面とは</h3>
<p>RAILモデルを構成する4つの側面は以下のとおりです。</p>
<ol><li>Response（レスポンス：応答速度）</li><li>Animation（アニメーション：動き）</li><li>Idle（なにもしていない状態）</li><li>Load（読み込み速度）</li></ol>
<p> </p>
<h2>遅延とユーザーの反応</h2>
<p>Web Fundamentalsのページには、数字が細かく掲載されています。1,000ミリ秒（1秒）を超えると、やはり何かしらの諦めが起きてしまうようです。</p>
<p style="text-align: center;"><img alt="2018-05-15-rail-03.jpg" src="https://blog.ideamans.com/images/9040258b83e1429b2f6cf6e46e86950c105389b8.jpg" width="1280" height="540" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">0.3秒ですでにユーザーはやや遅いと感じる</span></p>
<p>テレビのフレームレートは60フレーム/秒だったと思いますが、10年くらい前の家庭用のデジカメやビデオカメラで撮影する時は、デフォルトは30フレーム/秒だったと思います。やはりTVと同じフレーム数が、Webでも必要なようです。</p>
<p>10,000ミリ秒（10秒）以上かかるようだと、たしかに離脱率は相当高そうです。このあたりは、通常は発生しないはずですが、大量の同時アクセス時にどこまでアクセスをさばけるのかというところではないでしょうか。ECアパレルの場合、セールや福袋のタイミングは通常とは比べ物にならないくらいの同時アクセスがあります。売上にも直結するので、このあたりの対策や、負荷テストをしっかりとすることが重要です。</p>
<p> </p>
<h2>RAILモデルの重要なメイトリクス概要</h2>
<p>かなりハイレベルな数値が並びますが、たしかにこれをクリアし続ければ「高速なWebパフォーマンス」であることは証明できます。そして、絶対に不可能な数値でもなさそうです。</p>
<p style="text-align: center;"><img alt="2018-05-15-rail-02.jpg" src="https://blog.ideamans.com/images/2018-05-15-rail-02.jpg" width="1280" height="476" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">ユーザー中心での考え方なので、数値は絶対的な速度ではなくあくまでユーザーがどう感じるかの数値設定になっている</span></p>
<p>今は、DevToolsにはTimelineツールがないので、Performanceパネルを使いましょう。ミリ秒で表されているので、RAILモデルで紹介されている数値をそのまま利用できるのでわかりやすいです。</p>
<p> </p>
<h2>画像最適化すれば表示速度は速くなるので、無料でチェック</h2>
<p>LightFile Simulatorを利用して、画像が最適化されているかどうかをチェックしましょう。URLを入力するだけで、そのページで利用されているJPG画像が最適化されているかどうか、確認することができます。メールで結果が欲しい場合も、入力したメールアドレスにレポート結果を送ることができます。無料なのでぜひチェックしてみましょう。</p>
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
<p>今回はRAILモデルという計測方法をご消化しました。表示高速化は、ネットワークやサーバスペック、ディスクIOやコーディング、SQLなど、本当にさまざまな要素が絡むのが一般的です。Webサイトは常に施策を打って変化していくので、しっかりと定点観測を行なって「いつの間にか遅くなっていた」ということにならないようにしましょう。</p>
<p>では！</p>
<p> </p>
