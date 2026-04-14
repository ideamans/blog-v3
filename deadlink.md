# リンク切れ一覧

2026/4/14調査

`posts/` 配下のMarkdown記事に含まれる外部URLをcurlで検証した結果、到達できなかったURLの一覧です。

- **検査対象**: `posts/**/*.md` 内の `http(s)://` URL（自ブログ `blog.ideamans.com` 自己参照と Facebook プラグインiframe、テンプレートプレースホルダは除外）
- **検証方法**: `curl -L -I --max-time 15`（HEADで不調のものはGETで再確認、接続失敗は1回リトライ）
- **除外ステータス**: `401 Unauthorized` / `403 Forbidden`（認証や制限により見えないだけの可能性が高いため）

**合計: 109件**

参照カラムは `ファイルパス:行番号` を記載しています。

## 404 Not Found

(57件) ページが存在しません。

| URL | 参照記事 |
|---|---|
| <https://developer.apple.com/documentation/safari-release-notes/safari-14-beta-release-notes> | `posts/2020/06/safari14-webp.md:30` |
| <https://developers.google.com/speed/pagespeed/service/faq#clientip> | `posts/2020/07/pagespeed-closed.md:42` |
| <https://example.com/article-1> | `posts/2026/03/ranklet4-new-features.md:51` |
| <https://example.com/article-2> | `posts/2026/03/ranklet4-new-features.md:59` |
| <https://github.com/ideamans/go-safe-backup> | `posts/2025/06/202506.md:81` |
| <https://goodpatch.com/blog/dynamic-identity/> | `posts/2018/09/ideamans-di.md:29` |
| <https://hatenablog-parts.com/embed?url=https%3A%2F%2Fwww.ideamans.com%2Fabout%2Falogorithm%2F> | `posts/2017/07/start.md:105` |
| <https://hatenablog-parts.com/embed?url=https%3A%2F%2Fwww.ideamans.com%2Fmt%2Fchangedraft%2Findex.html> | `posts/2017/08/opensource-mtplugin201708.md:40` |
| <https://imagemagick.org/script/index.php> | `posts/2017/12/jpeg-compare.md:36`<br>`posts/2017/12/photoshop-qualitycheck-100-80.md:50`<br>`posts/2017/12/photoshop-web-publish.md:44` |
| <https://itunes.apple.com/de/app/assetizr/id1449126727?l=en&amp;mt=12> | `posts/2019/01/assetizr.md:36` |
| <https://katharin.blog.fc2.com/> | `posts/2018/02/usercase01.md:38`<br>`posts/2018/02/usercase01.md:38` |
| <https://katharin.blog.fc2.com/blog-category-32.html> | `posts/2018/02/usercase01.md:42` |
| <https://katharin.blog.fc2.com/blog-entry-330.html> | `posts/2018/02/usercase01.md:42`<br>`posts/2018/02/usercase01.md:42` |
| <https://myami-clinic.jp/lp/wakiga/> | `posts/2019/10/case-myami-clinic.md:80` |
| <https://netafull.net/blog/052237.html> | `posts/2017/11/ranklet3.md:34`<br>`posts/2017/11/ranklet3.md:36`<br>`posts/2017/11/ranklet3.md:36` |
| <https://webmaster-ja.googleblog.com/2016/11/mobile-first-indexing.html> | `posts/2018/03/googlemfi.md:44` |
| <https://webmaster-ja.googleblog.com/2018/01/using-page-speed-in-mobile-search.html> | `posts/2019/08/casestudy-interg.md:94`<br>`posts/2018/03/googlemfi.md:48`<br>`posts/2018/11/speed-update-image-transfer.md:54`<br>`posts/2018/07/google-speed-update.md:56` |
| <https://webmaster-ja.googleblog.com/2018/03/rolling-out-mobile-first-indexing.html> | `posts/2018/03/googlemfi.md:42` |
| <https://webmaster-ja.googleblog.com/2018/07/marking-HTTP-as-not-secure.html> | `posts/2018/08/chrome68.md:42` |
| <https://webmaster-ja.googleblog.com/2018/11/pagespeed-insights-now-powered-by.html> | `posts/2018/12/psi-lighthouse.md:41` |
| <https://webmasters.googleblog.com/2019/11/search-console-speed-report.html?fbclid=IwAR0lWHaKNFvP3lmoqqSco2l7vbEjWgPf-sL6pDADA6AKZt1c1S9blPtfsYs> | `posts/2019/11/pagespeed-in-searchconsole.md:54` |
| <https://www.ideamans.com/_mautic/asset/3:jpgdietzip> | `posts/2017/10/jpgdiet.md:65` |
| <https://www.ideamans.com/_mautic/asset/7:lightfile-pr-20180402> | `posts/2018/04/pr-lightfile.md:74` |
| <https://www.ideamans.com/_mautic/form/34> | `posts/2019/10/taxmonkey.md:48`<br>`posts/2019/10/taxmonkey.md:76` |
| <https://www.ideamans.com/_mautic/form/37> | `posts/2020/03/pagespeed-lighthouse-6-draft.md:131` |
| <https://www.ideamans.com/_mautic/form/40> | `posts/2021/02/web-vitals-and-cvr.md:66`<br>`posts/2021/02/web-vitals-and-cvr.md:237` |
| <https://www.ideamans.com/_samples/hybrid-include/> | `posts/2021/06/hybrid-include.md:98` |
| <https://www.ideamans.com/_samples/hybrid-include/index-all.html> | `posts/2021/06/hybrid-include.md:92` |
| <https://www.ideamans.com/_themes/webp-sample/before/> | `posts/2019/02/webppagespeed-insights.md:50` |
| <https://www.ideamans.com/about/alogorithm/> | `posts/2017/07/start.md:106`<br>`posts/2018/09/ideamans-di.md:32` |
| <https://www.ideamans.com/dr.capital/> | `posts/2020/05/dr-capital-maker.md:61` |
| <https://www.ideamans.com/lighthouse/> | `posts/2020/10/web-vitals-history-report.md:57` |
| <https://www.ideamans.com/mt/changedraft/index.html> | `posts/2017/08/opensource-mtplugin201708.md:39` |
| <https://www.ideamans.com/release/20171013-1/> | `posts/2017/08/opensource-mtplugin201708.md:30` |
| <https://www.ideamans.com/release/20171013-2/> | `posts/2017/08/endofsupport-keitaipost.md:31` |
| <https://www.ideamans.com/release/20180831/> | `posts/2018/09/mt7-keitaikit.md:36` |
| <https://www.ideamans.com/release/20181113/> | `posts/2018/11/lightfile-for-dropbox-100users.md:37`<br>`posts/2018/11/lightfile-for-dropbox-100users.md:37` |
| <https://www.ideamans.com/release/20190308/> | `posts/2019/03/png3.md:96` |
| <https://www.ideamans.com/release/20190821/> | `posts/2019/08/pagespeed-rehearsal.md:41` |
| <https://www.ideamans.com/seminar/webimage/> | `posts/2019/03/webp-img-stepup-seminar.md:42` |
| <https://www.ideamans.com/services/pagespeed/> | `posts/2019/11/pagespeed-in-searchconsole.md:108`<br>`posts/2019/08/pagespeed-rehearsal.md:40` |
| <https://www.ideamans.com/services/pagespeed/estimation/> | `posts/2019/08/pagespeed-rehearsal.md:120` |
| <https://www.ideamans.com/services/pagespeed/images/reports/thumbnail/index.png> | `posts/2019/08/pagespeed-rehearsal.md:38` |
| <https://www.ideamans.com/services/pagespeed/inquiry/> | `posts/2019/08/pagespeed-rehearsal.md:119` |
| <https://www.imagemagick.org/script/index.php> | `posts/2018/06/lighthouse-performance.md:48` |
| <https://www.japan-it.jp/haru/> | `posts/2018/05/japan-it-week-haru.md:29`<br>`posts/2018/05/japan-it-week-haru.md:30` |
| <https://www.rakuten.co.jp/b-cat/> | `posts/2019/02/30011webp.md:271` |
| <https://www.rakuten.ne.jp/gold/i-office1/sp/top.html> | `posts/2019/02/30011webp.md:136` |
| <https://www.rizap.jp/qa/45.html> | `posts/2018/05/speedup-like-diet.md:57`<br>`posts/2018/05/speedup-like-diet.md:57` |
| <https://www.sem-r.com/google-2010/20180702025520.html> | `posts/2018/07/google-speed-update.md:60` |
| <https://www.similar-web.jp/funs.php> | `posts/2018/06/comparison2018.md:30` |
| <https://www.sixapart.jp/movabletype/solutions/keitaikit.html> | `posts/2018/09/mt7-keitaikit.md:45` |
| <https://www.slideshare.net/kohsakusaito/rancher-meetup-sapporo-2> | `posts/2017/10/cmsmix-sapporo-vol3-drupal.md:38` |
| <https://www.slideshare.net/slideshow/embed_code/key/F4ScTCPeYJd0cg> | `posts/2017/10/cmsmix-sapporo-vol3-drupal.md:36` |
| <https://www.tsuhanshimbun.com/products/downloads_detail.php?product_id=4466&_ssd=1> | `posts/2019/04/300-ec-lightfile-201904.md:82`<br>`posts/2019/04/ec-pagespeed-insights-deviations.md:297`<br>`posts/2019/02/30011webp.md:44` |
| <https://www.tsuhanshimbun.com/products/downloads_detail.php?product_id=7572> | `posts/2025/04/202503.md:51` |
| <https://www.zakzak.co.jp/sports/sports.htm> | `posts/2019/02/news-sites-webp.md:178` |

