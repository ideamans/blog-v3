---
# Astrowind
title: 'Core Web Vitalsの推移をひと目でチェック！ Googleデータポータル無料レポートを公開'
excerpt: 'Core Web Vitalsの推移が見たい！ 2021年からGoogleの検索...'
updateDate: 2020-10-04
publishedDate: 2020-10-04
tags: 
  - core-web-vitals

author: miyanaga
image: https://blog.ideamans.com/assets/web-vitals-history.png
category: core-web-vitals

# カスタム
updatedAt: 2020-10-04 04:33:39
publishedAt: 2020-10-04 04:12:00
categories: 
  - core-web-vitals

categoryLabels: 
  - Core Web Vitals

authorId: miyanaga
subTheme: bs4
recommended: false
---

## Core Web Vitalsの推移が見たい

[2021年からGoogleの検索順位に影響する](https://webtan.impress.co.jp/e/2020/06/05/36210)と言われている [Core Web Vitals](https://developers-jp.googleblog.com/2020/05/web-vitals.html) は、実際に測定されたユーザーにとっての軽快さとSEOという、**実利を兼ね備えた指標**として注目に値します。

しかし改善に取り組もうとしたとき、**時系列での変化を確認できるレポートツールがない**ことが不満でした。以前、[Google謹製のレポート](https://blog.ideamans.com/2020/06/core-web-vitals-datastudio-reporting.html)を紹介しましたが、各指標の時系列でひと目で見ることはできません。

そこでCore Web Vitalsのデータソースである[Chrome UX Report](https://developers.google.com/web/tools/chrome-user-experience-report)を用いたGoogleデータポータルのレポートを作ってみました。**好きなドメインのCore Web Vitals + おまけ指標の推移が1ページ**でわかります。

<img alt="web-vitals-history.png" src="https://blog.ideamans.com/assets_c/2020/10/web-vitals-history-thumb-1000xauto-1268.png" width="1000" height="596" class="img-fluid img-thumbnail" />

## 使い方

次のURLを開いてください。

<a href="https://datastudio.google.com/reporting/ee83568a-58f6-4f3e-b9e9-61313e8c798b" class="btn btn-primary btn-lg">Web Vital History v1 を開く</a>

とりあえず[このブログ](https://blog.ideamans.com/)のデータが表示されます。

対象サイトを変更するには、レポート右上の`Enter origin URL:`にドメインを入力して`Enterキー`を押します。

<img alt="switch-domain.png" src="https://blog.ideamans.com/assets_c/2020/10/switch-domain-thumb-900xauto-1270.png" width="900" height="242" class="img-fluid img-thumbnail">

データの更新に数秒〜十数秒かかります。Chrome UX Reportはパブリックデータなので、自社のデータでなくても表示できます。ただし、十分なサンプルデータがないサイト(アクセスが少ないサイト)については表示されないことがあります。

例えば[トヨタ自動車](https://toyota.jp)を例にするとこんな感じです。

<img alt="web-vitals-history-toyota.png" src="https://blog.ideamans.com/assets_c/2020/10/web-vitals-history-toyota-thumb-1000xauto-1272.png" width="1000" height="664" class="img-fluid img-thumbnail">

<div class="alert alert-warning">
<p>Chrome UX Reportのアーカイブデータは、ドメイン単位に集約されています。なので <code>https://www.ideamans.com/lighthouse/</code> といったパス付きのURLは閲覧できません。 <code>https://www.ideamans.com</code> とドメインまでを入力してください。</p>
</div>

直近約1ヶ月のデータは [Chrome UX Report API](https://developers.google.com/web/tools/chrome-user-experience-report/api/reference) や [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=JA) のフィールドデータとして確認できます。

### 期間とデバイスの絞り込み

右上のプルダウンで対象期間とデバイスを変更できます。

<img alt="terms-and-device.png" src="https://blog.ideamans.com/assets_c/2020/10/terms-and-device-thumb-900xauto-1274.png" width="900" height="242" class="img-fluid img-thumbnail">

## このテンプレートを販売します

以上、対象ドメインの変更と条件の絞り込みまでは無料でご利用いただけますが、**カスタマイズしてビジネスに活かしたい企業向けにコピーを販売**したいと思います。

* 複製レポートを作成してフルアクセス権限を付与します。
* 著作権表示などは不要です。自社の独自レポートとしてお客さんへの説明、提案、再販などにお使いいただけます。
* Core Web Vitals、Googleデータポータルなどの使い方の質問にはメール、MTGなど手段を問わずお答えできません。
* 本レポートの仕様についても質問には回答できません(編集ビューで開けばすべて分かります)。
* カスタマイズなど変更作業は行いません。
* レポートは今後変更する可能性がありますが、バージョンアップのサポートも行いません。

上記ご理解の上、それでもご興味のある方は記事末尾の問い合わせフォームからご連絡ください！
