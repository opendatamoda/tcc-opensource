<template>
  <main>
    <theBreadcrumbs :path="path" />
    <theSearchbar />
    <div class="page page--narrow">
      <theContainerAnchor />
      <h2 class="page-title">
        <span>
          {{ pageTitle }}
        </span>
      </h2>
      <article>
        <section>
          <h3>臺中市政府資料開放平台開發指南</h3>
          <p>臺中市政府資料開放平台以資料下載或API介接方式提供各式資料，俾供民眾或機關後續加值及應用，為方便使用者資料的取得及使用，本平台每份資料集均遵守「國家發展委員會資料集詮釋資料標準規範」，以描述各資料集的特性，協助開發人員充分了解資料內容或應使用的介接技術，針對較複雜的API，本平台亦提供「API說明」或「API服務」等功能，協助開發者降低API使用之門檻。</p>
          <p>一、直接於本網站中選擇欲使用之資料集名稱，並點擊進入該資料說明頁</p>
          <img src="/images/developguide0101.png" alt="資料集導覽說明" />
          <p>二、可於資料說明頁中選擇欲使用之資料，點擊「探索」功能按鈕，下拉即可下載實體檔案或查看API說明</p>
          <img src="/images/developguide0102.png" alt="資料集資源檔案下載說明" />
          <img src="/images/developguide0103.png" alt="資料集API使用說明" />
          <p>*開放下載檔案格式如CSV、KML及SHP等格式為主</p>
        </section>
      </article>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import theSearchbar from '@/components/theSearchbar.vue'
import theBreadcrumbs from '@/components/theBreadcrumbs.vue'
import theContainerAnchor from '@/components/theContainerAnchor.vue'
export default defineComponent({
  components: {
    theSearchbar,
    theBreadcrumbs,
    theContainerAnchor,
  },
  setup(_, { root }) {
    const pageTitle = ref<string>('開發指南')

    const path = [
      {
        title: '首頁',
        to: '/',
        icon: 'fas fa-home',
      },
      {
        title: pageTitle.value,
        to: root.$nuxt.$route.path,
      },
    ]

    return {
      pageTitle,
      path,
    }
  },
  head() {
    const pageTitle = this.pageTitle;
    const content = '提供瞭解' + (process.env.WEBSITE_NAME || '網站名稱') + '開發指南';
    const url = (process.env.NUXT_PUBLIC_BASE_URL || 'Domain name') + this.$nuxt.$route.path;
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'description', name: 'description', content },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title',  content: pageTitle + ' | ' + process.env.WEBSITE_NAME},
        { hid: 'og:description', property: 'og:description', content },
        { hid: 'twitter:url', name: 'twitter:url', content: url },
        { hid: 'twitter:title', name: 'twitter:title', content: pageTitle + ' | ' + process.env.WEBSITE_NAME},
        { hid: 'twitter:description', name: 'twitter:description', content },
      ]
    } as any
  },
})
</script>
