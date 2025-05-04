---
# Astrowind
title: 'PageSpeed Insightsのスコア大変動か？ Lighthouse 6 で変わる採点ルールを先取りチェック！'
excerpt: '2020年3月現在、PageSpeed Insightsの内部ではLightho...'
updateDate: 2020-06-18
publishedDate: 2020-03-18
tags: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - seo

author: miyanaga
image: https://blog.ideamans.com/assets/5b81faea1ca32c1e60e73518468ef0ba1f204a92.png
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 10:25:25
publishedAt: 2020-03-18 17:30:49
categories: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - seo

categoryLabels: 
  - Core Web Vitals

  - Lighthouse

  - PageSpeed Insights

  - SEO

authorId: miyanaga
subTheme: 
recommended: false
---

2020年3月現在、PageSpeed Insightsの内部ではLighthouse 5.6が使われていますが、Lighthouseの次期バージョン6で採点ロジックが変わる予定があります。

※ 本記事は Lighthouse 6.0-beta.0 に基づいて執筆しています。将来的なリリースとは異なる可能性があります。

[Lighthouse performance scoring](https://web.dev/performance-scoring/)

<a href="https://blog.ideamans.com/assets/lighthouse-5-to-6.png"><img alt="lighthouse-5-to-6.png" src="https://blog.ideamans.com/assets_c/2020/03/lighthouse-5-to-6-thumb-800xauto-1128.png" width="800" height="795" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

あれ、なんか変じゃない？ と思った方は鋭い！ Lighthouse 6のWeightをすべて足しても95%にしかなりません。

調べてみたところ、[Cumulative Layout Shift (CLS)](https://web.dev/cls/) で評価される5%が隠れていることがわかりました。これまで5つだったスコア計算の指標は、Lighthouse 6で6つに増えます。

<img alt="lighthouse-weight-table.png" src="https://blog.ideamans.com/assets/5b81faea1ca32c1e60e73518468ef0ba1f204a92.png" width="877" height="407" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

## Lighthouse 6でAmazonのスコアは約20点もダウン

例えば[Amazon | 本, ファッション, 家電から食品まで | アマゾン](https://www.amazon.co.jp/) の`Performance`スコアを計測すると、 **Lighthouse 5.6では 58点 ですが、Lighthouse 6.0-beta.0 では 39点 に低下しました。** かなり大きな変化です。

一概に下がるとも言えず、**スコアが上がるサイトもあります。** また別の記事でレポートしたいと思います。

ここではLighthouse 6でどんな変化があるのか見てみましょう。

## JavaScript偏重が若干緩和

PageSpeed Insightsは**表示速度の測定ツール**、と理解されている方が多いのですが、実際は**起動速度の測定ツール**と言ったほうがしっくり来ます。

そこには表示速度も含まれるものの、JavaScriptに対して思いのほか大きなウェイトが置かれています。目に見えにくいJavaScriptの負荷が高いページでは、スコアが大きく下がるのです。

**「表示は遅くないのにPageSpeed Insightsのスコアが低い」**というWebマスターを悩ます認知的不協和はここに起因します。

大雑把に言うと、これまで約46%を締めていたJavaScript関連の評価ウェイトが40%に減少します。表示速度は44%から45%に据え置きですが、その分、ユーザビリティの評価5%が新たに加わります。

※ ただ、JavaScriptが大量に読み込まれるページでは、レンダリングブロックにより表示速度も低下するのでもう全面的にダメージを受けます。高速化においてもJavaScriptは最強の敵です。

## FMPからLCPへ

`FMP`(`First Meaningful Paint`)によるスコア評価は、目的のよく似た`LCP`(`Largest Conetntful Paint`)に変わります。

複雑で不可解な結果をもたらす`FMP`から、シンプルな`LCP`に移行するようです。

> In the past we've recommended performance metrics like First Meaningful Paint (FMP) and Speed Index (SI) (both available in Lighthouse) to help capture more of the loading experience after the initial paint, but these metrics are complex, hard to explain, and often wrong--meaning they still do not identify when the main content of the page has loaded.

[Largest Contentful Paint (LCP)](https://web.dev/lcp/)

確かに、**"Meaningful"**とはいかにもコンピューターには不向きな概念。`LCP`なら定量的な比較で再現できる上、人間にもわかりやすい筋道が設けられています。DevtoolsのタイムラインでLCPバッジをマウスオーバーすると対象の要素が強調表示されるので、何が**"Largest"**だったか確認できるのです。

<img alt="lcp-check.gif" src="https://blog.ideamans.com/assets/lcp-check.gif" width="762" height="470" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

[Chromium](https://github.com/chromium/chromium)ではこのあたりが実装部分のようです(ナナメ読み程度ですが)。テキスト要素または画像要素が`LCP`測定の対象になると読み取れます。

[chromium/largest_contentful_paint_calculator.cc at fb472c78b5ecd6d96ef90713d886ce2e0010e616 · chromium/chromium](https://github.com/chromium/chromium/blob/fb472c78b5ecd6d96ef90713d886ce2e0010e616/third_party/blink/renderer/core/paint/largest_contentful_paint_calculator.cc)

ファーストビューに大きな**ヒーロー画像**を配置するデザインはド定番なので、画像の軽量化・最適化が重要になりそうです。

## First CPU IdleからTotal Blocking Timeへ

`First CPU Idle`は、1秒以内に続けて発生するロングタスクをクラスターとしてまとめ、250ms以上のクラスターが時間経過ともに変化する5〜3秒間の時間窓に発生しなかったタイミングを調べる...というものですが、まぁなんてややこしい。

<a href="https://blog.ideamans.com/assets/first-cpu-idle.png"><img alt="first-cpu-idle.png" src="https://blog.ideamans.com/assets_c/2020/03/first-cpu-idle-thumb-400xauto-1132.png" width="400" height="152" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>
[lighthouse/first-cpu-idle.js at v5.6.0 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/blob/v5.6.0/lighthouse-core/computed/metrics/first-cpu-idle.js)

`Total Blocking Time`はシンプルです。`Time To Intaractive`までのロングタスクのお釣り時間(スレッド専有時間-50ms)の合計です。

<a href="https://blog.ideamans.com/assets/total-blocking-time.png"><img alt="total-blocking-time.png" src="https://blog.ideamans.com/assets_c/2020/03/total-blocking-time-thumb-400xauto-1134.png" width="400" height="327" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>
[lighthouse/total-blocking-time.js at v6.0.0-beta.0 · GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse/blob/v6.0.0-beta.0/lighthouse-core/computed/metrics/total-blocking-time.js)

いずれにしても狙って改善できる代物ではないので、とにかくロングタスクの沈静化に努力するほかありません。

## Cumulative Layout Shift (CLS)

`Cumulative Layout Shift`は、ページの描画後に途中に要素が挿入されてレイアウトがズレる現象のことです。押そうと思ったボタンと別のボタンを押してしまうなどのイライラを引き起こします。

<img alt="layout-shift-2.png" src="https://blog.ideamans.com/assets/layout-shift-2.png" width="1600" height="1200" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />
[Cumulative Layout Shift (CLS)](https://web.dev/cls/) より引用

後からズレることがなければ満点。ズレは**ビューポート上の位置 × ズレた幅**で計算されるようです。つまり上の方で大きくズレるとほどスコアが下がります。

## Lighthouse 6に備えよう

PageSpeed InsightsにLighthouse 6がいつから導入されるかは未定です。スコア改善のために頑張る内容は、結局のところ大きくは変わりません。

ただ、わりとスコアの変動がありそうなので、急にスコアが変わったらバージョンが上がった可能性も考慮するとよいでしょう。

また別の記事で、既存サイトにどのような影響があるか詳しく検証してみたいと思います。

<iframe src="https://blog.ideamans.com//www.ideamans.com/_mautic/form/37" width="100%" height="700"><p>Your browser does not support iframes.</p></iframe>
