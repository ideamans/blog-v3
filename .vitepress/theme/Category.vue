<script setup lang="ts">
import { Category } from './categories.data.js'
import { data as allPosts } from './posts.data.js'

const props = defineProps<{
  category: Category
}>()

const posts = allPosts.filter((post) => {
  return post.categories?.includes(props.category.basename)
})
</script>

<template>
  <div>{{ posts }}</div>
</template>
