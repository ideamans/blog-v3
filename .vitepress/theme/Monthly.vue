<script setup lang="ts">
import Dayjs from 'dayjs'
import { data as allPosts } from './posts.data.js'
import ArticleList from './ArticleList.vue'

const props = defineProps<{
  year: number
  month: number
}>()

const startingWith = Dayjs(new Date(props.year, props.month - 1, 1)).format(
  'YYYY-MM'
)
const posts = allPosts.filter((post) => {
  return post.publishedAt?.startsWith(startingWith)
})
</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-2xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-3xl sm:leading-10 md:text-5xl md:leading-14"
      >
        {{ year }}年{{ month }}月
      </h1>
    </div>
    <ArticleList :posts="posts" />
  </div>
</template>
