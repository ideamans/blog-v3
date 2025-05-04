---
# Astrowind
title: '通販主要80サイトのスピード研究「本当に速いECサイトはどこ？」(スマホ編)'
excerpt: 'スマホECサイト実感スピード 総合トップ20 早速ですが、対象80サイトのうち、...'
updateDate: 2022-05-25
publishedDate: 2022-05-25
tags: 
  - cvr

  - core-web-vitals

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/1c2efd59b64a54adc2e9f43c2bf06fa1a8886059.png
category: performance

# カスタム
updatedAt: 2022-05-25 15:45:17
publishedAt: 2022-05-25 08:30:00
categories: 
  - cvr

  - core-web-vitals

  - performance

categoryLabels: 
  - CVR改善

  - Core Web Vitals

  - 表示高速化

authorId: miyanaga
subTheme: bs4
recommended: false
---

## スマホECサイト実感スピード 総合トップ20

早速ですが、対象80サイトのうち、実感スピード総合トップ20がこちらです。どのように計測したデータかは後述します。

<img alt="compare-density-avg.png" src="https://blog.ideamans.com/assets/1c2efd59b64a54adc2e9f43c2bf06fa1a8886059.png" width="1149" height="632" class="img-responsive" />

グラフの見方ですが、ユーザーが実際に体験するスピードは **思った以上に相手やタイミングによってバラバラ** です。

**緑は「スピードについてとくに不満を感じていないと予想されるPVの割合」**です。赤は逆に遅くてストレスを感じていると予想される割合。オレンジはその中間の、ちょっとイラッとしたり、人によってストレスを感じるかどうか半々、みたいなイメージでよいと思います。

<img alt="density-chart.png" src="https://blog.ideamans.com/assets/density-chart.png" width="976" height="267" class="img-responsive" />

まずは **緑が多いほどよい** という見方で十分です。

