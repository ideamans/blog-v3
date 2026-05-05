<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from './posts.data.js'
import { slugifyTag } from '../../categories.js'
import BlogSidebar from './BlogSidebar.vue'

const tagsByCount = computed(() => {
  const map = new Map<string, number>()
  posts.forEach((p) =>
    (p.tags ?? []).forEach((t) => map.set(t, (map.get(t) || 0) + 1))
  )
  return Array.from(map.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
})

const maxCount = computed(() => tagsByCount.value[0]?.count ?? 1)

function tagSize(count: number): string {
  const ratio = count / maxCount.value
  const px = 12 + Math.round(ratio * 14)
  return `${px}px`
}
</script>

<template>
  <!-- パンくず -->
  <div class="py-4 px-5">
    <div class="max-w-6xl mx-auto">
      <div class="breadcrumbs text-xs">
        <ul>
          <li><a href="/">トップ</a></li>
          <li class="text-base-content/60">タグ一覧</li>
        </ul>
      </div>
    </div>
  </div>

  <section class="py-6 px-5 pb-12">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
      <div class="flex-1 min-w-0">
        <h1 class="text-xl font-bold mb-2 pb-2.5 border-b-2 border-primary">
          <span class="text-base-content/50 text-sm font-medium mr-2">アーカイブ</span>
          タグ一覧
        </h1>
        <p class="text-sm text-base-content/60 mb-6">
          よく使われているタグを大きく表示しています。
        </p>

        <div class="flex flex-wrap gap-2 items-baseline">
          <a
            v-for="t in tagsByCount"
            :key="t.tag"
            :href="`/tags/${slugifyTag(t.tag)}.html`"
            class="badge badge-outline hover:bg-primary hover:text-primary-content transition-colors whitespace-nowrap"
            :style="{ fontSize: tagSize(t.count) }"
          >
            #{{ t.tag }}
            <span class="opacity-50 ml-1 text-xs">({{ t.count }})</span>
          </a>
        </div>
      </div>

      <BlogSidebar :hide-featured-mobile="true" :hide-latest="true" />
    </div>
  </section>
</template>
