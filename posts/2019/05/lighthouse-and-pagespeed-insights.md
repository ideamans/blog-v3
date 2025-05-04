---
# Astrowind
title: 'PageSpeed InsightsとLighthouse。よく似てるツールの違いを比較表でチェック！'
excerpt: 'さくらインターネットさんのさくらのナレッジで、GoogleによるWebサイトパフ...'
updateDate: 2020-06-18
publishedDate: 2019-05-09
tags: 
  - lighthouse

  - pagespeed-insights

author: miyanaga
image: https://blog.ideamans.com/assets/lighthouse-psi-compage.png
category: pagespeed-insights

# カスタム
updatedAt: 2020-06-18 06:24:46
publishedAt: 2019-05-09 11:15:09
categories: 
  - lighthouse

  - pagespeed-insights

categoryLabels: 
  - Lighthouse

  - PageSpeed Insights

authorId: miyanaga
subTheme: 
recommended: false
---

さくらインターネットさんの[さくらのナレッジ](https://knowledge.sakura.ad.jp/)で、[GoogleによるWebサイトパフォーマンス測定ツール「Lighthouse」入門](https://knowledge.sakura.ad.jp/21477/)という記事が公開されています。すでにご覧の方も多いと思います。

入門といいつつものすごい情報量で、Lighthouse(とPageSpeed Insights)が生成するレポートの読み方が丸わかりです！

<a href="https://knowledge.sakura.ad.jp/21477/"><img alt="sakura-lighthouse.png" src="https://blog.ideamans.com/assets_c/2019/05/1355c5d272d8f09b110177b8752409bf36b59c21-thumb-480xauto-1015.png" width="480" height="270" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" /></a>

ところで、この[Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=ja)と[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=ja)はよく似たツールなので、混乱されている方もいるかと思います。

違いや共通点を比較表にまとめてみました。

## LighthouseとPageSpeed Insightsの比較表

<table border="1" cellpadding="5" cellspacing="0" class="tablestyle">
	<tr>
		<th width="20%">比較項目</th>
		<th width="20%">Lighthouse</th>
		<th width="20%">PageSpeed Insights</th>
		<th width="40%">コメント</th>
	</tr>
	<tr>
		<th>目的</th>
		<td>Webページの外形技術監査</td>
		<td>Webページの外形技術監査</td>
		<td>どちらも一般ユーザーの立場(ブラウザ)からWebページの機能と性能を技術的な側面で監査します。<strong>内部あるいはコンテンツについては対象外</strong>です。</td>
	</tr>
	<tr>
		<th>回数や頻度</th>
		<td>1ページ1回ずつ</td>
		<td>1ページ1回ずつ</td>
		<td>どちらも指定URLの1ページについてワンショットの監査を実行します。複数URLの監査や定期実行は単独でできません。</td>
	</tr>
	<tr>
		<th>監査カテゴリ</th>
		<td>パフォーマンス・アクセシビリティ・ベストプラクティス・SEO・PWA(選択可)</td>
		<td>パフォーマンスのみ</td>
		<td>ひと言にいってLighthouseの方が高機能です。</td>
	</tr>
	<tr>
		<th>実行環境</th>
		<td>クライアントPC</td>
		<td>Googleが用意するサーバー</td>
		<td>Lighthouseは自分の環境で動作しますが、PageSpeed InsightsはWebサービスです。</td>
	</tr>
	<tr>
		<th>利用方法</th>
		<td>Chrome DevToolsのAudit・<a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ja">Chrome機能拡張</a>・<a href="https://www.npmjs.com/package/lighthouse">CLIコマンド</a></td>
		<td><a href="https://developers.google.com/speed/pagespeed/insights/?hl=ja">Webページ</a>・<a href="https://developers.google.com/speed/docs/insights/v5/get-started">API</a></td>
		<td>実行環境が違うのでエンドポイントがかなり違います。</td>
	</tr>
	<tr>
		<th>HTMLレポート出力</th>
		<td>〇</td>
		<td>〇 (Webページ)</td>
		<td>どちらも人間にとって見やすいHTMLレポートを出力できます。</td>
	</tr>
	<tr>
		<th>JSONレポート出力</th>
		<td>〇 (CLIコマンドのみ)</td>
		<td>〇 (API)</td>
		<td>どちらもプログラムで集計などの処理をしやすいJSONレポートを出力できます。</td>
	</tr>
	<tr>
		<th>日本語翻訳</th>
		<td>×</td>
		<td>〇</td>
		<td>今のところLighthouseのリポジトリに日本語辞書はないようです。PageSpeed InsightsはAPIでも locale=ja を指定すると日本語翻訳されます。</td>
	</tr>
	<tr>
		<th>利用制限</th>
		<td>なし</td>
		<td>APIは1日25,000回まで</td>
		<td>Lighthouseは自分のPCやサーバーで実行するので制限がありません。WebページからのPageSpeed Insightsの利用制限は不明です。</td>
	</tr>
	<tr>
		<th>細かな設定変更</th>
		<td>CLIで可能</td>
		<td>不可</td>
		<td>LighthouseのCLIコマンドには多数のオプションがあります。</td>
	</tr>
	<tr>
		<th>アクセス制限のあるページ</th>
		<td>対応可</td>
		<td>不可</td>
		<td>PageSpeed Insightsは誰からでもアクセスできるページでないと監査できません。</td>
	</tr>
	<tr>
		<th>安定性</th>
		<td>実行環境に依存</td>
		<td>高い</td>
		<td>Lighthouseは自前の環境で実行するので特にットワークの速度によって点数が前後します。PageSpeed Insightsの方が安定しています。</td>
	</tr>
</table>

## PageSpeed Insights = Lighthouseのパフォーマンスだけ切り出したWebサービス

先月行った調査では、[LighthouseのパフォーマンスカテゴリとPageSpeed Insightsの監査内容や点数のロジックに違いはありません](https://qiita.com/miyanaga/items/d38124cdd64a1999fed9)でした。

昨年11月からPageSpeed Insightsの内部でLighthouseを使用することになりましたが、わりとストレートに組み込んでいてPageSpeed Insightsの独自要素はないようです。

したがって、PageSpeed Insights = Lighthouseのパフォーマンス、と理解して問題ないかと思います。

## パフォーマンス計測だけならPageSpeed Insightsを

パフォーマンス計測のみならPageSpeed Insightsを使いましょう。点数や指標の誤差を抑えられます。

PageSpeed Insightsでも、計測されるサイト側のサーバーやネットワークの一時的な性能で点数が前後しますが、Lighthouseはさらにクライアント環境の要因が加わります。

PageSpeed InsightsはGoogleが用意した強力なネットワークと安定したサーバーで実行されるのでLighthouseより信頼できます。

それ以外のカテゴリ(アクセシビリティなど)は性能にほとんど関係ありません。

## 自動化はどちらも実現しやすい

こういった監査ツールは、複数のページに定期的に実行したいものです。

LighthouseはCLIコマンド、PageSpeed InsightsはシンプルなWeb APIでプログラムでの自動化が容易です。

本格的に[SpeedCurve](https://speedcurve.com/)や[Calibre](https://calibreapp.com/)などの外部サービスを利用するまでちょっとした定期監査ツールを開発してみるのもありです。