---
# Astrowind
title: '透過=即PNGはもう古い。写真っぽい透過PNGを劇的に軽量化する無料ツールと3つのテクニック'
excerpt: 'PNGはイラストっぽい画像の圧縮は得意ですが、写真っぽい画像の圧縮にはまったく向...'
updateDate: 2021-02-25
publishedDate: 2021-02-25
tags: 
  - core-web-vitals

  - webp

  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/png-alpha-saving-ogp.png
category: web-imaging

# カスタム
updatedAt: 2021-02-25 16:08:50
publishedAt: 2021-02-25 16:00:10
categories: 
  - core-web-vitals

  - webp

  - web-imaging

  - performance

categoryLabels: 
  - Core Web Vitals

  - WebP

  - Web画像最適化

  - 表示高速化

authorId: miyanaga
subTheme: bs4
recommended: false
---

PNGはイラストっぽい画像の圧縮は得意ですが、写真っぽい画像の圧縮にはまったく向いていません。

しかし写真っぽい画像でも透過表現を使うときは、データが重いのを承知でフルカラーPNGを使うしか...なかったのは昔の話。

今は写真っぽい画像でも透過表現を劇的に軽くするテクニックがあります。

知っていれば Core Web Vitals の LCP に致命傷を与えることを防ぐことができるかも？

**すぐに試して制作にも使えるよう、無料Webツールを公開**したのでぜひ試してみてください！

[写真調の透過PNG軽量化ツール \- 重くなりがちな透過PNG写真画像を軽量化しよう！](https://php.simulate.site/png-alpha-mask-saving/)

## まずは体感！ 透過PNG軽量化ツールの使い方

透過情報を含むPNGファイルを選択して`アップロード`ボタンを押します。

紹介する3つのテクニックで軽量化された画像のデータ量と削減率、プレビュー、HTMLの記述例が表示されます。

透過具合について、背景を変更して確認できます。

画像一式が欲しい場合は、メールアドレスを入力して`画像一括ダウンロード`ボタンをクリックしてください。ダウンロードURLが記載されたメールが送信されます。

<video class="img-fluid" src="https://blog.ideamans.com/assets/png-alpha-saving-usage.mp4" muted autoplay loop />

[写真調の透過PNG軽量化ツール \- 重くなりがちな透過PNG写真画像を軽量化しよう！](https://php.simulate.site/png-alpha-mask-saving/)

### デフォルト画像について

ちなみにデフォルトで表示される画像は、 <a href="https://unsplash.com/">Unsplash</a> から
<a href="https://unsplash.com/photos/OIzACD-Z3ZM">@maksym_tymchyk の写真</a> を拝借し、<a href="https://www.remove.bg/ja">画像の背景を削除 - remove.bg</a> で背景を取り除いたものです。

* pngquant (256色減色) **-70.16% 削減**
* JPEG + CSS mask **-84.67% 削減**
* Lossy WebP **-92.64% 削減**

と、見た目はそう変わらず、オリジナル画像に対して劇的に軽量化されています。

続いてそれぞれのテクニックについて紹介していきます。

## テクニックその1 pngquant

<a href="https://blog.ideamans.com/assets/pngquant.png"><img alt="pngquant.png" src="https://blog.ideamans.com/assets_c/2021/02/pngquant-thumb-375xauto-1309.png" width="375" height="333" class="mt-image-right" style="float: right; margin: 0 0 20px 20px;" /></a>

まずは以前からの超定番ツール <a href="https://pngquant.org/">pngquant</a> の利用です。

pngquant は、PNG画像を**フルカラーから256色に減色することで劇的にファイルサイズを削減**します。

減色を目立たなくする`ディザリング`が実に巧妙ななので、写真っぽい画像だと画質が落ちたことに気づかないことがほとんどです。

### メリット

* すべてのブラウザに対応。
* HTMLの記述もシンプルにいままで通り。

### デメリット

* 画像によっては画質の劣化が目立つことも。

## テクニックその2 JPEG + CSS mask

<a href="https://blog.ideamans.com/assets/cssmask.png"><img alt="cssmask.png" src="https://blog.ideamans.com/assets_c/2021/02/cssmask-thumb-375xauto-1311.png" width="375" height="332" class="mt-image-right" style="float: right; margin: 0 0 20px 20px;" /></a>

モダンブラウザには <a href="https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Masking">CSSマスク</a> という機能が備わっています。

PNGやSVGからマスク情報を取得し、CSSにより切り抜き合成する機能です。

この機能を活用すると、**もともと写真向きのJPEGで画像を効率よく圧縮し、PNGからアルファチャンネルだけを拝借して透過表現を実現**できます。

[IE以外であれば概ね利用可能](https://caniuse.com/css-masks)です。

### メリット

* 従来のフォーマットの組み合わせで実現できる。
* JPEGのパラメータで画質を調整可能。

### デメリット

* ファイルをふたつ(画像とマスク)を用意しなければならない。
* 非対応のブラウザ(主にIE)では透過表示されない。

## テクニックその3 Lossy WebP

今年盛り上がりを見せるであろう次世代画像フォーマット <a href="https://developers.google.com/speed/webp">WebP</a> なら、JPEGの流れを組む写真に強い非可逆圧縮方式と、アルファチャンネルによる透過を同時に利用できます。

つまりこの記事のテーマであり、ずっと欲しかった**JPEGによる美しい透過表現がついにネイティブで実現**できるというわけです。

ちなみにWebPには、JPEGライクな非可逆(Lossy)圧縮とPNGライクな可逆(Lossless)圧縮とがあります。可逆(Lossless)圧縮をしてしまうと、劇的な軽量化はできないので注意してください。

### メリット

* 多くのケースでいちばん軽い。
* ほぼ全てのモダンブラウザで利用可能(IE・旧iOS/MacOS以外)で、対応シェア上昇中。

### デメリット

* 古いWebP非対応ブラウザへの配慮が必要(HTMLを書き分ける、.htaccessなどのサーバー設定を変更)。

## 結局どの方法を用いるべき？

Lossy WebPが本命だと思います。

iOS 14がWebPに対応したことで、**WebP対応シェアは日本でも85%を超え**てきました(2021年2月25日現在)し、今後も上昇する一方です。

<img alt="webp-share.png" src="https://blog.ideamans.com/assets/43000a5351a08b74db7631c0474e7f8d30fdef4f.png" class="img-fluid" />

大多数のユーザーに最も軽いWebPデータを配信し、一部の非対応のユーザーには従来の重い画像で我慢してもらう...という判断が今は合理的ではないでしょうか。

念を入れて、非対応のユーザーにはpngquantで軽量化した方を配信する選択もよいかもしれません。

表示の軽さを犠牲にしない表現力向上のお役に立てれば何よりです。

[写真調の透過PNG軽量化ツール \- 重くなりがちな透過PNG写真画像を軽量化しよう！](https://php.simulate.site/png-alpha-mask-saving/)
