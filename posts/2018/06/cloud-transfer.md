---
# Astrowind
title: '画像軽量化でコストが下がる？！例えば転送量20TB(月)だとすると、どのぐらいの差がでるのか？'
excerpt: 'クラウドの転送量は、定額制のサービスもありますが、従量課金の場合もあります。Am...'
updateDate: 2020-06-18
publishedDate: 2018-06-22
tags: 
  - web-imaging

  - cloud-cost

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-06-22-cloud-transfer-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2020-06-18 10:54:39
publishedAt: 2018-06-22 16:00:00
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

<p>クラウドの転送量は、定額制のサービスもありますが、従量課金の場合もあります。Amazon Web Serviceは従量課金制になっています。手軽に始められるクラウドサービスですが、サイトの人気が出てくると転送量＆転送料が気になり始めます。</p>
<h2>AWSでは、$0.140/GBで転送料金がかかる</h2>
<p>AWSでは、見積もりを簡単に作ることができるシステムがあります。これを利用して、いくらくらいの費用感になるのか見てみましょう。</p>
<ul><li><a href="http://calculator.s3.amazonaws.com/index.html?lng=ja_JP" target="_blank">SIMPLE MONTHLY CALCULATOR</a></li></ul>
<p style="text-align: center;"><span style="color: #888888;"><img alt="2018-06-22-cloud-transfer-02.jpg" src="https://blog.ideamans.com/assets/2018-06-22-cloud-transfer-02.jpg" width="1265" height="1024" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">項目ごとに設定することで見積もりがわかる</span></p>
<p>転送量を月間20TBとして計算します。なお、毎月アウトバウンド1GBは無料です。</p>
<ul><li>転送量（月）：20TB</li><li>見積り金額（月）：$3095.29</li></ul>
<p><strong>$1＝110円で計算すると、340,481円となります。</strong>なかなかの回線費ではないでしょうか。ECサイトやメディアサイトなど、人気があるサイトの場合、このくらいの転送量はかかってしまいます。</p>
<p> </p>
<h2>LightFileで画像最適化して、ファイルサイズを落とすと転送料金はさがる</h2>
<p>画像は、ウェブページの表示に必要なファイルダウンロードの半分以上を占めているケースが非常に多いです。そのため、<strong>画像を軽量化することで、30万以上かかっていた費用を削減することが可能</strong>になります。LightFileの場合、JPEGF画像を平均20%以上も軽量化することができます。</p>
<p>少しラフな計算にはなってしまいますが、20TBを20%ほど減らせれば、16TBになります。その場合のAWS見積もりシステムで計算してみます。</p>
<p style="text-align: center;"><img alt="2018-06-22-cloud-transfer-03.jpg" src="https://blog.ideamans.com/assets/2018-06-22-cloud-transfer-03.jpg" width="1249" height="394" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">16TBでの見積金額</span></p>
<p><strong>16TBで、$2487.04となります。110円換算で、273,574円。</strong>だいぶ下がりました。クライアントキャッシュなどでもっと下げることができますが、ウェブサイトに新規訪問ユーザーがアクセスすることが重要ですので、基本的には転送量は増える傾向にあります。</p>
<h2>最後に</h2>
<p>いかがでしたでしょうか。クラウドのインフラを利用するのは、本当に便利だし、あっという間に構築できてしまします。以前のようにハードウェアを用意する必要がないというのは、本当に快適です。転送量については、国内のクラウドベンダーは定額制などもありますので、色々なサービスを検討するのが良いです。</p>
<p>画像の軽量化は転送料金に良い影響があります。さらに、閲覧者にはウェブページを今までよりも高速に表示できるメリットもあります。表示高速化の際に実施する第一歩でもあるので、ぜひ取り組んでいきましょう。</p>
<p> </p>

