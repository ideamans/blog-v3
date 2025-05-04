---
# Astrowind
title: 'OGP画像の指定には、&lt;meta property=&quot;og:image&quot; content=&quot;OGP画像のURL&quot;&gt;と指定しよう！'
excerpt: 'Rankletでは、OGP画像をサムネイルに利用する仕様になっています。OGP画...'
updateDate: 2018-09-20
publishedDate: 2018-09-20
tags: 
  - ranklet

author: nose
image: https://blog.ideamans.com/assets/2018-09-20-meta-ogp-image-ogp.jpg
category: ranklet

# カスタム
updatedAt: 2018-09-20 17:33:42
publishedAt: 2018-09-20 17:25:00
categories: 
  - ranklet

categoryLabels: 
  - 人気ランキング表示 Ranklet

authorId: nose
subTheme: 
recommended: false
---

<p>Rankletでは、OGP画像をサムネイルに利用する仕様になっています。OGP画像が指定されていないと、Rankletはサムネイル画像を指定することができないので、ぜひ設定をお願いします！</p>
<h2>OGP画像の設定方法</h2>
<p>アイデアマンズブログでは、こんな感じで設定しています。実際に記事詳細ページで設定している内容です。</p>
<p><strong>&lt;meta property="ranklet:image" content="https://blog.ideamans.com/assets_c/2018/09/2018-09-20-meta-ogp-image-ogp-thumb-120xauto-768.jpg"&gt;</strong><br><strong>&lt;meta property="og:image" content="https://blog.ideamans.com/assets_c/2018/09/2018-09-20-meta-ogp-image-ogp-thumb-1200xauto-768.jpg"&gt;</strong></p>
<p>metaタグは、設定する内容によって記述が変わるので注意が必要です。OGP画像を指定する場合は、「property属性」を利用するようにしましょう。</p>
<h3>Rankletでは、OGP画像じゃないものをサムネイル指定したい</h3>
<p>OGP画像はサイズが大きいし、ランキングでは小さいサムネイルを表示したい...。という方は、ranklet:image を指定してみてください。</p>
<p><strong>meta property="ranklet:image"</strong></p>
<p>このメタタグを、og:image の前に記述いただくと、Rankletでは優先して利用するようになります。表示速度も変わりますので、オススメな設定です。</p>
<ul><li><a href="https://blog.ideamans.com/2018/01/ranklet4ranklet.html">ランキングツールの Rankletのサムネイル画像を最適化して、表示速度の改善をする方法</a></li></ul>
<h3>metaタグの属性値は複数ある</h3>
<p>余談ですが、metaタグの属性値をいくつかご紹介します。</p>
<ul><li>http-equiv</li><li>charset</li><li>name</li><li>content</li><li>scheme</li></ul>
<p>http-equivは、HTMLファイルでリダイレクトをさせたい時に利用しますね。文字コードの指定も、http-equiv か HTML5 では charset を用いるようになります。</p>
<p>name は、keywords などの一般的なものから、viewport の指定など、内容が幅広いです。これは定義されたものしかないわけではなく、拡張されていくタイプのものだからではないかと考えられます。ブラウザの解釈のためにも、どんどん使っていくのがよいですね。</p>
<h3>参考サイト</h3>
<ul><li><a href="https://www.w3.org/wiki/HTML/jp/Elements/meta" target="_blank">HTML/jp/Elements/meta - W3C Wiki</a></li><li><a href="https://www.w3schools.com/tags/tag_meta.asp" target="_blank">HTML meta tag</a></li></ul>
<h2>最後に</h2>
<p>HTMLは、W3Cという団体が管理しているので、困った時は公式サイトをチェックするのが最も正確です。英語ですがある程度はGoogle翻訳でも見えてきますし、説明も難しくないので英語のままでもなんとかいけると思います。</p>
<p> </p>

