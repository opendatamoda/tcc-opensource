<template>
  <header>
    <a href="#ak-container" title="跳至主要內容" id="ak-jump">跳至主要內容</a>
    <h1 class="visually-hidden">臺中市政府資料開放平臺</h1>
    <div class="header-container">
      <div class="logo">
        <nuxt-link to="/" title="回首頁">
          這裡可以放logo
        </nuxt-link>
      </div>
      <bpa-button
        theme="primary"
        class="btn-mobile-menu"
        @click="handleToggleMobileMenuBtn()"
        value="選單"
      >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>選單</title>
        <rect x="2" y="3" width="12" height="2" rx="0.5" fill="#664300"/>
        <rect x="2" y="7" width="12" height="2" rx="0.5" fill="#664300"/>
        <rect x="2" y="11" width="12" height="2" rx="0.5" fill="#664300"/>
      </svg>
      </bpa-button>
      <div :class="['main-menu', mobileMenuStatus ? 'main-menu--open' : '']">
        <nav aria-label="主要選單">
          <ul>
            <li>
              <a
                href="#ak-header"
                title="上方功能區塊"
                id="ak-header"
                accesskey="U"
              >
                :::
              </a>
            </li>
            <li @click="handleCloseMobileMenuBtn">
              <nuxt-link to="/sitemap" title="前往 網站導覽">
                網站導覽
              </nuxt-link>
            </li>
            <li>
              <bpa-dropdown
                :options="menuDatasetsOptions"
                placeholder="資料集"
                @click="handleMenuDatasets"
              />
            </li>
            <li>
              <bpa-dropdown
                :options="menuAboutOptions"
                placeholder="關於平臺"
              />
            </li>
            <li>
              <bpa-dropdown
                :options="menuApplyOptions"
                placeholder="開放應用"
              />
            </li>
          </ul>
        </nav>
        <bpa-button
          theme="primary"
          class="btn-close-mobile-menu"
          @click="handleCloseMobileMenuBtn()"
        >
          關閉選單
        </bpa-button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup(_, { root }) {
    const mobileMenuStatus = ref<boolean>(false);
    const menuDatasetsOptions = ref([
      {
        type: 'link',
        url: '/dataset',
        label: '所有資料集',
      },
      {
        type: 'link',
        url: '/categories',
        label: '分類專區',
      },
      {
        label: '資料清單下載',
      },
    ]);
    const menuAboutOptions = ref([
      {
        type: 'link',
        url: '/about',
        label: '關於本站',
      },
      {
        type: 'link',
        url: '/faq',
        label: '常見問題',
      },
      {
        type: 'link',
        url: '/privacy-policy',
        label: '隱私權政策',
      },
    ])
    const menuApplyOptions = ref([
      {
        type: 'link',
        url: '/develop-guide',
        label: '開發指南',
      },
      {
        type: 'link',
        url: 'https://datacenter.taichung.gov.tw/swagger/api-docs/',
        label: 'OPEN API',
      },
      {
        type: 'link',
        url: '/license-terms',
        label: '授權條款',
      }
    ])

    const handleToggleMobileMenuBtn = () => {
      mobileMenuStatus.value = !mobileMenuStatus.value;
    }

    const handleCloseMobileMenuBtn = () => {
      mobileMenuStatus.value = false;
    }

    const handleMenuDatasets = async() => {
      root.$msg({
        prefix: '😀',
        msg: '即將下載資料集清單',
        duration: 3000,
        theme: 'success',
      })
    }

    return {
      mobileMenuStatus, 
      menuDatasetsOptions, menuAboutOptions, menuApplyOptions, handleMenuDatasets,
      handleToggleMobileMenuBtn, handleCloseMobileMenuBtn
    }
  },
})
</script>
