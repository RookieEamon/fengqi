<template>
  <div class="main">
    <!-- 头部logo -->
    <div class="header">
      <div class="logo">
        <img src="./images/background_logo.png" alt="" />
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="comtent">
      <div class="merchantBackground">
        <!-- 登陆方式 -->
        <div class="merchantBackgroundLogin">
          <div class="loginMethodtext">
            <span :class="{'loginMethodtextActive':isActive == 1}" @click="scanCode()">扫码登录</span>
            <span class="line"></span>
            <span :class="{'loginMethodtextActive':isActive == -1}" @click="account()">账号登录</span>
          </div>
          <!-- 登录界面 -->
          <div  class="loginInterface">
            <!-- 扫码登陆界面 -->
            <div v-if="isloginInterface" class="scanCodeLogin">
              <div class="scanCodeLogin_left">
                <!-- 二维码 -->
                <div class="QR_code">
                  <img src="./images/code.png" alt="拼多多" />
                </div>
                <div class="QR-scan"></div>
              </div>
              <div class="scanCodeLoginText">
                <div class="scanCodeLoginCompont">打开商家版APP扫一扫登录</div>
                <div>
                  <span>还没有账号？</span>
                  <a href="javascript:;">立即注册</a>
                </div>
              </div>
            </div>
            <!-- 账户登录界面 -->
            <div v-else class="accountLogin">
              <input type="text" value="" class="accountLoginText" />
              <input type="password" id="password" class="accountLoginText" />
              <!-- 登录按钮 -->
              <button class="accountLoginBtn">登录</button>
              <div class="accountLoginFooter">
                还没有账号?
                <a class="register" href="javascript:;">立即注册</a>
                <a class="forget" href="javascript:;">忘记密码</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <!-- 底部导航 -->
      <div class="footerNav">
        <div class="navList">
          <a class="navItem" href="javascript:;">商家入驻</a>
          <a class="navItem" href="javascript:;">批发采购</a>
          <a class="navItem" href="javascript:;">开放平台</a>
          <a class="navItem" href="javascript:;">服务市场</a>
          <a class="navItem" href="javascript:;">多多直播</a>
          <a class="navItem" href="javascript:;">多多大学</a>
          <a class="navItem" href="javascript:;">营销书院</a>
          <a class="navItem" href="javascript:;">商家社区</a>
          <a class="navItem" href="javascript:;">帮助中心</a>
          <a class="navItem" href="javascript:;">规则中心</a>
          <a class="navItem" href="javascript:;">廉正举报</a>
          <a class="navItem" href="javascript:;">手机版</a>
          <a class="navItem" href="javascript:;">PC版</a>
        </div>
      </div>
      <div class="footerText">
        <div>
          Copyright 2015-2020 pinduoduo.com 版权所有
          (增值电信业务经营许可证：沪B2-20170215)
        </div>
        <a href="javascript:;">沪公网安备 31010502000392号</a>
        <span class="line"></span>
        <span>沪ICP备15010535号-13</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MerchantBackground",
   data() {
      return {
        isloginInterface:true,
        isActive:0
      };
    },
    methods: {
      scanCode(){
        this.isloginInterface = true
        this.isActive = 1
      },
      account(){
        this.isActive =-1
        this.isloginInterface = false
      }
    }
};
</script>

<style lang="less"  rel="stylesheet/less" scoped>
.main {
  width: 100%;
  .header {
    width: 1440px;
    height: 90px;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 0 auto;
    line-height: 90px;
    .logo {
      width: 1400px;
      box-sizing: border-box;
      padding-left: 164px;
      height: 100%;
      img {
        width: 118px;
        height: 56px;
        vertical-align: middle;
      }
    }
  }
  //  主体内容
  .comtent {
    background: linear-gradient(180deg, #103bbc 0%, #00238c 100%);
    width: 100%;
    height: 600px;
    .merchantBackground {
      position: relative;
      width: 1440px;
      height: 100%;
      margin: 0 auto;
      background: url(./images/merchant_background.png);
      // 登陆方式
      .merchantBackgroundLogin {
        width: 320px;
        height: 320px;
        box-sizing: border-box;
        padding: 30px 0;
        border-radius: 8px;
        background: #fff;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 160px;
        text-align: center;
        // 登陆方式文本
        .loginMethodtext {
          height: 16px;
          width: 100%;
          span {
            font-size: 16px;
            font-weight: 700;
          }
          .loginMethodtextActive{
            color:red;
          }
          .line {
            display: inline-block;
            height: 12px;
            margin: 0 5px;
            border-left: 1px solid rgba(155, 155, 155, 0.5);
          }
        }
        // 登陆界面
        .loginInterface {
          margin-top: 30px;
          // 扫码登陆界面
          .scanCodeLogin{
            .scanCodeLogin_left {
            position: relative;
            &:hover .QR_code {
              margin-left: 25px;
              transition: all 0.3s;
            }
            &:hover .QR-scan {
              opacity: 1;
              transition: all 0.4s;
            }
            // 二维码
            .QR_code {
              width: 120px;
              height: 120px;
              margin: 40px 100px 20px;
              background: red;
              img {
                width: 100%;
              }
            }
            .QR-scan {
              position: absolute;
              right: 25px;
              top: 0px;
              width: 132px;
              height: 120px;
              background: url(./images/QR-scan.png) 0 0 / cover;
              border-radius: 20px 20px 0 0;
              opacity: 0;
            }
          }
          .scanCodeLoginText {
            .scanCodeLoginCompont {
              font-size: 14px;
              margin-bottom: 30px;
            }
          }
          }
          // 账户登录界面
          .accountLogin{
            margin-top: 10px;
            .accountLoginText
            {
              outline: none;
              border: 1px solid #DBDBDB;
              border-radius: 3px;
              width: 290px;
              height: 40px;
              box-sizing: border-box;
              margin: 10px auto;
              &:hover{
                border: 1px solid #999
              }
            }
            // 登录按钮
            .accountLoginBtn{
              outline: none;
              border: none;
              border-radius: 3px;
              width: 290px;
              height: 40px;
              box-sizing: border-box;
              background: #FF5454;
              font-size: 14px;
              color:#fff;
              &:hover{
                background: red;
              }
            }
            .accountLoginFooter{
              margin-top: 10px;
              font-size: 12px;
              color:#DBDBDB ;
              a{
                color: blue;
              }
            }
            
          }
          
        }
      }
    }
  }
  // 底部
  .footer {
    width: 100%;
    margin-top: 50px;
    // 底部导航
    .navList {
      width: 1440px;
      margin: 30px auto;
      text-align: center;
      .navItem {
        margin: 0 8px;
      }
    }
    // 底部文本
    .footerText {
      text-align: center;
      div {
        margin: 5px;
      }
      a {
        margin: 0 5px;
      }
      .line {
        display: inline-block;
        height: 9px;
        margin: 0 5px;
        border-left: 1px solid rgba(155, 155, 155, 0.5);
      }
    }
  }
}
</style>