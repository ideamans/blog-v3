---
# Astrowind
title: 'Core Web Vitalsで計測した表示速度とコンバージョン率の密接な関係。リアルなデータを紹介するよ！'
excerpt: '「Webの表示が遅いとコンバージョン率が下がる」は本当？ 海外大手の事例はよく耳...'
updateDate: 2021-02-08
publishedDate: 2021-02-04
tags: 
  - core-web-vitals

  - pagespeed-insights

  - seo

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/web-vitals-ogp.png
category: core-web-vitals

# カスタム
updatedAt: 2021-02-08 03:47:12
publishedAt: 2021-02-04 10:13:28
categories: 
  - core-web-vitals

  - pagespeed-insights

  - seo

  - performance

categoryLabels: 
  - Core Web Vitals

  - PageSpeed Insights

  - SEO

  - 表示高速化

authorId: miyanaga
subTheme: bs4
recommended: false
---

## 「Webの表示が遅いとコンバージョン率が下がる」は本当？

海外大手の事例はよく耳にします。頭でも理屈はわかります。

でも、**「自分のサイトについてその証拠を見たことがある」という方はほとんどいない**はずです。ある意味で都市伝説でした。

ところが今回、このブログを題材に**表示速度とコンバージョン率の関係を明らかにして、改善による効果と費用を計画**できるデータを計測できました。

**「結局、速度改善でどのくらい収益増が見込めるの？ どのくらいまでコストをかけていいの？」**という本質的な課題についても考察します。

<a href="https://blog.ideamans.com/assets/web-vitals-ogp.png"><img alt="web-vitals-ogp.png" src="https://blog.ideamans.com/assets/web-vitals-ogp.png" width="1200" class="img-fluid" style="" /></a>

## 結論 「Webの表示が遅いとコンバージョン率が下がる」は本当

このブログのコンバージョンを**「ユーザーが記事ページで500ピクセル以上スクロールするアクションを3回行うこと」**と定めて1週間データを収集したところ、表示速度などWebの健全性指標(**Core Web Vitals** + 3つのWeb Vitals)との間に次の関係が確認されました。

**わずか1〜2秒の違いがCVRを半減**させます。この計測結果について詳しく解説し、統計学的にも誤差でないことを検証していきます。

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7jKZVCU8I11B-dDJan1xFODTgm2S6SKv6ZgTbe9xO7UUXav6F0Yqek-rn9JbhlpvHaWSYsVMgnVzm/pubhtml?gid=352764755&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="500"></iframe>

<iframe src="https://www.ideamans.com/_mautic/form/40" width="100%" height="700"><p>Your browser does not support iframes.</p></iframe>

## Core Web Vitals と Web Vitals

