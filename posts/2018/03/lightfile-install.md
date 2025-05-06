---
# Astrowind
title: '設定するだけでOK！LightFileとクラウド型画像処理サービスの導入時の違いを考えてみる。'
excerpt: 'ようやく寒い2月が終わりましたね。今年は大雪が降ったり、いつまでも寒かったりと、...'
updateDate: 2018-03-16
publishedDate: 2018-03-01
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-02-26-lightfile-install02.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:51:45
publishedAt: 2018-03-01 10:00:00
categories: 
  - web-imaging

  - lightfile

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

authorId: nose
subTheme: 
recommended: false
---

<p>ようやく寒い2月が終わりましたね。今年は大雪が降ったり、いつまでも寒かったりと、体調を崩された方も多いのではないでしょうか。多忙なエンジニアの方だと、風邪を引いても仕事を休めないとか...。</p>
<p> </p>
<h2>画像最適化系のサービスがアツい</h2>
<p><strong>昨年から盛り上がりを見せている画像最適化サービス</strong>。特にクラウド型のサービスが多くリリースされています。このブログでも取り上げたことがあるものを、いくつかピックアップしてみました。また、それらの導入時の違いを表にしました。</p>
<h3>導入時の大きな違い</h3>
<p><img alt="2018-02-26-lightfile-install02.jpg" src="https://blog.ideamans.com/assets/2018-02-26-lightfile-install02.jpg" width="1152" height="490" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">画像最適化をする場合、そのサービスやプロダクトによる違いを理解する必要があります。検討が必要なのは、以下の２点です。</p>
<h3>料金体系</h3>
<ul><li><strong>月額定額制・・・画像が多い、アクセスが多い（転送量が多い）サイト向け。</strong>
<ul><li>ECサイトやユーザー投稿型のサイト、アクセスが多い人気サイト向け。メルマガなどに利用する画像も。</li></ul>
</li><li><strong>従量課金制・・・画像が少ない、アクセスが少ない（転送量が少ない）サイト向け。</strong>
<ul><li>コーポレートサイトや製品紹介サイトなど、アクセスが少なめのサイト向け。スパイクアクセスなどがくると突発的な費用が発生する。</li></ul>
</li><li>ライセンス型・・・Photoshopの場合、インストールする端末数による。
<ul><li>端末ごとなので、Webデザイナーさんやレタッチャーさんなど、利用者数による。ドロップレットを利用すると自動化ができて便利です。</li></ul>
</li></ul>
<h3>導入時のおける敷居の高さ</h3>
<ul><li>サーバレス型・・・開発不要。設定のみなので比較的かんたん。</li><li>サーバインストール型・・・開発不要。サーバにインストールするだけなので比較的かんたん。</li><li>クラウド型・・・ソースコード変更が必要。ただし、一行だけ追加すればOKなどのかんたんなものも出てきている。</li><li>CMSプラグイン型・・・開発不要。プラグインをインストールするだけのなので比較的かんたん。</li><li>ローカルPCインストール型・・・ローカルPCにインストールして、画像処理のあとにサーバにファイルをアップロードする。手間が多い。</li></ul>
<p><strong>定額制やライセンス型は費用算出がわかりやすく、突発的な料金が発生することもありません。従量課金制は、アクセス数が少なく、転送量が少ないサイトに向いています。</strong></p>
<p><strong>導入時に開発作業が発生すると、その検証作業なども発生するので、初期導入時の総額は大きめになってしまうのが懸念事項</strong>です。開発が発生するなら、サイトリニューアルしちゃおう！という大きめな話になりそうです。</p>
<p> </p>
<h3>サーバレス＆サーバインストール型画像最適化サービス</h3>
<ul><li><a href="https://core.lightfile.net/" target="_blank">アイデアマンズ - LightFIle</a></li></ul>
<h3>クラウド型画像最適化サービス</h3>
<ul><li><a href="https://cloudinary.com/" target="_blank">Cloudinary - Cloud image service, upload, storage &amp; CDN</a></li><li><a href="https://www.akamai.com/jp/ja/products/web-performance/image-manager.jsp" target="_blank">Akamai - Image Manager</a></li></ul>
<h3>CMSプラグイン型画像最適化サービス</h3>
<ul><li><a href="https://wordpress.org/plugins/ewww-image-optimizer/" target="_blank">EWWW Image Optimizer - WordPress Plugins</a></li><li><a href="https://wordpress.org/plugins/ewww-image-optimizer/" target="_blank"></a><a href="https://ja.wordpress.org/plugins/tiny-compress-images/" target="_blank">Compress JPEG &amp; PNG images</a></li></ul>
<h3>ローカルPCインストール型画像最適化サービス</h3>
<ul><li><a href="https://www.jpegmini.com/" target="_blank">JPEGmini - Your Photos on a Diet!</a></li></ul>
<p>この他、Webサービス型として手軽にブラウザからファイルをアップロードする<a href="https://tinypng.com/" target="_blank">TinyPNG</a>があります。海外はクラウド型が主流ですね。</p>
<p> </p>
<h2>定額制か従量課金か、どちらがよい？</h2>
<p><img alt="2018-02-26-lightfile-install03.jpg" src="https://blog.ideamans.com/assets/2018-02-26-lightfile-install03.jpg" width="1152" height="490" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>料金体系を比較するためのキーワードをまとめてみました。多くのサイトは従量課金のほうが割安感は強いはずです。ECサイトなどセール時にスパイクアクセスが来るサイトや、飲食店レビューなどのユーザー投稿型で画像が無尽蔵に増えるサイトなどは定額制のほうが費用がかかりません。</p>
<p> </p>
<h2>最後に</h2>
<p>意外と話を聞くことが多いのが、社内のエンジニアさんが画像処理のタスクをされていることが多いこと。サーバの容量削減や、ファイルサイズが大きい画像ファイルを抽出して、手作業でリサイズするなどの地道な作業をされているそうです。あまり生産的な作業ではないので、こういった作業はツールやサービスの導入で、エンジニアさんのリソースを借りないようにしたいですね！</p>
<p> </p>
