---
# Astrowind
title: '[テスト公開中]ページで表示している画像がどのくらい軽くなるのかがひと目でわかる！LightFileシミュレータβ版公開してます！'
excerpt: 'Webパフォーマンスを上げるためには、画像最適化（軽量化）は必須項目です。今回は...'
updateDate: 2018-04-16
publishedDate: 2018-03-26
tags: 
  - web-imaging

  - lightfile

  - performance

author: nose
image: https://blog.ideamans.com/images/2018-04-16-lightfile-simulator-ogp.jpg
category: lightfile

# カスタム
updatedAt: 2018-04-16 09:47:49
publishedAt: 2018-03-26 09:34:39
categories: 
  - web-imaging

  - lightfile

  - performance

categoryLabels: 
  - Web画像最適化

  - 画像軽量化AI LightFile

  - 表示高速化

authorId: nose
subTheme: 
recommended: false
---

<p><strong>Webパフォーマンスを上げるためには、画像最適化（軽量化）は必須項目</strong>です。今回は、弊社のプロダクトである<a href="https://core.lightfile.net/" target="_blank">画像最適化ツールLightFile</a>のシミュレータをご紹介します。まだまだ<strong>テスト公開中のβ版</strong>ですので、<strong>動作やレポートについては不安定なところがありますが、ぜひぜひ利用してみてください。</strong></p>
<p> </p>
<h2>どんなことがわかるの？</h2>
<p>シミュレータを利用すると、こんなことがわかります。</p>
<h3>画像単体でシミュレートする場合</h3>
<ol><li>画像単体でどこまで軽くなるか</li><li>その画像の画質はどのくらいか</li></ol>
<h3>ウェブページでシミュレートする場合</h3>
<ol><li>ページ全体でどのくらい画像が軽量化されるか</li><li>ページ全体で、画像のファイルサイズがどのくらいあるか</li><li>ページ全体で、画像の拡張子ごとにどのくらいのファイルサイズがあるか</li><li>ページで表示されている画像が、それぞれどのくらい軽くなるか</li></ol>
<p> </p>
<h2>使い方(画像単体を計測)</h2>
<p>1. 以下のページにアクセスします。</p>
<ul><li><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator β版</a></li></ul>
<p><img alt="2018-03-26-lf-simulator01.jpg" src="https://blog.ideamans.com/images/2018-03-26-lf-simulator01.jpg" width="1280" height="578" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>2. 計測したい画像を、赤枠のところにドラッグ・アンド・ドロップします。なお、最大で10枚を計測できます。</p>
<p><img alt="2018-03-26-lf-simulator02.jpg" src="https://blog.ideamans.com/images/2018-03-26-lf-simulator02.jpg" width="1280" height="578" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>3. プログレスバーが伸びきるまで待ちます。枚数が多いと時間がかかるので、のんびり待ちましょう。</p>
<p><img alt="2018-03-26-lf-simulator05.jpg" src="https://blog.ideamans.com/images/2018-03-26-lf-simulator05.jpg" width="1280" height="998" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>4. 処理が終わると、各画像の処理結果が表示されます。<strong>一番左がアップロードしたファイル、そこから右側に"標準処理"、"容量優先処理"、"画質優先処理"と並びます。</strong><span style="color: #99cc00;">一番左が未処理の状態、右側の方がファイルサイズが少なくなっていればWebパフォーマンスを改善することができます。</span></p>
<p> </p>
<h2>使い方(ウェブページを計測)</h2>
<p>1. 以下のページにアクセスします。</p>
<ul><li><a href="https://simulator.lightfile.net/" target="_blank">LightFile Simulator β版</a></li></ul>
<p><img alt="2018-03-26-lf-simulator11.jpg" src="https://blog.ideamans.com/images/2018-03-26-lf-simulator11.jpg" width="1280" height="729" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>2. 計測したいページのURLを入力します。複数のURLを計測する場合は、改行で区切ります。<strong>URLが多いと処理が遅いので、１〜２個くらいをオススメします</strong>。</p>
<p>3. ユーザーエージェントを選びます。スマートフォンかPCブラウザから選ぶことができます。今はスマートフォンの方が普及しているので、スマートフォンを選んでみましょう。</p>
<p>4. 処理結果を受け取るメールアドレスを入力します。</p>
<p><img alt="2018-03-26-lf-simulator12.jpg" src="https://blog.ideamans.com/images/2018-03-26-lf-simulator12.jpg" width="1280" height="729" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>5. 「シミュレーション開始」ボタンをクリックして、プログレスバーが伸び切るまで待ちます。複数URLを入力した場合、処理に時間がかかるので気長に待ちましょう。</p>
<p><img alt="2018-03-26-lf-simulator13.jpg" src="https://blog.ideamans.com/images/2018-03-26-lf-simulator13.jpg" width="1280" height="729" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">6. 処理が終わると、ウェブページで利用されている画像の処理結果がレポートされます。<strong>一番左がアップロードした画像、そこから右側に"標準処理"、"容量優先処理"、"画質優先処理"と並びます。</strong></p>
<p>7. ページ全体のダウンロードデータ量を確認しましょう。<span style="color: #99cc00;">一番左が未処理の状態、右側の方がダウンロードデータ量が少なくなっていればWebパフォーマンスを改善することができます。</span></p>
<p><img alt="2018-03-26-lf-simulator14.jpg" src="https://blog.ideamans.com/images/2018-03-26-lf-simulator14.jpg" width="1280" height="729" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<p>8. ページ表示に必要なデータのうち、どのぐらい画像が割合を占めているのか確認しましょう。その右側には、<strong>画像ファイルの拡張子ごとにどのぐらいのファイルサイズなのかも確認できます。</strong><span style="color: #99cc00;">PNGが多い場合は、透過していないPNG画像はJPGにするだけでも、かなりのファイルサイズ軽量化ができます。</span></p>
<p><img alt="2018-03-26-lf-simulator15.jpg" src="https://blog.ideamans.com/images/2018-03-26-lf-simulator15.jpg" width="1280" height="875" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">9. ページで利用されている各画像が、全体でどのくらい軽量化されるのか確認しましょう。また、各画像がどのぐらい画像軽量化されるのかも確認することができます。<strong>クリックするとそれぞれの処理画像を直接見ることができます。</strong></p>
<p> </p>
<h2>最後に</h2>
<p>まだまだテスト公開中のβ版ですので、動作が不安定です。1時間待ってもうんともすんとも進まない場合は、以下のページからお問い合せをお願いいたします。</p>
<ul><li><a href="https://core.lightfile.net/contents/web-developer.html" target="_blank">https://core.lightfile.net/contents/web-developer.html</a></li></ul>
<p>それではまた！</p>
<p> </p>

