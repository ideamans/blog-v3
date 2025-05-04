---
# Astrowind
title: 'SEOにも配慮したHTML遅延読み込み Hybrid Include で Core Web Vitals を改善する試み'
excerpt: '小さいHTMLは正義 HTMLはWebページ全体(数mb)から見ると小さなリソー...'
updateDate: 2021-06-16
publishedDate: 2021-06-15
tags: 
  - core-web-vitals

  - pagespeed-insights

  - seo

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/hybrid-include-psi.png
category: core-web-vitals

# カスタム
updatedAt: 2021-06-16 09:46:41
publishedAt: 2021-06-15 17:33:47
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

## 小さいHTMLは正義

**HTMLはWebページ全体(数mb)から見ると小さなリソース(数十Kb)なので、10kbや20kb増えたところで大した影響はないだろう**と思われがちです。

確かに10kbや20kbのダウンロード時間は些末な差で、昨今はスマホも高性能です。しかしHTMLが大きい≒DOMツリーが巨大だと、**初期のレンダリング以後も意外と繰り返し発生するレイアウト計算**、この負担がボディブローのように効いてきます。

Core Web VitalsやPageSpeed Insightsのスコア改善の観点からは、**小さいHTMLは正義**です。



## 遅延読み込みによるHTMLの軽量化

とはいえ伝えたいことがたくさんあるページでは、自ずとHTMLが大きくなります。

ページやサイトの設計から見直すのは大変ですが、**比較的、楽に対処する方法があります。それがHTMLの遅延読み込み**です。

初めは数画面分の小さなHTMLを配信し、**小さなページとして速やかに表示を完了**させます。もしユーザーがスクロールして**ページを読む意思を示したら、ページの下部をJavaScriptの処理により読み込む**、という仕組みです。

<img alt="html-hybrid-include.png" src="https://blog.ideamans.com/assets/html-hybrid-include.png" width="2072" height="1990" class="img-fluid" />

実際のところユーザーは**ほとんどスクロールせず離脱する可能性**があります。いや、むしろその方が多いと思うべきでしょう。にもかからわず、**初めから全リソースを配信してパフォーマンスを下げてしまうのは投機的に下策**です。

しかしこの方法は、検索エンジン対策としてページ下部がインデックスされない懸念があります。

そこでクローラーからのアクセスに対しては、**サーバー側で元の大きなHTMLに合成して、元の巨大なHTMLを静的に配信**することでその懸念を解消します。

### つまりはダイナミックレンダリング

