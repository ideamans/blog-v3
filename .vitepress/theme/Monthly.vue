<script setup lang="ts">
import Dayjs from 'dayjs'
import { data as allPosts } from './posts.data.js'
import ArticleList from './ArticleList.vue'
import BlogSidebar from './BlogSidebar.vue'

const props = defineProps<{
  year: number
  month: number
}>()

const startingWith = Dayjs(new Date(props.year, props.month - 1, 1)).format(
  'YYYY-MM'
)
const posts = allPosts.filter((post) =>
  post.publishedAt?.startsWith(startingWith)
)
</script>

<template>
  <!-- パンくず -->
  <div class="py-4 px-5">
    <div class="max-w-6xl mx-auto">
      <div class="breadcrumbs text-xs">
        <ul>
          <li><a href="/">トップ</a></li>
          <li class="text-base-content/60">{{ year }}年{{ month }}月</li>
        </ul>
      </div>
    </div>
  </div>

  <section class="py-6 px-5 pb-12">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
      <div class="flex-1 min-w-0">
        <h1
          class="text-xl font-bold mb-2 pb-2.5 border-b-2 border-primary"
        >
          <span class="text-base-content/50 text-sm font-medium mr-2">月別</span>
          {{ year }}年{{ month }}月
        </h1>
        <p class="text-sm text-base-content/60 mb-6">
          {{ year }}年{{ month }}月に公開された記事の一覧です。
        </p>

        <ArticleList :posts="posts" />
      </div>

      <BlogSidebar :hide-featured-mobile="true" :hide-latest="true" />
    </div>
  </section>
</template>
