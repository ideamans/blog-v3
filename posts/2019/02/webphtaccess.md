---
# Astrowind
title: 'WebPと従来の画像を正しく振り分ける.htaccessファイル'
excerpt: 'ページまるごとWebP変換・効果測定と一括ダウンロードがWeb担当者Forumで...'
updateDate: 2019-02-22
publishedDate: 2019-02-22
tags: 
  - webp

  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/68b909cbb93b3aa625632b795c3bac5ec2cad9b4.png
category: webp

# カスタム
updatedAt: 2019-02-22 08:32:10
publishedAt: 2019-02-22 06:35:43
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

[ページまるごとWebP変換・効果測定と一括ダウンロード](https://sim.lightfile.net/webp/)が[Web担当者Forum](https://webtan.impress.co.jp/n/2019/02/21/31916)で紹介されて利用者増加中です。

このツールでWebPファイルを一括ダウンロードすると、.htaccessファイルがおまけで付いてきます。これはWebPと従来の画像を振り分ける働きをします。

手順については、[ページの画像をまるごとWebP変換してPageSpeed Insightsスコアを今すぐ改善するチュートリアル](/2019/02/webppagespeed-insights.html)で詳しく紹介しているのでそちらをご覧ください。

この記事は「その.htaccessファイル中身どうなってるの？ 変な影響でないの？」と気になる方に向けて書いています。

## 従来のフォーマットとWebPは当面共存が必要

従来の画像を完全にWebPに置き換えてしまう(従来の画像は消してしまう)という方法は、非対応ブラウザが多い今は現実的ではありません。

Androidの専用のPWAアプリとかなら別ですが...

そこでメインは従来の画像フォーマット(Jpeg、PNG、GIF)で用意しつつ、対応するブラウザには軽いWebPを配信するという[プログレッシブ・エンハンスメント](https://liginc.co.jp/249012)により共存する方法が今は一般的です。

## .htaccessによる振り分け

.htaccessファイルはWebサーバ(Apache)の挙動をカスタマイズする最も手軽な方法です。

WebPファイル共存のためのカスタマイズはシンプルで、**「ブラウザがWebPに対応していて、かつ、WebP変換されたファイルがあればブラウザにWebPを返す設定」**だけです。

加えて**「.webpファイルへの直接アクセスに対するContent-Typeの設定」**と、**「画像ファイルにはVary: Acceptヘッダを付与する設定」**という補助的なカスタマイズも行っていますが、Vary: Acceptヘッダの付与はCDNを考慮したものなので多くのWebサーバーではなくても構いません。

<pre><code class="language-apacheconf"># WebP対応ブラウザかつWebPファイルがあればWebPファイルを返す設定
&lt;IfModule mod_rewrite.c&gt;
  # Rewriteモジュールを有効にする
  RewriteEngine On

  # WebP対応ブラウザはAcceptリクエストヘッダにimage/webpを含む慣例
  # その場合のみ後続のRewriteRuleを適用する
  RewriteCond %{HTTP_ACCEPT} image/webp

  # 対応するWebP版のファイルがある場合のみ後続のRewriteRuleを適用する
  RewriteCond %{SCRIPT_FILENAME}.webp -f

  # *.jpg、*.png、*.gifファイルを*.webpファイルに内部的にルーティングする(ルーティング先は$0.webpでも可)
  # Content-Typeはimage/webpにする
  RewriteRule .(jpe?g|png|gif)$ %{SCRIPT_FILENAME}.webp [T=image/webp]
&lt;/IfModule&gt;

# 拡張子.webpファイルへの直接アクセスにはContent-Typeとしてimage/webpを返す設定
&lt;IfModule mod_mime.c&gt;
  AddType image/webp .webp
&lt;/IfModule&gt;

# WebPファイルがあるかもしれない画像へのリクエストは全てVary: Acceptレスポンスヘッダを返す設定(CDN対策)
# Headerディレクティブ単独ではできないのでSetEnvIfディレクティブとの組み合わせで実現する
&lt;IfModule mod_setenvif.c&gt;
  SetEnvIf Request_URI &quot;\.(jpe?g|png|gif)$&quot; _image_request
&lt;/IfModule&gt;

&lt;IfModule mod_headers.c&gt;
  Header append Vary Accept env=_image_request
&lt;/IfModule&gt;
</code></pre>

このテーマについてはQiitaで以前の記事を書きました。より詳しくは[.htaccessによるWebPの選択的レスポンスとその問題点と改善案](https://qiita.com/miyanaga/items/6570c3c9ae8e15dbb57c)をご覧ください。

nginxとAmazon S3についても記事がありますのでご参考ください。

* [nginxにおけるWebP画像の選択的レスポンスの設定方法](https://qiita.com/miyanaga/items/94447efae0bf767b9f2b)
* [CloudFrontにおけるWebPの選択的レスポンス](https://qiita.com/miyanaga/items/e9c7eed19ea16652f04d)

