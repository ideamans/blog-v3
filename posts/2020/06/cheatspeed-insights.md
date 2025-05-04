---
# Astrowind
title: 'PageSpeed Insightsスコア集中アップのための無料裏レポートツール「PageSpeed Insights 試験対策」をリリース'
excerpt: 'なぜスコアが上げられないのか PageSpeed Insightsは手軽にWeb...'
updateDate: 2020-06-18
publishedDate: 2020-06-01
tags: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - seo

author: miyanaga
image: https://blog.ideamans.com/assets/cheatspeed-insights-2.png
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 11:25:32
publishedAt: 2020-06-01 11:33:00
categories: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - seo

categoryLabels: 
  - Core Web Vitals

  - Lighthouse

  - PageSpeed Insights

  - SEO

authorId: miyanaga
subTheme: 
recommended: false
---

## なぜスコアが上げられないのか

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=JA)は手軽にWebページのスピードを計測するツールとして広く利用されています。

100点満点で表示されるスコアを上げたいと思うのは自然な感情ですが、あの**レポートを見てサイトを改修しても思ったようにスコアは上がりません**。

なぜなら採点の詳しい仕組みが明示されていないので、**本当の弱点がわからないから**です。

加えて現実的に何点を目標にすればいいのかもよくわかりません。点数の意味自体が、**100点満点でわかりやすいようで実はよくわかりません**。

そんなわけで多くの人は「100点満点から改善アドバイスの分だけ減点されている」と反射的に解釈してしまいますが、皮肉なことにスコア改善の道を第一歩から誤ってしまいます。


## "裏"レポートツール PageSpeed Insights試験対策

PageSpeed Insightsは万能の指標ではないし、後述しますが100点に特別な意味はありません。でも点数が上がった手応えは改善の弾みになります。

そこで曖昧な本家レポートは置いといて、実際に作業にあたるエンジニア(主にフロントエンドエンジニア)向けに本当の弱点を洗い出し、具体的な目標を示してスコアアップに集中するための「裏レポートツール」を作りました。

それが[PageSpeed Insights 試験対策](https://simulate.site/cheatspeed-insights/)です。無料でお使いいただけます。


### まずはスコアの意味を知る

筆記試験的な減点方式を連想してしまいますが、全く別物の統計値です。身近な例として答案の点数ではなく「偏差値」に近いものです。

端的に言うと「世界における推定順位」を意味しており、スコア50が速くも遅くもない人並みのページという評価(中央値)です。

<figure>
<a href="https://blog.ideamans.com/assets/cheatspeed-insights-1.png"><img alt="cheatspeed-insights-1.png" src="https://blog.ideamans.com/assets_c/2020/06/cheatspeed-insights-1-thumb-1000xauto-1158.png" width="1000" height="375" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px; border: 1px solid #888" /></a>
<figcaption><a href="https://simulate.site/cheatspeed-insights/">PageSpeed Insights 試験対策 トヨタ自動車の例</a></figcaption></figure>

50以上で適度なスコアを目標に設定し、あれこれサイトを改修する中で「その目標よりはスコアを落とさない」という運用に使うのが、本来は賢いのだと思います。

### 配点の仕組みと本当の弱点を知る

スコアは4つのチェックポイント通過タイムと、1つの時間集計値、1つのレイアウトの変動性指標から求められ、配点の上限が決まっています。

<figure>
<a href="https://blog.ideamans.com/assets/cheatspeed-insights-2.png"><img alt="cheatspeed-insights-2.png" src="https://blog.ideamans.com/assets_c/2020/06/cheatspeed-insights-2-thumb-1000xauto-1160.png" width="1000" height="400" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>
<figcaption><a href="https://simulate.site/cheatspeed-insights/">PageSpeed Insights 試験対策 トヨタ自動車の例</a></figcaption></figure>

学校で「得意な国語で150点とって苦手な数学をカバーする！」なんてことができないのと同様に、PageSpeed Insightsも**カンストした指標で更に頑張っても全体のスコアは上がりません**。

「軽さには気を使っているが、スコアに納得が行かない...」というサイトのほとんどは(おそらく得意ではないであろう)JavaScriptに原因があります。

### どのくらい頑張ればいいのか知る

レポートでは仮に目標スコアを50、90、100と定めたときに、それぞれのタイムを何秒縮める必要があるのか、具体的な目標値を提案します。

1秒縮めるのと5秒縮めるのでは根本的に異なるアプローチが必要です。つい、楽にできる方法でなんとかならないかなーと期待してしまいますが、現実の壁を直視しましょう。

<figure>
<a href="https://blog.ideamans.com/assets/cheatspeed-insights-3.png"><img alt="cheatspeed-insights-3.png" src="https://blog.ideamans.com/assets_c/2020/06/cheatspeed-insights-3-thumb-autox1039-1162.png" width="1000" height="1039" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>
<figcaption><a href="https://simulate.site/cheatspeed-insights/">PageSpeed Insights 試験対策 トヨタ自動車の例</a></figcaption></figure>

## 試験対策の功罪

行き過ぎた試験への最適化は現実の効用とかけ離れることが多々あります。丸暗記で成績がよくても実務では使えない的な話です。

このツールも「試験対策」に特化してますが、結局はタイムを縮めないとスコアが上がらないので、スコアの改善は何らかの待ち時間短縮をもたらします。

加えてSEOに今後関係するとにわかに話題の[Web Vitals](https://web.dev/vitals/)の改善にもつながります。Web VitalsのLCP、CLSは「最大コンテンツの描画」「累積レイアウト変更」そのものですし、[FIDは「合計ブロック時間」と強い相関](https://web.dev/fid/#how-to-measure-fid)があります。

当てずっぽうで改善を試みて成果を出せず元の木阿弥...となるよりはまずは賢く「試験対策」をして、確かな手応えを掴んでください！

