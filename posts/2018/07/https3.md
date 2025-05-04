---
# Astrowind
title: '無料または数百円でSSL/TLS証明書を手に入れてサイトをSSL化する3つ方法'
excerpt: 'あなたのサイトはもうSSL化・HTTPS化が済んでいますか？ 無料または年数百円...'
updateDate: 2018-07-09
publishedDate: 2018-07-09
tags: 
  - lighthouse

author: miyanaga
image: https://blog.ideamans.com/assets/lock.jpg
category: lighthouse

# カスタム
updatedAt: 2018-07-09 17:30:37
publishedAt: 2018-07-09 15:29:00
categories: 
  - lighthouse

categoryLabels: 
  - Lighthouse

authorId: miyanaga
subTheme: 
recommended: false
---

<p>あなたのサイトはもうSSL化・HTTPS化が済んでいますか？</p>
<p>無料または年数百円という低コストでSSL化を実現する3つの方法を紹介します。</p>
<ul><li>AWS Certicate Manager</li><li>Let's Encrypt</li><li>年間数百円の格安SSL/TLS証明書</li></ul>
<h2>必須になりつつあるSSL化</h2>
<p>以前はSSL化(HTTPS化・通信の暗号化)が必要なのは「ユーザーの情報をフォームで送信する場合」とされていましたが、ここ数年<span style="text-decoration: underline;"><strong>「すべてのサイトが全体をSSL化すべし！」</strong></span>というAOSSLの運気がどんどん高まっています。</p>
<p>以前からSEOにも影響すると言われてきましたが、Google Chromeは2018年7月のバージョンアップから、<span style="text-decoration: underline;"><strong>SSL化されていないサイトを閲覧しているときアドレスバーに「保護されていない通信」「保護されていません」と本格的に表示</strong></span>するようになりました。</p>
<p><a href="https://ssl.sakura.ad.jp/column/https-not-valid3/" title="Chromeの強制的な警告表示が2018年7月から開始">Chromeの強制的な警告表示が2018年7月から開始</a></p>
<p><span style="text-decoration: underline;"><strong>PWA(Progressive Web App)対応でもSSL化が大前提</strong></span>となっています。本ブログで度々紹介しているWebサイトの監査を行う<a href="https://developers.google.com/web/tools/lighthouse/?hl=ja">Lighthouse</a>も、SSL対応は重要な採点項目のひとつです。</p>
<h2>SSL化を求める理由</h2>
<p>誰でも見ることのできるコンテンツを配信しているだけなのに、なぜそこまで神経質になるのでしょうか。</p>
<p>理由のひとつにCookieの保護があります。</p>
<p>Cookieによる閲覧者の識別は、目に見えないところでますます活用が進んでいますが、<span style="text-decoration: underline;"><strong>SSL化されていないサイトではCookieが平文で通信</strong></span>されてしまいます。</p>
<p>SSL化された領域とそうでない領域が混在するサイトが最も危険で、せっかく暗号化された通信で開始されたセッションが、その識別情報を暗号化されていない通信で乗っ取られることも起こりやすくなります。</p>
<p>理想を言えば企業の実存も証明するOVタイプやEVタイプの証明書が欲しいところですが、もちろん高価でもあります。そこまで予算をかけられないサイトもあるでしょう。</p>
<p>今日はサイトシールのないDVタイプの証明書ですが、無料または年数百円という低コストでSSL化を実現する方法を紹介します。</p>

