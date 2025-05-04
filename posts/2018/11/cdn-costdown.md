---
# Astrowind
title: 'CDNの料金を大幅コストダウン！AWS CloudFrontなどの従量課金型のCDNなら、LightFileの画像軽量化でグッとお得に！'
excerpt: ' 表示高速化といえばCDN (Content Delivery Network)...'
updateDate: 2020-06-18
publishedDate: 2018-11-29
tags: 
  - web-imaging

  - cloud-cost

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-11-29-trafic-costdown-ogp.jpg
category: lightfile

# カスタム
updatedAt: 2020-06-18 10:55:42
publishedAt: 2018-11-29 12:13:00
categories: 
  - web-imaging

  - cloud-cost

  - lightfile

categoryLabels: 
  - Web画像最適化

  - クラウドコスト削減

  - 画像軽量化AI LightFile

authorId: nose
subTheme: 
recommended: false
---

<p><img alt="2018-11-29-trafic-costdown-ogp.jpg" src="https://blog.ideamans.com/assets/2018-11-29-trafic-costdown-ogp.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>表示高速化といえばCDN (Content Delivery Network) ですよね！ここ数年でグッと身近になってきた感じがあるCDNですが、導入すると非常に表示が高速化されます。今回は、導入する際に計算が難しい「従量課金の場合、どのぐらいの費用になるの？」という部分を説明していきます。</p>
<p>なお、弊社の画像軽量化ツール「LightFile」を導入して、転送料金が月額10万以上下がったケースも出てきています。コストダウン、しっかりできちゃいます。</p>
<h2>CDNってなに？</h2>
<blockquote>
<p>Content Delivery Network</p>
<p>CDNとは、コンテンツデリバリネットワーク（Content Delivery Network）の略で、世界中に張り巡らされたCDN専用の配信ネットワーク（CDNプラットフォーム）を利用して、Webサイトにアクセスしようとするエンドユーザに最も近いPoP（配信拠点）から効率的かつ高速にWebを配信する仕組みです。</p>
</blockquote>
<p>引用元： <a href="https://www.cdnetworks.co.jp/about/" target="_blank">CDN（コンテンツ・デリバリ・ネットワーク）とは／What is CDN | CDNetworks</a></p>
<p>CDNは、閲覧者が現在利用しているサーバに直接アクセスしてくれるのを、もっと近いところにアクセスするようにしてくれるシステムです。もしスターバックスコーヒーに例えてみましょう。</p>
<h3>CDN導入前</h3>
<ul><li>スターバックスコーヒーが飲みたい！</li><li>アメリカのワシントン州シアトルの店舗にいく</li><li>コーヒーを注文して飲む</li></ul>
<h3>CDN導入後</h3>
<ul><li>スターバックスコーヒーが飲みたい！</li><li>日本のスターバックス店舗にいく</li><li>コーヒーを注文して飲む</li></ul>
<p>導入前は、飛行機に乗ってアメリカまでいかなければならないのが、導入後は近くにある店舗にいけばいいだけになります。このように、注文するところが物理的に近くなるのがCDNの一番のメリットです。</p>
<h2>実際にどのぐらいコストダウンできるのか</h2>
<p>画像軽量化だけで、ほんとにコストダウンできるの？はい、できちゃいます。すべてのウェブサイトに該当するわけではないですが、画像を多く利用しているECサイトなどではコストダウンが可能です。</p>
<h3>調査に利用した条件</h3>
<ol><li>月間転送量</li><li>画像削減率</li><li>転送時の画像割合</li></ol>
<p>従量課金の計算には、AWSの見積ツールを利用しました。</p>
<ul><li><a href="http://calculator.s3.amazonaws.com/index.html?lng=ja_JP" target="_blank">AWS SIMPLE MONTHLY CALCULATOR</a></li></ul>
<p style="text-align: center;"><img alt="2018-11-29-trafic-costdown-01.jpg" src="https://blog.ideamans.com/assets/2018-11-29-trafic-costdown-01.jpg" width="1280" height="609" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">AWSの見積ツールは誰でも利用ができて非常に便利</span></p>
<h3>CDNのコストダウン (画像軽量化)</h3>
<p>では、転送量毎にどのぐらいの費用になるのかチェックしていきます。10TBよりも少ない場合はもともとそんなに費用がかからないため、今回は10TBを最も少ない転送量として表にまとめました。</p>
<div class="tablewrap">
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>月間転送量</th><th>画像削減率</th><th>転送時の画像割合</th><th>削減された転送量</th><th>削減前の転送料金</th><th>削減後の転送料金</th><th>削減した費用</th></tr>
<tr>
<td style="text-align: right;"><strong>10TB</strong></td>
<td style="text-align: right;">60%</td>
<td style="text-align: right;">63%</td>
<td style="text-align: right;"><strong>1.89TB</strong></td>
<td style="text-align: right;">¥103,938</td>
<td style="text-align: right;">¥84,198</td>
<td style="text-align: right;"><span style="color: #ff0000;">-¥19,740</span></td>
</tr>
<tr>
<td style="text-align: right;"><strong>30TB</strong></td>
<td style="text-align: right;"><span>60%</span></td>
<td style="text-align: right;"><span>63%</span></td>
<td style="text-align: right;"><strong>5.67TB</strong></td>
<td style="text-align: right;">¥337,360</td>
<td style="text-align: right;"><span>¥276,048</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">-¥61,312</span></td>
</tr>
<tr>
<td style="text-align: right;"><strong>100TB</strong></td>
<td style="text-align: right;"><span>60%</span></td>
<td style="text-align: right;"><span>63%</span></td>
<td style="text-align: right;"><strong>18.9TB</strong></td>
<td style="text-align: right;">¥1,094,300</td>
<td style="text-align: right;"><span>¥889,927</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">-¥204,373</span></td>
</tr>
<tr>
<td style="text-align: right;"><strong>300TB</strong></td>
<td style="text-align: right;"><span>60%</span></td>
<td style="text-align: right;"><span>63%</span></td>
<td style="text-align: right;"><strong>56.7TB</strong></td>
<td style="text-align: right;">¥2,678,236</td>
<td style="text-align: right;"><span>¥2,230,936</span></td>
<td style="text-align: right;"><span style="color: #ff0000;">-¥447,300</span></td>
</tr>
</tbody>
</table>
</div>
<p>画像の削減率は、多くのウェブサイトで削減が可能な見込みな数値として「60%」としています。転送時の画像割合は、Amakaiさんが公表している「63%」を利用いたしました。</p>
<p><strong>アパレルECサイトや、画像の多いECサイト・ウェブサイトの場合は、「転送時の画像割合」が90%近くになることも一般的</strong>です。その場合は、より多くのコストダウンができることになります。</p>
<p>弊社の画像軽量化ツールLightFileの場合、月額ライセンス料が１万円〜となっているため、月間転送量が10TBを超えてくるとコストダウンが可能となります。<strong>アパレルECサイトに導入が多いので、弊社のお客様の場合は「転送時の画像割合」が90%前後となっていて、上記の10TBのケースでも3万円弱のコストダウン</strong>ができています。</p>
<h2>見た目が変わらず、表示速度が早くなり、コストダウンができるのが画像軽量化</h2>
<p>ウェブサイトで使用されている画像の多くは、無駄な情報をたくさん持っている状態です。一部のWebディベロッパーでは適切に軽量化が施されていますが、数パーセントにも満たないと感じています。不必要な情報があるために、表示も遅く、転送料金もかかっているというのが現実なのです。</p>
<p>画像は表示されていれば気にすることはないのですが、実際には非常に無駄の多い情報でもあります。このあたりは事実を知ることで、改善できる箇所だと考えています。</p>
<p> </p>
<h2>画像軽量化ツールは低価格なものがオススメ</h2>
<p>弊社のLightFile以外にも、画像軽量化ツールはいろいろとあります。多くは従量課金型であり、ファイル数などに依存します。そのため、商品画像が多いECサイトで導入すると、商品が増えるごとに費用が発生していきます。また、CDNも合わせて提供していることが多く、その場合はCDNの費用が下がったとしても画像軽量化ツールの利用料が増えてしまい、結果としてコストダウンできないということも考えられます。</p>
<p>画像は増え続けるものなので、月額費用をしっかりと検討して、どのようなツールが良いかを検討することが重要です。そのためには、現在どのぐらいの画像がサーバにあるのか、月間の転送量はどのぐらいなのかを把握することが重要です。</p>
<p> </p>
<h2>最後に</h2>
<p>いかがでしたでしょうか。実際に画像軽量化でコストダウンができているお客様がいるため、今回のそのご紹介となりました。LightFileは定額＆低額なので、コストダウンの差額をしっかりと別予算として検討することができます。重たい画像で幸せになる人は誰もいないので、ぜひ取り組んでいきましょう。</p>
<p>無料で画像軽量化の診断レポートをお送りしています。お気軽に以下のフォームよりリクエストください！</p>

