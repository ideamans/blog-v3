export interface Category {
  basename: string
  name: string
  badgeClass: string
}

const categories: Category[] = [
  { basename: 'core-web-vitals', name: 'Core Web Vitals', badgeClass: 'badge-primary' },
  { basename: 'cvr', name: 'CVR改善', badgeClass: 'badge-secondary' },
  { basename: 'lighthouse', name: 'Lighthouse', badgeClass: 'badge-accent' },
  { basename: 'mt-plugins', name: 'MTプラグイン', badgeClass: 'badge-primary' },
  { basename: 'pagespeed-insights', name: 'PageSpeed Insights', badgeClass: 'badge-secondary' },
  { basename: 'seo', name: 'SEO', badgeClass: 'badge-accent' },
  { basename: 'webp', name: 'WebP', badgeClass: 'badge-primary' },
  { basename: 'web-imaging', name: 'Web画像最適化', badgeClass: 'badge-secondary' },
  { basename: 'event', name: 'イベント・セミナー', badgeClass: 'badge-accent' },
  { basename: 'cloud-cost', name: 'クラウドコスト削減', badgeClass: 'badge-primary' },
  { basename: 'case-study', name: '事例紹介', badgeClass: 'badge-secondary' },
  { basename: 'ranklet', name: '人気ランキング表示 Ranklet', badgeClass: 'badge-accent' },
  { basename: 'pr', name: '広報', badgeClass: 'badge-primary' },
  { basename: 'tech', name: '技術系小ネタ', badgeClass: 'badge-secondary' },
  { basename: 'journal', name: '月報', badgeClass: 'badge-accent' },
  { basename: 'lightfile', name: '画像軽量化AI LightFile', badgeClass: 'badge-primary' },
  { basename: 'performance', name: '表示高速化', badgeClass: 'badge-secondary' },
  { basename: 'reports', name: '調査レポート', badgeClass: 'badge-accent' }
]

const byBasename = new Map(categories.map((c) => [c.basename, c]))

export function getCategoryLabel(basename: string): string {
  return byBasename.get(basename)?.name ?? basename
}

export function getCategoryBadgeClass(basename: string): string {
  return byBasename.get(basename)?.badgeClass ?? 'badge-outline'
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-')
}

export { categories }