<h2>AWS Certificate Manager (ACM)</h2>
<p>クラウドコンピューティングで世界をリードし続けるAmazonが2016年1月、ついにAWS上でのSSL/TLS証明書利用を無償にしました。</p>
<p><a href="https://aws.amazon.com/jp/certificate-manager/">AWS Certificate Manager</a></p>
<p>具体的な使い方は多くのブログなどで紹介されているため割愛しますが、簡単な特徴は以下の通りです。</p>
<p>メリット</p>
<ul><li>取得も更新も無料</li><li>ドメイン認証はドメイン管理者へのメール送信またはDNSへの特定レコード登録でスピーディーに実現</li><li>更新が自動で行われるので楽ちん(ワイルドカードSSLの場合は年に1回メールで更新の確認が来ます)</li></ul>
<p>デメリットや制約</p>
<ul><li>AWS上の特定サービスでしか使えない(ELB/ALB、CloudFront、API Gatewayなど。EC2単体での利用は不可)</li><li>秘密鍵と証明書をエクスポートして自分のサーバで使うことはもちろん不可</li></ul>
<p>証明書取得というよりはレンタル(ただしAWSのゲートウェイタイプのサービスに限る)という言い方の方が</p>
<p>このブログも<a href="https://www.sixapart.jp/movabletype/aws/">Movable Type for AWS</a>で運用していますが、ACMで証明書をレンタルしたCloudFrontを経由してご覧いただいており、無料でSSL化を実現しています。</p>
<h2>Let's Encrypt</h2>
<p>奇しくもACM登場の3ヶ月後、2016年4月に任意のサーバでのSSL/TLS証明書の取得を無償化するLet's Encryptがサービスインしました。</p>
<p>メリット</p>
<ul><li>Webサーバー上でコマンドを実行するだけでSSL/TLS証明書が取得できる</li><li>ApacheとnginxであればWebサーバの設定まで自動で行ってくれる</li><li>cronで定期的にコマンドを実行すれば証明書の更新も自動で行ってくれる</li></ul>
<p>デメリットや制約</p>
<ul><li>UNIXのサーバー管理スキルとroot権限が必要</li><li>シェルコマンドの実行やroot権限が必要なのでマネージド型のレンタルサーバでは利用不可</li><li>証明書の有効期間が90日間と短い(プログラムによる自動更新を前提としている)</li></ul>
<p>こちらも従来のSSL/TLS証明書設定のプロセスを考えると魔法のようなサービスですが、エンジニアでなければ使い方を見て目眩を覚えることでしょう...</p>
<p><a href="https://letsencrypt.jp/usage/">Let's Encryptの使い方</a></p>
<h2>格安SSLリセラー</h2>
<p>上記の無料証明書を利用できない場合も、1年あたり数ドル(数百円〜千円強)のコストでSSL証明書を取得することができます。個人的に使うことが多いのは次のサイトです。</p>
<p><a href="https://www.ssl-store.jp/">SSLストア</a></p>
<p><a href="https://www.gogetssl.com/">GoGetSSL</a></p>
<p>数年前に調べたときに価格が安く、実際に利用してみてレスポンスもよかったことが理由ですが、Comodoなどの格安証明書の再販サイトは他にも多数あります。お気に入りのサイトを探してみてください！</p>
<p>メリット</p>
<ul><li>マネージド型のレンタルサーバやCDNで自由に使うことができる</li><li>コストが安い</li><li>大抵の場合、CSR申請から数十分でSSL/TLS証明書の取得が完了する</li></ul>
<p>デメリット</p>
<ul><li>数ドルのSSL/TLS証明書には組織の実存証明やサイトシールがない</li><li>秘密鍵やCSRの生成は自分でしなくてはならない</li><li>Webサーバへの設置は自分でしなくてはならない</li><li>年に1回更新が必要(数年分まとめて購入することも可能)</li></ul>
<p>SSL/TLS証明書取得の最初のステップである秘密鍵とCSRの生成も、初心者やエンジニア以外の人が行うにはハードルが高いものです。</p>
<p>最近はその作業をWeb上のフォームで簡単に行うためのツールも登場しています。</p>
<p><a href="https://www.gogetssl.com/online-csr-generator/">Online CSR Generator (GoGetSSL)</a></p>
<p><a href="https://csrgenerator.com/">CSR Generator</a></p>
<p>とっても便利ですが、暗号化されているとはいえ秘密鍵をWeb経由ダウンロードすることになります。ご利用は自己責任で！</p>