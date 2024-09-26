<template>
  <div ref="chartContainer" style="width: 100%; height:400px;"></div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props, {emit, root}) {
    const chartContainer = ref();
    const myChart = ref();

    watch(() => props.data, () => {
      myChart.value.showLoading();
      myChart.value.setOption({
        tooltip: {},
        xAxis: {
          type: 'category',
          data: props.data.map((item: any) => item.name)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '機關名稱',
            data: props.data.map((item: any) => item.count),
            type: 'bar'
          }
        ]
      });
      myChart.value.hideLoading();
    }, { deep: true })
    
    onMounted(() => {
      myChart.value = root.$echarts.init(chartContainer.value);
      myChart.value.showLoading();
      myChart.value.setOption({
        tooltip: {},
        xAxis: {
          type: 'category',
          data: props.data.map((item: any) => item.name)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '機關名稱',
            type: 'bar',
            data: props.data.map((item: any) => item.count)
          }
        ]
      });
      myChart.value.hideLoading();
    })
    return {
      chartContainer
    }
  }
})
</script>