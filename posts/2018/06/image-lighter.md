---
# Astrowind
title: '画像軽量化したいけど、なかなかできない３つの問題。コンテンツ担当者とシステム担当者の悩みを解決するには、ツールやサービスを利用するのがオススメ。'
excerpt: 'Webサイトで利用する画像は、しっかりと軽量化されていますか？Photoshop...'
updateDate: 2019-01-21
publishedDate: 2018-06-26
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/assets/2018-06-26-image-lighter-01.jpg
category: web-imaging

# カスタム
updatedAt: 2019-01-21 10:31:37
publishedAt: 2018-06-26 12:00:00
categories: 
  - web-imaging

  - lightfile

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

authorId: nose
subTheme: 
recommended: false
---

<p>Webサイトで利用する画像は、しっかりと軽量化されていますか？Photoshopや、ウェブサービスなどを利用して、手動で画像軽量化されている方も多いと思います。バッチ処理を組み込める方は、バッチ処理でもよいですよね。</p>
<p>画像軽量化は、やったほうがいいのにやらないものの一つです。<strong>ほとんどの人は「やったほうがいい」と思うのに、実際には「できていない」ということが多い</strong>のです。</p>
<h2>結論：画像軽量化は、システム化すれば解決する</h2>
<p><img alt="2018-06-26-image-lighter-01.jpg" src="https://blog.ideamans.com/assets/2018-06-26-image-lighter-01.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>結論からすると、仕組みになっていれば解決します。Webはそもそもシステムの上に成り立っているものなので、システム化すること自体は土台としては申し分ありません。</p>
<p>システム化するとなると、以下のパターンに絞られます。方法は、また別記事で書こうと思います。</p>
<ol><li>クラウドサービスを利用して、API経由で画像軽量化する</li><li>CMSやシステムにプラグインを入れて、画像軽量化する</li><li>インストール型のツールを入れて、画像を軽量化する</li></ol>
<h3>解決策の例</h3>
<p>解決策はシステム化することなので、以下の流れで解決するのがベストです。</p>
<ol><li>システム担当者がツールまたはサービスを選定する</li><li>開発環境やサンドボックスな環境で、仕様や画質・ファイル削減量を確認する</li><li>画質とファイルサイズのパターンを複数だし、コンテンツ担当者が画質を確認する</li><li>選定したツールまたはサービスを導入する</li></ol>
<h2>画像軽量化のシステム化を妨げる理由</h2>
<p><img alt="2018-06-26-image-lighter-02.jpg" src="https://blog.ideamans.com/assets/2018-06-26-image-lighter-02.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">画像軽量化には、いくつかの問題があります。これらの問題を解決するのは、あまり簡単ではありません。なぜなら画像が問題ではなく、人の問題だからです。</p>
<ol><li>担当者が複数存在するケース</li><li>人力でなんとかなるケース</li><li>責任が持てないので、対応を保留するケース</li></ol>
<h3>画像軽量化をする理由</h3>
<p>画像軽量化をする理由は、一般的には以下のような理由がほとんどです。</p>
<ol><li>サーバのディスク容量が足りない</li><li>転送量が多い、転送料金のコストが高い</li><li>ウェブページの表示速度が遅い</li></ol>
<p><strong>最近は表示速度でのお問い合わせが多いですが、サーバのディスクフル問題は運営しているウェブサイトの特性によっては、かなり悩まされることが多い</strong>ものです。理由がわかったところで、それぞれの問題を一つづつ、中身をみていきましょう。</p>
<h3>担当者が複数存在するケース</h3>
<p><img alt="2018-06-26-image-lighter-03.jpg" src="https://blog.ideamans.com/assets/2018-06-26-image-lighter-03.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">ウェブサイトの運営を担当している人が複数の場合、譲り合いなどで課題の取り組みが進まないケースがあります。大きなウェブサイトほどこの傾向が強く、なかなか先に進みません。</p>
<p>また、理由によって担当者が変わります。サーバのディスク容量が課題の場合、ネットワーク担当者やシステム担当者が主担当になります。画質を落として一気に処理をすれば軽くなるが、コンテンツの品質はウェブサイト担当者側に委ねられるため、すんなりと作業が進みません。「<strong>品質と容量のはざま</strong>」でなかなか解決しないのです。</p>
<h3>人力でなんとかなるケース</h3>
<p><img alt="2018-06-26-image-lighter-04.jpg" src="https://blog.ideamans.com/assets/2018-06-26-image-lighter-04.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">画像数が少ない場合は、人力での対応でも十分です。Adobe Photoshopには、ドロップレットという独立したデスクトップアプリケーションのようなものを作ることが可能です。これを利用すれば、一定の画質でmeta情報の削除などもできるようにすれば、画像をドラッグアンドドロップで一気に処理してくれます。しかし、これはその人のPC内の話であり、担当者が複数いる、外部の方に依頼しているケースなどの場合、やはり完全に画像軽量化を行うことが難しいです。</p>
<p>JPEGminiや、TinyPNGといったウェブサイトを利用して、画像軽量化する事もできます。これも<strong>手作業なので漏れがあったり、画質設定ができないので「軽くなったけど荒くなった」問題</strong>が発生します。</p>
<p><strong>JPEGminiは高画質だけどあまり軽量化しない、TinyPNGはとても軽量化されるけど画質がかなり落ちる</strong>、という特徴があります。</p>
<h3>責任が持てないので、対応を保留するケース</h3>
<p><img alt="2018-06-26-image-lighter-05.jpg" src="https://blog.ideamans.com/assets/2018-06-26-image-lighter-05.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">いわゆる<strong>自分の責任範疇を超えるケース</strong>です。上述の複数の担当者問題があるのですが、この際に該当する担当者がいないケースに発生します。例えば、以下のようなケースです。</p>
<ol><li>システム担当者に、画像が重いからなんとかしてほしいというケース</li><li>コンテンツ担当者に、表示速度が遅いから速しようというケース</li></ol>
<p>これも、それぞれ困るケースを考えていきましょう。</p>
<h4>システム担当者に、「画像が重いからなんとかしてほしい」というケース</h4>
<p>画像のファイルサイズは、画質を落とすことで軽量化できます。しかし、これは画像が劣化することと同義です。<strong>システム担当者は、コンテンツのクオリティをどのぐらいにするかを決めることができません。</strong>エイヤッ！でやってしまうこともできますが、責任が持てないことをやるのは後ろめたいものです。</p>
<h4>コンテンツ担当者に、「表示速度が遅いから速くしよう」というケース</h4>
<p>表示速度の高速化は、非常に多岐にわたる作業です。その中でも必ずやらなければならないのが画像の軽量化。<strong>ウェブサイト内にどのぐらいの画像があるのか、軽量化するとどのぐらい変わるのか、というのを試算するには検証をしなければなりません。</strong>そしてこれはシステムに詳しくないと難しい課題であり、検証が進まないケースがほとんどです。</p>
<h2>画像軽量化の解決は、ツールを使うのがかんたん</h2>
<p><img alt="2018-06-26-image-lighter-06.jpg" src="https://blog.ideamans.com/assets/2018-06-26-image-lighter-06.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p style="text-align: center;"><span style="color: #888888;">インストール型からクラウドサービス型、CMSプラグインなどさまざまなものが存在する</span></p>
<p><strong>ツールやサービスを利用して画像軽量化すると、仕様はそのツールやサービスに依存するようになります。そうすると、どんな事ができるのか、どこまでできるのか、というのが目に見えるようになり判断がしやすくなります。</strong></p>
<p>視覚化できれば、判断は非常に早くなります。そして、仕様もはっきりと決まります。たったこれだけのことですが、画像軽量化ではこれができないケースが非常に多く、進捗が出ないことがとても多く起きています。</p>
<h3>画像軽量化は人の仕事ではない、ツールに任せよう</h3>
<p><strong>画像軽量化は、画質の劣化との戦い</strong>です。基本的には、「画質を下げればファイルサイズが軽くなる」のです。しかし、<strong>一週間で数百枚以上の画像が登録されるECサイトなどでは、これを人力でやるのは非常に困難</strong>です。ある程度のしきい値を決め、ツールやサービスにまかせて自動化することが重要です。</p>
<p> </p>
<h2>最後に</h2>
<p>お客様のところにお伺いすると、コンテンツ担当者とシステム担当者のお二人がご同席されるケースが多いです。これは、「担当者が複数存在するケース」にあたります。同じ悩みを抱えている企業様は非常に多いので、ぜひお気軽にお問い合わせください。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
