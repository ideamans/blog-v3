---
# Astrowind
title: 'PageSpeed スコア別の傾向と対策。20点未満のサイトが改善の前に見るべきこと'
excerpt: '先日、GIGAZINEでLighthouse / PageSpeed Insig...'
updateDate: 2020-06-18
publishedDate: 2019-07-23
tags: 
  - lighthouse

  - pagespeed-insights

author: miyanaga
image: https://blog.ideamans.com/assets/spi-chart.png
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 06:22:25
publishedAt: 2019-07-23 07:47:01
categories: 
  - lighthouse

  - pagespeed-insights

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

authorId: miyanaga
subTheme: 
recommended: false
---

先日、[GIGAZINEでLighthouse / PageSpeed Insightsのスコアが取り上げられ](https://gigazine.net/news/20190718-google-pagespeed/)、多くのシェアを集めていました。

その中でも紹介されていますが、スコアの改善に取り組む前に、スコアの変化が曲線的であることに理解が必要です。

[PageSpeed Insightsのスコア曲線 \- Qiita](https://qiita.com/miyanaga/items/1b0cd9c65460df119649)

<img alt="spi-chart.png" src="https://blog.ideamans.com/assets/spi-chart.png" width="817" height="542" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

横軸の単位が抜けてしまいましたが、ミリ秒(1/1000秒)です。このチャートは、PageSpeedスコアについて大まかに次のような特徴を示しています。

* 20点〜90点のゾーンは1秒未満〜数秒の時間短縮でスコアが大きく改善される
* 20点未満のゾーンはスコアの改善に5〜10秒単位の短縮が求められる

※ 20点や90点は、「10点刻みだとなんとなくそのあたり」という感覚的な数値です。

例えばJavaScriptを最適化して、50点を60点に改善した手法を、10点のサイトに適用しても20点に上がるという訳にはいかないということです。

この曲線はPCでもモバイルでも同じです。モバイル向けのスコアは、通信速度とマシン性能を意図的に下げて計測されるだけです。

## 指摘事項への対応でスコアを上げるにはある程度スコアが必要

PageSpeed Insightsを実行すると、さまざまな指摘事項が表示されます。

これらの指摘の多くは、それぞれ1秒未満〜よくて数秒程度の時間短縮にしかつながりません。あらかじめスコアが動きやすい20〜90点のゾーンにないと焼け石に水です。

## スコアの低いページは過積載か重大なボトルネックがある

重大なボトルネックでスコアが低迷する場合があります。過去に実際に目にしたのは、

* ページの一部がJavaScriptの同期通信 + document.writeで描画されていた。
* メインビジュアルが5MB以上あった(画像編集ソフト向けの元データがヘッダに格納されていた)。

専門家からすると冗談のような話ですが、発見されずにいました。

ここまで顕著なボトルネックはレアケースで、多くの場合はコンテンツや機能の過積載です。

1トンの荷物を積んでサーキットタイムが伸びないと悩むようなものです。まずはページの分割や、主要機能以外を動的に遅延読み込みすることを検討しましょう。

## サードパーティJavaScriptの使いすぎに注意

サードパーティーJavaScriptとは、サイト外のサービスや機能を利用するためのJavaScriptです。

* アクセス解析
* 広告関連
* ウィジェットパーツ

などが代表的です(CDNを利用してjQueryなどのライブラリを読み込むのはここでは別とします)。

いずれも必要なので導入するものですが、パフォーマンスには少なからず影響があります。スコアが10点単位で下がるケースもあり、注意が必要です。

これらは利用側に改善の余地がほとんどありません。サードパーティJavaScriptによって下げられた結果スコアが、ほぼそのページの限界スコアです。

