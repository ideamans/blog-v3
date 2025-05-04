---
# Astrowind
title: '検証 Web画像のファイルサイズは画素数にほぼ比例する'
excerpt: '当たり前のような話ですが、念のため検証してみました。 もちろん同じ画素数でも画像...'
updateDate: 2020-06-18
publishedDate: 2020-04-10
tags: 
  - web-imaging

  - reports

author: miyanaga
image: https://blog.ideamans.com/assets/image-data-rate-ogp.png
category: web-imaging

# カスタム
updatedAt: 2020-06-18 06:35:24
publishedAt: 2020-04-10 12:12:17
categories: 
  - web-imaging

  - reports

categoryLabels: 
  - Web画像最適化

  - 調査レポート

authorId: miyanaga
subTheme: 
recommended: false
---

当たり前のような話ですが、念のため検証してみました。

もちろん同じ画素数でも画像の内容(情報量≒乱雑さ)によってファイルサイズはバラバラになるので、あくまで同じ内容の画像、同じ品質パラメータという前提です。

## 仮説

PNGは連続するパターンが長くなれば圧縮が効きやすいので、解像度が高い方が、単位面積(画素数)あたりのファイルサイズが小さくなるのかも？

JPEGは画素数にほぼ比例しそう。

## 検証

下記の画像を拝借しました。

### JPEG画像

* 01.jpg 2200x2750 [Unsplashより](https://unsplash.com/photos/22xtq0-0VjY)
* 02.jpg 1834x2751 [Unsplashより](https://unsplash.com/photos/C_vn65JlfLo)
* 03.jpg 2600x2600 [Unsplashより](https://unsplash.com/photos/-kCEUoJFH7I)

### PNG画像

* 01.png 512x512ピクセル [IocnFinderより](https://www.iconfinder.com/icons/171485/image_photo_icon)
* 02.png 512x512ピクセル [IconFinderより](https://www.iconfinder.com/icons/118887/generic_image_icon)
* 03.png 512x512ピクセル [IconFinderより](https://www.iconfinder.com/icons/285633/image_icon)

それぞれの画像を、画素数ベースで10%、20%、30%、...、90%となるように縮小リサイズし、JPEGは品質85、PNGは32ビット(アルファ付きフルカラー)で出力します。

ImageMagickを利用します。`-resize`オプションを利用します。補間は特に指定しなかったので`bilinear`になっているはずです。

## JPEGの場合

少しゆらぎがありますが、ほぼ画素数に比例しました。画素の並びの変化で離散コサイン変換の結果も変わるので、その誤差かなと思います。

<img alt="image-data-rate-jpg.png" src="https://blog.ideamans.com/assets/image-data-rate-jpg.png" width="652" height="776" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

## PNGの場合

JPEGより誤差が大きくなりましたが、画素数に対して線形の強い相関性があります。

<img alt="image-data-rate-png.png" src="https://blog.ideamans.com/assets/image-data-rate-png.png" width="615" height="776" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

## Web画像の効率のよさは単位画素数のファイルサイズに出る

この実験を行ったのは、この仮説を検証するためです。

画像の大きい小さい、多い少ないはサイトの目的によって大きく異なります。だから画像ファイル数や、総ファイルサイズではそのサイトの画像が軽いか(ダウンロードの効率よく出力されているか)は比較できません。

そこで画像すべての単位画素数あたりのファイルサイズを比較することで、軽い画像出力の上手さを比較しようと考えています。

Webで画像によりユーザーに伝えたい情報量や思いの強さは概ね総画素数に代表され、それが軽いほうが画像の利用効率の高いサイト、という発想です。

まずはファイルサイズが画素数にほぼ比例する関係を確認できたので(これがもし無関係だと単位画素数を比較することに意味がなくなっちゃうので)、更に試行を進めてみます。

