import Dayjs from 'dayjs'
import markdownItCjkFriendly from 'markdown-it-cjk-friendly'
import { defineConfig } from 'vitepress'
import { withMachineReadability } from 'vitepress-machine-readability'
import tailwindcss from '@tailwindcss/vite'
import { crosslinkPlugin } from './crosslink-plugin.js'
import { categories as categoryList } from '../categories.js'
import { getCategoryLabel } from '../categories.js'
// @ts-ignore ビルド済みの単一ファイル（services/knowledge が配布元）
import { buildKnowledgePackage } from './knowledge-indexer.mjs'

const categoryNameByBasename = new Map(categoryList.map((c) => [c.basename, c.name]))


export default defineConfig(
  withMachineReadability({
  mpa: true,
  lang: 'ja',
  vite: {
    plugins: [tailwindcss()]
  },
  title: `ideaman's Blog`,
  description:
    'フロントエンド高速化・画像軽量化で「Webフィットネス」を推進するアイデアマンズのブログ',
  cleanUrls: false,
  ignoreDeadLinks: true,
  // CLAUDE.md は社内向けのAI指示書、deadlink.md はリンク切れ調査のメモ。
  // どちらも読者向けではないので公開ページにしない
  srcExclude: ['CLAUDE.md', 'deadlink.md'],
  sitemap: {
    hostname: 'https://blog.ideamans.com',
    transformItems: (items) => {
      return items.filter((item) => {
        const url = item.url
        return !url.startsWith('CLAUDE')
      })
    }
  },
  rewrites: {
    'posts/:year/:month/:slug.md': ':year/:month/:slug.md',
    'categories/:category.md': ':category/index.md',
    'monthly/:year-:month.md': ':year/:month/index.md'
  },
  markdown: {
    config: (md) => {
      // CJK句読点の隣で **太字** が機能しない CommonMark の問題を回避
      md.use(markdownItCjkFriendly)
      md.use(crosslinkPlugin, {
        getSlug: (env) => {
          // posts/2025/01/example.md → example
          const match = env.relativePath?.match(/\/([^/]+)\.md$/)
          return match ? match[1] : 'unknown'
        }
      })
    }
  },
  head: [
    ['meta', { name: 'twitter:site', content: '@ideamans' }],
    // OGP画像を持っているので大きい方。summary だと小さいサムネイルになる
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // [
    //   'meta',
    //   {
    //     name: 'twitter:image',
    //     content: 'https://logo.ideamans.com/ogp.svg?width=800&phrase=blog'
    //   }
    // ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/blog.svg'
      }
    ],
    [
      'script',
      {
        async: '',
        src: 'https://tags.ideamans.com/scripts/blog.js'
      }
    ],
    [
      'script',
      {
        // ナレッジ基盤の検索UI。MPAなのでVueのハンドラは使えず素のJSで動く。
        // 本体（InstantSearch）は検索を始めた人だけが読む遅延ロード。
        src: '/knowledge-search.js',
        defer: ''
      }
    ],
    [
      'script',
      {
        async: '1',
        src: 'https://free.ranklet4.com/widgets/CAUCzJlNf1OGoYooG8uf.js'
      }
    ]
  ],
  buildEnd: async (config) => {
    // ナレッジパッケージ。deploy.sh が knowledge.ideamans.com へ送る。
    const pkg = await buildKnowledgePackage(config, {
      id: 'blog',
      title: "ideaman's Blog",
      description:
        'フロントエンド高速化・画像軽量化で「Webフィットネス」を推進するアイデアマンズの技術ブログ',
      origin: 'https://blog.ideamans.com',
      include: 'posts/**/*.md',
      out: 'knowledge/blog.zip',
      outline: { group_by: 'date' },
      search: { facets: ['category_labels', 'category_path', 'tags', 'author', 'year'] },
      map: (page) => {
        const fm = page.frontmatter
        if (fm.draft) return null

        // 旧Astrowind由来のキーと新キーが同じファイルに二重で入っている。
        // theme/posts.data.ts と同じ優先順で正規化する。
        const categories: string[] =
          Array.isArray(fm.categories) && fm.categories.length > 0
            ? fm.categories
            : typeof fm.category === 'string' && fm.category
              ? [fm.category]
              : []

        return {
          // rewrites で posts/ が URL から落ちるが createContentLoader は
          // 適用前の URL を返すので、ここで合わせる
          url: page.url.replace(/^\/posts\//, '/'),
          title: fm.title,
          summary: fm.excerpt ?? page.excerpt,
          published_at:
            fm.publishedAt ?? fm.publishedDate ?? fm.updatedAt ?? fm.updatedDate,
          updated_at: fm.updatedAt ?? fm.updatedDate,
          category_path: categories,
          category_labels: categories.map(getCategoryLabel),
          tags: fm.tags,
          author: fm.authorId ?? fm.author,
          image: fm.image,
        }
      },
    })
    console.log(
      `[knowledge] ${pkg.out} (${pkg.documents}件 / ${(pkg.bytes / 1024).toFixed(1)}KB / ${pkg.generation})`
    )
  },
  // 月別・カテゴリ・タグは動的ルートで、テンプレートの frontmatter が
  // そのまま title になる（111ページが揃って "monthly" になっていた）。
  // params からページ固有の title を作る。
  transformPageData: (pageData) => {
    const params = pageData.params as Record<string, string> | undefined
    if (!params) return
    // **説明文も動的ルートごとに作る。** 付けないとサイト共通の1文が
    // 147ページに出て、検索結果でどれも同じ説明になる。
    if (params.year && params.month) {
      const month = Number(params.month)
      return {
        title: `${params.year}年${month}月の記事`,
        description: `${params.year}年${month}月にアイデアマンズブログで公開した記事の一覧です。フロントエンド高速化・画像軽量化・WebP対応など、Webフィットネスに関する記事をまとめています。`
      }
    }
    if (params.category) {
      const label = getCategoryLabel(params.category)
      return {
        title: `${label}の記事`,
        description: `${label}に関する記事の一覧です。アイデアマンズブログでは、フロントエンドの高速化と画像の軽量化について、実測にもとづく知見を記事にしています。`
      }
    }
    if (params.tag) {
      const label = params.tagLabel ?? params.tag
      return {
        title: `${label} の記事`,
        description: `「${label}」の付いた記事の一覧です。アイデアマンズブログでは、フロントエンドの高速化と画像の軽量化について、実測にもとづく知見を記事にしています。`
      }
    }
  },
  transformHead: ({ head, pageData }) => {
    const siteUrl = 'https://blog.ideamans.com'

    // ページURLの構築
    const relativePath = pageData.relativePath ?? ''
    const pagePath = relativePath
      .replace(/\.md$/, '.html')
      .replace(/^posts\//, '')
      .replace(/(^|\/)index\.html$/, '$1')
    const pageUrl = `${siteUrl}/${pagePath}`

    // canonical URL
    head.push(['link', { rel: 'canonical', href: pageUrl }])

    // og:url
    head.push(['meta', { property: 'og:url', content: pageUrl }])

    // og:title（全ページ共通）
    const pageTitle = pageData.frontmatter?.title || `ideaman's Blog`
    head.push(['meta', { property: 'og:title', content: pageTitle }])

    // monthly/category/tag はテンプレートのダミーfrontmatter
    // (title: 'monthly' / 'category' / 'tag') を使用するアーカイブページ。
    // 記事JSON-LDは不適切なため、インデックス扱いでメタのみ出力する。
    // categoriesIndex / tagsIndex / tagPage フラグもアーカイブとして扱う。
    const templateTitles = new Set(['monthly', 'category', 'tag'])
    const isArchiveTemplate =
      templateTitles.has(pageData.frontmatter?.title) ||
      pageData.frontmatter?.categoriesIndex ||
      pageData.frontmatter?.tagsIndex ||
      pageData.frontmatter?.tagPage

    if (pageData.frontmatter?.index || !pageData.frontmatter?.title || isArchiveTemplate) {
      // インデックス/アーカイブページ
      const subTitle = pageData.frontmatter.subtext
      const description =
        pageData.frontmatter.description || pageData.frontmatter.subtext ||
        'フロントエンド高速化・画像軽量化で「Webフィットネス」を推進するアイデアマンズのブログ'

      head.push(['meta', { property: 'og:type', content: 'website' }])
      head.push(['meta', { property: 'og:description', content: description }])
      const indexOgImage = `${siteUrl}/ogp-bg.jpg`
      head.push([
        'meta',
        {
          property: 'og:image',
          content: indexOgImage
        }
      ])
      head.push([
        'meta',
        {
          property: 'twitter:image',
          content: indexOgImage
        }
      ])
    } else {
      // 記事ページ
      const title = pageData.frontmatter.title
      const authorId = pageData.frontmatter.authorId
      const publishedAt = pageData.frontmatter.publishedAt
      const image = pageData.frontmatter.image
      const description = pageData.frontmatter.excerpt || pageData.frontmatter.description || pageData.description || ''

      head.push(['meta', { property: 'og:type', content: 'article' }])

      if (description) {
        head.push(['meta', { property: 'og:description', content: description }])
      }

      // Twitter Card
      head.push([
        'meta',
        {
          name: 'twitter:title',
          content: title
        }
      ])

      // OGP画像
      const ogImage = image
        ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
        : `${siteUrl}/ogp-bg.jpg`

      head.push([
        'meta',
        {
          property: 'twitter:image',
          content: ogImage
        }
      ])

      head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])

      head.push(['meta', { property: 'og:image', content: ogImage }])

      // 構造化データ (JSON-LD) - Article
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        datePublished: Dayjs(publishedAt).format('YYYY-MM-DD'),
        author: {
          '@type': 'Person',
          name: authorId === 'kikuchi' ? '菊池 崇' : authorId === 'nose' ? '野瀬' : '宮永 邦彦',
          url: 'https://www.ideamans.com/'
        },
        publisher: {
          '@type': 'Organization',
          name: 'アイデアマンズ株式会社',
          url: 'https://www.ideamans.com/',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/blog.svg`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl
        },
        ...(ogImage ? { image: ogImage } : {}),
        ...(description ? { description } : {})
      }

      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(jsonLd)
      ])

      // 構造化データ (JSON-LD) - BreadcrumbList
      // ホーム > (カテゴリ) > 記事タイトル
      const firstCatBasename = Array.isArray(pageData.frontmatter.categories)
        ? pageData.frontmatter.categories[0]
        : undefined
      const firstCatName = firstCatBasename
        ? categoryNameByBasename.get(firstCatBasename)
        : undefined

      const breadcrumbItems: Array<{
        '@type': 'ListItem'
        position: number
        name: string
        item: string
      }> = [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${siteUrl}/` }
      ]
      if (firstCatBasename && firstCatName) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: firstCatName,
          item: `${siteUrl}/${firstCatBasename}/`
        })
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: pageUrl
        })
      } else {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: pageUrl
        })
      }

      const breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems
      }

      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(breadcrumbLd)
      ])
    }
  },
  appearance: false
},
  // 検索エンジンとAIから読める状態にする。既存の transformHead / buildEnd は潰さない
  {
    hostname: 'https://blog.ideamans.com/',
    organization: {
      name: 'アイデアマンズ株式会社',
      url: 'https://www.ideamans.com/'
    },
    // このサイトは概要文を excerpt で書いている
    map: { description: ['excerpt'] },
    defaultImage: '/ogp-bg.jpg',
    twitter: { site: '@ideamans', card: 'summary_large_image' },
    // フィードは /feed.xml の1本。旧 /atom.xml と /feed.rss はリダイレクトで受ける
    feed: { pattern: 'posts/**/*.md', title: "ideaman's Blog" },
    // Markdown の原本も配る（LLMがHTMLから本文を復元しなくて済む）
    markdownSource: true,
    lint: 'warn'
  })
)
