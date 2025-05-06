---
# Astrowind
title: 'Core Web Vitals (コアウェブバイタル) 競合調査の手順を紹介・無料のデータポータルでプログラミングも不要'
excerpt: '2021年から検索順位に加わるとされるCore Web Vitals (コアウェ...'
updateDate: 2020-06-22
publishedDate: 2020-06-22
tags: 
  - cvr

  - core-web-vitals

  - seo

author: miyanaga
image: https://blog.ideamans.com/assets/91f6fff897858e818edaeb0f51d4ed2781539f41.png
category: core-web-vitals

# カスタム
updatedAt: 2020-06-22 13:22:20
publishedAt: 2020-06-22 12:00:42
categories: 
  - cvr

  - core-web-vitals

  - seo

categoryLabels: 
  - CVR改善

  - Core Web Vitals

  - SEO

authorId: miyanaga
subTheme: bs4
recommended: false
---

2021年から検索順位に加わるとされる[Core Web Vitals (コアウェブバイタル)](https://developers-jp.googleblog.com/2020/05/web-vitals.html)。その関係でSearch Console (サーチコンソール)での自社データ閲覧がよく知られていますが、元々は[Chrome Ux Report](https://developers.google.com/web/tools/chrome-user-experience-report)として全サイトの情報が公開されているパブリックデータです。

だから気になる他社のデータも簡単に閲覧できます。

BigQueryの利用例が多く、APIでもアクセスできるのですが、GoogleのBIツール「データポータル」に予めしっかりしたレポートが用意されています。SQLやプログラミングも不要でお手軽なので、自社以外の競合調査の方法として紹介します。

## データポータルでデータソースChrome UX Reportを選択

[データポータル](https://datastudio.google.com/u/0/navigation/reporting)にアクセスしてください。初回はGoogleアカウントでのログインが必要です。

ホーム画面で`作成`→`データソース`を選択します。

<img alt="dataportal-010.png" src="https://blog.ideamans.com/assets/dataportal-010.png" class="img-fluid thumbnail" />

`chrome`で検索すると、`Chrome UX Report`が表示されます。これを選択します。

<img alt="dataportal-020.png" src="https://blog.ideamans.com/assets/dataportal-020.png" class="img-fluid thumbnail" />

`Enter origin URL:`に対象サイトのドメインを入力します。あとで変更できるのでひとまず自社サイトのドメインでも入力してください。

`「Enter origin URL:」がレポートで変更されることを許可します`にチェックを付けます。`新しいレポートでレポート テンプレートを使用する`には最初からチェックが付いていると思いますが、これも外さずに最後に`接続`ボタンを押します。

<img alt="dataporta-030.png" src="https://blog.ideamans.com/assets/dataporta-030.png"  class="img-fluid thumbnail" />

`レポートを作成`ボタンを押します。

<img alt="dataportal-040.png" src="https://blog.ideamans.com/assets/dataportal-040.png" class="img-fluid thumbnail" />

たったこれだけで、コアウェブバイタル(Core Web Vitals)のキレイなレポートが作成されました！ このまま`編集モード`でも閲覧できますが、`ビュー`ボタンを押すとより操作しやすくなります。

<img alt="datapotal-045.png" src="https://blog.ideamans.com/assets/datapotal-045.png" class="img-fluid thumbnail" />

## 時系列で改善やUXの低下をチェック

`ビューモード`では左メニューに各指標が表示されます。指標を選択すると、月々の時系列での変化が表示されます。改善が進んでいるか、あるいはいつの間にか速度が落ちていないか、一目瞭然です。

<img alt="dataportal-055.png" src="https://blog.ideamans.com/assets/dataportal-055.png" class="img-fluid thumbnail" />

PageSpeed Insightsは標準的な端末とネットワーク(ただし世界水準のため、日本においてはかなり低速)を想定したその瞬間のシミュレーションですが、この指標は**ユーザー(統計情報の提供をオプトインしたChromeユーザー)が実際に経験した値**です。結果は真摯に受け止める必要があります。

## 競合調査

レポートの見方が分かったので、自社以外のサイトを見てみましょう。

`編集モード`に戻ります。

<img alt="dataportal-060.png" src="https://blog.ideamans.com/assets/dataportal-060.png" class="img-fluid thumbnail" />

`ファイル`メニューから、`レポート設定`を選択すると、右サイドバーに設定項目が表示されます。

<img alt="dataportal-070.png" src="https://blog.ideamans.com/assets/dataportal-070.png" class="img-fluid thumbnail" />

このサイドバーの下部に、データソース作成時にドメインを設定した`Enter origin URL:`があります。ここを任意のドメインに変更すると、即座に再読み込みが行われます。データソースの`origin`パラメータを、レポートごとに変更できるわけです。

例えば`toyota.jp`と入力すると、[トヨタ自動車のウェブサイト](https://toyota.jp/)のCore Web Vitalsが表示されました。

<img alt="dataportal-080.png" src="https://blog.ideamans.com/assets/dataportal-080.png" class="img-fluid thumbnail" />

## 自動車シェア上位3社の比較

このまま例として日本の自動車メーカー3社のCore Web Vitalsを見比べてみます。いずれも`2020年5月`のデータです。

<img alt="dataportal-compare.png" src="https://blog.ideamans.com/assets/91f6fff897858e818edaeb0f51d4ed2781539f41.png" width="1545" height="780" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

全体的に、端末も含めた日本の通信は高性能なので、Good(緑色)のゾーンが多いです。

`①` LCP(最大コンテンツの表示 ≒ 表示速度)はトヨタ自動車がやや優位です。`②` FID(最初の入力遅延 ≒ 操作への反応速度)は日産自動車に見劣りが見られます。

`③` CLS(累積レイアウトの変更 ≒ 誤操作を誘因するレイアウト変化)はトヨタ自動車と日産自動車が思いのほか悪い状況です。CLSは予め領域をCSSで確保するなど、フロントエンドの工夫で改善しやすい部分なので、見直していただきたいものです。

## 機会損失は見た目以上に大きい

試してみていかがでしょうか。**「緑色のゾーンが大部分で安心した」**という方が多いかもしれません。

ただ、緑色は快適で離脱しなかったがために増えた結果で、黄色や赤色は離脱したことで少なく見えている可能性があります。つまりすでに離脱されて失った潜在的な機会はこのチャートにはもう乗っておらず、例えば黄色や赤色がチャート上は20%程度でも、実際はその倍以上の機会損失があったのかもしれません。

上記の考え方は、チャートの割合がユーザーベースではなくPVベースである前提で、Chrome UX Reportがどちらなのか明言は見当たらなかったのですが、以下の記述を見るとやはりPVベースかなと思います。

> For example, the above shows a sample record from the Chrome User Experience Report, which indicates that 12.3% of page loads had a "first paint time" measurement in the range of 1000-1200 milliseconds when loading "<https://example.com>" on a "phone" device over a "4G"-like connection.
>
> [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report)より

PageSpeed Insightsのような標本値や、Google Analyticsの速度のようにならされた平均値を見ているとなんとなく**「みんな単一の同じ体験をしている」と錯覚しがち**です。しかし分布を見ると、満足している人も、そうでない人も両方いる**「ユーザーの顔」**を想像できるようで面白いですね。
