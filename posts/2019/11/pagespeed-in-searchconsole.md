---
# Astrowind
title: 'SearchConsoleに「速度」レポートが出現！'
excerpt: 'いまいち実態のわからないSpeed Updateでしたが、Search Cons...'
updateDate: 2020-06-18
publishedDate: 2019-11-05
tags: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - seo

author: miyanaga
image: https://blog.ideamans.com/assets/8bca18ab64ad5df5d35af314128053a6f0788964.png
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 10:25:48
publishedAt: 2019-11-05 12:32:00
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

いまいち実態のわからないSpeed Updateでしたが、Search Consoleのメニューに**「速度(試験運用版)」**が追加されました。

検索順位との関係が明らかになっていくとよいですね。

### 11月5日 12:41 追記

こちらで公式の紹介がありました。

[Official Google Webmaster Central Blog \[EN\]: Get faster with the new Speed report in Search Console](https://webmasters.googleblog.com/2019/11/search-console-speed-report.html?fbclid=IwAR0lWHaKNFvP3lmoqqSco2l7vbEjWgPf-sL6pDADA6AKZt1c1S9blPtfsYs)

## 速度メニュー

[このアイデアマンズブログ](https://blog.ideamans.com/)について調べると、**URL178件が「中速」**と表示されました。

<a href="https://blog.ideamans.com/assets/d299c9bb90a3045cababc6826741ea68eb95af4d.png"><img alt="速度（試験運用版）.png" src="https://blog.ideamans.com/assets_c/2019/11/d299c9bb90a3045cababc6826741ea68eb95af4d-thumb-1000xauto-1098.png" width="1000" height="686" class="mt-image-none" style="" /></a>

レポートを開くとこんな感じ。個別のURLの速度は表示されません。**サイト全体での低速・中速・高速のURL数**を評価しているように見えます。

<a href="https://blog.ideamans.com/assets/bb3960ce8b74605af115972a83a9764d93c8a56b.png"><img alt="速度（試験運用版）_と_miyanaga_-_Qiita.png" src="https://blog.ideamans.com/assets_c/2019/11/bb3960ce8b74605af115972a83a9764d93c8a56b-thumb-1000xauto-1100.png" width="1000" height="656" class="mt-image-none" style="" /></a>

ちなみに、このブログのPageSpeedスコアは**87**。もうちょっとで高速(90-100)の仲間入り！

<a href="https://blog.ideamans.com/assets/PageSpeed_Insights.png"><img alt="PageSpeed_Insights.png" src="https://blog.ideamans.com/assets_c/2019/11/PageSpeed_Insights-thumb-1000xauto-1102.png" width="1000" height="702" class="mt-image-none" style="" /></a>

## 低速・中速・高速って？

[コーポレートサイト](https://www.ideamans.com/)を見ると、まだデータが収集されていないためか、**「データが足りません」**と表示されました。

同時にPageSpeed Insightsへのリンクが用意されているので、やはり低速・中速・高速はPageSpeed Insightsのそれと同じと見てよさそうです。

<a href="https://blog.ideamans.com/assets/1b3285172335f34988b7c4f865206f932daa748a.png"><img alt="速度（試験運用版）_と_新しいタブ.png" src="https://blog.ideamans.com/assets_c/2019/11/1b3285172335f34988b7c4f865206f932daa748a-thumb-1000xauto-1104.png" width="1000" height="646" class="mt-image-none" style="" /></a>

その場合は0〜50点が低速、50〜90点が中速、90〜100点が高速です。

## 低速を克服するのはかなり大変！

以前、こんな記事を書きました。

[PageSpeedスコアの人並みは何点？ 40点でもまずは安心していいよ！という話 - アイデアマンズブログ](https://blog.ideamans.com/2019/09/pagespeed-score-median.html)

要約するとPageSpeedスコアは**「米国(と思われる海外)から計測される表示速度の世界順位」**で、高速な通信網に慣れてデータ量が多い日本のサイトは点数を取りにくいのです。

## どうすればPageSpeedスコアを改善できるか

上記の記事以外にも、**Lighthouseのソースコードから読み取った「PageSpeedスコアの実際のところ」**を書いてきました。

* [PageSpeed Insightsの真実。点数の公式と高得点をとれない理由。5項目の最適化をすることがスコアアップの近道。 - アイデアマンズブログ](https://blog.ideamans.com/2019/04/inside-pagespeed-insights.html)
* [PageSpeed スコア別の傾向と対策。20点未満のサイトが改善の前に見るべきこと - アイデアマンズブログ](https://blog.ideamans.com/2019/07/pagespeed-curve.html)
* [ECサイトでPageSpeed Insightsスコア80なら偏差値70相当！ パフォーマンス偏差値表\(通販サイト編\)を作ってみた - アイデアマンズブログ](https://blog.ideamans.com/2019/04/ec-pagespeed-insights-deviations.html)
* [PageSpeed Insightsの点数はどのように計算されているか。100点をとるための条件 - Qiita](https://qiita.com/miyanaga/items/d38124cdd64a1999fed9)
* [インタラクティブになるまでの時間\(TTI: Time To Interactive\)とは何か - Qiita](https://qiita.com/miyanaga/items/49aee938d1cbb1e42fd7)
* [PageSpeed Insightsの改善にはまずJavaScriptのダイエットを - Qiita](https://qiita.com/miyanaga/items/b3d955a6fd70ef7d89ec)
* [PageSpeed Insightsのスコア曲線 - Qiita](https://qiita.com/miyanaga/items/1b0cd9c65460df119649)
* [PageSpeed Insightsはどこからどのようにリクエストを送るのか - Qiita](https://qiita.com/miyanaga/items/cc7f9187546e6bac140b)
* [PageSpeed InsightsでドキュメントTTFBはSpeedIndexにしか影響しない - Qiita](https://qiita.com/miyanaga/items/838478d5a559dd585972)

## 手っ取り早く上げたい！

最後にPRです。

スコアが「低速」にある場合、残念ながら**PageSpeed Inshgtsのレポートに表示される指摘事項に対応してもスコアが上がる確率は低いです**。

弊社の[PageSpeed改善リハーサル \| アイデアマンズ株式会社](https://www.ideamans.com/services/pagespeed/)では、「サイトをどう改修すればスコアが何点上がるか」、お客様の代わりに事前検証します。

詳しくは[新サービス PageSpeed改善リハーサルをスタート！ - アイデアマンズブログ](https://blog.ideamans.com/2019/08/pagespeed-rehearsal.html)もご覧ください。




