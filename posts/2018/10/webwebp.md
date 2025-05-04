---
# Astrowind
title: 'Webサイト全体をWebP対応する最低限の方法'
excerpt: 'こちらのブログでもアクセスの多いテーマがGoogleの提唱する画像の新フォーマッ...'
updateDate: 2019-02-21
publishedDate: 2018-10-15
tags: 
  - webp

  - web-imaging

  - performance

author: miyanaga
image: https://blog.ideamans.com/assets/2018-10-16-webp.jpg
category: web-imaging

# カスタム
updatedAt: 2019-02-21 17:33:06
publishedAt: 2018-10-15 10:58:23
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

<p>こちらのブログでもアクセスの多いテーマがGoogleの提唱する画像の新フォーマットの<a href="https://developers.google.com/speed/webp/">WebP</a>です。</p>
<p><a href="https://blog.ideamans.com/2018/04/webp.html">WebPってなに？Googleが作った新しい画像フォーマットは、軽くてアルファチャンネルもサポート！表示高速化するなら検討してみよう！</a></p>
<p>ふと<strong>「サイト全体のWebP対応って簡単なシェルスクリプトだけで最低限はできるんじゃない？」</strong>と思いつき、簡単なスクリプトを作ってみました。</p>
<p><a href="https://qiita.com/miyanaga/items/94b5bb42501e2292fb67">3ファイルでできるサイト全体の自動的なWebP対応</a></p>
<p>今ご覧のこのブログサイトと、<a href="https://www.ideamans.com/">コーポレートサイト</a>で早速試験運用中ですが、特に問題はなさそうです。</p>
<h2>成果はどうか</h2>
<p>どのくらいのファイルサイズ削減に繋がったかは、また詳しく報告します。</p>
<p><a href="https://developers.google.com/speed/pagespeed/insights/?hl=ja">PageSpeed Insights</a>と<a href="https://developers.google.com/web/tools/lighthouse/?hl=ja">Lighthouse</a>のスコアはちょっとだけ上がりました。</p>
<p>画像ファイルサイズに関する監査項目があり、WebPにすると高確率でパスできます(同じGoogle主体のプロジェクトなので笑)。</p>
<p>画像ファイルが多いサイトでは、もしかしたら検索エンジンのスコアリングにも影響があるかもですね。</p>
<p>以上、小規模サイト向けの簡単なスクリプトですが、参考になりましたら幸いです。</p>
<p> </p>

