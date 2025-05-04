---
# Astrowind
title: 'WebP変換を乗りこなそう！ WebPパラメーターナビを公開。cwebpコマンドのパラメーターの効果を視覚的に比較'
excerpt: 'cwebpコマンド はJpegやPNG画像をWebPに変換するCLIコマンドです...'
updateDate: 2020-07-31
publishedDate: 2020-07-31
tags: 
  - webp

author: miyanaga
image: https://blog.ideamans.com/assets/a2676e40be52202606649f4d84815b2a45233a49.png
category: webp

# カスタム
updatedAt: 2020-07-31 06:18:23
publishedAt: 2020-07-31 06:15:00
categories: 
  - webp

categoryLabels: 
  - WebP

authorId: miyanaga
subTheme: bs4
recommended: false
---

[cwebpコマンド](https://developers.google.com/speed/webp/docs/cwebp) はJpegやPNG画像をWebPに変換するCLIコマンドです。WebP画像の中核ライブラリ [libwebp](https://chromium.googlesource.com/webm/libwebp) に同梱されており、ImageMagickの `convert`コマンドのように多くの開発シーンで今後使われていくと予想されます。

この`cwebp`コマンドには多くのパラメーターが用意されています。それぞれのパラメータにどういう効果があり性能にどのような影響があるのか、視覚的に確認するためのツールを公開しました。

これであなたもWebP変換のプロフェッショナルに！

## WebPパラメーターナビ

[WebP パラメーターナビ - libwebpによるWebP変換の適切なパラメータ選定をお手伝いします。](https://php.simulate.site/webp-params-nav/default/)

こんな感じで、各パラメーターについてファイルサイズや処理時間、仕上がりの画質を比較できます。

<img alt="php.simulate.site_webp-params-nav_default_.png" src="https://blog.ideamans.com/assets_c/2020/07/php.simulate.site_webp-params-nav_default_-thumb-1500xauto-1204.png" width="1500" height="1108" class="img-fluid" />

元々は内部の研究用ツールでしたが、[AppleのWebP対応発表](https://blog.ideamans.com/2020/06/safari14-webp.html) を受けてWebPの導入を検討している企業も多いと思います。大幅にブラッシュアップして公開しました。`cwebp`を納得して乗りこなすためにお役に立てば幸いです。

<div class="alert alert-info">
さらなる検証用に「自社の画像データセットで比較したい」という企業に向けて、個別にサイトを用意します(有償)。末尾の無料相談フォームよりお問い合わせください！
</div>

あとこちらは、以前公開したページまるごとWebP変換して、軽量化の効果を確認できるツールです。変換されたWebP画像をまるごとダンロードもできます。合わせてご参考ください！

[ページまるごとWebP変換・効果測定](https://sim.lightfile.net/webp/)



## 画像の選択

ヘッダーのプルダウンから画像を選択できます。

<img alt="webp-imageset.png" src="https://blog.ideamans.com/assets_c/2020/07/webp-imageset-thumb-850xauto-1206.png" width="850" height="439" class="img-fluid" />

## サマリー

まずはパラメーターが結果のファイルサイズ、画質、処理時間、メモリ消費にどのように影響するのかを示すグラフです。例えば**「もう少しファイルサイズを抑えるパラメーターはないかな」**といった課題に応じてご覧ください。

<img alt="webp-summary.png" src="https://blog.ideamans.com/assets/webp-summary.png" width="1641" height="1156" class="img-fluid" />

## パラメーター比較の詳細

続いてそれぞれのパラメーターについての、入力値とファイルサイズ、画質、処理時間、メモリ消費の関係を示す詳細なグラフがあります。

<img alt="webp-param-detail-chart.png" src="https://blog.ideamans.com/assets/webp-param-detail-chart.png" width="1641" height="379" class="img-fluid" />

## 画質比較

次が目玉機能、ピクセル単位での画質比較です。画像にマウスオーバーすると、拡大表示で画質の劣化具合を詳しく比較できます。

<img alt="webp-params-image-compare.png" src="https://blog.ideamans.com/assets/webp-params-image-compare.png" width="1641" height="917" class="img-fluid" />

### 1枚だけ比較で拡大表示

**1枚だけ比較** を選択すると、オリジナル画像と特定の画像を大きく比較できます。

<img alt="webp-params-compare-1.png" src="https://blog.ideamans.com/assets/webp-params-compare-1.png" width="1641" height="745" class="img-fluid" />

### スライダーで比較で劣化部分を視認

**スライダーで比較** はオリジナル画像と比較対象を重ねて配置し、スライダーで境界を操作しながら比較できます。どこが変化(劣化)したか確認するのに便利です。

<img alt="webp-parame-slider.png" src="https://blog.ideamans.com/assets/webp-parame-slider.png" width="1641" height="1108" class="img-fluid" />

## キャプチャ機能

個人的に一番お気に入りのやりすぎ機能、**キャプチャ機能**です。マウスオーバーしたときに右上に**cキーでキャプチャ**と表示される領域は、文字通り`c`キーを押すだけで部分キャプチャできます。

これで資料作成やブログ記事執筆が捗る！

このキャプチャ画像はご自由に利用ください。元画像の引用元はページ左上にあります。引用元がない画像は弊社の独自画像なので、そちらはお気遣い無用です。

<img alt="webp-params-reference.png" src="https://blog.ideamans.com/assets_c/2020/07/webp-params-reference-thumb-autox750-1213.png" width="600" height="750" class="img-fluid" />
