<template>
  <div class="specialbar">
    <div class="specialbar-input">
      <bpa-input
        id="special-input"
        aria-label="搜尋：請輸入關鍵字"
        class="special-input"
        accesskey="S"
        placeholder="搜尋：請輸入關鍵字"
        v-model="inputValue"
        @inputKeyup="handleSearch"
      />
      <bpa-button theme="primary" class="btn-search" @click="handleSearch">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position: relative; top: 0.125rem;">
          <title>搜尋</title>
          <g clip-path="url(#clip0_3197_21)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7591 10.1684C13.2164 7.97356 12.9776 4.98506 11.0429 3.05031C8.83575 0.843204 5.25732 0.843204 3.05021 3.05031C0.843108 5.25742 0.843108 8.83584 3.05021 11.043C4.98498 12.9777 7.97352 13.2165 10.1683 11.7592C10.1918 11.7878 10.2169 11.8155 10.2436 11.8422L12.6414 14.24C13.0828 14.6814 13.7985 14.6814 14.24 14.24C14.6814 13.7986 14.6814 13.0829 14.24 12.6415L11.8422 10.2437C11.8154 10.217 11.7877 10.1919 11.7591 10.1684ZM9.44438 4.64883C10.7686 5.97309 10.7686 8.12015 9.44438 9.44441C8.12012 10.7687 5.97306 10.7687 4.6488 9.44441C3.32453 8.12015 3.32453 5.97309 4.6488 4.64883C5.97306 3.32457 8.12012 3.32457 9.44438 4.64883Z" fill="#664300"/>
          </g>
          <defs>
            <clipPath id="clip0_3197_21">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span>搜尋</span>
      </bpa-button>
      <div>
        <ul class="hotword-list">
          <li class="hotword-item label">
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>熱門關鍵字</title>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92992 8.61653C8.97441 9.68998 7.89913 10.898 6.91272 13.0681C3.67292 20.1955 9.72042 26.243 14.6881 26.243C19.0078 26.243 27.4311 20.6274 21.3836 9.39637C21.3116 9.97232 20.0388 11.5562 18.9589 11.9882C19.8229 9.61235 19.3909 3.56485 12.7443 0.75708C12.7443 5.45479 11.4985 6.85435 9.92992 8.61653ZM12.4011 17.4782C12 17.9331 11.5487 18.445 11.1347 19.3645C9.77493 22.3846 12.3131 24.9471 14.3982 24.9471C16.2112 24.9471 19.7465 22.5676 17.2083 17.8087C17.1781 18.0527 16.6439 18.7239 16.1907 18.9069C16.5533 17.9002 16.372 15.3377 13.5823 14.148C13.5823 16.1385 13.0594 16.7316 12.4011 17.4782Z" fill="#888888"/>
            </svg>
          </li>
          <li class="hotword-item" v-for="item in hotKeywordList">
            <nuxt-link :to="'/search?q='+item.query">{{ item.query }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup(_, { root }) {
    const inputValue = ref('');
    const hotKeywordList = ref([
      { query: '臺中市' },
      { query: '中部粽' },
      { query: '東泉辣椒醬' },
      { query: '太陽餅' },
      { query: '逢甲商圈' },
    ]);

    const handleSearch = async () => {
      root.$router.push({ 
        path: '/dataset', 
        query: inputValue.value ? { q: inputValue.value } : {}
      })
    };

    return {
      inputValue, hotKeywordList,
      handleSearch
    };
  }
})
</script>

