---
# Astrowind
title: 'メディアサイトは84%が対応済み！Lighthouseで調べたモバイルフレンドリーなサイトの割合'
excerpt: 'Lighthouseが「モバイルフレンドリー」と判定したサイトの割合をジャンル別...'
updateDate: 2020-06-18
publishedDate: 2018-06-19
tags: 
  - lighthouse

author: miyanaga
image: https://blog.ideamans.com/assets/chart.png
category: lighthouse

# カスタム
updatedAt: 2020-06-18 06:31:37
publishedAt: 2018-06-19 09:30:00
categories: 
  - lighthouse

categoryLabels: 
  - Lighthouse

authorId: miyanaga
subTheme: 
recommended: false
---

<ul><li>Lighthouseが「モバイルフレンドリー」と判定したサイトの割合をジャンル別にレポート</li><li>Lighthouseがモバイルフレンドリーと判定するのはviewportの適切な指定と12px以上のフォントサイズ</li><li>ブログ/メディアサイトは84%が対応済みだが、上場企業コーポレートサイトはまだ61%、ECサイトも68%しか対応していない</li></ul>
<h2>モバイルフレンドリーって？</h2>
<p>モバイルWebサイト監査ツール<a href="https://developers.google.com/web/tools/lighthouse/?hl=ja" title="Lighthouse">Lighthouse</a>には、SEOの採点項目として「モバイルフレンドリー」があります。</p>
<p>Googleは、モバイルサイトの<span style="text-decoration: underline;"><strong>検索順位にモバイルフレンドリーなサイトであること</strong></span>つまりモバイルデバイスでの表示に考慮していることを評価するとしており、判定のためのオンラインツールも提供しています。</p>
<p>それがかの<a href="https://search.google.com/test/mobile-friendly?hl=ja" title="モバイルフレンドリーテスト">モバイルフレンドリーテスト</a>です。試したことのある方も多いでしょう。</p>
<p>モバイルWebサイトの監査ツール<a href="https://developers.google.com/web/tools/lighthouse/?hl=ja" title="Lighthouse">Lighthouse</a>にも、モバイルフレンドリーについての監査項目が含まれています。</p>
<h2>Lighthouseのモバイルフレンドリーテスト</h2>
<p>では有名なオンラインのモバイルフレンドリーテストと、Lighthouseのモバイルフレンドリーテストでは何が違うのか？ これを知りたかったという方にはすみません、はっきり分からず、この記事でも触れません。</p>
<p>Lighthouseでは、<span style="text-decoration: underline;"><strong>1. viewportにwidthかinitial-scaleが指定されていること、2. モバイルデバイスにおけるフォントサイズ</strong></span>。この2点を評価します。ラフに言いかえれば、<span style="text-decoration: underline;"><strong>モバイルデバイスで拡大縮小の操作をしなくても文字が読みやすく、上下方向のみに簡単にスクロールして閲覧できるサイト</strong></span>がモバイルフレンドリーということになります。</p>
<p>弊社アイデアマンズのサイトに対するモバイルフレンドリーの監査レポートがこちらです。</p>
<p><img alt="audit-report.png" src="https://blog.ideamans.com/assets/audit-report.png" width="1632" height="1106" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>フォントサイズについては<span style="text-decoration: underline;"><strong>12px以上にしましょう</strong></span>と推奨されています。ページの中で12px未満のフォントサイズの文字が多いと、このスコアが低くなります。</p>
<p>どこで小さなフォントサイズが指定されており、テキストの何%に適用されているかも細かく教えてくれます。</p>
<p>同じ呼び名を使うあたり、オンラインのモバイルフレンドリーテストも基本的な採点方法は近いのではないかと想像しています。</p>

<h2>ジャンル別モバイルフレンドリーなサイトの割合</h2>
<p>アイデアマンズでは、<span style="text-decoration: underline;"><strong>たくさんのサイトにLighthouseを実行してみて統計データを集めてみよう！</strong></span>という試みを行っています。</p>
<p><span style="text-decoration: underline;"><strong>「サイトの最適化についてぶっちゃけ他のサイトはどれだけやってるの？」</strong></span>という疑問に応えるためです。</p>
<ul><li><span style="text-decoration: underline;"><strong>コーポレートサイト</strong></span> 代表として<a href="https://www.jpx.co.jp/listing/co/" title="JPX上場企業">JPX上場企業</a>3,618社(2018年6月18日現在)</li><li><span style="text-decoration: underline;"><strong>ブログ/メディアサイト</strong></span> <a href="http://tophatenar.com/" title="TopHatenar">TopHatener</a>の購読者上位3,000サイト</li><li><span style="text-decoration: underline;"><strong>ECサイト</strong></span> 独自のクローラーで収集した、会員管理機能とショッピングカート機能を有するインターネット通販サイト2,679サイト(楽天などのモールも含む)実際にはこれらの中から、Lighthouseを正常に実行できたサイト(エラーになっていないサイト)や、閉鎖や移転で簡素な内容になっているサイトを除きます。</li></ul>
<p>Lighthouseがモバイルフレンドリーであると判定したサイトの割合は次の通りでした(2018年6月18日現在)。</p>
<p><img alt="chart.png" src="https://blog.ideamans.com/assets/7fd212c0221f5e0731717f974640bf8abefc982b.png" width="1662" height="786" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>ブログ/メディアサイトはもはやモバイル中心であることは疑いようがないでしょう。その状況を反映して、Lighthouseの判定では<span style="text-decoration: underline;"><strong>ブログ/メディアサイトの84%のサイトがモバイルフレンドリーに対応済み</strong></span>でした。</p>
<p>逆に、<span style="text-decoration: underline;"><strong>上場企業のコーポレートサイトでは約4割がモバイル端末での閲覧に対応が不十分</strong></span>であると判定されました(もちろん企業が複数のサイトを持つことがあり、用途に応じて対応済みであることもあり得ます。4割の企業がモバイル対応をまったく行っていないという意味ではありません)。</p>
<p>ECサイトもすでにモバイル中心になっていることは想像に難くありません。しかし<strong><span style="text-decoration: underline;">ECサイトのモバイルフレンドリー比率は68%</span></strong>となっており、ブログ/メディアサイトの84%と開きがあります。</p>
<p>ECサイトはそのシステムがブログ/メディアサイトのCMSに比べて大きく複雑で、多くのコストも要します。その制約によりモバイルへの世代交代ができていないサイトがまだ多いのかもしれません。あるいは社内でのオンライン販売自体の優先度が低く、手が回っていないという状況も想像されます。</p>