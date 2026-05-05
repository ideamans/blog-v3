import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const POSTS_DIR = join(__dirname, '..', 'posts')

function slugifyTag(tag) {
  return String(tag).toLowerCase().replace(/\s+/g, '-')
}

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      out.push(...walk(full))
    } else if (full.endsWith('.md')) {
      out.push(full)
    }
  }
  return out
}

export default {
  paths() {
    const labelBySlug = new Map()
    for (const file of walk(POSTS_DIR)) {
      const raw = readFileSync(file, 'utf-8')
      const { data } = matter(raw)
      const tags = data.tags
      if (Array.isArray(tags)) {
        for (const t of tags) {
          if (!t) continue
          const slug = slugifyTag(t)
          if (!labelBySlug.has(slug)) labelBySlug.set(slug, t)
        }
      }
    }
    return Array.from(labelBySlug.entries()).map(([slug, label]) => ({
      params: { tag: slug, tagLabel: label }
    }))
  }
}
