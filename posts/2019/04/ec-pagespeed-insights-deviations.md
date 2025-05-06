---
# Astrowind
title: 'ECサイトでPageSpeed Insightsスコア80なら偏差値70相当！ パフォーマンス偏差値表(通販サイト編)を作ってみた'
excerpt: 'Webページの表示速度(パフォーマンス)を数値スコアとして評価できるPageSp...'
updateDate: 2020-06-18
publishedDate: 2019-04-15
tags: 
  - lighthouse

  - pagespeed-insights

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/a35c27ba0ae45eafe4acf37bc748bcd1423a6e76.png
category: lighthouse

# カスタム
updatedAt: 2020-06-18 06:25:17
publishedAt: 2019-04-15 12:00:00
categories: 
  - lighthouse

  - pagespeed-insights

  - performance

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

Webページの表示速度(パフォーマンス)を数値スコアとして評価できる[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=ja)。

100点がとれればもちろん言うことなしですが、ほとんどのサイトにとってそれは至難の業で現実的な目標になりません。

点数より偏差値の方が、自社のサイトの立ち位置を正確に理解し、次の目標を定めやすいのではないでしょうか。

...というわけでECサイトというテーマに絞り、国内通販上位300サイトのスマホトップページについてPageSpeed Insightsスコアを収集し、偏差値表を作ってみました。

その結果、PageSpeed Insightsスコアが80であれば偏差値70相当(一般的に上位2%)、スコア55であれば偏差値60相当(一般的に上位16%)という結果になりました。

<table border="1" cellpadding="5" cellspacing="0" class="tablestyle">
 <tr>
  <th>スコア</th>
  <th>偏差値</th>
 </tr>
 <tr>
  <td>100</td>
  <td>78.7</td>
 </tr>
 <tr>
  <td>95</td>
  <td>76.6</td>
 </tr>
 <tr>
  <td>90</td>
  <td>74.5</td>
 </tr>
 <tr>
  <td>85</td>
  <td>72.4</td>
 </tr>
 <tr>
  <td>80</td>
  <td>70.3</td>
 </tr>
 <tr>
  <td>75</td>
  <td>68.2</td>
 </tr>
 <tr>
  <td>70</td>
  <td>66.1</td>
 </tr>
 <tr>
  <td>65</td>
  <td>64.0</td>
 </tr>
 <tr>
  <td>60</td>
  <td>61.9</td>
 </tr>
 <tr>
  <td>55</td>
  <td>59.8</td>
 </tr>
 <tr>
  <td>50</td>
  <td>57.7</td>
 </tr>
 <tr>
  <td>45</td>
  <td>55.6</td>
 </tr>
 <tr>
  <td>40</td>
  <td>53.5</td>
 </tr>
 <tr>
  <td>35</td>
  <td>51.4</td>
 </tr>
 <tr>
  <td>30</td>
  <td>49.3</td>
 </tr>
 <tr>
  <td>25</td>
  <td>47.2</td>
 </tr>
 <tr>
  <td>20</td>
  <td>45.1</td>
 </tr>
 <tr>
  <td>15</td>
  <td>43.0</td>
 </tr>
 <tr>
  <td>10</td>
  <td>40.9</td>
 </tr>
 <tr>
  <td>5</td>
  <td>38.8</td>
 </tr>
 <tr>
  <td>0</td>
  <td>36.7</td>
 </tr>
</table>

スコア55と言われると低く感じますが、ECサイトの中では十分軽いサイトの部類に入ります。

## ヒストグラムと順位表

5点刻みでヒストグラムにしたものがこちらです。

<img alt="ec-psi.png" src="https://blog.ideamans.com/assets/ec-psi.png" width="1172" height="732" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

いびつですが、なんとなく二項分布風のカーブに見えます。0〜5点にサイトもサイトが集中していますが、これは0点未満がないためと思われます(マイナス点があればマイナスになるサイトもあるかと...)。

100人の村に換算してスコアを上位から並べると次の通りです。スコア79で上位5%、スコア52であれば軽いサイト上位20%に位置し、先ほどの偏差値表の感覚に近い結果となりました。

