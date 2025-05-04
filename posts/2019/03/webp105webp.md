---
# Astrowind
title: 'WebPに関する10の誤解~5分で正しく理解するWebP'
excerpt: '「WebPって聞いたことはあるけど...」という方に向けてまとめてみました！ 多...'
updateDate: 2019-03-15
publishedDate: 2019-03-15
tags: 
  - webp

  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/woman-1733881_1920.jpg
category: webp

# カスタム
updatedAt: 2019-03-15 10:23:29
publishedAt: 2019-03-15 09:18:27
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

「WebPって聞いたことはあるけど...」という方に向けてまとめてみました！

多くのWebサイトで**画像を半分以下に軽量化できる優れたフォーマット**ですが、まだまだ知名度が低い状態にあります。曖昧だった理解をスッキリさせるためにご参考ください。

※ [以前、Qiitaに投稿した記事](https://qiita.com/miyanaga/items/1c8d0f8c2f44d8c3b5b5)のアップデート記事です。

## 1. ✖ ウェブピーと読む → ⭕ ウェッピー

標準的な発音は**ウェッピー (Weppy)**とされています。

## 2. ✖ Googleの商用技術である → ⭕ オープンソース

特許技術ではなく、[BSDライセンスに基づくオープンソースプロジェクト](https://github.com/webmproject/libwebp)です。

## 3. ✖ Chromeしか対応していない → ⭕ Android、Edge、FirefoxもOK

2018年の後半から2019年にかけてWindowsの標準ブラウザ[Microsoft Edge](https://www.microsoft.com/windows/microsoft-edge)と[Firefox](https://www.mozilla.org/firefox/new/)が新たにWebPに対応しました。

あとは**Safari(iPhone)の対応待ち**という状況です。

<a href="https://blog.ideamans.com/assets/webp-share-2019-03.png"><img alt="webp-share-2019-03.png" src="https://blog.ideamans.com/assets_c/2019/03/webp-share-2019-03-thumb-1200xauto-966.png" width="1200" height="425" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>
[Can I use...](https://caniuse.com/#feat=webp)より

**世界的には約75%**のユーザーがWebPを閲覧できるとされています(2019年3月現在)。
一方、**日本国内では約38%**に留まっています。これは日本でのiPhoneシェアの高さによるものです。

SafariとiPhoneが対応すると、ユーザーシェアは一気に90%以上にひっくり返ります。

## 4. ✖ まだ誰も使っていない → ⭕ 有名サイトが既に活用

グローバルに展開するサイトではすでに積極的な活用が始まっています。

* [Amazon](https://blog.ideamans.com/2019/03/webp-amazon.html)
* [Microsoft](https://blog.ideamans.com/2019/02/webp-1.html)
* [Wikipedia](https://blog.ideamans.com/2019/02/webp-wikipedia.html)

当然ながら、WebPをリードするGoogleが提供する多くのサイトで積極的に利用されています。

* [YouTube](https://www.youtube.com/)
* [GooglePlay](https://play.google.com/store)
* [Pixel 3](https://store.google.com/jp/product/pixel_3)

日本国内の通販サイトでは[楽天市場](https://www.rakuten.co.jp/)、メディアサイトでは[YOMIURI ONLINE](https://www.yomiuri.co.jp/)や[日経電子版](https://www.nikkei.com/)が積極的に利用しています。

* [通販上位300サイト中32サイトがWebPを配信・楽天市場は積極利用](https://blog.ideamans.com/2019/02/30011webp.html)
* [新聞ニュース系158サイトでWebP利用中は23サイト・WebPで平均-1.6秒待ち時間短縮と試算・レポート無料公開](https://blog.ideamans.com/2019/02/news-sites-webp.html)

## 5. ✖ SEOにはまったく無関係 → ⭕ PageSpeed Insightsスコアに影響

WebP対応と検索順位との関係はわかりませんが、評価指標のひとつとされている**[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)のスコアは高い確率で上がり**ます。

これはPageSpeed insightsの内部ロジックである[Lighthouse](https://developers.google.com/web/tools/lighthouse/)にの**次世代画像フォーマットへの対応(Serve images in next-gen formats)**という監査項目があるためです。

27のダミーサイトで検証した結果、PageSpeed Insightsのスコアは平均+3.2、最大で+22.6ポイント改善されました。

* [WebPの活用によるPageSpeed Insigntsのスコア改善を本気で検証](https://blog.ideamans.com/2019/02/webp-pagespeed-insights.html)
* [WebP対応によりPageSpeed Insightsのスコアが5ポイント改善](https://blog.ideamans.com/2018/10/webppagespeed-insights5.html)

## 6. ✖ Jpegに代わるフォーマットである → ⭕ PNGやGIFの代わりにも

**ロスレス(可逆)圧縮モード**があり、**PNGとGIFの代わり**に利用することもできます。
256色のインデックスカラーやアルファチャンネル、アニメーションもサポートしているため、**主流のWeb画像はすべてWebPに置き換え可能**です。

PNGやGIFと比べても高い圧縮性能を持っています。

Webページ上の画像をWebPに変換するとどうなるか、シミュレーションできるサイトを提供しています。
**ファイルサイズが半分以下**になるケースも多いです。

* [ページまるごとWebP変換・効果測定と一括ダウンロード](https://sim.lightfile.net/webp/)

## 7. ✖ Jpegより完全に優れたフォーマットである → ⭕ 軽量な分、弱点も

圧縮性能はJpegより高いのですが、表現力には弱点もあります。

* サブサンプリングが4:2:0のみ。**キリッとした輪郭の表現が苦手**
* 解像度の上限が16383×16383
* CMYKカラーモデルに非対応

個人的に[苦手な表現の例](https://qiita.com/miyanaga/items/3e2e581d6d580ca08187)も見つけました。

Web以外にも広く使われているJpegに対し、**Webでの配信に特化して軽量化されたフォーマット**という理解がしっくりきます。

## 8. ✖ 非対応ブラウザは切り捨て → ⭕ 簡単に両対応可能

従来のJpeg、PNG、GIFを基本的には用意して非対応のブラウザにはそれらを表示させつつ、対応ブラウザにのみ軽量なWebPを配信する**プログレッシブ・エンハンスメント**が可能です。

* [ページの画像をまるごとWebP変換してPageSpeed Insightsスコアを今すぐ改善するチュートリアル](https://blog.ideamans.com/2019/02/webppagespeed-insights.html)
* [WebPと従来の画像を正しく振り分ける.htaccessファイル](https://blog.ideamans.com/2019/02/webphtaccess.html)
* [CloudFrontにおけるWebPの選択的レスポンス](https://qiita.com/miyanaga/items/e9c7eed19ea16652f04d)
* [nginxにおけるWebP画像の選択的レスポンスの設定方法](https://qiita.com/miyanaga/items/94447efae0bf767b9f2b)

## 9. ✖ 特別なソフトウェアが必要 → ⭕ オープンソースでも十分

オープンソースの`cwebp`コマンドを使えば、お使いのPCやWebサーバー上でWebPへの変換を行うことができます。
WordPress向けの[EWWW Image Optimizer](https://ja.wordpress.org/plugins/ewww-image-optimizer/)のような無料プラグインもあります。

ApacheやNginxも簡単な設定でWebPの出し分けが可能です。

* [3ファイルでできるサイト全体の自動的なWebP対応](https://qiita.com/miyanaga/items/94b5bb42501e2292fb67)

## 10. ✖ デザイナーの仕事が増える → ⭕ 自動変換がオススメ

WebPファイルを手作業で作成するのはあまり現実的ではありません。

ひとつは、macOSやPhotoshopで標準対応がされていないなど、Webの表示以外の制作環境がまだ整っていないから。

もうひとつは、JpegやPNGなどもまだまだ必要なので単純に手間が増えるからです。

CDNの画像プロキシ、アセットパイプライン、バッチ処理、CMSのプラグインなどで自動変換することを強くお勧めします。それであればデザイナーの手間は増えません。

以上です。WebPの不明点が少しでも明らかになれば幸いです。

