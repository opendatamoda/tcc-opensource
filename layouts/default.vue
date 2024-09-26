<template>
  <div class="wrapper">
    <the-header/>
    <div class="container">
      <nuxt />
    </div>
    <the-footer/>
    <bpa-button v-show="scrollDistance > 300" theme="primary" class="btn-go-to-top" @click="scrollToTop()">
      ⬆︎
    </bpa-button>
    <noscript class="noscript" data-html2canvas-ignore="true"> Your browser does not support JavaScript! 您的瀏覽器不支援 JavaScript 功能，若網頁功能無法正常使用時，請開啟瀏覽器 JavaScript 狀態。 </noscript>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import theHeader from '@/components/theHeader.vue'
import theFooter from '@/components/theFooter.vue'

export default defineComponent({
  components: {
    theHeader,
    theFooter,
  },

  setup(_, {root}) {
    const scrollTimer = ref();
    const scrollDistance = ref();
    const elementOffset = () => {
      if (scrollTimer.value) return;
      scrollTimer.value = setTimeout(() => {
        scrollDistance.value = window.scrollY;
        clearTimeout(scrollTimer.value);
        scrollTimer.value = 0;
      }, 100);
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    onMounted(() => {
      window.addEventListener("scroll", elementOffset);
    });

    return {
      scrollDistance,
      scrollToTop
    }
  }
})
</script>