# OGP Image Generator - OGP画像生成スキル

ブログ記事のMarkdownと参照画像からOGP画像を生成するスキルです。Gemini APIを使用してマルチモーダル入力（テキスト＋画像）でOGP画像を生成します。

## 使い方

```
/ogp-image [記事ファイルパス]
```

例:
```
/ogp-image posts/2025/03/example.md
/ogp-image posts/2026/01/new-article.md
```

## 実行手順

1. **GEMINI_API_KEY の確認**

   まず環境変数 `GEMINI_API_KEY` が設定されているか確認してください:
   ```bash
   echo $GEMINI_API_KEY
   ```

   設定されていない場合は、ユーザーに以下のメッセージを表示して設定を促してください:

   > GEMINI_API_KEY が設定されていません。
   > Google AI Studio (https://aistudio.google.com/apikey) でAPIキーを取得し、
   > 以下のコマンドで設定してください:
   > ```
   > export GEMINI_API_KEY="your-api-key"
   > ```

2. **記事ファイルの読み込み**

   指定されたMarkdownファイルを読み込み、以下を抽出:
   - frontmatterの `publishedAt` から年月を取得
   - ファイル名からslugを取得（拡張子なし）
   - 記事本文

3. **記事で使用されている画像の特定と取得**

   記事内の画像参照をすべて解析する:
   - `![...](...)` 形式
   - `<img src="...">` 形式

   画像URLを収集し、以下のルールで分類・取得する:

   **スキップする画像:**
   - SVG画像（`.svg`）→ 画像生成モデルに不向き
   - 極小アイコン（明らかにバッジやファビコン等）

   **ローカル画像の場合（`/images/...` や `/posts/...` で始まるパス）:**
   - `public/` プレフィックスを付けた実ファイルパスで参照
   - 例: `/images/2026/slug/photo.png` → `public/images/2026/slug/photo.png`

   **外部URL画像の場合（`https://` で始まるURL）:**
   - curlで一時ディレクトリにダウンロードして使用する
   - **代表的な画像を最大3枚まで**選んでダウンロード（記事の内容を最もよく表すものを優先）
   - ダウンロードに失敗した場合はスキップして続行

   ```bash
   # 外部画像のダウンロード例
   mkdir -p /tmp/ogp-images
   curl -L -s -o /tmp/ogp-images/image1.jpg "https://example.com/photo.jpg"
   curl -L -s -o /tmp/ogp-images/image2.png "https://blog.ideamans.com/assets/chart.png"
   ```

   **旧ブログからの画像（`/assets/...` パス）:**
   - 絶対URLに変換してcurlで取得: `https://blog.ideamans.com/assets/xxx.png`
   - 例: `/assets/report.jpeg` → `curl -L -s -o /tmp/ogp-images/report.jpeg "https://blog.ideamans.com/assets/report.jpeg"`

   **取得した画像をgenerate.mjsの引数に渡す:**
   - ローカルパス・ダウンロード済みパスをすべてgenerate.mjsの末尾引数として列挙する

4. **OGP画像の生成**

   ```bash
   node .claude/skills/ogp-image/generate.mjs \
     "<記事本文>" \
     "public/images/{year}/{slug}/ogp.jpg" \
     "ogp.md" \
     "<画像ファイルパス1>" \
     "<画像ファイルパス2>" \
     ...
   ```

   - 画像ファイルは複数指定可能
   - 画像がない場合は画像引数なしで実行

5. **出力パスの規則**

   出力先: `public/images/{year}/{slug}/ogp.jpg`

   例:
   - `posts/2025/03/example.md` → `public/images/2025/example/ogp.jpg`
   - `posts/2026/01/new-article.md` → `public/images/2026/new-article/ogp.jpg`

6. **frontmatterの更新**

   生成後、記事のfrontmatterに `image` フィールドを追加または更新:
   ```yaml
   image: /images/{year}/{slug}/ogp.jpg
   ```

7. **結果の確認**

   生成された画像のパスをユーザーに報告します。

## パラメータ

generate.mjs の引数:

| 引数 | 必須 | 説明 |
|------|------|------|
| prompt | ✓ | 記事の本文（Markdown） |
| output_path | ✓ | 出力ファイルパス |
| system_prompt_file | ✓ | システムプロンプトファイル（`ogp.md`） |
| image_paths... | - | 参照画像ファイルパス（複数可） |

## 依存関係

- Node.js 18+
- GEMINI_API_KEY 環境変数
