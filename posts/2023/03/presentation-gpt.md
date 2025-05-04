---
# Astrowind
title: 'プレゼン原稿作成が楽になる！AIの力で話し上手に'
excerpt: 'みなさんはプレゼンに際し、きちんと原稿を用意するでしょうか？ 原稿が必要と頭では...'
updateDate: 2023-03-15
publishedDate: 2023-03-15
tags: 
  - tech

author: miyanaga
image: https://blog.ideamans.com/assets/ai-speach-ogp.png
category: tech

# カスタム
updatedAt: 2023-03-15 13:12:42
publishedAt: 2023-03-15 13:12:45
categories: 
  - tech

categoryLabels: 
  - 技術系小ネタ

authorId: miyanaga
subTheme: 
recommended: false
---

みなさんはプレゼンに際し、きちんと原稿を用意するでしょうか？

原稿が必要と頭ではわかるんですが、作るのが面倒だし、ライブで話した方が楽しいので、たいてい素人丸出しのアドリブで話してしまいます。

でも少しでも上手くかっこよく話したいという気持ちもあります。

GPT-4が発表されたのを機に、**プレゼンの面倒な原稿作成をAIで楽できないかなぁ**と以前から考えていたことを試してみたので紹介します。

## 結果、プレゼンは上手くなったか？

### TAKE 1

原稿なしのTAKE1です。やはりあー・えーが多いし、話が戻ったり、語尾に自信のなさげだし、素人丸出しですね。

ライブ感やポッドキャスト風といえば味があるかもですが、やはり聞きやすくはありません。

<iframe width="560" height="315" src="https://www.youtube.com/embed/_G7iU0d7ViY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### TAKE 2

こちらがAIで原稿を作成してそれを読み上げたTAKE2。

いかがでしょう。話し方自体は当然素人ですが、話の内容はかなりすっきりしました。時間も30秒近く短縮されました。

<iframe width="560" height="315" src="https://www.youtube.com/embed/XcQJmKc1320" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

個人的にこの方法はありだと思いました。

今回はすべて手作業でしたが、自動化されたらぜひ使いたいです。どなたかサービス化してください！

## 手順

### 原稿なしで収録して文字起こし

まず原稿は用意せず、思いつきでダラダラ話をして収録します。これがTAKE1です。

次に[Whisper](https://openai.com/research/whisper)で文字起こしします。こんなPythonスクリプトを用意しました。

<pre><code class="language-python">
import whisper

model = whisper.load_model("large")
result = model.transcribe("./1st.mov", verbose=True, language='ja')
text = result['text']
print(text)
</code></pre>

こんな簡単なスクリプトでできちゃうのもすごいですが、この時点でフィラー(あー・えー)を消してくれました。フィラー消しボイスチェンジャーだけでも欲しい！

> AIを活用し、素人でもプレゼンでうまく話す方法を考えました。素人がうまく話すにはというところで、素人というのはここでは話し方のトレーニングを受けていない人というふうに定義しています。そういう人はですね、現に私が喋っているようにフィラーと呼ばれるAとかRという無駄な言葉が入りがち。聞いている方はですね、すごく聞きにくいですね。やっぱりそう考えるとですね、原稿が必要だというわけなんですけども、やっぱり事前にですね、原稿を書くのはすごく面倒くさいです。僕はですね、特に書き言葉とか話し言葉でですね、ちょっと違和感が出るんですね。普通に話すことをイメージして原稿を書いてそれを読むんですけども、やっぱり違和感を感じることが結構あります。それがすごく嫌だなというところですね。こういうふうにダラダラ話す方がですね、圧倒的に楽しいというところがあって、やっぱりどうしても原稿を用意するのは大変だなというところです。この問題をですね、AIにアシストしてもらって解決できないかということを考えました。こうやってですね、とりあえずダラダラと喋って一回収録し、その音声をですね、ウィスパーで文字起こししましょうと。その文字起こしした原案をChatGPTにぶち込んで原稿を考えてもらうと。その原稿を読んで再収録すると、かなり聞きやすいプレゼンにできるんじゃないかというふうに考えています。それを今試そうというところですね。

### ChatGPTで原稿を整える

次にスライドごとにChatGPTに原稿作成をお願いします。有料プランを契約しているのでさっそくGPT-4を使いました。

<img alt="1-prompt.png" src="https://blog.ideamans.com/assets/1-prompt.png" width="672" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

するとこんな回答が出てきました。

頼んでいないけど、気を利かせてスライドの文章も添削してくれました。せっかくなのでそれも反映してみます。

ナレーションはタイトル読み上げだけでしたが、プレゼン風にアレンジしてくれましたね。

<img alt="1-output.png" src="https://blog.ideamans.com/assets/1-output.png" width="672" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

2枚目のスライドもお願いします。

<img alt="2-prompt.png" src="https://blog.ideamans.com/assets/2-prompt.png" width="672" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

ここでAIらしい違和感が出ました。上手く話すために、素人の意味を定義することは関係ありません。たぶん「定義」という強い言葉に引っ張られたんだと推測しています。

<img alt="2-output.png" src="https://blog.ideamans.com/assets/2-output.png" width="672" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

最後に3枚目です。

<img alt="3-prompt.png" src="https://blog.ideamans.com/assets/3-prompt.png" width="672" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

プレゼン講師というロールを与えたからか、「〜してみましょう！」というお誘いが出がちです。

全ページ同じノリになりそうなので、そこはアレンジが必要そうです。

<img alt="3-output.png" src="https://blog.ideamans.com/assets/3-output.png" width="672" class="mt-image-center" style="text-align: center; display: block; margin: 0 auto 20px;" />

### 再収録

こうやって作成されたナレーション原稿を読み上げて再収録したのがTAKE2の動画でした。

素人が楽しくライブで話すと聴衆は聞きにくく、原稿を用意すれば聞きやすいが楽しくない。そんなジレンマをAIで解決する試み、みなさんもぜひ試してみましょう！(AI風)

最後にこの記事のタイトルもChatGPTに考えてもらいました。

 1.  AIが助ける！プレゼン上達の秘訣
 2.  GPT-4でプレゼンスキルを向上させる方法
 3.  プレゼンの原稿作成、AIがあなたをサポート！
 4.  アドリブから脱却！AIでスムーズなプレゼンを実現
 5.  GPT-4活用術：プレゼン力アップへの道
 6.  AIが教えるプレゼン原稿作成のコツ
 7.  話し上手になる！AIでプレゼン力を磨こう
 8.  素人でもプロ級のプレゼンが可能！GPT-4の活用法
 9.  GPT-4でプレゼンのジレンマを解決する方法
 10.  プレゼン原稿作成が楽になる！AIの力で話し上手に

