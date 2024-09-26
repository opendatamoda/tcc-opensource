<template>
  <div>
    <bpa-breadcrumb v-if="breadcrumb.length">
      <bpa-breadcrumb-item
        v-for="(item, index) in breadcrumb"
        :title="item.title"
        :to="item.to"
        :key="`path-${index}`"
      >
        <slot v-if="item.icon"><i :class="`${item.icon}`"></i></slot>
        {{ item.title }}
      </bpa-breadcrumb-item>
    </bpa-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    path: {
      type: Array,
      default: [
        {
          title: '首頁',
          to: '/',
        },
      ],
      required: true,
    },
  },
  setup(props) {
    const breadcrumb = computed(() => {
      return props.path as {title: string, to: string, icon: string}[]
    })
    return {
      breadcrumb
    }
  }
})
</script>
