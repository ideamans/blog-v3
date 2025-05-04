---
# Astrowind
title: '実際、画像を軽量化すると本当に表示高速化されるの？LightFileの処理前後が比較できるページを公開しました。'
excerpt: '表示の高速化は必須条件です。 提案書にも書くことが増えてきている今日このごろ、ど...'
updateDate: 2018-03-19
publishedDate: 2018-03-19
tags: 
  - web-imaging

  - lightfile

author: nose
image: https://blog.ideamans.com/images/2018-03-19-lf-demo.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-19 20:19:15
publishedAt: 2018-03-19 19:30:23
categories: 
  - web-imaging

  - lightfile

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

authorId: nose
subTheme: 
recommended: false
---

<p><strong>表示の高速化は必須条件です。</strong></p>
<p>提案書にも書くことが増えてきている今日このごろ、どうやって解決しようかお悩みですか？今回は、弊社の画像最適化ツールLightFileの効果を体感するページを作成しました。表示高速化の第一歩は、画像の最適化がオススメです。</p>
<p> </p>
<h2>比較ページを見てみよう</h2>
<p style="text-align: center;"><img alt="2018-03-19-lf-demo.jpg" src="https://blog.ideamans.com/images/2018-03-19-lf-demo.jpg" width="1440" height="803" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">LightFileの処理結果を比較するためのページ</span></p>
<p>今回は、<strong>HTMLがほぼ同じなページを２ページ作成し、表示する画像をLightFileの処理前と処理後でそれぞれ読み込ませる</strong>ようにしました。これにより、キャッシュを消してリロードするとか、<a href="https://developers.google.com/web/tools/chrome-devtools/?hl=ja" target="_blank">ChromeのDevTools</a>でいろいろ見てみるとか、比較できるようにしてみました。</p>
<p>それぞれのページのスペックは以下のとおりです。</p>
<ul><li>サーバ：AWS S3にコンテンツを置いて配信</li><li>オリジナル：処理前の画像を表示するページ</li><li>LightFile処理版：処理後の画像を表示するページ</li></ul>
<p>それぞれの表示する画像のファイルサイズは以下のとおりです。</p>
<ul><li>オリジナル：<strong>12.6MB</strong></li><li>LightFile処理版：<strong>4.6MB</strong></li></ul>
<p><strong>LightFileで処理をすると、約1/3のファイルサイズ</strong>になっています。かんたんに表現してしまうと、ダウンロードにかかる時間が約1/3ですんでしまうことになります。<strong>実際に、ファーストビューの画像が表示されるまでの時間は、明らかにLightFile処理版の方が早い</strong>です。可能であれば、Wifiなどの高速回線ではなく、<strong>3G回線などの少し遅めの回線</strong>で見ていただくと、その違いは驚くほど体感することができますよ！</p>
<p> </p>
<h3>比較ページはこちら</h3>
<p>ページにアクセスすると、PCではページ右上、スマホではページ上部にナビゲーションがあります。それぞれ以下のテキストリンクがあるので、ページを切り替えて表示してみてください。</p>
<ul><li><a href="https://core.lightfile.net/demo/index.html">オリジナル版</a></li><li><a href="https://core.lightfile.net/demo/index_lightfile.html" target="_blank">LightFile処理版</a></li></ul>
<p style="text-align: center;"><img alt="2018-03-19-lf-demo-02.jpg" src="https://blog.ideamans.com/images/2018-03-19-lf-demo-02.jpg" width="1184" height="550" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">PC版でのページ切り替え</span></p>
<p style="text-align: center;"><img alt="2018-03-19-lf-demo-03.jpg" src="https://blog.ideamans.com/images/2018-03-19-lf-demo-03.jpg" width="375" height="515" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">スマホ版でのページ切り替え</span></p>
<p> </p>
<h2>オススメな違いを比べる方法</h2>
<p>GoogleのChromeをご利用の方は、ぜひ<a href="https://developers.google.com/web/tools/chrome-devtools/?hl=ja" target="_blank">DevTools</a>を利用しましょう。</p>
<ol><li>画面を右クリックして、「検証」を選ぶと、ブラウザの下や右側にDevToolsのパネルが表示されます。</li><li>上の方に、Networkというメニューがあるので、そこをクリックします。</li><li>ブラウザのリロードボタンを長押しして、「キャッシュの消去とハード再読み込み」を選びます。</li><li>ブラウザのキャッシュが消え、ページの要素をすべてダウンロードします。</li><li>パネル下部に転送量や、どのくらいの時間がかかったのかなどが表示され、見比べることができます。</li></ol>
<p>詳しくは、こちらのブログ記事を参考にしてみてください。</p>
<blockquote class="twitter-tweet" data-lang="ja">
<p lang="ja" dir="ltr"><a href="https://twitter.com/hashtag/Chrome?src=hash&amp;ref_src=twsrc%5Etfw">#Chrome</a> 便利ですよね！今回はNetworkパネルで、画像がどのくらい読み込まれているのかがわかる！というご紹介です。ちなみに画像と同じく重いのは、<a href="https://twitter.com/hashtag/%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88?src=hash&amp;ref_src=twsrc%5Etfw">#フォント</a> です。<a href="https://t.co/iA9tes17Zt">https://t.co/iA9tes17Zt</a></p>
-- アイデアマンズ (@ideamans) <a href="https://twitter.com/ideamans/status/959235287011483653?ref_src=twsrc%5Etfw">2018年2月2日</a></blockquote>
<script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" type="text/javascript"></script>
<p> </p>
<h2>最後に</h2>
<p>表示高速化は、さまざまな要素が絡み合っているため、できるだけシンプルに対応することが重要です。LightFileは、開発不要で、AWS Lambdaか、サーバにインストールすることで設定が可能です。処理はすべて自動で行われるため、一度設定してしまえば、もう気にすることはありません。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p>仕組みを自動化することで、半永久的に問題を解決することが可能なのです。</p>
<p> </p>