<table border="1" cellpadding="5" cellspacing="0" class="tablestyle">
 <tr>
  <th>100人中</th>
  <th>スコア</th>
 </tr>
 <tr>
  <td>1位</td>
  <td>100</td>
 </tr>
 <tr>
  <td>5位</td>
  <td>79</td>
 </tr>
 <tr>
  <td>10位</td>
  <td>69</td>
 </tr>
 <tr>
  <td>15位</td>
  <td>60</td>
 </tr>
 <tr>
  <td>20位</td>
  <td>52</td>
 </tr>
 <tr>
  <td>25位</td>
  <td>44</td>
 </tr>
 <tr>
  <td>30位</td>
  <td>38</td>
 </tr>
 <tr>
  <td>35位</td>
  <td>34</td>
 </tr>
 <tr>
  <td>40位</td>
  <td>32</td>
 </tr>
 <tr>
  <td>45位</td>
  <td>29</td>
 </tr>
 <tr>
  <td>50位</td>
  <td>26</td>
 </tr>
 <tr>
  <td>55位</td>
  <td>24</td>
 </tr>
 <tr>
  <td>60位</td>
  <td>21</td>
 </tr>
 <tr>
  <td>65位</td>
  <td>19</td>
 </tr>
 <tr>
  <td>70位</td>
  <td>16</td>
 </tr>
 <tr>
  <td>75位</td>
  <td>13</td>
 </tr>
 <tr>
  <td>80位</td>
  <td>10</td>
 </tr>
 <tr>
  <td>85位</td>
  <td>7</td>
 </tr>
 <tr>
  <td>90位</td>
  <td>4</td>
 </tr>
 <tr>
  <td>95位</td>
  <td>1</td>
 </tr>
 <tr>
  <td>100位</td>
  <td>0 </td>
 </tr>
</table>

## スコアの高いサイト

スコアが高かった上位10サイトがこちらです。やはりあっさりしたサイトが目立ちますが、<a href="https://www.hankoya.com/">ハンコヤドットコム 公式通販</a>や、<a href="https://www.1osechi.com/">ナカノモードエンタープライズ 板前魂 公式通販</a>は豊富な情報量ながら、画像遅延読み込みなどを上手く使って高スコアをたたき出しています。

<table border="1" cellpadding="5" cellspacing="0" class="tablestyle">
 <tr>
  <th>サイト</th>
  <th>スコア</th>
 </tr>
 <tr>
  <td><a href="https://www.kaden-sakura.jp/">家電のＳＡＫＵＲＡ 公式通販</a></td>
  <td>100</td>
 </tr>
 <tr>
  <td><a href="https://www.seven-star.co.jp/">セブンスター貿易 公式通販</a></td>
  <td>99</td>
 </tr>
 <tr>
  <td><a href="https://www.nanaple.com/">ｎａｎａｐｌｅ 腕時計のななぷれ</a></td>
  <td>97</td>
 </tr>
 <tr>
  <td><a href="https://www.suruga-ya.jp/">エーツー 駿河屋</a></td>
  <td>93</td>
 </tr>
 <tr>
  <td><a href="https://www.masuyone.com/">増米商店 越前かに問屋ますよね</a></td>
  <td>93</td>
 </tr>
 <tr>
  <td><a href="https://www.ecj.jp/">アイ・アンド・ティー EC－JOY</a></td>
  <td>92</td>
 </tr>
 <tr>
  <td><a href="https://www.daily-3.com/smp/">丸長 daily-3</a></td>
  <td>89</td>
 </tr>
 <tr>
  <td><a href="https://www.hankoya.com/">ハンコヤドットコム 公式通販</a></td>
  <td>89</td>
 </tr>
 <tr>
  <td><a href="https://www.kurikon.co.jp/">ビジョンケア クリアコンタクト</a></td>
  <td>89</td>
 </tr>
 <tr>
  <td><a href="https://www.1osechi.com/">ナカノモードエンタープライズ 板前魂 公式通販</a></td>
  <td>88</td>
 </tr>
</table>

## 調査について

* 通販新聞社が提供する[「第18回 ネット販売白書」(2018年7～8月調査・ネット販売企業上位300社)](https://www.tsuhanshimbun.com/products/downloads_detail.php?product_id=4466&_ssd=1)を利用し、300サイト(企業)を選出しました。
* 複数のサイトを運営する企業の場合は代表的と思われる1サイトを選出します。
* 自社で運営する公式通販サイト、なければ楽天などのモールの店舗とします。
* スマートフォン向けのトップページを対象に調査します。
