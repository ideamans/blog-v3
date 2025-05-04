---
# Astrowind
title: 'Firefox Quantumがついに登場！FirefoxもWebPをサポートし、残るメジャーブラウザはSafariのみ未対応。'
excerpt: '2019年1月29日に、Firefoxのバージョン65となる「Firefox Q...'
updateDate: 2020-06-18
publishedDate: 2019-01-31
tags: 
  - webp

  - web-imaging

author: nose
image: https://blog.ideamans.com/assets/2019-01-31-ff65-02.jpg
category: webp

# カスタム
updatedAt: 2020-06-18 10:19:20
publishedAt: 2019-01-31 09:18:02
categories: 
  - webp

  - web-imaging

categoryLabels: 
  - WebP

  - Web画像最適化

authorId: nose
subTheme: 
recommended: false
---

<p>2019年1月29日に、Firefoxのバージョン65となる「Firefox Quantum」がリリースされました。</p>
<ul><li><a href="https://www.mozilla.org/ja/firefox/new/" target="_blank">Firefox Quantum | 新しいFirefox</a></li></ul>
<p style="text-align: center;"><img alt="2019-01-31-ff65-01.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2019-01-31-ff65-01.jpg" width="1280" height="609" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">柔らかい曲線ときれいなグラデーションの背景が、新しい雰囲気を表現しているFirefoxのサイト</span></p>
<h2>WebPへの対応は？Firefox Quantum (ver. 65) でチェックしてみよう</h2>
<p>このブログで <strong>Firefox Quantum の最も気になるところといえば、WebPに対応したのかどうか</strong>、です。Firefoxにはナイトリービルドというベータ版が公開されており、そちらではすでにチェック済み（WebP対応されていた）なので、今回はリリースバージョンでのチェックになります。</p>
<h3>結論 Firefox QuantumはWebP対応している</h3>
<p>Firefox Quantum をダウンロードし、早速チェック！<strong>いま見ていただいているアイデアマンズブログは、すでにWebP対応を済ませています</strong>。実際に表示して、開発者ツールで見た画面がこちら。</p>
<p style="text-align: center;"><img alt="2019-01-31-ff65-03.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2019-01-31-ff65-03.jpg" width="1285" height="638" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">開発者ツールで見ると、画像のタイプが WebP になっていることがわかる</span></p>
<p>ということで、Firefoxもついに正式に WebP対応が行われました！</p>
<p>なお、新しいFirefoxは高速化も実現されているとのことなので、ページ表示が爆速な体感でした。もちろん、アドオンがなにもはいっていないなども影響しますが、それでも「速い！」と思える速度が出ています。</p>
<h3>WebPはどのぐらい軽くなるのか</h3>
<p>WebPがどのぐらい軽くなるのかは、気になる方も多いと思います。画質とのトレードオフではありますが、画像フォーマットとして、JPEGよりも軽量なのが特徴の一つです。JPEGは1992年9月18日に登場し、すでに27年ものキャリアがある画像フォーマットです。日進月歩のITの世界で、イキのいいフォーマットがでてきても不思議ではありません。</p>
<p>では、実際にどのぐらい軽くなるのか見ていきます。上のFirefoxの開発者ツール画像の左側に表示されている、卓上カレンダーの画像はどのぐらい軽くなるのでしょうか。</p>
<p style="text-align: center;"><img alt="2019-01-28-06.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2019-01-28-06.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">この画像でも、約1/4弱のファイルサイズが軽くなる。</span></p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル名</th><th>ファイルサイズ</th><th>削減容量</th><th>削減割合</th></tr>
<tr>
<td>JPEG画像(カレンダー画像)<br><a href="https://blog.ideamans.com/assets_c/2019/01/2019-01-28-06-thumb-480xauto-873.jpg" target="_blank">2019-01-28-06-thumb-480xauto-873.jpg</a></td>
<td style="text-align: right;">47.44KB</td>
<td style="text-align: right;">-</td>
<td style="text-align: right;">-</td>
</tr>
<tr>
<td><span style="color: #99cc00;">WebP化した同じ画像</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">34.83KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">-12.61KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">-27%</span></td>
</tr>
<tr>
<td>透過PNG画像(このブログのロゴ)<br><a href="https://blog.ideamans.com/assets/bloglogo02-png24.png" target="_blank">bloglogo02-png24.png</a></td>
<td style="text-align: right;">35.19KB</td>
<td style="text-align: right;">-</td>
<td style="text-align: right;">-</td>
</tr>
<tr>
<td><span style="color: #99cc00;">WebP化した同じ画像</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">3.94KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">-31.25KB</span></td>
<td style="text-align: right;"><strong><span style="color: #99cc00;">-88%</span></strong></td>
</tr>
</tbody>
</table>
<p>約23%近いファイル削減に成功しています。<strong>元画像のJPEGは、弊社の画像軽量化ツール「LightFile」で軽量化済みのものですので、そこからさらに約27%も削減できるのは驚異的</strong>です。まさにJPEGの限界を超えています。もちろん<strong>透過画像にも対応しているので、PNGやSVGにもWebPに変換</strong>できます。このブログの<strong>ロゴも透過PNGなのですが、35.19KB -&gt; 3.94KB という約88%のファイルサイズ削減を達成</strong>しています。</p>
<p>これだけのファイル削減効果があるので<strong>、表示速度の高速化はもちろん、CDNの転送量もグッとさげることができ、従量課金型のCDNであればコストダウンできる</strong>ようになるのです。画像軽量化ツール「LightFile」でJPEG軽量化した段階で<strong>「転送料金が1/3から1/4」までコストダウン</strong>できている事例がありますので、<strong>WebPではさらにコストダウンできる可能性</strong>があります。</p>
<h2>2019年1月31日時点でのWebP対応状況</h2>
<p>JPGよりも軽量な画像フォーマットの WebP (ウェッピー)について、2019年1月31日時点でのブラウザ対応状況を調べてみました。</p>
<p style="text-align: center;"><img alt="2019-01-31-ff65-04.jpg" src="https://blog.ideamans.com/assets/dummy-1-1.png" data-echo="https://blog.ideamans.com/assets/2019-01-31-ff65-04.jpg" width="1280" height="609" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">Mac Safari、iOS Safari がまだ対応予定なし...</span></p>
<p>Firefoxが対応したことにより、Apple Safari ( Mac / iOS )を除くほぼすべてのメジャーブラウザがWebPに対応したことになります。上図の赤枠部分が未対応なメジャーブラウザのSafariたちです。Safariはテスト段階ではWebP実装は対応済みなので、実装に技術的な問題はなさそうなんですが...。</p>
<p>Windows Edgeも対応済みですし、ChromeやAndroid系もすでに対応しています。日本のスマホはiPhoneのシェアが依然として高いですが、世界的にはiOSよりもAndroidの方がシェが伸びています。</p>
<ul><li><a href="https://caniuse.com/#feat=webp" target="_blank">WebP image format | Can I use... Support tables for HTML5, CSS3, etc</a></li></ul>
<h2>WebPに対応するには、ユーザーエージェントやリクエストヘッダでの振り分けで対応</h2>
<p>Safariではまだ表示ができないWebPなので、何かしらの振り分けが必要です。現状では、以下の2点で振り分けることができます。</p>
<ol><li>ユーザーエージェント</li><li>リクエストヘッダ</li></ol>
<p>CDN付きの画像軽量化サービスの場合は、サービス内で変換をかけ、レスポンスでWebPを返す様になっていることが多いです。Javascriptなどのクライアントサイドで実装する場合は、ユーザーエージェントを利用することもできます。</p>
<p>弊社でも、WebPにたった3ファイルで対応するやり方や、WebPに関する情報をまとめています。</p>
<ul><li><a href="https://blog.ideamans.com/2018/10/webwebp.html">Webサイト全体をWebP対応する最低限の方法 | アイデアマンズブログ</a></li><li><a href="https://blog.ideamans.com/2018/04/webp.html">WebPってなに？Googleが作った新しい画像フォーマットは、軽くてアルファチャンネルもサポート！表示高速化するなら検討してみよう！ | アイデアマンズブログ</a></li></ul>
<h3>WebP対応を考えているけど、どうすればいいかわからない...</h3>
<p>WebP対応をしたいけど、どうすればいいんだろう...。という方は、下のフォームよりお気軽にお問い合わせください。画像軽量化することで、表示高速化やCDNのコストダウンなど、得られるメリットは非常に多くあります。</p>
<h3>参考リンク</h3>
<ul><li><a href="https://forest.watch.impress.co.jp/docs/news/1167182.html" target="_blank">「Firefox 65」が正式公開 ～トラッキング保護を改善、WebP/AV1をサポート | 窓の杜</a></li><li><a href="http://www.itmedia.co.jp/news/articles/1901/30/news078.html" target="_blank">「Firefox 65」公開　トラッキング防止機能の強化や危険度「最高」を含む脆弱性に対処 | ITmedia NEWS</a></li><li><a href="https://venturebeat.com/2019/01/29/mozilla-firefox-65/" target="_blank">Firefox 65 arrives with Content Blocking controls, WebP, and AV1 on Windows | venturebeat</a></li><li><a href="https://www.cnet.com/news/microsoft-staffer-riles-firefox-faithful-by-telling-mozilla-to-embrace-chrome/" target="_blank">Microsoft staffer riles Firefox faithful by telling Mozilla to embrace Chrome | cnet</a></li></ul>
