---
# Astrowind
title: 'PNGファイルを軽量化する方法は4種類だけ。減色・ロスレス最適化・メタデータ削除・解像度の最適化'
excerpt: '画質の劣化がなく、背景の透過も可能はPNGはキレイな分ファイルサイズも大きくなり...'
updateDate: 2020-12-19
publishedDate: 2019-03-11
tags: 
  - web-imaging

  - lightfile

author: miyanaga
image: https://blog.ideamans.com/assets/png-compare-large.png
category: web-imaging

# カスタム
updatedAt: 2020-12-19 10:41:52
publishedAt: 2019-03-11 11:25:36
categories: 
  - web-imaging

  - lightfile

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

authorId: miyanaga
subTheme: bs4
recommended: false
---

画質の劣化がなく、背景の透過も可能はPNGはキレイな分ファイルサイズも大きくなりがちです。

よくJpegに対して3倍の重さと言われていますが、写真のような色数の多い画像はもっと重くなります。

そんなPNGファイルをできるだけ軽くする方法は4種類あります。

## PNG8で保存する・変換する(256色への減色)

PNGにはフルカラー(約1670万色)を扱うことができるPNG24(アルファチャンネルを含むPNG32)と、256色までしか扱えないPNG8があります。

1670万色に比べると256色は非常に弱々しい印象ですが、実は多くのケースで人間の目を十分にごまかすことができます。

例えば次の画像は[pngquant](https://pngquant.org/)のページからの引用ですが、片方がPNG32、もう片方がPNG8でファイルサイズが約4倍も違います。どうでしょう、一瞬でどちらの方が画質がよいか断言できるでしょうか？

<img alt="png-compare.png" src="https://blog.ideamans.com/assets/png-compare.png" width="576" height="163" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

一部を10倍に拡大すると違いがわかります。ディザリングと呼ばれるピクセルの配置の工夫により中間色を表現しています。

<a href="https://blog.ideamans.com/assets/png-compare-large.png"><img alt="png-compare-large.png" src="https://blog.ideamans.com/assets_c/2019/03/png-compare-large-thumb-650xauto-953.png" width="650" height="275" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

これはファミコンなど昔のゲームグラフィックスでよく使われた手法です。今はディスプレイの解像度が高いのでぱっと見で気づかないことが増えました。

しかしどうしてもザラザラ感が目立つこともあります。グラデーションは鬼門です。**画質を損ねる場合は減色を断念するべき**です。

PNG8の利用でお勧めの方法は、ひとつはPhotoshopで書き出すときに**PNG8**を指定すること、もうひとつは[TinyPNG](https://tinypng.com/)や[pngquant](https://pngquant.org/)を利用することです。

他のツール(ImageMagickなど)では、パラメータを最適化しないと知覚的な画質が大きく低下する場合があります。よく確認してから利用しましょう。

<img alt="png8-compare.png" src="https://blog.ideamans.com/assets/png8-compare.png" width="1280" height="349" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

## ロスレス圧縮

PNGの画質を一切落とさず、圧縮データの最適化によりファイルサイズを削減する手法です。[OptiPNG](https://optipng.sourceforge.net/)が有名です。

以前、この[PNGロスレス最適化ツールの比較ページを紹介](https://blog.ideamans.com/2018/08/11-png-tools-benchmark.html)しました。

画質も落ちず軽量化できるなんて理想的ですが、やはり削減効果は高くありません。

以前、数万ファイルのサンプルについて複数のツールでロスレス圧縮する調査を行いましたが、処理に時間がかかるわりに削減効果は平均で数%という結果でした。

画質が落ちるものではないのでやっておいても損はありませんが、ファイルの数が多い場合は処理時間に注意が必要です。

## メタデータの削除

PNGファイルはヘッダ+本体という一般的なファイル構造と異なり、チャンクという部品の連なりで構成されています。

このチャンクの拡張性が高いので、アプリケーションによって独自のメタデータが埋め込まれることがよくあります。これがファイルによっては大きなサイズを占めることがあります。

一般的にJpegも同様ですが、アプリケーションからPNGファイルを書き出す時は**保存**ではなく、**エクスポート**を使うことでこのメタデータを最低限に絞ることができます。

既に作成されたPNGファイルから一括でメタデータを削除するコマンドとしては、[Pngcrush](https://pmt.sourceforge.io/pngcrush/index.html)がよく知られています。

## 解像度の最適化

これは全ての画像に共通して言えることですが、画面に表示される必要最低限のサイズで画像ファイルは用意しましょう。

srcsetで個別に指定することが理想的ですが、なかなかそこまで対応するのは困難です。

少なくとも、極端に大きな画像をWebで利用しない、サムネイルにはサムネイル用の低解像度画像を用意する、といった点には気を付けましょう。

## LightFileで完全自動化。画質

弊社の[画像軽量化自動化ソリューションLightFileがPNGに対応](https://www.ideamans.com/release/20190308/)しました。

LightFileでは256色への減色と、メタデータの削除を完全自動化します。

しかも256色への減色が著しく画質を損ねる場合は減色を断念。人の目による作業のような丁寧な軽量化が行われます。

PNGを軽くしたいけど、軽量化は面倒。そんな方は弊社までご相談ください。
