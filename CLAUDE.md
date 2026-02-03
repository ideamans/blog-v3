# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

アイデアマンズ株式会社の技術ブログ。VitePressベースの静的サイトジェネレータで構築。Web高速化・画像軽量化に関するコンテンツを発信。

## 開発コマンド

```bash
yarn dev        # 開発サーバー起動（ブラウザ自動オープン）
yarn build      # プロダクションビルド
yarn serve      # ビルド済みサイトのプレビュー
yarn x-ai-posting  # AI自動投稿（Twitter/X）
```

## 技術スタック

- **VitePress 1.0** - 静的サイトジェネレータ（MPA mode, `cleanUrls: false`）
- **Vue 3.4+** - Composition API & `<script setup>`
- **TypeScript**
- **Tailwind CSS 3.4 + DaisyUI 4.12** - スタイリング（`postcss.config.js` で設定）
- **Dayjs** - 日付処理

## ファイルとURLの対応関係

### URL Rewriting ルール（`.vitepress/config.ts`）

| ファイルパス | 公開URL |
|-------------|---------|
| `posts/2025/03/slug.md` | `/2025/03/slug.html` |
| `categories/tech.md` | `/tech/index.html` |
| `monthly/2025-03.md` | `/2025/03/index.html` |
| `index.md` | `/index.html` (トップページ) |

**ポイント:**
- `.html` 拡張子は残る（`cleanUrls: false`）
- `posts/` プレフィックスはURLから除去される
- カテゴリ・月別ページは `index.html` に変換

### 動的ルート生成

**カテゴリページ** (`categories/[category].paths.js`):
- `categories.ts` の全カテゴリに対してルート生成

**月別アーカイブ** (`monthly/[year]-[month].paths.js`):
- 2017年7月から現在+1ヶ月までのルートを自動生成

## 記事のfrontmatter

```yaml
---
title: 記事タイトル（10〜30文字程度）
excerpt: 記事の概要（省略時は本文から自動生成）
authorId: miyanaga  # kikuchi, nose, miyanaga のいずれか
publishedAt: 2025-05-27 13:56:00
categories: ['tech', 'performance']  # categories.ts の basename を使用
recommended: false
image: /path/to/image.png  # オプション：OGP画像（省略時は自動生成）
---
```

**OGP画像の自動生成:**
- `image` 省略時: `banners.ideamans.com` でタイトル・日付・著者から動的生成
- Twitter Card: `alogorithm2.ideamans.com` でアルゴリズム生成画像

## 記事の文体・トーン

- **文体**: です・ます調（敬体）
- **対象読者**: Web開発者、技術意思決定者
- **特徴**:
  - 専門用語は使うが、必要に応じて説明を加える
  - 会話調で親しみやすく、かつ専門性を維持
  - 見出し（`##`）で構造化、リストで整理
  - 自社サービス（LightFile, Ranklet）への言及あり
  - 月報は活動報告形式、技術記事は解説形式

**月報の例:**
```markdown
飛び石連休のGWが始まり、札幌も桜が見ごろになりました。2024年4月の活動報告です。

---

## 見出し1

本文...

## 見出し2
```

## テーマ拡張・カスタマイズ

### コンポーネント構成 (`.vitepress/theme/`)

| ファイル | 役割 |
|---------|------|
| `Layout.vue` | ルーティング判定（Home/Article/Category/Monthly） |
| `Article.vue` | 記事表示（前後記事リンク、サイドバー） |
| `posts.data.ts` | 記事一覧のContent Loader |
| `profiles.ts` | `useData()` のラッパー（デフォルト著者設定） |

### Content Loaderパターン

```typescript
// posts.data.ts
export default createContentLoader('posts/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter }) => ({
        ...frontmatter,
        url: url.replace(/^\/posts\//, '/')  // URLからposts/を除去
      }))
      .sort((a, b) => Dayjs(b.publishedAt) - Dayjs(a.publishedAt))
  }
})
```

### 新しいデータローダーを追加する

1. `.vitepress/theme/xxx.data.ts` を作成
2. `createContentLoader` または直接データをエクスポート
3. Vue コンポーネントで `import { data } from './xxx.data.js'`

### 新しいカテゴリを追加する

1. `categories.ts` に `{ basename: 'new-cat', name: '表示名' }` を追加
2. 自動的に `/new-cat/index.html` が生成される

### ビルド時フック

```typescript
// .vitepress/config.ts
buildEnd: genFeed  // RSS フィード生成 (/feed.rss)

transformHead: ({ head, pageData }) => {
  // OGP/Twitter Card メタタグの動的生成
}
```

### スタイルのカスタマイズ

- `postcss.config.js`: Tailwind設定（コンテンツパス、プラグイン）
- `.vitepress/theme/style.css`: カスタムCSS（proseスタイル調整など）
- DaisyUIテーマ: `light` のみ（ダークテーマ無効）

## データ定義ファイル

| ファイル | 内容 |
|---------|------|
| `authors.ts` | 著者情報（id, name, username, email, bio） |
| `categories.ts` | カテゴリ定義（basename, name） |

**現在のカテゴリ一覧:**
`core-web-vitals`, `cvr`, `lighthouse`, `mt-plugins`, `pagespeed-insights`, `seo`, `webp`, `web-imaging`, `event`, `cloud-cost`, `case-study`, `ranklet`, `pr`, `tech`, `journal`, `lightfile`, `performance`, `reports`

## Prettier設定

- シングルクォート使用
- セミコロンなし
- 行幅80文字
- トレイリングカンマなし
