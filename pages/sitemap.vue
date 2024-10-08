<template>
  <main>
    <theBreadcrumbs :path="path" />
    <theSearchbar />
    <div id="sitemap" class="page page--narrow">
      <theContainerAnchor />
      <h2 class="page-title">
        <span>
          {{ pageTitle }}
        </span>
      </h2>
      <article>
        <section>
          <h3>網站區塊與快捷鍵</h3>
          <p>
            本網站依無障礙網頁設計原則建置，網站的主要內容分為三大區塊：<br />
            1. 上方功能區塊、2. 中央內容區塊、3.下方功能區塊。<br /><br />
            本網站的快速鍵(Accesskey)設定如下：
          </p>
          <p>
            <kbd>Alt</kbd
            >+<kbd>U</kbd>：上方功能區塊，包括整合檢索頁面、主題專區頁面等。<br />
            <kbd>Alt</kbd>+<kbd>S</kbd>：搜尋資料。<br />
            <kbd>Alt</kbd
            >+<kbd>C</kbd>：中央內容區塊，為本網站主要內容區。<br />
            <kbd>Alt</kbd>+<kbd>Z</kbd>：下方功能區塊。<br />
          </p>
          <p>
            如果您的瀏覽器是
            Firefox，快速鍵的使用方法為<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>快速鍵字母</kbd>，例如
            <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>
            會跳至網頁中央區塊，以此類推。<br />
          </p>
          <p>
            另外，如果您是 MAC
            用戶，快速鍵的使用方法為<kbd>Control</kbd>+<kbd>Option</kbd>+<kbd
              >快速鍵字母</kbd
            ><br />
          </p>
          <p>若以上方式皆無法使用，建議可以檢查是不是有自訂的快速鍵影響。</p>
          <table>
            <caption>
              各作業系統與瀏覽器快速鍵參考表：
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey"
                title="另開視窗 各作業系統與瀏覽器快捷鍵參考表來源網頁"
                target="_blank"
                rel="noreferrer noopener"
              >
                參考來源
              </a>
            </caption>
            <tbody>
              <tr>
                <th scope="col">瀏覽器/作業系統</th>
                <th scope="col">Windows</th>
                <th scope="col">Linux</th>
                <th scope="col">Mac</th>
              </tr>
              <tr>
                <th scope="row">Firefox</th>
                <td colspan="2">
                  <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>快速鍵字母</kbd>
                </td>
                <td>
                  Firefox 57 版本以上: <kbd>Control</kbd> + <kbd>Option</kbd> +
                  <kbd>快速鍵字母</kbd> 或 <kbd>Control</kbd> + <kbd>Alt</kbd> +
                  <kbd>快速鍵字母</kbd><br />
                  Firefox 14 版本以上: <kbd>Control</kbd> + <kbd>Alt</kbd> +
                  <kbd>快速鍵字母</kbd><br />
                  Firefox 13 版本以下: <kbd>Control</kbd> +
                  <kbd>快速鍵字母</kbd>
                </td>
              </tr>
              <tr>
                <th scope="row">Internet Explorer</th>
                <td rowspan="3">
                  <kbd>Alt</kbd> + <kbd>快速鍵字母</kbd><br />
                  <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>快速鍵字母</kbd>
                </td>
                <td colspan="2">無</td>
              </tr>
              <tr>
                <th scope="row">Edge</th>
                <td>無</td>
                <td rowspan="3">
                  <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>快速鍵字母</kbd
                  ><br />
                  <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> +
                  <kbd>快速鍵字母</kbd>
                </td>
              </tr>
              <tr>
                <th scope="row">Google Chrome</th>
                <td><kbd>Alt</kbd> + <kbd>快速鍵字母</kbd></td>
              </tr>
              <tr>
                <th scope="row">Safari</th>
                <td colspan="2">無</td>
              </tr>
            </tbody>
          </table>
          <p>
            ※
            當本網站項目頁籤無法以滑鼠點選時，您可利用以下鍵盤操作方式瀏覽資料：
          </p>
          <p>
            <kbd>←</kbd> <kbd>→</kbd> 或 <kbd>↑</kbd>
            <kbd>↓</kbd>：按左右鍵或上下鍵移動標籤順序。
          </p>
          <p>
            <kbd>Tab</kbd
            >：停留於該標籤後，可利用<kbd>Tab</kbd>鍵跳至內容瀏覽該筆資料，遇到單選按鈕(radio)時請配合使用<kbd
              >←</kbd
            >
            <kbd>→</kbd> 或 <kbd>↑</kbd> <kbd>↓</kbd>鍵移動項目順序。
          </p>
          <p>
            <kbd>Tab</kbd> + <kbd>Shift</kbd>：按 <kbd>Tab</kbd> +
            <kbd>Shift</kbd
            >可往回跳至上一筆資料；當跳回至標籤項目時您可繼續利用<kbd>←</kbd>
            <kbd>→</kbd> 或 <kbd>↑</kbd> <kbd>↓</kbd>鍵移動標籤順序。
          </p>
        </section>
        <section>
          <h3>網站地圖</h3>
          <ul>
            <li>
              <nuxt-link to="/" title="前往 首頁">首頁</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/sitemap" title="前往 網站導覽">網站導覽</nuxt-link>
            </li>
          </ul>
          <div class="d-flex justify-content-space-between">
            <div>
              <strong>資料集</strong>
              <ul>
                <li>
                  <nuxt-link to="/search" title="前往 所有資料集">所有資料集</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/categories" title="前往 分類專區">分類專區</nuxt-link>
                </li>
                <li>
                  <a class="cursor-pointer" title="下載 資料清單" @click.prevent="download">資料清單下載</a>
                </li>
              </ul>
            </div>
            <div>
              <strong>關於平臺</strong>
              <ul>
                <li>
                  <nuxt-link to="/about" title="前往 關於本站">關於本站</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/faq" title="前往 常見問題">常見問題</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/privacy-policy" title="前往 隱私權政策">隱私權政策</nuxt-link>
                </li>
              </ul>
            </div>
            <div>
              <strong>開放應用</strong>
              <ul>
                <li>
                  <nuxt-link to="/develop-guide" title="前往 開發指南">開發指南</nuxt-link>
                </li>
                <li>
                  <a href="https://datacenter.taichung.gov.tw/swagger/api-docs/" target="_blank" title="另開新視窗前往 OPEN API">OPEN API</a>
                </li>
                <li>
                  <nuxt-link to="/license-terms" title="前往 授權條款">授權條款</nuxt-link>
                </li>
              </ul>
            </div>
            <div>
              <strong>我想要更多</strong>
              <ul>
                <li>
                  <nuxt-link to="/suggests" title="前往 我想要更多">我想要更多</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import theSearchbar from '@/components/theSearchbar.vue'
