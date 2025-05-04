---
# Astrowind
title: 'WebPが次世代画像フォーマット天下統一！ Safari 14でついにiPhoneもWebP対応・導入加速は間違いなし'
excerpt: 'Safari 14 で次世代画像フォーマットWebPへの対応が発表されました！ ...'
updateDate: 2020-06-24
publishedDate: 2020-06-24
tags: 
  - webp

author: miyanaga
image: https://blog.ideamans.com/assets/51c387fce100d778f9dc72716a685eb49b3b5da0.png
category: webp

# カスタム
updatedAt: 2020-06-24 09:58:16
publishedAt: 2020-06-24 09:30:00
categories: 
  - webp

categoryLabels: 
  - WebP

authorId: miyanaga
subTheme: bs4
recommended: false
---

Safari 14 で次世代画像フォーマットWebPへの対応が発表されました！

[Safari 14 Beta Release Notes | Apple Developer Documentation](https://developer.apple.com/documentation/safari-release-notes/safari-14-beta-release-notes)

<a href="https://blog.ideamans.com/assets/webp-support.png"><img alt="webp-support.png" src="https://blog.ideamans.com/assets_c/2020/06/webp-support-thumb-596xauto-1192.png" class="img-fluid img-thumbnail" /></a>

かれこれ20年近く延々と続いた次世代画像フォーマット戦争に、WebPがついに終止符を打ちそうです。

WebPは、私の感覚としては現在のWeb画像のデータサイズを半分以下に削減できます。しかも主要なJpeg、PNG、GIF(アニメーション)をすべてカバー。Web画像のスタンダードは、一気にWebPに流れていくでしょう。

<small class="text-muted">実は2016年に [macOS Sierra beta 3 での幻のWebP対応](https://applech2.com/archives/20160805-sierra-beta-4-remove-webp.html) がありました。それが再現されないことを祈ります...</small>

## 2018年後半、統一に王手

WebPが登場したのは意外と古く、10年前の2010年。対応ブラウザは長らくChromeおよびAndroidだけでした(あとシェアは小さいですがOperaも)。

<img alt="webp-2018.png" src="https://blog.ideamans.com/assets/webp-2018.png"  class="img-fluid" />

ところが2018年後半に突然、FirefoxとMicrosoft Edgeが相次いで対応を発表。それぞれの最新版でWebPを利用できるように。

<img alt="webp-2019.png" src="https://blog.ideamans.com/assets/webp-2019.png"  class="img-fluid" />

メジャーブラウザ制覇に王手をかけ、AppleのSafari(iOS全般およびmacOSのSafari)を残すのみとなりました。

## Appleが1年半沈黙の後に対応

その流れにAppleも間もなく追従するだろうと予測。2019年のWWDCでの発表を予想...していましたが、まるまる1年ズレた格好になりました。

その間、WebP変換シミュレーターを開発しました。

[ページまるごとWebP変換・効果測定](https://sim.lightfile.net/webp/)

このブログでも2019年前半には度々WebP関連の記事を書き、今このブログへの一番の流入キーワードは`WebP`だったりします。

[WebP - アイデアマンズブログ](https://blog.ideamans.com/webp/)

いよいよ2020年秋に登場する iOS 14 および新しい macOS Big Sur から事実上、全ブラウザでWebPが利用可能になります。

<img alt="webp-2020.png" src="https://blog.ideamans.com/assets/webp-2020.png" class="img-fluid" />

## WebPがもたらすメリット

### 表示の待ち時間短縮

画像1枚1枚のデータが半分程度になるので(多くのサイトでシミュレートした私の感覚です。もちろん画像によります)、Webページの読み込み時間が短縮されます。

Webページにおいて画像はもっとも多くの割合を占めるデータなので、効果は大きいです。

### クラウド料金の削減

AWSなどのクラウドサービスは、日本の伝統的なホスティングサービスと異なり、トラフィック従量課金です。

つまりアクセスが増え、重いデータをたくさん配信すると、その分だけコストがかさみます。

月間1,000万PVクラスのサイトになると、毎月数十万円〜百数十万円の通信コストが予想されますが、画像をWebPにすることでそのコストを20〜30%削減、場合によっては半減するサイトもあるかもしれません。

[CloudFront料金早見表を作ってみた。月額10万円超えは何PVから？ - アイデアマンズブログ](https://blog.ideamans.com/2019/06/cloudfront-cost-matrix.html)

## WebP対応の実際

このようにメリットしかないWebPですが、ではいきなりJpeg、PNGの利用をやめてWebPに切り替えるわけにはいきません。

### 画像の出力は当面既存フォーマットで

Photoshop などの画像編集ソフトや、CMSやECシステムの画像変換を支える ImageMagick のWebP対応が完全ではありません。

また、メジャーブラウザを制覇したとは言え、最新バージョンが浸透するまでにはしばらく時間がかかり、非対応のブラウザには従来の画像フォーマットが必要です。

なので画像データの出力は当面これまで通り、Jpeg、PNG、GIFを用いることになります。

### ブラウザに応じてWebPに変換・配信

WebP対応ブラウザは、HTTPリクエストヘッダ`Accept`に`image/webp`を明示することが慣わしとなっています。

その情報を元に、サーバーはブラウザがWebPに対応しているか判定できます。

サーバー側で対応ブラウザにはWebP、そうでないブラウザには従来のフォーマットを返すという対応が標準になるでしょう。

ちなみにHTMLで従来フォーマットとWebPを書き分ける方法もあるのですが、手間が多く、実際の制作現場には浸透しないと予想しています。

