---
# Astrowind
title: 'Google Speed Updateで遅いサイトが「検索順位に影響がでた」について思う「２つ」のこと'
excerpt: '今回は、Web担さんの以下の記事を読んでいて感じた２つのことについてブログを書き...'
updateDate: 2020-06-18
publishedDate: 2018-08-03
tags: 
  - lighthouse

  - pagespeed-insights

  - seo

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-08-03-google-speed-update-ogp.jpg
category: seo

# カスタム
updatedAt: 2020-06-18 10:29:12
publishedAt: 2018-08-03 11:00:00
categories: 
  - lighthouse

  - pagespeed-insights

  - seo

  - performance

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

  - SEO

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>今回は、Web担さんの以下の記事を読んでいて感じた２つのことについてブログを書きます。</p>
<ul><li><a href="https://webtan.impress.co.jp/e/2018/08/03/30094" target="_blank">実録：Googleスピードアップデートで遅いサイトの検索順位が本当に落ちた！【SEO記事12本まとめ】</a></li></ul>
<p>この記事の中で、「<a href="https://webtan.impress.co.jp/e/2018/08/03/30094#part_pickup" target="_blank">実録：Googleスピードアップデートで遅いサイトの検索順位が本当に落ちた！</a>」ではGlenn Gabe さん (<a href="https://www.gsqi.com/about-glenn-gabe/" target="_blank">G-Squared Interractive</a>というデジタルマーケティングのベテランマーケター) が、「<strong>パフォーマンスが悪いサイトが検索順位が低下した</strong>」というツイートを掲載しています。ツイートの内容はこちら。</p>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="en" dir="ltr">Here's a site hit by the mobile speed update showing a big drop in mobile search visibility. I can confirm ranking drops *just in mobile*. It still ranks well in desktop. Checking via lighthouse reveals some big performance problems. And the drops are heavy. Not just a few spots. <a href="https://t.co/fnqNFFs8kF">pic.twitter.com/fnqNFFs8kF</a></p>
-- Glenn Gabe (@glenngabe) <a href="https://twitter.com/glenngabe/status/1019585108485890053?ref_src=twsrc%5Etfw">2018年7月18日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<h2>Googleスピードアップデートに感じる２つのこと</h2>
<p>さて、すでに一ヶ月前から始まったGoogleスピードアップデートですが、自分が関係している範囲では、大きな変化があったウェブサイトはありませんでした。どちらかというと「検索順位が上がった」ケースと「検索結果が不安定になった」ものがあります。</p>
<p>今回は、Googleスピードアップデートで感じる「２つ」のことについて、考えていることを書いていきます。</p>
<h3>1. パフォーマンスが悪いサイトが下がれば、パフォーマンスが普通以上のサイトは上がる</h3>
<p>自分のウェブサイトがパフォーマンスがよければ、結果的には「変わらない」または「上がる」結果が予想できます。これは、そのウェブサイトよりも検索順位が上にあるウェブサイトが「パフォーマンスが悪い場合」には「上がる」ことになりますし、そうでなければ「変わらない」ことになります。</p>
<p>パフォーマンスの影響が「遅いウェブサイトは検索結果が下がる」ということは明白ですので、パフォーマンスは上げることが望ましいです。</p>
<p>また、<strong>SEOに限らず表示の高速化は「閲覧者の快適さ」には不可欠</strong>です。一度見直しをかけましょう。</p>
<h3>2. Lighthouseで計測する重要性</h3>
<p>Glenn Gabeさんのツイートで、Lighthouseによる計測結果を公表していました。Googleの監査ツールであるLighthouseは、弊社でも一押ししている監査ツールです。特に、Webパフォーマンスの計測を行うには十分なチェック項目があり、スコアリングにより可視化されるので、対策ポイントが明確になります。</p>
<p>弊社では、Lighthouseを利用して上場企業3,198のウェブサイトをチェックしたサマリーをブログ記事として紹介しています。</p>
<ul><li><a href="https://blog.ideamans.com/2018/06/mobilebench-jpx-markets.html" target="_blank">上場企業から3,198サイトをLighthouseで監査してみた | アイデアマンズブログ</a></li></ul>
<p>Lighthouseの最新版は、3.0.3となっています。コマンドラインでの利用のほか、ChromeのDevToolsからも利用が可能です。</p>
<h2>アイデアマンズのコーポレートサイトでLighthouseをスコアリング</h2>
<p style="text-align: center;"><img alt="2018-08-03-google-speed-update-01.jpg" src="https://blog.ideamans.com/assets/2018-08-03-google-speed-update-01.jpg" width="1278" height="621" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">www.ideamans.com のLighthouse結果</span></p>
<p>弊社のコーポレートサイトですが、Lighthouseのスコアリング向上を試してみました。その結果、<strong>Performance部分で「60」を記録</strong>しています。<strong>重要な項目となっている「First Contentful Paint（最初の描画）」は1,590ms、「First Meaningful Paint（最初の操作の受付）」は1,670ms</strong>となっており、評価が良いグリーンで表示されています。実施した施策については、こちらのブログ記事をご覧ください。</p>
<ul><li><a href="https://blog.ideamans.com/2018/06/lighthouse-performance.html" target="_blank">実録Lighthouseのスコア改善〜Performance(ユーザー待ち時間)編 | アイデアマンズブログ</a></li></ul>
<p style="text-align: left;">表示高速化で有名な日経電子版のウェブサイトもチェックしてみましょう。Performanceは「69」となっています。First Contentful Paintは 1,970ms、First Meaningful Paintは 2,190ms です。コンテンツボリュームが多いトップページでもこれだけの速度が出せるという例です。</p>
<p style="text-align: center;"><img alt="2018-08-03-google-speed-update-02.jpg" src="https://blog.ideamans.com/assets/2018-08-03-google-speed-update-02.jpg" width="1278" height="621" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">表示高速で有名な日経電子版ウェブサイトは、Performanceは「69」でした。はやい。</span></p>
<h2>最後に</h2>
<p>アイデアマンズでは、Lighthouseを利用した表示速度改善のご相談を受け付けております。「表示高速化ってどうすればいいの？」「なにから始めればいいかわからない」など、表示高速化に関する無料アドバイスを行っておりますので、お気軽にお問い合わせください。</p>
<ul><li><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank">無料診断レポートのお申込みはこちら</a></li></ul>
<p>では！</p>
<p> </p>

