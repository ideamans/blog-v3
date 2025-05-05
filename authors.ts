export interface Author {
  id: number
  name: string
  username: string
  email: string
  image: string
  bio: string
}

export const authors: Author[] = [
  {
    id: 2,
    name: 'ディレクター菊池',
    username: 'kikuchi',
    email: 'kikuchi@ideamans.com',
    image: '/mt-static/support/assets_c/userpics/userpic-2-100x100.png',
    bio: 'イントラサイトからファッションブランドのECサイトまで色んなサイト製作経験を経て、Webディレクターという便利な肩書でいろいろやってます。\n\n<br>担当サービス：<br><a href="https://www.ranklet.com/" target="_blank">簡単ランキング設置サービス：Ranklet</a><br>\n'
  },

  {
    id: 3,
    name: 'グロースハッカー能勢',
    username: 'nose',
    email: 'nose@ideamans.com',
    image: '/mt-static/support/assets_c/userpics/userpic-3-100x100.png',
    bio: 'ウェブサイトやウェブサービスの成長請負人です。グロース手法を日々探して、どうやって数字を上げていくのかに情熱を注いでいます。数字を追いかけつつ、技術面の勉強を怠らず、ビジュアル面にもこだわり、ユーザー満足度も向上させたい。ということで、毎日がんばってます。飲みものはビール、食べ物はそば。デザートはショートケーキ。\n<br>担当サービス <a href="https://core.lightfile.net/" target="_blank">画像最適化ツール LightFile</a>'
  },

  {
    id: 4,
    name: '代表取締役 宮永',
    username: 'miyanaga',
    email: 'miyanaga@ideamans.com',
    image: '/mt-static/support/assets_c/userpics/userpic-4-100x100.png',
    bio: '代表取締役プログラマー ◆1977年生まれ ◆北海道出身 ◆1998年国立苫小牧工業高等専門学校・情報工学科卒 ◆16年間の東京生活の後に家族でUターン ◆現在は札幌在住 ◆11歳からプログラミングに熱中し学生時代に読んだビル・ゲイツの伝記に刺激され将来の起業を決意 ◆2005年 アイデアマンズ株式会社設立 ◆世界初のInternet Explorerアドオン型キャプチャソフト WebScan を開発 ◆ボクシングジム通いが高じて後楽園ホールでのプロ戦を経験(戦績1戦1敗^^;)'
  }
]
