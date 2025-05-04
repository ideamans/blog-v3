---
# Astrowind
title: 'Lighthouse 6.0.0リリース！モバイルスコアは半数のサイトが低下しPCでは激減の可能性'
excerpt: 'Lighthouse 6.0.0が正式にリリースされました。 What&#039;s Ne...'
updateDate: 2020-06-18
publishedDate: 2020-05-22
tags: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - seo

author: miyanaga
image: https://blog.ideamans.com/assets/lighthouse-scoring-simulator.png
category: lighthouse

# カスタム
updatedAt: 2020-06-18 10:25:14
publishedAt: 2020-05-22 07:15:00
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

Lighthouse 6.0.0が正式にリリースされました。

[What's New in Lighthouse 6.0](https://web.dev/lighthouse-whats-new-6.0/)

ひとまずNPMモジュールがデフォルトで6.0.0に。PageSpeed Insightsなどの関連サービスもほどなくバージョンアップすると思われます。5月22日時点ではPageSpeed Insights(5.6)、ChromeのAuditsタブ(5.7)、Chrome拡張機能のLighthouse(5.6)です。

## 50%のサイトでモバイルスコアが低下

Lighthouse 6.0.0では採点ロジックが一部変更されます。それにより開発チームが抽出したサイトの例では、20%のページでスコアが向上、30%のページは大差なし、**50%のページはスコアが5ポイント以上低下**したと報告されています。

[11ty Lighthouse 5.6 -> 6.0 Scoring](https://gist.github.com/connorjclark/0be52464887ae3a6f29ad5a798122e0c#file-readme-md)

日本国内のサイトも同様の傾向が現れるかもしれません。

当然ながら表面上のスコアが下がるだけで、**サイト自体が遅くなるわけではありません**。必要以上に気にすることはありませんが、クレームが上がったときにすぐに説明できるように知っておくとよいと思います。

## デスクトップのスコアは激減・モバイルとのスコア差是正か

しっかり検証できていませんが、ソースコードを読んでいくつかのサイトを試した感じではPC(デスクトップ)のスコアはおそらく全体的に大きく低下します。

これまでモバイルに対し、デスクトップでは高いスコアが出る傾向にありました。これは両者の違いをCPUとネットワークの擬似的な性能制限で再現しながら、採点基準は同じだったからです。

ところがバージョン6.0.0では、デスクトップ用の厳しい採点基準(測定時間をスコアに変換する際の対数正規分布のパラメータ)が別に設けられました。おそらくモバイルとデスクトップのスコアの水準を近づける目的と思われます。

例えばこのブログのトップページは、スコア 99→87 に低下しました。

## スコア計算ツール

地味にスコア計算ツールが登場しました。**「スコアの根拠がわかりにくい！」**という不満は世界共通なんだと想像します。

バージョン5系から6系への配点の変化と、それぞれの指標とスコアの関係をインタラクティブに確認できます。

[Lighthouse Scoring calculator](https://googlechrome.github.io/lighthouse/scorecalc/)

<a href="https://blog.ideamans.com/assets/lighthouse-scoring-simulator.png"><img alt="lighthouse-scoring-simulator.png" src="https://blog.ideamans.com/assets_c/2020/05/lighthouse-scoring-simulator-thumb-800xauto-1156.png" width="800" height="420" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

## 採点ロジックの変更について

先日、Lighthouse 6.0.0のベータ版について調査した記事を書きましたが、その時点から採点対象の指標や配点に変更はなさそうです。詳しくはこちらも参照ください。

[PageSpeed Insightsのスコア大変動か？ Lighthouse 6 で変わる採点ルールを先取りチェック！ - アイデアマンズブログ](https://blog.ideamans.com/2020/03/pagespeed-lighthouse-6-draft.html)

複雑な`FirstMeaningfulPaint`がシンプルな`LargestContentfulPaint`に変更され、`FirstCPUIdle`が廃止、こちらもシンプルにロングタスクの量を計測する`TotalBlockingTime`が追加されます。時間系指標ではない`CumulativeLayoutShift`が追加されたのも特徴です。

配点も、メインスレッド負荷を重視する傾向が緩和、表示・レンダリング速度の比重が若干、上がりました。

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-7btt{border-color:inherit;font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-6ic8{border-color:inherit;font-weight:bold;text-align:right;vertical-align:top}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-dvpl{border-color:inherit;text-align:right;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-7btt" rowspan="2">　</th>
    <th class="tg-7btt" colspan="2">5.6.0</th>
    <th class="tg-7btt" colspan="2">6.0.0</th>
  </tr>
  <tr>
    <td class="tg-6ic8">重み</td>
    <td class="tg-6ic8">配点</td>
    <td class="tg-6ic8">重み</td>
    <td class="tg-6ic8">配点</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-fymr">FirstContentfulPaint</td>
    <td class="tg-dvpl">3 </td>
    <td class="tg-dvpl">20.00 </td>
    <td class="tg-dvpl">15 </td>
    <td class="tg-dvpl">15.00 </td>
  </tr>
  <tr>
    <td class="tg-fymr">FistMeaningfulPaint</td>
    <td class="tg-dvpl">1 </td>
    <td class="tg-dvpl">6.67 </td>
    <td class="tg-dvpl">　</td>
    <td class="tg-dvpl">0.00 </td>
  </tr>
  <tr>
    <td class="tg-fymr">SpeedIndex</td>
    <td class="tg-dvpl">4 </td>
    <td class="tg-dvpl">26.67 </td>
    <td class="tg-dvpl">15 </td>
    <td class="tg-dvpl">15.00 </td>
  </tr>
  <tr>
    <td class="tg-fymr">Interactive</td>
    <td class="tg-dvpl">5 </td>
    <td class="tg-dvpl">33.33 </td>
    <td class="tg-dvpl">15 </td>
    <td class="tg-dvpl">15.00 </td>
  </tr>
  <tr>
    <td class="tg-fymr">FirstCpuIdle</td>
    <td class="tg-dvpl">2 </td>
    <td class="tg-dvpl">13.33 </td>
    <td class="tg-dvpl">　</td>
    <td class="tg-dvpl">0.00 </td>
  </tr>
  <tr>
    <td class="tg-fymr">LargestContentfulPaint</td>
    <td class="tg-dvpl">　</td>
    <td class="tg-dvpl">0.00 </td>
    <td class="tg-dvpl">25 </td>
    <td class="tg-dvpl">25.00 </td>
  </tr>
  <tr>
    <td class="tg-fymr">TotalBlockingTime</td>
    <td class="tg-dvpl">　</td>
    <td class="tg-dvpl">0.00 </td>
    <td class="tg-dvpl">25 </td>
    <td class="tg-dvpl">25.00 </td>
  </tr>
  <tr>
    <td class="tg-fymr">CumulativeLayoutShift</td>
    <td class="tg-dvpl">　</td>
    <td class="tg-dvpl">　</td>
    <td class="tg-dvpl">5 </td>
    <td class="tg-dvpl">5.00 </td>
  </tr>
  <tr>
    <td class="tg-0pky">合計</td>
    <td class="tg-6ic8">15 </td>
    <td class="tg-6ic8">100.00 </td>
    <td class="tg-6ic8">100 </td>
    <td class="tg-6ic8">100.00 </td>
  </tr>
</tbody>
</table>

もっと詳しい話を聞きたいと思われた方はぜひご連絡ください！

