import { createContentLoader } from 'vitepress'
import Dayjs from 'dayjs'

export interface Post {
  url: string

  title: string
  excerpt?: string
  tags: string[]
  image?: string

  // 公開日（旧 publishedDate / 新 publishedAt 両対応で正規化）
  publishedAt: string

  // カテゴリ（配列で複数可、basename 単位）
  categories: string[]

  // 著者
  authorId?: string
  author?: string

  recommended?: boolean
}

declare const data: Post[]
export { data }

function normalizeCategories(fm: Record<string, any>): string[] {
  if (Array.isArray(fm.categories) && fm.categories.length > 0) {
    return fm.categories
  }
  if (typeof fm.category === 'string' && fm.category) {
    return [fm.category]
  }
  return []
}

function normalizePublishedAt(fm: Record<string, any>): string {
  return (
    fm.publishedAt ??
    fm.publishedDate ??
    fm.updatedAt ??
    fm.updatedDate ??
    ''
  )
}

export default createContentLoader('posts/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        return {
          ...frontmatter,
          url: url.replace(/^\/posts\//, '/'),
          excerpt: excerpt || '',
          publishedAt: normalizePublishedAt(frontmatter),
          categories: normalizeCategories(frontmatter),
          tags: frontmatter.tags ?? [],
          authorId: frontmatter.authorId ?? frontmatter.author
        }
      })
      .sort((a, b) => +Dayjs(b.publishedAt) - +Dayjs(a.publishedAt))
  }
})
