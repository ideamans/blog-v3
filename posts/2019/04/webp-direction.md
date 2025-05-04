---
# Astrowind
title: '新人にもわかる！WebPのブラウザ振り分けの仕組みを図解。picture要素と.htaccessのどっちでやるべき？'
excerpt: '新社会人のみなさんが初出社を迎えた会社も多いでしょう。 今日はWebP対応/非対...'
updateDate: 2019-04-17
publishedDate: 2019-04-02
tags: 
  - webp

  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/de08d274015f50de2b16f4962d268daea92bc408.png
category: webp

# カスタム
updatedAt: 2019-04-17 08:27:28
publishedAt: 2019-04-02 18:15:00
categories: 
  - webp

  - web-imaging

  - performance

categoryLabels: 
  - WebP

  - Web画像最適化

  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

新社会人のみなさんが初出社を迎えた会社も多いでしょう。

今日はWebP対応/非対応ブラウザに向けた適切な振り分けについて、新人さん(...が今WebPなどを使うかどうかは置いといて...)にもわかりやすく解説します。

## 過渡期のWebPはブラウザ振り分けが必須

2019年4月現在、WebPに非対応のブラウザもまだまだ多いので、WebPを使う場合はブラウザの種類やバージョンによる振り分けが必要です。

つまり、ひとつの画像について、WebPに対応したブラウザでは軽いWebPフォーマットで、対応していないブラウザでは従来のJpegやPNGフォーマットで表示する仕組みを用意しなければなりません。

振り分けの方法には、**ブラウザ側(HTML)で行う方法**と、**Webサーバー側で行う方法**があります。

### いきなり結論「理由がなければWebサーバーで振り分けをおすすめ」

Webサーバー上で振り分けしましょう。その方が安全で楽ちんです。むしろHTMLでの振り分けは(手作業では)かなり無理ゲーだと思います。

## (1) ブラウザ上(HTML)での振り分け

HTMLでは次のようにpicture要素、source要素で「ひとつの画像について選べるふたつのフォーマット」を指定します。
元の画像が**sample.png**、そのWebP版が**sample.png.webp**です。

<pre><code class="lang-css">&lt;picture&gt;
  &lt;source type=&quot;image/webp&quot; srcset=&quot;sample.png.webp&quot; /&gt;
  &lt;img src=&quot;sample.png&quot; /&gt;
&lt;/picture&gt;
</code></pre>

WebPに対応したブラウザは、「sample.pngではなくもっと軽いsample.png.webpがあるんだな。ではそれを使おう」と判断します。

一方、非対応のブラウザは**image/webp**を知らないので、最後の手段であるimg要素が指す**sample.png**を表示します。

図に表すと次の通りです。

<img alt="webp-client-side.png" src="https://blog.ideamans.com/assets/webp-client-side.png" width="674" height="598" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

### 拡張子がふたつ続いても大丈夫なの？

**sample.png.webp**という名称が気になった方がいるかもしれません。この記法は確かに珍しいものではありますが、利用上はまったく問題ありません。

### なぜsample.pngでないの？

**sample.png**のWebP版を**sample.webp**として記述する例も見かけます。しかし私は**sample.png.webp**とオリジナル画像の拡張子に更に追加**.webp**を重ねることをおすすめします。

なぜなら将来もしWebPが主流になったときには、オリジナル画像をWebPとして作ることになるでしょう。

そのとき、次のように区別が付きやすくなります。

* **sample.png.webp**は**sample.png**を元に作られたコピーのWebPファイル
* **sample.webp**は元々WebPとして作られた画像ファイル

もう一点、Webサーバー上で振り分け設定を行う場合にも拡張子を重ねた方が記述がスッキリする利点があります。

## (2) Webサーバー上での振り分け

ブラウザは、サーバーにデータをリクエストするとき、ユーザーには見えない**リクエストヘッダー**という情報を付加しています。

有名なのは**User-Agent**です。ブラウザやOS、バージョンごとに固有な情報となっているので、ユーザーの環境を判断するためによく用いられます。

* **例(macOSのChrome):**  Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36

この**User-Agent**と同様に**Accept**という**リクエストヘッダー**も、裏でブラウザからサーバーに渡されています。

**Accept**は、対応するデータフォーマットをサーバーに知らせる役割を持ちます。これがWebP対応ブラウザを判定する鍵となります。

