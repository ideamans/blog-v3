export interface Category {
  basename: string
  name: string
}

const categories: Category[] = [
  {
    basename: 'core-web-vitals',
    name: 'Core Web Vitals'
  },

  {
    basename: 'cvr',
    name: 'CVR改善'
  },

  {
    basename: 'lighthouse',
    name: 'Lighthouse'
  },

  {
    basename: 'mt-plugins',
    name: 'MTプラグイン'
  },

  {
    basename: 'pagespeed-insights',
    name: 'PageSpeed Insights'
  },

  {
    basename: 'seo',
    name: 'SEO'
  },

  {
    basename: 'webp',
    name: 'WebP'
  },

  {
    basename: 'web-imaging',
    name: 'Web画像最適化'
  },

  {
    basename: 'event',
    name: 'イベント・セミナー'
  },

  {
    basename: 'cloud-cost',
    name: 'クラウドコスト削減'
  },

  {
    basename: 'case-study',
    name: '事例紹介'
  },

  {
    basename: 'ranklet',
    name: '人気ランキング表示 Ranklet'
  },

  {
    basename: 'pr',
    name: '広報'
  },

  {
    basename: 'tech',
    name: '技術系小ネタ'
  },

  {
    basename: 'journal',
    name: '月報'
  },

  {
    basename: 'lightfile',
    name: '画像軽量化AI LightFile'
  },

  {
    basename: 'performance',
    name: '表示高速化'
  },

  {
    basename: 'reports',
    name: '調査レポート'
  }
]

export { categories }
