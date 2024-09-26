<template>
  <main>
    <theBreadcrumbs :path="path" />
    <theSearchbar />
    <div class="page page--narrow">
      <theContainerAnchor />
      <h2 class="page-title">
        <span>
          {{ pageTitle }}
        </span>
      </h2>
      <bpa-accordion>
        <bpa-accordion-item>
          <template v-slot:title><h3>政府資料開放應用和政府資訊公開有何不同？</h3></template>
          <p>為便利人民共享及公平利用政府資訊，政府於民國94年頒定「政府資訊公開法」，明定與人民權益攸關之施政、措施及其它有關之政府資訊，以主動公開為原則並應適時為之，期透過施政之公開與透明，保障人民知的權利，增進人民對公共事務之瞭解、信賴促進民主之參與。</p>
          <p>配合資通訊科技的發展進步，除了資訊公開外，各國逐漸推動資料開放，將政府資料以資料集 (dataset) 為基本單位，提供開放格式、便於再利用的原始資料(raw data)，讓民眾在不受到限制的情形下，進行編輯、分析、公開傳輸或為其他利用方式，開發各種產品或應用服務，滿足民眾「用」的「權益」。</p>
        </bpa-accordion-item>
        <bpa-accordion-item>
          <template v-slot:title><h3>什麼是政府資料開放？為什麼要推動政府資料開放？有什麼好處？</h3></template>
          <p>「政府資料開放」(Open Data)為各機關於職權範圍內取得或做成，且依法得公開之各類電子資料，包含文字、數據、圖片、影像、聲音、詮釋資料(metadata)等，以開放格式於網路公開，提供個人、學校、團體、企業或政府機關等使用者，依其需求連結下載及利用。</p>
          <p>民眾為參與公共政策過程、監督政府施政作為或從事各項經濟活動，有賴大量且正確之資料，而政府正是各項資料的最大擁有者。將政府資料開放供民間自由取用，已蔚為國際趨勢，期藉由政府資料的開放，滿足民眾資料使用需求，以促使跨機關資料流通，增進施政 效能，提升民眾生活品質，強化民眾監督政府的力量。</p>
          <p>政府資料開放可結合民間無限創意，活化政府資料應用，進一步提升政府資料品質及價值，進而創新政府服務，並透過開放授權民間應用，創造資訊服務產業發展契機，期達成增進施政透明開放、提升機關決策品質、發展多元便民服務及助益資訊產業轉型等效益，創造民眾、政府、業界三贏局面。</p>
        </bpa-accordion-item>
        <bpa-accordion-item>
          <template v-slot:title><h3>下載資料集的CSV檔，打開來為亂碼，怎麼辦？</h3></template>
          <p>本平臺資料採用國際通用編碼格式「UTF-8」，因此使用Excel開啟瀏覽會出現亂碼現象，請使用文字編輯器開啟，或將編碼調整為「ANSI」格式即可。</p>
        </bpa-accordion-item>
        <bpa-accordion-item>
          <template v-slot:title><h3>如何獲得本資料開放平臺的資料集清單？</h3></template>
          <p>使用者可透過本平臺橫幅上「資料清冊下載」功能按鈕，點擊後即可取得平台上所有資料及清冊，圖示如下。</p>
          <img src="/images/faq0101.png" alt="常見問答圖片">
        </bpa-accordion-item>
        <bpa-accordion-item>
          <template v-slot:title><h3>為什麼下載了JSON檔案的資料，卻只看到一堆數字以及斜線？及可用何種軟體開啟？</h3></template>
          <p>由於JSON的標準編碼格式為UTF-8，與一般文字編輯器預設的Big-5編碼方式有所不同，故在使用者的檢視介面上，有可能會轉換為使用者無法讀取的字碼。建議透過UTF-8編碼的文字編輯器，即可看到正確的文字。如果透過應用程式讀取，請記得將編碼格式設定為UTF-8。</p>
          <p>另外，使用者若欲瀏覽JSON格式相關資料，可透過線上解析器，如:<a href="http://jsonviewer.stack.hu/" title="另開視窗前往JSON線上解析器" target="_blank" rel="noreferrer noopener">http://jsonviewer.stack.hu/</a>等工具進行瀏覽。</p>
          <img src="https://opendata.taichung.gov.tw/base/images/JSON_Parser.jpg" alt="常見問答圖片">
        </bpa-accordion-item>
        <bpa-accordion-item>
          <template v-slot:title><h3>本開放資料平臺上列示的資料類型有那些？</h3></template>
          <p>目前在平臺上所提供各界公開使用的資料是由本府各單位所提供，依據資料性質的不同，而有不同格式，主要以開放檔案格式如CSV、XML、JSON、KML及SHP等格式為主，提供使用者下載應用，部分資料集直接透過「系統介接程式」(API)提供使用。建議您可依資料集「資料集類型」欄位，判斷資料集提供類型，目前本平臺分為兩項類型「系統介接程式」、「原始資料」。</p>
          <p>關於「系統介接程式」相關用法及說明請參考「<a href="https://datacenter.taichung.gov.tw/swagger/api-docs/" title="另開視窗前往 OpenAPI" target="_blank" rel="noreferrer noopener">OpenAPI</a>」專區</p>
        </bpa-accordion-item>
      </bpa-accordion>
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
    theContainerAnchor,
  },
  setup(_, { root }) {
    const pageTitle = ref<string>('常見問題')

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

    return {
      pageTitle,
      path,
    }
  },
  head() {
    const pageTitle = this.pageTitle;
    const content = '提供瞭解' + (process.env.WEBSITE_NAME || '網站名稱') + '常見問題';
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
  },
})
</script>
