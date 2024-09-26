# 臺中市政府資料開放平臺前端

[![image](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://opensource.org/licenses/MIT) [![image](https://img.shields.io/badge/node.js-v18.x-green.svg)](https://nodejs.org/en) [![image](https://img.shields.io/badge/Vue-2.x-green.svg)](https://vuejs.org/) [![image](https://img.shields.io/badge/Nuxt-2.x-green.svg)](https://nuxtjs.org)

## 簡介

本專案為[臺中市政府資料開放平臺](https://opendata.taichung.gov.tw/)前端開源，透過開源程式提供政府機關或民間團體，共同為政府開放資料盡一份心力。

本平臺採用 [Vue.js](https://vuejs.org/) 框架開發，使用了 [Nuxt.js](https://nuxtjs.org/) 框架進行 SSR(Server Side Rendering) 的開發，開發語言則使用了 [TypeScript](https://www.typescriptlang.org/)，並以 [element-plus](https://element-plus.org/) 作為UI框架，另外，也通過了無障礙網路空間服務網的 (Accessibility) 的 Freego 測試。

## 開發環境&安裝

本專案開發環境和本專案主要有用到的套件如下：

- [Node.js](https://nodejs.org/en/) v18.0.0 以上
- [Nuxt.js](https://nuxtjs.org/) v2.0.0 以上
- [TypeScript](https://www.typescriptlang.org/) v5.0.0 以上

建議使用 vscode 作為開發工具，並能安裝 vue 相關套件來做輔助。

### 安裝

git clone 下來後，新增 `.env` 檔案(內容可參考 `.env.example`)，`.env` 中可設定目前的環境變數，

NUXT_ENV 為使用者目前的環境階段，預設為 development，

NUXT_PUBLIC_BASE_URL 和 NUXT_API_URL 則能設定前台的網址和API的呼叫網址，

WEBSITE_NAME 和 WEBSITE_DESCRIPTION 和 WEBSITE_KEYWORDS 則是設定網站的名稱和網站的描述和網站的關鍵字。

然後於專案目錄下執行以下指令：

```bash
npm install
npm run dev
```

於 <http://localhost:3000/> 即可看到本專案的前台畫面。

## 專案說明

本專案的主要目錄結構如下：

assets - 放置靜態資源，如圖片、CSS樣式表等

components - 放置 Vue 元件

layouts - 放置頁面的版型

pages - 放置頁面

pluguns - 放置js插件

server - 放置於 nuxt 伺服器端的程式碼

static - 放置公開的靜態資源，如 favicon.ico

types - 放置供TypeScript辨識用文件

## License

本專案使用了 [MIT](https://github.com/moda-gov-tw/opendata-frontend/blob/main/frontstage/LICENSE) License

本專案有使用到的套件:
| Name | License | Description |
| ---- | ------- | ----------- |
| Vue.js | MIT | 本專案使用的前端框架
| Nuxt.js | MIT | 本專案使用的 Vue SSR 框架
| @nuxtjs/composition-api | MIT | 於NUXT專案中添加不同的撰寫風格
| TypeScript | Apache-2.0 | 本專案使用的程式語言
| Vuewordcloud | MIT | 本專案使用的文字雲套件
| Vue-countup-v2 | MIT | 本專案使用的數字計數套件
| Piman | Apache-2.0 | 本專案使用的Vue UI framework
| Sass | MIT | 本專案所使用的 CSS 風格
| cross-env | MIT | 可於NUXT專案設定多個環境變數
| prettier | MIT | 檢查並改善專案中的程式碼排版和顯示

## 備註

本專案為臺中市政府資料開放平臺前端開源示範案例，議題(Issues)處理範圍為程式錯誤(Bug)，版本更新則以系統改版等重大變更為主。