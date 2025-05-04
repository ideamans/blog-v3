---
# Astrowind
title: 'もうSSL対応した？Chrome 68登場でかわる「ウェブサイト暗号化通信」の当たり前。バージョン70ではより警告色が強くなる。'
excerpt: 'ついにリリースされたChrome 68。暗号化されていないウェブサイトに「保護さ...'
updateDate: 2020-06-18
publishedDate: 2018-08-02
tags: 
  - lighthouse

author: nose
image: https://blog.ideamans.com/assets/2018-08-02-ga-browser-ogp01.jpg
category: lighthouse

# カスタム
updatedAt: 2020-06-18 06:35:51
publishedAt: 2018-08-02 09:00:00
categories: 
  - lighthouse

categoryLabels: 
  - Lighthouse

authorId: nose
subTheme: 
recommended: false
---

<p>ついにリリースされたChrome 68。暗号化されていないウェブサイトに「保護されていない通信」という表示がアドレスバーにでます。思ったよりもひっそりとした感じがありますが、Chrome 70では警告色の赤色になるので、いまはまだ猶予期間なのかもしれません。</p>
<h2>保護されていませんという表示</h2>
<p>もっとも注目されているのが、非SSLのウェブサイトに対する「保護されていない通信」という表示。どんな表示なのかというと、以下の表示となっています。４つのパターンを確認してみましょう。</p>
<h3>SSLが有効な場合と、SSLを利用していない場合の表示</h3>
<p><img alt="2018-08-02-chrome68-01.jpg" src="https://blog.ideamans.com/assets/2018-08-02-chrome68-01.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">今回のChrome 68で追加されたのは、下の「SSLを利用していない」場合の表示です。みた感じのインパクトはとても少ないですが、書いてある内容はなかなかインパクトがあります。</p>
<h3>SSLコンテンツと非SSLコンテンツが混ざっている場合、オレオレ証明書の場合</h3>
<p><img alt="2018-08-02-chrome68-02.jpg" src="https://blog.ideamans.com/assets/2018-08-02-chrome68-02.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">ここは特に変更がなさそうです。ミックスコンテンツの表示は、優しい感じの表示のままです。そして、もともとオレオレ証明書では「このウェブサイトは危ないよ！」というくらいの警告文が表示され、ワンクリックではウェブサイトがみられなくなっていたので、ここも変わりはありません。</p>
<p style="text-align: center;"><span style="color: #888888;"><img alt="2018-08-02-chrome68-05.jpg" src="https://blog.ideamans.com/assets/2018-08-02-chrome68-05.jpg" width="1280" height="623" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;">オレオレ証明書の場合の表示。意図しないサイトでこの表示が出たら、アクセスしないのが懸命。</span></p>
<h2>SSLはかんたんだが、システム構成が複雑な場合は注意が必要</h2>
<p>SSLを有効にする作業自体は、多くのウェブサイトが行っていることなので難しいものではありません。今は無償のLet's Encryptがあったり、非常に安い証明書も利用することができます。基本的には暗号化の強度が強ければ強いほうがよいとされています。公的機関や、銀行などでは、信頼されている証明書ということもありEV SSLを利用するケースが多いです。</p>
<p style="text-align: center;"><img alt="2018-08-02-chrome68-04.jpg" src="https://blog.ideamans.com/assets/2018-08-02-chrome68-04.jpg" width="1200" height="675" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;"><span style="color: #888888;">アドレスバーに企業名が表示されるEV SSLは、見た目も信頼度が非常に高い。</span></p>
<p>しかし、システム構成が複雑なサイトの場合、さまざまなドメインを組み合わせているケースや、基幹システムとの連携などで単純にSSL化することができないケースもあります。時間はかかりますが、システムの見直しをかけながら、一つ一つ対処していくことでSSL化がみえてくるでしょう。</p>
<h3>Chrome 70はどうなる？</h3>
<p>2018年10月にリリースが予定されているChrome 70は、HTTPページでフォームにデータを入力すると、アドレスバーの部分が赤く変更されます。これにより、ユーザーは警告を感じることができ、入力に違和感を覚えることができると思います。詳しくは、Googleのページをご覧ください。</p>
<ul><li><a href="https://blog.google/products/chrome/milestone-chrome-security-marking-http-not-secure/" target="_blank">A milestone for Chrome security: marking HTTP as "not secure" | CHROME</a></li><li><a href="https://webmaster-ja.googleblog.com/2018/07/marking-HTTP-as-not-secure.html" target="_blank">Google ウェブマスター向け公式ブログ: Chrome のセキュリティにとって大きな一歩: HTTP ページに「保護されていません」と表示されるようになります</a></li></ul>
<h2>最後に</h2>
<p>Chrome 68は、DevToolsのConsoleが機能アップしています。そして、Lighthouseもバージョンが3に上がっています（これはちょっと前から）。DevToolsは非常に利用しやすいものなので、新しいAuditsの見た目などもチェックしてみましょう。</p>
<p> </p>

