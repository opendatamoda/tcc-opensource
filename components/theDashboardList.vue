<template>
  <ul class="dashboard-list">
    <li class="dashboard-list-item" v-for="(item,idx) in dataDashboard" :key="idx">
      <a :href="item.to" v-if="item.externalLink" :title="item.title" target="_blank">
        <theDashboardCard :data="item" />
      </a>
      <nuxt-link :to="item.to" :title="item.title" v-else>
        <theDashboardCard :data="item" />
      </nuxt-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import theDashboardCard from '@/components/theDashboardCard.vue'
export default defineComponent({
  components: {
    theDashboardCard,
  },
  setup(_, { root }) {
    const dataDashboard = ref([
      {
        name: '資料集',
        number: 1000,
        key: '資料集數量',
        externalLink: false,
        to: '/dataset',
        title: '前往 資料集'
      },
      {
        name: '空間資訊',
        number: 424,
        key: '空間資訊',
        externalLink: false,
        to: '/dataset?tags=地理資料',
        title: '前往 資料集'
      },
      {
        name: 'API 服務',
        number: 888,
        key: 'API服務數量',
        externalLink: false,
        to: '/dataset',
        title: '另開分頁 開放資料描述'
      },
      {
        name: '機關',
        number: 555,
        key: '機關數量',
        externalLink: false,
        to: '/dataset',
        title: '前往 分類專區'
      },
      {
        name: '服務分類',
        number: 200,
        key: '服務分類數量',
        externalLink: false,
        to: '/dataset',
        title: '前往 分類專區'
      }
    ])
    
    return {
      dataDashboard
    }
  }
})
</script>