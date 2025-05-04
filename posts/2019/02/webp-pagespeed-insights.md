(---

# Astrowind

title: 'WebPの活用によるPageSpeed Insigntsのスコア改善を本気で検証'
excerpt: 'Googleの検索順位には、ページの表示スピード(パフォーマンス)も影響すると言...'
updateDate: 2019-02-18
publishedDate: 2019-02-18
tags:

- webp

- web-imaging

- performance

author: miyanaga
image: <https://blog.ideamans.com/assets/webp-psi-ogp.png>
category: webp

# カスタム

updatedAt: 2019-02-18 08:49:33
publishedAt: 2019-02-18 04:18:33
categories:

- webp

- web-imaging

- performance

categoryLabels:

- WebP

- Web画像最適化

- 表示高速化

authorId: miyanaga
subTheme:
recommended: false
---

Googleの検索順位には、ページの表示スピード(パフォーマンス)も影響すると言われています。

その表示スピードを計測し、採点するツールが [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) です。
そのため多くのサイトが今、PageSpeed Insightsのスコア改善に取り組んでいます。

スコア改善には多くの手法があります。そのひとつが画像の最適化(軽量化)で、同じGoogleが推進する [WebP](https://blog.ideamans.com/2018/04/webp.html) は効果が期待できます。

では本当にWebPの活用によりPageSpeed Insightsのスコアが改善されるのか、実際に27種類のダミーサイトを用意して実験してみました。

## 画像のWebP変換により平均+3.2アップ

詳しい手順は後述しますが、[このようなレスポンシブデザインのダミーサイト](https://www.ideamans.com/_samples/original/stuff/index.html)を27種類用意しました。

<a href="https://www.ideamans.com/_samples/original/stuff/index.html"><img alt="dummy-site-resize-fs8.png" src="https://blog.ideamans.com/assets/dummy-site-resize-fs8.png" width="640" height="444" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

結論からいうと27サイトの**平均で+3.2**、スコアが改善されました。

最大ではなんと**22.6ポイントのスコア改善**につながったページもありましたが、効果の小さいサイトもあります。

## 削減されるデータ量に応じてスコアが上がる傾向

27サイトのWebP化によるデータの削減量と、改善スコアをプロットしたのが次のグラフです。

<img alt="webp-psi.png" src="https://blog.ideamans.com/assets/b8460840ea72298721c8e09aa88cebf75b617a1d.png" width="640" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

画像データを軽くするほど、PageSpeed Insightsのスコアが上がる傾向が見られます。

[ページまるごとWebPファイル変換](https://sim.lightfile.net/webp/)では、お好きなサイトでの効果を無料でシミュレートできます。

例えば上の例に挙げたページについては、[WebP変換により約1.78MBのデータが削減](https://sim.lightfile.net/webp/reports/d44a3972-4eb2-4078-a483-8127e2634a8f)され+9.5ポイントスコアが改善されました。

<a href="https://sim.lightfile.net/webp/reports/d44a3972-4eb2-4078-a483-8127e2634a8f"><img src="https://sim.lightfile.net/_resources/d44a3972-4eb2-4078-a483-8127e2634a8f/summary.png" width="640" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></a>

22.6ポイントという最大のスコア改善につながったケースは[こちら](https://sim.lightfile.net/webp/reports/b59c3e1b-7616-4506-a634-70562cbfbea8)です。WebP変換により**4.12MB**のデータ量が削減されています。

通販サイトやLPページなど、多くの画像を使用しているページでは同様の効果が期待できます。

## 詳細なデータを公開中

この調査データをまとめたスプレッドシートを公開中です。

<img alt="spreadsheet-resize.png" src="https://blog.ideamans.com/assets/spreadsheet-resize.png" width="320" height="201" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

ご覧になりたい方は、以下のフォームからお申し込みください。メールアドレスに共有URLをお送りします。

<div style="text-align: center">
<iframe src="https://www.ideamans.com/_mautic/form/23" width="640" height="240" style="max-width: 100%;"><p>Your browser does not support iframes.</p></iframe>
</div>

## 検証の手順

具体的な検証の手順は次の通りです。

### ダミーページの用意とWebP変換

ダミーサイトを作るのは大変なので、無料テンプレートを拝借しました。

[こちらのページ](https://colorlib.com/wp/free-bootstrap-templates/)で紹介されている中からCC BY 3.0で提供されているBootstrapのレスポンシブテンプレートを27種類ダウンロードしました。

それぞれ元のままのデータと、画像を全てWebPに変換したデータの2種類ずつ、ディレクトリを分けて公開しました。

- [元データのまま公開したサイトの例](https://www.ideamans.com/_samples/original/stuff/index.html)
- [WebP対応して公開したページの例](https://www.ideamans.com/_samples/webp/stuff/index.html)

スプレッドシートにはすべてのページのリンクを掲載しています。

WebP変換といっても非対応ブラウザでは画像が表示されないということはありません。**対応ブラウザにはWebP、非対応のブラウザには元のフォーマット**で画像が表示されます。

### PageSpeed Insightsで10回ずつ測定

それらのダミーページを、今回は3時間おきに計10回、PageSpeed Insightsでスコアを測定しました。

これはPageSpeed Insightsの結果は、ネットワークの速度によって少しばらつきが出るからです。

PageSpeed Insightsは[API](https://developers.google.com/speed/docs/insights/v5/reference/)を経由して実行しました。

### WebP変換によるデータ削減量を可視化

WebP変換の成果は[ページまるごとWebPファイル変換で可視化](https://sim.lightfile.net/webp/reports/d44a3972-4eb2-4078-a483-8127e2634a8f)しました。
