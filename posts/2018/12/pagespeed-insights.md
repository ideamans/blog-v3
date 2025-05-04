---
# Astrowind
title: 'Google Pagespeed Insights 画像の４項目について調査＆考えてみた結果、画像軽量化とオフスクリーンの画像遅延読み込みはやるべきである'
excerpt: 'ウェブ担当者の方が毎日チェックするツールの一つ「Google Pagespeed...'
updateDate: 2020-06-18
publishedDate: 2018-12-20
tags: 
  - lighthouse

  - pagespeed-insights

  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-12-20-pagespeed-insights-ogp.jpg
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 06:26:01
publishedAt: 2018-12-20 16:39:00
categories: 
  - lighthouse

  - pagespeed-insights

  - web-imaging

  - lightfile

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

  - Web画像最適化

  - 画像軽量化AI LightFile

authorId: nose
subTheme: 
recommended: false
---

<p>ウェブ担当者の方が毎日チェックするツールの一つ「<a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">Google Pagespeed Insights</a>」は、2018年11月14日から分析エンジンが <a href="https://developers.google.com/web/tools/lighthouse/" _target="blank">Lighthouse</a> に変更されました。非常に見やすくなったのと、Lighthouse は Chrome DevTools でも利用できますし、コマンドラインからでも利用できるので手軽にチェックできるのがいいですね。</p>
<p>さて、Pagespeed Insightsの中には画像に関する項目が4つあります。今回はこれについて確認していきます。</p>
<p style="text-align: center;"><img alt="2018-12-20-pagespeed-insights-02.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-20-pagespeed-insights-02.jpg" width="1280" height="" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Pagespeed Insightsでは画像に関するチェックも行ってくれる。</span></p>
<h2>Pagespeed Insightsで監査される4つの画像項目</h2>
<p>実行すると「改善できる項目」や「合格した監査」のところに画像に関する項目がいくつか表示されます。</p>
<p><strong>1. 適切なサイズの画像</strong><br>適切なサイズの画像を配信して、モバイルデータ量と読み込み時間を抑えてください。</p>
<p><strong>2. オフスクリーン画像の遅延読み込み</strong><br>オフスクリーンの非表示の画像は、クリティカルなリソースをすべて読み込んだ後に遅れて読み込むようにして、インタラクティブになるまでの時間を短縮することをご検討ください。</p>
<p><strong>3. 効率的な画像フォーマット</strong><br>画像を最適化すると、読み込み時間を速くして、モバイルデータ量を抑えることができます。<br><br><strong>4. 次世代フォーマットでの画像の配信</strong><br>JPEG 2000、JPEG XR、WebP などの画像フォーマットは、PNG や JPEG より圧縮性能が高く、ダウンロード時間やデータ使用量を抑えることができます。</p>
<h3>この中で大切なのは「オフスクリーン画像の遅延読み込み」と「効率的な画像フォーマット」の２つ</h3>
<p>すべて対応するのが望ましいのですが、必須ではありません。技術的にクリアが難しいケースもあるでしょうし、巨大なウェブサイトではすべてを対応するのは簡単なことではありません。この中で大切なものは２つです。</p>
<h2>Pagespeed Insightsとはなにか、モバイルユーザーにはなにを提供すべきか</h2>
<p>ポイントは、Pagespeed Insights がなにを目的としているのかを知ることで理解できます。</p>
<p style="text-align: center;"><img alt="2018-12-20-pagespeed-insights-05.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-20-pagespeed-insights-05.jpg" width="1280" height="495" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Pagespeed Insightsのトップページは、目的がしっかりと記載されている</span></p>
<p>トップページに記載されている「あらゆる端末でウェブページの読み込み時間を短くしましょう」という言葉の通り、「ウェブページの読み込み時間を短く」というのが至上命題となっています。さらに重視されるのは、ファーストビューであり First Meaningful Paint となります。いかにスマホの画面に素早く表示されるのか、これが重要となります。</p>
<h3>オフスクリーン画像の遅延読み込み</h3>
<p style="text-align: center;"><img alt="2018-12-20-pagespeed-insights-01.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-20-pagespeed-insights-01.jpg" width="888" height="416" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">オフスクリーン画像の遅延読み込みは、多くのサイトで改善項目にピックアップされる</span></p>
<p>画像の読み込みは非常に重いものの一つです。そのため、ファーストビュー入らない画像は、遅延読込することが重要です。これにより、ウェブページを表示するのに必要なダウンロードするファイルサイズは劇的に削減されます。</p>
<p>画像遅延読み込み自体は新しい技術ではないので、ググるとたくさん時の情報が出てきます。ライブラリについて参考情報を記載します。</p>
<ul><li><a href="https://github.com/tuupola/jquery_lazyload" target="_blank">jquery_lazyload</a></li><li><a href="https://github.com/aFarkas/lazysizes" target="_blank">lazysizes</a></li></ul>
<h3>効率的な画像フォーマット</h3>
<p style="text-align: center;"><img alt="2018-12-20-pagespeed-insights-03.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-20-pagespeed-insights-03.jpg" width="888" height="389" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">効率的な画像フォーマットも短縮できる時間が多い部類にはいる</span></p>
<p>透過がなく色数の多い画像をPNGで表示していませんか？これは画像軽量化には適していません。JPEGにすることで、大幅な軽量化を達成できるはずです。販促バナーなどをPNGで表示しているサイトを見かけますが、それらのサイトはかなりの軽量化ができるでしょう。また、ロゴデータやアイコンなどの画像は、PNG8やSVGにすると非常に軽量化することができます。</p>
<p>Lighthouseの場合、この項目はJPEGとBMP画像が最適化されているかどうかをチェックします。そのため、PNG画像は対象にならず、別の項目でチェックされます。画像毎に適した画像フォーマットにすることは基本ですので、容量の重いPNG画像をむやみに利用せず、画像に合わせてフォーマットを選択することが重要です。</p>
<p>この項目が重要なのは、ファーストビューに画像があるケースに対応が必要なためです。スマホサイトでも、ファーストビューに画像が表示されることは多く、スライダーで表示しているケースも多く見かけます。そのため、オフスクリーンによる遅延読み込みに含まれない画像は、しっかりと軽量化することで読み込みが速くなるのです。</p>
<h3>他の２項目も重要だが、優先度は少しさがる</h3>
<p>先に結果をお伝えすると「適切なサイズの画像」「次世代フォーマットでの画像配信」が改善できる項目に上がっていたとしても、90点以上は可能です。</p>
<p style="text-align: center;"><img alt="2018-12-20-pagespeed-insights-04.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2018-12-20-pagespeed-insights-04.jpg" width="975" height="1574" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">とあるサイトでのPagespeed Insightsの結果。画像に関する２項目がピックアップされていても93点がでている</span></p>
<p>もちろん全てに対応できればよいのでしょうが、そうでなくても緑のゲージのスコアは獲得ができるということなのです。</p>
<h2>画像軽量化は定額＆低額のLightFileがおすすめ</h2>
<p>効率な画像フォーマットの項目は、JPEGとBMPの最適化をチェックします。しかし、BMPは現在ウェブサイトではあまり使われていないため、JPEGの最適化が行われているかどうかということになります。弊社の画像最適化ツール「LightFile」は、画質そのままで自動で軽量化するツールです。月額１万〜利用できる低価格、処理ファイル数が無制限の定額制なので、アクセスが増えてコストが上がることもありません。画像軽量化することで、クラウドの転送料金が大幅コストダウンできたケースもあり、コストメリットが非常に強いのも特徴でもあります。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://www.ideamans.com/lightfile/" target="_blank"><img src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="/assets/service-lfc.jpg" alt="LightFileシリーズ | サイトをスピードアップ・ディスクと通信コストを削減"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://www.ideamans.com/lightfile/" target="_blank">LightFileシリーズ | サイトをスピードアップ・ディスクと通信コストを削減</a></p>
<p class="serviceDesc">サイトの表示スピードの向上で、待ち時間のストレスによる離脱を防ぎます。また、ディスクや通信で大部分を占める画像の容量が削減することで、システムの維持コストも軽減。システム改修不要で今すぐ導入できます。</p>
<p class="serviceLink"><a href="https://www.ideamans.com/lightfile/" target="_blank">https://www.ideamans.com/lightfile/</a></p>
</div>
</div>
<p>おまかせLightFileなら、接続アカウントを発行するだけでかんたんに利用することができます。すぐに導入することも可能なのです！</p>
<p> </p>
<h2>最後に</h2>
<p>Google Pagespeed Insightsは、ウェブ担当者の強い味方です。表示が速いことは正義であり、信頼につながるはずです（これは受け売りです）。画像軽量化は確実にウェブページの読み込みを速くするので、すぐに実施することをオススメします！</p>
<p>関連情報</p>
<ul>
<li><a href="https://blog.ideamans.com/2018/12/psi-lighthouse.html">Pagespeed Insight で Lighthouse が利用されるように。表示速度は、より重要度を増す方向に。スコアアップした方法を公開しました。</a></li>
</ul>
