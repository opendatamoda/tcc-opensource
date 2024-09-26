<template>
  <main>
    <theBreadcrumbs :path="path" />
    <theSearchbar />
    <div class="page page--categories">
      <theContainerAnchor />
      <h2 class="page-title">
        <span>
          {{ pageTitle }}
        </span>
      </h2>
      <bpa-tabs v-model="categoryTabs">
        <bpa-tab-panel name="organization" label="機關">
          <div>
            <ul class="general-list grid grid-3-equal">
              <li class="general-list-item" v-for="(item, idx) in organData" :key="idx">
                <div class="general-list-item-maininfo">
                  <div class="general-list-item-title">
                    <nuxt-link :to="`/dataset`" :title="`前往${item.name}`">
                      {{ item.name }}
                    </nuxt-link>
                  </div>
                </div>
                <div class="general-list-item-subinfo">{{ item.count }} 個資料集</div>
              </li>
            </ul>
          </div>
          <client-only>
            <theCatgoryChart :data="organData" />
          </client-only>
        </bpa-tab-panel>
        <bpa-tab-panel name="service" label="服務">
          <div class="category-image-list">
            <div class="category-image-item" v-for="(item, idx) in imageList" :key="idx">
              <theImageCard :data="item" />
            </div>
          </div>
        </bpa-tab-panel>
      </bpa-tabs>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import theSearchbar from '@/components/theSearchbar.vue'
import theBreadcrumbs from '@/components/theBreadcrumbs.vue'
import theContainerAnchor from '@/components/theContainerAnchor.vue'
import theImageCard from '@/components/theImageCard.vue'
import theCatgoryChart from '@/components/theCatgoryChart.vue'

export default defineComponent({
  components: {
    theSearchbar,
    theBreadcrumbs,
    theContainerAnchor,
    theImageCard,
    theCatgoryChart
  },
  setup(_, { root }) {
    const pageTitle = ref<string>('分類專區')
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
    const type = root.$route.query.type
    const categoryTabs = ref(type === 'service' ? 'service' : 'organization')
    
    const organData = ref([
      { name: '臺中市政府主計處', count: 566 },
      { name: '臺中市政府警察局', count: 397 },
      { name: '臺中市政府都市發展局', count: 342 },
      { name: '臺中市政府社會局', count: 294 },
      { name: '臺中市政府民政局', count: 278 },
      { name: '臺中市政府地方稅務局', count: 188 },
      { name: '臺中市政府教育局', count: 146 },
      { name: '臺中市政府衛生局', count: 133 },
      { name: '臺中市政府研究發展考核委員會', count: 110 },
      { name: '臺中市政府地政局', count: 106 },
      { name: '臺中市政府數位治理局', count: 94 },
      { name: '臺中市政府環境保護局', count: 94 },
      { name: '臺中市政府消防局', count: 85 },
      { name: '臺中市政府農業局', count: 82 },
      { name: '臺中市政府經濟發展局', count: 58 },
      { name: '臺中市政府交通局', count: 56 },
      { name: '臺中市政府建設局', count: 51 },
      { name: '臺中市政府水利局', count: 43 },
      { name: '臺中市政府勞工局', count: 42 },
      { name: '臺中市政府文化局', count: 39 },
      { name: '臺中市政府觀光旅遊局', count: 39 },
      { name: '臺中市政府財政局', count: 28 },
      { name: '臺中市政府人事處', count: 23 },
      { name: '臺中市政府原住民族事務委員會', count: 20 },
      { name: '臺中市政府法制局', count: 14 },
      { name: '臺中市政府政風處', count: 10 },
      { name: '臺中市政府新聞局', count: 9 },
      { name: '臺中市政府客家事務委員會', count: 8 },
      { name: '中捷公司', count: 6 },
      { name: '臺中市政府秘書處', count: 5 },
      { name: '臺中市政府運動局', count: 5 }
    ])
    const serviceData = ref([])
    
    const imageList = ref([
      {
        url: '/dataset',
        title: '老年安養',
        count: 0,
        imgPath: '/images/categories/cat-1.svg',
        imgAlt: '服務分類-老年安養',
      },
      {
        url: '/dataset',
        title: '交通及通訊',
        count: 0,
        imgPath: '/images/categories/cat-2.svg',
        imgAlt: '服務分類-交通及通訊',
      },
      {
        url: '/dataset',
        title: '休閒旅遊',
        count: 0,
        imgPath: '/images/categories/cat-3.svg',
        imgAlt: '服務分類-休閒旅遊', 
      },
      {
        url: '/dataset',
        title: '公共資訊',
        count: 0,
        imgPath: '/images/categories/cat-4.svg',
        imgAlt: '服務分類-公共資訊',
      },
      {
        url: '/dataset',
        title: '出生及收養',
        count: 0,
        imgPath: '/images/categories/cat-5.svg',
        imgAlt: '服務分類-出生及收養',
      },
      {
        url: '/dataset',
        title: '婚姻',
        count: 0,
        imgPath: '/images/categories/cat-6.svg',
        imgAlt: '服務分類-婚姻',
      },
      {
        url: '/dataset',
        title: '就醫',
        count: 0,
        imgPath: '/images/categories/cat-7.svg',
        imgAlt: '服務分類-就醫',
      },
      {
        url: '/dataset',
        title: '投資理財',
        count: 0,
        imgPath: '/images/categories/cat-8.svg',
        imgAlt: '服務分類-投資理財',
      },
      {
        url: '/dataset',
        title: '服兵役',
        count: 0,
        imgPath: '/images/categories/cat-9.svg',
        imgAlt: '服務分類-服兵役',
      },
      {
        url: '/dataset',
        title: '求學及進修',
        count: 0,
        imgPath: '/images/categories/cat-10.svg',
        imgAlt: '服務分類-求學及進修',
      },
      {
        url: '/dataset',
        title: '求職及就業',
        count: 0,
        imgPath: '/images/categories/cat-11.svg',
        imgAlt: '服務分類-求職及就業',
      },
      {
        url: '/dataset',
        title: '生命禮儀',
        count: 0,
        imgPath: '/images/categories/cat-12.svg',
        imgAlt: '服務分類-生命禮儀',
      },
      {
        url: '/dataset',
        title: '生活安全及品質',
        count: 0,
        imgPath: '/images/categories/cat-13.svg',
        imgAlt: '服務分類-生活安全及品質',
      },
      {
        url: '/dataset',
        title: '生育保健',
        count: 0,
        imgPath: '/images/categories/cat-14.svg',
        imgAlt: '服務分類-生育保健',
      },
      {
        url: '/dataset',
        title: '購屋及遷徙',
        count: 0,
        imgPath: '/images/categories/cat-15.svg',
        imgAlt: '服務分類-購屋及遷徙',
      },
      {
        url: '/dataset',
        title: '退休',
        count: 0,
        imgPath: '/images/categories/cat-16.svg',
        imgAlt: '服務分類-退休',
      },
      {
        url: '/dataset',
        title: '選舉及投票',
        count: 0,
        imgPath: '/images/categories/cat-17.svg',
        imgAlt: '服務分類-選舉及投票',
      },
      {
        url: '/dataset',
        title: '開創事業',
        count: 0,
        imgPath: '/images/categories/cat-18.svg',
        imgAlt: '服務分類-開創事業',
      }
    ])

    return {
      pageTitle,
      path,
      categoryTabs,
      imageList, serviceData, organData
    }
  },
  head() {
    const pageTitle = this.pageTitle
    const content = '提供瞭解' + process.env.WEBSITE_NAME + pageTitle
    const url = this.$config.baseURL + this.$nuxt.$route.path
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
