# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

アイデアマンズ株式会社の技術ブログ。VitePressベースの静的サイトジェネレータで構築されたJapanese blog。Web高速化・画像軽量化に関するコンテンツを発信。

## 開発コマンド

```bash
# 開発サーバー起動（ブラウザ自動オープン）
yarn dev

# プロダクションビルド
yarn build

# ビルド済みサイトのプレビュー
yarn serve

# AI自動投稿（Twitter/X）
yarn x-ai-posting
```

## 技術スタック

- **VitePress 1.0** - 静的サイトジェネレータ（MPA mode）
- **Vue 3.4+** - Composition API & `<script setup>`
- **TypeScript**
- **Tailwind CSS 3.4 + DaisyUI 4.12** - スタイリング
- **Dayjs** - 日付処理

## アーキテクチャ

### コンテンツ構造

```
posts/
└── YYYY/MM/slug.md  → /{year}/{month}/{slug}.html として公開

categories/
└── {category}.md    → /{category}/index.html として公開

monthly/
└── YYYY-MM.md       → /{year}/{month}/index.html として公開
```

URL rewrites は `.vitepress/config.ts` で定義。

### テーマ構造 (`.vitepress/theme/`)

- `Layout.vue` - 共通レイアウト（ヘッダー、ナビ、フッター）
- `Article.vue` - 記事ページ
- `Home.vue` - トップページ
- `Category.vue` - カテゴリ一覧
- `Monthly.vue` - 月別アーカイブ
- `posts.data.ts` - 記事データローダー（VitePress Content Loader）

### データ定義

- `authors.ts` - 著者情報（kikuchi, nose, miyanaga）
- `categories.ts` - カテゴリ定義（basename と name）

## 記事のfrontmatter

```yaml
---
title: 記事タイトル（10〜30文字程度）
authorId: miyanaga  # kikuchi, nose, miyanaga のいずれか
publishedAt: 2025-05-27 13:56:00
categories: ['tech', 'performance']  # categories.ts の basename を使用
recommended: false
image: /path/to/image.png  # オプション：OGP画像
excerpt: 記事の概要  # オプション
---
```

## Prettier設定

- シングルクォート使用
- セミコロンなし
- 行幅80文字
- トレイリングカンマなし
