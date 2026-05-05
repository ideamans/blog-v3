import Dayjs from 'dayjs'
import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { genFeed } from './genFeed.js'
import { crosslinkPlugin } from './crosslink-plugin.js'
import { categories as categoryList } from '../categories.js'

const categoryNameByBasename = new Map(categoryList.map((c) => [c.basename, c.name]))


export default defineConfig({
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
  srcExclude: ['CLAUDE.md'],
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
    ['meta', { name: 'twitter:card', content: 'summary' }],
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
        async: '1',
        src: 'https://free.ranklet4.com/widgets/CAUCzJlNf1OGoYooG8uf.js'
      }
    ]
  ],
  buildEnd: genFeed,
  transformHead: ({ head, pageData }) => {
    const siteUrl = 'https://blog.ideamans.com'

    // ページURLの構築
    const relativePath = pageData.relativePath ?? ''
    const pagePath = relativePath
      .replace(/\.md$/, '.html')
      .replace(/^posts\//, '')
      .replace(/index\.html$/, '')
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
})
