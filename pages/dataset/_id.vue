<template>
  <main>
    <theBreadcrumbs :path="path" />
    <theSearchbar />
    <div class="page page--detail print_page">
      <theContainerAnchor />
      <h2 class="page-title">
        <span>
          {{ pageTitle }}
          <svg class="award" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path fill="#bfbfbf" d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/>
          </svg>
        </span>
      </h2>
      <div class="custom-flex custom-flex--2cols">
        <div class="custom-flex-item custom-flex-item--right custom-flex-item--large">
          <section>
            <div class="toolbar">
              <h3>詮釋資料</h3>
              <div>
                <bpa-button theme="primary">資源一鍵下載</bpa-button>
                <bpa-button theme="primary">匯出詮釋資料</bpa-button>
              </div>
            </div>
            <table>
              <caption class="visually-hidden">詮釋資料詳細內容</caption>
              <tbody>
                <tr class="resource no-export">
                  <th>資料與資源</th>
                  <td>
                    <div>
                      <div class="resources" v-for="(item, index) in resourcesList" :key="index">
                        <bpa-button class="download" value="下載資源" :title="`下載 ${item.description} 檔案`">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <title>下載</title>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5356 7.17157L8.35358 10.3536C8.15832 10.5488 7.84174 10.5488 7.64647 10.3536L4.46449 7.17157C4.26923 6.97631 4.26923 6.65973 4.46449 6.46447C4.65975 6.2692 4.97634 6.2692 5.1716 6.46447L7.50003 8.79289L7.50003 1H8.50003V8.79289L10.8285 6.46447C11.0237 6.2692 11.3403 6.2692 11.5356 6.46447C11.7308 6.65973 11.7308 6.97631 11.5356 7.17157Z" fill="#36558F"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9H5.29295L7.64647 11.3535C7.84173 11.5488 8.15832 11.5488 8.35358 11.3535L10.7071 9H12C12.9319 9 13.3978 9 13.7654 9.15224C14.2554 9.35523 14.6448 9.74458 14.8478 10.2346C15 10.6022 15 11.0681 15 12C15 12.9319 15 13.3978 14.8478 13.7654C14.6448 14.2554 14.2554 14.6448 13.7654 14.8478C13.3978 15 12.9319 15 12 15H4C3.06812 15 2.60218 15 2.23463 14.8478C1.74458 14.6448 1.35523 14.2554 1.15224 13.7654C1 13.3978 1 12.9319 1 12C1 11.0681 1 10.6022 1.15224 10.2346C1.35523 9.74458 1.74458 9.35523 2.23463 9.15224C2.60218 9 3.06812 9 4 9ZM13.5 14C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13C13.2239 13 13 13.2239 13 13.5C13 13.7761 13.2239 14 13.5 14Z" fill="#36558F"/>
                          </svg>
                          <span>
                            {{ item.file_format }}
                          </span>
                        </bpa-button>
                        <bpa-button @click="previewDialogVisible = true" value="開啟燈箱預覽資源" :title="`預覽 ${item.description} 資源內容`">
                          <span>預覽</span>
                        </bpa-button>
                        <bpa-button @click="apiDialogVisible = true" value="開啟燈箱檢視API" :title="`檢視 ${item.description} API使用說明`">
                          <span>API</span>
                        </bpa-button>
                        {{ item.description }}
                      </div>
                    </div>
                    
                    <div class="click-more" v-if="data.resources.length>3">
                      <bpa-button @click="showMore = !showMore">
                        更多資源
                      </bpa-button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">詮釋資料更新時間</th>
                  <td>{{ data.changed }}</td>
                </tr>
                <tr>
                  <th scope="row">建立日期</th>
                  <td>{{ data.created }}</td>
                </tr>                
                <tr>
                  <th scope="row">使用對象</th>
                  <td>{{ data.audience }}</td>
                </tr>
                <tr>
                  <th scope="row">服務分類</th>
                  <td>{{ data.category_name }}</td>
                </tr>
                <tr>
                  <th scope="row">資料集上架方式</th>
                  <td>{{ data.creation_type }}</td>
                </tr>
                <tr>
                  <th scope="row">資料集提供機關</th>
                  <td>{{ data.maintainer_organization_name }}</td>
                </tr>
                <tr>
                  <th scope="row">資料集提供機關聯絡人</th>
                  <td>{{ data.maintainer_name }}</td>
                </tr>
                <tr>
                  <th scope="row">資料集提供機關聯絡人電話</th>
                  <td>{{ data.maintainer_phone }}</td>
                </tr>
                <tr>
                  <th scope="row">更新頻率</th>
                  <td>{{ data.update_freq_desc }}</td>
                </tr>
                <tr>
                  <th scope="row">計費方式</th>
                  <td>{{ data.charge }}</td>
                </tr>
                <tr>
                  <th scope="row">關鍵字</th>
                  <td>{{ data.keywords }}</td>
                </tr>
                <tr>
                  <th scope="row">資料集語系</th>
                  <td>{{ data.language }}</td>
                </tr>
                <tr>
                  <th scope="row">資料資源欄位</th>
                  <td>{{ data.resources_text }}</td>
                </tr>
                <tr>
                  <th scope="row">資料資源備註</th>
                  <td>{{ data.resources_note }}</td>
                </tr>
                <tr>
                  <th scope="row">資料量</th>
                  <td>{{ data.number_of_data }}</td>
                </tr>
                <tr>
                  <th scope="row">上架日期</th>
                  <td>{{ data.publish_date }}</td>
                </tr>
                <tr>
                  <th scope="row">備註</th>
                  <td>{{ data.notes }}</td>
                </tr>
              </tbody>
            </table>
          </section>
          
          <section>
            <div class="toolbar">
              <h3>回應清單</h3>
              <bpa-button theme="primary" @click="messageDialogVisible = true">新增留言</bpa-button>
            </div>
            <div class="comment-list-box">
              <ul class="comment-list">
                <li v-for="(item, idx) in messageData" :key="idx">
                  <div class="comment-list-item comment-list-item--left">
                    <div class="comment-list-item-avatar"></div>
                    <div class="comment-list-item-main">
                      <div class="comment-list-item-main-content">
                        {{ item.message_content }}
                      </div>
                      <div class="comment-list-item-main-info">
                        <div>{{ item.message_person }}</div>
                        <div class="subinfo">{{ item.messageTime }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="comment-list-item comment-list-item--right">
                    <div class="comment-list-item-avatar"></div>
                    <div class="comment-list-item-main">
                      <div class="comment-list-item-main-content">
                        {{ item.reply_content }}
                      </div>
                      <div class="comment-list-item-main-info">
                        <div>臺中市政府資料開放平臺</div>
                        <div class="subinfo">{{ item.reply_time }}</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <theAsideSection :data="data" :title="pageTitle" />
      </div>
    </div>

    <bpa-dialog
      :visible.sync="previewDialogVisible"
      header="預覽"
      @close="previewDialogVisible = false"
      :clickoutside="false"
    >
      <div class="top-table" >
        <table>
          <tr>
            <th scope="row" width="30%">資料名稱</th>
            <td>{{ data.title }}</td>
          </tr>
          <tr>
            <th scope="row">檔案名稱</th>
            <td>{{ chooeResourceItem.description }}</td>
          </tr>                
          <tr>
            <th scope="row">資料資源欄位</th>
            <td>{{ chooeResourceItem.resources_text }}</td>
          </tr>
        </table>
      </div>
      <div class="preview-table">
        <table>
          <thead>
            <tr>
              <th scope="row" v-for="(row, key) in previewDataList[0]">
                {{ key }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in previewDataList" :key="idx">
              <td v-for="(item, idx) in row" :key="idx">{{ item }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </bpa-dialog>
    <bpa-dialog
      :visible.sync="apiDialogVisible"
      header="API"
      @close="apiDialogVisible = false"
      :clickoutside="false"
    >
      <div class="top-table">
        <table>
          <tr>
            <th scope="row" width="30%">API位址</th>
            <td>{{ chooeResourceItem.url }}</td>
          </tr>
          <tr>
            <th scope="row">異動時間</th>
            <td>{{ chooeResourceItem.modify_time }}</td>
          </tr>
          <tr>
            <th scope="row">API使用方式</th>
            <td>GET</td>
          </tr>
        </table>
      </div>
      <div>
        <table>
          <tr>
            <th scope="row">參數名稱</th>
            <th scope="row">類型</th>
            <th scope="row">描述</th>
          </tr>
          <tr>
            <td>offset</td>
            <td>int</td>
            <td>指定從第幾筆後開始回傳。可與limit配合使用達到分頁目的。</td>
          </tr>                
          <tr>
            <td>fields</td>
            <td>string</td>
            <td>資料資源之欄位名稱，將回傳指定欄位的內容。</td>
          </tr>
          <tr>
            <td>limit</td>
            <td>int</td>
            <td>限制最多回傳的資料筆數。(預設1000)</td>
          </tr>
          <tr>
            <td>sort</td>
            <td>string</td>
            <td>排序資料資源之欄位名稱。</td>
          </tr>
          <tr>
            <td>filters</td>
            <td>string</td>
            <td>資輸入資料資源之過濾條件，參數為資料欄位所含之內容。</td>
          </tr>
          <tr>
            <td>q</td>
            <td>string</td>
            <td>資料資源所有內容之全文檢索字串。視業務需要可選擇性提供。</td>
          </tr>
        </table>
      </div>
    </bpa-dialog>
    <bpa-dialog
      :visible.sync="messageDialogVisible"
      header="新增留言"
      @close="messageDialogVisible = false"
      :clickoutside="false"
    >
      <bpa-form>
        <p>留言者：王小明</p>
        <p>留言日期： 2024/05/10 16:00:00</p>
        <legend>留言內容</legend>
        <bpa-input type="textarea"/>
      </bpa-form>
      <template slot="footer">
        <bpa-button theme="primary" @click="messageDialogVisible = false">送出留言</bpa-button>
        <bpa-button @click="messageDialogVisible = false">取消</bpa-button>
      </template>
    </bpa-dialog>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import theSearchbar from '@/components/theSearchbar.vue'
import theBreadcrumbs from '@/components/theBreadcrumbs.vue'
import theContainerAnchor from '@/components/theContainerAnchor.vue'
import theAsideSection from '@/components/theAsideSection.vue'

export default defineComponent({
  components: {
    theSearchbar,
    theBreadcrumbs,
    theContainerAnchor,
    theAsideSection,
  },
  setup(_, { root }) {
    const pageTitle = ref('10720-90-02-2 臺中市社會救助通報處理情形');
    const path = ref([
      {
        title: '首頁',
        to: '/',
      },
      {
        title: '全部資料集',
        to: '/dataset',
      },
      {
        title: pageTitle.value,
        to: root.$nuxt.$route.path,
      },
    ]);
    const data = ref({
      title: '10720-90-02-2 臺中市社會救助通報處理情形',
      description: '針對臺中市社會救助通報處理情形進行統計',
      created: '2023-10-11 10:57:22',
      changed: '2023-10-24 00:31:23',
      audience: '一般民眾',
      category_name: '生活安全及品質',
      creation_type: 'rawData',
      org_name: '臺中市政府社會局',
      maintainer_organization_name: '臺中市政府社會局',
      maintainer_name: '藍星球',
      maintainer_phone: '(04)22289111分機37226',
      update_freq_desc: '每季',
      charge: '免費',
      keywords: '公務統計報表、社會救助通報、公務統計報表、社會救助通報、公務統計報表、社會救助通報',
      language: '中文',
      resources_text: '地區、項目、欄位名稱、數值、資料時間日期、資料週期、郵遞區號、機關代碼、電子郵件、行動電話、市話、縣市別代碼、行政區域代碼',
      resources_note: '臺中市社會救助通報處理情形資源備註',
      number_of_data: '100MB',
      publish_date: '	2019-08-13',
      notes: '臺中市政府OAS標準之API說明文件:https://datacenter.taichung.gov.tw/swagger/yaml/387120000J，Swagger 產生API說明頁面網址。https://datacenter.taichung.gov.tw/swagger/api-docs/',
      tags: ['公務統計報表', '社會救助通報'],
      rank: '4.8',
      rating_count: 100,
      view_count: 100,
      recent_view_count: 80,
      download_count: 20,
      resources: [
        {
          description: "2023 7 10720-90-02-2 臺中市社會救助通報處理情形.XML",
          file_format: "XML",
        },
        {
          description: "2023 7 10720-90-02-2 臺中市社會救助通報處理情形.XML",
          file_format: "XML",
        },
        {
          description: "2023 7 10720-90-02-2 臺中市社會救助通報處理情形.XML",
          file_format: "XML",
        },
        {
          description: "2023 7 10720-90-02-2 臺中市社會救助通報處理情形.XML",
          file_format: "XML",
        },
        {
          description: "2023 7 10720-90-02-2 臺中市社會救助通報處理情形.XML",
          file_format: "XML",
        },
      ]
    });
    const showMore = ref(false);
    const resourcesList = computed(() => {
      if(Array.isArray(data.value.resources) && data.value.resources.length>0) {
        if(showMore.value) return data.value.resources
        else return data.value.resources.slice(0,3)
      } else {
        return []
      }
    });
    const previewDataList = ref([
      {
        No: '10720-90-02-2',
        Name: '臺中市社會救助通報處理情形',
        DataDate: '2023-07-01',
        Description: '社會救助通報處理情形-處理件數(單位:件)',
      },
      {
        No: '10720-90-02-2',
        Name: '臺中市社會救助通報處理情形',
        DataDate: '2023-07-02',
        Description: '社會救助通報處理情形-處理件數(單位:件)',
      },
      {
        No: '10720-90-02-2',
        Name: '臺中市社會救助通報處理情形',
        DataDate: '2023-07-03',
        Description: '社會救助通報處理情形-處理件數(單位:件)',
      },
      {
        No: '10720-90-02-2',
        Name: '臺中市社會救助通報處理情形',
        DataDate: '2023-07-04',
        Description: '社會救助通報處理情形-處理件數(單位:件)',
      },
      {
        No: '10720-90-02-2',
        Name: '臺中市社會救助通報處理情形',
        DataDate: '2023-07-05',
        Description: '社會救助通報處理情形-處理件數(單位:件)',
      }
    ]);

    const messageData = ref([
      {
        message_content: '你好',
        message_person: '王小明',
        messageTime: '2023-10-24 00:31:23',
        reply_content: '你好',
        reply_time: '2023-10-25 00:31:23'
      },
      {
        message_content: '關於「資料集詮釋資料欄位」的建議: 如個人身份信息或救助情況，因此必須確保數據的安全性和隱私保護，以防止未經授權的訪問或數據泄露。',
        message_person: '王小明',
        messageTime: '2023-10-26 00:31:23',
        reply_content: '當處理數據時，確保數據的安全性和隱私保護是至關重要的。這包括採取必要的安全措施，以防止未經授權的訪問或數據泄露。我們會嚴格遵守相關的法律法規和隱私政策，並採取技術和組織措施來保護數據的安全性。此外，我們將定期審查和更新安全措施，以應對不斷變化的安全威脅。',
        reply_time: '2023-10-27 00:31:23'
      }
    ]);
    const chooeResourceItem = ref({
      description: "2023 7 10720-90-02-2 臺中市社會救助通報處理情形.XML",
      file_format: 'XML',
      url: 'https://datacenter.taichung.gov.tw/swagger/OpenData/6fed8744-d2f0-490a-bcaf-dfb2131d147a',
      modify_time: '2024-05-03 16:16:40',
      resources_text: '地區、項目、欄位名稱、數值、資料時間日期、資料週期、郵遞區號、機關代碼、電子郵件、行動電話、市話、縣市別代碼、行政區域代碼',
    });
    const apiDialogVisible = ref(false);
    const previewDialogVisible = ref(false);
    const messageDialogVisible = ref(false);

    return {
      pageTitle, path,
      data, showMore, resourcesList, messageData, previewDataList, chooeResourceItem, 
      apiDialogVisible, previewDialogVisible, messageDialogVisible
    }
  },
  head() {
    const pageTitle = this.pageTitle;
    const content = (process.env.WEBSITE_NAME || '網站名稱') + '資料集：' + pageTitle;
    const url = (process.env.NUXT_PUBLIC_BASE_URL || location.hostname) + this.$nuxt.$route.path;

    return {
      title: pageTitle,
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
