import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import Dayjs from 'dayjs'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://blog.ideamans.com`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'アイデアマンズブログ',
    description:
      'サイトの高速化「Webフィットネス」を使命とするアイデアマンズ株式会社のブログ',
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: 'https://alogorithm2.ideamans.com/v2/rect.svg?width=800&seed=notes',
    favicon:
      'https://alogorithm2.ideamans.com/v2/icon.svg?width=128&seed=notes',
    copyright: `Copyright (c) 2017- ideaman's Inc.`
  })

  const posts = await createContentLoader('posts/**/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts
    .slice(0, 10)
    .sort(
      (a, b) =>
        +Dayjs(b.frontmatter?.publishedAt) - +Dayjs(a.frontmatter?.publishedAt)
    )

  for (const { url, excerpt, frontmatter, html } of posts) {
    const rewriteUrl = url.replace(/^\/posts\//, '/')
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${rewriteUrl}`,
      link: `${baseUrl}${rewriteUrl}`,
      description: excerpt,
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined
        }
      ],
      date: frontmatter.publishedAt
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
