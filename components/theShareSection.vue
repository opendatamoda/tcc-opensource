<template>
  <div class="toolbar">
    <div class="link-to-outside-group">
      <a role="button" class="bpa-btn btn-link-to-outside" href="/" title="列印" @click.prevent="print()">
        <p>列印頁面</p>
      </a>
      <a role="button" class="bpa-btn btn-link-to-outside" href="/" title="分享此頁至 Facebook" @click.prevent="shareToFacebook()">
        <p>FB</p>
      </a>
      <a role="button" class="bpa-btn btn-link-to-outside" href="/" title="分享此頁至 Line" @click.prevent="shareToLine()">
        <p>Line</p>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, {root}) {
    const print = () => {
      window.open(location.href + '?print=1', 'printPage', 'width: 600px; height: 600px')
    }
    const shareToLine = () => {
      let sharedUrl = location.href;
      let sharedTitle = document.title;
      let lineUrl = 'https://line.me/R/msg/text/?' + encodeURIComponent(sharedTitle + '\n' + sharedUrl);
      window.open(lineUrl, 'linePage', 'width: 600px; height: 600px');
    }
    const shareToFacebook = () => {
      let sharedUrl = location.href;
      let sharedTitle = document.title;

      let facebookUrl = 'https://www.facebook.com/sharer/sharer.php' +
        '?u=' + encodeURIComponent(sharedUrl) +
        '&title=' + encodeURIComponent(sharedTitle)

      window.open(facebookUrl, 'facebookPage', 'width: 600px; height: 600px');
    }

    
    onMounted(() => {
      const { print } = root.$route.query
      root.$nextTick(() => {
        if(print === '1') {
          setTimeout(() => {
            window.print();
          }, 500);
          window.onafterprint = function() {
            window.close();
          };
        }
      })
      
    })

    return {
      print, shareToLine, shareToFacebook
    }
  }
})
</script>

<style lang="scss">
@media print {
  header {
    display: none;
  }
  nav {
    display: none;
  }
  .specialbar {
    display: none;
  }
}
</style>