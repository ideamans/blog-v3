---
# Astrowind
title: '「画像できるだけ軽くして！」曖昧な指示はもうやめよう・具体的な基準のために統計的に考える画像の軽さ'
excerpt: '画像を軽くって言われても... デジタルなWeb制作の現場でも「画像できるだけを...'
updateDate: 2020-10-02
publishedDate: 2020-10-02
tags: 
  - webp

  - web-imaging

  - lightfile

author: miyanaga
image: https://blog.ideamans.com/assets/web-image-fitness-ogp.png
category: web-imaging

# カスタム
updatedAt: 2020-10-02 16:04:35
publishedAt: 2020-10-02 14:54:00
categories: 
  - webp

  - web-imaging

  - lightfile

categoryLabels: 
  - WebP

  - Web画像最適化

  - 画像軽量化AI LightFile

authorId: miyanaga
subTheme: bs4
recommended: false
---

## 画像を軽くって言われても

デジタルなWeb制作の現場でも**「画像できるだけを軽くして！」**というフワっとした指示が飛び出します。

画像の内容によって圧縮効率は違うし、知覚的な画質とファイルサイズの兼ね合いも人によって違うので正直、正解はありません。**指示のようで指示でないのが「画像軽くして！」**なのです。

逆に、**「日本のWeb画像の半数より軽くして！」**という指示なら、難解なようで逆に統計的に基準を考えられます。今回はそんな調査のお話です。

## Web画像肥満チェッカー

いきなりですがこんなツールを作ってみました。

お持ちの画像ファイルの**ピクセル数とファイルサイズを入力してみてください。その画像が統計的な観点で軽いか重いか判定**します。

<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<div id="app" style="margin-top: 80px">
    <div class="row">
      <div class="col-md-5">
        <h4>統計的に適度なファイルサイズの目安</h4>
        <label class="form-group mt-4">
          <label>画像のピクセル数</label>
          <div class="form-inline">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">幅</div>
              </div>
              <input type="text" class="form-control text-right" v-model="width" style="width: 5em">
              <div class="input-group-append">
                <div class="input-group-text">px</div>
              </div>
            </div>

            <div class="input-group ml-2">
              <div class="input-group-prepend">
                <div class="input-group-text">高さ</div>
              </div>
              <input type="text" class="form-control text-right" v-model="height" style="width: 5em">
              <div class="input-group-append">
                <div class="input-group-text">px</div>
              </div>
            </div>
          </div>

          <label class="mt-3">画像のファイルサイズ</label>
          <div class="form-inline">
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">ファイルサイズ</div>
              </div>
              <input type="text" class="form-control text-right" v-model="size" style="width: 10em">
            </div>

            <select class="form-control ml-1" v-model="unit">
              <option value="kb">KB</option>
              <option value="mb">MB</option>
            </select>

          </div>

          <label class="mt-3">{{width}}×{{height}}pxの画像の日本における推定中央値</label>
          <div><strong>{{ medianFilesize }}</strong></div>

      </div>

      <div class="col-md-7">
        <canvas ref="gauge" style="width: 100%; height: 350px"></canvas>
      </div>
    </div>
</div> -->

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/filesize/6.1.0/filesize.min.js"></script>
<script src="https://unpkg.com/chart.js@2.8.0/dist/Chart.bundle.js"></script>
<script src="https://unpkg.com/chartjs-gauge@0.2.0/dist/chartjs-gauge.js"></script>
<script src="https://unpkg.com/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.js"></script> -->

