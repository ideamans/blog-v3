---
# Astrowind
title: '画像軽量化の可能性を無料レポート！ LightFile/WebPシミュレーター v3をリリース'
excerpt: '弊社アイデアマンズが提供する画像軽量化ソリューションLightFileと、Goo...'
updateDate: 2020-06-18
publishedDate: 2019-03-22
tags: 
  - webp

  - web-imaging

  - cloud-cost

  - lightfile

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/toyoda.png
category: lightfile

# カスタム
updatedAt: 2020-06-18 10:55:42
publishedAt: 2019-03-22 12:20:05
categories: 
  - webp

  - web-imaging

  - cloud-cost

  - lightfile

  - performance

categoryLabels: 
  - WebP

  - Web画像最適化

  - クラウドコスト削減

  - 画像軽量化AI LightFile

  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

弊社アイデアマンズが提供する画像軽量化ソリューション[LightFile](https://www.ideamans.com/lightfile/)と、Googleが推進する新画像フォーマットWebPによってWebページがどのくらい軽量化できるか、無料でレポートするツールをリリースしました。

[LightFile/WebPシミュレーター v3](https://sim.lightfile.net/v3/)

## レポートの例

日本を代表する企業ということで[トヨタ自動車](https://toyota.jp/)のWebサイトを例にお借りします。

実行した例が[こちら](https://sim.lightfile.net/v3/reports/85c04034-3357-410c-a132-ea8be0dfc120)です。

<a href="https://blog.ideamans.com/assets/example.png"><img alt="example.png" src="https://blog.ideamans.com/assets_c/2019/03/example-thumb-autox722-979.png" width="700" height="722" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

オリジナル画像データ(いまWebページで使われている画像データ)の容量と、LightFileやWebPによる削減効果が表示されます。

このレポートでは**最大-78.81%も削減**できるという結果になりました。

ただ、データサイズだと専門以外の方にはピンとこないので、

* 読み込み時間の短縮目安(実効スループット10Mbpsと想定)
* 消費者にとって節約される通信料金の目安
* 100万PVあたりのCDN利用時の節約コスト(Amazon CloudFrontを想定)

も併せて掲載しています。クライアント企業や社内の説明資料としてそのままお使いいただけます。

## 削減後の画質比較

軽量化はたいてい画質の劣化を伴いますが、[LightFile](https://www.ideamans.com/lightfile/)はそれが人間が知覚しにくい範囲で自動的に調整します。

ページの下部に表示されている個々の画像をクリックすると、オリジナル画像との比較ツールが表示されます。

### 差の絶対値

オリジナル画像と、ファイルサイズが削減された画像を重ね合わせ、ピクセルごとの差分を視覚化します。PhotoShopのレイヤー合成の「差の絶対値」とまったく同じです。

黒は差がないことを示します。実はうっすらと差が出ているのですが、ほとんど見えない範囲に収まっていることが確認できます。

<a href="https://blog.ideamans.com/assets/compare1.png"><img alt="compare1.png" src="https://blog.ideamans.com/assets_c/2019/03/compare1-thumb-700xauto-981.png" width="700" height="304" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

### スライダー

画像の上のバーを左右にスライドしてオリジナル画像とファイルサイズが削減された画像を見比べることができます。

画像によっては一部に差が確認できますが、全体の印象はほとんど変わりません。

<a href="https://blog.ideamans.com/assets/compare2.png"><img alt="compare2.png" src="https://blog.ideamans.com/assets_c/2019/03/compare2-thumb-700xauto-983.png" width="700" height="411" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

## 使い方

レポートの作成は簡単です。メニューの「新しいレポートを作成」を開くと、入力フォームが表示されます。

 1.  レポートを作成したいページのURLを入力し、
 2.  それをスマホページとして表示するか、PCページとして表示するか選択します。
 3.  レポートの種類がいくつかありますが、まずは「おすすめ」のアイコンがある「LightFileとWebPの導入シミュレーション」をお試しください。
 4.  シミュレーション開始ボタンを押します。

レポートの作成には1分ほどかかります。メールアドレスを入力しておくと、レポート完成時にそのアドレスに通知が送信されます。

ぜひあなたのWebサイトでも画像をどのくらい軽量化できるかお試しください。

