---
title: 画像最適化無料診断の使い方とレポートの読み方
excerpt: '画像最適化無料診断（LightFile Simulator）で通販サイトのトップページを実際に診断し、画像の重さ、WebPやLightFileで最適化したときの削減見込み、画質の見比べ方、社内共有用のスライドの出し方までを画面つきで紹介します。'
authorId: miyanaga
publishedAt: 2026-10-27 14:51:00
categories: ['lightfile', 'web-imaging', 'performance']
recommended: false
image: /images/2026/lightfile-simulator-howto/ogp.jpg
---

「うちのサイトの画像は重いのか」「最適化したら本当に軽くなるのか」を、社内に説明できる数字で確かめたいことがあります。

[画像最適化無料診断](https://simulator.lightfile.net/)（LightFile Simulator）は、ページのURLを入れるだけで、そのページの画像の重さと、最適化したときにどれだけ軽くなるかを診断する無料のツールです。登録もメールアドレスの入力もいりません。

この記事では弊社のダミーの通販サイト「L'Aube Avenue」のトップページを実際に診断し、レポートの読み方と、社内で共有するためのスライドの出し方までを紹介します。画面と数字は2026年10月に本番のツールで診断したときのものです。

---

## 診断でわかったこと

先に結果をまとめます。

| | 結果 |
|---|---|
| 診断にかかった時間 | 送信してから52秒 |
| 診断した画像 | 65枚・11.6 MB（ページ全体は12.7 MB） |
| 今の重さ | 5段階で「とても重い」 |
| WebPにしたら | -74.6%（2.94 MB） |
| LightFileで最適化したら | 標準画質で-56.3%（5.08 MB）。JPEG・PNGのまま |
| 共有 | レポートのURLと、7枚のスライド（印刷でPDF） |

このツールは MB・kB を1000単位で表示します。この記事も画面の表示のまま書いています。

題材の L'Aube Avenue（[dummy-ec-site.ideamans.com](https://dummy-ec-site.ideamans.com/)）は、商品写真・バナー・ブランドロゴなどを最適化せずにそのまま載せている想定のサイトです。

## 1. URLを入れて診断する

[simulator.lightfile.net](https://simulator.lightfile.net/) を開き、診断したいページのURL①を入れて、「今すぐ無料で診断する」②を押します。

![トップページ。URLの入力欄に1、「今すぐ無料で診断する」に2の印](/images/2026/lightfile-simulator-howto/top.webp)

## 2. 診断が終わるのを待つ

すぐにレポートの画面に移り、処理が進みます。ツールはスマートフォンのブラウザとしてページを開き、読み込まれた画像を1枚ずつ5通りの方法で作り直してサイズを測ります。

![処理中の画面。ページのタイトルとサムネイル、「Optimizing 65 images...」と進み具合のバー](/images/2026/lightfile-simulator-howto/processing.webp)

今回は送信してから52秒で終わりました。同じURLのまま、画面がレポートに切り替わります。

レポートは一覧などには公開されませんが、URLを知っている人は誰でも開けます。社内で共有するときは、このURLを送れば足ります。

## 3. 今の画像の重さを見る

レポートの最初に、今のページの状態が出ます。

- 画像配信効率①: 1メガピクセルあたり何kBで配信しているかを5段階で表したもの
- 次世代フォーマット採用率②: 画像のうちWebP・AVIFの割合

![画像配信効率と先進性。画像配信効率「とても重い・701.3kB/Mpx」に1、次世代フォーマット採用率0.0%に2の印](/images/2026/lightfile-simulator-howto/efficiency.webp)

L'Aube Avenue は「とても重い」で、WebP・AVIF は1枚も使っていませんでした。

5段階の基準は通販サイト約300社を調べた「[ECサイト画像白書2026](https://ec-image-2026.whitepapers.ideamans.com/image-fitness/distribution)」のデータに基づいています。

## 4. 最適化したらどれだけ軽くなるかを見る

その下に、最適化の見込みが出ます。診断した画像の枚数とサイズ①と、WebP・AVIFに変換した場合の削減率②です。

![画像全体の最適化の可能性。画像リクエスト65・画像トラフィック11.6 MBに1、WebP -74.6%・AVIF -82.5%に2の印。下に、現状703・WebP 178・AVIF 123を示す目盛り](/images/2026/lightfile-simulator-howto/potential-nextgen.webp)

| | 最適化後 | 削減率 | 5段階 |
|---|---:|---:|---|
| 今 | 11.6 MB | | とても重い |
| WebP | 2.94 MB | -74.6% | やや軽い |
| AVIF | 2.03 MB | -82.5% | やや軽い |

下の目盛りは今の位置と最適化したあとの位置を並べたものです。右へ行くほど重く、今の L'Aube Avenue は右端の「とても重い」にいます。

画像以外も含めたページ全体で、どのくらい減るかも出ます。CDNを使っているなら、転送量の削減の目安になります。

![主要ドメインのトラフィック削減量。dummy-ec-site.ideamans.com で WebP -74.0%・AVIF -81.8%。棒グラフで現状・WebP・AVIFを比較](/images/2026/lightfile-simulator-howto/domain.webp)

## 5. JPEG・PNGのまま軽くする場合を見る

WebPに切り替えられないサイトでも、JPEG・PNGのまま最適化できます。画面上のタブで「LightFile 最適化」①を選びます。

![上のタブ。「LightFile 最適化」に1の印](/images/2026/lightfile-simulator-howto/tabs.webp)

LightFile の3つの画質での見込み②に切り替わります。

![LightFile 最適化のタブ。LightFile 画質優先 -39.1%・標準画質 -56.3%・容量優先 -69.9%に2、目盛りの LightFile 標準画質 307に3の印](/images/2026/lightfile-simulator-howto/potential-lightfile.webp)

| | 最適化後 | 削減率 | 5段階 |
|---|---:|---:|---|
| LightFile 画質優先 | 7.07 MB | -39.1% | とても重い |
| LightFile 標準画質 | 5.08 MB | -56.3% | やや重い |
| LightFile 容量優先 | 3.5 MB | -69.9% | ふつう |

標準画質で半分以下になり、目盛り③では「とても重い」から「やや重い」に移ります。HTMLも画像の形式も変えずに済むので、いちばん手軽な改善です。

もう一つのタブ「LightFile + WebP」では、LightFile の標準画質と WebP を並べて比べられます。

## 6. 画質を確かめる

軽くなっても、見た目が悪くなっては困ります。レポートの下の「画質の確認」には削減率の大きい画像が並びます。1枚ごとに、今の画像と、最適化した画像のサイズ・削減率が出ます。画像④を押すと、大きく比べられます。

![画質の確認。ブランドロゴのPNG（269 kB）を LightFile の3つの画質で最適化した結果。標準画質の画像に4の印](/images/2026/lightfile-simulator-howto/quality.webp)

![大きく比べる画面。LightFile 標準画質、最適化前269 kB → 最適化後27.9 kB（-89.6%）。スライダーで前後を見比べる](/images/2026/lightfile-simulator-howto/quality-modal.webp)

中央のつまみを左右に動かすと、最適化の前と後を見比べられます。このロゴは269 kBが27.9 kBになりましたが、見た目の違いはわかりません。

## 7. スライドで共有する

レポートの上の「スライド」を押すと、レポートの内容が7枚のスライドになります。「印刷」⑤からA4横のPDFにでき、「次へ」⑥でページを送れます。

![スライドの表紙。「印刷」に5、「次へ」に6の印](/images/2026/lightfile-simulator-howto/slides.webp)

![3枚目のスライド「画像全体の最適化の可能性」。LightFile の3つの画質での削減率と目盛り](/images/2026/lightfile-simulator-howto/slide-potential.webp)

スライドの中身は上のタブで選んだ方式（次世代フォーマット・LightFile）で変わります。稟議や社内の説明に使うときは、実際に導入する方式のタブを選んでから印刷してください。

## 診断の範囲について

- 診断はスマートフォンの画面サイズで、ページを開いた直後に読み込まれた画像だけが対象です。スクロールして読み込まれる画像（遅延読み込み）は含まれません
- 対象は JPEG・PNG・GIF です。すでに WebP・AVIF・SVG の画像は、そのまま数えます
- 診断の履歴（「過去の診断一覧」）は、診断したブラウザでしか見られません

## 実際に最適化するには

診断で見込みがわかったら、次のような方法で実際に軽くできます。

- 手元の画像をまとめて試すなら、ZIPをアップロードするだけの [LightFile Self](https://self.lightfile.net/)（無料）
- サーバーの画像を定期的に最適化するなら、[LightFile Next](https://next.lightfile.net/) の LightFile Batch
- CloudFront で配信している画像を WebP にするなら、[LightFile Proxy](https://www.lightfile-proxy.net/)

まずは自社のサイトのURLで、[画像最適化無料診断](https://simulator.lightfile.net/)を試してみてください。