## 410 Gone

(3件) 恒久的に削除されています。

| URL | 参照記事 |
|---|---|
| <https://webdev.imgix.net/cls/layout-shift-3.png> | `posts/2020/12/pagespeed-insight-core-web-vitals-field-data.md:144` |
| <https://www.fxsitecompat.com/ja/docs/2018/webp-image-support-has-been-added/> | `posts/2018/11/201811-webp.md:49` |
| <https://www.microsoft.com/ja-jp/p/assetizr/9pj6j7v92n8n> | `posts/2019/01/assetizr.md:36` |

## 接続失敗（DNS解決不可 / TLS失敗 / ホスト到達不能）

(44件) ドメイン自体が消滅している可能性が高いです。

| URL | 参照記事 |
|---|---|
| <https://apache2.ideamans.com/pagespeed-closed-example/> | `posts/2020/07/pagespeed-closed.md:70` |
| <https://blog.goo.ne.jp/ks-press> | `posts/2019/02/news-sites-webp.md:138` |
| <https://dropbox.lightfile.net/> | `posts/2018/11/google-squoosh.md:78`<br>`posts/2018/11/google-squoosh.md:80`<br>`posts/2018/11/google-squoosh.md:82`<br>`posts/2018/11/google-squoosh.md:82`<br>`posts/2018/11/lightfile-for-dropbox-100users.md:36`<br>`posts/2018/11/lightfile-for-dropbox-100users.md:36`<br>`posts/2018/10/cloudnative-serverless.md:47`<br>`posts/2018/09/lightfile-dropbox.md:35`<br>`posts/2018/09/lightfile-dropbox.md:36` |
| <https://drupal-summit.tokyo/> | `posts/2017/10/drupalsummit-2017.md:33`<br>`posts/2017/10/drupalsummit-2017.md:33` |
| <https://flexslider.woothemes.com/> | `posts/2020/09/slider-core-web-vitals.md:119` |
| <https://fwww-lab.com/> | `posts/2017/11/rankingtool2017.md:53` |
| <https://havelog.ayumusato.com/develop/performance/e744-performance_metrics.html> | `posts/2019/03/web-speed-is-firstview.md:58`<br>`posts/2019/04/inside-pagespeed-insights.md:132` |
| <https://implet.net/> | `posts/2017/07/start.md:113`<br>`posts/2017/07/start.md:115`<br>`posts/2017/07/start.md:117`<br>`posts/2017/07/start.md:117` |
| <https://jp.limelight.com/> | `posts/2018/07/google-speed-update.md:83` |
| <https://jp.mautic.org/> | `posts/2017/10/cmsmix-sapporo-vol3-drupal.md:31` |
| <https://jp.techcrunch.com/> | `posts/2017/11/devto-image-optimize.md:49` |
| <https://jp.techcrunch.com/2012/06/01/20120531goodbye-photoshop-hello-cloudinary/> | `posts/2017/11/devto-image-optimize.md:50` |
| <https://letsencrypt.jp/usage/> | `posts/2018/07/https3.md:61` |
| <https://mt.ideamans.com/assets/Smush-Guide-to-Image-formates-JP-fs8.png> | `posts/2019/02/-smush-pro-guide-to-image-formats.md:47` |
| <https://mtddc2018.mt-tokyo.net/> | `posts/2018/11/201811.md:30`<br>`posts/2018/10/mtddc-meetup-tokyo-2018.md:35`<br>`posts/2018/10/mtddc-meetup-tokyo-2018.md:35`<br>`posts/2018/12/2018.md:90` |
| <https://netaful.net/> | `posts/2020/05/netaful-ranklet.md:42` |
| <https://php.simulate.site/pagespeed-closed/digest-document-write.php> | `posts/2020/07/pagespeed-closed.md:44` |
| <https://php.simulate.site/pagespeed-closed/htaccess-document-write.php> | `posts/2020/07/pagespeed-closed.md:59` |
| <https://php.simulate.site/png-alpha-mask-saving/> | `posts/2021/02/png-alpha-saving.md:56`<br>`posts/2021/02/png-alpha-saving.md:70`<br>`posts/2021/02/png-alpha-saving.md:157` |
| <https://php.simulate.site/webp-params-nav/default/> | `posts/2020/07/webp-params-nav.md:36` |
| <https://php.simulate.site/webp-params-nav/default/#case-cwebp_quality_high> | `posts/2020/08/webp-params-2020.md:84` |
| <https://php.simulate.site/webp-params-nav/default/?source=blue-and-red.png&suite=cwebp-standard#case-cwebp_quality> | `posts/2020/08/webp-params-2020.md:128` |
| <https://php.simulate.site/webp-params-nav/default/?source=blue-and-red.png&suite=cwebp-standard#case-cwebp_sharp_yuv> | `posts/2020/08/webp-params-2020.md:138` |
| <https://php.simulate.site/webp-params-nav/default/?source=landscape01-adobe-rgb.jpg&suite=cwebp-standard> | `posts/2020/08/webp-params-2020.md:102` |
| <https://php.simulate.site/webp-params-nav/default/?source=landscape01-adobe-rgb.jpg&suite=cwebp-standard#case-cwebp_metadata> | `posts/2020/08/webp-params-2020.md:108` |
| <https://php.simulate.site/webp-params-nav/default/?source=landscape03-adobe-rgb.png&suite=cwebp-standard> | `posts/2020/08/webp-params-2020.md:116` |
| <https://php.simulate.site/webp-params-nav/default/?source=typography01.jpg&suite=cwebp-standard#case-cwebp_sharp_yuv> | `posts/2020/08/webp-params-2020.md:144` |
| <https://sanyo-i.jp/s/> | `posts/2019/02/30011webp.md:208` |
| <https://simulate.site/cheatspeed-insights/> | `posts/2020/06/cheatspeed-insights.md:65`<br>`posts/2020/06/cheatspeed-insights.md:76`<br>`posts/2020/06/cheatspeed-insights.md:86`<br>`posts/2020/06/cheatspeed-insights.md:100` |
| <https://syncer.jp/echojs> | `posts/2018/06/lighthouse-performance.md:51` |
| <https://tech.recruit-mp.co.jp/front-end/post-17429/> | `posts/2019/03/web-speed-is-firstview.md:119`<br>`posts/2019/04/inside-pagespeed-insights.md:183` |
| <https://telegraphics.com.au/sw/product/WebPFormat> | `posts/2018/04/webp.md:80` |
| <https://tophatenar.com/> | `posts/2018/07/webssl.md:48`<br>`posts/2018/06/lighthouse-mobile-friendly.md:46` |
| <https://uxmilk.jp/54114> | `posts/2020/09/slider-core-web-vitals.md:46`<br>`posts/2020/09/slider-core-web-vitals.md:444` |
| <https://www.bangarrow.com/> | `posts/2018/08/cloudgarage-meetup-in-yokohama.md:72` |
| <https://www.cloud-japan.jp/Home_Haru/> | `posts/2018/05/japan-it-week-haru.md:41` |
| <https://www.daily-3.com/smp/> | `posts/2019/04/ec-pagespeed-insights-deviations.md:278` |
| <https://www.keitaikit.jp/> | `posts/2018/09/mt7-keitaikit.md:45` |
| <https://www.news24.jp/> | `posts/2019/02/news-sites-webp.md:274` |
| <https://www.softbanktech.jp/service/list/fontplus/> | `posts/2018/10/google-fonts-japanese.md:55` |
| <https://www.soleil.company/> | `posts/2019/02/30011webp.md:172` |
| <https://www.thetennisdaily.jp/> | `posts/2018/12/lightfile-info.md:44` |
| <https://www.tokyoinfo.com/shop/use/lunch/> | `posts/2018/08/tokyo-station-lunch.md:97` |
| <https://www.web-mo.jp/Home_Haru/> | `posts/2018/05/japan-it-week-haru.md:36` |

