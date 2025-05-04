---
# Astrowind
title: 'PageSpeed InsightsとCore Web Vitals 〜 スコアより大事なフィールドデータの見方'
excerpt: 'スコアよりフィールドデータを見るのが❝通❞ PageSpeed Insights...'
updateDate: 2021-01-10
publishedDate: 2020-12-10
tags: 
  - core-web-vitals

  - pagespeed-insights

author: miyanaga
image: https://blog.ideamans.com/assets/field-data-lcp.png
category: core-web-vitals

# カスタム
updatedAt: 2021-01-10 21:51:42
publishedAt: 2020-12-10 13:25:20
categories: 
  - core-web-vitals

  - pagespeed-insights

categoryLabels: 
  - Core Web Vitals

  - PageSpeed Insights

authorId: miyanaga
subTheme: bs4
recommended: false
---

## スコアよりフィールドデータを見るのが❝通❞

PageSpeed Insightsを実行するとデカデカとスコアが表示されるのでつい注目してしまいますが、**本当に大事で、結果を真摯に受け止めなければならないのはその下のフィールドデータ**の方です。

[Googleの正式なアナウンス](https://digitalidentity.co.jp/blog/seo/algorithm/core-web-vitals.html)もあり、SEOの観点でCore Web Vitalsが気になる方も増えています。

**実はフィールドデータがCore Web Vitalsそのもの**なのです。見方がよくわからずスルーしてしまう人も多いです。悪目立ちするスコアに振り回されないよう、フィールドデータのグラフや数値が何を示すのか理解しましょう！

## フィールドデータの見方

このブログのある記事ページについてPage Speed Insightsを実行した結果がこちらです。

<a href="https://blog.ideamans.com/assets/field-data-all.png"><img alt="field-data-all.png" src="https://blog.ideamans.com/assets_c/2020/12/field-data-all-thumb-autox907-1276.png" width="700" height="907" class="img-fluid" /></a>

スコアは架空のブラウザ環境においてフロントエンド体験をシミュレーションして導き出された数値です。**実際は誰の体験でもなく**、しかもグローバル基準で通信環境や端末性能が設定されているので、それらが高い水準にある日本と乖離があります。「PageSpeed Insightsのスコアはピンと来ない」という感覚の一因になっています。

### フィールドデータは言い逃れできないリアルなユーザー体験

一方、**フィールドデータはアクセス解析のように、実際にこのページを閲覧したChromeユーザー(統計情報の送信をオプトインしたユーザーのみ)から集めたフロントエンド体験数値の集計結果**です。

真実に近くユーザー目線で重視すべきなのはどちらか明確です。

**「うちのサイトそんなに遅いかなぁ」**と感じる人がいたとしても、**フィールドデータが悪ければもう言い逃れできない**ということです。

**※ ただしフィールドデータはある程度PVのあるページでしか表示されません。**

### フィールドデータとラボデータ

**「ではPageSpeed Insightsのシミュレーションなんて意味ないんじゃ？」**と思うかもしれません。しかし**フィールドデータは集計期間は直近28日間で、更新が1日に1回**です(日本時間13時ごろに更新されるようです)。

ページを改修して意図したとおりに指標が改善されたか、すぐにフィードバックを得る用途には向いていません。そういう**改善作業のお供にPageSpeed InsightsやLighthouseによるシミュレーション結果(フィールドデータに対してラボデータと呼ばれます)はやはり必要**です。

このフィールドデータのうち、**FCPを除いたFID、LCP、CLSがCore Web Vitals**と呼ばれています。

検索エンジンがどのくらいの期間を評価するかはわかりません。この28日間の値を使うのではないかな、とは思いますが...

### 提供元の概要・Origin Summaryはドメイン全体のこと

チェックボックス「提供元の概要を表示」をクリックすると、下に同じようなゲージが表示されます。こちらはさらにドメイン全体について集計されたものです。ドメイン全体の中でこのページの体験がよいのか悪いのか、相対的に評価できます。

ちなみに28日より以前のWeb Vitalsはドメインごとに集計する形でダウンサンプリングされるようです。

[Core Web Vitalsの推移をひと目でチェック！ Googleデータポータル無料レポートを公開 \- アイデアマンズブログ](https://blog.ideamans.com/2020/10/web-vitals-history-report.html)

## ゲージの見方

フィールドデータは多数のユーザーから集められたデータなので、**ユーザーのネットワーク速度や端末性能によるばらつき**があります。平均をとってひとつの値に集約してしまうのではなく、分布の情報を保った表現がされています。

### 緑=快適な体験・赤=ストレスのある体験・オレンジ=要改善

すべてのゲージに共通して、**緑色が快適な体験だったPVの割合、赤色がストレスを与えたPVの割合、オレンジ色がその中間(要改善)の割合**を示します。

体験と言ってもあくまで所要時間(CLSは時間ではないですが)からの推定で、情緒も含めたユーザーの主観がどうだったかはもちろんわかりません。

<img alt="field-data-fcp.png" src="https://blog.ideamans.com/assets/field-data-fcp.png" width="688" height="319" class="img-fluid" />

### 目標は緑75%必達・優れたUXのためには90%を目指そう！

右上の数値は、75パーセンタイル(第三四分位)を示します。FCPが短かった順に並べ替えて、100人中75位相当の数値が、75パーセンタイルです。

<img alt="field-data-75-percentile.png" src="https://blog.ideamans.com/assets_c/2020/12/field-data-75-percentile-thumb-702xauto-1280.png" width="702" height="326" class="img-fluid" />

言ってみれば**「大半のPVは0からこの範囲に収まっていた」**という分布の大勢です。それが快適な体験の範囲であれば緑色(合格)、それ以外(ストレスがある=赤または要改善=オレンジ)であれば赤色の文字で表示されます。

いろいろなサイトのCore Web Vitalsを見ていると、**緑90%に達すると相当高い印象**を受けます。

なのでCore Web Vitalsの目標は、**まず緑75%必達、さらに追求するなら90%**に定めることをお勧めしています。

### First Contentful Paint (FCP)

**FCPは、何らかのテキストまたは画像要素が最初に描画されるタイミング**です。Core Web Vitalsの3指標には含まれないのですが、チェックポイントのひとつとして以前から重視されています。

HTMLやCSSの転送量やモデルサイズが大きかったり、asyncやdeferのない外部JavaScript参照がHTMLの上部にあると遅れの原因になります。

体感的にははじめのHTMLのサーバー応答時間(≒ドキュメントTTFB)が最も重要ですが、TTFBが評価に含まれるかは実は微妙なところです。PageSpeed Insights(Lighthouse)ではタイムライン情報からの疑似計算(Lantern)が行われており、[TTFBが遅くてもFCP、LCPに関係ない](https://qiita.com/miyanaga/items/838478d5a559dd585972)ことがわかっています。

### First Input Delay (FID)

**FIDはユーザーの最初の操作、主に画面のタップに対する反応時間**です。

<img alt="field-data-fid.png" src="https://blog.ideamans.com/assets/field-data-fid.png" width="688" height="358" class="img-fluid" />

海外サイトも含めて、FIDの評価が低いサイトはあまりお目にかかったことがありません。日本は端末性能もよいので、評価の低いサイトはもっと珍しい印象です。

あくまで予想ですが、スクロールは操作は含まれません。OSレベルで行われるビューポートの移動であって、JavaScriptが介在するスムーススクロールでなければフロントエンドの重さに関係なく動作するからです。

PageSpeed InsightsではFIDを計測できませんが、FIDはロングタスクによる遅延であることが多く、**Total Blocking Time (TBT)が相関**すると言われています。

**PageSpeed InsightsではJavaScriptロングタスクをシビアに評価してTotal Blocking TimeとTime To Interactiveによりスコアをバンバン落とす**のですが、それに相関するはずのFIDはそこまで低くないという捻じれも感覚に合わない部分です。

### Largest Contentful Paint (LCP)

**LCPはビューポートの最大要素が表示されたタイミング**です。たいていはメインビジュアルに相当する画像や、見出しテキストによって判定されます。

<img alt="field-data-lcp.png" src="https://blog.ideamans.com/assets/field-data-lcp.png" width="688" height="357" class="img-fluid" />

画像の場合はそのデータサイズによって遅れがちになります。特に表示にJavaScriptの作動を待たなければならない実装でのカルーセルスライダーを使っている場合は、最悪の評価を得ます。

他にもアクセス解析など、序盤から暴れるJavaScriptがあるとそれによっても遅れたりして、**なかなか改善が大変な指標**です。

### Cumulative Layout Shift (CLS)

**CLSは後発的に挿入される要素により生じるズレの総量**です。

CLSだけは時間や速度の指標ではありません。読み込まれるまで高さのわからない画像や、JavaScriptの作動により後発的に挿入される広告などが主な原因になります。

<img alt="field-data-cls.png" src="https://blog.ideamans.com/assets/field-data-cls.png" width="688" height="355" class="img-fluid" />

タップやクリックの操作ミスを招くことから、当然ながらズレがない、あるいは少ないほうがよいです。

<img src="https://webdev.imgix.net/cls/layout-shift-3.png" class="img-fluid" style="width: 50%">

[Cumulative Layout Shift \(CLS\)](https://web.dev/cls/)より

画像の幅と高さを指定する、後発的に挿入される予定の領域はCSSで高さを予約する、といった地道なマークアップの積み重ねで改善できます。

## まとめ

* **スコアではなくフィールドデータを見よう。** 速度の実態、そして気になるCore Web Vitalsの評価を知るために。
* **改善のフィードバックはラボデータを活用しよう。** フィールドデータはすぐには動かない。
* **LCPやCLSなど個々の指標を意図して改善しよう。** スコアはあくまで平均点。闇雲に上がればよいものではない。