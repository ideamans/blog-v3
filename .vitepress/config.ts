import Dayjs from 'dayjs'
// import { defineConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

function indexImageUrl(bgUrl: string, subTitle: string): string {
  const ogp = new URL('https://banners.ideamans.com/banners/type-a')
  ogp.searchParams.set('bgUrl', bgUrl)

  ogp.searchParams.set('text0', `ideaman's Blog`)
  ogp.searchParams.set('text0width', '60%')

  ogp.searchParams.set('text1', subTitle)
  ogp.searchParams.set('text1width', '80%')

  return ogp.href
}

function articleImageUrl(bgUrl: string, title: string, meta: string): string {
  const ogp = new URL('https://banners.ideamans.com/banners/type-a')
  ogp.searchParams.set('bgUrl', bgUrl)

  ogp.searchParams.set('text0', `ideaman's Blog`)
  ogp.searchParams.set('text0width', '60%')

  ogp.searchParams.set('text1', title)
  ogp.searchParams.set('texts[1].fontSize', '5%')
  ogp.searchParams.set('texts[1].minWidth', '60%')
  ogp.searchParams.set('texts[1].maxWidth', '90%')
  ogp.searchParams.set('text2', meta)
  ogp.searchParams.set(`text[2].fontSize`, '3%')
  ogp.searchParams.set(`text[2].minWidth`, '30%')
  ogp.searchParams.set(`text[2].maxWidth`, '40%')

  return ogp.href
}

function articleTwitterImageUrl(slug: string): string {
  const image = new URL('https://alogorithm2.ideamans.com/v2/rect.png')
  image.searchParams.set('seed', [slug, 'blog'].join('@'))
  image.searchParams.set('width', '256')
  image.searchParams.set('height', '256')
  return image.href
}

function indexTwitterImageUrl(): string {
  const image = new URL('https://alogorithm2.ideamans.com/v2/rect.png')
  image.searchParams.set('seed', 'blog')
  image.searchParams.set('width', '256')
  image.searchParams.set('height', '256')
  return image.href
}

export default defineConfig({
  mpa: true,
  title: `ideaman's Blog`,
  description:
    'フロントエンド高速化・画像軽量化で「Webフィットネス」を推進するアイデアマンズのブログ',
  cleanUrls: false,
  ignoreDeadLinks: true,
  rewrites: {
    'posts/:year/:month/:slug.md': ':year/:month/:slug.md',
    'categories/:category.md': ':category/index.md',
    'monthly/:year-:month.md': ':year/:month/index.md'
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
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'NYHGSGQV',
    //     'data-spa': 'auto',
    //     defer: ''
    //   }
    // ]
    [
      'script',
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBS7ZCP');`
    ],
    // [
    //   'script',
    //   {},
    //   `
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());

    // gtag('config', 'G-N79QY0ZG5M');
    // `
    // ],
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
    const ogpBgUrl = 'https://blog.ideamans.com/ogp-bg.jpg'

    if (pageData.frontmatter?.index || !pageData.frontmatter?.title) {
      // インデックスページ
      const subTitle = pageData.frontmatter.subtext

      head.push([
        'meta',
        {
          property: 'og:image',
          content: indexImageUrl(ogpBgUrl, subTitle)
        }
      ])
      head.push([
        'meta',
        {
          property: 'twitter:image',
          content: indexTwitterImageUrl()
        }
      ])
    } else {
      // 記事ページ
      const title = pageData.frontmatter.title
      const authorId = pageData.frontmatter.authorId
      const date = Dayjs(pageData.frontmatter.publishedAt).format('YYYY/MM/DD')
      const image = pageData.frontmatter.image

      // Twitter Card
      head.push([
        'meta',
        {
          name: 'twitter:title',
          content: title
        }
      ])
      head.push([
        'meta',
        {
          property: 'twitter:image',
          content: articleTwitterImageUrl(
            pageData.relativePath ?? pageData.filePath ?? ''
          )
        }
      ])

      // OGP
      head.push([
        'meta',
        {
          property: 'og:image',
          content:
            image ?? articleImageUrl(ogpBgUrl, title, `${date} @${authorId}`)
        }
      ])
    }
  },
  appearance: false
})
