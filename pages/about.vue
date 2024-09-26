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
          <h3>關於臺中市政府資料開放平台</h3>
          <p>臺中市政府為實踐開放政府（Open Government）與開放資料之施政理念，積極釋出本府各機關開放資料集，並建立共通的開放資料平臺(以下簡稱本平臺)，本平臺收容本府各局處開放資料集，有助於本府各機關資料橫向流通，提升施政效能，滿足民眾用資料的需求，同時以資料創造公私協力發展並開放更多便民服務之加值應用。</p>
          <p>目的乃期望透過本平臺，將資料集統一集中於單一入口平臺，提供民眾與應用開發者可簡易取得政府開放資料。平台收錄多項政府開放資料集，並提供線上預覽、便捷檔案格式下載及API(Application Programming Interface)介接等多項服務模式，為提供最更佳資料服務品質，新資料集將持續加入並隨時更新。</p>
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
    const pageTitle = ref<string>('關於本站')

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
    const content = '提供瞭解' + (process.env.WEBSITE_NAME || '網站名稱') + '關於本站';
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
