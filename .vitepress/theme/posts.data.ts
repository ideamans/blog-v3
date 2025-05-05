import { createContentLoader } from 'vitepress'
import Dayjs from 'dayjs'

export interface Post {
  url: string

  title: string
  excerpt?: string
  updatedDate: string
  publishedDate: string
  tags: string[]
  author: string
  image?: string
  category: string

  updatedAt: string
  publishedAt: string
  categories?: string[]
  categoryLabels?: string[]
  authorId?: string
  subTheme?: string
  recommended: boolean
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        ...frontmatter,

        url: url.replace(/^\/posts\//, '/')
      }))
      .sort((a, b) => Dayjs(b.publishedAt) - Dayjs(a.publishedAt))
  }
})
