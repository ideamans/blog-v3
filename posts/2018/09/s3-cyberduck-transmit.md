---
# Astrowind
title: 'AWS S3に Cyberduck と Transmit でつないでみよう！レンタルサーバのようにドラッグ＆ドロップでファイル管理できるのは便利！'
excerpt: '画像軽量化ツールのLightFileは、AWS Lambda に対応しています。...'
updateDate: 2018-09-19
publishedDate: 2018-09-19
tags: 
  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-09-18-s3-client-ogp.jpg
category: lightfile

# カスタム
updatedAt: 2018-09-19 14:23:43
publishedAt: 2018-09-19 12:30:00
categories: 
  - lightfile

categoryLabels: 
  - 画像軽量化AI LightFile

authorId: nose
subTheme: 
recommended: false
---

<p><a href="https://core.lightfile.net/" target="_blank">画像軽量化ツールのLightFile</a>は、<a href="https://aws.amazon.com/jp/lambda/" target="_blank">AWS Lambda</a> に対応しています。<a href="https://aws.amazon.com/jp/s3/" target="_blank">AWS S3</a> にファイルをアップロードすると、それをトリガーにして <a href="https://core.lightfile.net/" target="_blank">LightFile</a> が軽量化処理を自動で行います。なので、ド<strong>ラッグ＆ドロップでファイルをアップロードするだけで、JPEG画像が画質そのままで軽量化されるようになります。メチャメチャかんたんです！</strong></p>
<p>S3はブラウザからも利用できますし、CLIツールを利用してコマンドラインからも利用することができます。今回は、普段使い慣れているGUIクライアントでもS3が利用できるように、その接続方法をご紹介します。OSはMacです。</p>
<h2>接続情報を準備しよう</h2>
<p>GUIクライアントからS3に接続するには、以下の２つが必要です。マネージドコンソールから認証情報を作成することができます。わからない方はシステム管理者に問い合わせてみましょう。</p>
<ol><li>アクセスキーID (20文字の文字列)</li><li>シークレットアクセスキー (40文字の文字列)</li></ol>
<p>AWS IAM 公式サイトの説明はちょっとわかりづらいかもしれません。ユーザーを作成するだけではアクセスキーIDは発行されないので、以下のページが詳しく書いてあります。</p>
<ul><li><a href="https://qiita.com/Shoesk/items/115c04b6e2bc3e870fa6" target="_blank">AWS Amazon S3にTransmit4から接続したいのにUserを作成しただけでは接続できない場合の対処法</a></li></ul>
<h2>Cyberduck (サイバーダック)で、AWS S3に接続する</h2>
<p>Macで無償で利用できるサイバーダックの接続方法を説明します。アヒルのアイコンがなんともかわいらしいですね！接続は4ステップで完了します。</p>
<p>ダウンロード先　<a href="https://cyberduck.softonic.jp/mac" target="_blank">https://cyberduck.softonic.jp/mac</a></p>
<ol><li>サイバーダックを起動し、左上の「新規接続」をクリックします。</li><li>プルダウンメニューから「Amazon S3」を選びます。</li><li>情報を入力し「接続」をクリックします。</li><li>正常に接続できると、アクセスが可能な S3 Bucketが表示されます。</li></ol>
<p>それぞれ、画面キャプチャ付きでみていきましょう。</p>
<p style="text-align: center;"><img alt="2018-09-18-s3-client-01.jpg" src="https://blog.ideamans.com/assets/2018-09-18-s3-client-01.jpg" width="1200" height="1041" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">サイバーダックを起動し、左上の「新規接続」をクリックします。</span></p>
<p><img alt="2018-09-18-s3-client-02.jpg" src="https://blog.ideamans.com/assets/2018-09-18-s3-client-02.jpg" width="1200" height="1041" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p style="text-align: center;"><span style="color: #888888;">プルダウンメニューから「Amazon S3」を選びます。</span></p>
<p style="text-align: center;"><img alt="2018-09-18-s3-client-03.jpg" src="https://blog.ideamans.com/assets/2018-09-18-s3-client-03.jpg" width="1200" height="1041" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">情報を入力し「接続」をクリックします。</span></p>
<p style="text-align: center;"><img alt="2018-09-18-s3-client-04.jpg" src="https://blog.ideamans.com/assets/2018-09-18-s3-client-04.jpg" width="1200" height="1041" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">正常に接続できると、アクセスが可能な S3 Bucketが表示されます。</span></p>
<p>これでサイバーダックでの接続の説明は終了です。</p>
<h2>Transmitで、AWS S3に接続する</h2>
<p>Macの有償ファイル転送ツールとしては、Panic社のTransmitは外せませんね！トラックのアイコンも可愛いですし、FTPやSFTP、S3、WebDAVと様々な接続方法がかんたんに設定できるようになっています。接続は3ステップで完了します。</p>
<p>ダウンロード先　<a href="https://panic.com/jp/transmit/" target="_blank">https://panic.com/jp/transmit/</a></p>
<ol><li>Transmitを起動し、タブの中から「S3」を選択します。</li><li>情報を入力し「接続」をクリックします。</li><li>正常に接続できると、アクセスが可能な S3 Bucketが表示されます。</li></ol>
<p>こちらも画面キャプチャ付きで、それぞれみていきましょう。</p>
<p style="text-align: center;"><img alt="2018-09-18-s3-client-11.jpg" src="https://blog.ideamans.com/assets/2018-09-18-s3-client-11.jpg" width="1200" height="680" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Transmitを起動し、タブの中から「S3」を選択します。</span></p>
<p style="text-align: center;"><img alt="2018-09-18-s3-client-12.jpg" src="https://blog.ideamans.com/assets/2018-09-18-s3-client-12.jpg" width="1200" height="680" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">情報を入力し「接続」をクリックします。</span></p>
<p style="text-align: center;"><img alt="2018-09-18-s3-client-13.jpg" src="https://blog.ideamans.com/assets/2018-09-18-s3-client-13.jpg" width="1200" height="680" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">正常に接続できると、アクセスが可能な S3 Bucketが表示されます。</span></p>
<p>以上でTransmitでの接続の説明を終了します。</p>
<h2>最後に</h2>
<p>GUIのツールを利用すると、ドラッグ＆ドロップでの操作ができるようになります。これによって、操作に不慣れな方でも、デスクトップ・ツールのような感覚で利用することができます。真っ黒い画面のコマンドラインは非常に便利ですが、なかなかとっつきづらい方が多いものですので、「利用しやすさ」が高いやり方にすれば、ラクラク利用することができるようになります。</p>
<p> </p>

