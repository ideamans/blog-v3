<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
}>()
</script>

<template>
  <figure
    class="bg-base-300 aspect-[2/1] flex items-center justify-center text-base-content/30 text-sm overflow-hidden"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt || ''"
      class="w-full h-full object-cover"
    />
    <div v-else class="flex items-center justify-center w-full h-full">
      <img src="/blog.svg" alt="" class="w-12 h-12 opacity-30" />
    </div>
  </figure>
</template>
