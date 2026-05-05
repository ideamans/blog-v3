<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'
import { data as authors } from './authors.data.js'
import { getCategoryLabel, slugifyTag } from '../../categories.js'
import CategoryBadge from './CategoryBadge.vue'
import ArticleThumbnail from './ArticleThumbnail.vue'
import BlogSidebar from './BlogSidebar.vue'

const { frontmatter } = useData()
const route = useRoute()

const currentIndex = computed(() =>
  posts.findIndex((p) => p.url === route.path)
)
const current = computed(() => posts[currentIndex.value])

// 配列は新しい順なので、index-1 が新しい記事、index+1 が古い記事
const newerPost = computed(() =>
  currentIndex.value > 0 ? posts[currentIndex.value - 1] : null
)
const olderPost = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < posts.length - 1
    ? posts[currentIndex.value + 1]
    : null
)

const author = computed(() =>
  authors.find((a) => a.username === frontmatter.value.authorId)
)

const primaryCategory = computed(() => {
  if (Array.isArray(frontmatter.value.categories) && frontmatter.value.categories.length > 0) {
    return frontmatter.value.categories[0]
  }
  return frontmatter.value.category ?? ''
})

const displayDate = computed(() => {
  const d = current.value?.publishedAt ?? frontmatter.value.publishedAt ?? ''
  return d.slice(0, 10)
})

// 関連記事（同じプライマリカテゴリの他記事、最新3件）
const relatedPosts = computed(() => {
  const cat = primaryCategory.value
  if (!cat) return []
  const url = route.path
  return posts
    .filter((p) => p.url !== url && p.categories?.includes(cat))
    .slice(0, 3)
})

// シェアセクションのランダムメッセージ
const shareMessages = [
  '参考になりましたか？ ぜひシェアしてください！',
  'ブックマーク代わりにSNSシェアはいかがですか？',
  '同じ課題を持つ仲間にも教えてあげませんか？',
  '「これは使える！」と思ったらシェアを。'
]
const shareMessage = ref(shareMessages[0])
const pageUrl = ref('')
onMounted(() => {
  shareMessage.value =
    shareMessages[Math.floor(Math.random() * shareMessages.length)]
  pageUrl.value = window.location.href
})

function shareUrl(network: 'x' | 'facebook'): string {
  const u = encodeURIComponent(pageUrl.value)
  const t = encodeURIComponent(frontmatter.value.title ?? '')
  if (network === 'x') {
    return `https://twitter.com/intent/tweet?url=${u}&text=${t}`
  }
  return `https://www.facebook.com/sharer/sharer.php?u=${u}`
}

function tagsArray(): string[] {
  const t = frontmatter.value.tags
  return Array.isArray(t) ? t : []
}
</script>

