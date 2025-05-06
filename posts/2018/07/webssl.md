---
# Astrowind
title: 'Webサイト全体の常時SSL化は進んでる？〜対応済みの国内ウェブサイトは31.3%にとどまる。'
excerpt: '2018年7月下旬からPC版ChromeではSSL化されていないページにアクセス...'
updateDate: 2020-06-18
publishedDate: 2018-07-11
tags: 
  - lighthouse

  - reports

author: miyanaga
image: https://blog.ideamans.com/assets/lighthouse-chart.png
category: lighthouse

# カスタム
updatedAt: 2020-06-18 06:35:38
publishedAt: 2018-07-11 08:00:00
categories: 
  - lighthouse

  - reports

categoryLabels: 
  - Lighthouse

  - 調査レポート

authorId: miyanaga
subTheme: 
recommended: false
---

<p>2018年7月下旬から<span style="text-decoration: underline;"><strong>PC版</strong><strong>ChromeではSSL化されていないページにアクセスしたときアドレスバーに「保護されていない通信」と警告</strong></span>が表示されるようになるとされています。</p>
<ul><li><a href="https://blog.trendmicro.co.jp/archives/19284">Chrome が非 HTTPS サイトに「保護されていません」と表示、2018 年 7 月下旬開始予定</a></li></ul>
<p><a href="https://blog.ideamans.com/2018/07/https3.html">前回のブログ記事で無料または格安で証明書を手に入れ、サイトをSSL化する方法を紹介しました</a>が、今回は日本国内でどのくらいのWebサイトが全体のSSL化(常時SSL・AOSSL)に対応しているか、調査してみました。</p>
<h2><span style="font-size: 1.5em;">SSL化対応状況は7,866サイト中31.3%</span></h2>
<p>コーポレートサイト(上場企業)、ブログ・ニュースサイト、ECサイトについて調査したところ、全体としては31.3%が対応済みでした。</p>
<p> </p>
<p><img alt="lighthouse-chart.png" src="https://blog.ideamans.com/assets/lighthouse-chart.png" width="1036" height="321" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p> </p>
<p>以前、<a href="https://blog.ideamans.com/2018/06/lighthouse-mobile-friendly.html">モバイルフレンドリー対応の調査</a>を行ったときはブログ・ニュースサイトが他のジャンルをリードしていましたが、今回は逆の結果となりました。</p>
<p>コンテンツ配信が主体であるブログやニュースサイトではまだSSL化の必要性が薄く、想像通りと言えます。</p>
<h2><span style="font-size: 1.5em;">調査について</span></h2>
<p>SSLへの対応の調査は、事前にリダイレクトを解決した上、トップページに対する<a href="https://developers.google.com/web/tools/lighthouse/?hl=ja">Lighthouse</a>を実行して判定します。そのためモバイル端末としてアクセスした結果となります。</p>
<p>もしかしたらSSL化から漏れている下層ページがあるかもしれませんが、少数のケースと思われるのでトップページで代表して確認しました。</p>
<p>ジャンルごとのサンプル抽出方法は以下の通りです。</p>
<ul><li><span><strong>上場企業コーポレートサイト </strong></span><a href="https://www.jpx.co.jp/listing/co/" title="JPX上場企業">JPX上場企業</a>3から抽出</li><li><span><strong>ブログ/メディアサイト </strong></span><a href="https://tophatenar.com/" title="TopHatenar">TopHatener</a>の購読者上位から抽出</li><li><span><strong>ECサイト</strong></span> 独自のクローラーで収集した、会員登録機能とショッピングカート機能を有すると判断される一般的なインターネット通販サイト(楽天などのモールも含む)</li></ul>
<p>これらの候補の中から、Lighthouseを正常に実行できなかったサイトや、閉鎖や移転のお知らせで簡素な内容になっているサイトを除きます。</p>
<p>具体的なサンプル数は以下の通りです。</p>
<table border="1" cellpadding="5" cellapacing="0" class="tablestyle" style="width: 591px; height: 137px;">
<thead>
<tr><th style="text-align: left;">トップページSSL化</th><th>対応済</th><th>未対応</th><th>All</th></tr>
</thead>
<tbody>
<tr><th style="text-align: left;">ECサイト</th>
<td style="text-align: right;">833</td>
<td style="text-align: right;">1429</td>
<td style="text-align: right;">2262</td>
</tr>
<tr><th style="text-align: left;">ブログ・ニュースサイト</th>
<td style="text-align: right;">436</td>
<td style="text-align: right;">1642</td>
<td style="text-align: right;">2078</td>
</tr>
<tr><th style="text-align: left;">上場企業コーポレートサイト</th>
<td style="text-align: right;">1195</td>
<td style="text-align: right;">2331</td>
<td style="text-align: right;">3526</td>
</tr>
<tr><th style="text-align: left;">All</th>
<td style="text-align: right;">2464</td>
<td style="text-align: right;">5402</td>
<td style="text-align: right;">7866</td>
</tr>
</tbody>
</table>
<p> </p>
<p>アイデアマンズでは「自社のサイトをSSL化したいがどうしたらよいか」というご相談に、パフォーマンス改善も合わせてお答えします。</p>
