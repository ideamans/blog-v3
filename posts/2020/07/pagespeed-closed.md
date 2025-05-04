---
title: '公開前サイトでも PageSpeed Insights したい！ リリース前から計測するためのWebサーバー設定テクニック (Apache編)'
excerpt: '認証付きサイトをPageSpeed Insightsできない問題 公開前のサイト...'
updateDate: 2020-07-17
publishedDate: 2020-07-17
tags: 
  - pagespeed-insights
author: miyanaga
image: https://blog.ideamans.com/assets/pagespeed-closed-ogp.png
category: pagespeed-insights
updatedAt: 2020-07-17 20:04:18
publishedAt: 2020-07-17 16:51:00
categories: 
  - pagespeed-insights
categoryLabels: 
  - PageSpeed Insights
authorId: miyanaga
subTheme: bs4
recommended: false
---

## 認証付きサイトをPageSpeed Insightsできない問題

公開前のサイトは関係者以外に見られたくないので、基本認証やIPアドレスによるアクセス制限を設けます。

しかしその状態では [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=ja) もスコアを計測できません。

<p class="text-muted"><small>URLに基本認証のユーザー名とパスワードを含める方法があります(例: `http://ユーザ名:パスワード@example.com`)。しかしPageSpeed Insightsで現在この方法は使えません。</small></p>

代わりにChrome DevTools の `Lighthouse`タブ(旧`Audit`タブ)の`Performance`カテゴリを用いて計測できるのですが、他のメンバーと共有したり、時系列で比較しにくいことが難点です。

なぜなら`Lighthouse`タブでの計測はそのPCやネットワークの性能に左右されるため、環境やタイミングでスコアが異なるからです。上記のWebサービス版 PageSpeed Insights ともスコアに一貫性がありません。

**「やっぱりサイトの公開前からお手軽でスコアが安定しやすい PageSpeed Insights で計測したいね」** ということで、関係者に加えて PageSpeed Insights からのアクセスだけこっそり許容するWebサーバーの設定テクニックを紹介します。

WebサーバーはApache 2.4以上、`.htaccess`への記述を前提とします。nginxなどでも可能だと思います。そのうち研究して記事にします。

## PageSpeed Insightsからのアクセスの判定方法

今のところPageSpeed Insightsからのアクセスを判定するヒントは、`User-Agent`リクエストヘッダとアクセス元のIPアドレス以外になさそうです。

`User-Agent`には`Chrome-Lighthouse`という文字列が含まれ、PageSpeed Insights (というよりGoogleのサービス全般？) からアクセスされるIPアドレスは　[Frequently Asked Questions  |  PageSpeed Service  |  Google Developers](https://developers.google.com/speed/pagespeed/service/faq#clientip) に案内があります。

<!-- <script src="https://php.simulate.site/pagespeed-closed/digest-document-write.php"></script> -->

<p class="text-muted"><small>ちなみに [GCP](https://cloud.google.com/?hl=ja)のインスタンスに割り当てられるIPはまた別のようです。もしGCPのインスタンスのIPアドレスもこの帯域も含まれるとセキュリティホールになりかねません。いくつかのリージョンでVMを立ててみましたが、上記のネットワークには該当しませんでした。</small></p>

## .htaccessの記述例

こんな風にアクセス制御します。

* GoogleのIPアドレスからのアクセスで、かつ、`User-Agent`に`Chrome-Lighthouse`が含まれる場合は許可
* または、社内のIPアドレス xxx.xxx.xxx.xxx からのアクセスは許可(もしあれば)
* または、基本認証のユーザー名とパスワードを正しく入力したアクセスは許可

このアクセス制御を`.htaccess`に実装した例が以下です。

<!-- <pre><code class="language-apacheconf">
<script src="https://php.simulate.site/pagespeed-closed/htaccess-document-write.php"></script>
</code></pre> -->

この方法はApacheモジュール`mod_setenvif`が必要です。もしかしたら追加インストールが必要かもしれません。

## 実際の例

実際に設定したサンプルページが以下です。

ブラウザからアクセスすると基本認証( `test` / `test` )が必要ですが、PageSpeed Insightsでは測定可能です。

* [サンプルページ](http://apache2.ideamans.com/pagespeed-closed-example/)
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fapache2.ideamans.com%2Fpagespeed-closed-example%2F)

これで**「リリースしたらPageSpeedスコアが低かった！」**という悲劇を防ぐため、サイトの公開前からPageSpeedスコアを細かくチェックできますね。