国内売上71位のジェイオーディー社 [メルシーオンラインショップ](https://www.jod.co.jp/) が、スピードにおいて大差をつけての1位でした。90%以上のPVにおいてスピードの不満がない(と予想される)ので、本当にサクサク動くECサイトの見本と言えるでしょう。

## スマホ実感スピード 総合ワースト20

逆にワースト20です。これは速いサイトとどのくらい差があるのかを紹介したいだけですので、サイト名の公表は控えます。

<img alt="compare-density-avg-worst.png" src="https://blog.ideamans.com/assets/5be70af7b40faaa54bc64c0e126f14bd9dce9f99.png" width="1149" height="632" class="img-responsive" />

**「もしかして、うちのサイト入ってない...？」**  と気になった方は、[オンライン個別相談会](https://blog.ideamans.com/ec-site-speed-session.html) に申し込みください！

実感スピードが一番遅いサイトでは、スピードに不満のないPV(緑)はわずか27%強、**なんらかの不満を感じているPVが約73%**に上ります。

さきほど実感スピード総合1位だった **メルシーオンラインショップは、スピードに不満を感じているPVが10%未満** だったので、途方もない開きがあります。

## Webサイトの実際のスピードは公開されている

世界中のWebサイトの(もちろんあなたのWebサイトも含め)、**ユーザーが実際に体感したスピード**をまとめた公開データベースがあります。それが、**Chrome User Experience Report (以下CrUX)** です。

[Chrome User Experience Report  |  Chrome UX Report  |  Google Developers](https://developers.google.com/web/tools/chrome-user-experience-report)

Android端末やChromeブラウザのユーザーがWebページを閲覧するとき、そのスピードが計測されていて、このCrUXに集約されています。

検索順位に影響すると言われる [Core Web Vitals](https://developers-jp.googleblog.com/2021/05/core-web-vitals.html) も、同じデータを基にしていると見て間違いないでしょう。

このCrUXを基に、こちらの記事で紹介されていた **通販売上高ランキングTOP100社から80サイトを選定。スマホECサイトの実感スピードを比較** してみました。

[【2022年新年版】「通販売上高ランキングTOP503」発表 会員限定で売上TOP100と増収率TOP20を公開 | 日本ネット経済新聞｜新聞×ウェブでEC＆流通のデジタル化をリード](https://netkeizai.com/articles/detail/5325)

※ 100社から8０サイトの選定基準については記事の後半で解説します。

Webサイトのスピード改善は果てしない挑戦ですが、まずは目先の目標がないと動き出せません。それにまずは、他のサイトとの相対的な差が気になるところです。

このレポートがベンチマーク先のサイト選びや、当面の目標設定に役立てると嬉しいです。

## 部門別トップ10

先ほどの総合トップ20と総合ワースト20、これらは**7つの指標の平均評価**でした。

Core Web Vitals としてLCP・FID・CLSが一躍注目を集めましたが、Webページのスピードには他にもいろいろな指標があります。

次は **部門別として指標ごとのトップ10** を見てみましょう。みなさんが関係するサイトや、贔屓のサイトはあるでしょうか。

### LCP部門 - 最大要素の表示まで

[LCP(Largest Contentful Paint)](https://web.dev/i18n/ja/lcp/) は、ビューの最大要素(主にメインビジュアルや見出しテキスト)が表示されるまでの時間です。Googleが特に重要と定める3つの Core Web Vitals に含まれます。

ランチでセットメニューを注文すると、サラダやスープが先に配膳されてきます。LCPは「メインのおかずが出てくるまでの時間」というイメージです。

<img alt="compare-density-lcp.png" src="https://blog.ideamans.com/assets/4108afb59fca22fcdac0bb37c501940c2d6113b0.png" width="777" height="468" class="img-responsive" />

LCPについて具体的な数値を上げてみると、**評価1位のメルシーオンラインではLCPが1.1秒**です。これは75パーセンタイルの値で、PVをLCPのよい順に並べたとき、75%に位置する(100人中75番目の)値です。

一方、**最もLCPの評価が低いサイトでは12.4秒**です。こちらも同じ75パーセンタイルの値ですが、10秒以上とはのすごい開きがありますね。

### FID部門 - 最初の操作に対する応答

[FID(First Input Delay)](https://web.dev/i18n/ja/fid/) は、ユーザーによる最初の何らかの操作に対し、それに応答するまでの時間です。こちらも Core Web Vitals に含まれますが、実際のところ、FIDが遅いサイトは滅多に見かけません。

<img alt="compare-density-fid.png" src="https://blog.ideamans.com/assets/f9c0d6fa83b5cc7cff51d5f3cdcbe8e52eacb046.png" width="777" height="468" class="img-responsive" />

### CLS部門 - レイアウト変化の累積

[CLS(Cumulative Layout Shift)](https://web.dev/i18n/ja/cls/) は、Webページの読み込みプロセスで生じるレイアウト変化の総量です。こちらも Core Web Vitals に含まれます。

CLSが大きいページは、「タップしようと思った瞬間、画像の読み込みが完了してレイアウトが変化して押し間違えてしまった」という誤操作を招きやすくなります。

正確にはスピード指標ではありませんが、「レイアウトの安定が遅い」という解釈もできます。ここではスピード指標の仲間とします。

<img alt="compare-density-cls.png" src="https://blog.ideamans.com/assets/13c4cf977b8f179c1517096d121043d360d44ff4.png" width="777" height="468" class="img-responsive" />

### TTFB部門 - サーバー応答時間

[TTFB(Time To First Byte)](https://web.dev/ttfb/) は、Webページで最初にリクエストするHTMLについて、リクエストを送信してからその最初の1バイト目(First Byte)を受信するまでの時間です。

この間にさまざまなネットワーク通信も行われますが、TTFBが遅いときはたいてい、サーバー側での処理(データベースアクセスなど)が遅いと見てほぼ間違いありません。

<img alt="compare-density-ttfb.png" src="https://blog.ideamans.com/assets/754fd9021710a8ad6a484c892dfe0b99936f9e0b.png" width="777" height="468" class="img-responsive" />

### FCP部門 - 最初のコンテンツ要素描画まで

[FCP(First Contentful Paint)](https://web.dev/i18n/ja/fcp/) は、なんらかの画像またはテキストが最初に表示されるまでの時間です。先ほどのLCPのひとつ手前のチェックポイントですが、ページによっては同時かもしれません。

Webページ表示プロセスの初期段階に、処理を遅延させる原因(レンダリングブロック)があると数値が悪化します。

ランチセットで言うと、サラダやスープが先に出てくるまでの時間、という感じです。

<img alt="compare-density-fcp.png" src="https://blog.ideamans.com/assets/8d8ba1fb61c1eb0bb1ab2e25eaf0c4b308402cf7.png" width="777" height="468" class="img-responsive" />

### DCL部門 - DOM読み込み完了

[DCL(DOM Content Loaded)](https://developer.mozilla.org/ja/docs/Web/API/Window/DOMContentLoaded_event) は、Webページの設計図となるドキュメントHTMLの読み込み完了時間です。ユーザーの体感に直接関係するものではありませんが、Webページが技術的に軽く作られているかを示すひとつの指標です。

HTML自体が極端に大きかったり、レダリングブロックが多数発生すると遅くなります。

<img alt="compare-density-dcl.png" src="https://blog.ideamans.com/assets/ce845d9a1daaab96dfd5ad3a7fc30b9ff81a4bee.png" width="777" height="468" class="img-responsive" />

### OnLoad部門 - ページの読み込み完了

[OnLoad](https://developer.mozilla.org/ja/docs/Web/API/Window/load_event) は、Webページ全体の読み込み完了時間です。

これこそが読み込み時間であり、結局はこの指標だけ見ればよいのでは？と思うかもしれません。それが案外、OnLoadとユーザーの離脱しやすさと関連が小さなサイトもあるのです。

OnLoadが遅いのは、そもそもWebページにコンテンツや機能を詰め込みすぎであったり、ボトルネックとなるリソースがあるといったことが考えられます。

<img alt="compare-density-onload.png" src="https://blog.ideamans.com/assets/43575e0d186d16b4306a4da18a2836bc9840cd6b.png" width="777" height="468" class="img-responsive" />

## オンライン個別相談会

このレポートについてもっと詳しく聞きたい！ 自社のサイトの順位を知りたい！ と思った方は、ぜひ個別相談会にお申し込みください。

* この**レポートの全データをご覧いただけます。**自社サイトがない場合は追加します。
* 1時間の**オンラインミーティング**で質疑応答および、改善に向けた簡単なアドバイスをします。
* レポートの元になった**80サイト分の生データ**をお渡しします。Excelやスプレッドシートで独自の分析もできます。
* 料金50,000円(税別)・参加者5名まで(ただしZoom会議などご用意いただける場合は人数無制限)。

<a href="https://blog.ideamans.com/ec-site-speed-session.html" class="btn btn-primary btn-lg">オンライン個別相談会を申し込む</a>

こんな風に効果を感じて欲しいと願っています。

* 自社サイトが実際どのくらい遅いのかよくわからない → **他社比較で相対的な立ち位置がわかる！**
* 関係者それぞれ主観的な意見があって気持ちが揃わない → **客観的データで危機感を共有！**
* 何が課題でどこから手をつけていいのかわからない → **弱点と原因がわかり、最初の一歩を踏み出せる！**
* どのくらい改善すればよいかわからず気が遠くなる → **何秒縮めたらよいか目標が明らかになる！**

## 100社から80サイトの選定について

先ほど引用した通販売上上位100社のリストが元になっていますが、今回のレポートはきれいに100サイトではありません。

主にCrUXが実質、ドメイン単位で集計を行うためです。以下の方針で80サイトを選定しました。

* 独自ドメインの公式通販サイト。モール出店のみで独自サイトがない場合は対象外としました。複数のサイトがある場合は任意の1サイトを選びました。
* 単一ドメインで主要機能を提供しているサイト。機能によってドメインに分かれている場合(例えばログインなど認証系は別ドメインなど)はフェアに比較できません。ただ、細かく確認はできないので、トップページ・商品詳細・ログイン(会員登録)・ショッピングカートが同一ドメインかどうかを見て判断しました。
* PC向けとスマホ向けが別ドメインの場合は併記。こちらもドメイン単位の集計である都合上、末尾に(PC)・(SP)をつけて両方掲載しています。

時間の都合上、見落としや間違いがあるかもしれませんが、ご指摘いただけたところは随時修正していきます。

## 遅いサイトは穴の空いたバケツ

最後に、サイトのスピードと収益性に関係があることの一例として今ご覧いただいているこのブログサイトの実際のデータを紹介します。

これは2022年5月16日〜22日のユーザーを **平均LCPで8つのセグメントに等分したときの平均PV** です。

<img alt="ideamans-blog-lcp-pv.png" src="https://blog.ideamans.com/assets/ideamans-blog-lcp-pv.png" width="1774" height="1014" class="img-responsive" />

**LCPが0.74秒までのユーザーはひとり1.71PVですが、1.03秒を超えると1.1PV前後に低下**します。その差35%。

1秒未満のわずかな差で、ユーザーは容赦なく離脱することの実証例です。

サイトが遅いと、広告費用の最大35%がバケツの穴から流れていく、と想像してみてください。

不安を感じた方は最後にもう一度！ [オンライン個別相談会](https://blog.ideamans.com/ec-site-speed-session.html) でお待ちしています。
