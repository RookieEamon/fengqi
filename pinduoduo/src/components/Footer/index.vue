<template>
  <div>
    <!-- footer部分 -->
    <footer class="footer">
      <!-- 底部二维码和联系我们区域 -->
      <div class="footerHead">
        <!-- 左侧二维码部分 -->
        <div class="qrcodeGroup">
          <div class="qrcode">
            <img src="./images/pdd_foot_service.png" alt="" />
            <p>扫描二维码</p>
          </div>
          <div class="qrcode">
            <img src="./images/pdd_foot_service.png" alt="" />
            <p>扫描二维码</p>
          </div>
          <div class="qrcode">
            <img src="./images/pdd_foot_service.png" alt="" />
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
      <!-- 公司资质 -->
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
      <!-- 最底部图片列表区域 -->
      <div class="footerListImage">
        <a href="javascript:;">
          <img src="/images/1.png" alt="" />
        </a>
        <a href="javascript:;">
          <img src="/images/2.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="/images/3.png" alt="" />
        </a>
        <a href="javascript:;">
          <img src="/images/4.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="/images/5.jpg" alt="" />
        </a>
        <a href="javascript:;">
          <img src="/images/6.png" alt="" />
        </a>
        <a href="javascript:;">
          <img src="/images/7.png" alt="" />
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
// 底部部分
.footer {
  background-color: #fff;
  padding-top: 60px;
  position: relative;
  width: 100%;
  // 二维码和文字部分
  .footerHead {
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
      margin-right: -122px;
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
  //底部列表部分
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
  //公司资质部分
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
  //图片列表部分
  .footerListImage {
    text-align: center;
    a {
      img {
        display: inline-block;
        width: auto;
        height: auto;
        max-height: 50px;
        line-height: 50px;
        vertical-align: middle;
        margin: 10px;
      }
    }
  }
}
</style>