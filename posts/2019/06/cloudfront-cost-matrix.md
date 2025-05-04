---
# Astrowind
title: 'CloudFront料金早見表を作ってみた。月額10万円超えは何PVから？'
excerpt: 'シェアを伸ばすCloudFront AWSリソースとの相性抜群なCDN Clou...'
updateDate: 2020-06-18
publishedDate: 2019-06-11
tags: 
  - web-imaging

  - cloud-cost

  - lightfile

  - reports

author: miyanaga
image: https://blog.ideamans.com/assets/cloudfront-cost-matrics.png
category: web-imaging

# カスタム
updatedAt: 2020-06-18 10:56:16
publishedAt: 2019-06-11 08:35:40
categories: 
  - web-imaging

  - cloud-cost

  - lightfile

  - reports

categoryLabels: 
  - Web画像最適化

  - クラウドコスト削減

  - 画像軽量化AI LightFile

  - 調査レポート

authorId: miyanaga
subTheme: 
recommended: false
---

## シェアを伸ばすCloudFront

AWSリソースとの相性抜群なCDN [CloudFront](https://aws.amazon.com/jp/cloudfront/)が日本で着実にシェアを伸ばしています。

[国内CDNシェア(2019年4月) | J-Stream CDN情報サイト](https://tech.jstream.jp/blog/cdn/cdn-share-apl2019/)
<img alt="CDN-jp-trend-2019h1.png" src="https://blog.ideamans.com/assets/CDN-jp-trend-2019h1.png" width="667" height="451" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

CloudFrontをはじめCDNの多くはトラフィック量に応じた従量課金です。PV数が多いサイトや、データサイズが大きいサイトでは**予想以上のコストがかかる(かかっている)**場合があります。

また、利用中の企業でもシステム全体のコストに内包されて、CDNにいくら使っているかまでは把握しておらず、改めて**内訳を見て驚かれる**場面を目にします。

## 1ページの平均データ量とPVからコストを試算する早見表

[CloudFrontの料金表](https://aws.amazon.com/jp/cloudfront/pricing/)には、地域別の転送量(テラバイト)とリクエスト数の米ドル単価が掲載されていますが、あまり直観的ではないので早見表を作ってみました。

[CloudFront日本向け料金早見表(Googleスプレッドシート)](https://docs.google.com/spreadsheets/d/1LNFmOL4tGgsmgqFqCYTMXz83CYeIez3HV61cpcjLUSo/edit?usp=sharing)

<a href="https://docs.google.com/spreadsheets/d/1LNFmOL4tGgsmgqFqCYTMXz83CYeIez3HV61cpcjLUSo/edit?usp=sharing"><img alt="cloudfront-cost-matrics.png" src="https://blog.ideamans.com/assets_c/2019/06/cloudfront-cost-matrics-thumb-1250xauto-1021.png" width="1250" height="460" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>



1ページあたりのデータ量と、月間PV数からCloudFrontのおおよその料金がわかります。値を変更したい場合は「ファイル > コピーを作成」してください。

1ページあたりのデータ量はブラウザのDeveloper Toolsで調べるか、テキスト中心のメディアサイトは2MB、画像の多いECサイトでは5MBを目安にするといいかと思います。

平均リソースサイズはリクエスト数を割り出すためのパラメータですが、リクエスト数課金は比重が小さいので特に違和感なければそのままで問題ありません。

CloudFrontの利用を検討している方や、既に利用中でコストを見直したい方のお役に立てば幸いです。

## CDNのコストを削減するには画像の最適化を

CDNの従量コストが高い場合、画像の最適化を行うのが最も効果的です。

### データサイズが大きい

多くのサイトでは転送量の半分以上を画像データが占めています。

### ブラウザキャッシュが効きにくい

最近ではJavaScriptやWebフォントのデータサイズも増えています。

これらは全ページで共通であることが多く、一度ダウンロードしたデータをブラウザが使い回す(ブラウザキャッシュ)ことができます。

画像は一部の背景やアイコンを除き、**コンテンツ**であるため毎回新しい画像がダウンロードされるケースが多いです。

### 自動化しやすい

JavaScriptやCSSを軽量化するにはデザイナーやエンジニアのスキルや努力が必要ですが、画像の軽量化はプログラムで自動化しやすい領域です。

弊社アイデアマンズでは、[AIによる画像の自動軽量化ソリューションLightFile](https://www.ideamans.com/lightfile/)を提供しています。

あなたのサイトの[CloudFront料金がどのくらい安くなるか、すぐにシミュレーション](https://www.ideamans.com/lightfile/simulator/)できます。コストが気になる方はぜひお試しください！

例えば東京オリンピックのサイトが**もし1000万PVだとしたら、100万円以上コストを削減できるかも？？**
<img src="https://sim.lightfile.net/_resources/7e0402e0-9fc3-41af-bcc2-1395a581089e/summary.png" style="max-width:100%">

