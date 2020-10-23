<template>
  <div>
            <div class="footerHead">
        <!-- 左侧二维码部分 -->
        <div class="qrcodeGroup">
          <div class="qrcode">
            <img src="./images/01.png" alt="" />
            <p>扫描二维码</p>
          </div>
          <div class="qrcode">
            <img src="./images/01.png" alt="" />
            <p>扫描二维码</p>
          </div>
          <div class="qrcode">
            <img src="./images/01.png" alt="" />
            <p>扫描二维码</p>
          </div>
        </div>
        <!-- 右侧文字部分 -->
        <div class="contactInfo">
          <p class="title">联系我们</p>
          <p class="detail">
            客服&举报电话：021-53395288（推荐）或400-8822-528
          </p>
          <p class="detail">商家热线：021-5339-5088</p>
          <p class="detail">商家客服服务时间：8:00-20:30</p>
          <p class="detail">消费者客服服务时间：8:00-21:30</p>
          <p class="detail">
            消费者客服外呼号码显示：9541366（仅呼出，不支持呼入）
          </p>
          <p class="detail">上海寻梦信息技术有限公司</p>
        </div>
      </div>
            <!-- 底部导航 -->
      <div class="footerNav">
        <ul class="navList">
          <li>
            <a href="javascript:;">入驻多多国际</a>
          </li>
          <li>
            <a href="javascript:;">校园招聘</a>
          </li>
          <li>
            <a href="javascript:;">关于我们</a>
          </li>
          <li>
            <a href="javascript:;">帮助中心</a>
          </li>
          <li>
            <a href="javascript:;">下载App</a>
          </li>
          <li>
            <a href="javascript:;">消费者保障</a>
          </li>
          <li>
            <a href="javascript:;">维权投诉指引</a>
          </li>
          <li>
            <a href="javascript:;">廉政举报</a>
          </li>
          <li>
            <a href="javascript:;">服务协议</a>
          </li>
          <li>
            <a href="javascript:;">隐私政策</a>
          </li>
          <li>
            <a href="javascript:;">征求意见</a>
          </li>
          <li class="last">
            <a href="javascript:;">Investor Relations</a>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'FooterTop',
  }
</script>
<style lang='less' rel='stylesheet/less' scoped>
   .footerHead {
     padding-top: 60px;
    color: #4d4d4d;
    font-size: 0;
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 240px;
    max-width: 1000px;
    clear: both;
    .qrcodeGroup {
      float: left;
      width: 666px;
      margin-top: 20px;
      .qrcode {
        float: left;
        width: 162px;
        height: 162px;
        margin-right: 60px;
        img {
          width: 100%;
          height: 100%;
        }
        p {
          margin: 8px auto;
          color: #4d4d4d;
          font-size: 16px;
          text-align: center;
        }
      }
    }
    .contactInfo {
      // position: absolute;
      float: right;
      margin-right:-122px;
      padding-left: 45px;
      margin-top: -20px;
      width: 410px;
      border-left: 1px solid #4d4d4d;
      .title {
        color: #4d4d4d;
        font-size: 24px;
        line-height: 24px;
      }
      .detail {
        color: #4d4d4d;
        font-size: 15px;
        line-height: 16px;
        margin-top: 20px;
      }
    }
  }
    .footerNav {
    font-size: 0;
    margin: 0 auto;
    margin-bottom: 58px;
    margin-top: 60px;
    max-width: 1200px;
    text-align: center;
    width: 100%;
    .navList {
      display: inline-block;
      li {
        float: left;
        font-size: 16px;
        border-right: 1px solid #c1c1c1;
        a {
          color: #6c6c6c;
          margin-left: 6px;
          margin-right: 6px;
        }
      }
      .last {
        border: none;
      }
    }
  }
</style>