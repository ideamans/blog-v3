---
# Astrowind
title: '実録Lighthouseのスコア改善〜Accessibility編'
excerpt: 'アイデアマンズでは画像のalt属性、リンクのname属性、コントラスト比の修正を...'
updateDate: 2018-06-22
publishedDate: 2018-06-22
tags: 
  - lighthouse

author: miyanaga
image: https://blog.ideamans.com/assets/accessibility-score.png
category: lighthouse

# カスタム
updatedAt: 2018-06-22 14:15:46
publishedAt: 2018-06-22 14:00:00
categories: 
  - lighthouse

categoryLabels: 
  - Lighthouse

authorId: miyanaga
subTheme: 
recommended: false
---

<ul><li>アイデアマンズでは画像のalt属性、リンクのname属性、コントラスト比の修正を行ったら100点にアップ</li><li>Lighthouseは表面的な試験のみ。100点でもアクセシビリティ対応が十分とは言えない</li><li>目視しにくいチェックを短時間で自動で実行するのは便利。はじめの一歩の取り組みや、ケアレスミスの防止にはおすすめ</li></ul>
<h2>Accessibilityスコア改善の取り組み</h2>
<p>アイデアマンズのコーポレートサイトで、Lighthouseのスコア改善の取り組みを行いました。</p>
<p>Lighthouseの採点カテゴリ5つのうち、Accessibility(アクセシビリティ)のスコア改善について、行ったこととその成果などをご紹介します。</p>
<p><img alt="accessibility-score.png" src="https://blog.ideamans.com/assets/accessibility-score.png" width="844" height="316" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h2>はじめに</h2>
<p>Webアクセシビリティはとても奥が深く、<span style="text-decoration: underline;"><strong>Lighthouseが監査する項目は機械的で表面的なものだけ</strong></span>です。十分な整備には長期的な取り組みが必要でしょう。</p>
<p>実際にアイデアマンズのWebサイトでは恥ずかしながらWebアクセシビリティに特別に考慮したことがなく、それでも<span style="text-decoration: underline;"><strong>拍子抜けするほどわずかな作業で100点に改善</strong></span>できました。そのことを前提に、Lighthouseの試験項目や対策について紹介します。</p>
<h2>指摘をうけた内容</h2>
<p>弊社アイデアマンズのWebサイトにLighthouseを実行した結果、Accessibility(アクセシビリティ)の監査項目で次の指摘がありました。</p>
<ul><li>alt属性がない画像やname属性のないa要素がある</li><li>コントラスト比の小さな文字がある</li></ul>
<p> </p>

<h2>画像のalt属性やa要素のname属性</h2>
<p>画像のalt属性は忘れず付けることはもはやコーディングの常識となっています。これは単なるケアレスミスです。</p>
<p>a要素のname属性は、不足を全てが指摘されたわけではありません。例えばa要素が内部にテキストを含む場合、指摘の対象となりませんでした。また、a要素が画像のみを含む場合は、画像がalt属性を持つ場合はこれも対象外となりました。</p>
<p>つまり、<span style="text-decoration: underline;"><strong>a要素はあるけど何へのリンクなのか、視覚以外の情報がない要素を指摘</strong></span>しているようです。</p>
<h2>コントラスト比の小さな文字</h2>
<p>日本人男性の約5%もが先天的色覚異常を持つと言われています(女性は0.2%。<a href="https://ja.wikipedia.org/wiki/%E8%89%B2%E8%A6%9A%E7%95%B0%E5%B8%B8" title="色覚異常">Wikipedia - 色覚異常</a>調べ)。一般的に視力も年齢とともに衰えていきます。</p>
<p>デザイン上、淡いコントラストが使われることや、色に強い意味を持たせること(赤は値引きやセールなど)は珍しくありませんが、ユーザーによっては意匠以前に何が書いてあるか分からない、誤認しやすいということが起こりえます。日差しの強い屋外で液晶ディスプレイが見にくくなる経験は誰もがお持ちでしょう。</p>
<p>こういった様々なユーザーや、利用環境に広く対応するため、<a href="https://waic.jp/docs/WCAG20/Overview.html" title="WCAG">WCAG</a>で以下のようにコントラストのガイドラインが定められています。</p>
<p><a href="https://waic.jp/docs/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">WCAG 2.0 解説書 コントラスト(最低限)</a></p>
<p><span style="text-decoration: underline;"><strong>LighthouseはレベルAAに対する要件を満たしていないコントラスト比を指摘</strong></span>するようです。</p>
<p>なお、ガイドラインでは「装飾など付随的な要素は要件から除く」とありますが、Lighthouseには見分けられないのですべて指摘されます。</p>
<p>例えばアイデアマンズでは次のような要素を修正し、指摘を消し込みました。「人気ランキング表示」の文字色が少し濃くなったのがわかりますでしょうか。</p>
<p><img alt="contrast.png" src="https://blog.ideamans.com/assets/contrast.png" width="900" height="358" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></p>
<h2>Chrome Developer Toolsによるコントラストチェック</h2>
<p>コントラスト比のチェックを支援するさまざまなツールがあります。</p>
<p><a href="http://bashalog.c-brains.jp/18/02/28-153729.php" title="色のアクセシビリティ対応で役に立ったツール">色のアクセシビリティ対応で役に立ったツール</a></p>
<p>自分はChromeのDeveloper Toolsにコントラスト比のチェック機能があったのでそれが重宝しました。</p>
<p>チェックしたい要素のStylesで、文字色を表すcolorプロパティのカラーチップをクリックすると表示されるカラーピッカーに、アクセシビリティ観点でのコントラスト比の判定結果が表示されます。</p>
<p>はじめは背景のグレーが少し明るかったのでNGとなっていましたが、</p>
<p><a href="https://blog.ideamans.com/assets/chrome-developer-ng.png"><img alt="chrome-developer-ng.png" src="https://blog.ideamans.com/assets_c/2018/06/chrome-developer-ng-thumb-autox442-616.png" width="340" height="442" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></a></p>
<p>背景色や文字色を調整するとOKになりました。</p>
<p><a href="https://blog.ideamans.com/assets/chrome-developer-ok.png"><img alt="chrome-developer-ok.png" src="https://blog.ideamans.com/assets_c/2018/06/chrome-developer-ok-thumb-autox428-615.png" width="320" height="428" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"></a></p>
<p>背景色を表すbackground-colorプロパティでは表示されません。背景が画像であることもあるからと推測しますが、こちらでも表示されると便利だなぁと思います。</p>
<p>このように指摘された要素のCSSをひとつずつ修正し、Accessibilityのスコアを改善しました。</p>
<h2><span>ご相談ください</span></h2>
<p>アイデアマンズではLighthouseを使ったレポート作成や競合調査、スコア改善のご相談を承っています。</p>