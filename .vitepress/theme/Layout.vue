<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import Category from './Category.vue'
import Monthly from './Monthly.vue'
import NotFound from './NotFound.vue'
import { data as categories } from './categories.data.js'

const { page, frontmatter } = useData()
const { path } = useRoute()

const category = computed(() => {
  const matches = path.match(/^\/(.+?)\/(index.html)?$/)
  if (!matches) return null
  return categories.find((category) => category.basename === matches[1])
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
</script>

<template>
  <div class="antialiased dark:bg-slate-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a
          class="text-3xl flex flex-row items-center"
          href="/"
          aria-label="ideaman's Notes"
        >
          <img
            class="inline-block mr-2"
            style="width: 196px; height: 43px"
            alt="logo"
            src="/logo.svg"
          />
          <span
            v-if="!frontmatter.index"
            class="hidden md:inline dark:text-white"
            >Blog</span
          >
        </a>
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <!-- <a class="hover:text-gray-700 dark:hover:text-gray-200" href="https://github.com/ideamans/notes"
            target="_blank" rel="noopener"><span class="hidden sm:inline">GitHub </span>Source</a>
          <span class="mr-2 ml-2">·</span> -->
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="/feed.rss"
            >RSS<span class="hidden sm:inline"> Feed</span></a
          >
          <span class="mr-2 ml-2">·</span>
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://www.ideamans.com/"
            target="_blank"
            rel="noopener"
            >アイデアマンズ株式会社 →</a
          >
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <Category v-else-if="category" :category="category" />
      <Monthly
        v-else-if="yearMonthIndex"
        :year="yearMonthIndex.year"
        :month="yearMonthIndex.month"
      />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
