<script setup lang="ts">
import { data as categories } from './categories.data.js'

const props = defineProps<{
  categories: string[]
}>()

const byBasename = new Map(categories.map((c) => [c.basename, c]))
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <span
      v-for="category of props.categories"
      :key="category"
      class="badge badge-outline badge-neutral"
      >{{ byBasename.get(category)?.name ?? category }}</span
    >
  </div>
</template>
