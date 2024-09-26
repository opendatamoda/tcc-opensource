<template>
  <main>
    <theBreadcrumbs :path="path" />
    <theSearchbar />
    <div class="page page--search">
      <theContainerAnchor />
      <h2 class="page-title">
        <span>
          {{ pageTitle }}
        </span>
      </h2>
      <div class="custom-flex custom-flex--2cols">
        <aside
          class="custom-flex-item custom-flex-item--left custom-flex-item--small"
        >
          <bpa-button
            theme="primary"
            class="btn-filter"
            @click="handleToggleFilterBlockShow"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <title>篩選條件</title>
              <path
                d="M6 7C6 6.44772 6.44772 6 7 6H9C9.55228 6 10 6.44772 10 7V12.382C10 12.7607 9.786 13.107 9.44721 13.2764L7.44721 14.2764C6.78231 14.6088 6 14.1253 6 13.382V7Z"
                fill="#664300"
              />
              <path
                d="M1.70711 3.70711L5.70711 7.70711C5.89464 7.89464 6.149 8 6.41421 8H9.58579C9.851 8 10.1054 7.89464 10.2929 7.70711L14.2929 3.70711C14.9229 3.07714 14.4767 2 13.5858 2H2.41421C1.52331 2 1.07714 3.07714 1.70711 3.70711Z"
                fill="#664300"
              />
            </svg>
            <span v-if="filterBlockShow">收合篩選條件</span>
            <span v-else>展開篩選條件</span>
          </bpa-button>
          <div
            :class="[
              'aside-filter',
              filterBlockShow ? 'aside-filter--open' : '',
            ]"
          >
            <bpa-accordion
              v-for="(item, index) in checkboxList"
              :key="item.title"
            >
              <bpa-accordion-item
                :title="item.title"
                :open="index === 0 ? true : false"
              >
                <ul class="flex flex-col" v-if="item.buckets.length > 0">
                  <li v-for="(bucket, idx) in item.buckets" :key="bucket.name">
                    <bpa-checkbox
                      :value="bucket.value"
                      v-model="params[item.key]"
                    >
                      {{ bucket.name }} {{ `(${bucket.count})` }}
                    </bpa-checkbox>
                  </li>
                </ul>
                <em v-else> 沒有 {{ item.title }} 符合這個搜尋結果 </em>
              </bpa-accordion-item>
            </bpa-accordion>
          </div>
        </aside>
        <div
          class="custom-flex-item custom-flex-item--right custom-flex-item--large"
        >
          <div class="toolbar">
            <div class="flex flex-wrap">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <title>傳聲筒</title>
                  <g clip-path="url(#clip0_3190_14)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.5 1.5C23.5 1.15342 23.3205 0.831557 23.0257 0.64935C22.7309 0.467144 22.3628 0.45058 22.0528 0.605574L14.2639 4.5H4C3.28431 4.5 2.63019 4.62666 2.06029 4.92066C1.48103 5.21948 1.04657 5.66164 0.735211 6.19787C0.142427 7.21877 0 8.57799 0 10C0 13.1205 1.52419 14.6618 2.75746 14.9701C2.83678 14.99 2.91824 15 3 15H6V18.25V22.5C6 23.0523 6.44772 23.5 7 23.5H12C12.5523 23.5 13 23.0523 13 22.5V15H14.238L22.0097 19.3716C22.3194 19.5457 22.6982 19.5426 23.0048 19.3632C23.3115 19.1839 23.5 18.8553 23.5 18.5V1.5ZM14.9472 6.39443L21.5 3.11804V16.7902L14.9903 13.1284C14.8406 13.0442 14.6717 13 14.5 13H12C11.4477 13 11 13.4477 11 14V21.5H8V18.25V14C8 13.4477 7.55228 13 7 13H4.4265C3.18897 10.4437 3.6951 8.00892 4.40924 6.5H14.5C14.6552 6.5 14.8084 6.46386 14.9472 6.39443Z"
                      fill="#36558F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3190_14">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                找到<span class="count oswald">{{ totalRecord }}</span
                >個相符資料集
              </div>
              <bpa-select
                v-model="sortSelect"
                :options="sortSelectOptions"
                disabledClear
              />
            </div>
          </div>
          <div>
            <ul class="general-list general-list--white">
              <li
                class="general-list-item"
                v-for="(item, idx) in dataList"
                :key="item.id"
              >
                <div class="general-list-item-maininfo">
                  <div class="general-list-item-title">
                    <nuxt-link
                      to="/dataset/1"
                      :title="`前往${item.title}資料集`"
                    >
                      {{ item.title }}
                    </nuxt-link>
                  </div>
                  <div class="general-list-item-content">
                    {{ item.description }}
                  </div>
                  <div class="general-list-item-footer-info">
                    <div>
                      <svg
                        class="award"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                          fill="#bfbfbf"
                          d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span class="visually-hidden">資料集評分：</span>
                      {{ item.rank ? item.rank.toFixed(1) : 0 }}
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="list-icon"
                      >
                        <title>星等</title>
                        <g clip-path="url(#clip0_3189_8)">
                          <path
                            d="M8.04894 0.92705C8.3483 0.00573924 9.6517 0.00573965 9.95106 0.92705L11.0206 4.21885C11.1545 4.63087 11.5385 4.90983 11.9717 4.90983H15.4329C16.4016 4.90983 16.8044 6.14945 16.0207 6.71885L13.2205 8.75329C12.87 9.00793 12.7234 9.4593 12.8572 9.87132L13.9268 13.1631C14.2261 14.0844 13.1717 14.8506 12.388 14.2812L9.58779 12.2467C9.2373 11.9921 8.7627 11.9921 8.41221 12.2467L5.61204 14.2812C4.82833 14.8506 3.77385 14.0844 4.0732 13.1631L5.14277 9.87132C5.27665 9.4593 5.12999 9.00793 4.7795 8.75329L1.97933 6.71885C1.19562 6.14945 1.59839 4.90983 2.56712 4.90983H6.02832C6.46154 4.90983 6.8455 4.63087 6.97937 4.21885L8.04894 0.92705Z"
                            fill="#FFA800"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3189_8">
                            <rect width="18" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <ul class="tag-list">
                        <li
                          class="tag-list-item"
                          v-for="(format, idx2) in item.all_file_format"
                          :key="format"
                        >
                          <nuxt-link
                            to="/dataset/"
                            :title="`前往${item.title}資料集`"
                          >
                            <span class="tag">{{ format }}</span>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="list-icon"
                        aria-hidden="true"
                      >
                        <title>時間</title>
                        <g clip-path="url(#clip0_3190_11)">
                          <circle cx="8" cy="8" r="7.5" stroke="#555555" />
                          <path
                            d="M8 3V9H12"
                            stroke="#555555"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3190_11">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>{{ item.changed }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <bpa-pagination
            :total.sync="totalRecord"
            :current-page.sync="currentPage"
            :page-size.sync="pageSize"
            :pager-count="5"
            :pageSizeOptions="pageSizeOptions"
            :layout="['total_item', 'total_page', 'jump']"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUnmounted,
  computed,
} from "@nuxtjs/composition-api";
import theSearchbar from "@/components/theSearchbar.vue";
import theBreadcrumbs from "@/components/theBreadcrumbs.vue";
import theContainerAnchor from "@/components/theContainerAnchor.vue";

