---
# Astrowind
title: '【保存版】知らないと画質が落ちるWebP変換おすすめパラメーター設定例 JPEG/PNG編'
excerpt: '「WebPは軽いけど画質が悪い」と安易に誤解しないために 従来のJPEG画像やP...'
updateDate: 2020-08-05
publishedDate: 2020-08-05
tags: 
  - webp

author: miyanaga
image: https://blog.ideamans.com/assets/webp-params-ogp.png
category: webp

# カスタム
updatedAt: 2020-08-05 08:35:48
publishedAt: 2020-08-05 08:30:00
categories: 
  - webp

categoryLabels: 
  - WebP

authorId: miyanaga
subTheme: bs4
recommended: false
---

## 「WebPは軽いけど画質が悪い」と安易に誤解しないために

従来のJPEG画像やPNG画像をWebPに変換する代表的なコマンドが[cwebp](https://developers.google.com/speed/webp/docs/cwebp) です。

ImageMagickの`convert`コマンドのように多くの開発シーンで使われると予想されます。実際にWordPressなどのプラグインの多くも内部ではこの`cwebp`コマンドを使用しています。

この`cwebp`には意外と多くのパラメーターがあって、設定に迷ってしまいます。

**企業サイトのWebP導入を支援する弊社が、現時点のおすすめパラメーター設定例**を紹介します。

知らないと、**「WebPは確かに軽いけど画質がいまいち...」という誤解**を招いてしまいます。スムーズなWebPシフトのためにご参考ください！

## まずは結論から

### JPEG画像からWebPに変換するとき

元画像を `input.jpg`、WebP画像を `output.webp` とすると、

<pre><code class="language-sh">cwebp -q 75 -metadata icc -sharp_yuv -o output.webp input.jpg
</code></pre>

`-q`の値はお好みですが、決め打ちならデフォルトの`75`から始めてよいです。ポイントは`-metadata icc -sharp_yuv`。詳しくは後述します。

### PNG画像からWebPに変換するとき

元画像を `input.png`、WebP画像を `output.webp` とすると、

<pre><code class="language-sh">cwebp -lossless -metadata icc -o output.webp input.png
</code></pre>

PNGはロスレス(可逆)圧縮方式なので、WebPにするときも`-lossless`を使うのが基本。

ただ、アルファチャンネルを使いたいがためにPNGにしていた写真調の画像は、JPEG画像と同じオプションで変換する方がグッと軽くなります。

### GIF画像からWebPに変換するとき

GIF画像をWebPに変換するには同じく [libwebp](https://chromium.googlesource.com/webm/libwebp) に同梱されている  [gif2webp](https://developers.google.com/speed/webp/docs/gif2webp) コマンドを使うのですが、注意が必要でまた別の記事で触れたいと思います。

GIF画像はWebPに変換することで、逆にファイルサイズが大きくなってしまうことがあります。

何よりモダンブラウザにおいてGIFの役割はもう終了していると言ってもよく、SVG+CSSアニメーションや、video要素+mp4の利用が推奨されています。

## 品質パラメーター -q

`-q`　はJPEGでおなじみの 0〜100 で表す品質パラメーターです。高い数値ほど仕上がり画質がキレイになりますが、ファイルサイズが大きくなります。デフォルトは`75`です。

**JPEG同様、本来は仕上がりの画質を見ながら画像に合わせて決めるのがベスト**ですが、WebP変換を自動化する場合は決め打ちが現実的です。

この`-q`パラメーターは、**80あたりからファイルサイズ増加の傾きが大きくなる**傾向があります。

<img alt="webp-q-80.png" src="https://blog.ideamans.com/assets/ca0f3a494f152143bc0cdca6211f8b20e35b38a3.png" width="710" height="379" class="img-fluid" />

では`-q 75`、`-q 80`、`-q 85`で人間にとっての仕上がり画質に違いがあるかというと、ふつうの写真調の画像では知覚的・認知的にまずわかりません。

<img alt="webp-q75-q80-q85.png" src="https://blog.ideamans.com/assets/webp-q75-q80-q85.png" width="1239" height="459" class="img-fluid" />

[インタラクティブに見てみる](https://php.simulate.site/webp-params-nav/default/#case-cwebp_quality_high)

その意味で`-q 75`は決め打ちの値としては信頼性と軽量化のバランスがよく、その意味でもデフォルト値になっているのかもしれません。

**迷ったら`-q 75`から実際に運用してみて、仕上がり画質が気になったら調整**しましょう。

## ICCプロファイルを保持する -metadata icc

画像ファイルには [ICCプロファイル](https://ja.wikipedia.org/wiki/ICC%E3%83%97%E3%83%AD%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB) という色味の補正情報が含まれることがあります。

Web業界では馴染みがないのですが、紙媒体用の素材が回ってきたJPEG画像がときどきそれに該当します。

`cwebp`コマンドはデフォルトでこの**ICCプロファイルを捨ててしまうため、WebPにすると「なんか色味が違う」**ということが起こります。

下の画像は`Adobe RGB`として書き出されたJPEG画像を、デフォルトのパラメーターでWebPに変換した例です。左右で空や緑の色味が違うのがおわかりでしょうか？

<img alt="webp-no-icc.png" src="https://blog.ideamans.com/assets/webp-no-icc.png" width="837" height="717" class="img-fluid" />

[インタラクティブに見てみる](https://php.simulate.site/webp-params-nav/default/?source=landscape01-adobe-rgb.jpg&suite=cwebp-standard)

パラメーター `-metadata icc` を付加することでICCプロファイルを維持するため、色味が維持されます。

<img alt="webp-with-icc.png" src="https://blog.ideamans.com/assets/webp-with-icc.png" width="837" height="717" class="img-fluid" />

[インタラクティブに見てみる](https://php.simulate.site/webp-params-nav/default/?source=landscape01-adobe-rgb.jpg&suite=cwebp-standard#case-cwebp_metadata)

**Web用のJPEG画像は本来`sRGB`にしておくべき**ですが、企業ではいろいろなデータソースがあるのでそう行かないこともあるでしょう。

大半の画像はICCプロファイルを含まず、その場合に副作用はないので、保険としてこのパラメーターを付けておくと安心です。

PNGにICCプロファイルが含まれることは実際ほとんどありませんが、いちおうサポートされているのでパラメーター設定例に付加しました。

[インタラクティブに見てみる](https://php.simulate.site/webp-params-nav/default/?source=landscape03-adobe-rgb.png&suite=cwebp-standard)

ちなみに [Exif](https://ja.wikipedia.org/wiki/Exchangeable_image_file_format) もデフォルトで捨てられます。もし維持する場合は `-metadata exif`を付けましょう。

## 境界の色味をできる限り補正する -sharp_yuv

JPEG向けのLossy(`-lossless`オプションなしの非可逆)圧縮では、色の境界がぼやけたり色味が変化することがあります。いわばJPEGから引き継いだ特性で、高い圧縮率を実現する上で避けられない宿命のようなものです。

例えばこのような赤と青のソリッドな境界には、WebPでは縞模様が発生します。最高品質の`-q 100`を指定しても逃れることはできません。

<img alt="webp-params-explorer (15).png" src="https://blog.ideamans.com/assets/webp-params-explorer%20%2815%29.png" width="1274" height="973" class="img-fluid" />

[インタラクティブに見てみる](https://php.simulate.site/webp-params-nav/default/?source=blue-and-red.png&suite=cwebp-standard#case-cwebp_quality)

1ピクセルの直線は、ぼやけるうえ赤と青の色味も暗い感じに変化してしまいます。

<img alt="webp-params-explorer (16).png" src="https://blog.ideamans.com/assets/webp-params-explorer%20%2816%29.png" width="1274" height="973" class="img-fluid" />

これをできる限り補正するオプションが `-sharp_yuv` です。完璧ではないものの、赤と青の色味がオリジナルに近づいてますね。

<img alt="webp-sharp-yuv.png" src="https://blog.ideamans.com/assets/webp-sharp-yuv.png" width="1105" height="537" class="img-fluid" />

[インタラクティブに見てみる](https://php.simulate.site/webp-params-nav/default/?source=blue-and-red.png&suite=cwebp-standard#case-cwebp_sharp_yuv)

実用的な画像では、写真と文字の表現で再現性を向上してくれます。

<img alt="webp-sharp-yuv-typo.png" src="https://blog.ideamans.com/assets/webp-sharp-yuv-typo.png" width="1712" height="481" class="img-fluid" />

[インタラクティブに見てみる](https://php.simulate.site/webp-params-nav/default/?source=typography01.jpg&suite=cwebp-standard#case-cwebp_sharp_yuv)

デメリットはファイルサイズが若干増えることと、CPUやメモリの負荷がかかることです。この`-sharp_yuv`は必須ではありませんが、多くのWebサイトでは総合的にメリットの方が大きいかな...という印象です。

ちなみにこちらの記事 [WebP の色劣化問題の改善 \- Qiita](https://qiita.com/yoya/items/f5ef9b66b556eda9e6bf) がわかりやすく、比較用のパターンも参考にさせてもらいました。

## その他のパラメーターについて

その他のパラメーターは、デフォルト値が結局最適だったり、画質や性能には影響が現れない(弊社も今のところ効用が正直わからない...)ので例には記載していません。

当初は仕上がり画質をPSNRで評価して品質 `-q` を調整してくれる `-psnr` が「いいかも！」と思ったのですが、ちょっと実用化に至りませんでした。そのあたりこちらに書きました。

[cwebpコマンドの\-psnrオプションの罠と\-qrangeがやってくる！ \- Qiita](https://qiita.com/miyanaga/items/ed684945b82218449519)

以上、現時点でベストと思えるWebP変換パラメーターでした。

`libwebp`も日々進歩しているので、引き続きウォッチしてこのブログで紹介していきます。

スムーズなWebPシフトで、快適なWebサイトづくりを一歩進めましょう！