<!-- <script>
window.onload = () => {

  function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }

  function erf(x) {
    const s = sign(x);
    const abs = Math.abs(x);

    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    const t = 1 / (1 + p * abs);
    const y = t * (a1 + t * (a2 + t * (a3 + t * (a4 + t * a5))));

    return s * (1 - y * Math.exp(-abs * abs));
  }

  function logNormalDistribution(median, falloff) {
    const location = Math.log(median);
    const logRatio = Math.log(falloff / median);
    const shape =
      Math.sqrt(
        1 - 3 * logRatio - Math.sqrt((logRatio - 3) * (logRatio - 3) - 8)
      ) / 2;

    return function (x) {
      const stdX = (Math.log(x) - location) / (Math.sqrt(2) * shape);
      return (1 - erf(stdX)) / 2;
    };
  }
  
  const tipMedian = 2600, tipFalloff = 270

  const ranges = [
    { dist: 0.2, from: 0, to: 1400, label: "とても軽い", color: "#4393c3" },
    { dist: 0.4, from: 1400, to: 2060, label: "やや軽い", color: "#2166ac" },
    { dist: 0.6, from: 2060, to: 3280, label: "ふつう", color: "#bababa" },
    { dist: 0.8, from: 3280, to: 5620, label: "やや重い", color: "#ef8a62" },
    { dist: 1.0, from: 5620, to: Infinity, label: "とても重い", color: "#b2182b" }
  ];

  const app = new Vue({
    el: "#app",
    data() {
      return {
        width: 1200,
        height: 630,
        size: 191.95,
        unit: "kb"
      };
    },
    computed: {
      tipFilesize() {
        return filesize(this.tipsize);
      },
      bytes() {
        const unit = this.unit == "mb" ? 1024 * 1024 : 1024;
        const bytes = parseInt(this.size) * unit;
        return bytes;
      },
      filesize() {
        return filesize(this.bytes)
      },
      tips() {
        return this.width * this.height / (100 * 100)
      },
      tipsize() {
        if (!this.size) return 0;
        const tipsize = (this.bytes * 100 * 100) / (this.width * this.height);
        return tipsize;
      },
      distribution() {
        const dist = logNormalDistribution(tipMedian, tipFalloff)
        return 1 - dist(this.tipsize)
      },
      median() {
        return tipMedian * this.tips
      },
      medianFilesize() {
        return filesize(this.median)
      },
      label() {
        if (!this.size) return "";
        const tipsize = this.tipsize
        const range = ranges.find(
          (r) => r.from <= this.tipsize && this.tipsize < r.to
        );
        return range.label
      }
    },
    watch: {
      size() {
        this.$gaugeConfig.
        this.$gauge.update()
      },
      width() {
        this.$gauge.update()
      },
      height() {
        this.$gauge.update()
      }
    },
    created() {
      this.$watch(
        () => [this.$data.width, this.$data.height, this.$data.size, this.$data.unit],
        (value, oldValue) => {
          this.$gaugeConfig.data.datasets.forEach(dataset => {
            dataset.value = this.distribution
          })
          this.$gauge.update()
        }
      )
    },
    mounted() {
      const config = {
        type: 'gauge',
        data: {
          labels: ranges.map(r => r.label),
          datasets: [{
            data: ranges.map(r => r.dist),
            value: this.distribution,
            backgroundColor: ranges.map(r => r.color),
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          title: {
            display: false,
            position: 'top',
            fontSize: 20,
            text: '統計的に適度な画像ファイルサイズの目安',
          },
          layout: {
            padding: {
              bottom: 30
            }
          },
          needle: {
            // Needle circle radius as the percentage of the chart area width
            radiusPercentage: 2,
            // Needle width as the percentage of the chart area width
            widthPercentage: 3.2,
            // Needle length as the percentage of the interval between inner radius (0%) and outer radius (100%) of the arc
            lengthPercentage: 50,
            // The color of the needle
            color: '#444',
          },
          valueLabel: {
            fontSize: 30,
            backgroundColor: '#4448',
            formatter: (value, context) => {
              if (!this.size) return '0'
              return this.filesize
            },
            bottomMarginPercentage: 8,
          },
          plugins: {
            datalabels: {
              display: true,
              formatter: (value, context) => {
                const range = ranges[context.dataIndex]
                const size = (range.to == Infinity ? range.from : range.to) * this.tips
                const formatted = range.to == Infinity ? `${filesize(size)} 〜` : `〜 ${filesize(size)}`
                return [range.label, formatted].join("\n")
              },
              backgroundColor: function (context) {
                return context.dataset.backgroundColor;
              },
              color: '#fff',
              borderWidth: 0,
              borderRadius: 5,
              textAlign: 'center',
              font: {
                size: 15,
                weight: 'bold'
              }
            }
          }
        }
      }

      this.$gaugeConfig = config

      const ctx = this.$refs.gauge.getContext('2d')
      this.$gauge = new Chart(ctx, config)
    },
  });

}
</script> -->

なぜそのような判定ができるのか、70万点の画像を調査したレポートを交えて紹介します！

## Web画像には肥満問題がある

当然ですがWebの画像は、**画質に違和感がなければ軽い(データ効率が高い)ほうがいい**に決まっています。ダウンロードも早いし、モバイル通信コストも安くすみます。

しかし画像は一定の画質以上になると、その良し悪しを人間の目ではほとんど判別できません。しかし過剰に高画質な画像ファイルは、その人間にとって無駄なデータをたっぷり含んでいます。

<img alt="fat-images.png" src="https://blog.ideamans.com/assets_c/2020/10/fat-images-thumb-800xauto-1263.png" width="800" height="283" class="img-fluid" />

### 100×100ピクセルあたりの画像ファイルサイズでデータ効率を測る

通販サイトでは画像ファイルが多く、テキスト中心のメディアサイトでは少ないといったようにWebサイトによって画像ファイルの数には違いがあります。

しかし**画像ファイル自体を高いデータ効率で配信できているか**はすべてのサイトに共通の問題です。

そのデータ効率を統計的に考えるため、**有名サイトの約70万ファイルの画像について100×100ピクセルあたりのファイルサイズ**を集計してみました。

### サイトによってデータ効率に最大100倍もの差

今回の調査で驚いたのが、**サイトによって画像の「重さ」には数十倍、最大で100倍も開き**があったことです。Web画像肥満にはここまで際限がないとは。

あなたのサイトは大丈夫でしょうか？

<img alt="heavy-img-site.png" src="https://blog.ideamans.com/assets_c/2020/10/heavy-img-site-thumb-1000xauto-1251.png" width="1000" height="292" class="img-fluid" />

## Alexaの日本トップ500サイトを元に約70万画像を調査

[Alexa \- Top Sites in Japan \- Alexa](https://www.alexa.com/topsites/countries/JP) では日本のトップ500サイトを公表しています(ややこしいですがスマートスピーカーのAlexaとは別物です) 。

このリストが残念ながら少し雑で、中国語のサイトなどもかなり含まれています。そこで日本語のサイトのみを抽出し、それぞれ100ページを目標にクローリング。JPEG・PNG・WebP画像を調査しました(GIFは多くがアニメーションで複数フレームが含まれると推測して省略)。

<img alt="web-image-fitness-flow.png" src="https://blog.ideamans.com/assets_c/2020/10/f9d23cc3159e9a72b2f574ad3dcfbc23b896d1d2-thumb-1000xauto-1265.png" width="1000" height="294" class="img-fluid" />

サンプル数としては次の通りです。

* ページ数 301,100ページ
* 画像ファイル数 JPEG 379,737ファイル + PNG 271,856ファイル + WebP 40,562ファイル = 692,155ファイル

## 100x100あたりのファイルサイズは中央値2.6キロバイト

約70万件の画像ファイルの100x100ピクセルあたりのファイルサイズのヒストグラムがこちらです。青い領域が実際の分布、<span style="color: red">赤い線が対数正規分布によるモデル</span>です。

<img alt="all-image-types.png" src="https://blog.ideamans.com/assets/all-image-types.png" width="1636" height="805" class="img-fluid" />

<div class="alert alert-info">
<h5>対数正規分布</h5>
<p>偏りのある正規分布。人間の体重は正規分布ではなくこの対数正規分布に従うと言われています。PageSpeed Insightsでもスコアの推定と計算に用いられます。</p>
</div>

ピークがちょっと欠けてしまいましたが、四分位の誤差を見ても対数正規分布でほぼ表現できています。

<table class="table table-bordered">
        <thead>
 <tr>
  <th class="text-right">分位</th>
  <th class="text-right">測定値(bytes)</th>
  <th class="text-right">モデル(bytes)</th>
  <th class="text-right">誤差</th>
 </tr>
        </thead>
        <tbody>
 <tr>
  <th class="text-right">25%</th>
  <td class="text-right">1432.6</td>
  <td class="text-right">1402</td>
  <td class="text-right">-2.1%</td>
 </tr>
 <tr>
  <th class="text-right">50%</th>
  <td class="text-right">2632.4</td>
  <td class="text-right">2600</td>
  <td class="text-right">-1.2%</td>
 </tr>
 <tr>
  <th class="text-right">75%</th>
  <td class="text-right">4872.2</td>
  <td class="text-right">4822</td>
  <td class="text-right">-1.0%</td>
 </tr>
        </tbody>
</table>

中央値が約2.6キロバイトです。なので**もしあなたがWebの画像を出力したとき、100x100ピクセルあたり2.6キロバイト相当のファイルサイズだと、その画像は日本において重くも軽くもない標準的なデータ効率**だと推測できます。

四分位を元に**4.9キロバイトを超えるとデータ効率が悪い疑い**があり、**1.4キロバイトを下回ると画質の改善余地**があるかも...そういった根拠のひとつに使えます。

この性質をモデルを利用したものが冒頭の計算ツールです。

### あくまで目安！ データ効率は内容によって違う

これはもちろん統計的な目安にすぎず、「とにかく100x100ピクセルあたり2.6キロバイトにするのがデータとして正解」という指標では決してありません。

画像ファイルは内容(画素の乱雑さ)によってファイルサイズが大きく違うのが当たり前です。その正解を決めることはできません。でも**基準がないから冒頭で述べたようにサイトによって何十倍、百倍もの効率の差**が出てしまう。だったら**他のサイトの画像との競争力**でデータ効率の目安を考えてみようという試みです。

## フォーマットごとの分布

上記のヒストグラムでは、JPEG・PNG・WebPを区別せずに集計しました。というのも、**情報量やユーザーの体験を測るのは画素数であって、フォーマットの違いはユーザーにとってはどうでもよいこと**だからです。

ただ、各フォーマットの特性を調べるためにそれぞれのデータ効率の分布も見てみましょう。フォーマットを固定するとよりきれいな対数分布曲線を描いています。

<div class="row">
<div class="col-md-4"><a href="https://blog.ideamans.com/assets/jpeg.png"><img alt="jpeg.png" src="https://blog.ideamans.com/assets_c/2020/10/jpeg-thumb-892x442-1258.png" width="892" height="442" class="img-fluid" /></a></div>
<div class="col-md-4"><a href="https://blog.ideamans.com/assets/png.png"><img alt="png.png" src="https://blog.ideamans.com/assets_c/2020/10/png-thumb-909x442-1257.png" width="909" height="442" class="img-fluid" /></a></div>
<div class="col-md-4"><a href="https://blog.ideamans.com/assets/webp.png"><img alt="webp.png" src="https://blog.ideamans.com/assets_c/2020/10/webp-thumb-875x442-1256.png" width="875" height="442" class="img-fluid" /></a></div>
</div>

### WebPはJPEGの2倍以上軽く、PNGは使い所が大事

四分位ごとのデータ効率が次の通りです。

<table class="table table-bordered">
        <thead>
 <tr>
  <th class="text-right">四分位</th>
  <th class="text-right">JPEG</th>
  <th class="text-right">PNG</th>
  <th class="text-right">WebP</th>
 </tr>
        </thead>
        <tbody>
 <tr>
  <th class="text-right">25%</th>
  <td class="text-right">1545</td>
  <td class="text-right">1727</td>
  <td class="text-right">649</td>
 </tr>
 <tr>
  <th class="text-right">50%</th>
  <td class="text-right">2659</td>
  <td class="text-right">4265</td>
  <td class="text-right">1206</td>
 </tr>
 <tr>
  <th class="text-right">75%</th>
  <td class="text-right">4529</td>
  <td class="text-right">9800</td>
  <td class="text-right">2096</td>
 </tr>
        </tbody>
</table>

**WebPがJPEGに対し約2.1〜2.4倍のデータ効率を実現**しています。WebPは可逆・非可逆の区別をしていないのですが、不利になりがちな可逆圧縮を含めてもこの差です。

Googleは[25%〜34%軽量](https://developers.google.com/speed/webp/)と説明しています。しかし自分の感覚としても2倍以上軽量化できることが多く、今後ますます普及を期待したいところです。

PNGは、25%の時点ではJPEGといい勝負ですが、75%ではJPEGに対し2.2倍重くなっています。連続パターンの多いPNG向きの画像に使ううちは力を発揮しますが、間違えると途端に重たいデータとして負担を増やすことがよくわかります。

## サイトごとの平均データ効率

最後にサイト(ドメイン)ごとの平均画像データ効率を見てみましょう。

サンプルが219ドメインと少ないのでいびつですが、こちらもおおよそ対数正規分布に従うと予想できます。

<img alt="domain.png" src="https://blog.ideamans.com/assets/domain.png" width="892" height="442" class="img-fluid" />

このデータで**最もデータ効率が軽いサイトが100x100ピクセルあたり0.5キロバイト、最も重いサイトが59キロバイト**となっています。これが冒頭に紹介した、画像データ効率には100倍以上の開きがあるという事実です。

サイト全体の平均としては、100×100ピクセルあたりの画像ファイルサイズの中央値は約3.7キロバイトです。やはりひとつのサイト内にもいろいろな種類の画像があり、その混成により画像単体の中央値より底上げされると推測します。

## まとめ

今回、画像ファイルの**適度な**ファイルサイズについて考えてみました。

**100×100ピクセルあたり2.6キロバイト**は、繰り返しになりますが、統計的に重くも軽くもないというだけの目安です。画像の内容によってデータ効率は違って当たり前。厳密にこだわるのは逆に間違いです。

ただ、その目安から大きく外れるようなら(75%位にあたる4.9キロを超えるなら)、PNGをやめてJPEGにしたり、品質パラメータを下げるといった軽量化を考えるきっかけにしてほしいと思っています。

### 補足

JPEGとPNGではファイルサイズはピクセル数にほぼ比例する性質を以前調査しました。

[検証 Web画像のファイルサイズは画素数にほぼ比例する \- アイデアマンズブログ](https://blog.ideamans.com/2020/04/web-3.html)

「画素数が増えるとファイルサイズは曲線的に変化するかも。だとしたらピクセル数あたりの分析は意味ないのでは？」と、自分も最初疑問に感じたので補足します。
