---
# Astrowind
title: '「Jpegの品質は85がおすすめ」をデータで検証する'
excerpt: '以前のブログ記事でも触れましたが、GoogleのWebパフォーマンス改善ガイドで...'
updateDate: 2018-10-01
publishedDate: 2018-10-01
tags: 
  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/chart01.png
category: web-imaging

# カスタム
updatedAt: 2018-10-01 10:02:02
publishedAt: 2018-10-01 09:01:11
categories: 
  - web-imaging

  - performance

categoryLabels: 
  - Web画像最適化

  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

<p>以前のブログ記事でも触れましたが、GoogleのWebパフォーマンス改善ガイドではJpegの品質は85(以下)にすることを推奨しています。</p>
<p><a href="https://blog.ideamans.com/2018/08/jpeg85.html">画質85がよいという記事をみたので、LightFileの処理と比較してみた。画像軽量化は、画質とのバランスの戦いなのだ。</a></p>
<p>85を超えると急激に容量が増え、その割に画質は大きく改善されないという性質が理由です。</p>
<p>Jpegを保存するときに指定するお馴染みの「品質」ですが、どのくらい実際の品質を表すものなのか、データを集めて検証してみました。</p>
<p>お客さんに画像について説明するときや、社内ルールの制定に役立つのではないかと思います。</p>
<p><a href="https://qiita.com/miyanaga/items/a616261de490cc342d08">Jpegの品質はどのくらいあてになるのか</a></p>
<h2>ダイジェスト</h2>
<ul><li>品質が同一でも、画像の乱雑さ(↔平坦さ)が強いほどファイルサイズは大きくなる</li><li>品質が同一でも、画像の乱雑さ(↔平坦さ)によって元画像との差分が増え実際の画質が低下する</li><li>品質85〜87くらいからファイルサイズが急に大きくなる</li><li>品質90くらいで画質の低下度合いが急に安定する</li><li>品質100は非常に非効率</li></ul>
<p><img alt="chart01.png" src="https://blog.ideamans.com/assets/chart01.png" width="2050" height="1148" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><img alt="chart02.png" src="https://blog.ideamans.com/assets/chart02.png" width="2054" height="1156" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">詳しくはQiitaに掲載した記事をご覧ください。</p>
<p><a href="https://qiita.com/miyanaga/items/a616261de490cc342d08">Jpegの品質はどのくらいあてになるのか</a></p>

