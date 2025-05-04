---
# Astrowind
title: 'WebP公式のPhotoshopプラグイン WebPShop登場'
excerpt: 'WebP開発チームによるPhotoshopプラグイン WebPShopが公開され...'
updateDate: 2020-06-18
publishedDate: 2019-07-09
tags: 
  - webp

author: miyanaga
image: https://blog.ideamans.com/assets/webpshop-ogp.png
category: webp

# カスタム
updatedAt: 2020-06-18 05:52:52
publishedAt: 2019-07-09 06:06:36
categories: 
  - webp

categoryLabels: 
  - WebP

authorId: miyanaga
subTheme: 
recommended: false
---

WebP開発チームによるPhotoshopプラグイン WebPShopが公開されました。

PhotoshopでWebPの読み書きができるようになります。

[WebPShop  |  WebP  |  Google Developers](https://developers.google.com/speed/webp/docs/webpshop)

<a href="https://developers.google.com/speed/webp/docs/webpshop"><img alt="webpshop.png" src="https://blog.ideamans.com/assets_c/2019/07/webpshop-thumb-400xauto-1036.png" width="400" height="333" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

手元のPhotoshopで試してみたのでその手順を紹介します。



## ダウンロード

GitHubから一式ダウンロードして展開します。

[webmproject/WebPShop: Photoshop plug\-in for opening and saving WebP images](https://github.com/webmproject/WebPShop)

<a href="https://blog.ideamans.com/assets/webpshop-download.png"><img alt="webpshop-download.png" src="https://blog.ideamans.com/assets_c/2019/07/webpshop-download-thumb-800xauto-1032.png" width="800" height="457" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

## インストール

Photoshopのアプリケーションフォルダにある`Plug-ins`フォルダにプラグイン本体をコピーまたは移動するだけです。

### macOSでは

`bin/WebPShop_0_2_1_Mac_x64/WebPShop.plugin`を`/Applications/Adobe Photoshop/Plug-ins`にコピーします。

<a href="https://blog.ideamans.com/assets/webpshop-install.png"><img alt="webpshop-install.png" src="https://blog.ideamans.com/assets_c/2019/07/webpshop-install-thumb-800xauto-1034.png" width="800" height="450" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

### Windowsでは

Windowsでは`bin\WebPShop_0_2_1_Win_x64\WebPShop.8bi`を`C:\Program Files\Adobe\Adobe Photoshop\Plug-ins`にコピーします。

## PhotoshopでWebPを開く

普通に`開く`メニューやドラッグ&ドロップでWebP画像を開けました。

<a href="https://blog.ideamans.com/assets/webp-open.png"><img alt="webp-open.png" src="https://blog.ideamans.com/assets_c/2019/07/webp-open-thumb-800xauto-1038.png" width="800" height="530" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

## PhotoshopでWebPを保存する

`書き出し`系ではなく、`保存`や`別名で保存`で行います。`フォーマット`で`WebP`を選択できます。

<a href="https://blog.ideamans.com/assets/webp-save.png"><img alt="webp-save.png" src="https://blog.ideamans.com/assets_c/2019/07/webp-save-thumb-600xauto-1040.png" width="600" height="220" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

オプションは`保存`ボタンの後に表示されます。ロスレス圧縮するには、`Quality`のレバーを右いっぱいに動かすようです。

<a href="https://blog.ideamans.com/assets/webp-options.png"><img alt="webp-options.png" src="https://blog.ideamans.com/assets_c/2019/07/webp-options-thumb-400xauto-1042.png" width="400" height="333" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

弊社でもWebページで実際に使われている画像をまるっとWebP変換するツールを提供しています。よかったらお試しください！

[ページまるごとWebP変換・効果測定](https://sim.lightfile.net/webp/)
