<template>
  <div>
    <div class="processWrappper">
      <div class="processMain">
        <div class="processTitle">
          <div class="noticTitle">
            <h3>供应商合作流程</h3>
          </div>
        </div>
        <div class="processItem first">
          <div class="ico"><span class="iconfont icon-zhuce"></span></div>
          <span>注册账号</span>
        </div>
        <div class="processItem">
          <div class="ico"><span class="iconfont icon-bianji"></span></div>
          <span class="longer">添加公司信息 </span>
        </div>
        <div class="processItem">
          <div class="ico"><span class="iconfont icon-yinzhang"></span></div>
          <span>申请资质</span>
        </div>
        <div class="processItem">
          <div class="ico">
            <span class="iconfont icon-chuiziicon"></span>
          </div>
          <span>发起投标</span>
        </div>
        <div class="processItem">
          <div class="ico"><span class="iconfont icon-qiandai"></span></div>
          <span class="longer">填写收款信息</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.processWrappper {
  width: 100%;
  height: 352px;
  background-color: #eee;
  padding: 32px 0 0;
  .processMain {
    width: 1200px;
    margin: 0 auto;
    // background-color: pink;
    height: 205px;
    // padding-top: 10px;
    box-sizing: border-box;
    .noticTitle {
      height: 30px;
      width: 100%;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
      position: relative;
      margin-bottom: 32px;
      &::after {
        content: "";
        width: 48px;
        height: 4px;
        background-color: rgb(252, 71, 93);
        position: absolute;
        left: 0;
        bottom: -4px;
      }
      h3 {
        font-size: 24px;
        line-height: 30px;
        float: left;
      }
    }
    .processItem {
      width: 72px;
      height: 110px;
      // background-color: purple;
      // margin-top: 70px;
      margin-left: 170px;
      text-align: center;
      position: relative;
      float: left;
      &::after {
        content: "";
        width: 104px;
        height: 2px;
        background-color: rgb(252, 71, 93);
        position: absolute;
        top: 40px;
        left: 104px;
        margin-right: 32px;
      }
      &:last-child::after {
        background-color: transparent;
      }
      &.first {
        margin-left: 100px;
      }
      .ico {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background-color: #fff;
        margin-bottom: 20px;
        .iconfont {
          font-size: 30px;
          line-height: 72px;
          color: rgb(252, 71, 93);
        }
      }
      span {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
        white-space: nowrap;
      }
      span.longer {
        display: inline-block;
        margin-left: -5px;
      }
    }
  }
}
</style>
