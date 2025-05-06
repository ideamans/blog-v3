---
# Astrowind
title: 'CMSのランキングプラグイン厳選8種類と、Webサービス型のランクレット(#Ranklet)'
excerpt: 'メディア系サイトやブログなどでも必ずといっていいほど設置されているコンテンツの「...'
updateDate: 2018-03-27
publishedDate: 2017-11-07
tags: 
  - ranklet

author: kikuchi
image: https://blog.ideamans.com/assets/thumbnail.png
category: ranklet

# カスタム
updatedAt: 2018-03-27 10:57:18
publishedAt: 2017-11-07 11:00:00
categories: 
  - ranklet

categoryLabels: 
  - 人気ランキング表示 Ranklet

authorId: kikuchi
subTheme: 
recommended: false
---

<p>メディア系サイトやブログなどでも必ずといっていいほど設置されているコンテンツの「ランキング」ですが、ベーシックな機能すぎていつも同じツールを使い続けてしまうことが多いので、Movable TypeとWord Pressのみですが更新状況など比較的使われていそうなものを簡単にですが調べてみました。</p>
<p>まずは</p>
<h3>Movable Typeプラグイン</h3>
<p>単体のプラグインとして<a href="https://plugins.movabletype.jp/search.html?q=%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0&amp;_r=0.2909047209840194" target="_blank">プラグインディレクトリ</a>に「ランキング」のキーワードで引っかかるのは</p>
<ul><li><a href="https://plugins.movabletype.jp/masato_mori_1/access-counter.html" target="_blank">Access Counter</a>
<blockquote>アクセスランキングを表示できます。ブログ記事のアクセス数をカウントします。アクセス数順で指定した数のブログ記事を一覧することができます。ブログ記事のランキング表示は、MTEntries のモディファイア sort_by に accessed_count を指定します。</blockquote>
</li><li><a href="https://plugins.movabletype.jp/cool2ikou/accessrankingga.html" target="_blank">AccessRankingGA</a>
<blockquote>AccessRankingGA プラグインは、Google Analyticsレポート情報からユニークビジター数データを取得し、JSONファイルを出力生成します。 jQueryオリジナルプラグインを使い、JSONデータをコンテンツ内にリスト表示させます。簡単にGoogleAnalyticsデータを利用したアクセスランキングをMovable Typeに実装できるようになります。</blockquote>
</li></ul>
<p>の2つでした。</p>
<p>パッケージ化されたプラグインセット以外でランキング機能単体でMTプラグイン化するようなニーズも最近は少なさそうだったのでしょうがないのかなと。</p>
<p>Data APIを使った方法もありますが、ちょっとハードルが高くなりますかね。</p>
<ul><li><a href="https://www.movabletype.jp/blog/data-api-v2-06.html" target="_blank">詳説 Data API 2.0 Vol.6: アクセスデータからアクセスランキングを作成する</a>
<blockquote>Data API を利用すれば、Google Analytics とのやりとりを気にせずに Data API の記述だけでアクセスデータを取得できるため、Movable Type のアップデートだけ行っていれば、ウェブサイト側の変更はほとんどの場合、必要ありません。</blockquote>
</li></ul>
<p>サイト表示側のプラグインとは別に、管理画面へGoogle Analyticsのデータを連携するものも多いのがMTユーザーの特性でしょうか。</p>
<ul><li><a href="https://www.ideamans.com/mt/moreanalytics/" target="_blank">MoreAnalytics</a>
<blockquote>MoreAnalyticsは、Movable Type 6から追加されたGoogle Analyticsとの連携機能を大幅に強化するプラグインです。Google Analytics APIを通してサイトへのアクセス統計を取得し、人気記事のランキング表示や、HTMLによるアクセスレポートを生成するなど、様々な用途に利用することができます</blockquote>
</li><li><a href="https://www.movabletype.jp/documentation/mt6/settings/google-analytics.html" target="_blank">Google Analytics の連携</a>（MT標準機能）
<blockquote>Google Analytics との連携は、Google Developer Console を利用して、OAuth2 アプリケーションの設定を行う必要があります。</blockquote>
</li></ul>
<p> </p>
<p>続いて、</p>
<h3>WordPressプラグイン</h3>
<p>プラグインリストからのキーワード検索だと結構な数がヒットしてしまうので、個人的な選別でいくつかピックアップしました。</p>
<ul><li><a href="https://fwww-lab.com/" target="_blank">WP Rankinger</a>
<blockquote>WP Rankinger Proはキャッチコピーの通り、HTMLが苦手な初心者の方でも視覚的に手軽にアフィリエイトが行えるまったく新しいコンセプトのプラグインです。</blockquote>
</li><li><a href="https://simple-ga-ranking.org/" target="_blank">Simple GA Ranking</a>
<blockquote>This is a WordPress plugin that shows articles ranking using Google Analytics.The feature to work very lightweight, because it is not save ranking data in WordPress DB.</blockquote>
</li><li><a href="https://plugmize.jp/product/wp-ranking-pro/" target="_blank">WP-Ranking PRO</a>
<blockquote>「WP-Ranking PRO」は、日々の記事PV（ページビュー）を集計し、様々な期間、様々な要素でランキングを生成し、表示させるプラグインです。</blockquote>
</li></ul>
<p>最近はあまりWordpressプラグインを掘り下げる機会が少なかったため詳しくレビューできないのですが、WordPressプラグインは国内のものから海外のものまで用途別でかなりあるので、やりたいことさえ決めてしまえばたくさんあるプラグインの中からインストールできてショートコードなどでサクッと設置までできてしまうのがメリットですね。</p>
<p>管理画面から欲しい機能（プラグイン）を検索して、そのままDL/インストールからの即有効化、小さい機能追加ほど作業がスマートな方が良いですね。<br>またプラグインが多くても利用方法の記事もその分多いので選別のしやすさもWordPressならではかなと。</p>
<p> </p>
<p>どちらのCMSでも、ランキングコンテンツ用のプラグインはシンプルな機能単体なので、めあたらしいプラグインが今後出て来ることは少ないかもしれませんね。メンテナンスされているプラグインであればバージョンアップなどでも対応されてるので一度入れてしまえば使い続けるだけでよいのかと思いますが。</p>
<p> </p>
<p>最後に、</p>
<p>アイデアマンズではこれまでのご要望のなかで産まれたランキングコンテンツ用のサービスを提供しております。<strong>プラグインではなくWebサービス形式なのですが。。</strong></p>
<ul><li><a href="https://ranklet.com/" target="_blank">ランクレット（Ranklet）</a>
<blockquote><a href="https://ranklet.com/" target="_blank"><img alt="thumbnail.png" src="https://blog.ideamans.com/assets_c/2017/11/thumbnail-thumb-480xauto-68.png" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" width="480" height="267"></a><br>Ranklet [ランクレット] はGoogle アナリティクスのデータを活用し人気ページのランキングをどんなサイトにも簡単に表示できる無料Webサービスです</blockquote>
</li></ul>
<p>これまでMTプラグインを多く作って来ていてランキングサービスをプラグインでなくWebサービス形式でリリースした理由はいくつかあるのですが、</p>
<ul><li>CMSの種類に依存しない</li><li>メジャーバージョンアップ時の対応で気にしなくて良い</li><li>CMSのリプレイスに影響しない</li><li>Google Analyticsのデータはほぼロストしない</li></ul>
<p>といった点などから、CMSとは別画面にはなってしまうものの外部サービスとして提供をさせていただいております。<br>※詳しい<a href="https://ranklet.com/#features" target="_blank">使い方</a>や、<a href="https://ranklet.com/#showcase" target="_blank">導入事例</a>などの詳細はまた別の記事でお知らせさせていただきます！</p>
<p>これまでのCMSプラグイン方式より</p>
<ol><li><strong><span style="color: #ff9900;">簡単に</span></strong>設置できる</li><li>多く<span style="color: #ff9900;"><strong>Google Analyticsの指標から</strong></span>ランキングを生成できる</li><li>テキストの置換（正規表現でも可）や特定ページの除外設定なども可能</li><li><span style="color: #ff9900;"><strong>無料</strong></span>でスタートできる</li></ol>
<p>といった特徴などからもうすぐ<span style="font-size: 16px;"><strong>1000を超える</strong></span>ユーザーさまに活用いただいております。</p>
<p>シンプルな機能であるからこと簡単に無料ではじめられる<a href="https://ranklet.com/" target="_blank"><strong><span style="color: #ff9900;">ランクレット（Ranklet）</span></strong></a>を是非ご活用ください！</p>
<p> </p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://ranklet.com/" target="_blank"><img src="https://blog.ideamans.com/assets/service-ranklet.jpg" alt="かんたんランキングツール Ranklet"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://ranklet.com/" target="_blank">かんたんランキングツール Ranklet</a></p>
<p class="serviceDesc">Googleアナリティクスのデータを元にあらゆるサイトで人気ページランキング表示ができます。</p>
<p class="serviceLink"><a href="https://ranklet.com/" target="_blank">https://ranklet.com/</a></p>
</div>
</div>
