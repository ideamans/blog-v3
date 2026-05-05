<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as allPosts } from './posts.data.js'
import { slugifyTag } from '../../categories.js'
import ArticleList from './ArticleList.vue'
import BlogSidebar from './BlogSidebar.vue'

const { params } = useData()

const tagSlug = computed(() => (params.value?.tag as string) ?? '')
const tagLabel = computed(
  () => (params.value?.tagLabel as string) ?? tagSlug.value
)

const posts = computed(() =>
  allPosts.filter((p) =>
    (p.tags ?? []).some((t) => slugifyTag(t) === tagSlug.value)
  )
)
</script>

<template>
  <!-- パンくず -->
  <div class="py-4 px-5">
    <div class="max-w-6xl mx-auto">
      <div class="breadcrumbs text-xs">
        <ul>
          <li><a href="/">トップ</a></li>
          <li><a href="/tags.html">タグ</a></li>
          <li class="text-base-content/60">#{{ tagLabel }}</li>
        </ul>
      </div>
    </div>
  </div>

  <section class="py-6 px-5 pb-12">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
      <div class="flex-1 min-w-0">
        <h1 class="text-xl font-bold mb-2 pb-2.5 border-b-2 border-primary">
          <span class="text-base-content/50 text-sm font-medium mr-2">タグ</span>
          #{{ tagLabel }}
        </h1>
        <p class="text-sm text-base-content/60 mb-6">
          「{{ tagLabel }}」タグの記事一覧です。
        </p>

        <ArticleList :posts="posts" />
      </div>

      <BlogSidebar :hide-featured-mobile="true" :hide-latest="true" />
    </div>
  </section>
</template>
