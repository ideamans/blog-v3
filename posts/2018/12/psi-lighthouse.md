---
# Astrowind
title: 'Pagespeed Insight で Lighthouse が利用されるように。表示速度は、より重要度を増す方向に。スコアアップした方法を公開しました。'
excerpt: 'Googleが提供するPagespeed Insightは、2018年11月14...'
updateDate: 2020-06-18
publishedDate: 2018-12-04
tags: 
  - lighthouse

  - pagespeed-insights

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-12-04-psi-lighthouse-01.jpg
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 06:26:18
publishedAt: 2018-12-04 12:03:00
categories: 
  - lighthouse

  - pagespeed-insights

  - lightfile

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

  - 画像軽量化AI LightFile

authorId: nose
subTheme: 
recommended: false
---

<p>Googleが提供する<a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Pagespeed Insight</a>は、2018年11月14日から分析エンジンを監査ツールの <a href="https://developers.google.com/web/tools/lighthouse/?hl=ja" target="_blank">Lighthouse</a> に変更することを発表しています。Pagespeed Insightは多くのウェブ担当者の方が利用しているので、UIの変更などもあり気になっている方も多いのではないでしょうか。</p>
<ul><li><a href="https://webmaster-ja.googleblog.com/2018/11/pagespeed-insights-now-powered-by.html" target="_blank">PageSpeed Insights、Lighthouse の使用を開始しました | Googleウェブマスター向け公式ブログ</a></li></ul>
<p>そもそもPagespeed Insightとは？という方もいらっしゃるので、おさらいしていきます。</p>
<h2>Pagespeed Insightとは</h2>
<p>ウェブページの表示に関するパフォーマンスを点数化してくれます（100点満点）。また、改善できる箇所については、そのアドバイスもしてくれます。項目は固定化されており、項目ごとに改修を行うことで「スコアアップ＝パフォーマンス向上」という流れになります。</p>
<ul><li><a href="https://developers.google.com/speed/docs/insights/about" target="_blank">PageSpeed Insights について</a></li></ul>
<h3>利用するには</h3>
<p style="text-align: center;"><img alt="2018-12-04-psi-lighthouse-03.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-04-psi-lighthouse-03.jpg" width="1280" height="609" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Pagespeed Insightの画面。非常にシンプルで操作に迷うことはありません。</span></p>
<p>利用するのは非常に簡単で、２ステップで完了します。パフォーマンスチェックしたいURLを入力欄にいれ、「分析」ボタンをクリックするだけです。あとは待つだけでレポートが完成します。</p>
<h2>アイデアマンズブログをチェックしてみた結果</h2>
<p>先週くらいにLighthouseを利用してコツコツとスコアアップをしていました。Pagespeed Insightでは計測していなかったので、今回チェックしてみました。対象はトップページです。</p>
<ul>
<li>サーバ： AWS EC2 / nginx</li>
<li>CDN： 未導入</li>
<li>ページ表示： 静的配信</li>
</ul>
<p style="text-align: center;"><img alt="2018-12-04-psi-lighthouse-01.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-04-psi-lighthouse-01.jpg" width="1280" height="609" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">PCはなんと100点満点。コツコツとやった苦労が実りました。</span></p>
<p style="text-align: center;"><img alt="2018-12-04-psi-lighthouse-02.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-04-psi-lighthouse-02.jpg" width="1280" height="609" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">スマホ表示は76点。まだまだ改善するポイントがあります。</span></p>
<p>PCでは100点が取れています。Lighthouseでは主にモバイルブラウザでの評価なので、PCでの評価は気にしていませんでした。でも、100点満点は気持ちいです。スマートフォン表示は、76点でした。あれ？Lighthouseでは92点だったのに...。もしかすると、回線環境に依存するのかもしれません。作業場所の回線はそこそこ高速回線（下り80Mbps、上り200Mbps）なので、ローカルで実行するLighthouseの場合はスコアがいいのかな。。。</p>
<p style="text-align: center;"><img alt="2018-12-04-psi-lighthouse-04.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-04-psi-lighthouse-04.jpg" width="1279" height="606" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Lighthouseでの結果は、Performanceが92点。PWAなどのスコアも今後改善予定。</span></p>
<h2>パフォーマンス向上のために実施した改修ポイント</h2>
<p>スコアアップってどうやるの？というのが最も気になるところだと思います。しかし、スコアアップは「これをやれば良い」という項目は提示されるものの「自分のサイトでどのように実施するのか」は十人十色です。「これやればいいよ！」というのは、あまり通用しません。というのも、ウェブサイトのデザインは同じではなく、フロントエンドの実装も個別だからです。なので、「これやればいいよ」というのはできるケースとできないケースが存在します。</p>
<p>多くのサイトでチェックしたほうが良いことをまとめていきます。</p>
<h3>ウェブフォントのダウンロード量（+40点）</h3>
<p>ウェブフォントは比較的重いです。しかし、多くの提供元で軽く読み込める方法が提供されています。また、ウェブフォントではなくフォントファイルをサーバに配置し、直接読み込ませているかもしれません。</p>
<p>アイデアマンズブログでは、NotoSansからM Plusに変更しました。どちらもGoogleFontを利用していましたが、これにより40点アップしました。</p>
<h3>ソーシャルメディアのソーシャルプラグインの削除（+10点）</h3>
<p>ウェブサイトに「いいね！」してくれた数を表示できるソーシャルプラグインですが、これが重いです。特にファーストビューにある場合は、かなりパフォーマンスに影響が出てしまいます。アイデアマンズブログでは、詳細ページの「いいね数」はマーケティングの都合で重要視しているので外しませんでしたが、トップページは思い切って削除しました。これにより10点アップしています。</p>
<h3>画像遅延読み込み</h3>
<p>Lazyloadなどの画像遅延読み込みの導入です。アイデアマンズブログでは、シックス・アパート社が提供するオウンドメディアのテーマ「Rimo」をカスタマイズして利用しています。非常に使いやすいテーマですし、オウンドメディアを始めるにはぴったりです。</p>
<p>ただ、画像遅延読み込みはついていません。ぜひ導入しましょう。</p>
<ul><li><a href="https://www.sixapart.jp/pressroom/2017/07/hwsa_20170718.html" target="_blank">オウンドメディアにぴったりな Movable Type 用テーマ「Rimo」を公開しましたの巻 [ほぼ週刊SA]</a></li></ul>
<h3>画像軽量化も重要です</h3>
<p>アイデアマンズブログでは、自動の画像軽量化ツール「LightFile」が動いています。そのため、画像は常に軽量化された状態となっており、LighthouseやPagespeed Insightでも該当する項目をほぼ気にすることはありませんでした。さらに、WebP対応もできているので、画像周りに関してはほぼやることがないレベルに仕上がっています。</p>
<p>多くのウェブサイトは、まず画像軽量化と画像遅延読み込みを行うことが多いと思います。画像軽量化は、ぜひ自動でできるものを選択してください。手動での運用は限界があり、必ず未処理のファイルがでてきてしまいます。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank"><img src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="/assets/service-lfc.jpg" alt="JPGの軽量化は、LightFile | 画像最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank">JPGの最適化は、LightFile | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank">https://core.lightfile.net/contents/web-developer.html</a></p>
</div>
</div>
<p>月額1万円から利用できる高性能な画像軽量化ツール「LightFile」は、大手アパレルメーカーやメディアサイトなどで利用されています。特に画質の良さには定評があります。</p>
<h2>最後に</h2>
<p>パフォーマンスのスコアアップは、ウェブサイトに来てくれる人を待たせることなく情報を提供できるためにあります。しかし、スコアが出る以上、スコアアップを究極に目指すことも楽しくてよいと思います。点数のためにコンテンツが疎かになることもないはずですし、スコアアップは必ずよい結果に結びつくと思います。</p>
<p>関連情報</p>
<ul>
<li><a href="https://blog.ideamans.com/2018/12/pagespeed-insights.html">Google Pagespeed Insights 画像の４項目について調査＆考えてみた結果、画像軽量化とオフスクリーンの画像遅延読み込みはやるべきである</a></li>
</ul>
<p>画像軽量化に関して気になっている方は、以下のフォームからお気軽にリクエストください。無料で画像軽量化のレポートを私がお送りします！</p>
