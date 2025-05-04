---
# Astrowind
title: '画像軽量化は最短3日でスタート！導入時に開発が発生しない画像軽量化ツールって、実は意外と少ない。'
excerpt: '画像軽量化したい理由は、そのサイトによって様々です。どんな悩みから画像軽量化に行...'
updateDate: 2019-01-28
publishedDate: 2019-01-28
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2019-01-28-06.jpg
category: lightfile

# カスタム
updatedAt: 2019-01-28 15:10:20
publishedAt: 2019-01-28 14:56:11
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

<p>画像軽量化したい理由は、そのサイトによって様々です。どんな悩みから画像軽量化に行き着くのでしょうか。</p>
<ol><li><strong>スマホの表示速度やUX（ユーザーエクスペリエンス）を向上したい</strong></li><li><strong>転送量や転送料金をコストダウンしたい</strong></li></ol>
<p>多くの場合、この２点が想像つきます。ユーザーのために行うのか、インフラコストを下げたいのか、またはその両方なのか。しかし、この２点は、まだ多くのサイトでは対応されておらず、一部のサイトのみがいち早く対応をしているのが現状です。</p>
<p style="text-align: center;"><img alt="2019-01-28-01.jpg" src="https://blog.ideamans.com/assets/2019-01-28-01.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">表示高速化とUXは強い関係がある。遅いページを待つ時間は、非常にストレスがかかる。</span></p>
<p>どうしてなかなか対応できないのか、今回は導入時にフォーカスをあてていきます。</p>
<h2>導入時に開発が必要？</h2>
<p style="text-align: center;"><img alt="2019-01-28-02.jpg" src="https://blog.ideamans.com/assets/2019-01-28-02.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">画像軽量化プロジェクトは、初期開発が必要になることも多い</span></p>
<p>結論からすると、<strong>画像軽量化は導入時に開発が必要なケースが多く、技術的に困難なケースが多い</strong>のです。CDNと画像軽量化を合わせたサービスや、画像軽量化のみのサービスがありますが、どこちらもポン！と入ることはありません。<strong>サーバ構築などのシステムインテグレートが伴い、要件定義〜構築〜開発〜検証までを含めると、少なくとも3ヶ月以上かかる</strong>ことも。<strong>スケジュールがかかるため、初期導入コストも高額に</strong>なってきます。その場合、どうしてここまで時間がかかるのか、細分化していきます。</p>
<h3>専用のサーバが必要になる。画像軽量化ツールは、CPUパワーが要る。</h3>
<p>画像軽量化ツールをサーバで動作する際に、一時的にCPUを大量に利用します。ツールによってCPU負荷をコントロールすることも可能ですが、画像処理はどちらかというと重い処理に入ります。</p>
<p>処理が重いため、<strong>今あるサーバとは別でサーバ構築する必要がでてくる</strong>のです。ここでサーバ構築のための時間がかかります。Webサーバと同一ネットワークに置くことが多いため、セキュリティなどに配慮が必要となるケースが多いことも。</p>
<p>セキュリティに厳しく、ネットワーク制限が強い場合は、このパターンになることが多いです。</p>
<h3>CDNが追加されることで、画像のパスが変わる。そのため、既存システムに改修が必要となる</h3>
<p>CDNが追加されることで、画像のURLが変更されます。となると、現在のシステムで呼び出している画像のURLを変更しなくてはなりません。<strong>単純なドメイン変更程度ならば簡単ですが、リサイズ機能を組み合わせる場合は、大掛かりなシステム改修となる</strong>ことでしょう。その場合、要件定義から始まることとなり、３ヶ月以上かかるケースもでてくることも。</p>
<p>しかし、リニューアルなどでCDNも含めて見直す場合は、非常に有効な方法です。リニューアル時にしっかりと要件を詰めておけば、画像加工のコストはすべて画像軽量化サービス側にかかるようにあります。</p>
<h2>手動なら簡単だが、続かないのが現状</h2>
<p>導入が困難なため、とりあえず手動で画像軽量化するパターンも多くあります。枚数が少なかったり、更新頻度が少ないサイトなどでは、とりあえず頑張って画像軽量化してしまえば済んでしまいます。更新頻度が少なめなコーポレートサイトでは、この方法でも十分です。</p>
<p>しかし、ランディングページを作り続けている、商品リリースが毎週ある、メルマガも毎週配信している、というようなウェブに力を入れているサイトの場合、手動での画像軽量化はあまり続かないのが現状です。Photoshopから最適化して書き出しするだけでは、画像軽量化には不足しています。</p>
<p style="text-align: center;"><img alt="2019-01-28-03.jpg" src="https://blog.ideamans.com/assets/2019-01-28-03.jpg" width="1280" height="609" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">TinyPNGは、お手軽に画像軽量化できるウェブサービスなのでオススメ。WordPressのプラグインもあります。</span></p>
<p><a href="https://tinypng.com/" target="_blank">TinyPNG</a>のようなウェブサービスを利用すると、画質は落ちますがかなりの軽量化をすることができるのでオススメです。</p>
<h2>導入時に開発が不要なLightFileは、導入の敷居の低さが桁違い</h2>
<p>弊社の<strong><a href="https://core.lightfile.net/" target="_blank">画像軽量化ツール「LightFile」</a>は、開発不要で設定だけで導入できる</strong> のが強みです。<strong>多くのサービスが持つリサイズ機能がなく、画像軽量化だけに特化しているツール</strong>のため、現在のシステムに影響を与えることがありません。</p>
<p style="text-align: center;"><img alt="2019-01-28-05.jpg" src="https://blog.ideamans.com/assets/2019-01-28-05.jpg" width="1280" height="550" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">画像軽量化ツール「LightFile」は、画質そのままでファイルサイズを大幅に削減</span></p>
<p>もともと<strong>大手アパレルECサイトでの利用に適した画質</strong>があるので、画像軽量化後も画質は元画像と比較しても肉眼では判別ができません。さらに、<strong>すでにあるシステムには手を入れないという制限をクリアするため、完全に独立したツール</strong>として成り立っています。そのため、導入時に初期開発が発生しないのです。</p>
<h3>おまかせLightFileなら、２ステップですぐに画像軽量化がスタート</h3>
<p>もっとも導入の敷居が低いのが、「<a href="https://www.ideamans.com/lightfile/managed/" target="_blank">おまかせLightFile</a>」というサービスです。このサービスは、導入先ではたった２つのことだけすれば、すぐに導入が可能になります。</p>
<ol><li><strong>画像が格納されているサーバ接続用のアカウントの発行（FTP/SFTP/FTPSなど）</strong></li><li><strong>対象ディレクトリの指定</strong></li></ol>
<p>接続元のIP制限も可能ですので、セキュリティの不安要素もありません。接続サーバが複数の場合でも、すぐに対応が可能です。また、対象ディレクトリは複数ご指定いただくことも可能です。</p>
<p>みなさんがお悩みの問題は、この２点でした。</p>
<ol><li><strong>スマホの表示速度やUX（ユーザーエクスペリエンス）を向上したい</strong></li><li><strong>転送量や転送料金をコストダウンしたい</strong></li></ol>
<p><a href="https://www.ideamans.com/lightfile/managed/" target="_blank">おまかせLightFile</a>なら、最短3日で画像軽量化処理が始まります。すぐに課題解決できるのが強みです。</p>
<h3>CDNが導入されていても問題ない？</h3>
<p>CDNが導入されている場合は、ホストサーバの画像を軽量化することで、配信用のエッジサーバも合わせて軽量化されます。おまかせLightFileで「ホストサーバの画像軽量化」を行うことで問題ございません。</p>
<h3>どんな環境が必要なの？</h3>
<p>接続アカウントが発行いただければ、<strong>Linuxサーバ以外に、Windowsサーバでも動作</strong>します。接続ができれば、ファイルサーバなども対象とすることが可能です。</p>
<h3>リサイズ機能がどうしてないの？</h3>
<p>現在ご利用のシステムでリサイズ機能があれば、新たにリサイズすることは不要なためです。</p>
<h3>画像軽量化サービスって、料金が高いよね</h3>
<p><a href="https://core.lightfile.net/" target="_blank">LightFile</a>のライセンスは月額1万円(税別)。どれだけの画像を処理しても、金額は変わりません。最も導入が簡単な<strong>「<a href="https://www.ideamans.com/lightfile/managed/" target="_blank">おまかせLightFile</a>」でも、月額1.5万円(税別)からご利用いただけます。定額なので、画像が多くても月額費用が増えることはありません。</strong></p>
<p>※金額は2019年1月28日現在</p>
<h3>画像軽量化すると表示速度って変わるの？</h3>
<p>今どきのウェブサイトでは、画像は非常に多く利用されており、実際にページを表示する際にダウンロードされるデータの半分以上が画像になります。その画像を軽量化することで、<strong>ダウンロード量が大幅に削減され、結果として表示が速く</strong>なります。また、<strong>ユーザーのダウンロード量が減るので、ギガを泥棒されることも減ります</strong>。</p>
<h3>電子書籍の画像にも利用できる？</h3>
<p>電子書籍で利用している画像にも対応できます。画像が軽くなることで、電子書籍のファイルサイズも軽量化することができます。</p>
<h3>無料で試せないの？</h3>
<p>LightFileシミュレータを利用すると、URLを入力するだけでどのぐらいページが軽くなるのか無料でシミュレートすることができます。ぜひご利用ください。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://simulator.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/images/service-simulator.jpg" alt="LightFile Simulator β版"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator</a></p>
<p class="serviceDesc">無料で使える画像最適化チェックシミュレータ。チェック結果がレポートになるので、URLを共有すればみんなでみれる。</p>
<p class="serviceLink"><a href="https://simulator.lightfile.net/" target="_blank">https://simulator.lightfile.net/</a></p>
</div>
</div>
<p> </p>
<h2>最後に</h2>
<p>画像軽量化サービスは、CDNを組み合わせたものも多く存在し、様々なウェブサイトに導入できる状況にあります。しかし、価格的なネックで導入を断念するケースも少なくありません。<a href="https://core.lightfile.net/" target="_blank">画像軽量化ツール「LightFile」は、シンプルな機能・素晴らしい画質・利用しやすい料金というのが特徴</a>です。すぐに画像軽量化する場合は、LightFileを利用しましょう。</p>
<h3>画像軽量化ツール・サービス参考リンク</h3>
<ol><li><a href="https://core.lightfile.net/" target="_blank">画像軽量化するならLightFile</a></li><li><a href="https://cloudinary.com/" target="_blank">Cloudinary</a></li><li><a href="https://www.sakura.ad.jp/services/imageflux/" target="_blank">ImageFlux</a></li><li><a href="https://tinypng.com/" target="_blank">TinyPNG</a></li><li><a href="https://www.jpegmini.com/" target="_blank">JPEGmini</a></li><li><a href="https://gist.github.com/t32k/6606334" target="_blank">ImageOptiim</a></li><li><a href="https://www.akamai.com/jp/ja/products/web-performance/image-manager.jsp" target="_blank">Image Manager</a></li><li><a href="https://www.webtech.co.jp/smartjpeg/" target="_blank">SmartJPEG</a></li><li><a href="https://compressor.io/" target="_blank">COMPRESSOR.io</a></li></ol>
