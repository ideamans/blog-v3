---
# Astrowind
title: 'WebP時代を全自動で先取りする PHPWebP Concept をオープンソースとして公開'
excerpt: '前置きはいいから早く使い方を教えて！という方はこちら。 WebP時代の到来と課題...'
updateDate: 2023-02-16
publishedDate: 2022-08-16
tags: 
  - webp

author: miyanaga
image: https://blog.ideamans.com/assets/phpwebp-concept.png
category: webp

# カスタム
updatedAt: 2023-02-16 11:03:46
publishedAt: 2022-08-16 22:17:00
categories: 
  - webp

categoryLabels: 
  - WebP

authorId: miyanaga
subTheme: bs4
recommended: false
---

前置きはいいから早く使い方を教えて！という方は[こちら](#使い方)。

## WebP時代の到来と課題

2022年現在、[95%以上のブラウザが軽量な次世代画像フォーマットWebPをサポート](https://caniuse.com/?search=webp)するようになりました。

いまやWebPに対応していないのは、古いiPhone(iOS13以前)、古いMac(macOS 11 Big Sur以前)、Internet Explorerといったごく少数派です。

JPEGやPNGの軽量化は出がらし状態でWebPにはもう敵いません※。**画像を軽くするならさっさとWebPに移行するのが吉**ですが、とはいえWebP非対応のブラウザを切り捨てる決断はまだ難しいでしょう。

それ以前に、PhotoshopやImageMagickといった画像作成ツールがWebPに十分に対応していると言えません。急にWebPにしろと言われても、作業が著しく不便になったり、短期間では対応できない事態も予想されます。

そもそも長期的にWebPがどうなるかもわかりません。さらに新しいフォーマットAVIFも台頭しています。

そんなわけでWebPの恩恵を受けるにしても、当面は以下の前提で検討を進めるのが現実的です。

- 当面は従来フォーマット(JPEG/PNG/GIF)との両対応にする。
- オリジナル画像は従来フォーマットで作成してそれらをWebPに変換する。

※ 個別の現場では、従来フォーマットでも誤った利用方法の是正で、改善の余地はあります。

## 手作業での対応は素人におすすめしない

従来フォーマットからWebPに変換し、それらの両対応を実現するのは手作業でも可能です。

たとえば[Squoosh](https://squoosh.app/)のようなアプリでWebP画像も用意し、HTMLの画像部分を[picture要素](https://developer.mozilla.org/ja/docs/Web/HTML/Element/picture)に書き換えたらOKです。

作業自体は難しくないですが、普通「こんなこといちいちやってられん！」と投げ出したくなるでしょう。ミスも避けられません。

**「自動化できないならWebPの導入は見送った方がよい」**というのが個人的な見解です。

## 自動化するには

CMSであればWebP対応を可能にするプラグインがあるかもしれません。WordPressには複数あります。それらを利用するのもおすすめです。

シェルスクリプトが使えるなら[このような方法](https://qiita.com/miyanaga/items/94b5bb42501e2292fb67)もありです。

前置きが長くなりましが、**ポピュラーなApache+PHPのWebサーバー構成であれば、CMSを選ばずもっと簡単に、全自動でWebサイト全体をWebPに対応させるプログラムをオープンソースで公開**しました。それが[PHPWebP Concept](https://github.com/ideamans/phpwebp-concept)です！

<a id="使い方" />

## PHPWebP Conceptを使ってみよう！

PHPWebP Conceptは、Apache 2.x、PHP 5.4〜8.1、Linux 64ビット系OS※で動作します。

※ Linux(64ビット)系OS以外でも利用可能ですが、WebP変換用のバイナリプログラムの追加インストールが必要です。

[弊社のコーポレートサイト](https://www.ideamans.com/)に導入してみます。このサイトは、とある静的サイトジェネレータで構築していますが、ApacheとPHPが動作する環境であればCMSを使っていても利用できますし、手順は同じです。

### 1. プログラムのダウンロード

まずは[リリースページ](https://github.com/ideamans/phpwebp-concept/releases) から `phpwebp-concept-v1.0.0.zip` を(最新バージョンがあればそちらを)ダウンロードしてください。

<img alt="phpwebp-concept-download.png" src="https://blog.ideamans.com/assets/phpwebp-concept-download.png" width="810" class="img-responsive" />

展開すると `phpwebp-concept` ディレクトリが含まれています。

### 2. アップロード

この`phpwebp-concept`ディレクトリをFTPツール等でWebサーバーのドキュメントルートにアップロードします。

<img alt="phpwebp-concept-upload.png" src="https://blog.ideamans.com/assets/phpwebp-concept-upload.png" width="628" class="img-responsive" />

アップロード後、Webサーバー上の`phpwebp-concept/bin/linux-x86_64`ディレクトリを開きます。

このディレクトリに含まれるファイルに実行権限(x)が付与されているか確認してください。

<img alt="phpwebp-concept-executable.png" src="https://blog.ideamans.com/assets/phpwebp-concept-executable.png" width="529" class="img-responsive" />

### 3. .htaccessの作成・変更

ドキュメントルートに `.htaccess` ファイルを作成します。同じ見本が、展開したディレクトリの`htaccess-example.txt`にあります。

<code>
<pre>
AddType image/webp .webp

RewriteEngine On

RewriteCond %{HTTP_ACCEPT} !image/webp
RewriteRule \.(webp) /phpwebp-concept/decompress.php [L]

RewriteCond %{HTTP_ACCEPT} image/webp
RewriteRule \.(jpe?g|png|gif) /phpwebp-concept/compress.php [L]
</pre>
</code>

当然ですが、すでに`.htaccess`ファイルがある場合は、既存の設定と競合しないように追記してください。

もし画像ファイルが特定のディレクトリ(例: `/images`)以下にしかないのであれば、そのディレクトリに作成するのも手です(例: `/images/.htaccess`)。

## 動作確認

以上でインストールは完了です。簡単ですね。

ブラウザの`開発者ツール`で`Networkタブ` を開き、対象ページにアクセスしてみてください。従来フォーマットの画像レスポンスについて、`Type`が`webp`に変化していたら成功です！

<img alt="phpwebp-concept-network-tab.png" src="https://blog.ideamans.com/assets/phpwebp-concept-network-tab.png" width="1100" class="img-responsive" />

もちろん変換後のWebP画像はキャッシュされるので、2回目からは高速に配信されます。

WebP非対応のブラウザ(今は用意するのが大変になりましたが...)でも画像が正常に表示されることを確認ください。

<img alt="phpwebp-concept-ie.png" src="https://blog.ideamans.com/assets/phpwebp-concept-ie.png" width="821" class="img-responsive" />

## WebPからの逆変換

このPHPWebP Concept、もうひとつ面白い機能があります。それは**WebPから従来フォーマットへの逆変換**です。

以下はInternet ExplorerでWebP画像にアクセスしたところですが、画像が表示されています。これはPHPWebP ConceptがWebP非対応ブラウザを判断して、WebPからPNGに逆変換して配信しているからです。

<img alt="phpweb-concept-ie-webp.png" src="https://blog.ideamans.com/assets/phpweb-concept-ie-webp.png" width="682" class="img-responsive" />

将来もし、WebP画像が主流になったとしても、古いブラウザで画像が表示されない事態を回避できます。なんなら**今からでも画像をWebPメインに変えてしまい、無造作にimg要素でコーディングしても安心**、ということです。

実際のところ、今やWebP対応ブラウザの方が圧倒的に多いので、WebPをメインにした方が本当は効率的です。

## 商用版について

あとは放ったらかしでOK。これまで通りWebサイトを運用していても、画像が軽量なWebPで安全に(WebP非対応ブラウザにも対応するという意味で)配信されます。これならWebPも悩まず導入できるはず。

ただしこのPHPWebP Conceptは、あくまでオープンソースのコンセプト実装です。商用サイトや規模の大きいサイトでの利用はおすすめしません。

- セキュリティは最低限しか考慮していない。
- キャッシュのクリーニングなど管理機能がない。
- サポートなし(有料対応可)。
- CDNを考慮していない。
- どのくらい軽量化されたのか成果がよくわからない。
- 1回目のアクセスはフォーマット変換を待つためレスポンスが遅い。

特に規模の大きなサイトでは、ロングテール状にアクセス先のページがばらつきます。つまり1回しか表示されないようなページが多い傾向にあります。

しかし初回のアクセスは変換を待つため、画像のレスポンスが遅くなります。**画像の表示を早くしたくてWebPを採用したのに、遅くなるのでは本末転倒**です。

そこで上記の問題に対応した、**商用版PHPWebP** も用意しています！

## 技術サポート

PHPWebP Conceptはオープンソースにつき、**ご不明点があっても「ソースコードを見てください！」という回答**になっちゃいます。

サポートは有償で承ります。商用版PHPWebPには技術サポートが含まれます。

PHPWebP Conceptの技術サポートや、商用版PHPWebPにご興味のある方、代理店としてクライアントに提案したいという方はぜひ下記のフォームからお問い合わせください。