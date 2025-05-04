---
# Astrowind
title: 'Safari 12.1でも残念ながらWebPサポートなし。ついでに見出しを斜め読み'
excerpt: 'Safari 12.1で追加される新機能が公表されました。 New WebKit...'
updateDate: 2019-04-07
publishedDate: 2019-04-07
tags: 
  - webp

author: miyanaga
image: https://blog.ideamans.com/assets/safari121.png
category: webp

# カスタム
updatedAt: 2019-04-07 07:58:57
publishedAt: 2019-04-07 07:07:15
categories: 
  - webp

categoryLabels: 
  - WebP

authorId: miyanaga
subTheme: 
recommended: false
---

Safari 12.1で追加される新機能が公表されました。

[New WebKit Features in Safari 12.1](https://webkit.org/blog/8718/new-webkit-features-in-safari-12-1/)

WebPがサポートされたらいいなぁと思いましたが、残念ながらサポートされないようです(される場合は先に**Technology Preview**に搭載されると思うのですが...)。

せっかくなので見出しを斜め読みしてみます。

## 気になった機能

### Webページのダークモード

Appleはずいぶんダークモード推しですね。

個人的にはすっかりダークモードを使ってます。バックライトによる電力消費を抑えられるのが魅力で試してみたら意外とすぐ慣れたのでした。

**@media(prefers-color-scheme: light)**というメディアクエリでライトモードとダークモードのCSSを定義できるようです。

### Web支払いAPI

Googleが先行していたPayment Request APIですが、Apple製品でもWalletアプリやApple Payの設定をWebでも利用できるようになる？ようです。

**and special field support for Japan**という記述もあります。なんだろう？ 日本独自のフィールド。

### モダンなEncrypted Media Extensions API

著作権で保護された動画の配信は、データの保護上、独自のコンポーネントを使うものだと思っていましたが、これもWeb標準になりつつあるようです。

### Intersection Observer

画像の遅延読み込みやパララックスなど、ある要素が実際に表示されるタイミングは、これまでスクロールイベントを使って検知していました。

しかしそのわずかな目的に対して、スクロールするたびにイベントハンドラが毎回呼び出されて非効率です。Intersection Observerというネイティブサポートが実装されつつあります。

### WebシェアAPI

iOSなどの標準機能にシェア機能があります。いまはメタデータやOGPから自動生成されていると思われますが、その内容をカスタマイズできるようです。

### データリスト(datalist)

テキストボックスの入力サジェスト候補を定義するdatalist要素をサポートするようです。普及するとオートコンプレート系のUI実装にJavaScriptが不要になりますね。

### よりよいテキスト装飾

下線の位置や太さが指定できたりするようです。シブい！

## その他の機能

次のフィーチャーが追加されるそうです。

* インテリジェントなトラッキング予防
* WebRTCの改良
* MSEのコーデックとコンテナの変更
* カラー選択コントロール
* Webインスペクター(開発ツール)の改良