## 5xx サーバーエラー

(1件) 一時的なサーバー側エラーの可能性もありますが、恒常的に返る場合はリンク切れと判断できます。

| URL | 参照記事 |
|---|---|
| <https://license.ideamans.com/dashboard> | `posts/2019/04/300-ec-lightfile-201904.md:40` |

## 429 Too Many Requests

(2件) レート制限により応答しません。一時的な可能性があります。

| URL | 参照記事 |
|---|---|
| <https://trends.google.co.jp/trends/explore?geo=JP&amp;q=lazyload,%E9%81%85%E5%BB%B6%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BF> | `posts/2018/11/speed-update-image-transfer.md:87` |
| <https://venturebeat.com/2019/01/29/mozilla-firefox-65/> | `posts/2019/01/firefox-quantum-webp.md:94` |

## 406 Not Acceptable

(1件) User-Agentやヘッダー次第で見られない可能性があります。

| URL | 参照記事 |
|---|---|
| <https://www.cdnetworks.co.jp/about/> | `posts/2018/11/cdn-costdown.md:48` |

## 202 Accepted

(1件) 正常応答ではなく要確認です。

| URL | 参照記事 |
|---|---|
| <https://www.amazon.co.jp/> | `posts/2026/04/assist-words-blog.md:84`<br>`posts/2020/03/pagespeed-lighthouse-6-draft.md:62` |
