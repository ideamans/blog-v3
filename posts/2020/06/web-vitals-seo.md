---
# Astrowind
title: 'Core Web Vitalsは検索順位にもう影響？ 検索順位が上がった生のSEOケーススタディ'
excerpt: 'このブログですが、特に検索エンジン対策をしたわけでもなく、2020年5月7日ごろ...'
updateDate: 2020-06-20
publishedDate: 2020-06-10
tags: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - seo

author: miyanaga
image: https://blog.ideamans.com/assets/search-console-ogp.png
category: seo

# カスタム
updatedAt: 2020-06-20 15:44:55
publishedAt: 2020-06-10 15:04:50
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
subTheme: bs4
recommended: false
---

このブログですが、特に検索エンジン対策をしたわけでもなく、2020年5月7日ごろから急にアクセスが増えました。週約3,000ユーザーから約4,500ユーザーへと+50%増です。

<a href="https://blog.ideamans.com/assets/c09e89255c721d41d079d73fd6a08a9ff6ff289d.png"><img alt="ga-increace.png" src="https://blog.ideamans.com/assets_c/2020/06/c09e89255c721d41d079d73fd6a08a9ff6ff289d-thumb-699xauto-1166.png" width="699" height="248" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

ほぼ同時期に変化したのは唯一、 [「ウェブに関する主な指標」(Core Web Vitals)](https://webtan.impress.co.jp/e/2020/06/05/36210) でした。

<a href="https://blog.ideamans.com/assets/core-web-vitals.png"><img alt="core-web-vitals.png" src="https://blog.ideamans.com/assets_c/2020/06/core-web-vitals-thumb-924xauto-1168.png" width="924" height="748" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

Search Consoleの以前の「速度」はFCPとFIDだけでしたが、Core Web Vitals (CLS/FID/LCP)の集計が開始されています。

<a href="https://blog.ideamans.com/assets/3metrics.png"><img alt="3metrics.png" src="https://blog.ideamans.com/assets_c/2020/06/3metrics-thumb-696xauto-1174.png" width="696" height="223" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

正確な因果関係は正直わかりません。Core Web Vitalsの評価は2021年からと認識していますし、**こんなに露骨に影響するか...？** という疑問もあります。

専門家の意見も集めたい意味で、ケーススタディのひとつとして赤裸々に紹介します。

## 目立った改善は未実施

大きな声で言うことではないのですが、この3ヶ月間、特に改善は実施していません。

* 広告による集客なし(もともと実施していません)
* 6月上旬にメール配信を実施
* 新規記事の急増はなし(3月2件、4月1件、5月3件)
* 既存記事のテコ入れやテンプレートの変更なし
* Search Consoleの「モバイルユーザビリティ」は変化なし
* Search Consoleの「パンくずリスト」は変化なし
* Search Consoleの<strong>「ウェブに関する主な指標」のみ改善(上述の通り)</strong>

## 集客力のあるキーワードの順位が上昇

Search Consoleを見てみるとこんな感じです。ビジネスブログなので曜日変動が大きいですが、5月7日あたりから**クリック数と表示回数が急増**しています。CTRと平均順位は横ばいです。

<a href="https://blog.ideamans.com/assets/search-console-chart.png"><img alt="search-console-chart.png" src="https://blog.ideamans.com/assets_c/2020/06/search-console-chart-thumb-923xauto-1170.png" width="923" height="384" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

直近28日間と、その前の28日間で上位キーワードを比較してみます。

<img alt="search-console-keywords.png" src="https://blog.ideamans.com/assets/search-console-keywords.png" width="3020" height="1110" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

集客に寄与しているキーワード(このブログの場合はWebP関連)の順位が上がり、クリック数が急増しています。表示回数はさほど増えていません。

全体としては表示回数も増えているので、ロングテールも伸びているということでしょうか。

ブログとしてはWebPを奨励しているはずなのに [「webp うざい」の集客力の高さ](https://blog.ideamans.com/2019/02/webp-chrome-extension.html) は苦笑です。

## UX評価指標の変化が原因？

あまりに心当たりがないのですが、 [3月にLighthouse 6.0.0の記事を書いた際](https://blog.ideamans.com/2020/03/pagespeed-lighthouse-6-draft.html) に、それに合せてテンプレートを少しだけチューニングをしていました。

Lighthouse 6.0.0および、現在のPageSpeed Insightsは、Core Web Vitals との親和性が高くなっています。

加えて、[Core Web Vitals の情報が5月5日に初出](https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html) とまた同時期であることを考えると、3月のチューニングによってこの頃にあったUX評価のアルゴリズムの変化に上手く乗れたのかな...という期待は持ちつつ、あるいは常に起こる順位の変動と、Core Web Vitalsの話題がたまたま一致しただけ...かもしれません。

