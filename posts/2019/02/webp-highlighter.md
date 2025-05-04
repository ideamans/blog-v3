---
# Astrowind
title: 'WebP画像を目立たせるChrome拡張機能 WebP Highlighter'
excerpt: '画像が意図したとおりWebPフォーマットで配信されているかを確認するとき、もちろ...'
updateDate: 2019-02-22
publishedDate: 2019-02-21
tags: 
  - webp

  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/31125024759c749372d57f777d1e4833b99ba8a5.png
category: webp

# カスタム
updatedAt: 2019-02-22 08:31:53
publishedAt: 2019-02-21 07:44:01
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

画像が意図したとおりWebPフォーマットで配信されているかを確認するとき、もちろん見分けがつかないのでDeveloper Toolsで確認してきました。

もっと楽な方法ないかなーと調べたところ、ちょうどいいChrome拡張機能がありました。

[WebP Highlighter](https://chrome.google.com/webstore/detail/webp-highlighter/aonapkfkfneahhaonjjpmcabpnbdmojl)

いま見ているページでWebPとして配信されている画像を蛍光色の枠でハイライトします。

たとえばグローバルで積極的にWebP配信を行っている[GAP](https://www.gap.co.jp/)ではこのような表示になります。

<a href="https://blog.ideamans.com/assets/d80b568c4effc33ded4dfdcbd45bb3b85c3f9b9e.png"><img alt="gap.png" src="https://blog.ideamans.com/assets_c/2019/02/d80b568c4effc33ded4dfdcbd45bb3b85c3f9b9e-thumb-autox688-923.png" width="400" height="688" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

この豪快なハイライト表示。デザイナーではなく開発者自身が決めたのだろうなーと想像しました。目には痛いですが、プログラマーとして親近感が湧きました。

アドレスバーにはメニューボタンが表示されます。全体でON/OFFしたり、サイトごとにON/OFFできます。

<a href="https://blog.ideamans.com/assets/aa39f4f326b5b18c66384c92ed087265f4bcb87c.png"><img alt="highlighter.png" src="https://blog.ideamans.com/assets_c/2019/02/aa39f4f326b5b18c66384c92ed087265f4bcb87c-thumb-500xauto-921.png" width="500" height="287" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

ハイライトの色で圧縮方式を表現しているようです。

* 緑 = シンプルなロッシー(非可逆)圧縮。Jpegからの変換が多い。
* 紫 = シンプルなロスレス(可逆)圧縮。PNGからの変換が多い。
* 赤 = 拡張(透過やアニメーション、カラープロファイル)を含む。

<a href="https://blog.ideamans.com/assets/purple-and-green.png"><img alt="purple-and-green.png" src="https://blog.ideamans.com/assets_c/2019/02/purple-and-green-thumb-800xauto-919.png" width="800" height="421" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

デバッグにも便利ですが、WebPを採用しているサイトが一目でわかるので面白いです。

