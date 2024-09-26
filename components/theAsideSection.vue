<template>
  <aside class="custom-flex-item custom-flex-item--left custom-flex-item--small">
    <section>
      <p>
        {{ data.description }}
      </p>
      <p>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position: relative; top: 0.125rem;">
          <path d="M2.70471 4.09082L8.27271 1.12122C8.35669 1.07643 8.39868 1.05404 8.44302 1.04546C8.48066 1.03818 8.51934 1.03818 8.55698 1.04546C8.60132 1.05404 8.64331 1.07643 8.72729 1.12122L14.2953 4.09082C14.8014 4.36075 15.0545 4.49571 15.089 4.61938C15.1174 4.72127 15.0901 4.8306 15.017 4.90712C14.9284 5 14.6416 5 14.068 5H2.932C2.35841 5 2.07161 5 1.98297 4.90712C1.90994 4.8306 1.88261 4.72127 1.91104 4.61938C1.94554 4.49571 2.1986 4.36075 2.70471 4.09082Z" fill="#555555"/>
          <rect x="3" y="6" width="2" height="6" rx="0.25" fill="#555555"/>
          <rect x="6" y="6" width="2" height="6" rx="0.25" fill="#555555"/>
          <rect x="9" y="6" width="2" height="6" rx="0.25" fill="#555555"/>
          <rect x="12" y="6" width="2" height="6" rx="0.25" fill="#555555"/>
          <path d="M2.76569 13.2343C2.85216 13.1478 2.8954 13.1046 2.94586 13.0737C2.99059 13.0463 3.03937 13.0261 3.09038 13.0138C3.14793 13 3.20908 13 3.33137 13H13.6686C13.7909 13 13.8521 13 13.9096 13.0138C13.9606 13.0261 14.0094 13.0463 14.0541 13.0737C14.1046 13.1046 14.1478 13.1478 14.2343 13.2343L17 16H0L2.76569 13.2343Z" fill="#555555"/>
        </svg>
        {{ data.org_name }}
      </p>
      <p style="display: flex">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <title>標籤</title>
          <g clip-path="url(#clip0_3201_57)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.19669 2.19668L1.13603 7.49998L9.62131 15.9853L15.9853 9.6213L7.49999 1.13602L2.19669 2.19668ZM7.14644 7.14643C7.73222 6.56064 7.73222 5.6109 7.14644 5.02511C6.56065 4.43932 5.6109 4.43932 5.02512 5.02511C4.43933 5.6109 4.43933 6.56064 5.02512 7.14643C5.6109 7.73222 6.56065 7.73222 7.14644 7.14643Z" fill="#555555"/>
          </g>
          <defs>
            <clipPath id="clip0_3201_57">
              <rect width="17" height="17" fill="white"/>
            </clipPath>
          </defs>
        </svg>

        <ul class="tag-list tag-list--inline-block">
          <li class="tag-list-item" v-for="(tag, idx) in data.tags" :key="idx">
            <nuxt-link to="/dataset" :title="`搜尋 ${tag} 標籤`">{{ tag }}</nuxt-link>
          </li>
        </ul>
      </p>
      <p>
        評分此資料集：
        <div class="star-rank">
          <a 
            class="star" v-for="num in 5" :key="num" :title="`點擊評分${num}分`"
            @mouseenter="hoverStar(num)"
            @mouseleave="leaveStar"
          >
            <button :class="{ 'd-none': starRank<num }" :title="'評分此資料集-'+num+'星等'" href="javascript:;">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>評星等</title>
                <g clip-path="url(#clip0_3189_8)">
                  <path d="M8.04894 0.92705C8.3483 0.00573924 9.6517 0.00573965 9.95106 0.92705L11.0206 4.21885C11.1545 4.63087 11.5385 4.90983 11.9717 4.90983H15.4329C16.4016 4.90983 16.8044 6.14945 16.0207 6.71885L13.2205 8.75329C12.87 9.00793 12.7234 9.4593 12.8572 9.87132L13.9268 13.1631C14.2261 14.0844 13.1717 14.8506 12.388 14.2812L9.58779 12.2467C9.2373 11.9921 8.7627 11.9921 8.41221 12.2467L5.61204 14.2812C4.82833 14.8506 3.77385 14.0844 4.0732 13.1631L5.14277 9.87132C5.27665 9.4593 5.12999 9.00793 4.7795 8.75329L1.97933 6.71885C1.19562 6.14945 1.59839 4.90983 2.56712 4.90983H6.02832C6.46154 4.90983 6.8455 4.63087 6.97937 4.21885L8.04894 0.92705Z" fill="#FFA800"/>
                </g>
                <defs>
                <clipPath id="clip0_3189_8">
                  <rect width="18" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </button>
            <button :class="{ 'd-none': starRank>=num }" :title="'評分此資料集-'+num+'星等'" href="javascript:;">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>評星等</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0696 4.52788L8.99998 1.23608L7.93041 4.52788C7.66267 5.35193 6.89475 5.90985 6.0283 5.90985L2.5671 5.90985L5.36727 7.94429C6.06825 8.45358 6.36156 9.35631 6.09381 10.1804L5.02424 13.4722L7.82441 11.4377C8.52539 10.9284 9.47458 10.9284 10.1756 11.4377L12.9757 13.4722L11.9062 10.1804C11.6384 9.35631 11.9317 8.45358 12.6327 7.94429L15.4329 5.90985H11.9717C11.1052 5.90985 10.3373 5.35193 10.0696 4.52788ZM9.95104 0.927067C9.65169 0.00575656 8.34828 0.00575608 8.04893 0.927067L6.97936 4.21886C6.84548 4.63089 6.46153 4.90985 6.0283 4.90985H2.5671C1.59838 4.90985 1.1956 6.14946 1.97932 6.71886L4.77949 8.75331C5.12997 9.00795 5.27663 9.45932 5.14276 9.87134L4.07319 13.1631C3.77384 14.0844 4.82832 14.8506 5.61203 14.2812L8.4122 12.2467C8.76269 11.9921 9.23728 11.9921 9.58777 12.2467L12.3879 14.2812C13.1717 14.8506 14.2261 14.0844 13.9268 13.1631L12.8572 9.87134C12.7233 9.45932 12.87 9.00795 13.2205 8.75331L16.0207 6.71886C16.8044 6.14946 16.4016 4.90985 15.4329 4.90985H11.9717C11.5384 4.90985 11.1545 4.63089 11.0206 4.21886L9.95104 0.927067Z" fill="#FFA800"/>
              </svg>
            </button>                  
          </a>                
        </div>
        <div class="hint">平均 {{ data.rank }}（ {{ data.rating_count }} 人次投票）</div>
      </p>
      <p>
        瀏覽人次：{{ data.view_count }}
      </p>
      <p>
        最近瀏覽人次：{{ data.recent_view_count }}
      </p>
      <p>
        下載次數：{{ data.download_count }}
      </p>
    </section>
    <section>
      <h3>相關資料集</h3>
      <ul class="general-list">
        <li class="general-list-item" v-for="(item, idx) in relevantData" :key="item.id">
          <div class="general-list-item-maininfo">
            <div class="general-list-item-title">
              <nuxt-link to="/dataset/" :title="`前往${item.title}資料集`">
                {{ item.title }}
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="original-opendata">
      <h3>授權</h3>
      <div class="opendata">
        <nuxt-link to="/" title="前往授權條款">政府資料開放授權條款-第1版</nuxt-link>
        <a href="https://opendefinition.org/od/2.1/en/" title="前往外部網站 Open Definition 網站">
          Open Definition
        </a>
      </div>
      <theShareSection/>
    </section>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import theShareSection from '@/components/theShareSection.vue'

export default defineComponent({
  components: {
    theShareSection,
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  setup(props, {emit, root}) {
    
    const relevantData = ref([
      {
        id: 1,
        title: '10720-04-01-2 臺中市辦理急難救助概況'
      },
      {
        id: 2,
        title: '10740-03-04-2 臺中市性騷擾事件裁罰統計'
      },
      {
        id: 3,
        title: '10740-02-04-2 臺中市性侵害加害人處遇'
      },
      {
        id: 4,
        title: '10740-90-03-2 臺中市兒少保護個案基本資料'
      },
      {
        id: 5,
        title: '10740-03-03-2 臺中市性騷擾事件申訴調查概況'
      },
    ])
    
    const starRank = ref(0)
    const voted = ref(false)

    const hoverStar = (level: number) => {
      if(voted.value) return
      starRank.value = level
    }
    const leaveStar = () => {
      if(voted.value) return
      starRank.value = 0
    }

    return {
      relevantData, starRank,
      hoverStar, leaveStar
    }
  }

})

</script>