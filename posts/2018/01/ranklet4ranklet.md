---
# Astrowind
title: 'ランキングツールの Rankletのサムネイル画像を最適化して、表示速度の改善をする方法'
excerpt: 'こんにちは！ Rankletで表示しているランキング記事のサムネイルの画像はその...'
updateDate: 2018-03-26
publishedDate: 2018-01-22
tags: 
  - ranklet

author: kikuchi
image: https://blog.ideamans.com/assets/69712a00514f8c34cf364e3fd29f54a276838bf5.jpg
category: ranklet

# カスタム
updatedAt: 2018-03-26 15:06:19
publishedAt: 2018-01-22 10:40:43
categories: 
  - ranklet

categoryLabels: 
  - 人気ランキング表示 Ranklet

authorId: kikuchi
subTheme: 
recommended: false
---

<p>こんにちは！</p>
<p>Rankletで表示しているランキング記事のサムネイルの画像はそのページのOGPの画像が標準で指定されています。ただ、OGP画像は800px以上（1200px推奨）で設定されていることが多いため、サムネイルとしての表示サイズに対して、実際の画像データのサイズが大きな画像となります。</p>
<p>そのため読み込みに時間がかかってしまうような場合もあり、以下のような対策をおこなっていただくことにより最適化をすることが可能です。</p>
<h4>※シックス・アパートさんのBlogではMovable Typeで管理されているサイトでの改善方法を記事にしてもらっています。</h4>
<p><a href="https://movabletype.net/blog/2017/04/ranklet-image.html" target="_blank">ランキングを表示できるRankletで指定したサイズの画像を表示させる方法</a></p>
<p> </p>
<h3>最適化の手順</h3>
<ol><li>header内のmeta情報に ranklet:image の記述を追加します<br>※通常のog:imageの内容より上に記載しないとRanklet側で優先されないのでご注意ください<br><img alt="SS 2018-01-22 11.32.35.jpg" src="https://blog.ideamans.com/assets_c/2018/01/SS%202018-01-22%2011.32.35-thumb-800xauto-256.jpg" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" width="800" height="153"></li><li>ranklet:imageの画像指定部分にランキング用サムネイルに最適な画像を指定します。<br><img alt="SS 2018-01-22 11.50.00.jpg" src="https://blog.ideamans.com/assets_c/2018/01/SS%202018-01-22%2011.50.00-thumb-800xauto-258.jpg" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" width="800" height="39"></li><li>ランキングの画像データに反映されたことを確認します。<br>※Rankletのデータ更新タイミングは、有料プランでは1時間に1回程度、無料プランでは数時間に1回の頻度でランキングデータの更新をしています。</li></ol>
<p> </p>
<h3>結果</h3>
<p>このブログもGoogleの「<a href="https://testmysite.withgoogle.com/intl/ja-jp" target="_blank">Test My Site</a>」で読み込み短縮が診断されました。<br>（まだまだ改善余地がありそうですが。。）<br><img alt="SS 2018-01-22 11.26.03.jpg" src="https://blog.ideamans.com/assets_c/2018/01/70d6ff7743abd8a7db33111f99ef4401288df4b4-thumb-1200xauto-254.jpg" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" width="905" height="501"></p>
<p>みなさんも是非お試しください！</p>
<p> </p>
<p>++++</p>
<p>Google Analyticsと自動連動で簡単ランキング設置サービス 「<a href="https://ranklet.com/" target="_blank">Ranklet</a>」、まずは無料プランでお試し！</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://ranklet.com/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','ranklet',{'nonInteraction':1});"><img src="https://blog.ideamans.com/assets/service-ranklet.jpg" alt="かんたんランキングツール Ranklet"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://ranklet.com/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','ranklet',{'nonInteraction':1});">かんたんランキングツール Ranklet</a></p>
<p class="serviceDesc">Googleアナリティクスのデータを元にあらゆるサイトで人気ページランキング表示ができます。</p>
<p class="serviceLink"><a href="https://ranklet.com/" target="_blank" onclick="ga('send','event','blog_servicelink','service-click','ranklet',{'nonInteraction':1});">https://ranklet.com/</a></p>
</div>
</div>
