<script setup lang="ts">
import { getCategoryLabel, getCategoryBadgeClass } from '../../categories.js'

const props = defineProps<{
  category: string
  size?: 'xs' | 'sm'
  link?: boolean
}>()

const label = getCategoryLabel(props.category)
const badgeClass = getCategoryBadgeClass(props.category)
</script>

<template>
  <a
    v-if="link !== false"
    :href="`/${category}/index.html`"
    class="badge"
    :class="[badgeClass, size === 'xs' ? 'badge-xs' : 'badge-sm']"
    >{{ label }}</a
  >
  <span
    v-else
    class="badge"
    :class="[badgeClass, size === 'xs' ? 'badge-xs' : 'badge-sm']"
    >{{ label }}</span
  >
</template>
