---
# Astrowind
title: 'スマホ表示最速王決定戦！CMSプロレスvol.03に参加してきました！'
excerpt: 'ロフトワーク社主催となるイベント「第3回CMSプロレス　ウェブサイト表示速度　最...'
updateDate: 2018-03-16
publishedDate: 2018-02-20
tags: 
  - web-imaging

  - event

  - lightfile

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-02-20-cmsprores-vol03-ogp.jpg
category: performance

# カスタム
updatedAt: 2018-03-16 16:51:08
publishedAt: 2018-02-20 10:55:18
categories: 
  - web-imaging

  - event

  - lightfile

  - performance

categoryLabels: 
  - Web画像最適化

  - イベント・セミナー

  - 画像軽量化AI LightFile

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>ロフトワーク社主催となるイベント「<a href="https://loftwork.com/jp/event/20180217_cms_wrestling" target="_blank">第3回CMSプロレス　ウェブサイト表示速度　最速王者決定戦</a>」に参加してきましたので、まずはご報告です。</p>
<p style="text-align: center;"><img alt="2018-02-20-cmsprores-vol03-01.jpg" src="https://blog.ideamans.com/assets/2018-02-20-cmsprores-vol03-01.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">会場となったロフトワークさんのイベントブースには、なんとDJブースも！</span></p>
<p>当日対戦で行なった実装などは、詳細を書いていくので順次ブログ記事にしていきます。</p>
<p>主催の<a href="https://loftwork.com/jp/" target="_blank">ロフトワーク川竹さん</a>を含め運営側のみなさま、本当にお疲れさまでした＆ありがとうございました。そして、優勝した<a href="https://www.redbox.ne.jp/" target="_blank">REDBOXの小川さん</a>＆<a href="https://spice-factory.co.jp/profile/" target="_blank">スパイスファクトリーの秦さん</a>、おめでとうございます！</p>
<p> </p>
<h2>対戦結果</h2>
<p>対戦方法はシンプルで、<a href="https://testmysite.withgoogle.com/intl/ja-jp" target="_blank">Test My Site</a>で計測して、早かった方が勝ちです。普通のWeb制作同様に、レイアウトが崩れていないこと、エラーが出ていないことなどが条件として存在します。もともとの素材は、Test My Siteで約13秒かかるものです。</p>
<ul><li>1回戦　5秒で勝利</li><li>準決勝　6秒で敗退（勝者は５秒）</li></ul>
<p>ということで、残念ながら準決勝で敗退しました。実装テスト時は最速で3秒だったのですが、どうしても計測時間に揺れがありました。</p>
<p> </p>
<h2>実装について</h2>
<p style="text-align: center;"><img alt="2018-02-20-cmsprores-vol03-02.jpg" src="https://blog.ideamans.com/assets/2018-02-20-cmsprores-vol03-02.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">mod_pagespeedの実装について説明しましたが、画像最適化もとても重要です！</span></p>
<p>今回は、以下のような構築で準備しました。</p>
<h3>テーマ</h3>
<ul><li>リソースを手動でアレコレいじらず、できるだけ開発を必要としないで速度を上げる</li></ul>
<h3>実装内容</h3>
<ol><li>CMS：<a href="https://www.sixapart.jp/movabletype/" target="_blank">Movable Type</a></li><li>画像最適化：<a href="https://core.lightfile.net/" target="_blank">LightFile</a></li><li>サーバチューニング：<a href="https://developers.google.com/speed/pagespeed/module/" target="_blank">Google mod_pagespeed</a> / gzip配信</li><li>配信：<a href="https://aws.amazon.com/jp/cloudfront/" target="_blank">AWS CloudFront（CDN）</a></li></ol>
<p> </p>
<p>テーマについては、LightFileが持っているテーマを採用しました。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p><strong>LightFileは、HTMLやJSなどに変更は一切行わず、サーバレス処理（またはサーバ処理）だけで画像の最適化</strong>を行います。クラウド型の画像最適化サービスは、API経由になることが多く、どうしても開発が発生します。そうすると開発と検証で初期コストが上がっってしまうので、導入の閾値が上がってしまうことに。このイベント専用ではなく、<strong>「シンプルに、スムーズに導入ができるように」</strong>というのを念頭において参加しました。</p>
<p>実装内容は、<strong>静的パブリッシングのMTは表示速度について非常に強いCMS</strong>です。ほかのCMSは、みなキャッシュを行なって対応していました。今回参加された挑戦者は、<strong>配信するデータが「静的ファイルか、キャッシュファイルか」のどちらか</strong>になっていましたね。単体ページでの計測だったので、シングルページアプリケーションの人はいなかったと思います。</p>
<p>画像最適化は、弊社謹製のLightFileを利用しました。今回の対戦データを処理しました結果を載せておきます。</p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル</th><th>ファイルサイズ</th><th>処理後のサイズ</th><th>削減容量</th><th>削減割合</th></tr>
<tr>
<td>メインビジュアルPC</td>
<td style="text-align: right;">1,085,231</td>
<td style="text-align: right;">443,534</td>
<td style="text-align: right;">641,697</td>
<td style="text-align: right;"><strong><span style="color: #000000;">59.13%軽量化</span></strong></td>
</tr>
<tr>
<td>メインビジュアルSP</td>
<td style="text-align: right;">317,218</td>
<td style="text-align: right;"><span style="color: #000000;">228,046</span></td>
<td style="text-align: right;"><span style="color: #000000;">89,172</span></td>
<td style="text-align: right;"><span style="color: #000000;">28.11%軽量化</span></td>
</tr>
<tr>
<td>キャンパス画像(外)</td>
<td style="text-align: right;">1,095,328</td>
<td style="text-align: right;"><span style="color: #ff0000;">217,647</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">877,681</span></td>
<td style="text-align: right;"><strong><span style="color: #ff0000;">80.13%軽量化</span></strong></td>
</tr>
<tr>
<td>キャンパス画像(スポーツ)</td>
<td style="text-align: right;">826,610</td>
<td style="text-align: right;"><span style="color: #ff0000;">155,284</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">671,326</span></td>
<td style="text-align: right;"><strong><span style="color: #ff0000;">81.21%軽量化</span></strong></td>
</tr>
<tr>
<td>キャンパス画像(図書館)</td>
<td style="text-align: right;">1,028,058</td>
<td style="text-align: right;"><span style="color: #ff0000;">175,326</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">852,732</span></td>
<td style="text-align: right;"><strong><span style="color: #ff0000;">82.95%軽量化</span></strong></td>
</tr>
</tbody>
</table>
<p><strong>一回戦で対戦した<a href="https://concrete5.co.jp/" target="_blank">コンクリートファイブジャパンの菱川さん</a>も、約80%の軽量化を行なっていたので、ほぼ同等の処理はできていた</strong>と思います。今回はコマンドラインでの処理だったので、画面がみせれる<a href="https://concrete5-japan.org/" target="_blank">concrete5</a>はビジュアル的に説明ができていいなと思いました。</p>
<p>サーバチューニングと、CDN配信は定番といえば定番ですが、これは別ブログ記事で詳しく書きます。</p>
<p> </p>
<h2>最後に</h2>
<p style="text-align: center;"><img alt="2018-02-20-cmsprores-vol03-03.jpg" src="https://blog.ideamans.com/assets/2018-02-20-cmsprores-vol03-03.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">かなりの人数のイベントでした。最後は集合写真。</span></p>
<p>もともと13秒くらい表示にかかるページを、どこまで速くできるのかという企画は面白かったです。今回はほぼ自分ひとりでの戦いだったので、次回はもう少し巻き込んで参戦したいと思います！今回はconcrete5の参戦が多かったですね。管理画面もかなりスマートに進化していました。Movable Typeは、もうすぐ7が登場ですね！楽しみ！</p>
<p> </p>
