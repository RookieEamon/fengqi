<template>
  <div>
    <!-- 主体内容 -->
    <div class="cooperationContainer">
      <!-- 轮播图 -->
      <Banner/>
      <!-- 公告 -->
      <Notic />
      <!-- 合作流程 -->
      <Process />
    </div>
  </div>
</template>
<script>
import Banner from "./components/banner.vue";
// import Notic from "./components/notic.vue";
// import Process from "./components/process.vue";
export default {
  name: "Cooperation",
  components: {
    Banner,
    // Notic,
    // Process,
  },
  mounted() {
      // console.log(this.$route.meta.isShowFooterTop);
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
@import url("./static/icon_font/iconfont.css");
.cooperationContainer {
  width: 100%;
  //合作流程
}
</style>