この手法は、Googleが言及する [ダイナミックレンダリング](https://developers.google.com/search/docs/guides/dynamic-rendering?hl=ja) に相当します。

**クローラーには通常と異なるコンテンツをインデックスさせるクローキング**はペナルティの対象ですが、

> ダイナミック レンダリングで同様のコンテンツを生成する限り、Googlebot はダイナミック レンダリングをクローキングとは見なしません。

...に基づき、この方法はクローキングには該当しません。

人間のユーザーにはJavaScriptで下部コンテンツをincludeし、クローラーにはサーバーサイドでincludeすることから、`Hybrid Include`と名付けました(すでにありそうなアイデアですが、例を見つけられなかったのでひとまず)。

## Hybrid IncludeでCore Web Vitalsが改善されるか？

ここで実装例と、PageSpeed Insightsの計測結果を紹介します。

### 大きなHTMLのサンプル

次のページは、このブログの全記事を一覧表示した大きなHTMLのサンプルです。

[A. このブログの全記事を一覧表示したサンプルページ　(HTML 38.6kb / GZIP)](https://www.ideamans.com/_samples/hybrid-include/index-all.html)

### Hybrid Includeを実装したサンプル

次のページは、Hybrid Includeを実装したサンプルです。初期段階のHTMLは10記事分のみ配信し、300ピクセル以上スクロールするとその下のコンテンツを展開します。

[B. Hybrid Includeで初期HTMLの軽量化を図ったページ (HTML 5.2kb / GZIP)](https://www.ideamans.com/_samples/hybrid-include/)

HTMLのデータ量に33kbほどの差があります。

### PageSpeed Insightsのスコアが9ポイント改善

PageSpeed Insightsでこれらのページを計測したところ、約10ポイントの改善がみられました。

<img alt="hybrid-include-psi.png" src="https://blog.ideamans.com/assets/hybrid-include-psi.png" width="1910" height="944" class="img-fluid" />

個別の指標としては、`Time To Interactive`と`Total Blocking Time`に改善が見られます。Core Web Vitalsで言えば、`FID(First Input Delay)`の改善を見込める変化です。

## PHPを例とした実装方法

**`Hybrid Include`にはCore Web Vitalsに対する効果が見込める**ことがわかりました。

次はPHPを例とした具体的な実装方法です。

### 1. 遅延読み込みする部分HTMLの切り出し

はじめに、遅延読み込みする部分HTMLを別ファイルとして切り出します。例えば元のHTMLが次の構造であれば、

<pre><code class="language-php">&lt;html&gt;
  &lt;body&gt;
    &lt;div&gt;
      &lt;div&gt;ページ上部&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;div&gt;ページ下部&lt;/div&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

以下の部分を次のファイル`index-includee.html` として保存します。

<pre><code class="language-php">&lt;div&gt;ページ下部&lt;/div&gt;
</code></pre>

### 2. 読み込み先の目印となるid属性

部分HTMLを別ファイルに切り出した代わりに、JavaScriptによる遅延読み込みで展開する先の目印を`id`属性で示します(例: `hybrid-includer`)。

<pre><code class="language-php">    &lt;div&gt;
      &lt;div&gt;ページ下部&lt;/div&gt;
    &lt;/div&gt;

↓

    &lt;div id=&quot;hybrid-includer&quot;&gt;
    &lt;/div&gt;
</code></pre>

### 3. Hybird Includeの実装

展開先`div#hybrid-includer`内に次のPHPコードを記述します。コードの意図についてはコメントで記載しました。

<pre><code class="language-php">    &lt;div id=&quot;hybrid-includer&quot;&gt;
      &lt;?php
        // 部分HTMLを切り出したファイル名
        $includee = &#039;index-includee.html&#039;;

        // URLパラメータincludeが指定されているか、User-AgentがGooglebotまたはbingbotを含む場合はPHPでinclude
        if (preg_match(&#039;/Googlebot|bingbot/&#039;, $_SERVER[&#039;HTTP_USER_AGENT&#039;]) || isset($_GET[&#039;include&#039;])) {
          include($includee);
        } else {
      ?&gt;
        &lt;script&gt;
          (function() {
            var includeIfOver = 300 // 遅延読み込みを開始するスクロール量
            var includee = &#039;&lt;?php echo $includee ?&gt;&#039;

            window.addEventListener(&#039;scroll&#039;, function once(e) {
              if (window.scrollY &lt; includeIfOver) return

              // このイベントハンドラは不要になるので除去
              window.removeEventListener(&#039;scroll&#039;, once)

              // includeeを読み込んで#hybrid-includerに展開(モダンブラウザ対象であればfetchも可)
              var xhr = new XMLHttpRequest()
              xhr.open(&#039;GET&#039;, includee, true)

              xhr.onload = function() {
                if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {
                  document.getElementById(&#039;hybrid-includer&#039;).innerHTML = xhr.responseText
                }
              }

              xhr.send(null)
            })
          })()
        &lt;/script&gt;
      &lt;?php
        }
      ?&gt;
    &lt;/div&gt;
</code></pre>

リクエストヘッダ`User-Agent`が`Googlebot`または`bingbot`を含む場合(あるいはデバッグ用途でURLパラメータ`include`が指定された場合)は、PHPとして要素`div#hybrid-includer`の内部に部分HTMLをincludeして展開し、クライアントに配信します。

逆に`User-Agent`が条件に合致せず、一般ユーザーからのアクセスと思われる場合は、一定のスクロール量に応じて切り出した部分HTMLをJavaScriptで読み込み、要素`div#hybrid-includer`の内部にその内容を展開します。

この仕組により、**人間の実ユーザー向けには段階的なコンテンツ配信でページ表示のスタートダッシュを高速化しつつ、クローラー向けには静的HTMLとしてコンテンツ全量を配信してSEO上の懸念の解消**を図ることができます。