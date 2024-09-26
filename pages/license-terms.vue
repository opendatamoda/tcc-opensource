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
      <article>
        <section>
          <h3>政府資料開放授權條款－第1版</h3>
          <p>中華民國 104 年 7 月 27 日訂定</p>
          <p>
            為便利民眾共享及應用政府資料、促進及活化政府資料應用、結合民間創意提升政府資料品質及價值、優化政府服務品質，訂定本條款。
          </p>
        </section>
        <section>
          <h3>一、定義</h3>
          <ul class="zh-list-style">
            <li>
              <p>
                資料提供機關：指將職權範圍內取得或作成之各類電子資料，透過本條款釋出予公眾之政府機關（構）、公營事業機構、公立學校及行政法人。
              </p>
            </li>
            <li>
              <p>
                使用者：指依本條款規定取得開放資料，並對其利用之自然人、法人或團體，包括依本條款授權使用者再轉授權利用之人或團體。
              </p>
            </li>
            <li>
              <p>
                開放資料：指資料提供機關擁有完整著作財產權，或經授權得再轉授權第三人利用之資料，並以公開、可修改，且無不必要技術限制之格式提供者，包括但不限於下列著作：
              </p>
              <ul>
                <li>
                  <p>
                    編輯著作：選擇、編排具有創作性，而可受著作權法保護之資料庫或其他結構化資料組合。
                  </p>
                </li>
                <li>
                  <p>
                    素材：指開放資料集合物中，其他可受著作權法保護之獨立著作。
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                衍生物：指依本條款所提供之開放資料，進行後續重製、改作、編輯或為其他方式利用之修改物。
              </p>
            </li>
            <li>
              <p>
                資訊：指不受著作權法保護之純粹紀錄，並隨同開放資料一併提供者。前揭資訊除本條款授與權利之規定外，比照有關開放資料之規定辦理。
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3>二、授與權利</h3>
          <ul class="zh-list-style">
            <li>
              <p>
                各機關所提供之開放資料，授權使用者不限目的、時間及地域、非專屬、不可撤回、免授權金進行利用，利用之方式包括重製、散布、公開傳輸、公開播送、公開口述、公開上映、公開演出、編輯、改作，包括但不限於開發各種產品或服務型態之衍生物。
              </p>
            </li>
            <li><p>使用者得再轉授權他人為前項之利用。</p></li>
            <li>
              <p>
                使用者依本條款規定利用開放資料，無須另行取得各資料提供機關之書面或其他方式授權。
              </p>
            </li>
            <li>
              <p>本條款之授權範圍不包括專利權及商標權。</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>三、課予義務</h3>
          <ul class="zh-list-style">
            <li>
              <p>
                使用者利用依本條款提供之開放資料，視為同意遵守本條款之各項規定，並應以尊重第三人著作人格權之方式利用之。
              </p>
            </li>
            <li>
              <p>
                使用者利用依本條款提供之開放資料，及後續之衍生物，應以符合附件所示「顯名聲明」要求之方式，明確標示原資料提供機關之相關聲明；未盡顯名標示義務者，視為自始未取得開放資料之授權。
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3>四、版本更新及授權轉換</h3>
          <ul class="zh-list-style">
            <li>
              <p>
                本條款如有修正，依舊條款提供之開放資料，於新條款公告時，使用者得選擇採用新條款利用。但原資料提供機關，於提供開放資料時，已訂明其使用之特定版本條款者，不在此限。
              </p>
            </li>
            <li>
              <p>
                本條款與「創用CC授權 姓名標示 4.0 國際版本」相容，使用者依本條款利用開放資料，如後續以「創用CC授權 姓名標示 4.0 國際版本」規定之方式利用，視為符合本條款之規定。
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3>五、停止提供</h3>
          <p>有下列情形之一者，各資料提供機關得停止全部或一部開放資料之提供，使用者不得向資料提供機關請求任何賠償或補償：</p>
          <ul class="zh-list-style">
            <li>
              <p>
                因情事變更或其他正當事由，致各資料提供機關評估繼續提供該開放資料供公眾使用，已不符合公共利益之要求。
              </p>
            </li>
            <li>
              <p>
                所提供之開放資料，有侵害第三人智慧財產權、隱私權或其他法律上利益之虞。
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3>六、免責聲明</h3>
          <ul class="zh-list-style">
            <li>
              <p>
                依本條款提供之開放資料，不構成任何資料提供機關申述、保證或暗示其推薦、同意、許可或核准之意思表示；各資料提供機關僅於知悉其所提供之開放資料有錯誤或遺漏時，負修正及補充之責。
              </p>
            </li>
            <li>
              <p>
                使用者利用依本條款提供之開放資料，受有損害或損失，或致第三人受有損害或損失，而遭求償者，除法令另有規定外，各資料提供機關不負任何賠償或補償之責。
              </p>
            </li>
            <li>
              <p>
                使用者利用依本條款提供之開放資料，因故意或過失，致資料提供機關遭受損害，或第三人因此向資料提供機關請求賠償損害，使用者應對各機關負賠償責任。
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3>七、準據法</h3>
          <p>本條款之解釋、效力、履行及其他未盡事宜，以中華民國法律為準據法。</p>
        </section>
        <section>
          <h3>附件：顯名聲明</h3>
          <ul>
            <li><p>*	提供機關／單位 [年份] [開放資料釋出名稱與版本號]</p></li>
            <li><p>*	此開放資料依政府資料開放授權條款 (Open Government Data License) 進行公眾釋出，使用者於遵守本條款各項規定之前提下，得利用之。</p></li>
            <li><p>*	政府資料開放授權條款：<a href="https://data.gov.tw/license" title="另開視窗前往 政府資料開放授權條款" target="_blank" rel="noreferrer noopener">https://data.gov.tw/license</a></p></li>
          </ul>
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
    theContainerAnchor,
  },
  setup(_, { root }) {
    const pageTitle = ref<string>('授權條款')

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
    const content = '提供瞭解' + (process.env.WEBSITE_NAME || '網站名稱') + '授權條款';
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
