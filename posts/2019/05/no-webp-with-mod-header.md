---
# Astrowind
title: 'WebPウザいという方に贈るChromeでWebPをブロックする方法 ※ただし完全ではない'
excerpt: 'WebPは軽くて普通のユーザーにはメリットがありますが、画像をダウンロードして使...'
updateDate: 2019-05-23
publishedDate: 2019-05-23
tags: 
  - webp

author: miyanaga
image: https://blog.ideamans.com/assets/modheader.jpg
category: webp

# カスタム
updatedAt: 2019-05-23 13:57:03
publishedAt: 2019-05-23 13:33:32
categories: 
  - webp

categoryLabels: 
  - WebP

authorId: miyanaga
subTheme: 
recommended: false
---

WebPは軽くて普通のユーザーにはメリットがありますが、画像をダウンロードして使いたいシーンでは手間になります。

Twitterにそういう不満の書き込みが多いことを知って、[WebPウザいめんどくさいという方におすすめChrome拡張機能・JpegやPNGで画像をダウンロード](https://blog.ideamans.com/2019/02/webp-chrome-extension.html)という記事を書きました。そこでWebPをJPEGやPNGに変換してダウンロードするChrome機能拡張を紹介しました。

今日はChromeでWebPをブロックするもうひとつの方法を紹介します。

## Chrome機能拡張ModHeaderでAcceptヘッダを書き換え

[ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=ja)という拡張機能をインストールします。

そして Accept というヘッダとして次の値を指定します。

<pre><code>text/html,application/xhtml+xml,application/xml;q=0.9,image/apng,*/*;q=0.8,application/signed-exchange;v=b3</code></pre>

こんな感じです。

<a href="https://blog.ideamans.com/assets/modheader-no-webp.png"><img alt="modheader-no-webp.png" src="https://blog.ideamans.com/assets_c/2019/05/modheader-no-webp-thumb-500xauto-1018.png" width="500" height="460" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

### なぜブロックできるか

WebP対応ブラウザにのみWebP画像を配信する振り分けの方法にはいくつかあります。

この方法はサーバー側での振り分けが、**Accept** リクエストヘッダの **image/webp** というキーワードの有無によって行われることを逆手にとります。

### 完全ではない理由

HTMLで**picture**要素を使って振り分けを行う方法には対応できません。

また、稀なケースですが、**User-Agent** リクエストヘッダを元に振り分けを行うサーバーにも対応できません。

## 隠しオプションはないか？

アドレスバーに**chrome://flags**と入力するといわゆる隠しオプションが表示されます。

ここにWebP対応のON/OFFでもないかな−と思いましたがなさそうでした。

