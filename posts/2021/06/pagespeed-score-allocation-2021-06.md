---
# Astrowind
title: 'PageSpeed Insightsの配点に変化！ 採点エンジンLighthouse 8.0.0でCore Web Vitalsとの相関性強化'
excerpt: 'PageSpeed Insights が示すスコアは、6つの指標から計算されます...'
updateDate: 2021-06-03
publishedDate: 2021-06-03
tags: 
  - core-web-vitals

  - pagespeed-insights

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/pagespeed-insights-allocation-2.png
category: core-web-vitals

# カスタム
updatedAt: 2021-06-03 16:37:05
publishedAt: 2021-06-03 15:56:40
categories: 
  - core-web-vitals

  - pagespeed-insights

  - performance

categoryLabels: 
  - Core Web Vitals

  - PageSpeed Insights

  - 表示高速化

authorId: miyanaga
subTheme: bs4
recommended: false
---

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) が示すスコアは、6つの指標から計算されます。

本日6月3日、その6つの指標の配点が変更されたことが確認されました。

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTMee-_xS4Rr1waMzpJfMRYkufHYZN37FbdtnX2P4KYYypRI7Yrc2AYb0-c8WdhECG_EeN4xfVeywYh/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="320px"></iframe>

以前まで採点エンジンLighthouseのバージョンが`7.3.x`でしたが、今日の観測から`8.0.0`に変更されています。配点の変更はその結果です。

「なんかこの前測った数値と違う...」と感じたら、これが理由かもしれません。

# Core Web Vitalsとの相関性強化が狙い

今回の変更は一言にいえば、**Core Web VitalsとPageSpeed Insightsの相関性強化**でしょう。

**Core Web Vitalsの3指標、LCP・FID(TBT)・CLSの評価が高いほど、総合スコアが高くなる傾向が強く**なりました。

Core Web Vitalsに直接関係のないSpeed Index、FCP、TTIがそれぞれ配点10%にダウン。

シミュレーションではFID(ユーザーの最初の操作に対する応答時間)を計測できません。関係性が強いのがTBTとされており、今回の変更でそのTBTが配点上最大となる30%を占めるようになりました。

また、以前まで5%とおまけ程度だった CLSが一気に15%に大幅アップしています。

確かにCore Web VitalsとPageSpeed Insightsには違和感がありました。ついにランキング要因に組み込まれると言われるこの6月に合わせて是正されたようです。

