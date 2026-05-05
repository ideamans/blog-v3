<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from './posts.data.js'
import { categories } from '../../categories.js'
import BlogSidebar from './BlogSidebar.vue'
import CategoryBadge from './CategoryBadge.vue'

const visibleCategories = computed(() =>
  categories
    .map((c) => ({
      ...c,
      count: posts.filter((p) => p.categories?.includes(c.basename)).length
    }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
)
</script>

<template>
  <!-- パンくず -->
  <div class="py-4 px-5">
    <div class="max-w-6xl mx-auto">
      <div class="breadcrumbs text-xs">
        <ul>
          <li><a href="/">トップ</a></li>
          <li class="text-base-content/60">カテゴリ一覧</li>
        </ul>
      </div>
    </div>
  </div>

  <section class="py-6 px-5 pb-12">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
      <div class="flex-1 min-w-0">
        <h1 class="text-xl font-bold mb-2 pb-2.5 border-b-2 border-primary">
          <span class="text-base-content/50 text-sm font-medium mr-2">アーカイブ</span>
          カテゴリ一覧
        </h1>
        <p class="text-sm text-base-content/60 mb-6">
          記事数の多い順に並んでいます。
        </p>

        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li v-for="cat in visibleCategories" :key="cat.basename">
            <a
              :href="`/${cat.basename}/index.html`"
              class="flex items-center justify-between gap-3 p-4 rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
            >
              <span class="flex items-center gap-3 min-w-0">
                <CategoryBadge
                  :category="cat.basename"
                  :link="false"
                  size="sm"
                />
              </span>
              <span class="badge badge-ghost shrink-0">{{ cat.count }}</span>
            </a>
          </li>
        </ul>
      </div>

      <BlogSidebar :hide-featured-mobile="true" :hide-latest="true" />
    </div>
  </section>
</template>
