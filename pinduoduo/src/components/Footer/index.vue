<template>
  <div>
    <!-- footer部分 -->
    <footer class="footer">
      <!-- 底部二维码和联系我们区域 -->
      <FooterTop v-show="path !== '/cooperation' && path !== '/recruitment'"/>
      <FooterCenter/>
      <!-- 最底部图片列表区域 -->
      <FooterBottom  v-show="path !== '/recruitment'"/>
    </footer>
  </div>
</template>
<script>
import FooterTop from "./components/FooterTop.vue";
import FooterCenter from "./components/FooterCenter.vue";
import FooterBottom from "./components/FooterBottom.vue";
export default {
  name: "Footer",
  data() {
    return {
      // isShowFooterTop: true,
    };
  },
  components: {
    FooterTop,
    FooterCenter,
    FooterBottom,
  },
  computed: {
    path(){
      return this.$route.path
    }
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
// 底部部分
.footer {
  background-color: #fff;
  // padding-top: 60px;
  // margin-top:60px ;
  position: relative;
  width: 100%;
  overflow: hidden;
  // 二维码和文字部分

  //底部列表部分

  //公司资质部分

  //图片列表部分
}
</style>