<template>
  <div class="newtest">
    <h3><span>{{ title }}</span></h3>
    <ul class="general-list">
      <li class="general-list-item" v-for="item in data" :key="item.pid">
        <div class="general-list-item-maininfo">
          <div class="general-list-item-title">
            <nuxt-link to="/dataset/" :title="`前往${item.title}資料集`">
              {{ item.title }}
            </nuxt-link>
          </div>
          <div class="general-list-item-footer-info justify-content-space-between">
            <div>
              <ul class="tag-list">
                <li class="tag-list-item" v-for="(format, idx) in item.all_file_format" :key="idx">
                  <nuxt-link to="/dataset/" :title="`前往${item.title}資料集`">
                    <span class="tag tag--secondary">{{ format }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <span>
              詮釋資料更新時間: {{ item.changed }}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <nuxt-link role="button" class="bpa-btn bpa-btn--primary" :to="link" :title="'前往更多'+title">{{ '更多'+title }}</nuxt-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

interface DataList {
  pid: string
  title: string
  all_file_format: string[]
  changed: number
}

export default defineComponent({
  props: {
    title: String,
    data: {
      required: true,
      type: Array as () => DataList[],
    },
    link: String
  }
})
</script>