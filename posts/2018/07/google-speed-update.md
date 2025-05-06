---
# Astrowind
title: 'Google Speed Updateで表示高速化しようと思ったら、まずは画像軽量化からはじめましょう'
excerpt: '【注】情報が錯綜してるようですが、Googleの金谷さんがツイートしています。当...'
updateDate: 2020-06-18
publishedDate: 2018-07-03
tags: 
  - seo

  - web-imaging

  - lightfile

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-07-03-google-speed-update-ogp.jpg
category: seo

# カスタム
updatedAt: 2020-06-18 10:29:21
publishedAt: 2018-07-03 11:50:00
categories: 
  - seo

  - web-imaging

  - lightfile

  - performance

categoryLabels: 
  - SEO

  - Web画像最適化

  - 画像軽量化AI LightFile

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>【注】情報が錯綜してるようですが、Googleの金谷さんがツイートしています。当初と違うことはないようです。</p>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="ja" dir="ltr">Speed Update についての補足です。<br>１）アナウンスしている通り「ユーザーに本当に遅い体験を提供しているようなページについてのみ影響し」ます。<br>２）それは遅さに応じて段階的に適用されます<br>３）今月ローンチ予定です。<br>もしすでに十分速いサイトの場合、改善しても特に何も変化は起きません。 <a href="https://t.co/JcReDliMGw">https://t.co/JcReDliMGw</a></p>
-- 金谷 武明 - Takeaki Kanaya (@jumpingknee) <a href="https://twitter.com/jumpingknee/status/1014021933216641025?ref_src=twsrc%5Etfw">2018年7月3日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<p>もう少し情報を集めたいと思います。</p>
<p>--2018/07/03追記ここまで</p>
<p> </p>
<p>2018年7月から開始されるGoogle Speed Update、<del datetime="2018-07-05T08:30:47+09:00">どうも当初と少し違うところが出てきているようです。日本国内でSEOな人として有名な方々が、こぞって以下の部分についてアルゴリズムが異なると情報発信しています、</del>当初と同じく遅いサイトに限定して検索順位に影響があるとのことです。</p>
<blockquote>
<p><span>この "Speed Update" （と私たちは呼んでいます）は、ユーザーに本当に遅い体験を提供しているようなページについてのみ影響し、ごくわずかな割合のクエリにしか影響しません。 </span><br><a href="https://webmaster-ja.googleblog.com/2018/01/using-page-speed-in-mobile-search.html" target="_blank"><em>Google ウェブマスターブログより引用</em></a></p>
</blockquote>
<h2>SEOとして、検索順位に影響がある？</h2>
<p><del datetime="2018-07-05T08:31:43+09:00">当初「明らかに表示に時間がかかる場合のみ、検索順位に影響がある」という認識でした。しかし、表示速度が速ければ、プラスアルファの要因として用いられるような流れになっています。</del></p>
<ul><li><a href="https://www.suzukikenichi.com/blog/the-faster-you-can-make-your-pages-the-more-speed-uptate-can-take-that-into-account/" target="_blank">今月導入される Google Speed Uptate は速ければ速いほど評価が上がるアルゴリズムだった｜海外SEO情報ブログ</a></li><li><a href="https://www.sem-r.com/google-2010/20180702025520.html" target="_blank">Google Speed Update、読込速度改善で検索順位上昇も｜SEMリサーチ</a></li></ul>
<p><del datetime="2018-07-05T08:31:43+09:00">上記の2つのサイトでは、それぞれ当初と少し違いがあるというようなニュアンスで伝えています。SEMリサーチの渡辺さんは、アイレップの渡辺さんだと思うのですが、ずっと昔からSEOの情報を発信されていますね。それこそHTML4.01以前からだと思うので、相当な経験値と知識力がある方だと思います。</del></p>
<p><span style="color: #ff0000;">上記の２サイトでも、「表示が速ければ上位表示される」ということではなく「著しく遅い場合に、検索順位に影響が出る」というようになっております。情報が変わっておりますので、ぜひご確認ください。</span></p>
<h2>表示高速化は「かんたん」と「かんたんじゃない」がある</h2>
<p>表示高速化は、いろいろとやることが多いものです。しかも範囲もとても広く、深い知識が必要になるものもあります。まだあまり表示高速専門家というのは確立されていませんが、アイデアマンズでは昨年から「表示高速化」をメインとした新規事業を展開しています。</p>
<ul><li><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank">表示高速化に関するお問い合わせはこちら</a></li></ul>
<h2>導入がかんたんなもの</h2>
<p>ここでは導入がかんたんなものを紹介していきます。ただし、システム構成や要件によってはかんたんじゃないケースも多くあります。あくまで参考としてチェックしてください。</p>
<p><img alt="2018-07-03-google-speed-update-01.png" src="https://blog.ideamans.com/assets/2018-07-03-google-speed-update-01.png" width="1200" height="200" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h3>画像最適化ツールの導入</h3>
<p>CMS（コンテンツ・マネジメント・システム）のプラグインを入れれば終わるものや、Photoshopで画質を下げて上書きするなどすれば対応できます。自動化したい場合は、弊社のLightFileを使えば「わずか5分」で導入完了しちゃいます。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p>他にも、以下のサービスやツールを利用すると画像軽量化が可能です。</p>
<ul><li><a href="https://www.jpegmini.com/" target="_blank">JPEGmini</a></li><li><a href="https://tinypng.com/" target="_blank">TinyPNG</a></li><li><a href="https://tinypng.com/" target="_blank">Crunch</a></li><li><a href="https://compressor.io/" target="_blank">Compressor.io</a></li><li><a href="https://cloudinary.com/" target="_blank">Cloudinaly</a></li></ul>
<h3>CDNの導入</h3>
<p>静的なウェブサイトであれば、CDN（コンテンツ・デリバリー・ネットワーク）を入れましょう。これによりインフラ側の対応は完了します。CDNは専門家の知識が必要なケースが多いです。</p>
<ul><li><a href="https://aws.amazon.com/jp/cloudfront/" target="_blank">AWS CloudFront</a></li><li><a href="https://saas.gmocloud.com/service/cdn/" target="_blank">SiteLock CDN</a></li><li><a href="https://www.akamai.com/jp/ja/cdn/" target="_blank">Akamai CDN</a></li><li><a href="https://jp.limelight.com/" target="_blank">ライムライト</a></li><li><a href="https://www.fastly.com/" target="_blank">Fastly</a></li><li><a href="https://www.redbox.ne.jp/" target="_blank">レッドボックス</a></li></ul>
<h3>トップページのカルーセル（スライダー）をやめる</h3>
<p>日本企業のウェブサイトトップページは、カルーセルが導入されているケースが非常に多いです。カルーセルはDOM操作と呼ばれる描画を行うため、非常に動作が重くなります。カルーセルやめて、ビジュアルを作り変えましょう。</p>
<ul><li>カルーセルをやめて、一枚絵にする</li><li>カルーセルをやめて、動画を流す（外部ストリーミングサーバを利用すること）</li></ul>
<h2>導入がかんたんじゃないもの</h2>
<p>ここでは導入するときに開発が必要になったりするケースを説明します。これも当てはまらないケースもあると思うので、参考まで。</p>
<p><img alt="2018-07-03-google-speed-update-02.png" src="https://blog.ideamans.com/assets/2018-07-03-google-speed-update-02.png" width="1200" height="200" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h3>HTML/CSS/Javascriptのソースコードをファインチューン</h3>
<p>画面に描画されるのは、ソースコードに書かれているとおりに表示がされます。その中でも、文書構造を表すHTML、装飾をつかさどるCSS、インタラクティブな操作やデータのやり取りなどをさまざまなことを行えるJavascriptは、表示速度に多くの影響を与えます。ファインチューンすれば、確実に高速化できます。</p>
<ul><li><a href="https://developers.google.com/speed/pagespeed/module/" target="_blank">Pagespeed module (Apache or nginx)</a></li></ul>
<h3>SQLのクエリを減らす</h3>
<p>動的なサイトでは、データベースに情報を投げたり取り出したりして、ページの表示を行います。その場合、表示するときに「これ表示したい」とシステムに投げ、「じゃあ、これでよろしく」という感じで表示するものを渡す、というようになります。そのため、問い合わせする→回答する　というセットがあり、このやり取りが多いと表示するまでに時間がかかります。DBにインデックスをもたせたり、パーシャルキャッシュを作ったりすれば、大幅に改善することが可能です。</p>
<ul><li><a href="https://gihyo.jp/dev/serial/01/mysql-road-construction-news/0007" target="_blank">第7回　スロークエリーログを使って遅いクエリを収集する | gihyo.jp</a></li><li><a href="https://aws.amazon.com/jp/rds/" target="_blank">AWS RDS</a></li></ul>
<h3>AMP対応する</h3>
<p>Google検索のみに影響ですが、AMP対応することで検索結果でタップされたページが高速表示されます。bingとかでは意味がありません。AMP対応はGoogle対応のひとつなので、検索エンジン対策としてはやるべきものだと思います。</p>
<ul><li><a href="https://www.ampproject.org/ja/" target="_blank">Accelerated Mobile Pages Project - AMP</a></li></ul>
<h2>最後に</h2>
<p>いかがでしたでしょうか？Google Speed Updateに限らず高速化は進めるべきです。<del datetime="2018-07-05T08:33:37+09:00">検索順位に影響があるとなるとちょっと優先順位が変わりそうです</del>。表示高速化のタスクは非常に広範囲ですので、優先順位をつけて一歩一歩進めていくのがよいです。</p>
<p> </p>
