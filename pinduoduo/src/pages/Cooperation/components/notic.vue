<template>
  <div>
      <div class="notic">
        <div class="noticItem">
          <div class="noticTitle">
            <h3>采购公告</h3>
            <span>查看更多</span>
          </div>
          <div class="noticContent">
            <div class="contentItem">
              <p>拼多多招采信息平台使用手册V1.0</p>
              <span>2020-06-24</span>
            </div>
            <div class="contentItem">
              <p>拼多多员工餐供餐项目供应商寻源</p>
              <span> 2020-06-21</span>
            </div>
            <div class="contentItem">
              <p>拼多多客服外包项目供应商寻源采购公告</p>
              <span>2020-06-05</span>
            </div>
            <div class="contentItem">
              <p>拼多多采购“廉正”告知书</p>
              <span>2020-06-04</span>
            </div>
          </div>
        </div>
        <div class="noticItem">
          <div class="noticTitle">
            <h3>采购公告</h3>
            <span>查看更多</span>
          </div>
          <div class="noticContent">
            <div class="contentItem">
              <p>拼多多招采信息平台使用手册V1.0</p>
              <span>2020-06-24</span>
            </div>
            <div class="contentItem">
              <p>拼多多员工餐供餐项目供应商寻源</p>
              <span> 2020-06-21</span>
            </div>
            <div class="contentItem">
              <p>拼多多客服外包项目供应商寻源采购公告</p>
              <span>2020-06-05</span>
            </div>
            <div class="contentItem">
              <p>拼多多采购“廉正”告知书</p>
              <span>2020-06-04</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'Notic',
  }
</script>
<style lang='less' rel='stylesheet/less' scoped>
   .notic {
    width: 1200px;
    margin: 32px auto 0;
    height: 300px;
    display: flex;
    justify-content: space-between;
    .noticItem {
      width: 576px;
      height: 300px;
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
        span {
          float: right;
          line-height: 30px;
          margin-top: 5px;
          color: #2266aa;
          cursor: pointer;
          font-size: 14px;
        }
      }
      .noticContent {
        width: 100%;
        padding: 15px 0px;
        height: 135px;
        border: 1px solid #eee;
        margin: 0 auto;
        box-shadow: 3px 3px 3px#eee;
        .contentItem {
          width: 100%;
          height: 34px;
          padding: 10px 0 10px 32px;
          box-sizing: border-box;
          position: relative;
          &:hover p {
            color: #fc4c5d;
          }
          &::before {
            background-color: #fc4c5d;
            content: "";
            position: absolute;
            width: 4px;
            height: 4px;
            top: 15px;
            left: 18px;
          }
          &::after {
            content: "";
            display: block;
            clear: both;
          }
          p {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.8);
            float: left;
            cursor: pointer;
          }
          span {
            float: right;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.4);
            margin-right: 25px;
          }
        }
      }
    }
  }
</style>