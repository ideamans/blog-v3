---
# Astrowind
title: '画像の解像度を、exiftoolで確認しよう！X Resolution、Y Resolutionが解像度を示す'
excerpt: '画像の解像度、Macのプレビュー.appだと実は表示してくれません。あまり気にす...'
updateDate: 2018-06-21
publishedDate: 2018-06-21
tags: 
  - web-imaging

author: nose
image: https://blog.ideamans.com/assets/2018-06-20-exiftool-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2018-06-21 15:41:17
publishedAt: 2018-06-21 09:30:00
categories: 
  - web-imaging

categoryLabels: 
  - Web画像最適化

authorId: nose
subTheme: 
recommended: false
---

<p>画像の解像度、<del datetime="2018-06-21T15:39:53+09:00">Macのプレビュー.appだと実は表示してくれません</del>。あまり気にすることもないかもしれませんが、必要な場合は困ってしまうもの。以前から利用しているexiftoolを使えば、Macでも解像度を確認することができます。コマンドでの操作ですが、難しくないのでぜひやってみましょう。</p>
<p>※【訂正】Macでも解像度確認できました！画像をプレビュー.appで開き、Command+i でパネルが表示されます。</p>
<h2>コマンド</h2>
<p>exiftoolの一番簡単な使い方は、コマンドとファイルを指定するだけです。これですべてのexif情報を確認することができます。</p>
<pre class="prettyprint"><code class="lang-bsh">exiftool /path/to/hoge.jpg</code></pre>
<p>実際に解像度が288dpiのJPGをみてみましょう。</p>
<pre class="prettyprint"><code class="lang-bsh">$ exiftool /path/to/hoge.jpg
ExifTool Version Number         : 10.55
File Name                       : hoge.jpg
Directory                       : /path/to
File Size                       : 179 kB
File Modification Date/Time     : 2018:06:20 10:14:15+09:00
File Access Date/Time           : 2018:06:20 11:36:19+09:00
File Inode Change Date/Time     : 2018:06:20 10:14:16+09:00
File Permissions                : rw-r--r--
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
Exif Byte Order                 : Big-endian (Motorola, MM)
Orientation                     : Horizontal (normal)
X Resolution                    : 288
Y Resolution                    : 288
Resolution Unit                 : inches
Software                        : Adobe Photoshop CC (Macintosh)
Modify Date                     : 2018:06:20 10:14:11
Color Space                     : Uncalibrated
Exif Image Width                : 600
Exif Image Height               : 300
Compression                     : JPEG (old-style)</code></pre>
<p>長いので途中までの結果ですが、X Resolutionと、Y Resolutionに記載されているものが解像度になります。</p>
<p>次に、72dpiのJPGを見てみましょう。</p>
<pre class="prettyprint"><code class="lang-bsh">$ exiftool /path/to/fuga.jpg 
ExifTool Version Number         : 10.55
File Name                       : fuga.jpg
Directory                       : /path/to
File Size                       : 180 kB
File Modification Date/Time     : 2018:06:20 10:14:45+09:00
File Access Date/Time           : 2018:06:20 11:43:06+09:00
File Inode Change Date/Time     : 2018:06:20 10:14:46+09:00
File Permissions                : rw-r--r--
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
Exif Byte Order                 : Big-endian (Motorola, MM)
Orientation                     : Horizontal (normal)
X Resolution                    : 72
Y Resolution                    : 72
Resolution Unit                 : inches
Software                        : Adobe Photoshop CC (Macintosh)</code></pre>
<p>X ResolutionとY Resolutionが72になっているのがわかります。このように、exif情報を確認する場合は、exiftoolを利用すると非常に簡単に情報を手に入れることができます。</p>
<h2>最後に</h2>
<p>いかがでしたでしょうか。Adobe Photoshopなどの画像処理系のアプリを持っている場合は、解像度の確認だけならそれらでも可能です。新規で画像を開き、解像度の部分で確認しましょう。</p>
<p>exiftoolのインストールなどは、こちらの記事からご確認ください！</p>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="ja" dir="ltr">画像の <a href="https://twitter.com/hashtag/exif?src=hash&amp;ref_src=twsrc%5Etfw">#exif</a> 情報って、すごいいろんなことが書かれていて面白いんです！今回は、<a href="https://twitter.com/hashtag/exiftool?src=hash&amp;ref_src=twsrc%5Etfw">#exiftool</a> というものをインストールして、画像に含まれるメタデータをごっそりと一覧で見えるようにしちゃいます！(^-^)<a href="https://t.co/lSGEiD6qdr">https://t.co/lSGEiD6qdr</a></p>
-- アイデアマンズ (@ideamans) <a href="https://twitter.com/ideamans/status/928041377010716678?ref_src=twsrc%5Etfw">2017年11月7日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<p> </p>

