<template>
  <div class="main" >
    <!-- 头部导航 -->
          
    <div v-show="!$route.meta.isHeader" class="headerBox">
      <div class="reportHeader">
        <span class="report">拼多多举报平台</span>
        <div class="reportNav">
          <a href="javascript:;" @click="toComplaint">廉正举报</a>
          <a href="javascript:;" @click="toMerchantBackground">业务投诉</a>
          <a href="javascript:;" @click="toContraband">违禁品举报</a>
        </div>
      </div>
    </div>
    <router-view ></router-view>
  </div>
</template>
<script>
export default {
  name: "Complaint",
  data() {
    return {
    }
  },
  computed: {
     
  },
  methods: {
    toContraband(){
      this.$router.push('/complaint/contraband')
    },
    toComplaint(){
      this.$router.push('/complaint')
    },
    toMerchantBackground(){
      this.$router.push('/complaint/merchantbackground')
    },
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.main {
  width: 100%;
  // 头部
  .headerBox {
    width: 100%;
    background-color: #ff5d5e;
    .reportHeader {
      width: 1160px;
      height: 60px;
      margin: 0 auto;
      display: flex;
      text-align: center;
      line-height: 60px;
      .report {
        font-size: 19px;
        color: #fff;
        margin: 0 80px;
      }
      .reportNav {
        a {
          font-size: 15px;
          color: #fff;
          margin: 0 20px;
        }
      }
    }
  }
}
</style>