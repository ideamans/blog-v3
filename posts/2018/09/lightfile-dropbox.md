---
# Astrowind
title: 'Dropboxで楽々おまかせJpeg軽量化！ LightFile for Dropbox プレビュー版'
excerpt: 'AIがJpeg画像を最適に軽量化するLightFileをDropboxとの連携で...'
updateDate: 2018-09-14
publishedDate: 2018-09-14
tags: 
  - web-imaging

  - lightfile

author: miyanaga
image: https://blog.ideamans.com/assets/lightfile-dropbox.png
category: lightfile

# カスタム
updatedAt: 2018-09-14 16:10:13
publishedAt: 2018-09-14 14:36:33
categories: 
  - web-imaging

  - lightfile

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

authorId: miyanaga
subTheme: 
recommended: false
---

<p>AIがJpeg画像を最適に軽量化する<a href="https://core.lightfile.net/">LightFile</a>をDropboxとの連携で簡単に使える新サービスをリリースしました。</p>
<p style="text-align: center;"><a href="https://dropbox.lightfile.net/"><img alt="lightfile-dropbox.pngのサムネイル画像" src="https://blog.ideamans.com/assets/lightfile-dropbox.png" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></a></p>
<p style="text-align: center;"><a href="https://dropbox.lightfile.net/">LightFile for Dropbox PREVIEW</a></p>
<p>決まったアプリフォルダにJpegファイルをコピーや保存するだけで、あとは勝手に画質を落とさず、そのファイルを軽量化します。</p>
<p><img alt="lightfile-dropbox-animation.gif" src="https://blog.ideamans.com/assets/lightfile-dropbox-animation.gif" width="544" height="304" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">仕組みは以下の通りです。</p>
<p><img alt="lightfile-dropbox-sequence.png" src="https://blog.ideamans.com/assets/lightfile-dropbox-sequence.png" width="639" height="416" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>まだプレビュー版につき安定性は試行錯誤の段階でサポートもありませんが、多くの方にお試しいただけると嬉しいです。</p>
<h2>なぜ作ったか</h2>
<p>Webデザイナーさんは、Photoshopで編集した画像を一度ローカルのディレクトリに書き出し、そこからWebサーバーにアップロードするという作業が多く発生します。</p>
<p>アップロードするまえに画像の軽量化を行うのですが、<a href="https://www.jpegmini.com/">JPEGMini</a>のようなデスクトップアプリや<a href="https://tinypng.com/">TinyPNG</a>のようなWebサイトにドラッグ&amp;ドロップするのも毎回毎回は手間です。</p>
<p>では、<strong>「Webサーバーにアップロードする前に一時的に書き出したディレクトリが、勝手に軽量化される場所になっていれば楽じゃない？」</strong>と思ったのがきっかけです。</p>
<h2>こんなことでお困りの方にも</h2>
<p>デジカメやスマホで撮影した写真のような、解像度の高い画像ほど削減効果が高くなります。</p>
<p>それこそDropboxのようなクラウドストレージにバックアップを兼ねて昔からの写真を保存しているけど、容量が足りなくなってきた！という場合に、古い写真を片っ端から軽量化しましょう。</p>
<p>何十GBも節約できるかもしれません。</p>
<h2>技術的な話と展望</h2>
<p>このサービスは、Dropbox APIを使ってユーザーの手元のファイルを自動処理するクラウドアプリケーションです。AWS上にサーバーレスアーキテクチャで構築しました。</p>
<p>この形はユーザーのデスクトップとクラウド上のパワーを繋げる方法としていろいろな可能性があると思いました。</p>
<p>例えば決まったフォルダにファイルを放り込んで置くと、画像認識して仕訳されたり、CMSなどのシステムに転送するといった使い方もあり得ます。</p>
<p>Dropbox APIも、かなり以前に調べたときはまだ機能の不足があったり、利用までの敷居が高かった印象がありましたが。相当整備されており、今回はとても使いやすく感じました。</p>
<p>Dropbox APIとAWSサーバーレスアプリケーションのメイキングなども今後、ネタにしてみたいと思っています。</p>
