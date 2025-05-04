---
# Astrowind
title: 'Webページのダウンロード開始までの時間(TTFB)は推奨0.6秒未満。7,688サイトの約92%がクリア'
excerpt: 'TTFBはユーザーにとっての最初の待ち時間 Webページを開くとき、ブラウザはま...'
updateDate: 2020-06-18
publishedDate: 2018-07-19
tags: 
  - lighthouse

  - pagespeed-insights

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/histogram.png
category: performance

# カスタム
updatedAt: 2020-06-18 06:29:36
publishedAt: 2018-07-19 15:00:00
categories: 
  - lighthouse

  - pagespeed-insights

  - performance

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

<h2>TTFBはユーザーにとっての最初の待ち時間</h2>
<p>Webページを開くとき、ブラウザはまずHTMLドキュメントをダウンロードしますが、裏側では多くの処理が行われます。</p>
<ul><li>DNSでドメイン名をIPアドレスに変換する</li><li>IPアドレスがWebサーバにTCPで接続する</li><li>ブラウザからWebサーバにHTTPリクエストを送信する</li><li>Webサーバがリクエストを受信し、それに応じたHTMLドキュメントを用意する</li><li>HTMLドキュメントの受信を開始する</li></ul>
<p>場合によってはリダイレクトが発生することもあります。</p>
<p>Webページを開こうとしてから<strong>ダウンロードが始まるまで(最初の1バイトを受信するまで)の時間をTTFB(Time To First Byte)</strong>と呼びます。</p>
<p>Webサーバのログではサーバー側の応答時間が記録されますが、これにネットワーク通信にかかる時間を加えた「<strong>ユーザーにとっての最初の待ち時間がTTFB</strong>」ということもできるでしょう。</p>
<p>ちなみにHTMLドキュメントだけではなく画像など他のリソースのリクエストについても、最初の1バイトの受信までの時間をTTFB(Time To First Byte)と呼びます。</p>
<p><a href="https://developers.google.com/web/tools/chrome-devtools/network-performance/understanding-resource-timing?hl=ja">Resource Timing について</a></p>

<h2>3G回線で0.6秒以内を推奨</h2>
<p>Googleが提供する監査ツールの<a href="https://developers.google.com/web/tools/lighthouse/?hl=ja">Lighthouse</a>では、<strong>モバイル端末向けのTTFBは600ms(0.6秒)未満にすることを推奨</strong>しています。</p>
<p><a href="https://developers.google.com/web/tools/lighthouse/audits/ttfb">Keep Server Response Times Low</a></p>
<p>Lighthouseは内部で3G回線相当の通信速度をシミュレートするので、Lighthouseを実行すると自分のサイトが推奨値を達成しているかすぐに調べることができます。</p>
<p>3G相当の回線スピードでの時間なのでなかなか大変な目標にも見えますが、実際のところ国内のサイトはどうでしょうか。</p>
<p>7,688サイトにLighthouseを実行して、計測されたTTFBのサイト数(count)、最大値(max)、平均値(mean)、四分位(25%/50%/75%)、600msを超えるサイト数とその割合(over 600)が以下の通りです。時間の単位はms(0.1秒)です。</p>
<p> </p>
<p><img alt="statistics.png" src="https://blog.ideamans.com/assets/statistics.png" width="1062" height="500" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p><strong>TTFBの平均は212.61ms(約0.21秒)</strong>と、推奨値600msを大幅に下回る結果となりました。</p>
<p>また、TTFBが推奨上限600ms以上となったサイトはわずか8.12%、75%のサイトはTTFBが245.2ms以内となっています。</p>
<p>このように<strong>相対的にも、TTFBが600ms以上のサイトは他のサイトに比べてかなり遅い・重い</strong>と感じられることでしょう。</p>
<p>なお、サイトのジャンル別ではやはり要件が複雑で扱うデータも多いECサイトがコーポレートサイトやブログ・ニュースサイトよりTTFBが長めになっています。</p>
<p>600ms未満のヒストグラムを見ると以下のように分布しています。</p>
<p><img alt="histogram.png" src="https://blog.ideamans.com/assets/histogram.png" width="831" height="334" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>長めと言ってもわずかな差で、ECサイトも約90%がTTFB600ms未満を達成しています。長いTTFBはユーザー離脱の一因になるので、重たいサイトには工夫が求められます。</p>
<h2>TTFB短縮のためのアクション</h2>
<p>先ほど紹介した<a href="https://developers.google.com/web/tools/lighthouse/audits/ttfb">Lighthouseのヘルプページ</a>では、TTFB短縮のために以下のような方法を紹介しています。</p>
<ul><li>サーバ側のプログラムロジックの見直し。フレームワークを使っている場合はそのオススメ方法があるはず！</li><li>データベースクエリーの見直しをするか、より高速なデータベースに変更すること。</li><li>よりメモリやCPUの性能が高いサーバのハードウェアにアップグレードすること。</li></ul>
<p>(予算的に)それができれば苦労しないよ...！とツッコミたくなるアドバイスですが、現実的には<strong>キャッシュをうまく使う</strong>ことが多くの場面での解決策になるでしょう。</p>
<p>特にデータベースアクセスに時間のかかる部分だけをキャッシュする方法は、低コストで安全(ログインによるパーソナライズを提供するWebサイトでも事故が起きない)、表示の仕様変更にも柔軟に対応できるのでオススメです。</p>
<p>また、処理によってはRDBMSよりNoSQLが得意とする場面も増えています。NoSQLをメインストレージにするに多くのノウハウが必要になりますが、検索やランキング計算といった一部の用途でRDBMSと併用することでパフォーマンスを改善するアプローチもあります。</p>
<p>アイデアマンズではTTFB改善のためのご相談をお待ちしています。</p>