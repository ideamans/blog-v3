---
# Astrowind
title: 'ページの画像をまるごとWebP変換してPageSpeed Insightsスコアを今すぐ改善するチュートリアル'
excerpt: '先日公開したWebページのWebP変換シミュレータ、ページまるごとWebP変換で...'
updateDate: 2019-02-20
publishedDate: 2019-02-20
tags: 
  - webp

  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/webp-ogp.png
category: webp

# カスタム
updatedAt: 2019-02-20 07:10:03
publishedAt: 2019-02-20 05:33:23
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

先日公開したWebページのWebP変換シミュレータ、[ページまるごとWebP変換](https://sim.lightfile.net/webp/)ですが、たくさんの方に使っていただいています。

このツールで変換したWebP画像は、実際にあなたのWebサイトでお使いいただけます。その具体的な手順を紹介します。

WebP変換と言っても今の画像を置き換えるわけではありません。iPhoneなどのWebP非対応ブラウザには元画像が表示される安全な方法です。

なお、Apache Webサーバーを対象としています。レンタルサーバーのほとんどで適用できます。

## サンプルページ

このチュートリアルでは、[次のサンプルページ](https://www.ideamans.com/_themes/webp-sample/before/)を用意しました。

<a href="https://blog.ideamans.com/assets/juli-free-lifestyle-blog-website-template.jpg"><img alt="juli-free-lifestyle-blog-website-template.jpg" src="https://blog.ideamans.com/assets_c/2019/02/juli-free-lifestyle-blog-website-template-thumb-600xauto-900.jpg" width="600" height="454" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

[こちらのページ](https://colorlib.com/wp/template/juli/)でダウンロードできるCC BY 3.0のWebサイトテンプレートです。

### WebP変換前のPageSpeed Insights

[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)で成果を確認したい場合は、作業の前に計測しておきましょう。

サンプルページでは"52"というスコアでした。

<img alt="pagespeed-before.png" src="https://blog.ideamans.com/assets/pagespeed-before.png" width="1620" height="436" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

タイミングによってばらつきが出るので、できれば数回の平均や中央値をとることをおすすめします。

## まるごとWebP変換！

[ページまるごとWebP変換](https://sim.lightfile.net/webp/)にURLを入力して実行します。

<img alt="enter-url.png" src="https://blog.ideamans.com/assets/enter-url.png" width="2436" height="1280" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

変換とレポートの表示には30秒くらいかかるのでしばらくお待ちください。

このようなレポートが表示されたら変換完了です！

<img alt="webp-report.png" src="https://blog.ideamans.com/assets/webp-report.png" width="1211" height="635" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

サンプルページでは80%削減され、4.12MBもダイエットできました。

## WebP画像を一括ダウンロード

レポートの下にダウンロードフォームがあります。ここにメールアドレスを入力し、一括ダウンロードボタンを押してください。

<a href="https://blog.ideamans.com/assets/download.png"><img alt="download.png" src="https://blog.ideamans.com/assets_c/2019/02/download-thumb-400xauto-905.png" width="400" height="156" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

こちらも30秒〜1分程度で入力したメールアドレスにダウンロードURLが送信されます。zipファイルをダウンロードして展開してください。

<img alt="mail.png" src="https://blog.ideamans.com/assets/mail.png" width="1276" height="608" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

## WebP画像をWebサーバーにアップロード

変換後のWebP画像は、元画像のドメインとフォルダ階層を再現し、"元のファイル名.webp"という別名で作成されます。

なのでお使いのFTPサーバーにフォルダごとアップロードしても、既存のファイルを上書きすることはないようになっています(とはいえバックアップをとってから作業ください！)。

サンプルページのケースでは、アップロードの結果このようになりました。

<img alt="upload.png" src="https://blog.ideamans.com/assets/upload.png" width="920" height="588" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

元画像とペアでWebPファイルがアップロードされます。もちろん元画像は無傷です。

## .haccessのアップロード

最後にWebP画像と元画像を出し分ける設定をします。

WebP対応ブラウザにはWebP画像、非対応ブラウザには元画像を表示させます。この設定によって画像のリンク切れが発生しないようにしっかりWebP対応ができます。

設定と言っても簡単で、ダウンロードしたファイルに含まれる"htaccess.txt"ファイルをそのまま".htaccess"ファイルとしてアップロードするだけです。

<img alt="htaccess.png" src="https://blog.ideamans.com/assets/htaccess.png" width="908" height="398" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

アップロード先はトップページのHTMLと同じルートディレクトリでもよいですし、もし画像が"images"フォルダにしかない、ということであればimagesディレクトリでも結構です。

### 上書きにご注意！

すでに.htaccessがサーバー上に存在する場合があります。その場合、上書きには十分ご注意ください。

すでに存在する場合は、既存の.htaccessファイルの末尾にhtaccess.txtの内容を追記すれば大抵のケースでは問題ありません。

## 動作確認

ChromeなどのWebP対応ブラウザで、強制的に再読込するようにShiftキーを押しながらページを再読込してください。これで画像がすべてWebPになっているはずです。

そこが良い点ではあるんですが、ぱっと見わかりません。

Developer Consoleに慣れている方は、ネットワークタブですぐ確認できます。

不慣れな方は[このような拡張機能](https://chrome.google.com/webstore/detail/webp-highlighter/aonapkfkfneahhaonjjpmcabpnbdmojl)を使ってみましょう。

### Developer Consoleで確認する方法

"Network"タブを開きます。何も表示されない場合はページをまた再読込してください。

画像リソースのType列が"webp"になっていれば完了です！

<img alt="dev-console.png" src="https://blog.ideamans.com/assets/dev-console.png" width="1528" height="1224" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

### 拡張機能で確認する方法

[WebP Highlighter](https://chrome.google.com/webstore/detail/webp-highlighter/aonapkfkfneahhaonjjpmcabpnbdmojl)をインストールしてページを再読込します。

画像が破線で強調されていれば、それはWebP画像ということです。

<img alt="webp-highlighter.png" src="https://blog.ideamans.com/assets/webp-highlighter.png" width="2116" height="1406" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

## 非対応ブラウザもチェック

iPhone、Safari、Internet Explorerなどの非対応ブラウザでもチェックをお忘れなく。

非対応ブラウザでも画像がしっかり表示されていれば、.haccessファイルによる出し分けがしっかりできているということです。

### PageSpeed Insightsをもう一度チェック

WebP対応ができたら、[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)で成果を確認したい場合は、作業の前に計測しておきましょう。

<img alt="psi-after.png" src="https://blog.ideamans.com/assets/psi-after.png" width="1532" height="402" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

WebP変換後は"71"でした。作業前が"52"だったので、なんと19ポイントも改善されました！

ちなみにこのサンプルページは、[以前の記事](/2019/02/webp-pagespeed-insights.html)でPageSpeed Insightsへの効果が特に高いことがわかっていました。それでチョイスしたのですが、同じように画像が多く使われているサイトでは高い確率でスコアが改善されます。


いかがでしょうか。1ページのランディングページであればこの方法で今すぐページ表示の高速化ができます。

ぜひ試してみてください！

