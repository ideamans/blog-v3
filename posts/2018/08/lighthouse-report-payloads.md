---
# Astrowind
title: 'うちのトップページ重すぎ...？ Googleの推奨は1.6MB！7,866のウェブサイトトップページをチェックした結果、モバイルデバイス向けトップページの平均サイズは2.43MBだった'
excerpt: 'Lighthouseの監査項目のひとつに、Webページ全体のデータサイズがありま...'
updateDate: 2020-06-18
publishedDate: 2018-08-20
tags: 
  - web-imaging

  - cloud-cost

  - lightfile

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/2018-08-20-lighthouse-report-payload-ogp.jpg
category: web-imaging

# カスタム
updatedAt: 2020-06-18 10:54:50
publishedAt: 2018-08-20 13:00:00
categories: 
  - web-imaging

  - cloud-cost

  - lightfile

  - performance

categoryLabels: 
  - Web画像最適化

  - クラウドコスト削減

  - 画像軽量化AI LightFile

  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

<p>Lighthouseの監査項目のひとつに、Webページ全体のデータサイズがあります。HTML、画像、CSS、JavaScript、フォントなど、Webページの表示に必要なデータの総量のことで、Webページの重さに直結する指標です。ナローバンドの時代はガイドラインをよく耳にしました。いま実態はどうなっているのでしょうか。</p>
<p>...ということで、Lighthouseでチェックした7,866サイトの比較結果をレポートします。</p>
<h2>測定方法について</h2>
<p>最近はAjaxや画像の遅延読み込みなどで、ページが表示された後に後追いでダウンロードされるデータもあり、一概に総量を定義するのが難しいのですが、Lighthouseのレポート結果を基準に比較をしてみます。</p>
<p>監査項目の中に"<strong>Avoids enormous network payloads</strong>"という項目があり、こちらにダウンロードサイズが表示されます。</p>
<p><img alt="lighthouse-network-payload.png" src="https://blog.ideamans.com/assets/lighthouse-network-payload.png" width="1686" height="788" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>この値をコーポレートサイト(上場企業)、ブログ・ニュースサイト、ECサイトについて比較します。</p>
<h2>ダウンロードサイズは、最大 28.92MB、平均は 2.43MB。なんと10倍以上も差が。</h2>
<p>ジャンル別と全体の最大値、平均値、四分位が以下の通りです。</p>
<div class="tablewrap">
<table border="1" cellpadding="5" cellspacing="0" class="tablestyle"><caption></caption>
<thead>
<tr><th>単位: MB</th><th>上場企業コーポレートサイト</th><th>ブログ・ニュースサイト</th><th>ECサイト</th><th>ALL</th></tr>
</thead>
<tbody>
<tr><th>最大</th>
<td style="text-align: right;">27.30</td>
<td style="text-align: right;">21.03</td>
<td style="text-align: right;">28.92</td>
<td style="text-align: right;">28.92</td>
</tr>
<tr><th>平均</th>
<td style="text-align: right;">2.84</td>
<td style="text-align: right;">1.43</td>
<td style="text-align: right;">2.69</td>
<td style="text-align: right;">2.43</td>
</tr>
<tr><th>25%</th>
<td style="text-align: right;">1.01</td>
<td style="text-align: right;">0.78</td>
<td style="text-align: right;">0.92</td>
<td style="text-align: right;">0.89</td>
</tr>
<tr><th>50%</th>
<td style="text-align: right;">1.96</td>
<td style="text-align: right;">1.10</td>
<td style="text-align: right;">1.82</td>
<td style="text-align: right;">1.56</td>
</tr>
<tr><th>75%</th>
<td style="text-align: right;">3.60</td>
<td style="text-align: right;">1.65</td>
<td style="text-align: right;">3.40</td>
<td style="text-align: right;">3.00</td>
</tr>
</tbody>
</table>
</div>
<p><strong>最大ではなんと28.92MB！</strong> よく音楽データ1曲5MBと言われますが、ミニアルバム約6曲分に相当します。<a href="https://developers.google.com/web/tools/lighthouse/audits/network-payloads">Googleが推奨するサイズは、1.6MB</a>です。これは3G回線で10秒以内に操作可能になる水準として設定されたようです。4G LTEが主体の日本国内のWebサイトについては、もっとサイズが大きくてもよさそうです。</p>
<p>四分位(25%、50%、75%)とは、100人の軽さ比べ競争に例えたとき25位、50位、75位に位置する数値です。つまり、コーポレートサイトで3.6MB以上のWebページは、データ容量でいうと75位以下のヘビー級サイトになるということです。</p>
<h3>分布について</h3>
<p>ではデータサイズの分布をヒストグラムで見るとどうなっているでしょうか。</p>
<p><img alt="weights-histogram-all.png" src="https://blog.ideamans.com/assets/weights-histogram-all.png" width="719" height="387" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>いずれのジャンルも、1〜2MBをピークとしてデータサイズが大きくなるほどサイトの数が少なくなる曲線を描いています。</p>
<p>テキスト中心になるブログ・ニュースサイトについては全体的にデータサイズが小さく、約2MB以内にサイトが集中しています。四分位を見ても75%が1.65以内となっています。</p>
<p>上場企業コーポレートサイトとECサイトの分布が非常に似ているように見えます。分解すると次のようになり、不思議と分布がよく似ていることが確認できます。</p>
<p><img alt="weights-histogram-each.png" src="https://blog.ideamans.com/assets/weights-histogram-each.png" width="729" height="387" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h2>最後に</h2>
<p>今回は単純なデータサイズを比較してみました。ここからが本題。引き続き、データサイズと実際のパフォーマンスの関係性について調査していきます。</p>
<p> </p>