<template>
  <!-- パンくず -->
  <div class="py-4 px-5">
    <div class="max-w-6xl mx-auto">
      <div class="breadcrumbs text-xs">
        <ul>
          <li><a href="/">トップ</a></li>
          <li v-if="primaryCategory" class="text-base-content/60">
            <a :href="`/${primaryCategory}/index.html`">{{
              getCategoryLabel(primaryCategory)
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 2カラム -->
  <section class="py-6 px-5 pb-12">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
      <!-- メイン -->
      <article class="flex-1 min-w-0">
        <!-- メタ -->
        <div class="flex items-center gap-2 flex-wrap mb-4">
          <CategoryBadge
            v-if="primaryCategory"
            :category="primaryCategory"
            size="sm"
          />
          <span class="text-xs text-base-content/50">|</span>
          <span class="text-xs text-base-content/50">{{ displayDate }}</span>
        </div>

        <h1 class="text-3xl font-bold leading-tight mb-4">
          {{ frontmatter.title }}
        </h1>

        <p
          v-if="frontmatter.excerpt && typeof frontmatter.excerpt === 'string'"
          class="text-sm text-base-content/70 leading-relaxed mb-6"
        >
          {{ frontmatter.excerpt }}
        </p>

        <!-- 著者・タグ -->
        <div class="flex items-center gap-4 flex-wrap mb-8">
          <div v-if="author" class="flex items-center gap-2">
            <div class="avatar">
              <div class="w-9 rounded-full bg-base-300">
                <img
                  v-if="author.image"
                  :src="`https://blog.ideamans.com${author.image}`"
                  :alt="author.name"
                />
              </div>
            </div>
            <span class="text-xs">{{ author.name }}</span>
          </div>
          <span v-if="tagsArray().length > 0" class="text-xs text-base-content/30">|</span>
          <div v-if="tagsArray().length > 0" class="flex flex-wrap gap-1.5">
            <a
              v-for="tag in tagsArray()"
              :key="tag"
              :href="`/tags/${slugifyTag(tag)}.html`"
              class="badge badge-outline badge-sm whitespace-nowrap hover:bg-primary hover:text-primary-content transition-colors"
              >#{{ tag }}</a
            >
          </div>
        </div>

        <!-- 本文 -->
        <div
          class="prose prose-base max-w-none
            prose-headings:text-base-content
            prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-primary
            prose-h3:pl-3 prose-h3:border-l-4 prose-h3:border-secondary
            prose-p:text-base-content/80
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-secondary prose-blockquote:bg-base-200 prose-blockquote:rounded-md prose-blockquote:py-2
            prose-figcaption:text-center prose-figcaption:text-base-content/50
          "
        >
          <Content />
        </div>

        <!-- シェア -->
        <div
          class="flex items-center gap-3 mt-10 pt-6 border-t border-base-300 flex-wrap"
        >
          <span class="text-sm font-bold">{{ shareMessage }}</span>
          <a
            :href="shareUrl('facebook')"
            target="_blank"
            rel="noopener"
            class="btn btn-sm btn-outline rounded-full"
            >Facebook</a
          >
          <a
            :href="shareUrl('x')"
            target="_blank"
            rel="noopener"
            class="btn btn-sm btn-outline rounded-full"
            >X</a
          >
        </div>

        <!-- 前後ナビ -->
        <nav
          v-if="olderPost || newerPost"
          class="mt-10 pt-6 border-t border-base-300"
        >
          <div class="join join-vertical sm:join-horizontal w-full">
            <a
              v-if="olderPost"
              :href="olderPost.url"
              class="join-item btn btn-outline btn-sm h-auto py-3 px-4 flex-1 justify-start text-left gap-2 whitespace-normal leading-snug"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xs">{{ olderPost.title }}</span>
            </a>
            <div v-else class="join-item flex-1 hidden sm:block"></div>
            <a
              v-if="newerPost"
              :href="newerPost.url"
              class="join-item btn btn-outline btn-sm h-auto py-3 px-4 flex-1 justify-end text-right gap-2 whitespace-normal leading-snug"
            >
              <span class="text-xs">{{ newerPost.title }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </nav>
      </article>

      <BlogSidebar />
    </div>
  </section>

  <!-- 関連記事 -->
  <section
    v-if="relatedPosts.length > 0"
    class="py-12 px-5 bg-base-200"
  >
    <div class="max-w-6xl mx-auto">
      <h2 class="text-xl font-bold mb-5 pb-2.5 border-b-2 border-primary">
        関連記事
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          v-for="rp in relatedPosts"
          :key="rp.url"
          :href="rp.url"
          class="group block"
        >
          <div
            class="card bg-base-100 shadow-sm group-hover:shadow-md transition-shadow overflow-hidden h-full"
          >
            <ArticleThumbnail :src="rp.image" :alt="rp.title" />
            <div class="card-body p-4 gap-2">
              <div class="flex items-center gap-2 flex-wrap">
                <CategoryBadge
                  v-if="rp.categories?.[0]"
                  :category="rp.categories[0]"
                  size="xs"
                  :link="false"
                />
                <span class="text-xs text-base-content/50">{{
                  (rp.publishedAt ?? '').slice(0, 10)
                }}</span>
              </div>
              <h3 class="text-sm font-bold leading-snug">{{ rp.title }}</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
