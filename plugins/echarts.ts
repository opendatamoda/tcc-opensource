import Vue from 'vue';
import * as echarts from 'echarts';
import type { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $echarts: typeof echarts;
  }
}

Vue.prototype.$echarts = echarts;