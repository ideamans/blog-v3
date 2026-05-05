<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import Category from './Category.vue'
import Monthly from './Monthly.vue'
import CategoriesIndex from './CategoriesIndex.vue'
import TagsIndex from './TagsIndex.vue'
import Tag from './Tag.vue'
import NotFound from './NotFound.vue'
import { categories } from '../../categories.js'
import { data as posts } from './posts.data.js'
import Dayjs from 'dayjs'

const { page, frontmatter } = useData()
const { path } = useRoute()
const router = useRouter()

const category = computed(() => {
  const matches = path.match(/^\/(.+?)\/(index.html)?$/)
  if (!matches) return null
  return categories.find((c) => c.basename === matches[1])
})

const yearMonthIndex = computed(() => {
  const matches = path.match(/^\/(\d{4})\/(\d{2})\/(index.html)?$/)
  if (matches) {
    return {
      year: Number(matches[1]),
      month: Number(matches[2])
    }
  }
  return null
})

// 記事が1件以上あるカテゴリのみ表示（ヘッダー/フッター用）
const visibleCategories = computed(() =>
  categories.filter((c) =>
    posts.some((p) => p.categories?.includes(c.basename))
  )
)

// ハンバーガーを開いた状態でルート遷移したらトップへスクロール（VitePress 既定）
onMounted(() => {
  router.onAfterRouteChanged = () => {
    const cb = document.getElementById('mobile-menu') as HTMLInputElement | null
    if (cb) cb.checked = false
    window.scrollTo({ top: 0 })
  }
})
</script>

<template>
  <div class="antialiased min-h-screen flex flex-col bg-base-100">
    <!-- ヘッダー -->
    <header class="bg-base-100 border-b border-base-300 sticky top-0 z-30">
      <div
        class="max-w-6xl mx-auto px-5 h-16 md:h-20 flex items-center"
      >
        <a href="/" class="flex items-center gap-3 shrink-0" aria-label="ideaman's Blog">
          <img src="/blog-inline-custom.svg" alt="ideaman's Blog" class="h-8 md:h-10 w-auto" />
        </a>

        <!-- デスクトップナビ -->
        <nav class="ml-auto hidden md:flex items-center gap-4">
          <a
            v-for="cat in visibleCategories.slice(0, 5)"
            :key="cat.basename"
            :href="`/${cat.basename}/index.html`"
            class="text-xs font-medium hover:text-primary transition-colors whitespace-nowrap"
            >{{ cat.name }}</a
          >
          <a
            href="/categories.html"
            class="text-xs font-medium hover:text-primary transition-colors whitespace-nowrap"
            >カテゴリ一覧</a
          >
          <a
            href="/tags.html"
            class="text-xs font-medium hover:text-primary transition-colors whitespace-nowrap"
            >タグ一覧</a
          >
          <a
            href="/feed.rss"
            class="btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-warning"
            title="RSS"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="6.18" cy="17.82" r="2.18" />
              <path
                d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"
              />
            </svg>
          </a>
        </nav>

        <!-- モバイル ハンバーガー -->
        <div class="ml-auto md:hidden relative">
          <input id="mobile-menu" type="checkbox" class="peer hidden" />
          <label
            for="mobile-menu"
            class="btn btn-ghost btn-sm btn-square"
            aria-label="メニューを開く"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <label
            for="mobile-menu"
            class="fixed inset-0 bg-black/40 z-40 hidden peer-checked:block"
          ></label>
          <nav
            class="fixed top-0 right-0 h-full w-72 bg-base-100 shadow-xl z-50 p-6 translate-x-full peer-checked:translate-x-0 transition-transform duration-200 overflow-y-auto"
          >
            <label
              for="mobile-menu"
              class="btn btn-ghost btn-sm btn-square absolute top-4 right-4"
              aria-label="閉じる"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
            <div class="font-bold text-sm mb-4 text-base-content/60">
              カテゴリー
            </div>
            <ul class="menu menu-sm p-0 gap-1">
              <li v-for="cat in visibleCategories" :key="cat.basename">
                <a :href="`/${cat.basename}/index.html`" class="text-sm">{{
                  cat.name
                }}</a>
              </li>
            </ul>
            <div class="mt-4 pt-4 border-t border-base-300 flex flex-col gap-2">
              <a href="/categories.html" class="btn btn-ghost btn-sm gap-2 justify-start"
                >カテゴリ一覧</a
              >
              <a href="/tags.html" class="btn btn-ghost btn-sm gap-2 justify-start"
                >タグ一覧</a
              >
              <a href="/feed.rss" class="btn btn-ghost btn-sm gap-2 justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="6.18" cy="17.82" r="2.18" />
                  <path
                    d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"
                  />
                </svg>
                RSS
              </a>
              <a
                href="https://www.ideamans.com/"
                target="_blank"
                rel="noopener"
                class="btn btn-ghost btn-sm gap-2 justify-start"
                >アイデアマンズ株式会社 →</a
              >
            </div>
          </nav>
        </div>
      </div>
    </header>

    <!-- コンテンツ -->
    <main class="flex-1">
      <Home v-if="frontmatter.index" />
      <CategoriesIndex v-else-if="frontmatter.categoriesIndex" />
      <TagsIndex v-else-if="frontmatter.tagsIndex" />
      <Tag v-else-if="frontmatter.tagPage" />
      <Category v-else-if="category" :category="category" />
      <Monthly
        v-else-if="yearMonthIndex"
        :year="yearMonthIndex.year"
        :month="yearMonthIndex.month"
      />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>

    <!-- フッター -->
    <footer class="bg-neutral text-neutral-content pt-10 pb-6 mt-12">
      <div class="max-w-6xl mx-auto px-5">
        <div class="flex items-center gap-3 mb-8">
          <img src="/logo.svg" alt="" class="h-8 w-auto invert" />
          <span class="text-sm font-bold opacity-70">Blog</span>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
          <div class="col-span-2">
            <div class="font-bold mb-3 opacity-80">
              <a href="/categories.html" class="hover:opacity-100 transition-opacity">カテゴリー</a>
            </div>
            <ul class="grid grid-cols-2 gap-x-4 gap-y-2 opacity-70">
              <li v-for="cat in visibleCategories" :key="cat.basename">
                <a
                  :href="`/${cat.basename}/index.html`"
                  class="hover:opacity-100 transition-opacity"
                  >{{ cat.name }}</a
                >
              </li>
            </ul>
          </div>
          <div>
            <div class="font-bold mb-3 opacity-80">アーカイブ</div>
            <ul class="space-y-2 opacity-70">
              <li>
                <a href="/categories.html" class="hover:opacity-100 transition-opacity"
                  >カテゴリ一覧</a
                >
              </li>
              <li>
                <a href="/tags.html" class="hover:opacity-100 transition-opacity"
                  >タグ一覧</a
                >
              </li>
              <li>
                <a href="/feed.rss" class="hover:opacity-100 transition-opacity"
                  >RSS Feed</a
                >
              </li>
            </ul>
          </div>
          <div>
            <div class="font-bold mb-3 opacity-80">運営</div>
            <ul class="space-y-2 opacity-70">
              <li>
                <a
                  href="https://www.ideamans.com/"
                  target="_blank"
                  rel="noopener"
                  class="hover:opacity-100 transition-opacity"
                  >アイデアマンズ株式会社</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-center text-xs opacity-50 pt-4 border-t border-white/20"
        >
          Copyright © {{ Dayjs().year() }} - All rights reserved by ideaman's Inc.
        </div>
      </div>
    </footer>
  </div>
</template>
