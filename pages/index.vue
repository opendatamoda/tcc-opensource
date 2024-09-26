<template>
  <main>
    <h2 class="visually-hidden">{{ pageTitle }}</h2>
    <div class="page page--index">
      <div class="hero">
        <div class="hero-img">
          <img src="@/assets/images/index-hero-2.svg" alt="">
        </div>
        <div class="hero-searchbar">
          <div class="slogan">利用開放資料數據的力量，<br />讓臺中成為更美好的城市！</div>
          <theSearchbar />
        </div>
        <theContainerAnchor />
      </div>
      <theDashboardList />
      <div class="index-section-service">
        <h3 class="index-section-service-title">服務分類</h3>
        <div class="category-image-list">
          <div class="category-image-item" v-for="(item, idx) in limitImageList" :key="idx">
            <theImageCard :data="item" />
          </div>
        </div>
        <bpa-button theme="primary" v-if="showloadMoreBtn" @click="loadMore">載入更多分類</bpa-button>
      </div>
      <div class="index-section-lists">
        <theDataListSection class="newtest" title="最新資料集" :data="dataList" link="/dataset" />
        <theDataListSection class="hotest" title="熱門資料集" :data="dataList" link="/dataset" />
      </div>
      <theWordCloudSection :data="wordCloudList"/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import theSearchbar from '@/components/theSearchbar.vue'
import theContainerAnchor from '@/components/theContainerAnchor.vue'
import theDashboardList from '@/components/theDashboardList.vue'
import theImageCard from '@/components/theImageCard.vue'
import theDataListSection from '@/components/theDataListSection.vue'
import theWordCloudSection from '@/components/theWordCloudSection.vue'
export default defineComponent({
  components: {
    theSearchbar,
    theContainerAnchor,
    theDashboardList,
    theImageCard,
    theDataListSection,
    theWordCloudSection,
  },
  setup(_, { root }) {
    const pageTitle: string = '首頁'

    const dataList = ref([
      {
        pid: '1',
        title: '臺中市道路寬度',
        all_file_format: ['csv','json'],
        changed: '2024-05-09 12:20:59',
      },
      {
        pid: '2',
        title: '臺中市政府警察局路口監視器',
        all_file_format: ['csv','zip'],
        changed: '2024-05-09 12:20:59',
      },
      {
        pid: '3',
        title: '臺中市鄰長名冊',
        all_file_format: ['csv','xml'],
        changed: '2024-05-09 12:20:59',
      },
      {
        pid: '4',
        title: '臺中市各國小校園開放時間',
        all_file_format: ['csv','json','xml'],
        changed: '2024-05-09 12:20:59',
      },
      {
        pid: '5',
        title: '臺中市地震斷層帶圖資',
        all_file_format: ['csv'],
        changed: '2024-05-09 12:20:59' ,
      }
    ])
    const showloadMoreBtn = computed(() => limit.value < imageList.value.length);
    const limit = ref(4);
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
    const limitImageList = computed(() => imageList.value.slice(0, limit.value));
    const loadMore = () => {
      limit.value = imageList.value.length;
    };
    const wordCloudList = ref([
      ['公務統計報表', 1000],
      ['交通', 800],
      ['環境', 700],
      ['觀光', 600],
      ['教育', 500],
      ['社會', 400],
      ['文化', 300],
      ['經濟', 200],
      ['醫療', 100],
      ['其他', 50],
    ])
    return {
      pageTitle,
      limitImageList, showloadMoreBtn,
      dataList, wordCloudList,
      loadMore
    }
  },
  head() {
    return {
      title: '首頁',
    } as any
  }
})
</script>
