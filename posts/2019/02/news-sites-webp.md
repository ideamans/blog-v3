---
# Astrowind
title: '新聞ニュース系158サイトでWebP利用中は23サイト・WebPで平均-1.6秒待ち時間短縮と試算・レポート無料公開'
excerpt: '通販上位300サイト中32サイトがWebPを配信・楽天市場は積極利用という調査記...'
updateDate: 2019-02-25
publishedDate: 2019-02-25
tags: 
  - webp

  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/f16817c6e8331cb3529ed845992cb11252c73ad7.png
category: webp

# カスタム
updatedAt: 2019-02-25 06:01:39
publishedAt: 2019-02-25 05:30:00
categories: 
  - webp

  - web-imaging

  - performance

categoryLabels: 
  - WebP

  - Web画像最適化

  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

[通販上位300サイト中32サイトがWebPを配信・楽天市場は積極利用](/2019/02/30011webp.html)という調査記事が非常に好評でした。

同様に次は[ページまるごとWebP変換](https://sim.lightfile.net/webp/)を使い、新聞ニュース系158サイトのモバイルトップページについて調査しました。

* もし画像をWebPに変換するとどのくらいの高速化につながるか
* ページを構成するデータ量の実態
* WebPをすでに利用中のサイト

詳細なレポートもスプレッドシートで無償公開します。ベンチマークにぜひご利用ください。※期間限定の可能性あり。お急ぎください！

## 画像をWebPに変換すると平均-1.6秒の待ち時間短縮と試算

もし158サイトすべてが画像をWebPに変換すると、**平均で-1.25MBの画像データ量を削減**できます。これは**画像データ全体の67%に相当**し、画像データが1/3にまで削減できることを意味します。

仮にモバイル通信の実効スループットをわかりやすく10Mbpsと仮定すると、-1.6秒の待ち時間短縮につながるデータ量です。

### 1ページのデータは平均4.43MB・画像はその42%

ついでにモバイルトップページのデータ量の現状についても共有します。便宜的にリクエスト数=ファイル数と表現します。

* ページ全体の平均ファイル数 148
* ページ全体のデータ量 4.43MB
* 1ページ中の平均画像ファイル数 76
* 1ページ中の画像データ量 1.86MB (全体の42%)

ひとつの目安として、[Googleは1.6MB以内を推奨](https://developers.google.com/web/tools/lighthouse/audits/network-payloads)しています。これは
3G回線でも10秒以内にダウンロードできるデータ量という根拠があり、4Gが主流の日本ではもう少し高めの基準を設けてもよいでしょう。

### 158サイトの詳細レポートをご覧になりたい方へ

Googleスプレッドシートで全158サイトの詳細レポートを公開中です。複製など自由にご利用いただいて結構です。

<a href="https://docs.google.com/spreadsheets/d/1J3DwXzSK35aSgK0BTdsss9trlVDJ6JofmtgQeIpfHT8/edit?usp=sharing" onclick="ga('send','event','report','view','news-webp',1)"> <img src="https://blog.ideamans.com/assets_c/2019/02/f16817c6e8331cb3529ed845992cb11252c73ad7-thumb-600xauto-937.png" width="600" height="266" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

<a href="https://docs.google.com/spreadsheets/d/1J3DwXzSK35aSgK0BTdsss9trlVDJ6JofmtgQeIpfHT8/edit?usp=sharing"  onclick="ga('send','event','report','view','news-webp',1)">国内新聞・ニュースサイト158サイトのWebP導入によるサイト改善効果の試算(2019年2月)</a>

ファイル数やデータ量で表現しても多くの人にはなかなかピンとこないので、WebPの変換効果は**待ち時間短縮の目安**として強調しました(緑のカラースケール0〜5秒)。<span style="background-color: #008800; color: white">緑が濃いほどWebP対応による成果が高い</span>ことを示します。

また、現在のモバイルページがデータ量としてどのくらい重いのか、1PVの最大ギガ料金に換算して強調しました(赤のカラースケール2.83円〜50円)。<span style="background-color: #880000; color: white">赤が濃いサイトほどそもそものデータ量が多い</span>ためその削減を検討ください。

最大ギガ料金はNTTドコモで最も単価の高い1GB定額プラン2,900円に基づき計算しています。カラースケールの下限2.83円は[Googleが推奨する1ページの総データ量1.6MB](https://developers.google.com/web/tools/lighthouse/audits/network-payloads)に相当する金額です。

## すでに23サイト(約15%)でWebPを一部利用

1ファイルでもWebP画像が確認できたサイトは、調査した158サイトのうち23サイトありました。WebPが多く利用されている順に並べた表が次の通りです。

1位は高速表示で名高い[日経電子版](https://www.nikkei.com/)と思いきや、[YOMIURI ONLINE(読売新聞)](https://www.yomiuri.co.jp/)でした。画像ファイルのうち70.8%がWebPで配信されています。

ちなみにヘッダを見るとYOMIURI ONLINEは[Fastly](https://www.fastly.com/)、日経電子版は[imgix](https://www.imgix.com/)を利用中のようです。

地方紙サイトでの利用も目立ちます。また、下位のWebP利用率数%のサイトは、自主的にWebPを利用しているというよりは掲載されている広告バナーがWebP形式で配信されているというケースがほとんどです。

<table border="1" cellpadding="5" cellspacing="0" class="tablestyle">
<thead>
<tr>
<th>WebP率順</th>
<th>サイト</th>
<th>WebP変換レポート</th>
<th>全画像ファイル数</th>
<th>WebP画像ファイル数</th>
<th>WebP画像率(ファイル数)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: right">1</td>
<td style="text-align: left"><a href="https://www.yomiuri.co.jp/">YOMIURI ONLINE(読売新聞)</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-c6cce3e1-9de1-424f-82a8-6efa570ba582"><img src="https://sim.lightfile.net/_resources/news-c6cce3e1-9de1-424f-82a8-6efa570ba582/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">120</td>
<td style="text-align: right">85</td>
<td style="text-align: right">70.8%</td>
</tr>
<tr>
<td style="text-align: right">2</td>
<td style="text-align: left"><a href="https://www.iwate-np.co.jp/">岩手日報</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-a0e30da6-ebb1-4c28-b4f9-bf0b36e0d944"><img src="https://sim.lightfile.net/_resources/news-a0e30da6-ebb1-4c28-b4f9-bf0b36e0d944/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">86</td>
<td style="text-align: right">34</td>
<td style="text-align: right">39.5%</td>
</tr>
<tr>
<td style="text-align: right">3</td>
<td style="text-align: left"><a href="https://www.nikkei.com/">日経新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-7d1eb3a7-6921-4cba-8113-05c8c74c1802"><img src="https://sim.lightfile.net/_resources/news-7d1eb3a7-6921-4cba-8113-05c8c74c1802/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">88</td>
<td style="text-align: right">30</td>
<td style="text-align: right">34.1%</td>
</tr>
<tr>
<td style="text-align: right">4</td>
<td style="text-align: left"><a href="https://www.agara.co.jp/">AGARA紀伊民報</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-c9d5b31c-741c-4f67-953d-b061269520b4"><img src="https://sim.lightfile.net/_resources/news-c9d5b31c-741c-4f67-953d-b061269520b4/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">48</td>
<td style="text-align: right">6</td>
<td style="text-align: right">12.5%</td>
</tr>
<tr>
<td style="text-align: right">5</td>
<td style="text-align: left"><a href="https://blog.goo.ne.jp/ks-press">紀州新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-6a370358-07fb-4733-bc5e-8e275c75d12e"><img src="https://sim.lightfile.net/_resources/news-6a370358-07fb-4733-bc5e-8e275c75d12e/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">74</td>
<td style="text-align: right">6</td>
<td style="text-align: right">8.1%</td>
</tr>
<tr>
<td style="text-align: right">6</td>
<td style="text-align: left"><a href="https://www.sponichi.co.jp/">スポニチアネックス</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-46584649-dad8-40f0-98b9-717d530aa845"><img src="https://sim.lightfile.net/_resources/news-46584649-dad8-40f0-98b9-717d530aa845/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">142</td>
<td style="text-align: right">10</td>
<td style="text-align: right">7.0%</td>
</tr>
<tr>
<td style="text-align: right">7</td>
<td style="text-align: left"><a href="https://dotsu.co.jp/">DOTSU-NET - 北海道通信</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-60216026-f165-4c73-8e15-da587a13d270"><img src="https://sim.lightfile.net/_resources/news-60216026-f165-4c73-8e15-da587a13d270/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">29</td>
<td style="text-align: right">1</td>
<td style="text-align: right">3.4%</td>
</tr>
<tr>
<td style="text-align: right">8</td>
<td style="text-align: left"><a href="https://www.newsweekjapan.jp/">ニューズウィーク日本版</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-a0eb2c4c-ce0f-4496-88b2-ea68b09e1682"><img src="https://sim.lightfile.net/_resources/news-a0eb2c4c-ce0f-4496-88b2-ea68b09e1682/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">128</td>
<td style="text-align: right">3</td>
<td style="text-align: right">2.3%</td>
</tr>
<tr>
<td style="text-align: right">9</td>
<td style="text-align: left"><a href="https://www.ogpress.com/">小笠原新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-9774996a-7a25-4ebe-bc32-387b02307ade"><img src="https://sim.lightfile.net/_resources/news-9774996a-7a25-4ebe-bc32-387b02307ade/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">43</td>
<td style="text-align: right">1</td>
<td style="text-align: right">2.3%</td>
</tr>
<tr>
<td style="text-align: right">10</td>
<td style="text-align: left"><a href="https://www.zakzak.co.jp/sports/sports.htm">ZAKZAK（夕刊フジ）</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-0dcbea61-0252-4162-aee8-e62ddf639c86"><img src="https://sim.lightfile.net/_resources/news-0dcbea61-0252-4162-aee8-e62ddf639c86/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">93</td>
<td style="text-align: right">2</td>
<td style="text-align: right">2.2%</td>
</tr>
<tr>
<td style="text-align: right">11</td>
<td style="text-align: left"><a href="https://www.saitama-np.co.jp/">埼玉新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-8f6be0a4-2bb4-4ddb-8ae5-ba2a3817fd30"><img src="https://sim.lightfile.net/_resources/news-8f6be0a4-2bb4-4ddb-8ae5-ba2a3817fd30/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">53</td>
<td style="text-align: right">1</td>
<td style="text-align: right">1.9%</td>
</tr>
<tr>
<td style="text-align: right">12</td>
<td style="text-align: left"><a href="https://togech.jp/">トゥギャッチ</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-6f21b5a7-d3a1-45b4-acb4-11695b14ede2"><img src="https://sim.lightfile.net/_resources/news-6f21b5a7-d3a1-45b4-acb4-11695b14ede2/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">56</td>
<td style="text-align: right">1</td>
<td style="text-align: right">1.8%</td>
</tr>
<tr>
<td style="text-align: right">13</td>
<td style="text-align: left"><a href="https://www.sakigake.jp/">さきがけonTheWeb - 秋田魁新報</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-ab3d0088-f369-421b-b75c-bfb3b7e4a78f"><img src="https://sim.lightfile.net/_resources/news-ab3d0088-f369-421b-b75c-bfb3b7e4a78f/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">118</td>
<td style="text-align: right">2</td>
<td style="text-align: right">1.7%</td>
</tr>
<tr>
<td style="text-align: right">14</td>
<td style="text-align: left"><a href="https://www.shigahochi.co.jp/">滋賀報知新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-0029946d-ae1d-4d3b-a10f-569308025cc1"><img src="https://sim.lightfile.net/_resources/news-0029946d-ae1d-4d3b-a10f-569308025cc1/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">60</td>
<td style="text-align: right">1</td>
<td style="text-align: right">1.7%</td>
</tr>
<tr>
<td style="text-align: right">15</td>
<td style="text-align: left"><a href="https://www.sanspo.com/">サンケイスポーツ（サンスポ・コム）</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-362e6958-3351-45ca-bd5a-902c0b22c2af"><img src="https://sim.lightfile.net/_resources/news-362e6958-3351-45ca-bd5a-902c0b22c2af/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">125</td>
<td style="text-align: right">2</td>
<td style="text-align: right">1.6%</td>
</tr>
<tr>
<td style="text-align: right">16</td>
<td style="text-align: left"><a href="https://minkei.net/">みんなの経済新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-aabbe8ca-1606-4fd0-9695-20120f861a43"><img src="https://sim.lightfile.net/_resources/news-aabbe8ca-1606-4fd0-9695-20120f861a43/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">63</td>
<td style="text-align: right">1</td>
<td style="text-align: right">1.6%</td>
</tr>
<tr>
<td style="text-align: right">17</td>
<td style="text-align: left"><a href="https://www.nishinippon.co.jp/">西日本新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-e8132271-4778-45e2-b56b-a6bf2cb26263"><img src="https://sim.lightfile.net/_resources/news-e8132271-4778-45e2-b56b-a6bf2cb26263/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">70</td>
<td style="text-align: right">1</td>
<td style="text-align: right">1.4%</td>
</tr>
<tr>
<td style="text-align: right">18</td>
<td style="text-align: left"><a href="https://www.townnews.co.jp/i/">タウンニュース</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-7b014ef7-c091-4591-ad53-cdd02ff89b81"><img src="https://sim.lightfile.net/_resources/news-7b014ef7-c091-4591-ad53-cdd02ff89b81/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">143</td>
<td style="text-align: right">2</td>
<td style="text-align: right">1.4%</td>
</tr>
<tr>
<td style="text-align: right">19</td>
<td style="text-align: left"><a href="https://www.fukuishimbun.co.jp/">福井新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-5d21ef5d-418c-4d78-ba0d-9a8329bb5a48"><img src="https://sim.lightfile.net/_resources/news-5d21ef5d-418c-4d78-ba0d-9a8329bb5a48/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">189</td>
<td style="text-align: right">2</td>
<td style="text-align: right">1.1%</td>
</tr>
<tr>
<td style="text-align: right">20</td>
<td style="text-align: left"><a href="https://jp.reuters.com/">ロイター.co.jp</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-60c3e298-33ed-4ae9-b3a3-c314399c9e4f"><img src="https://sim.lightfile.net/_resources/news-60c3e298-33ed-4ae9-b3a3-c314399c9e4f/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">104</td>
<td style="text-align: right">1</td>
<td style="text-align: right">1.0%</td>
</tr>
<tr>
<td style="text-align: right">21</td>
<td style="text-align: left"><a href="https://www.nikkansports.com/">日刊スポ-ツ</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-59040f5d-7c66-4c52-b856-e9275a282b44"><img src="https://sim.lightfile.net/_resources/news-59040f5d-7c66-4c52-b856-e9275a282b44/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">107</td>
<td style="text-align: right">1</td>
<td style="text-align: right">0.9%</td>
</tr>
<tr>
<td style="text-align: right">22</td>
<td style="text-align: left"><a href="https://www.news24.jp/">日テレＮＥＷＳ２４</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-96f39912-dee7-45e4-b5ae-6676c211f44e"><img src="https://sim.lightfile.net/_resources/news-96f39912-dee7-45e4-b5ae-6676c211f44e/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">126</td>
<td style="text-align: right">1</td>
<td style="text-align: right">0.8%</td>
</tr>
<tr>
<td style="text-align: right">23</td>
<td style="text-align: left"><a href="https://yamagata-np.jp/">やまがたニュースオンライン - 山形新聞</a></td>
<td style="text-align: left"><a href="https://sim.lightfile.net/webp/reports/news-0f42e458-bd77-49a4-9984-0aef9f8c8984"><img src="https://sim.lightfile.net/_resources/news-0f42e458-bd77-49a4-9984-0aef9f8c8984/thumbnail.png" style="max-width: 120px"></a></td>
<td style="text-align: right">174</td>
<td style="text-align: right">1</td>
<td style="text-align: right">0.6%</td>
</tr>
</tbody>
</table>

レポートは以上です。参考になりましたら幸いです。

Appleが全面的に非対応であるため特に日本国内でシェアが振るわないWebPですが、[今だからこそ導入する意味](/2019/02/iphonewebp.html)があります。

対応を検討したい、もっと詳しく知りたいといったお問い合せ、お待ちしております。
