---
# Astrowind
title: 'PageSpeed Insightsの真実。点数の公式と高得点をとれない理由。5項目の最適化をすることがスコアアップの近道。'
excerpt: '「レポートの指示通り改善したけど点数が上がらない」 PageSpeed Insi...'
updateDate: 2020-06-18
publishedDate: 2019-04-23
tags: 
  - lighthouse

  - pagespeed-insights

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/2019-06-20-psi-comp.jpg
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 10:17:36
publishedAt: 2019-04-23 10:16:29
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

## 「レポートの指示通り改善したけど点数が上がらない」

PageSpeed Insightsについて、なんとなくこんなイメージを持っていないでしょうか。

* 点数はブラックボックスになっている。
* レポートに表示される改善提案をコツコツ解決すると点数は100点に近づく。

**どちらも間違い**です。

PageSpeed Insightsについてソースコードやデータを徹底検証してわかった、こんな裏側を紹介します。

* 点数には公式があります。
* 技術点の減点方式ではありません。改善提案を解決しても点数が上がるとは限りません。
* 特にJavaScriptが重いページは致命的です。

パフォーマンス改善のヒントになれば何よりです。

## そもそもPageSpeed Insightsの点数って何？

PageSpeed Insightsが表示する点数とは、[対数正規分布](https://ja.wikipedia.org/wiki/%E5%AF%BE%E6%95%B0%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83)とみなすいくつかパフォーマンス指標の累積分布の補数の加重平均です(難しい！)

できるだけ**数式を使わず**説明してみます。

点数とはざっくり言うと**表示スピードの順位**です。実際に世界中のページの速度を調べるわけにはいかないので、統計的に順位を推定します。

<img alt="psi-score-1.png" src="https://blog.ideamans.com/assets/psi-score-1.png" width="600" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

表示スピードに関する指標を、**100人の競争に例えて1位相当なら100点、2位相当なら99点...ビリなら0点**を割り当てるのが基本的な考え方です(100〜0なので正確には101人ですが)。

<a href="https://blog.ideamans.com/assets/da22569e69950fb7443abae780e148f15913719a.png"><img alt="psi-score-2.png" src="https://blog.ideamans.com/assets_c/2019/04/da22569e69950fb7443abae780e148f15913719a-thumb-500xauto-1008.png" width="600" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

なので**そのサイトなりに頑張った努力点というものはありません。確実に順位を上げないと点数は上がりません**。

この計算方法はあとでまた出てくるので、**順位点数**と呼ぶことにします。



## 点数に使われる指標は5つだけ

PageSpeed Insightsを実行するといろいろな指標や改善提案が出てきます。全部で33個の監査項目があります(2019年4月現在)。

でも実は**点数に直接関係するのはそのうちの5項目だけ**です。

残り28項目は言ってみれば**ただのアドバイス**です。もちろん点数に直接関係する5項目に影響する内容が多いので、改善するとスコアが上がることが多いのですが、上がらないこともあります(脚注※1)。

<a href="https://blog.ideamans.com/assets/psi-audits.png"><img alt="psi-audits.png" src="https://blog.ideamans.com/assets_c/2019/04/psi-audits-thumb-700xauto-1002.png" width="700" height="672" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

この裏付けについては[Qiitaに記事を書きました](https://qiita.com/miyanaga/items/d38124cdd64a1999fed9)。興味のある方はご参考ください。

## 点数の公式

点数に直接関係する次の5項目はいずれも**Webページ表示の初期段階におけるチェックポイントがいつ完了するか**を示す指標です(※2)。

<table border="1" cellpadding="5" cellspacing="0" class="tablestyle">
	<tr>
		<th>英語表記</th>
		<th>日本語表記</th>
		<th>重み</th>
		<th>変数</th>
	</tr>
	<tr>
		<td>Interactive</td>
		<td>インタラクティブになるまでの時間</td>
		<td>5</td>
		<td>tti</td>
	</tr>
	<tr>
		<td>Speed Index</td>
		<td>速度インデックス</td>
		<td>4</td>
		<td>speedindex</td>
	</tr>
	<tr>
		<td>First Contentful Paint</td>
		<td>コンテンツの初回イベント</td>
		<td>3</td>
		<td>fcp</td>
	</tr>
	<tr>
		<td>First CPU Idle</td>
		<td>初回のCPUアイドル</td>
		<td>2</td>
		<td>fci</td>
	</tr>
	<tr>
		<td>First Meaningful Paint</td>
		<td>意味のあるコンテンツの初回イベント</td>
		<td>1</td>
		<td>fmp</td>
	</tr>
</table>

指標については[こちらの記事がわかりやすい](https://havelog.ayumusato.com/develop/performance/e744-performance_metrics.html)のでぜひご参考ください。

これらの指標それぞれについて先ほどの**順位点数**を出します(0〜100)。その5つの順位点数に重みを加味して平均値を出したものが、PageSpeed Insightsで表示される点数です。

<img alt="psi-formula.png" src="https://blog.ideamans.com/assets/148bc38cb3866dc404b908d13e71d427dfe30181.png" width="683" height="150" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

## つまりどういうことか

PageSpeed Inshgtsの点数は**いかにファーストビューが速く完成して操作できるようになるか**、それが全てということです。

例えば、同じ内容のWebページでも、

* **A** ファーストビューが1秒で表示されるが、スクロールしたときのコンテンツはその後4秒かけて少しずつ表示される場合
* **B** 読み込みから5秒は画面が真っ白だが、その後ページの上から下まで一気に表示される場合

PageSpeed Insightsは**Aの場合を高く評価し、Bの点数は低く評価**します。これは実際のページ離脱の感覚として理に適っていると思います。

## 点数が上がらない最大の理由はJavaScript

Webページ表示の初期段階で最も時間を消費するのが、実はJavaScriptとCSSの読み込みです(レンダリングブロックリソース)。

特にJavaScriptが要注意です。この検証についても詳しくは[Qiitaに書きました](https://qiita.com/miyanaga/items/b3d955a6fd70ef7d89ec)。

次のグラフはサンプルとした通販サイト300ページにおけるJavaScriptの転送量とPageSpeed Insightsの点数の関係です。**JavaScriptのデータが大きなページほど、高い点数を取れていない**ことを示しています。

<a href="https://blog.ideamans.com/assets/psi-js.png"><img alt="psi-js.png" src="https://blog.ideamans.com/assets_c/2019/04/psi-js-thumb-600xauto-1006.png" width="600" height="423" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

**外部の(インラインではない)JavaScriptが大きいページは、まずそれに対処しないと何をやっても焼け石に水です。**

* head要素内ではなくbody要素の末尾に移動する
* 遅延してよいscript要素にはasync属性を付けて非同期に読み込ませる
* 使われていないJavaScriptを削除する
* トラッキングタグを見直す
* 使われていない機能を断捨離する

JavaScriptの多いページでは、まずは転送量ベースで500KBに抑えることを一つの目安にしてみましょう。

## ファーストビューの画像は忘れず軽量化を

多くのサイトがファーストビューで大きな画像を見せるデザインを採用しています。

その画像が重い場合も、PageSpeed Insightsの点数は悪化します。全部軽量化するのが大変でも、ファーストビューに位置する画像は必ずサイズを最小化しましょう。

弊社では[LightFile](https://www.ideamans.com/lightfile/)という画像軽量化の自動化サービスを提供しています。

## 画像の多いサイトは遅延ロードを

[画像の多いページもPageSpeed Insightsの点数が低い傾向](https://qiita.com/miyanaga/items/b3d955a6fd70ef7d89ec)があります。おそらく通信経路が渋滞して必要なリソースの到着が遅れるからではないかと推測します(未検証につきあくまで憶測です)。

この場合は、スクロールしないと見えない領域の[画像を遅延ロード](https://qiita.com/master-of-sugar/items/33d7e99c4aa1afa8ee4c)することで大きな改善が期待できます(実体験としても)。

これまでJavaScriptで行われてきた画像の遅延読み込みですが、[Chromeがブラウザの機能として提供](https://tech.recruit-mp.co.jp/front-end/post-17429/)するかもしれません。

## まとめ

PageSpeed Insightsの点数は、とてもシビアな短距離走の世界でした。

どうしても新しい試みや設定の追加など**「足し算」**に頼ってしまいがちですが、点数の改善には無駄なものをそぎ落とす**「引き算」**の方が重要です。

「引き算」は日本的な意思決定では難しいと感じますが、ユーザーのために身軽なサイトを目指しましょう！

* ※1 この記事は点数にフォーカスしたため書き方が極端ですが、すべてユーザーにとって有益なアドバイスであることは言うまでもありません。
* ※2 速度インデックス(Speed Index)は、PageSpeed Index(Lighthouse)においては時間単位に換算されているようです(<a href="https://github.com/paulirish/speedline">Speedline</a>の仕様？）。