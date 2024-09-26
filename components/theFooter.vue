<template>
  <footer>
    <a href="#ak-footer" id="ak-footer" title="下方功能區塊" accesskey="Z">:::</a>
    <div class="footer-container">
      <div>
        <nuxt-link to="/" title="回首頁">
          <img src="@/assets/images/footer-logo.png" alt="臺中市政府資料開放平臺Logo" />
        </nuxt-link>
      </div>
      <div>
        <ul>
          <li>
            <p>
              請使用Chrome、FireFox、Edge、Safari等瀏覽器瀏覽
            </p>
            <p>
              主辦機關：臺中市政府<br />
              聯絡地址：407610臺中市西屯區臺灣大道三段99號文心樓6樓
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://data.gov.tw/"
                title="另開視窗前往 政府資料開放平臺"
                target="_blank"
                ref="noreferrer noopener"
              >
                政府資料開放平臺
              </a>
            </p>
          </li>
          <li>
            <p>網站瀏覽人次：{{ visit_count }}</p>
          </li>
          <li>
            <small>
                This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" title="另開視窗 前往Privacy Policy" target="_blank" rel="noopener noreferrer">Privacy Policy<</a> and
                <a href="https://policies.google.com/terms" title="另開視窗 前往Terms of Service" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
            </small>
          </li>
          <li style="display: none;">
            <small>
              承辦廠商：藍星球資訊股份有限公司
            </small>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent, ref, useAsync } from '@nuxtjs/composition-api'
export default defineComponent({
  setup(props,{emit, root}) {
    const visit_count = ref(10800);

    return {
      visit_count
    }
  }
})
</script>
