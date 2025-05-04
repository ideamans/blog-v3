---
# Astrowind
title: '画像処理（画像軽量化）を行う３つのメリット。ファイルサイズ削減で、表示高速からコストダウンまで！'
excerpt: '何気なくソーシャルやブログ、ポータルサイトでみている画像。表示されている状態では...'
updateDate: 2020-06-18
publishedDate: 2018-04-06
tags: 
  - cvr

  - web-imaging

  - cloud-cost

  - performance

author: nose
image: https://blog.ideamans.com/images/2018-04-06-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2020-06-18 10:54:17
publishedAt: 2018-04-06 14:00:00
categories: 
  - cvr

  - web-imaging

  - cloud-cost

  - performance

categoryLabels: 
  - CVR改善

  - Web画像最適化

  - クラウドコスト削減

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>何気なくソーシャルやブログ、ポータルサイトでみている画像。表示されている状態ではわかりづらいですが、それらのファイルサイズまでこだわる人はなかなかいないかもしれません。</p>
<p><strong>この記事は、Web制作に携わる方に読んでいただきたい記事です。表示高速化にこだわるなら、ファイルサイズにこだわる必要があります。</strong></p>
<p> </p>
<h2>画像処理のうち、画像軽量化がもたらす３つのメリット</h2>
<p>画像を軽量化すると、いいことが３つあります。</p>
<ol><li>ファイルサイズが軽くなったので、表示が速い</li><li>ファイルサイズが減ったので、転送量が減った</li><li>転送量が減ったので、クラウドの転送料がコストダウンした</li></ol>
<p>それぞれ解説していきます。</p>
<p> </p>
<h2>ファイルサイズが軽くなったので、表示が速い</h2>
<p>ページに表示されている画像は、デジタルデータです。データなので、ファイルサイズというものが存在します。ファイルサイズは、<strong>そのデータが持つ情報量に比例</strong>します。<strong>精細な画像や、metaデータ（位置情報やサムネイル画像など）を多く持つデータは、その情報量の分ファイルサイズが重く</strong>なります。</p>
<p>ファイルサイズが重いと、ダウンロードまでに時間がかかります。ファイルサイズが軽いと、ダウンロードの時間は短くなります。</p>
<p style="text-align: center;"><img alt="2018-04-06-ogp.jpg" src="https://blog.ideamans.com/images/2018-04-06-ogp.jpg" width="1200" height="630" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">ファイルサイズが軽くなれば、ダウンロードも速くなる。その結果、表示も早い。</span></p>
<p>Web制作者のみなさんがPhotoshopなどで行う作業では、以下の部分で画像軽量化ができます。</p>
<ol><li>適切な表示サイズでの書き出し</li><li>適切な画像種類（JPGやGIFなど）での書き出し</li><li>適切な画質での書き出し</li></ol>
<p>ファイルサイズは閲覧に大きく影響が出るものなので、しっかりと軽量化しましょう。</p>
<p> </p>
<h2>ファイルサイズが減ったので、転送量が減った</h2>
<p>ファイルサイズが減ることで、一回にダウンロードされる転送量も減らすことができます。アクセスが多ければ多いほど、その転送量の削減量は増えていきます。画像作成時にしっかりとファイルサイズを削減する、システムで画像最適化する仕組みになっている、ということが重要です。</p>
<p style="text-align: center;"><img alt="2018-04-06-02.jpg" src="https://blog.ideamans.com/images/2018-04-06-02.jpg" width="1200" height="630" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">ファイルサイズが軽くなれば、転送量が少なくなる</span></p>
<p> </p>
<h2>転送量が減ったので、クラウドの転送料がコストダウンした</h2>
<p>転送量が減ることで、回線費用やクラウドの転送料のコストダウンが可能になります。</p>
<ul><li>固定回線：固定契約のケースが多いと思います。その場合は、契約している回線数を削減したりできる可能性があります。</li><li>クラウド：多くは従量課金制になっています。そのため、画像が多いかつアクセスが多いサイトほど、転送料が高くなりがちです。</li></ul>
<p>特にクラウド環境で、アクセスが多いサイトには効果的です。ECサイトのような一つの商品に複数の商品画像が必要な場合や、ユーザー投稿型のサイトは、画像枚数が多く、ページ表示の際も多くの画像を読み込むようになっています。</p>
<p style="text-align: center;"><img alt="2018-04-06-03.jpg" src="https://blog.ideamans.com/images/2018-04-06-03.jpg" width="1200" height="630" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">転送量がさがれば、月々の転送料金ももちろんコストダウン</span></p>
<p> </p>
<p>画像最適化を行うLightFileは、AWS Lambda または Linux環境で動作する自動画像最適化ツールです。サーバレスまたはサーバで自動的に処理する仕組みを導入すれば、３つのメリットを受けることができるはずです。</p>
<p>LightFileを利用した場合、どのぐらい効果が出るのかをシミュレートできるサイトをテスト公開しています。無料で利用できますので、ぜひご利用ください。</p>
<ul><li><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simurator β版</a></li></ul>
<p> </p>
<p> </p>
<h2>最後に</h2>
<p>画層処理の中でも、画像軽量化はとても地味なものです。しかし、その効果は非常に高く、実施すべき事項です。見た目が同じでも表示速度が異なれば、閲覧しているユーザの体験は大きくかわることでしょう。</p>
<p> </p>