2021年5月から [Core Web Vitals](https://developers-jp.googleblog.com/2020/05/web-vitals.html) が[検索順位の要因に加わる](https://developers.google.com/search/blog/2020/11/timing-for-page-experience)ことが話題になっています。

Core Web Vitalsは3つの指標からなりますが、`Core`に含まれないWeb Vitalsもあります。

今回は以下の**Core Web Vitals + 3つのWeb Vitalsを計測して、コンバージョンとの関係**を明らかにしていきます(★印が Core Web Vitals)。

* `★ LCP` ファーストビューのいちばん大きな要素(メインビジュアルなど)が表示されるまでの時間
* `★ FID` ユーザーの最初の操作への反応が遅延した時間
* `★ CLS` 画像など後発的に出現する要素によってレイアウトが変化した総量 ※ この指標だけ時間=速度ではない
* `TTFB` 最初のHTMLのサーバー応答時間
* `FCP` TTFB後にページの描画が始まるまでの時間
* `OL(OnLoad)` ドキュメントのloadイベント(リソースが一通りダウンロードされた)までの時間

## Web Vitalsの収集方法と期間

こちらのJavaScriptモジュールを使うと、ブラウザが計測した各種Web Vitalsを取得できます。

[GoogleChrome/web\-vitals: Essential metrics for a healthy site\.](https://github.com/GoogleChrome/web-vitals)

ただし全てのブラウザでWeb Vitalsを完全に取得できるわけではありません。可能な範囲で取得できた値をサンプルと呼びます。

現在、みなさんがこのブログのページを開くたびに、上記のモジュールを使ってその体験のWeb Vitalsサンプルを取得し、データベースに格納しています(2021年2月4日現在)。

この記事では、**2021年1月25日(月)〜2021年1月31日(日)の7日間**で計測したデータを元に分析しています。

### コンバージョンの定義

冒頭でも触れましたが、今回はこのブログのコンバージョンを次のように定めます。

**「1ユーザーが記事ページで500ピクセル以上スクロールするアクションを3回行うこと」**

直帰せず、ブログの内容に少しでも興味を示す行動が見られたり、再訪があれば目的達成というイメージです。

コンバージョンが確認されたら、そのセッションのサンプルを過去の分までさかのぼって値の属性を「コンバージョンあり」とマークします。これでコンバージョンに寄与したWeb Vitalsの値と、それ以外のWeb Vitalsの値を比較します。

<img alt="cvr-sample.png" src="https://blog.ideamans.com/assets/cvr-sample.png" width="600" class="img-fluid" style="" />

つまり**Web Vitalsがコンバージョンを支える要因としてどの程度影響しているのか**の対照実験です。

細かい点では、クローラーと思われるアクセスは当然除外します。記事ページはユニークに識別していません。同じ記事を3回読んでもコンバージョンとなります。また、1回コンバージョンするとセッションをリセットしています。同じユーザーが6回ページを閲覧すると、2回のコンバージョンになります。これらは大勢に影響しないと判断します。

### コンバージョン率はサンプル数ベース

もうひとつ、**コンバージョン率(CVR)の計算はサンプル数ベース**であることを述べておきます。

**コンバージョン率(CVR) = コンバージョンありのサンプル数 / 全サンプル数**

上記の図の例だと通常は CVR = 1ユーザー / 3ユーザー ≒ 33.3% になるところですが、 この記事では **CVR = 4サンプル / 7サンプル ≒ 57.1%** となります。

わかりやすくコンバージョン率(CVR)と表現しましたが、他の呼び名が正しいかもしれません。

## 計測結果〜LCPについて

まずはLCPについて見てみます。LCPはビューの最大要素(多くの場合はメインビジュアルや見出しテキスト)が表示されるまでの時間です。

### ユーザーの体験にはバラつきがある

Googleは**LCP 2.5秒未満を快適(Good)、2.5〜4秒を要改善(Need Improvement)、4秒以上をストレスを感じる(Poor)**という水準を設けています。次のグラフはこのLCPの水準の比率が時系列でどう推移したかです。

<img alt="lcp-distribution.png" src="https://blog.ideamans.com/assets/lcp-distribution.png" width="500" class="img-fluid" style="" />

**このブログはおよそ90%以上のPVを快適な体験として提供できている**と言えます(少なくとも表示速度については)。

ヒストグラムがこちらです。

<img alt="lcp-histogram.png" src="https://blog.ideamans.com/assets/lcp-histogram.png" width="500" class="img-fluid" style="" />

当然ですが、LCPは上記のように連続的な値を持ち、バラつきがあります。良好と分類されていても0.5秒の体験もいれば、2.4秒の体験もあります。**最大値は約14秒**にもなりました。

自分の端末やいつものネットワーク環境でサイトを閲覧すると、だいたい似たような体感速度で表示されます。そのため**サイトの応答性を均一と思いがち**です。ブロードバンドと4Gが当たり前の日本で、ユーザーによってそんなに差があるとも思えません。

しかしそれは思い込みに過ぎず、**見えないところでユーザーは違う体験をしている**のだと改めて気付かされました。

### コンバージョンにつながったサンプルはLCPが45%速い

いよいよLCPとコンバージョンの関係です。

まず**コンバージョンにつながったLCPは平均 0.94秒、そうでないLCPは平均 1.36秒**となりました。

<img alt="cv-lcp.png" src="https://blog.ideamans.com/assets/cv-lcp.png" width="1500" class="img-fluid" style="" />

両者のグループのLCP平均値には45%の差があり、時系列でもコンバージョンありのLCPは概ね短い時間を記録しています(グラフが途切れている部分はコンバージョン自体がなかった時間帯を表します)。

ヒストグラムで比べてみても、明らかにコンバージョンありのグループは短い時間をピークに分布しています。仮説通り、**LCPはコンバージョンに関係がある**と言えそうです。

<img alt="cv-lcp-histogram.png" src="https://blog.ideamans.com/assets/cv-lcp-histogram.png" width="500" class="img-fluid" style="" />

### LCP 2.5秒未満と2.5〜4.0秒ではCVRに2倍以上の開き

次は逆に、**快適なLCP(2.5秒未満)と、要改善(2.5秒〜4.0秒)、ストレスを感じる水準(4秒以上)に分けてCVRを比較**します。冒頭の結論でも紹介した値です。

<img alt="lcp-cvr-detail.png" src="https://blog.ideamans.com/assets/lcp-cvr-detail.png" width="1500" class="img-fluid" style="" />

4秒以上は幅が広いのでさておき、**2.5秒未満だと13.47%だったCVRが、2.5秒〜4.0秒では半分以下の5.91%に！**

時系列で見ると、快適なLCP(緑)は安定してコンバージョンがあるのに対し、要改善とストレスを感じる水準ではコンバージョンがない(CVR=0%)時間帯が多くあります。

### 統計学的な検証

このように興味深い結果が得られましたが、**サンプルが少ないから誤差じゃないの？**と思いませんか。自分もそう思いました。

そこで統計学的にも検証してみました。詳しい手順は説明を省きますが、結論として誤差ではありません。

まずはコンバージョンの有無によるLCP平均値です。95%信頼区間を求めると、コンバージョンありのLCPは平均0.846秒〜1.041秒、コンバージョンなしのLCPは平均1.307秒〜1.417秒となります。

**コンバージョンありのLCPとコンバージョンなしのLCPは、誤差があったとしても平均値で約0.3秒〜0.6秒の差**が現れます。

<p class="text-muted">※ 信頼区間は母集団を正規分布として計算しましたが、ヒストグラムの通り、実際は対数正規分布と見た方がよいので厳密には計算方法が違います。ただ、私の数学力がここで限界なので傾向を掴むところまででご容赦くださいm(_ _)m</p>

次に、LCPを快適(2.5秒未満)・要改善(2.5秒〜4秒)・ストレスを感じる水準(4秒以上)に分けた場合ごとのCVRです。

カイ二乗検定のp値は 0.000124263。**2.5秒未満はCVR 13.47%、2.5〜4.0秒ではCVR 5.91%となった結果は誤差による偶然ではない**と言えます。

## 他のWeb Vitalsについて

同様に他のWeb Vitalsについても同様にコンバージョンとの関係性を見てみます。

Coreではない速度系のWeb Vitalsである**TTFB(サーバー応答時間)、FCP(LCPに先立つ何らかの描画開始時間)、OL(OnLoad)もLCP同様にコンバージョンと強い関係**があります。

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7jKZVCU8I11B-dDJan1xFODTgm2S6SKv6ZgTbe9xO7UUXav6F0Yqek-rn9JbhlpvHaWSYsVMgnVzm/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="500"></iframe>

一方、Core Web Vitalsに含まれるFID、CLSはコンバージョンとの明確な関係は見られませんでした。

ただ、このブログではFIDとCLSはほぼ0で、**対照実験を行うサンプル自体として微妙**です。

ここでFIDのCVRだけ数値が大きいことが気になったかもしれません。FID(First Input Idle)はユーザーの最初の操作に対する応答時間で、**ユーザーが操作を行わないことには計測されません。**少なくとも何らかのアクションを起こしたユーザーからしかサンプルを収集できないので、自ずとCVRも高くなるのです。

## Web Vitals改善の費用対効果

最後に**「Web Vitalsを改善するとどのくらいサイトの収益が改善するのか？」**を考察します。

### コンバージョン率の限界

サイトの表示が速くなってもいらないものはいらないし、興味のない記事は読みません。**「このサイト速いな、もう一個買おう」という行動はありえません。**

このブログではLCPが快適な場合(2.5秒未満)のCVRが13.47%でした。LCPを改善してもこれ以上はスループットは上がらない、**LCPの改善によるコンバージョン率向上の限界**であると仮定できます。

<div class="text-muted">※ 2.5秒が妥当なのかという議論もありますが、ここではその前提で進めます。</div>

### 同等の集客コストに換算して妥当性を比較

**ものすごく単純化したモデル**が以下です。LCPが良好なグループとそうでないグループが50対50で存在し、それぞれCVRが一様に20%と10%であるとシンプルに想定します。

<img alt="cvr-cost-performance.png" src="https://blog.ideamans.com/assets/cvr-cost-performance.png" width="500" class="img-fluid" style="" />

もし**快適なLCPのカバー率を50%→80%に上げると、3%分のコンバージョンを取り戻す**ことができると予測できます。

これは表面的なコンバージョン率15%に対して20%、つまり**集客20%増に相当**します。

30%の速度改善(良好なLCPのカバー率の30%引き上げ)が、コンバージョン率を維持して20%集客を増やす方策よりコストが低いなら実施すべきと論理的に考えられます。

### Web Vitals改善は効果が継続するが上限がある

広告による集客増は資金を投入し続ける必要がありますが、**Web Vitals改善による燃費改善は一度実施すると効果が持続**します(負荷が上がる変更や大きな環境変化がなければ)。これはSEOが好まれる理由と同じで魅力的です。

一方で、Web Vitals改善による収益増加には上限があります。**ユーザーが感じたストレスにより機会損失したコンバージョンしか原資がない**からです。

すでに十分に速い(快適なLCPのカバー率が高い)サイトほど増収の余地が小さく、最後の10%改善を絞り出すのは往々にして大変です。すでに十分軽いのに**無いものを望もうとしていないか**、数値に基づく判断が必要です。

### LCPがコンバージョン率の直接原因ではない

この記事ではLCPにフォーカスして説明してきましたが、因果関係として**「LCPの改善 → コンバージョン率が上がる」ではありません。**

LCPは表示速度を定量化する上での一面的な指標にすぎず、**「サイトの応答が早くなる → LCPも改善」「サイトの応答が早くなる → 離脱が減りコンバージョン率が上がる」という事象に強い関係**があるにすぎません。

Core Web VitalsはSEOにも関係して名実ともに魅力がありますが、過度に固執したり極端な最適化で暗黒面に陥らないことが大切です。

<iframe src="https://www.ideamans.com/_mautic/form/40" width="100%" height="700"><p>Your browser does not support iframes.</p></iframe>