import theBreadcrumbs from '@/components/theBreadcrumbs.vue'
import theContainerAnchor from '@/components/theContainerAnchor.vue'
export default defineComponent({
  components: {
    theSearchbar,
    theBreadcrumbs,
    theContainerAnchor
  },
  setup(_, { root }) {
    const pageTitle = ref<string>('網站導覽')    

    const path = [
      {
        title: '首頁',
        to: '/',
        icon: 'fas fa-home',
      },
      {
        title: pageTitle.value,
        to: root.$nuxt.$route.path,
      },
    ]

    const download = async() => {
      console.log('下載檔案');
    }

    return {
      pageTitle,
      path,
      download
    }
  },
  head() {
    const pageTitle = this.pageTitle;
    const content = (process.env.WEBSITE_NAME || 'Website name') + '資料集：' + pageTitle;
    const url = (process.env.NUXT_PUBLIC_BASE_URL || 'Domain name') + this.$nuxt.$route.path;

    return {
      title: this.pageTitle,
      meta: [
        { hid: 'description', name: 'description', content },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title',  content: pageTitle + ' | ' + process.env.WEBSITE_NAME},
        { hid: 'og:description', property: 'og:description', content },
        { hid: 'twitter:url', name: 'twitter:url', content: url },
        { hid: 'twitter:title', name: 'twitter:title', content: pageTitle + ' | ' + process.env.WEBSITE_NAME},
        { hid: 'twitter:description', name: 'twitter:description', content },
      ]
    } as any
  }
})
</script>
