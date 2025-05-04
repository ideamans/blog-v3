---
# Astrowind
title: 'カンタンに今みているページの表示時間計測ができる！Chrome拡張機能「Page Load Time」はDevToolsよりもお手軽で使いやすい！'
excerpt: 'もっとカンタンに、今みているページの表示されるまでの時間がわからないかなぁ......'
updateDate: 2018-03-16
publishedDate: 2018-02-07
tags: 
  - web-imaging

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-02-07-page-load-time01.jpg
category: web-imaging

# カスタム
updatedAt: 2018-03-16 16:48:35
publishedAt: 2018-02-07 18:00:00
categories: 
  - web-imaging

  - performance

categoryLabels: 
  - Web画像最適化

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p><strong>もっとカンタンに、今みているページの表示されるまでの時間がわからないかなぁ...。毎回操作したり、あれこれするのは面倒...。</strong></p>
<p>ChromeのDevToolsは非常に高機能で、詳細まで情報を出してくれる素晴らしいツールです。しかし、そこまで情報はいらないよ！という方や、もっと単機能がいい！という方もいらっしゃるでしょう。</p>
<p>今回は、情報は必要十分で、<strong>知りたい情報がすぐに見れちゃうChromeの拡張機能</strong>をご紹介します。</p>
<p> </p>
<h2>Google Chromeの拡張機能「Page Load Time」</h2>
<p><img alt="2018-02-07-page-load-time01.jpg" src="https://blog.ideamans.com/assets/2018-02-07-page-load-time01.jpg" width="1190" height="670" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p style="text-align: center;"><span style="color: #888888;">Chrome ウェブストアから拡張機能をインストール</span></p>
<p>Chromeのメニュー部分にこの拡張機能のアイコンが表示され、そこに表示にかかった時間がみれるようになるという優れものです。</p>
<ul><li><a href="https://chrome.google.com/webstore/detail/page-load-time/fploionmjgeclbkemipmkogoaohcdbig?hl=ja" target="_blank">Chrome ウェブストア　Page load time</a></li></ul>
<p>インストールすると、メニューバーのところに時計のアイコンが表示されます。</p>
<p style="text-align: center;"><img alt="2018-02-07-page-load-time02.jpg" src="https://blog.ideamans.com/assets/2018-02-07-page-load-time02.jpg" width="424" height="74" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">時計アイコンが表示されます。0.07は、表示しているページの表示までの時間をあらわしている。</span></p>
<p>インストールができたら、気になるページにアクセスしてみましょう。上記のように、時間が計測されます。<strong>パネルをひらいたり、右クリックしたりの作業がなく、計測したいページにアクセスすればよいだけ！という手軽さ</strong>がいいですね！</p>
<p> </p>
<h2>アイコンをクリックすれば詳細な情報が表示される親切設計</h2>
<p>アイコンをクリックすると、どういう処理に時間がかかっているのかが一目瞭然です。通常は、DOM（Document Object Model）に一番時間がかかります。これは描画処理なので、最もパワーが必要になるからです。</p>
<p><img alt="2018-02-07-page-load-time03.jpg" src="https://blog.ideamans.com/assets/2018-02-07-page-load-time03.jpg" width="1200" height="546" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p style="text-align: center;"><span style="color: #888888;">弊社のサービス「implet」のトップページを計測。cacheした状態で0.70秒。</span></p>
<p>コンテンツが多いサイトでも、3秒はかからないくらいだと思います。3秒以上かかっている場合は、閲覧者が離脱する可能性が高まりますので、すぐに改善しましょう。</p>
<p> </p>
<h2>あの人のホームページはどのくらい？</h2>
<p>ホームページが有名な人といえば、この方。Page Load Timeで計測してみると、<strong>驚きの0.34秒でした！キャッシュした状態では、0.15秒という計測結果も！</strong></p>
<p style="text-align: center;"><img alt="2018-02-07-page-load-time04.jpg" src="https://blog.ideamans.com/assets/2018-02-07-page-load-time04.jpg" width="1200" height="474" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">キャッシュなしで、0.34という高速表示。さすがです。</span></p>
<p> </p>
<h2>ページ表示の高速化には、画像最適化が必要</h2>
<p>ページの高速表示には、画像最適化が欠かせません。Googleが提供している２つの計測ツールで、気になるサイトを計測してみましょう。</p>
<ul><li><a href="https://developers.google.com/speed/pagespeed/insights/?hl=ja" target="_blank">Google PageSpeed Insight</a></li><li><a href="https://testmysite.withgoogle.com/intl/ja-jp" target="_blank">Test My Site</a></li></ul>
<p>画像最適化することで、今よりも計測結果が良くなります。さらに、ページの表示高速化は今とは比べ物にならないくらい速くなるはずです。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://core.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/assets/service-lfc.jpg" alt="JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://core.lightfile.net/" target="_blank">JPGの最適化は、LightFile Core | 画像の最適化でページ表示を高速に！</a></p>
<p class="serviceDesc">自動でJPEGファイルを容量削減し、表示の高速化/転送量の削減を実現します。</p>
<p class="serviceLink"><a href="https://core.lightfile.net/" target="_blank">https://core.lightfile.net/</a></p>
</div>
</div>
<p>ページ表示を高速にして、アクセス数もコンバージョンもあげていきましょう！</p>
<p> </p>
<p>※なお記載されている内容は、すべて自己責任でおこなってください。</p>
<p> </p>
