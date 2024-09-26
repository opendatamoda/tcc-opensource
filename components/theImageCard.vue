<template>
  <div class="image-card">
    <div class="image-card-info">
      <nuxt-link
        class="image-card-title"
        :to="data.url"
        :title="'前往'+data.title+'分類'"
      >
        {{ data.title }}
      </nuxt-link>
      <div class="image-card-subtitle">{{ data.count }} 筆</div>
    </div>
    <div class="image-card-img-block">
      <img :src="data.imgPath" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    data: {
      type: Object,
      default: {}
    },
  },
})
</script>
