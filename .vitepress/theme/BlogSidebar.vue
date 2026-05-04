<script setup lang="ts">
import { data as posts } from './posts.data.js'
import { categories } from '../../categories.js'

defineProps<{
  hideFeaturedMobile?: boolean
  hideLatest?: boolean
}>()

const latestPosts = posts.slice(0, 3)

// 記事が1件以上あるカテゴリのみ
const visibleCategories = categories.filter((cat) =>
  posts.some((p) => p.categories?.includes(cat.basename))
)

// 全記事のタグ（記事数順、上位30件）
const tagCounts = new Map<string, number>()
posts.forEach((p) =>
  (p.tags ?? []).forEach((t) => tagCounts.set(t, (tagCounts.get(t) || 0) + 1))
)
const topTags = Array.from(tagCounts.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, 30)
  .map(([tag]) => tag)
</script>

<template>
  <aside class="w-full lg:w-72 shrink-0 space-y-6">
    <!-- 注目サービスバナー -->
    <div :class="{ 'hidden lg:block': hideFeaturedMobile }">
      <a
        href="https://www.ideamans.com/"
        target="_blank"
        rel="noopener"
        class="block bg-gradient-to-br from-primary to-accent rounded-lg p-5 text-white text-center hover:opacity-90 transition-opacity"
      >
        <div class="font-bold text-sm mb-1">アイデアマンズ株式会社</div>
        <p class="text-xs opacity-80">
          フロントエンド高速化・画像軽量化で<br />「Webフィットネス」を推進
        </p>
      </a>
    </div>

    <!-- RSS -->
    <div>
      <a href="/feed.rss" class="btn btn-outline btn-sm gap-2 w-full">
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
        新しい記事をRSSで受け取る
      </a>
    </div>

    <!-- 7日間の人気ランキング (Ranklet4) -->
    <div>
      <h3 class="text-sm font-bold mb-3 pb-2 border-b border-base-300">
        7日間の人気ランキング
      </h3>
      <aside id="ranklet4-CAUCzJlNf1OGoYooG8uf"></aside>
    </div>

    <!-- カテゴリ -->
    <div>
      <h3 class="text-sm font-bold mb-3 pb-2 border-b border-base-300">
        カテゴリー
      </h3>
      <ul class="menu menu-sm p-0 gap-0">
        <li v-for="cat in visibleCategories" :key="cat.basename">
          <a :href="`/${cat.basename}/index.html`" class="justify-between">
            {{ cat.name }}
            <span class="badge badge-ghost badge-xs">{{
              posts.filter((p) => p.categories?.includes(cat.basename)).length
            }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- タグ（リンク無効・テキストのみ） -->
    <div v-if="topTags.length > 0">
      <h3 class="text-sm font-bold mb-3 pb-2 border-b border-base-300">
        タグ
      </h3>
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in topTags"
          :key="tag"
          class="badge badge-outline badge-sm whitespace-nowrap"
          >#{{ tag }}</span
        >
      </div>
    </div>

    <!-- 最新記事 -->
    <div v-if="!hideLatest">
      <h3 class="text-sm font-bold mb-3 pb-2 border-b border-base-300">
        最新記事
      </h3>
      <div class="flex flex-col gap-3">
        <a
          v-for="post in latestPosts"
          :key="post.url"
          :href="post.url"
          class="group block card bg-base-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
          <figure class="bg-base-300 aspect-[2/1] overflow-hidden">
            <img
              v-if="post.image"
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full flex items-center justify-center text-base-content/20"
            >
              <img src="/blog.svg" alt="" class="w-10 h-10 opacity-30" />
            </div>
          </figure>
          <div class="p-3">
            <div
              class="text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors"
            >
              {{ post.title }}
            </div>
            <div class="text-xs text-base-content/50 mt-1">
              {{ (post.publishedAt ?? '').slice(0, 10) }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </aside>
</template>
