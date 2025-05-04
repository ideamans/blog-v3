---
# Astrowind
title: '正式版になった日本語Google Fontsは表示の高速化を期待できる'
excerpt: '先月、Google Fontsに正式に追加された日本語フォントが表示の高速化が期...'
updateDate: 2018-10-03
publishedDate: 2018-10-03
tags: 
  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/google-font-japanese.png
category: performance

# カスタム
updatedAt: 2018-10-03 21:05:43
publishedAt: 2018-10-03 14:25:39
categories: 
  - performance

categoryLabels: 
  - 表示高速化

authorId: miyanaga
subTheme: 
recommended: false
---

<p>先月、Google Fontsに正式に追加された日本語フォントが<strong>表示の高速化が期待できるよさげな仕様</strong>になっています。</p>
<p><a href="https://fonts.google.com/?subset=japanese">Google Fonts (日本語で絞り込み)</a></p>
<p>日本語Webフォントを自社のWebサーバーから配信していたり、Google Fontsの日本語フォント早期アクセスを利用しているサイトは乗り換えを検討しましょう！</p>
<h2>Webデータ肥大化の伏兵Webフォント</h2>
<p>たいていのWebページで最も多くの容量を占めているのは画像ですが、最近は画像より日本語Webフォントの方が重たいというサイトも増えてきました。</p>
<p>日本語フォントはご存じの通り、文字の種類がとても多いので相当なデータ量になります。Webページの表示高速化にはWebフォントへの考慮も重要です。</p>
<h3>無造作に配信すると4.3MB！</h3>
<p>人気のNoto Sans JPを無造作に<strong>フルセットで配信すると4.3MB</strong>にもなるそうです。しかもそれだけだと太字フォントが含まれません。<strong>太字にも対応させるためにはさらに4.4MB(合計8.7MB！)</strong>のファイルをユーザーにダウンロードさせる必要があります。</p>
<p><a href="https://blog.jxck.io/entries/2016-03-14/web-font-noto-sans.html">Noto Sans の Web Font 対応とサブセットによる最適化</a></p>
<p>一般的にダウンロードが終わるまでは代替フォントが表示されますが、Googlegが推奨する1.6MB(ページ全体)に対してあまりに大富豪すぎるデータ量です。</p>
<p>だから最低限、使用頻度の高い文字だけ抽出したフォントファイルを再構成する必要があります。</p>
<p>そんな楽そうで楽ではない日本語フォントですが、ついにGoogle Fontsでの正式対応が始まったという記事があったので調べてみました。</p>
<p><a href="https://www.dream-seed.com/weblog/google-fonts-launches-japanese-support">Google Fontsが日本語WEBフォントを正式サポート</a></p>
<h2>Google Fonts正式版では細切れのフォントファイルをHTTP/2で配信</h2>
<p>上記の記事によると、Google Fontsでは<strong>大きな日本語フォントを分割ダウンロードさせている</strong>ということです。Noto Sans JP用のCSSを直接見てみましょう。</p>
<p><a href="https://fonts.googleapis.com/css?family=Noto+Sans+JP">https://fonts.googleapis.com/css?family=Noto+Sans+JP</a></p>
<p>確かに細かく分割されている！</p>
<p>最初の@font-feceには128文字分のフォントが含まれており、<strong>全体で120個の@font-face(Webフォントファイル)に分割</strong>されています。</p>
<p>こうすることで並列ダウンロードが可能になります。しかも各<strong>WebフォントファイルはHTTP/2で配信</strong>されています。HTTP/2は複数のファイルをストリーミング的にブラウザに送ることができます。<strong>Google FontsはWebフォントのストリーミング配信を実現した</strong>と言ってもよさそうです。</p>
<h3>日本語フォント早期アクセスから何が変わったか</h3>
<p>Google Fontsでは以前から日本語フォントを配信していましたが、早期アクセスという扱い(ベータみたいな感じ？)でした。</p>
<p><a href="https://googlefonts.github.io/japanese/">Google Fonts + 日本語 早期アクセス</a></p>
<p>この早期アクセスで配信されているNoto Sans JapaneseのCSSが以下です(Noto Sans JPとNoto Sans Japaneseは厳密には別ものらしいですが参考まで)。</p>
<p><a href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css">https://fonts.googleapis.com/earlyaccess/notosansjapanese.css</a></p>
<p>こちらはfont-weight: 100〜900として<strong>それぞれ1ファイルを参照</strong>しています。分割ストリーミングはされていません。例えば NotoSansJP-Regular.woff2 は約1.56MBです。4.3MBからかなりサブセット化されているようですが、やはりなかなかの容量です。</p>
<p> </p>
<p>以上の調査から<strong>Google Fontsの日本語フォント正式版に多くの改善点や優位性がある</strong>とわかりました。</p>
<p>もっとページに合わせた最適化による高速化を図るためには、<a href="https://www.softbanktech.jp/service/list/fontplus/">FONTPLUS</a>のサービスを利用する方法もあります。</p>
<p> </p>

