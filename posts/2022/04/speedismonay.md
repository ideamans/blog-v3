---
# Astrowind
title: 'Webの速度と収益の関係がこれで明らかに！目的特化型の無料アクセス解析 Speed Is Money リリース'
excerpt: 'Webの速度が大事と言われますが、どれくらい速くすればどのくらい収益が上がるのか...'
updateDate: 2022-04-18
publishedDate: 2022-04-18
tags: 
  - cvr

  - core-web-vitals

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/speedismonay-lcp-dist-by-bounce.png
category: core-web-vitals

# カスタム
updatedAt: 2022-04-18 12:39:33
publishedAt: 2022-04-18 10:30:00
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

Webの速度が大事と言われますが、どれくらい速くすればどのくらい収益が上がるのか、事前に予測できたらいいなと思いませんか？

耳にするのは「速くしたらこうなった」結果論ばかりです。**「あなたもやってみればわかる！速いは正義！」**と精神論で突き進むしかないのでしょうか。

このモヤモヤした悩みを解消し、**「速度は金なり」**を客観的な情報として関係者で共有するため、一風変わったアクセス解析サービスをリリースしました。

その名も [Speed Is Money](https://speedis.money/) です！

## ユーザーそれぞれの体感速度を計測

Speed Is Moneyは、HTMLに埋め込んだタグ(JavaScript)がPVごとにユーザーが実際に体感した速度指標(Web Vitals)を取得してデータベースに集約します。

このブログにも以前からそのタグを埋め込んでいて、集計レポートを無償公開しています。

[SpeedIsMoney | Core Web Vitals+ 分析](https://speedis.money/reports/web-vitals)

<img alt="speedismoney-web-vitals.png" src="https://blog.ideamans.com/assets/speedismoney-web-vitals.png" width="3026" height="2022" class="img-responsive" />

この記事では、**体感速度の指標としてCore Web VitalsのひとつでもあるLCP** (Largest Contentful Paint) を統一的に用います。LCPは、メイン画像や見出しテキストなど、ビューの最大要素がいかに速く現れるかを計測した指標です。

ただし、ユーザーのストレスがどの指標に現れやすいかはサイトによっても違います。詳しく知りたい方は実際にレポートで指標を切り替えて見てみてください。

データの集計期間は記事執筆時の直近1週間(2022年4月12日〜18日)です。また、Webサイトの目的はさまざまありますが、この記事では直帰が少なく一人当たりのPVが多いことが収益に因果関係があるとみなします。



## 体感速度にはばらつきがある

まず認識していただきたいのが、体感速度には結構ばらつきがあるということです。

このブログはご覧のとおりかなりシンプルで、ほとんどPCで閲覧されています。みんな一瞬で表示されて速度に違いなんてないだろうと思えるのですが、実際の体感速度はどうでしょうか。

[SpeedIsMoney | Web VitalとPV・直帰の関係](https://speedis.money/reports/web-vital-and-pvs)

<img alt="speedismonay-lcp-distribution.png" src="https://blog.ideamans.com/assets/speedismonay-lcp-distribution.png" width="3020" height="1214" class="img-responsive" />

このヒストグラムを見ると、**ほとんどPVはLCPが約2秒以内ですが、遅いPVは10.8秒**と、裾野の広がりが見られます。

その細かい理由は一旦さておき、「PVによって体感時間が違うので、体感時間と行動を比較して関係性を明らかにする」のがこのアクセス解析のコンセプトです。

Webサイトは意図も準備もしたわけではないけど、**速度についてのA/Bテストを常に実施しているようなもの。だから自然実験ができるはず**というわけです。

## 体感速度と直帰の傾向

このヒストグラムを見る流れで、直帰との関係を見てみましょう。「体感速度が遅いと直帰が増える」と感覚的にもわかりますが、本当にそうでしょうか。

ユーザーを「2PV以上を記録した回遊組」(紫)と、「1PVのみの直帰組」(黄色)に分けたところ、**回遊組の平均LCPは0.81秒、直帰組の平均LCPは1.40秒**でした。2倍ほどの開きがあります。しかし、先ほど見たように体感時間にはばらつきがあり、サンプルが少ないと、偶然このような結果になることもあります。そこでヒストグラムも併せて見てみます。

[SpeedIsMoney | Web VitalとPV・直帰の関係](https://speedis.money/reports/web-vital-and-pvs)

<img alt="speedismonay-lcp-dist-by-bounce.png" src="https://blog.ideamans.com/assets/speedismonay-lcp-dist-by-bounce.png" width="3366" height="2046" class="img-responsive" />

回遊組(紫)の分布は、直帰組(黄色)の分布に比べて早い時間に偏っていて、遅い時間の割合が少ない様子が見てとれます。

やはり**「体感速度が遅いと直帰しやすい」**は、少なくともこのブログにおいては事実と言って差し支えなさそうです。

## 体感速度と平均PVの傾向

さらに、**体感速度が速いユーザーほどPVが多い？** 仮説を見ていきます。

この検証のため、**体感速度が速い=平均LCPの値が良い順にユーザーを並べ、5つのセグメント(クラス)に等分**します。それぞれのクラスの一人当たり平均PVが次のグラフです。

[SpeedIsMoney | Web VitalとPV・直帰の関係](https://speedis.money/reports/web-vital-and-pvs)

<img alt="speedismoney-lcp-segments.png" src="https://blog.ideamans.com/assets/speedismoney-lcp-segments.png" width="3368" height="1036" class="img-responsive" />

なかなかわかりやすく体感速度と平均PVの傾向が現れました！

最も体感速度が速かったAクラスは平均PV 1.47、逆に悪かったEクラスは平均PV 1.08。**体感速度が速いとPVが増え、遅いとPVが減る関係**も明らかになりました。

## 体感速度とPVの機会損失

ここでもう少し深い解釈を試みます。

最も体感速度がよかったAクラスを、正確ではないにしても一旦「速度について特に不満がなかった」セグメントと仮定します。

そうするとAクラスのユーザーが離脱したのは、目的を果たしたか、そもそも興味がなかったか、UIがわかりにくかったか...とにかく体感速度以外の理由だったと考えられます。

B〜Eクラスでも同様の理由でユーザーは自然と離脱します。したがって**Aクラスとの差分は、体感速度のストレスによる離脱分**です。集客により生み出されるはずだったPVが、体感速度の遅さにより得られなかった機会損失に該当します。

[SpeedIsMoney | Web VitalとPV・直帰の関係](https://speedis.money/reports/web-vital-and-pvs)

<img alt="speedismoney-pv-loss.png" src="https://blog.ideamans.com/assets/speedismoney-pv-loss.png" width="3370" height="1098" class="img-responsive" />

このブログでは体感速度への不満から推定17.10%の機会損失があり、決してこの集計期間1週間の話に限らず、常にそれ前後のロスが生じていると想像できます。

よく「速度の改善でCVRが向上する」と聞きます。しかしサイトがいくら速くても要らないものは要らないわけで、CVRが全体的に底上げされるとは考えられません。

ここで言いたいのは、速度の改善による**収益源はこのような「見えなかった機会損失」にあり、それを取り戻すことによって収益が実現**されるということです。

## 結局PVはどのくらい増やせるのか

速度の改善により収益を増やす原資、いわば埋蔵金の在処がわかりました。最後はPV増の予測ですが、ここまで来たらあとは簡単です。

セグメント分析の結果、このブログの総PVはAクラス(LCPが0.03秒〜0.67秒)のユーザー数×1.41、Bクラス(LCPが0.68秒〜0.97秒)のユーザー数×1.27、...の合計という、シンプルな積の和で成り立っていることがわかりました。

[SpeedIsMoney | 改善によるPV増加予測](https://speedis.money/reports/pv-forecast)

<img alt="speedismoney-pv-formula.png" src="https://blog.ideamans.com/assets/speedismoney-pv-formula.png" width="2606" height="192" class="img-responsive" />

体感速度が改善、つまりLCPが全体的に良くなれば、この計算式で上位クラスのユーザー数が増え、逆に下位クラスのユーザー数が減ります。それによって全体のPVが増えると説明できます。

このブログでは、もしLCPが全体的に20%改善されたと仮定すると、PV数は3.59%増加すると計算されました。

[SpeedIsMoney | 改善によるPV増加予測](https://speedis.money/reports/pv-forecast)

<img alt="speedismoney-20-improve.png" src="https://blog.ideamans.com/assets/speedismoney-20-improve.png" width="3340" height="968" class="img-responsive" />

もっと思い切って50%の改善(LCP半分=2倍高速化)を実現できたと仮定すると、PV数は11.53%増加すると予測されました。

<img alt="speedismoney-50-improve.png" src="https://blog.ideamans.com/assets/speedismoney-50-improve.png" width="3368" height="962" class="img-responsive" />

この計算は、実際のデータに×0.8、あるいは×0.5を施して、クラスごとの人数を数え直しただけです。要は**1週間前に戻って速度を改善したらPVはどうだった？**と計算しているだけです。

もちろん、これは簡易的で誤差もあり正確ではありませんが(そもそも100%正確な予測はできませんが...)、傾向自体が変わって極端に変動する、とは考えにくいです。

何より、**「やってみなければわからない」というレベルに比べると、ずっと信憑性が高い**と言えないでしょうか。

## 速度の改善による増収は長期投資

このブログは、20%速度を改善すると約4%のPV増(収益増)を期待できると予測が出ました。

4%の収益増は少ないと感じるでしょうか？

確かに広告やSEOなど、収益増を実現する他の手段に比べたら比率は地味です。しかしこの増収に追加の資金や労力を必要とせず、また大きな変動もほぼ起きません。**時間さえ経てば確実に回収できる**性質の投資です。

これまで「やってみなければわからない」いわば**博打のような打ち手に思えた速度改善が、アクセス解析をしてみると実は手堅い長期投資だった**というのは面白い話です。

## ぜひお試しください！

Speed Is Moneyは、**条件に同意いただければ、誰でもトラッキングタグを埋め込むだけで自分のサイトのレポート**をご覧になれます。

[SpeedIsMoney | あなたのサイトを計測するには](https://speedis.money/guide/tracker)

このブログは20%のLCP改善で約4%の増収が見込めると紹介しましたが、この**予測は先ほど述べたように「見えなかった機会損失」という伸び代に左右**されます。つまりサイトによって異なりますし、このブログは比較的フロントエンドの速度に気を遣っているので、伸び代は大きくありません。

あなたのサイトにはどれだけ伸び代があるでしょうか？ ぜひ試してみてください！