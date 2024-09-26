<template>
  <div class="index-section-wordcloud">
    <h3><span>大家都在搜~</span></h3>
        <div class="cloud">
      <vue-word-cloud
        :words="tags"
        :font-size-ratio="3"
        :spacing="1"
      >
        <template slot-scope="{text, weight, word}">
          <button
            :class="[
              'btn-cloud',
              weight >= 800 ? 'level1' :  (weight >= 600 &&  weight<800) ? 'level2' :  (weight >= 400 &&  weight<600 ) ? 'level3' : (weight >= 200 &&  weight<400 ) ? 'level4' :  (weight < 200 ) ? 'level5' : ''
            ]"
            @click="onWordClick(text)"
          >
            <span>{{ text }}</span>
          </button>
        </template>
      </vue-word-cloud>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import VueWordCloud from 'vuewordcloud'
export default defineComponent({
  components:{
    [VueWordCloud.name]: VueWordCloud,
  },
  props: {
    data: Array
  },
  setup(props, { root }) {
    const tags = computed(() => {  
      let data = props.data?.filter((item: any) => item[0] !== '公務統計報表').slice(0,30)    
      return data
    })

    const onWordClick = (text: string) => {
      root.$router.push('/dataset')
    }

    return {
      tags, onWordClick
    }
  }
})
</script>