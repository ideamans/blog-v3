---
# Astrowind
title: 'iOS 14 パブリックベータでWebP対応を確認！ 出し分けのためのpicture要素やAcceptヘッダは今まで通りで大丈夫？'
excerpt: 'iOS 14 パブリックベータが利用可能になったので以前のiPhoneにインスト...'
updateDate: 2020-07-10
publishedDate: 2020-07-10
tags: 
  - webp

author: miyanaga
image: https://blog.ideamans.com/assets/2c82a08e25872bc131122ca57325fe057de1d55e.png
category: webp

# カスタム
updatedAt: 2020-07-10 20:23:54
publishedAt: 2020-07-10 11:25:24
categories: 
  - webp

categoryLabels: 
  - WebP

authorId: miyanaga
subTheme: bs4
recommended: false
---

iOS 14 パブリックベータが利用可能になったので以前のiPhoneにインストールしてみました！ SafariでのWebP対応を確認したので簡単にレポートします。

[iOS 14プレビュー - Apple（日本）](https://www.apple.com/jp/ios/ios-14-preview/)

まずはホーム画面。噂のウィジェットを表示してみました。

<img alt="ios14-widgets.png" src="https://blog.ideamans.com/assets/ios14-widgets.png" width="320" height="568" class="img-fluid text-center" />

確かにiOS 14です。

<img alt="ios14.png" src="https://blog.ideamans.com/assets/ios14.png" width="480" height="382" class="img-fluid text-center" />

[以前このブログでも紹介しました](https://blog.ideamans.com/2019/04/webp-direction.html)が、WebP対応ブラウザと非対応ブラウザでの出し分けにはHTMLによる方法とサーバー側での処理による方法があります。



## HTMLでの書き分けを検証

こんな感じのコードを書きました。

<pre><code class="lang-html">  &lt;picture&gt;
    &lt;source type=&quot;image/webp&quot; srcset=&quot;this-is.webp&quot; /&gt;
    &lt;img src=&quot;this-is.png&quot; /&gt;
  &lt;/picture&gt;
</code></pre>

無事にiOS 14ではWebP、iOS 13.5ではPNGが表示されました。

<img alt="with-html.png" src="https://blog.ideamans.com/assets/with-html.png" width="640" height="316" class="mt-image-center img-fluid" style="text-align: center; display: block; margin: 0 auto 20px;" />

## サーバー側での出し分けを検証

次はHTMLでは次のように`this-is.png`を参照しますが、`.htaccess`ファイルで`Accept`リクエストヘッダの内容(`image/webp`が含まれるか)に応じてWebP画像`this-is.png.webp`を返すケースです。

<pre><code class="lang-html">&lt;img src=&quot;this-is.png&quot; /&gt;
</code></pre>

こちらも無事にiOS 14にはWebP、iOS 13.5にはPNGが表示されました！

<img alt="with-htaccess.png" src="https://blog.ideamans.com/assets/with-htaccess.png" width="640" height="330" class="mt-image-center img-fluid" style="text-align: center; display: block; margin: 0 auto 20px;" />

## 汎用的なプラクティスで出し分けOK

このようにiOS 14でも、現在のWebP対応プラクティスはそのまま使えそうです。

もうちょっとマニアックにリクエストヘッダを見てみます。

まずは`User-Agent`リクエストヘッダはこんな感じです。

<div class="alert alert-secondary">
# iOS 13.5<br>
User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1<br>
<br>
# iOS 14<br>
User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1<br>
</div>

バージョンやビルド番号以外、様式に変更はありません。

次に`Accept`リクエストヘッダですが、こちらはリソースタイプによって変わるので画像へのリクエスト時のものを紹介します。

<div class="alert alert-secondary">
# iOS 13.5<br>
Accept: image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5<br>
<br>
# iOS 14<br>
Accept: image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5
</div>

先ほども検証しましたが、WebP対応を明示する`image/webp`をしっかり含んでくれています。よかった！

というのも、Chromiumを採用するより前のMicrosoft Edgeは、WebP対応を果たしたときに`image/webp`を送信しないフェイント仕様でちょっと困りました。

WebP対応仕様についてはこのままリリースされることを願っています。

<small class="text-muted">2016年みたいに [やっぱりWebPやーめた！](https://applech2.com/archives/20160805-sierra-beta-4-remove-webp.html) はナシですよ...Appleさん。</small>