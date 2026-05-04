<script setup lang="ts">
import { useData } from 'vitepress'
import { data as posts } from './posts.data.js'
import BlogSidebar from './BlogSidebar.vue'
import CategoryBadge from './CategoryBadge.vue'
import ArticleThumbnail from './ArticleThumbnail.vue'

const { frontmatter } = useData()

const latestPosts = posts.slice(0, 12)

function primaryCategory(p: { categories?: string[] }): string {
  return p.categories?.[0] ?? ''
}

function displayDate(s?: string): string {
  return (s ?? '').slice(0, 10)
}
</script>

<template>
  <!-- ヒーロー -->
  <section class="relative h-64 md:h-80 flex items-center overflow-hidden">
    <img
      src="/ogp-bg.jpg"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/55"></div>
    <div
      class="relative z-10 max-w-6xl mx-auto px-5 text-white text-center w-full"
    >
      <h1 class="text-3xl md:text-5xl font-light mb-3 tracking-tight">
        {{ frontmatter.title }}
      </h1>
      <p class="text-sm md:text-base opacity-80 leading-relaxed">
        {{ frontmatter.subtext }}
      </p>
    </div>
  </section>

  <!-- 2カラムレイアウト -->
  <section class="py-10 px-5">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
      <!-- メインカラム -->
      <div class="flex-1 min-w-0">
        <h2
          class="text-xl font-bold mb-5 pb-2.5 border-b-2 border-primary"
        >
          最新記事
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            v-for="post in latestPosts"
            :key="post.url"
            :href="post.url"
            class="group block"
          >
            <div
              class="card bg-base-100 shadow-sm group-hover:shadow-md transition-shadow overflow-hidden h-full"
            >
              <ArticleThumbnail :src="post.image" :alt="post.title" />
              <div class="card-body p-4 gap-2">
                <div class="flex items-center gap-2 flex-wrap">
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
                  class="text-base font-bold leading-snug group-hover:text-primary transition-colors"
                >
                  {{ post.title }}
                </h3>
                <p
                  v-if="post.excerpt"
                  class="text-sm text-base-content/60 leading-relaxed line-clamp-2"
                  v-html="post.excerpt"
                ></p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <BlogSidebar :hide-featured-mobile="true" :hide-latest="true" />
    </div>
  </section>
</template>
