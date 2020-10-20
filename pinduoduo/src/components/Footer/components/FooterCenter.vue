<template>
  <div>
      <div class="footerQualifications">
        <div class="top">
          <span
            >Copyright 2015-2020 pinduoduo.com 版权所有
            (增值电信业务经营许可证：沪B2-20170215)</span
          >
        </div>
        <div class="middle">
          <a href="javascript:;"
            >互联网药品信息服务资格证书：（沪）-经营性-2019-0052</a
          >
        </div>
        <div class="bottom">
          <a href="javascript:;">沪公网安备 31010502000392号</a>
          <span>（沪）网械平台备字[2018]第00003号</span>
          <span><a href="javascript:;">沪ICP备15010535号-13</a></span>
          <span class="line">|</span>
          <a href="javascript:;">营业执照</a>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'FooterCenter',
  }
</script>
<style lang='less' rel='stylesheet/less' scoped>
   .footerQualifications {
    position: relative;
    background-color: #3f3e3e;
    height: 130px;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    color: #b1b1b1;
    .top {
      padding-top: 27px;
    }
    .middle {
      padding: 17px 0;
      a {
        color: #b1b1b1;
      }
    }
    .bottom {
      text-indent: 25px;
      a {
        color: #b1b1b1;
      }
      span {
        margin: 25px;
      }
      .line {
        margin: 0 15px 0 15px;
      }
    }
  }
</style>