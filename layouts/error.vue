
<template>
  <div class="container__box">
    <main class="main">   
      <div class="page page--error">
        <a href="#ak-container" title="中央內容區塊" id="ak-container" accesskey="C" name="ak-container">:::</a>
        <h2 class="page-title">哎呀！發生錯誤了！</h2>
        <div v-if="error.statusCode === 404">
          <div class="empty-block">您所訪問的頁面不存在 😭</div>
        </div>
        <div v-else>
          <div class="empty-block">請洽網站管理員，出現了<samp>{{ error.statusCode }}</samp>錯誤 😭</div>
        </div>
        
        <div style="text-align: center;">
          <a href="/">回首頁</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>
