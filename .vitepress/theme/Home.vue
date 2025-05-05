<script setup lang="ts">
import Date from './Date.vue'
import { data as posts } from './posts.data.js'
import { data as categories } from './categories.data.js'
import { useData } from 'vitepress'
import ArticleList from './ArticleList.vue'

const { frontmatter } = useData()

const categoriesByBasename = new Map(categories.map((c) => [c.basename, c]))
const mainCategories = [
  'pagespeed-insights',
  'lightfile',
  'cloud-cost',
  'webp',
  'ranklet'
]
  .map((basename) => categoriesByBasename.get(basename))
  .filter(Boolean)
</script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-slate-200/5">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        {{ frontmatter.title }}
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-white">
        {{ frontmatter.subtext }}
      </p>
      <ul
        class="menu bg-base-200 menu-horizontal rounded-box menu-sm md:menu-md"
      >
        <li v-for="category of mainCategories">
          <a :href="`/${category.basename}/`">{{ category.name }}</a>
        </li>
      </ul>
    </div>
    <ArticleList :posts="posts.slice(0, 20)" />
  </div>
</template>