export default defineComponent({
  components: {
    theSearchbar,
    theBreadcrumbs,
    theContainerAnchor,
  },
  setup(_, { root }) {
    const pageTitle = computed(() => {
      let title: string = pageTitle.value
      if (root.$route.query.tags) {
        let tags = root.$route.query.tags;
        title = `${tags} 相關資料集`;
      } 
      return title
    });

    const path = ref([
      {
        title: "首頁",
        to: "/",
      },
      {
        title: pageTitle.value,
        to: root.$nuxt.$route.path,
      },
    ]);

    const filterBlockShow = ref(true);
    const handleToggleFilterBlockShow = () => {
      filterBlockShow.value = !filterBlockShow.value;
    };

    const closeFilterBlockShow = () => {
      filterBlockShow.value = false;
    };

    const dataList = ref([
      {
        id: 1,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 2,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 3,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 4,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 5,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 6,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 7,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 8,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 9,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
      {
        id: 10,
        title: "10720-90-02-2 臺中市社會救助通報處理情形",
        description: "針對臺中市社會救助通報處理情形進行統計",
        all_file_format: ["JSON", "CSV", "XML"],
        changed: "2024-05-09 12:20:00",
        rank: 4.9,
      },
    ]);
    const checkboxList = ref([
      {
        key: "org_name1",
        title: "機關1",
        buckets: [
          { name: "臺中市政府主計處", value: "臺中市政府主計處", count: 566 },
          { name: "臺中市政府警察局", value: "臺中市政府警察局", count: 397 },
          {
            name: "臺中市政府都市發展局",
            value: "臺中市政府都市發展局",
            count: 342,
          },
          { name: "臺中市政府社會局", value: "臺中市政府社會局", count: 294 },
          { name: "臺中市政府民政局", value: "臺中市政府民政局", count: 278 },
        ],
      },
      {
        key: "org_name2",
        title: "機關2",
        buckets: [
          { name: "臺中市政府主計處", value: "臺中市政府主計處", count: 566 },
          { name: "臺中市政府警察局", value: "臺中市政府警察局", count: 397 },
          {
            name: "臺中市政府都市發展局",
            value: "臺中市政府都市發展局",
            count: 342,
          },
          { name: "臺中市政府社會局", value: "臺中市政府社會局", count: 294 },
          { name: "臺中市政府民政局", value: "臺中市政府民政局", count: 278 },
        ],
      },
      {
        key: "org_name3",
        title: "機關3",
        buckets: [
          { name: "臺中市政府主計處", value: "臺中市政府主計處", count: 566 },
          { name: "臺中市政府警察局", value: "臺中市政府警察局", count: 397 },
          {
            name: "臺中市政府都市發展局",
            value: "臺中市政府都市發展局",
            count: 342,
          },
          { name: "臺中市政府社會局", value: "臺中市政府社會局", count: 294 },
          { name: "臺中市政府民政局", value: "臺中市政府民政局", count: 278 },
        ],
      },
      {
        key: "org_name4",
        title: "機關4",
        buckets: [
          { name: "臺中市政府主計處", value: "臺中市政府主計處", count: 566 },
          { name: "臺中市政府警察局", value: "臺中市政府警察局", count: 397 },
          {
            name: "臺中市政府都市發展局",
            value: "臺中市政府都市發展局",
            count: 342,
          },
          { name: "臺中市政府社會局", value: "臺中市政府社會局", count: 294 },
          { name: "臺中市政府民政局", value: "臺中市政府民政局", count: 278 },
        ],
      },
    ]);
    const params = reactive({
      q: "",
      org_name1: [],
      org_name2: [],
      org_name3: [],
      org_name4: [],
    });

    const sortSelect = ref("_score_desc");
    const sortSelectOptions = [
      { label: "依相關性排序", value: "_score_desc" },
      { label: "依最後更新日期排序", value: "changed.date_desc" },
      { label: "依名稱遞增排序", value: "title.keyword_asc" },
      { label: "依名稱遞減排序", value: "title.keyword_desc" },
      { label: "依熱門程度排序", value: "view_count_desc" },
    ];

    const totalRecord = ref(100);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const pageSizeOptions = [
      { label: "10", value: 10 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
    ];

    const nowWindowWidth = ref(0);
    const preWindowWidth = ref(0);

    const checkResize = () => {
      nowWindowWidth.value = document.body.clientWidth;
      if (nowWindowWidth.value !== preWindowWidth.value) {
        preWindowWidth.value = nowWindowWidth.value;
        closeFilterBlockShow();
      }
    };

    onMounted(() => {
      closeFilterBlockShow();
      preWindowWidth.value = document.body.clientWidth;
      window.addEventListener("resize", checkResize);
    });

    onUnmounted(() => {
      window.addEventListener("resize", checkResize);
    });

    return {
      pageTitle,
      path,
      params,
      dataList,
      checkboxList,
      sortSelect,
      sortSelectOptions,
      filterBlockShow,
      handleToggleFilterBlockShow,
      totalRecord,
      currentPage,
      pageSize,
      pageSizeOptions,
    };
  },
  head() {
    const pageTitle = this.pageTitle;
    const content =
      "搜尋" + (process.env.WEBSITE_NAME || "網站名稱") + "關於" + pageTitle;
    const url =
      (process.env.NUXT_PUBLIC_BASE_URL || "Domain name") +
      this.$nuxt.$route.path;

    return {
      title: this.pageTitle,
      meta: [
        { hid: "description", name: "description", content },
        { hid: "og:url", property: "og:url", content: url },
        {
          hid: "og:title",
          property: "og:title",
          content: pageTitle + " | " + process.env.WEBSITE_NAME,
        },
        { hid: "og:description", property: "og:description", content },
        { hid: "twitter:url", name: "twitter:url", content: url },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: pageTitle + " | " + process.env.WEBSITE_NAME,
        },
        { hid: "twitter:description", name: "twitter:description", content },
      ],
    } as any;
  },
});
</script>
