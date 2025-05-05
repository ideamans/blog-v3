import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import Dayjs from 'dayjs'
import { createContentLoader, type SiteConfig } from 'vitepress'
import { authors } from '../authors.js'

const baseUrl = `https://blog.ideamans.com`

export async function genFeed(config: SiteConfig) {
  const authorsMap = new Map(authors.map((author) => [author.username, author]))

  const feed = new Feed({
    title: 'アイデアマンズブログ',
    description:
      'サイトの高速化「Webフィットネス」を使命とするアイデアマンズ株式会社のブログ',
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: 'https://alogorithm2.ideamans.com/v2/rect.svg?width=800&seed=notes',
    favicon: 'https://blog.ideamans.com/blog.svg',
    copyright: `Copyright (c) 2017- ideaman's Inc.`
  })

  const posts = await createContentLoader('posts/**/*.md', {
    excerpt: true,
    render: true
  }).load()

  const sorted = posts
    .sort(
      (a, b) =>
        +Dayjs(b.frontmatter?.publishedAt) - +Dayjs(a.frontmatter?.publishedAt)
    )
    .slice(0, 10)

  for (const { url, excerpt, frontmatter, html } of sorted) {
    const text =
      html
        .replaceAll(/<[^>]*>/g, '')
        .replaceAll(/\n/g, '')
        .replaceAll('&ZeroWidthSpace;', '')
        .slice(0, 200) + '...'
    const rewriteUrl = url.replace(/^\/posts\//, '/')
    const author = authorsMap.get(frontmatter.author)

    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${rewriteUrl}`,
      link: `${baseUrl}${rewriteUrl}`,
      description: text,
      content: text,
      author: [
        {
          name: author?.username
        }
      ],
      date: frontmatter.publishedAt
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
