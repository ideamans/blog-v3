---
# Astrowind
title: 'PNGの軽量化はどうすればいいの？Macで利用できる無料のCrunchを使ってみよう！'
excerpt: '最近はPNGの利用も増えてきて、ウェブサイトのファイルサイズを大きく圧迫する要因...'
updateDate: 2018-06-29
publishedDate: 2018-06-29
tags: 
  - web-imaging

author: nose
image: https://blog.ideamans.com/assets/2018-06-29-crunch-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2018-06-29 17:32:37
publishedAt: 2018-06-29 17:00:00
categories: 
  - web-imaging

categoryLabels: 
  - Web画像最適化

authorId: nose
subTheme: 
recommended: false
---

<p>最近はPNGの利用も増えてきて、ウェブサイトのファイルサイズを大きく圧迫する要因の一つになっています。なんといっても<strong>JPEGよりも２〜３倍近くファイルサイズが重い</strong>ので、サーバのディスクも、閲覧者の端末も、なかなかキツイ状況になっています。特に「ギガ」がなくなるのは困っちゃいますね。</p>
<h2>Macで利用できるCrunchで、PNGを軽量化しよう</h2>
<p style="text-align: center;"><img alt="2018-06-29-crunch-05-crunch.png" src="https://blog.ideamans.com/assets/2018-06-29-crunch-05-crunch.png" width="1053" height="556" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">シンプルなUIなので、迷う心配はない</span></p>
<p>Windowsの人はごめんなさい。今回はMacでのみ利用できるアプリです。その名も「Crunch」です。コマンドライン版もあるので、そっちならWindowsでも利用できるかもしれません。</p>
<p><strong>まずPNG専用ツールというのが、大きな特徴です。さらに、DSSIMという評価指数を利用しています。弊社のLightFileとそっくりなんです。LightFileはJPG専用、CrunchはPNG専用。LightFileはSSIM値で評価、CrunchはDSSIM値で評価。完全に兄弟みたいなのです。</strong></p>
<p>勝手に親近感がわきましたが、実際に試してみましょう。</p>
<h3>GitHubから入手しよう</h3>
<p>Macのインストール用のファイルは、GitHubからダウンロードできます。</p>
<ul><li><a href="https://github.com/chrissimpkins/Crunch" target="_blank"><span>GitHub - chrissimpkins/Crunch: Insane(ly slow but wicked good) PNG image optimization</span></a></li></ul>
<p style="text-align: center;"><span><img alt="2018-06-29-crunch-01.jpg" src="https://blog.ideamans.com/assets/2018-06-29-crunch-01.jpg" width="1280" height="623" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">dmgインストーラがあれば、Macはダブルクリックでインストールができて簡単</span></span></p>
<p>インストールドキュメントを見てみましょう。dmgファイルのダウンロードと、実際の動作を見ることができます。</p>
<ul><li><a href="https://github.com/chrissimpkins/Crunch/blob/master/docs/MACOSGUI.md#install" target="_blank">インストールドキュメント｜Crunch native macOS GUI Application</a></li></ul>
<p style="text-align: center;"><img alt="2018-06-29-crunch-02.jpg" src="https://blog.ideamans.com/assets/2018-06-29-crunch-02.jpg" width="1280" height="623" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">dmgファイルのダウンロードはこのリンクをクリック</span></p>
<p style="text-align: center;"><img alt="2018-06-29-crunch-03-crunch.png" src="https://blog.ideamans.com/assets/2018-06-29-crunch-03-crunch.png" width="797" height="399" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">インストールの最後は、左のCrunch.appを、右のApplicationsにドラッグアンドドロップすればOK</span></p>
<h2>PNG画像を最適化してみよう</h2>
<p>それでは実際に最適化してみましょう。比較として、PNGの軽量化では有名なTinyPNGとの比較も行います。</p>
<p style="text-align: center;"><img alt="2018-06-29-crunch-04-tinypng.png" src="https://blog.ideamans.com/assets/2018-06-29-crunch-04-tinypng.png" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">東京は今日梅雨明けが発表されたので、記念に海の写真で比較</span></p>
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<tbody>
<tr><th>ファイル名</th><th>ファイルサイズ</th><th>削減容量</th><th>削減割合</th></tr>
<tr>
<td>元画像</td>
<td style="text-align: right;">1,200KB</td>
<td style="text-align: right;">-</td>
<td style="text-align: right;">-</td>
</tr>
<tr>
<td><span style="color: #99cc00;">Crunch</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">344KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">856KB</span></td>
<td style="text-align: right;"><span style="color: #99cc00;">約71%</span></td>
</tr>
<tr>
<td>TinyPNG</td>
<td style="text-align: right;">325KB</td>
<td style="text-align: right;">875KB</td>
<td style="text-align: right;">約73%</td>
</tr>
<tr>
<td>JPEG(画質80)</td>
<td style="text-align: right;">287KB</td>
<td style="text-align: right;">913KB</td>
<td style="text-align: right;">約76%</td>
</tr>
<tr>
<td><span style="color: #99cc00;"><strong>上記のJPGをLightFile容量優先で処理</strong></span></td>
<td style="text-align: right;"><span style="color: #99cc00;"><strong>146KB</strong></span></td>
<td style="text-align: right;"><span style="color: #99cc00;"><strong>1,054KB</strong></span></td>
<td style="text-align: right;"><span style="color: #99cc00;"><strong>約88%</strong></span></td>
</tr>
</tbody>
</table>
<p><strong>Crunchで処理した画像は、TinyPNGと比べても遜色がないくらいの削減を達成</strong>しています。無料版のアプリケーションで、デスクトップアプリケーションなので使いやすさは優秀ですね。ちなみに処理後の画像は、同階層に hogehoge-crunch.png といった感じで保存されます。リネームされたくない人にはちょっとつらいかもしれません。</p>
<p>なお、<strong>元画像をPhotoshopの画質80でJPEG書き出しすると軽量化済みのPNGよりも軽くなります。さらにその画像をLightFileで処理すると、軽量化済みのPNGの半分以下まで軽く</strong>なります。一概には言えませんが、透過がなく色数の多い画像は、PNGではなくJPEGを使うようにしましょう。もちろん、PNGの特性を理解している上でPNGを利用するのは問題ありません。</p>
<h2>最後に</h2>
<p>JPEGでもPNGでも、得意な画像と不得意な画像があります。さらに、その後に処理するアプリケーションにも得意不得意があります。Photoshopは非常に品質が高いので、これだけずっと支持され愛されています。LightFileはまだサーバでしか動かせませんが、得意の高画質で軽量化する処理を多くの人に利用いただきたいと考えています。軽量化しても高品質なことが重要と考えています。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p> </p>
