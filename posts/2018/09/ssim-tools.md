---
# Astrowind
title: '簡単にSSIMを計算するツール6+2本を紹介'
excerpt: '先日、画質の判定方法としてのSSIMについて記事を公開しました。 画像軽量化サー...'
updateDate: 2018-09-27
publishedDate: 2018-09-25
tags: 
  - web-imaging

author: miyanaga
image: https://blog.ideamans.com/assets/2018-09-27-ssim-tools-03.jpg
category: web-imaging

# カスタム
updatedAt: 2018-09-27 11:42:10
publishedAt: 2018-09-25 12:23:43
categories: 
  - web-imaging

categoryLabels: 
  - Web画像最適化

authorId: miyanaga
subTheme: 
recommended: false
---

<p>先日、画質の判定方法としてのSSIMについて記事を公開しました。</p>
<p><a href="https://blog.ideamans.com/2018/09/image-optimise-web-services.html">画像軽量化サービスやツールをSSIM値とファイルサイズで比較してみよう！まずは無料のWebサービス版で試して、効果を実感することが大切！</a></p>
<p>実際にSSIMを算出するいくつかの方法について、Qiitaに記事にツールと使い方をまとめてみました。</p>
<p>[Qiita] <a href="https://qiita.com/miyanaga/items/f3690c826008999296f9">画像のSSIM算出のための6+2ツールまとめ</a></p>
<ul><li>コマンドラインツール: ImageMagick、ffmpeg、Jpeg Archive、dssim</li><li>スクリプト言語: Python、JavaScript</li><li>Webツール: <a href="https://darosh.github.io/image-ssim-js/test/browser_test.html">Image SSIM</a> (このページですぐSSIMを試せます！)</li></ul>
<h2>SSIMは万能薬ではないが画質の基準がないサイトも多いのが事実</h2>
<p>人間の視覚は身体的・心理的な要因を持つ深淵なはたらきです。<a href="https://ja.wikipedia.org/wiki/%E9%8C%AF%E8%A6%96">錯視</a>とか毎回笑ってしまうほど面白い！</p>
<p>なので完全な指標はそもそもないのだと思います。しかし、大規模サイトで多くの関係者が各々の主観で画質を決め、画質がバラバラになっているケースは少なくありません。</p>
<p>SSIMなどの指標を用いて画像の品質を定量的・客観的に管理できれば、そのWebサイトは一歩先行く存在と言えます。</p>
<p> </p>
