---
# Astrowind
title: '新サービス PageSpeed改善リハーサルをスタート！'
excerpt: 'PageSpeedスコアの改善でお悩みの企業に向けた実践的レポートサービス「Pa...'
updateDate: 2020-06-18
publishedDate: 2019-08-30
tags: 
  - lighthouse

  - pagespeed-insights

author: miyanaga
image: https://blog.ideamans.com/assets/pagespeed-rehearsal.jpg
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 06:22:07
publishedAt: 2019-08-30 16:22:00
categories: 
  - lighthouse

  - pagespeed-insights

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

authorId: miyanaga
subTheme: 
recommended: false
---

PageSpeedスコアの改善でお悩みの企業に向けた実践的レポートサービス**「PageSpeed改善リハーサル」**をスタートしました。

約20通りのWebページ表示高速化の手法をお客様のページに適用すると、それぞれPageSpeedスコアが何点上がるか**リハーサルして**結果をレポートします。

<img src="https://www.ideamans.com/services/pagespeed/images/reports/thumbnail/index.png">

* [PageSpeed改善リハーサル \| アイデアマンズ株式会社](https://www.ideamans.com/services/pagespeed/)
* [プレスリリース](https://www.ideamans.com/release/20190821/)

## PageSpeedスコアはブラックボックスではない

このブログや、Qiita上でたびたびPageSpeedスコアについて触れてきました。

* [PageSpeed Insightsの真実。点数の公式と高得点をとれない理由。5項目の最適化をすることがスコアアップの近道。 \- アイデアマンズブログ](https://blog.ideamans.com/2019/04/inside-pagespeed-insights.html)
* [ECサイトでPageSpeed Insightsスコア80なら偏差値70相当！ パフォーマンス偏差値表\(通販サイト編\)を作ってみた \- アイデアマンズブログ](https://blog.ideamans.com/2019/04/ec-pagespeed-insights-deviations.html)
* [PageSpeed Insightsの点数はどのように計算されているか。100点をとるための条件 \- Qiita](https://qiita.com/miyanaga/items/d38124cdd64a1999fed9)
* [インタラクティブになるまでの時間\(TTI: Time To Interactive\)とは何か \- Qiita](https://qiita.com/miyanaga/items/49aee938d1cbb1e42fd7)

Googleのスピードアップデートを契機に、PageSpeedスコアを気にされる企業さんが増えているのですが、とにかく**ブラックボックスで「何をやってもだめ」**という声をよく耳にします。

私も当初は、PageSpeed Insightsで表示される改善を闇雲に実施しては、スコアが上がると思った手法があまり上がらず、逆にノーマークだった手法でスコアが上がったり、法則性がわからずモヤモヤしました。

それが悔しくてPageSpeedスコアについて調べ始めました。



## でも結局やってみないとはわからない

PageSpeedスコアは、突き詰めると5つの時間指標から計算されていることがわかりました。その時間指標さえ短縮すれば、手段を問わず確実にスコアが上がります。

<img alt="fomula.png" src="https://blog.ideamans.com/assets/fomula.png" width="842" height="125" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

ただ、年々ブラウザは高機能化し、Webページのリソースも増加しています。Webページの表示という何気ない処理もその内実は複雑です。

そのため、どの手法なら何秒タイムが縮まり、何点スコアが上がるか予測するのは極めて困難です。

スコアのロジックを踏まえるとおおよその見当はつくのですが、それが他の手法と比べても本当にベストなのか？

結局は**「やってみないとわからない」**ということが自分の中ではっきりしました。

## だったら試そう

マーケティング、広告、SEOなどの領域は相手がいることなので安易に試すことができません(そのためのA/Bテストがありますが)。

でも、**「Webページを直してPageSpeed Insightsで計測する」**だけなら、手間を惜しまなければ自己完結できます。

**「だったらコピーページを作って、手法をひとつずつ効果検証したらいいじゃない」**と思い立ったのが、本サービス開発のきっかけです。

## 約20種類の手法を検証

結局やってみないとわからない、と話しましたが、PageSpeed Insightsの採点ロジックが明らかになってよかったことがあります。

それはWebページ表示高速化の手法について、**点数に関係する手法とあまり関係しない手法が見分けられるようになった**ことです。

誤解がないように補足すると、PageSpeedスコアが現すのはWebの表示速度の一部です。点数に影響しなくても大事な手法がたくさんあります。

それだけ高速化の手法はたくさんあるので、本サービスでは**PageSpeedスコアに関係する約20通りの手法を検証**します。

中にはボトルネックを探るための非実用的なプラクティスも含まれるので実際にはもうちょっと少ないのですが、これを実際のWebサイトで確かめるとなると、サイトの規模によってはそれだけで数ヶ月かかるかもしれません。

しかも本当に効果があるかはわかりません。もしかしたらスコアを下げるかもしれません。これはポジショントークではなく本当に下がることもあります。

基本料金は1ページ15万円、**1手法あたり1万円未満で試せるなら安いもの！** ...と感じてもらえると作り手冥利につきます。

## 改修につながる提案をしたい

「悪いところを教えて終わり」ではなく、実際にサイトを改修するという次のアクションにつながるレポートを作りたいと考えました。

そのためにPageSpeed InsightsのAPIを使ってスコアの変化を実際に計測することに加え、**検証したコピーページのソースコード(HTML・CSS・JavaScript・画像など)も一式納品**します。

ソースコードの納品は珍しいサービスかと思います。そのまま使うことはできませんが(あくまで出力されたHTMLなどであって、システムごとに合わせたコードではありません)、改修の見本としてお役に立つはずです。

## 最後に

本サービスを提供しておきながら何ですが、PageSpeedスコアは一面的な指標に関わらず、Googleの威光で独り歩きしてるところがあります。なので賛否両論ありますが、

* スコアが低いサイトは表示速度自体に無頓着なので、(他に指標がなければ)PageSpeedスコアから上げましょう。
* 上げないと(SEOの心配で)モヤモヤが消えないならば集中的に対処してスッキリしましょう。

これらが本サービスでのお手伝いを通して訴えかけたいことです。

おかげさま出だしは好調で、テストマーケティングとしてリリース前に数社お声がけしたところ早速4件の注文をいただきました。ご利用いただいた皆様には感謝申し上げます。

いいな、と思ったお客さまはぜひお問い合わせやお見積依頼をお寄せください。

* [PageSpeed改善リハーサル \- お問い合わせ \| アイデアマンズ株式会社](https://www.ideamans.com/services/pagespeed/inquiry/)
* [PageSpeed改善リハーサル \- 見積依頼・お申し込み \| アイデアマンズ株式会社](https://www.ideamans.com/services/pagespeed/estimation/)