---
# Astrowind
title: '上場企業から3,198サイトをLighthouseで監査してみた'
excerpt: '「みんなモバイルWebサイトの最適化や表示高速化、ぶっちゃけどれだけやってるの？...'
updateDate: 2020-06-18
publishedDate: 2018-06-11
tags: 
  - lighthouse

author: miyanaga
image: https://blog.ideamans.com/assets/ogp.png
category: lighthouse

# カスタム
updatedAt: 2020-06-18 06:32:09
publishedAt: 2018-06-11 19:22:00
categories: 
  - lighthouse

categoryLabels: 
  - Lighthouse

authorId: miyanaga
subTheme: 
recommended: false
---

<ul><li>「みんなモバイルWebサイトの最適化や表示高速化、ぶっちゃけどれだけやってるの？」を知りたかった。</li><li>上場企業約3600社のコーポレートサイトにひたすらLighthouseを実行してみた。</li><li>各スコアの平均点やヒストグラムを公開するよ！</li></ul>
<h2>Lighthouse</h2>
<p>Google ChromeチームによるWeb監査ツール「<a href="https://developers.google.com/web/tools/lighthouse/?hl=ja" title="Lighthouse によるウェブアプリの監査">Lighthouse</a>」を使うと、簡単にモバイルWebページのフロントエンドについて技術的な観点の監査と採点を受けることができます。</p>
<ul><li>オフィシャルの紹介ページ <a href="https://developers.google.com/web/tools/lighthouse/?hl=ja">https://developers.google.com/web/tools/lighthouse/?hl=ja</a></li><li><a href="https://affiligoto.com/googlechrome-lighthouse/" title="GoogleChromeの拡張機能「Lighthouse」にSEO機能追加！使い方と自サイトを調査した結果">GoogleChromeの拡張機能「Lighthouse」にSEO機能追加！使い方と自サイトを調査した結果</a></li></ul>
<p>例えば弊社アイデアマンズのスコアはこんな感じです(Lighthouseの結果を参考にけっこうチューニングしました)。</p>
<p> </p>
<div class="clearfix">
<p><img alt="200-result1.png" src="https://blog.ideamans.com/assets/200-result1.png" width="824" height="91" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
</div>
<p>Lighthouseの最新バージョン3.0 alpha1では116点の項目について監査が実行されます。監査項目は次のカテゴリごとにスコアリングされます。</p>
<ul><li><strong>Performance</strong> ユーザーの待ち時間が短くストレスがないか。</li><li><strong>PWA</strong> Progressive Web Appsへの対応ができているか。</li><li><strong>Accessibility</strong> アクセシビリティに問題がないか。</li><li><strong>Best Practices</strong> モダンなWebアプリ開発のトレンドに沿っているか。</li><li><strong>SEO</strong> 検索エンジン向けの対応ができているか。</li></ul>
<p>これらのスコアは高い方がよいのですが、改善には当然、コストがかかります。サイトによって簡単に改善できる項目とそうでない項目がありります。</p>
<p><span style="text-decoration: underline;"><strong>「じゃあ、競合や世の中のサイトはどこまでやってるの？」</strong></span>という実情もやはり気になるところです。</p>
<p>そこで日本の証券取引所に上場する3,618社(執筆当時)のWebサイトにLighthouseを実行し、スコアの分布を調べてみるということをやってみました。今回は3,198件について結果が得られたのでレポートします。</p>

<h2>グラフの見方</h2>
<p>カテゴリごとにスコアを10点刻みのヒストグラムにしました。</p>
<p>0点から100点まで、10点ごとにその範囲に該当するサイトを数え、棒グラフで表現しています。左が0点、右が100点です。</p>
<h2>Performance 平均54.8点</h2>
<p>0点から100点まで、全体的に分布していますが、点数の高いサイトの方が多い傾向にありました。基本的にコーポレートサイトは静的なWebサイトが多く、情報量もそこまで多くないことからパフォーマンスは出やすいジャンルだと思います。</p>
<p>ただ、<span style="text-decoration: underline;"><strong>10年以上リニューアルされていないレトロなサイトだからこそ軽い</strong></span>という消極的ながら高得点のサイトもそこそこありました。</p>
<p><img alt="histgram-performance.png" src="https://blog.ideamans.com/assets/histgram-performance.png" width="720" height="432" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h2>PWA 平均28.2点</h2>
<p>Webサイトとモバイルアプリを融合する新しい技術であるPWA。これはほぼ未対応という状態でした。</p>
<p>そもそも企業のコーポレートサイトをPWAに対応する意味があるのか？とも言えますが、株主であればわずかな好材料もプッシュ通知で即座に知りたいというのが人情というもの。manifest.jsonファイルは置いてあるサイトはいくつか確認できました。</p>
<p><img alt="histgram-pwa.png" src="https://blog.ideamans.com/assets/histgram-pwa.png" width="720" height="432" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h2>Accessibility 平均68.36点</h2>
<p>70点くらいをピークに正規分布的に分布しています。さすが上場企業だけあってアクセシビリティも考慮しているWebサイトが多めのようです。</p>
<p><img alt="histgram-accessibility.png" src="https://blog.ideamans.com/assets/histgram-accessibility.png" width="720" height="432" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h2>Best Practices 平均60.5点</h2>
<p>Lighthouseの採点基準がちょっとマニアック(Webアプリ向け)という理由もありますが、かなり偏りが強くなっています。JavaScriptについてはjQueryを使って似たような作られ方をしていることが想像できます。</p>
<p><img alt="histgram-bestpractices.png" src="https://blog.ideamans.com/assets/histgram-bestpractices.png" width="720" height="432" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h2>SEO 平均88.5点</h2>
<p>SEOはほとんどが満点に近い点数でした。気をつけている企業が多く、採点基準も極めて基本的な項目しかないため、逆に<span style="text-decoration: underline;"><strong>「ほぼ満点じゃないとヤバい」</strong></span>のがLighthouseのSEOです。</p>
<p><img alt="histgram-seo.png" src="https://blog.ideamans.com/assets/histgram-seo.png" width="720" height="432" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p> </p>
<p>以上、上場企業のコーポレートサイトをひたすらLighthouseで監査した結果でした。あなたの会社のコーポレートサイトと比べていかがでしたか？</p>
<p>アイデアマンズではもっと詳しいレポートを見たい、自社のサイトの監査をしたい、競合調査をしたい、スコアアップしたいといったご相談をお待ちしています。</p>