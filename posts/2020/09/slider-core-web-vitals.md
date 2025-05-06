---
# Astrowind
title: 'Core Web Vitalsを意識したスライダーのライブラリ選定と指標改善のためのチューニング'
excerpt: 'UIとしてはアンチパターンと言われがちなスライダー(カルーセルやスライドショーと...'
updateDate: 2020-09-11
publishedDate: 2020-09-10
tags: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/sliders-ogp.jpg
category: core-web-vitals

# カスタム
updatedAt: 2020-09-11 22:56:01
publishedAt: 2020-09-10 11:00:00
categories: 
  - core-web-vitals

  - lighthouse

  - pagespeed-insights

  - performance

categoryLabels: 
  - Core Web Vitals

  - Lighthouse

  - PageSpeed Insights

  - 表示高速化

authorId: miyanaga
subTheme: bs4
recommended: false
---

[UIとしてはアンチパターンと言われがち](https://uxmilk.jp/54114)なスライダー(カルーセルやスライドショーとも呼ばれますが、今回はスライダーで統一)ですが、ファーストビューの「にぎやかし」として根強い人気があり、Web制作の現場でよく遭遇します。

<video autoplay loop src="https://blog.ideamans.com/assets/sliders.mp4" width="320px"></video>

大きな画像を何枚も読み込み、それをJavaScriptで制御するのは**聞いただけでも重い機能**です。2021年から検索順位に関係すると言われる[Core Web Vitals](https://developers-jp.googleblog.com/2020/05/web-vitals.html)や、[PageSpeedスコア](https://developers.google.com/speed/pagespeed/insights/?hl=JA)といったフロントエンドパフォーマンス指標にも明らかに影響がありそうです。

**ライブラリの種類が多いことも悩みの種**です。今回、フロントエンドパフォーマンスの観点からはどのライブラリを選ぶべきか、また、指標をできるかぎり悪化させないためにどんな注意が必要か、いくつか実験してみました。

<!-- <style>
.fig-title {
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
</style> -->

## 結論

時間の無い人向けに、今回の結論です。

* 特にファーストビューでスライダーを使うと**Core Web VitalsやPageSpeedスコアは悪化**する。当然！
* パフォーマンスについては**ライブラリによる違いは意外と小さい**。要件優先で選ぼう！
* ちょっとした**CSSによるレイアウト調整で指標(CLS)を改善**できる。忘れずにやろう！
* PC用とスマホ用の画像を**CSSで切り替えるのはNG**。srcsetやpictureを使おう！
* 2枚目以降はloading="lazy"による**遅延読み込みも効果的**。簡単なので指定しよう！
* **画像が多いほどパフォーマンスが低下**する。枚数はほどほどに！

## 実験の概要

今回確かめたかったことは次の2点です。

* スライダーで**一番「軽い」ライブラリはどれ？**
* スライダーを使いつつ**指標の低下を抑えるにはどうしたらよい？**

そこで次の実験をしました。

1. このブログのトップページ(のコピー)に最近の記事バナー5枚によるスライダーを表示
2. スライダーを実装するライブラリを変えて、Lighthouseで指標を測定
3. SlickSlider を題材にチューニングを実施。Lighthouseで指標を測定

<a href="https://blog.ideamans.com/assets/slider-experiment.png"><img alt="slider-experiment.png" src="https://blog.ideamans.com/assets_c/2020/09/slider-experiment-thumb-1000xauto-1228.png" width="1000" height="401" class="img-fluid thumbnail" /></a>

### 比較したライブラリ

次の9種類のライブラリを比較しました。

jQueryプラグインまたは依存ライブラリ不要の有名どころで、最終更新日が2年以内、GitHubスターが1000以上を基準にしました。

正直、トレンドに疎いので「このライブラリがない！」という見落としがあったら教えてください。

<!-- <style>
.table-custom th {
  font-size: 70%;
  min-width: 120px;
}
.table-custom .head th {
  font-size: 100%;
  min-width: auto;
}
.table-custom td {
  font-size: 85%;
  text-align: center;
}
</style> -->
<table class="table table-striped table-custom">
 <tr class="head text-center">
  <th></th>
  <th><a href="https://kenwheeler.github.io/slick/">Slick Slider</a></th>
  <th><a href="https://glidejs.com/">Glide</a></th>
  <th><a href="https://swiperjs.com/">Swiper</a></th>
  <th><a href="https://ganlanyuan.github.io/tiny-slider/">tiny slider</a></th>
  <th><a href="https://flickity.metafizzy.co/">Flickity</a></th>
  <th><a href="https://bxslider.com/">bxSlider</a></th>
  <th><a href="https://flexslider.woothemes.com/">Flex Slider2</a></th>
  <th><a href="https://sachinchoolur.github.io/lightslider/">Light Slider</a></th>
  <th><a href="https://nickpiscitelli.github.io/Glider.js/">Glider</a></th>
 </tr>
 <tr>
  <th>デモ</th>
  <td><a href="https://blog.ideamans.com/sliders-slick.html">開く</a></td>
  <td><a href="https://blog.ideamans.com/sliders-glide.html">開く</a></td>
  <td><a href="https://blog.ideamans.com/sliders-swiper.html">開く</a></td>
  <td><a href="https://blog.ideamans.com/sliders-tinyslider.html">開く</a></td>
  <td><a href="https://blog.ideamans.com/sliders-flickity.html">開く</a></td>
  <td><a href="https://blog.ideamans.com/sliders-bxslider.html">開く</a></td>
  <td><a href="https://blog.ideamans.com/sliders-flexslider2.html">開く</a></td>
  <td><a href="https://blog.ideamans.com/sliders-light.html">開く</a></td>
  <td><a href="https://blog.ideamans.com/sliders-glider.html">開く</a></td>
 </tr>
 <tr>
  <th>バージョン</th>
  <td>1.8.1</td>
  <td>3.4.1</td>
  <td>6.2.0</td>
  <td>2.9.3</td>
  <td>2.2.0</td>
  <td>4.2.15</td>
  <td>2.7.2</td>
  <td>1.1.6</td>
  <td>1.7.4</td>
 </tr>
 <tr>
  <th>最終更新日</th>
  <td>2019/11/27</td>
  <td>2019/9/24</td>
  <td>2020/9/8</td>
  <td>2020/7/28</td>
  <td>2020/5/18</td>
  <td>2018/5/3</td>
  <td>2019/5/8</td>
  <td>2018/4/1</td>
  <td>2020/7/25</td>
 </tr>
 <tr>
  <th>GitHubスター</th>
  <td>26,000</td>
  <td>5,600</td>
  <td>24,700</td>
  <td>3,300</td>
  <td>6,300</td>
  <td>4,200</td>
  <td>5,000</td>
  <td>1,900</td>
  <td>2,300</td>
 </tr>
 <tr>
  <th>CSSサイズ(kb)</th>
  <td>4.8</td>
  <td>2.0</td>
  <td>13.4</td>
  <td>2.1</td>
  <td>2.4</td>
  <td>2.9</td>
  <td>6.8</td>
  <td>5.4</td>
  <td>1.8</td>
 </tr>
 <tr>
  <th>JavaScriptサイズ(kb)</th>
  <td>41.9</td>
  <td>22.7</td>
  <td>136.3</td>
  <td>31.2</td>
  <td>52.8</td>
  <td>23.0</td>
  <td>22.5</td>
  <td>15.6</td>
  <td>7.8</td>
 </tr>
 <tr>
  <th>合計サイズ(kb)</th>
  <td>46.6</td>
  <td>24.8</td>
  <td>149.7</td>
  <td>33.3</td>
  <td>55.2</td>
  <td>25.9</td>
  <td>29.3</td>
  <td>21.1</td>
  <td>9.6</td>
 </tr>
 <tr>
  <th>依存ライブラリ</th>
  <td>jQuery</td>
  <td>-</td>
  <td>-</td>
  <td>-</td>
  <td>-</td>
  <td>jQuery</td>
  <td>jQuery</td>
  <td>jQuery</td>
  <td>-</td>
 </tr>
 <tr>
  <th>CSSアニメーション</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong>※1</td>
 </tr>
 <tr>
  <th>自動再生</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-danger">×</strong></td>
 </tr>
 <tr>
  <th>ループ再生</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-danger">×</strong></td>
 </tr>
 <tr>
  <th>インジケーター</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong><small>※1</small></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
 </tr>
 <tr>
  <th>左右ボタン</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong><small>※1</small></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
 </tr>
 <tr>
  <th>モバイル表示</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
 </tr>
 <tr>
  <th>スワイプ</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
 </tr>
 <tr>
  <th>画像数</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
 </tr>
 <tr>
  <th>レスポンシブ</th>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-danger">×</strong></td>
  <td><strong class="text-danger">×</strong></td>
  <td><strong class="text-danger">×</strong><small>※1</small></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
 </tr>
 <tr>
  <th>CSSのみでの体裁</th>
  <td><strong class="text-danger">×</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-success">✓</strong></td>
  <td><strong class="text-danger">×</strong></td>
  <td><strong class="text-danger">×</strong></td>
  <td><strong class="text-danger">×</strong></td>
  <td><strong class="text-danger">×</strong><small>※2</small></td>
  <td><strong class="text-danger">×</strong></td>
  <td><strong class="text-danger">×</strong></td>
 </tr>
 <tr>
  <th>備考</th>
  <td></td>
  <td></td>
  <td></td>
  <td><small>※1</small> 要CSS</td>
  <td><small>※1</small> レイアウト崩れあり</td>
  <td></td>
  <td><small>※1</small> resizeイベントで自作すれば可 ※2 画像も表示されない</td>
  <td></td>
  <td><small>※1</small> スクロールによる実装</td>
 </tr>
</table>

### 測定と指標の値について

ネットワーク性能の誤差を除いてフロントエンドパフォーマンスを計測するため、ローカルネットワーク内で完結する形でLighthouse → Webサーバーに対して測定を行いました。

ライブラリや比較対象による指標の違いがわかりやすく出るよう、パラメーターも少し調整しています。

なのでスコアは[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=JA)と異なります。指標の絶対値にもあまり意味はありません。**「対象同士で相対的に高いか低いか」**に着目してください。

## ライブラリ比較編 - ベストチョイスはどれ？

スライダーの実装に9種類のライブラリを使い分けたときの`LCP`です。それぞれ10回測定した結果の[箱ひげ図](https://ja.wikipedia.org/wiki/%E7%AE%B1%E3%81%B2%E3%81%92%E5%9B%B3)です。

<div class="alert alert-info">
<h4>LCP = Largest Conentful Paint</h4>
<div>Core Web Vitalsの構成指標のひとつでファーストビューの最大要素の描画タイミング。この例では「スライダーの描画タイミング」とほぼ同義です。</div>
</div>

緑のライン(中央値)と、青のボックス(第1四分位〜第3四分位)に着目ください。

比較対象として、スライダー自体を表示しないパターン `none` と スライダーを使わず画像を1枚だけ表示するパターン `image` も含みます。

<div class="mb-4">
<div class="fig-title">スライダーライブラリごとのLCP</div>
<img alt="sliders-lcp.png" src="https://blog.ideamans.com/assets/899e8922b2e09324ce0870c11eea5890f49d38c6.png" width="1682" height="942" class="img-fluid"  />
</div>

スライダー不使用の`image`および`none`に対し、**各スライダー利用時はLCPスコアが総じて低下しています**。

一方で、**ライブラリ間では著しい違いは見られません**。ライブラリによってコード量も違うのでもっと指標に違いが出ると予想していましたが、それには反した結果でした。

現在はどのスライダーライブラリもJavaScriptによる力技ではなく、高速なCSSアニメーションで実現されています。そういった理由で性能の差がないのかもしれません。

PageSpeedスコアもほぼ同様でした。「ベストチョイスはこれだ！」と言い切りたかったですがちょっと残念でした。**「使わずに済むなら一番だけど、使うなら好きなライブラリでいいんじゃない？」**というのが今回の結論です。

### CLSは大きく悪化

`CLS`への影響は深刻です。10回の測定結果の箱ひげ図です。

<div class="alert alert-info">
<h4>CLS = Cumulative Layout Shift</h4>
<div>Core Web Vitalsの構成指標のひとつで、ページの描画進行とともに発生するレイアウト変化の総量。「ボタンを押そうとしたらそれより上に画像などが読み込まれたことで位置がずれちゃった」現象が少ないことの指標。</div>
</div>

<div class="mb-4">
<div class="fig-title">スライダーライブラリごとのCLS</div>
<img src="https://blog.ideamans.com/assets/1f78566f277dea834330fe575c464005ec01de65.png" width="1692" height="936" class="img-fluid"  alt="sliders-cls.png" >
</div>

スライダー不使用の`none`と`image`ではCLSは100点(レイアウトのズレは発生しない)ですが、スライダー使用時はスコアに大きなバラつきが生じています。

どんな機能やコンテンツもWebページに追加すると、パフォーマンスへの影響はゼロではありません。スライダーも同様で、**使用するならCore Web Vitalsの低下が引き換え**になることがわかりました。

次はその低下をできるだけ抑えるチューニングについて考えてみます。

## チューニング編 - Slick Sliderの指標悪化を抑えてみる

最もGitHubスター数が多く名前を耳にすることも多いSlick Sliderを題材に、Core Web Vitalsに関係しそうな次の実験を行いました。

* 画像を5枚から減らす(試験的に1枚)とスコアが上がる？ [slick-1image](https://blog.ideamans.com/sliders-slick-1image.html)
* 逆に5枚から10枚に増やすとスコアが下がる？ [slick-10images](https://blog.ideamans.com/sliders-slick-10images.html)
* 画像の読み込み優先度(`loading`属性)を活用するとスコアが上がる？ [slick-loading](https://blog.ideamans.com/sliders-slick-loading.html)
* CSSでレイアウトを整えてCLSを抑制するとスコアを改善できる？ [slick-css](https://blog.ideamans.com/sliders-slick-css.html)

### LCPの改善

まずは`LCP`の変化です。これまでと同様に10回計測した結果の箱ひげ図です。

<div class="mb-4">
<div class="fig-title">Slick SliderのチューニングによるLCPスコアの変化</div>
<img alt="slick-lcp.png" src="https://blog.ideamans.com/assets/slick-lcp.png" width="1682" height="942" class="img-fluid" />
</div>

概ね予想通りです。画像を5枚から10枚に増やす(`slick-10images`)と大きくLCPスコアが低下しますが、1枚に減らしたり(`slick-1image`)、CSSを調整したり(`slick-css`)、loading属性を活用する(`slick-loading`)とLCPスコアが改善されました。

### CLSの改善

次に`CLS`の変化です。

<div class="mb-4">
<div class="fig-title">Slick SliderのチューニングによるCLSスコアの変化</div>
<img alt="slick-cls.png" src="https://blog.ideamans.com/assets/slick-cls.png" width="1720" height="1022" class="mt-image-center" style="img-fluid" />
</div>

CSSの調整で、目論見通りCLSスコアを100点にすることができました！

## Core Web Vitalsを意識したスライダーのチューニング

Core Web VitalsやPageSpeedスコアなどのフロントエンドパフォーマンス指標を低下させずにスライダーを使用するには次のポイントを参考にしてください。

### ポイント1 画像数はほどほどに

スライダーの画像数がスコアに直結します。[冒頭で参照した記事「アンチパターンと言われるカルーセルを改善するポイント」](https://uxmilk.jp/54114)では5枚以内を推奨しています。ついでに言うと**「スライダーの2枚目移行をクリックする人は訪問者の0.16%」**という数値も紹介されています。

### ポイント2 CSSでの画像出し分けはダメ絶対

レスポンシブWebデザインを採用するサイトでは、スライダーで表示する画像をPC用とスマホ用に分けているサイトが少なくありません。

文字の可読性を考えると賢明な対応なのですが、十中八九のサイトがCSSとMedia Queriesによって画像を出し分けています。しかしこれは誤った対応なので是正しましょう。

<pre><code class="language-html">&lt;!-- CSSで出し分けると画像が両方ダウンロードされてしまう --&gt;
&lt;img class=&quot;sp&quot; src=&quot;path/to/banner1-sp.jpg&quot;&gt;
&lt;img class=&quot;pc&quot; src=&quot;path/to/banner1-pc.jpg&quot;&gt;
</code></pre>

この方法ではブラウザはスマホ用バナー`banner1-sp.jpg`とPC用バナー`banner1-pc.jpg`の両方をとにかくダウンロードしてしまいます。その上で表示・非表示を制御します。

5枚のスライドなら10枚の画像をダウンロードすることになるので、先ほど検証した**画像の枚数が多いほど指標が悪化する**事態を招きます。

モダンブラウザ向けの対応としては`srcset`属性や`picture`要素を利用するのが正解です。例えば`srcset`を使った以下の記述なら、意図したとおりスマホ向けにPC用の画像をダウンロードすることはありません。

<pre><code class="language-html">&lt;!-- srcsetなら表示しない画像をダウンロードしない --&gt;
&lt;img srcset=&quot;path/to/banner1-sp.jpg 480w, path/to/banner1-pc.jpg&quot; src=&quot;path/to/banner1-pc.jpg&quot;&gt;
</code></pre>

## ポイント3 loading属性を指定する

モダンブラウザではSafariが未対応ですが、`img`要素に`loading`属性を指定することで[画像の読み込み優先度を制御](https://web.dev/native-lazy-loading/)できます。

今回の例では、1枚目の画像に優先的に読み込みをさせる`loading="eager"`、2枚目以降の画像は優先度を下げる`loading="lazy"`を指定しました。

<pre><code class="language-html">&lt;!-- 1枚目だけ eager、2枚目以降は lazy --&gt;
&lt;ul class=&quot;slider&quot;&gt;
  &lt;li&gt;&lt;img src=&quot;path/to/banner1.jpg&quot; loading=&quot;eager&quot;&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src=&quot;path/to/banner2.jpg&quot; loading=&quot;lazy&quot;&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src=&quot;path/to/banner3.jpg&quot; loading=&quot;lazy&quot;&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src=&quot;path/to/banner4.jpg&quot; loading=&quot;lazy&quot;&gt;&lt;/li&gt;
  &lt;li&gt;&lt;img src=&quot;path/to/banner5.jpg&quot; loading=&quot;lazy&quot;&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

2枚目以降の画像は実際に表示されるまで時間的な猶予があります。しかしHTMLの上部に`img`要素があるため、他の大事な画像やリソースより早くダウンロードが始まってしまいます。`loading`属性で交通正整理をするような意図です。

想像以上の効果があったのは上記の箱ひげ図の通りです。テンプレートで実装されていれば導入は簡単なのでぜひ試してみましょう！

### ポイント4 スライダーの領域を予め確保する

スライダーの最終的な領域をCSSで予め確保しておくと、CLSの発生を抑制できます。

<a href="https://blog.ideamans.com/assets/slick-css-height.png"><img alt="slick-css-height.png" src="https://blog.ideamans.com/assets_c/2020/09/slick-css-height-thumb-1070xauto-1240.png" width="1070" height="356" class="img-fluid" /></a>

また、CSSが適用されてからJavaScriptが起動してスライダーが完成するまでの間、一瞬ですが画像が5枚とも表示されてしまいます。チラツキとして目に映るときもあります。

<a href="https://blog.ideamans.com/assets/slick-css-first.png"><img alt="slick-css-first.png" src="https://blog.ideamans.com/assets_c/2020/09/slick-css-first-thumb-autox581-1243.png" width="567" height="581" class="img-fluid" /></a>

JavaScriptの起動前でも1枚だけ表示するようにCSSを調整することでCLSを抑制できます。

今回のSlickSliderの例では次のようなCSSを記述しました(もうちょっといい方法があるかもしれません)。

<pre><code class="language-css">.slider {
    height: 64vw;
    margin-bottom: 30px;
}
.slider>.slide.followers {
    display: none;
}
</code></pre>

これらのCSSの調整は、一時的にJavaScriptを無効にすることで作業しやすくなります。

<a href="https://blog.ideamans.com/assets/javascript-disable.png"><img alt="javascript-disable.png" src="https://blog.ideamans.com/assets_c/2020/09/javascript-disable-thumb-621xauto-1246.png" width="621" height="244" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

ちなみに今回紹介したライブラリの中では、<a href="https://glidejs.com/">Glide</a> と <a href="https://swiperjs.com/">Swiper</a> がこのあたりのチラツキやCLSの抑制に配慮しています。CSSのみでスライダーの1枚目の見栄えが再現されるので、基本的にCSSの調整が不要です。

## フルチューンでどこまで改善できるか

上記のチューニングを一通り行った結果が次の通りです。スライダー不使用の`image`、`none`、チューニング前の`slick`、画像を5枚→3枚、`loading`属性を指定、CSSでレイアウトを調整した`slick-tuned`の比較です。

<div class="mb-4">
<div class="fig-title">Slick SliderのチューニングによるLCPスコアの変化</div>
<img alt="tuned-lcp.png" src="https://blog.ideamans.com/assets/tuned-lcp.png" width="1680" height="938" class="img-fluid" />
</div>

<div class="mb-4">
<div class="fig-title">Slick SliderのチューニングによるCLSスコアの変化</div>
<img alt="tuned-cls.png" src="https://blog.ideamans.com/assets/tuned-cls.png" width="1692" height="938" class="img-fluid" />
</div>

スライダー不使用時`none`のスコアまでとは行きませんが、チューニングを施すことで`LCP`スコアがしっかり改善され、`CLS`スコアも100点になりました。

スライダーに関してはライブラリ選びより地道なチューニングが有効ということがわかりました。
