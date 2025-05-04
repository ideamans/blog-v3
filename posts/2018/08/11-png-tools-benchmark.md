---
# Astrowind
title: '11種類のロスレスPNGサイズ削減ツールの比較ベンチマークレポート'
excerpt: 'PNGのファイルサイズを削減するツールとしてOptiPNGやpngquantが有...'
updateDate: 2020-06-18
publishedDate: 2018-08-15
tags: 
  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/dc6d441b94f8fa7e0997804bf413b7465ca02577.png
category: web-imaging

# カスタム
updatedAt: 2020-06-18 10:27:58
publishedAt: 2018-08-15 07:48:34
categories: 
  - web-imaging

  - performance

categoryLabels: 
  - Web画像最適化

  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

<p>PNGのファイルサイズを削減するツールとして<a href="http://optipng.sourceforge.net/">OptiPNG</a>や<a href="https://pngquant.org/">pngquant</a>が有名ですが、他にもたくさんあってどれを使ったらよいのか迷うところです。</p>
<p>PNG関連ツールについて調べていたところ、<strong>11種類のツールの比較ベンチマーク</strong>という、とても興味深いページを見つけたので紹介します。</p>
<p><a href="https://css-ig.net/png-tools-overview#pingo">PNG tools overview (benchmark)</a></p>
<p>このページでは<strong>ロスレス(減色や間引きを行わず画質を落とさない)タイプのPNGサイズ削減ツールについて、サイズの削減性能、処理時間がレポート</strong>されています。</p>
<p>レポートの更新日も2018年8月6日と、ごく最近です(2018年8月15日現在)。</p>
<p>ページの上部から各ツールの細かな結果が続きますが、<a href="https://css-ig.net/png-tools-overview#overview">ページの下部に全体のサマリー</a>があります。</p>
<p>少しレイアウトが崩れていますが、処理時間(speed)、削減サイズ(size)、削減成功数(reductions)ごとのランキングになっています。</p>
<p><img alt="overview.png" src="https://blog.ideamans.com/assets/overview.png" width="1770" height="1154" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>削減成功数は24種類のPNGファイルの何種類について、サイズ削減に成功したかという指標のようですが、サイズが削減されていても失敗と判定されていたり、判定基準がが詳しく分かっていません。分かった方がいたらぜひ教えてください！</p>
<h2>ベンチマーク結果が最も秀逸な謎のツールpingo</h2>
<p>さてランキングを見ると、<strong>pingoというツールが上位をほぼ独占</strong>しているのがわかります。ピンゴー？はじめて聞いた名前でしたが、説明では<strong>オープンソースではないフリーウェア</strong>のようです。</p>
<p><a href="https://css-ig.net/pingo">pingo, a fast image optimizer</a></p>
<p>そしてよくよく見るとこの<strong>ベンチマークレポートはpingoの公開サイト(css-ig.net)のコンテンツ</strong>でした。つまりpingoの性能を証明するためのベンチマークレポートだったわけですね。</p>
<p>このとても気になるpingo、なぜかダウンロードリンクがまったく見当たらず、まだ試せていません...</p>
<p>※ (追記) もしやと思いWindows上のブラウザで開いたらダウンロードリンクが表示されました。Windows限定のようです。</p>
<p>ちなみにpingoはあのクレイアニメのピングーに由来するみたいで、姉妹ソフトにpinga(ピンガ)もあったりします。読み方はピングーですね、きっと。</p>
<h2>ベンチマークの信憑性はどうか</h2>
<p>このように実は特定のソフトウェア(pingo)を中心としたベンチマークでしたが、pingo自体にまったく商売っ気を感じず、高い専門性・公平性・信憑性が期待できるデータであるように思いました。</p>
<p> </p>
<p>ロスレスPNGサイズ削減ツールを選定するときのひとつの材料にしてみてはいかがでしょうか。</p>
<p>また、pingoの最新版がダウンロードできたら方法を教えてください！</p>

