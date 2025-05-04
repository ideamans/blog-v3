---
# Astrowind
title: 'ついに消費税10% Webサイト上の金額に8%税込金額が残ってないか探すツールを作りました'
excerpt: 'ついに消費税が10%になりました。通販サイト関係者のみなさんは特に大変な時期だっ...'
updateDate: 2020-06-18
publishedDate: 2019-10-01
tags: 
  - tech

author: miyanaga
image: https://blog.ideamans.com/assets/b413a134402e0332fff949d7c72b612ef83266a4.jpeg
category: tech

# カスタム
updatedAt: 2020-06-18 10:33:26
publishedAt: 2019-10-01 16:25:01
categories: 
  - tech

categoryLabels: 
  - 技術系小ネタ

authorId: miyanaga
subTheme: 
recommended: false
---

ついに消費税が10%になりました。通販サイト関係者のみなさんは特に大変な時期だったとお察しします。

さて通販サイトの消費税計算は通常、プログラムによって行われるため、一斉に適用されるものですが、HTMLでベタ書きすることもあります。

例えばランディングページや、利用ガイドにおける「送料: 540円」といった表記です。

こういったベタ書きの8%税込金額は検索できず、人の目と記憶に頼るしかありません。これは大変です。

その問題解決をアシストする簡単なツールを作りました。

## 8%税込っぽい金額表記を探すオープンソースツール

NodeJSがインストールしてある環境であればすぐにお使いいただけます。

[taxmonkey \- npm](https://www.npmjs.com/package/taxmonkey)

### 作業代行します

弊社でこのツールを使ったチェックを代行します。こちらのフォームからご相談ください。

<iframe src="https://blog.ideamans.com//www.ideamans.com/_mautic/form/34" width="100%" height="350"><p>Your browser does not support iframes.</p></iframe>

## 使ってみよう

とある通販サイトに使ってみました。あまり負荷をかけてはいけないので100ページ分チェックしました。**<https://example.com/**はダミーです。>

<code><pre>taxmonkey -l 100 -r 100 -d pc 'https://example.com/'</pre></code>

<img alt="Book1.png" src="https://blog.ideamans.com/assets/Book1.png" width="2232" height="2046" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

該当箇所のないページも**該当なし**として出力します。

税込3,456円(3,200円+8%っぽい)ところなどがところどころ見つかりました。

HTML上の行番号も出力するので探しやすくなっています。

## 念のためのチェックに

あくまで**金額っぽくて税率8%っぽい**テキストを探すだけなので、ぶっちゃけ精度は高くありません。100%正確に探すのは無理です。

広く浅く対応漏れを探すためにご利用いただくことを想定しています。

あと軽減税率には非対応です。これも字面だけを見て8%を探すからです。

## 代行承ります

試してみたいけど詳しいエンジニアがいない...といった状況でしたらぜひご相談ください！

<iframe src="https://blog.ideamans.com//www.ideamans.com/_mautic/form/34" width="100%" height="350"><p>Your browser does not support iframes.</p></iframe>
