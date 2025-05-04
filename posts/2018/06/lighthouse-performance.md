---
# Astrowind
title: '実録Lighthouseのスコア改善〜Performance(ユーザー待ち時間)編'
excerpt: 'LighthouseのPerformance(表示速度)スコア改善には、CDNの...'
updateDate: 2020-06-18
publishedDate: 2018-06-14
tags: 
  - lighthouse

  - pagespeed-insights

author: miyanaga
image: https://blog.ideamans.com/assets/performance-optimization.png
category: lighthouse

# カスタム
updatedAt: 2020-06-18 06:31:48
publishedAt: 2018-06-14 09:28:46
categories: 
  - lighthouse

  - pagespeed-insights

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

authorId: miyanaga
subTheme: 
recommended: false
---

<ul><li>LighthouseのPerformance(表示速度)スコア改善には、CDNの導入、画像の軽量化、画像の遅延読み込みが効く</li><li>そのカルーセルスライダー、本当に必要ですか？</li><li>有料テンプレートによる限界とアセットパイプラインでの最適化がこれからの課題</li></ul>
<h2>Performance(ユーザー待ち時間)改善の取り組み</h2>
<p>アイデアマンズのコーポレートサイトで、Lighthouseのスコア改善の取り組みを行いました。</p>
<p>Lighthouseの採点カテゴリ5つのうち、Performance(ユーザーの待ち時間)の改善について、行ったこととその成果などをご紹介します。</p>
<p><img alt="performance-optimization.png" src="https://blog.ideamans.com/assets/performance-optimization.png" width="844" height="316" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>

<h2>CDN</h2>
<p>まずはCDNを導入しました。アイデアマンズのウェブサイトでは、GMOさんが販売する<a href="https://saas.gmocloud.com/service/cdn/" title="SiteLock CDN">SiteLock CDN</a>を導入してみました。</p>
<p>CDNの比較についてはまた別の記事で詳しく書こうと思います。SiteLock CDNを選択したのは、試したかったというのが一番の理由ですが、次の利点を評価しています。</p>
<ul><li><span style="text-decoration: underline;"><strong>定額制</strong></span>であること(うちの場合はアクセス数が少ないので従量制の方がお得ですが...)</li><li><span style="text-decoration: underline;"><strong>国内の企業が取り扱うサービス</strong></span>で<span style="text-decoration: underline;"><strong>インターフェースも日本語化</strong></span>されていること</li><li>1ドメインのみに気軽に適用できること</li><li><span style="text-decoration: underline;"><strong>キャッシュクリアが速い</strong></span>こと</li></ul>
<p>転送中のgzip圧縮やHTTP/2対応も自動で行ってくれるので、静的なサイトであればCDNの導入は本当にお勧めです。</p>
<p><span style="text-decoration: underline;"><strong>CDNの導入だけで約27%のスコア改善</strong></span>が見られました。</p>
<h2>画像の軽量化</h2>
<p>弊社が提供するJpeg画像の最適化プログラム<a href="https://core.lightfile.net/" title="LightFile">LightFile</a>と、PNG画像をフルカラーから256色に減色する処理を行いました。</p>
<p>フルカラーから256色への減色は、もともとスクリーンショットなど色数の少ない画像がほとんどだったので<a href="https://www.imagemagick.org/script/index.php" title="ImageMagick">ImageMagick</a>で行いました。パンダでお馴染みの<a href="https://tinypng.com/" title="TinyPNG">TinyPNG</a>を使うのもよいと思います。</p>
<h2>画像の遅延読み込み</h2>
<p><a href="https://github.com/toddmotto/echo" title="Echo.js">Echo.js</a>というライブラリを用いて、画像を遅延読み込みするようにしました。</p>
<p>日本語での紹介記事も多数あります: <a href="https://syncer.jp/echojs" title="jQuery不要の軽量レイジーロード！echo.jsの使い方">jQuery不要の軽量レイジーロード！echo.jsの使い方</a></p>
<p>ただし、ファーストビューの画像は遅延読み込みから除外して通常通りに表示するとより効果的だと思います。今後の課題です。</p>
<h2>カルーセルスライダーの除去</h2>
<p>サイトの内容を削ってしまうのは表示高速化の試みとしてはチートなのですが、ファーストビューのカルーセルスライダーはパフォーマンス上はかなりのお荷物です。</p>
<p>アイデアマンズのサイトでも、なんとなく「ないと寂しいなー」くらいの気持ちで利用していましたが「まあ自己満足で誰も見てないよな」と思い切って捨てました。</p>
<p><img alt="performance-no-slider.png" src="https://blog.ideamans.com/assets/performance-no-slider.png" width="787" height="396" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>これによってまず、大きな画像の読み込みが不要になります。</p>
<p>次にカルーセルスライダーを実現するJavaScriptも不要になりました(ファーストビュー以外で利用する場合はライブラリを非同期読み込みに変更するができます)。</p>
<p>コンポーネントのレンダリングも不要になり、大幅なスコア改善に繋がりました。</p>
<h2>その他の対応 / Expiresヘッダの指定</h2>
<p>他にもすぐには使われないJavaScriptの遅延読み込みなど、細かな改善をいくつか行いました。</p>
<p>その結果、<span style="text-decoration: underline;"><strong>15点→60点のスコアアップ</strong></span>に成功しました。</p>
<p>画像やCSS、JavaScriptなど静的なファイルはブラウザキャッシュを長め(1年など)に設定するように推奨します。HTTPのExpiresやCache-Controlヘッダの指定を適切に行う対応です。</p>
<p>ただし、Lighthouseの行うテストは初回アクセス(ブラウザキャッシュなし)をシミュレートするので、この指摘に従ってもスコア自体は改善しません。</p>
<p>実際のユーザーが次のページに遷移したり、ページを再訪したときに大きな効果が現れます。</p>
<h2>60点の限界とこれからの課題</h2>
<p>以上、いろいろと試みましたが、60点が限界でした。</p>
<p>アイデアマンズのWebサイトは、お気づきの方もいるかもしれませんが、Bootstrapベースの有料テンプレートを元にカスタマイズしています。</p>
<p>Bootstrapとその有料テンプレートは、様々なコンポーネントや表示パターンが事前に準備されているので、Webサイトの制作や運営の効率はよいです。パターンを探してそれにHTMLを記述すれば、多くの場合、新たなデザインやCSS・JavaScriptのコーディングは不要になるので。</p>
<p>その反面、利用されないCSSやJavaScriptもユーザーに読み込ませてしまうので、待ち時間を強いてしまうことに繋がります。アイデアマンズには現在、常勤のデザイナーがいないため、これ以上のパフォーマンス改善は、短期的に困難と判断しています。</p>
<p>Bootstrapと有料テンプレートもアセットパイプラインに組み込んで、必要なコンポーネントだけ組み込む仕組み作りが今後の課題です。</p>
<p>Webサイトの命であるコンテンツや機能性、それを支える運営体制、そして今回のパフォーマンスは長期的にバランスよく改善していく必要があります。</p>
<p><span style="font-size: 1.5em;">ご相談ください</span></p>
<p>アイデアマンズではLighthouseを使ったレポート作成や競合調査、スコア改善のご相談を承っています。</p>