* **例(WebP非対応のmacOSのSafari):**  text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
* **例(WebP対応のmacOSのChrome):** text/html,application/xhtml+xml,application/xml;q=0.9,**image/webp**,image/apng,*/*;q=0.8,application/signed-exchange;v=b3

WebPに対応するChromeには、**image/webp**というテキストが含まれることにお気づきでしょうか？

現在、WebPに対応するブラウザは、このように**Accept**ヘッダでそれを自己申告する慣習になっています(Microsoft Edgeは現在のところ例外...)。

なので、**sample.png**というファイルを要求されたとき、相手がWebP対応ブラウザであればこっそりその中身をWebPに差し替えてしまえばよいのです。

これを図にすると次の通りです。

<img alt="webp-server-side.png" src="https://blog.ideamans.com/assets/webp-server-side.png" width="636" height="556" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

### 拡張子.pngでWebPを返していいの？

これも気持ち悪いかもしれませんが、実際はまったく支障ありません。

Webサーバーは、これもユーザーの目に見えない**HTTPレスポンスヘッダー**を使ってそのファイルがどんなファイルフォーマットになっているか返しています(**Content-Type**)。

* **例(データがJpegファイルである場合):** Content-Type: image/jpeg

しかし実際のところは、画像データはこのContent-Typeも無視して**実際のファイルのフォーマット**で判断されます。

拡張子、**Content-Type**、実際のデータフォーマットが「ちぐはぐ」でもブラウザはちゃんと表示します。これについては[実際に検証した結果](https://qiita.com/miyanaga/items/0dd570c674379fcaf6b9)があります。

### 具体的にはどのように設定するのか

Apacheであれば**.htaccess**ファイルで簡単にできます。実質7行です。nginxはもっと簡単です。

具体的な方法はここでは割愛します。次の記事を参考ください。

* [WebPと従来の画像を正しく振り分ける.htaccessファイル](https://blog.ideamans.com/2019/02/webphtaccess.html)
* [ページの画像をまるごとWebP変換してPageSpeed Insightsスコアを今すぐ改善するチュートリアル](https://blog.ideamans.com/2019/02/webppagespeed-insights.html)
* [.htaccessによるWebPの選択的レスポンスとその問題点と改善案](https://qiita.com/miyanaga/items/6570c3c9ae8e15dbb57c)
* [nginxにおけるWebP画像の選択的レスポンスの設定方法](https://qiita.com/miyanaga/items/94447efae0bf767b9f2b)
* [CloudFrontにおけるWebPの選択的レスポンス](https://qiita.com/miyanaga/items/e9c7eed19ea16652f04d)

## 結局どっちがいいの？

冒頭で結論を述べましたが、多くのWeb制作の現場にとっては、**Webサーバー側での振り分け**が現実的です。

タスクランナーやアセットパイプラインをしっかり導入・運用できているような技術的に高度なチームでなければ、ブラウザ側(HTML)での対応はおすすめしません。

### 手軽さは？

確かにブラウザ側(HTML)での振り分けは手軽です。Webサーバー側の設定変更は慣れた人でなければ少し気後れするでしょう。

### 作業量は？

ブラウザ側(HTML)での振り分けは、WebP対応する画像についてひとつずつ、picture要素に置き換える必要があります。これは数が多いと大変で、間違いも出やすくなります。

一方、Webサーバー側での振り分けは、ほとんどの場合、一箇所の修正のみで完了します。全体としては圧倒的に手間が少ないと言えます。

### 表現力は？

WebP対応という点についてはどちらも同じですが、ブラウザ側(HTML)での振り分け方法は、[高解像度Retinaディスプレイへの最適化やアートディレクション](https://www.html5rocks.com/ja/tutorials/responsive/picture-element/)にも拡張できます。

picture要素、source要素は手軽であると同時に、玄人向けのアプローチです。

## CSS背景は？

HTMLでimg要素が参照する画像を振り分ける方法はありますが、CSSで背景画像などとして参照する画像を振り分ける合理的な方法は現在のところありません。

Webサーバー側での振り分けであれば、img要素だろうと背景画像だろうと、WebPを適切に振り分けます。

### 安全性

ブラウザ上(HTML)での振り分けにおいて、もし**WebP版ファイルsample.png.webpが存在しなかったら**どうなるでしょうか？

<pre><code class="lang-css">&lt;picture&gt;
  &lt;source type=&quot;image/webp&quot; srcset=&quot;sample.png.webp&quot; /&gt;
  &lt;img src=&quot;sample.png&quot; /&gt;
&lt;/picture&gt;
</code></pre>

存在しない場合は代わりに**sample.png**を読み込んで欲しいところですが、あいにく画像のリンク切れとなってしまいます(Chrome、Firefoxで確認)。

Webサーバー側での振り分けであれば、**sample.png.webp**というファイルがない場合は**sample.png**を返すことができるので画像リンク切れにはなりません。万が一に備えたフォールバックが機能するので安全です。

以上です。

WebP対応において、ファイル変換処理と同じくらい大事な振り分け処理。判断基準のひとつになれば幸いです。

