---
# Astrowind
title: '「あなたのサイトは何秒？」というLTをしてきました。【MT東京−47】「常にカイゼン！成果を出すサイト構築・リニューアルのポイント」第41回オウンドメディア勉強会＆【MT東京-47】 コラボ企画'
excerpt: '先週金曜日（2018年5月25日）に、MT東京とオウンドメディア勉強会のコラボイ...'
updateDate: 2018-05-28
publishedDate: 2018-05-28
tags: 
  - lightfile

  - performance

author: nose
image: https://blog.ideamans.com/assets/2018-05-28-mttokyo-ogp.jpg
category: performance

# カスタム
updatedAt: 2018-05-28 14:44:13
publishedAt: 2018-05-28 10:00:00
categories: 
  - lightfile

  - performance

categoryLabels: 
  - 画像軽量化AI LightFile

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p>先週金曜日（2018年5月25日）に、MT東京とオウンドメディア勉強会のコラボイベントがありました。そこで、「あなたのサイトは何秒？」という表示高速化に関する内容でLTしてきました。</p>
<ul><li><a href="https://mt-tokyo.doorkeeper.jp/events/74087" target="_blank">【MT東京−47】「常にカイゼン！成果を出すサイト構築・リニューアルのポイント」第41回オウンドメディア勉強会＆【MT東京-47】 コラボ企画</a></li><li><a href="https://mt-tokyo.doorkeeper.jp/" target="_blank">MT東京</a></li><li><a href="https://blog.sixapart.jp/ownedmedia-group.html" target="_blank">オウンドメディア勉強会</a></li></ul>
<p style="text-align: center;"><span style="color: #888888;"><img alt="2018-05-28-mttokyo-03.jpg" src="https://blog.ideamans.com/assets/2018-05-28-mttokyo-03.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">ほぼ満席の会場。みんなが改善したい！と思っているのが伝わってきました。</span></p>
<p>当日は座席の数が足りなくなりそうな勢いで、たくさんの方にご参加いただきました。お忙しいところ＆プレミアムフライデーの中、ご来場いただき誠にありがとうございました。また、運営のオウンドメディア勉強会様、MT東京様、会場をご提供いただいたPeatix様、本当にありがとうございました。</p>
<h2>登壇スライド</h2>

<iframe src="https://www.slideshare.net/slideshow/embed_code/key/uQTNk6G9eTdxk2" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="https://www.slideshare.net/2nose1/ss-98699546" title="表示に何秒かかりますか？" target="_blank">表示に何秒かかりますか？</a> </strong> from <strong><a href="https://www.slideshare.net/2nose1" target="_blank">H N</a></strong> </div>

<p>Googleの計測ツールは、以下の３つです。まずはTest Mysiteで計測してみましょう。9秒以上かかっている場合は、なる早での対応が望ましいです。</p>
<ul><li><strong><a href="https://testmysite.withgoogle.com/intl/ja-jp" target="_blank">Test Mysite</a></strong></li><li><a href="https://developers.google.com/speed/pagespeed/insights/?hl=ja" target="_blank">Pagespeed Insight</a></li><li><a href="https://developers.google.com/web/tools/lighthouse/?hl=ja" target="_blank">Lighthouse</a></li></ul>
<p> </p>
<h2>表示高速化は関心が高いが、取り掛かりが難しい</h2>
<p style="text-align: center;"><img alt="2018-05-28-mttokyo-02.jpg" src="https://blog.ideamans.com/assets/2018-05-28-mttokyo-02.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">表示高速化は対応範囲がとても広い。まずはかんたんで効果の高い画像最適化からがおすすめ</span></p>
<p>最初にちょこっと参加者の方に質問させていただいたんですが、表示高速化をバリバリ取り掛かっている方はあまりいませんでした。しかし、やってみようと思っている、やってみようと思っているけどまだ、という方が半分以上いらっしゃったので、やはり関心は高いんだと感じました。</p>
<p>スライドの中でも説明させていただきましたが、表示高速化は対応範囲がとても広いです。全部やろうとすると、個人サイトでも数ヶ月位かかってしまうかもしれません。企業サイトやメディアサイトだと、それこそ年単位のプロジェクトになってしまう可能性がああります。</p>
<p>ですので優先順位をつけて、かんたんで効果が高いものから始めるのがよいと考えています。順番的には、以下の順番がおすすめです。</p>
<ol><li>画像最適化・軽量化</li><li>CDN導入</li><li>ソースコードの見直し</li><li>システム全体の見直し</li></ol>
<p>1と2は、サイトの構成などにもよりますが、比較的導入して効果が高いことがあげられます。画像の最適化・軽量化は、ダウンロードの容量を減らし、転送量を適切にします。そして、CDNは高速配信を行います。この2つは、なにかあった際の切り戻しも比較的容易なので、導入の敷居も低くおすすめです。</p>
<h2>画像最適化されているかチェックしてみよう</h2>
<p>LightFileシミュレータを使えば、画像が最適化されているかどうかがすぐに分かります。また、最適化されていない場合は、どのぐらいファイルが軽量化できるかもわかります。無料ですぐに調べられるので、ぜひ利用してみてください。</p>
<div class="serviceBox">
<div class="serviceImage"><a href="https://simulator.lightfile.net/" target="_blank"><img src="https://blog.ideamans.com/images/service-simulator.jpg" alt="LightFile Simulator β版"></a></div>
<div class="serviceText">
<p class="serviceTitle"><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator β版</a></p>
<p class="serviceDesc">無料で使える画像最適化チェックシミュレータ。チェック結果がレポートになるので、URLを共有すればみんなでみれる。</p>
<p class="serviceLink"><a href="https://simulator.lightfile.net/" target="_blank">https://simulator.lightfile.net/</a></p>
</div>
</div>
<p>レポート画面は、グラフでわかりやすく表示され、全体と個別の画像で効果がわかるようになっています。</p>
<p style="text-align: center;"><img alt="2018-05-28-mttokyo-01.jpg" src="https://blog.ideamans.com/assets/2018-05-28-mttokyo-01.jpg" width="1280" height="3273" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">どのぐらいファイルサイズが削減されるのかが、すぐにわかる</span></p>
<p> </p>
<h2>最後に</h2>
<p>表示高速化は難しく考えられがちですが、少しでも速くなるとほとんどの人がもっとスピードを求めるようになります。画像最適化はLightFileを利用すれば５分ほどで導入も終わってしまいますし、自動処理なので効果はずっと続きます。</p>
<p>もう少しサイト表示を速くしたいなぁと思っている方は、ぜひぜひチャレンジしてみてください。まずは相談したい！という方は、こちらのお問い合わせフォームからご連絡いただければ、ご質問にお答えいたします！お気軽に！</p>
<ul><li><a href="https://core.lightfile.net/contents/mediasite-speedup.html" target="_blank">お問い合わせはこちらから</a></li></ul>
<p>では！</p>
