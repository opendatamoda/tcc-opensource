<template>
  <div class="dashboard-card">
    <div class="dashboard-card-header">
      <div class="dashboard-card-title"> {{ data.name }}</div>
      <div class="dashboard-card-icon">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92822 5.20336L17.5 1L17.3543 9.65903L14.2844 7.81707L10.6431 13.8859C10.5146 14.1 10.288 14.2361 10.0386 14.249C9.78925 14.2619 9.54982 14.1498 9.39999 13.95L5.56924 8.84233L1.64311 15.3859C1.43 15.7411 0.969305 15.8562 0.614119 15.6431C0.258934 15.43 0.14376 14.9693 0.356872 14.6141L4.85687 7.11413C4.98535 6.9 5.21197 6.76386 5.46135 6.751C5.71073 6.73813 5.95016 6.85023 6.09999 7.05L9.93075 12.1577L12.9982 7.04533L9.92822 5.20336Z" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="dashboard-card-container">
      <div class="dashboard-card-number oswald">
        <VueCountUpV2 :startVal="0" :endVal="data.number" :duration="2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    data: {
      type: Object,
      require: true,
      default: {
        name: '',
        fontawesomeicon: '',
        number: 0
      }
    },
  },
})
</script>
