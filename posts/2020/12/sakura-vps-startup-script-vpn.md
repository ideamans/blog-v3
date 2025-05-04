---
# Astrowind
title: 'さくらのVPSで黒い画面を使わずあっという間に自分専用VPNを立ち上げ固定IPを手に入れる方法'
excerpt: '在宅ワークでも固定IPがほしい！ 在宅ワークをはじめ、出社しない働き方が当たり前...'
updateDate: 2020-12-18
publishedDate: 2020-12-18
tags: 
  - tech

author: miyanaga
image: https://blog.ideamans.com/assets/ogp-sakura.jpg
category: tech

# カスタム
updatedAt: 2020-12-18 13:00:24
publishedAt: 2020-12-18 12:42:22
categories: 
  - tech

categoryLabels: 
  - 技術系小ネタ

authorId: miyanaga
subTheme: bs4
recommended: false
---

## 在宅ワークでも固定IPがほしい！

在宅ワークをはじめ、**出社しない働き方**が当たり前になりましたが、**固定IPアドレスが必要な作業だけは出社している**という方もいたりするのではないでしょうか。

IPv6プラスの普及で、自宅で固定IPを持つのは時代に逆行する向きになりました。外出先でも決まった固定IPとして接続できれば安心できる場面も多いはず。

そこで、<a href="https://vps.sakura.ad.jp/">さくらのVPS（仮想専用サーバー）</a>の**スタートアップスクリプト機能を使って、自宅や外出先でも固定IPを持つための自分専用VPNサーバー**をあっという間に、しかも**黒い画面(ターミナルコンソール)を使うことなく！**手に入れる方法を紹介します。

最も安いプランのVPS(1ヶ月585円〜)でも十分に使えます。

最近はVPN専用サービスも増えていますが、あえて自分だけサーバー用のネットワークをVPNに使うことで、安全で時間帯などの渋滞に巻き込まれない快適な通信が手に入る...かもしれません。


## 自分専用VPNサーバー スタートアップスクリプト

スタートアップスクリプトは、サーバーの起動と同時に選択したスクリプトを実行する機能です。

自分専用VPNサーバーを起動するスクリプトを公開しました。

<a href="https://secure.sakura.ad.jp/vps/?_ga=2.193466670.2094236495.1608252090-1380303535.1607147023#/startupscripts/d16fcaf0-ff83-4613-8067-e1e0e010021c">自分専用VPNサーバー (L2TP over IPSec)</a> ※ さくらVPSのログインアカウントが必要です

## セットアップ

さくらのVPSを契約し、コントロールパネルにログインします。

`各種設定`→`OSインストール`を選択します。

<img alt="vps1.png" src="https://blog.ideamans.com/assets/vps1.png" width="997" class="img-fluid" />

OSは`CentOS 8`を選択し、管理ユーザーのパスワードを入力します。

続いてスタートアップスクリプト`自分専用VPNサーバー (L2TP over IPSec)`を選択し、`事前共有キー/共有シークレット/PSK`、`ユーザー名/アカウント名`、`パスワード`を入力します。

<img alt="vps2.png" src="https://blog.ideamans.com/assets/vps2.png" width="568" class="img-fluid" />

ポピュラーなVPNプロトコル`L2TP over IPSec`は、わかりやすく言うと二段構えのパスワードを必要とします。`事前共有キー/共有シークレット/PSK`がその**第2パスワードみたいなもの**です。パスワード同様、できるだけ長く推測されにくいテキストを指定してください。

`設定内容を確認する`ボタンを押して`インストールを実行する`と操作を進めます。

## 10分くらい待つ

大体10分くらい待てばセットアップが完了します。

## Windowsから接続

ネットワークとインターネットの設定から、VPNを追加します。

<img alt="windows1.png" src="https://blog.ideamans.com/assets/windows1.png" width="736" class="img-fluid" />

VPSのIPアドレス、事前共有キー、ユーザ名、パスワードを入力します。

<img alt="windows2.png" src="https://blog.ideamans.com/assets/windows2.png" width="370" class="img-fluid" />

以上でVPN接続を作成できました。実際に接続できるか試してみてください。

## Macから接続

Macでは、`システム環境設定` - `ネットワーク`でVPN接続を追加します。`VPNタイプ`は`L2TP over IPSec`を選択してください。

<img alt="mac1.png" src="https://blog.ideamans.com/assets/mac1.png" width="428" class="img-fluid" />

サーバーアドレスに契約したVPSのIPアドレスを入力し、アカウント名を入力します。

<img alt="mac2.png" src="https://blog.ideamans.com/assets/mac2.png" width="458" class="img-fluid" />

続けて`認証設定`を開きます。

パスワードと共有シークレットを入力します。

<img alt="mac3.png" src="https://blog.ideamans.com/assets/mac3.png" width="380" class="img-fluid" />

以上で設定完了です。VPNに接続できるか試してみてください。

## より安全に使うには

こんな感じでVPSに`UDP/500`、`TCP/1701`、`UDP/4500`ポートだけ許可するパケットフィルタを設定してください。

<img alt="packet-filter.png" src="https://blog.ideamans.com/assets/packet-filter.png" width="632" class="img-fluid" />

## 元ネタとさくらのVPS 10周年キャンペーン

2年前、Qiitaにこんな記事を書きまして、

[高速VPNを最速3分でスタート ConoHaで月額630円 \- Qiita](https://qiita.com/miyanaga/items/590b25596d8a716e7e68)

ConoHaでの似たような方法を紹介しました。

今回、**さくらのVPS 10周年(おめでとうございます！)企画で「自作スタートアップスクリプトを公開してみよう」キャンペーン**を展開されていたので、参加がてら移植したというわけです。

[さくらのVPS 10周年記念キャンペーン！｜さくらインターネット](https://vps.sakura.ad.jp/lp/202012/)

けっこう便利だと思うのでニンテンドープリペイドカード当たるといいな！

最後になりますが、SoftEther VPNおよび、使いやすいDockerイメージの提供者 `siomiz`氏に感謝します。

[siomiz/softethervpn \- Docker Hub](https://hub.docker.com/r/siomiz/softethervpn/)