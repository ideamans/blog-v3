<script setup lang="ts">
import type { Post } from './posts.data.js'
import CategoryBadge from './CategoryBadge.vue'
import ArticleThumbnail from './ArticleThumbnail.vue'

defineProps<{
  posts: Post[]
}>()

function primaryCategory(p: Post): string {
  return p.categories?.[0] ?? ''
}

function displayDate(s?: string): string {
  return (s ?? '').slice(0, 10)
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <a
      v-for="post in posts"
      :key="post.url"
      :href="post.url"
      class="group flex gap-4 items-start"
    >
      <div
        class="w-40 min-w-40 sm:w-56 sm:min-w-56 aspect-[2/1] rounded overflow-hidden shrink-0"
      >
        <ArticleThumbnail :src="post.image" :alt="post.title" />
      </div>
      <div class="py-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap mb-2">
          <CategoryBadge
            v-if="primaryCategory(post)"
            :category="primaryCategory(post)"
            size="xs"
            :link="false"
          />
          <span class="text-xs text-base-content/50">{{
            displayDate(post.publishedAt)
          }}</span>
        </div>
        <h3
          class="text-base font-bold leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2"
        >
          {{ post.title }}
        </h3>
        <p
          v-if="post.excerpt"
          class="text-sm text-base-content/60 leading-relaxed line-clamp-2"
        >{{ post.excerpt }}</p>
      </div>
    </a>

    <div
      v-if="posts.length === 0"
      class="text-center py-12 text-base-content/40"
    >
      記事はありません。
    </div>
  </div>
</template>
