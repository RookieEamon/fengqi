<template>
    
  <div>
    <!-- 用户登录页面 -->
    <div class="loginContainerWrap">
      <!-- 头部 -->
      <div class="header_fixed"></div>
      <div class="loginContainer">
        <!-- 轮播图 -->
        <!-- <div class="bannerBox">
          <div class="banner">
            <div class="bannerImg2"></div>
            <div class="button">
              <p class="pre"><i class="iconfont icon-xiaoyuhao"></i></p>
              <p class="next"><i class="iconfont icon-dayuhao"></i></p>
            </div>
          </div>
        </div> -->
      
        <Banner/>
        <!-- 登录-->
        <div class="loginBoxWrap">
          <div class="loginBox">
            <div class="loginMethodWrap">
              <span class="left">登录</span>
              <div class="loginMethod">
                <span class="phoneLogin">手机号码登录</span>
                <div class="line"></div>
                <span class="passwordLogin">账号登录</span>
              </div>
            </div>
            <!-- 用户登录信息 -->
            <!-- 账号密码登录 -->
            <!-- <form class="sumbit">
              <div class="userInfo">
                <div class="userName">
                  <span class="userName1"
                    ><input type="text" placeholder="请输入账号名"
                  /></span>
                </div>
                <div class="password">
                  <span class="passwrod"
                    ><input
                      type="password"
                      class="password"
                      placeholder="请输入密码"
                  /></span>
                </div> -->
            <!-- 验证码 -->
            <!-- <div class="security_code">
                  <input
                    type="text"
                    class="left"
                    placeholder="请再次确认密码"
                  /> -->
            <!-- <img
                    ref="code"
                    src="http://182.92.128.115/api/user/passport/code"
                    alt="code"
                  /> -->
            <!-- </div>
              </div>
            </form> -->
            <!-- 手机号登录 -->
            <form class="sumbit">
              <div class="userInfo">
                <select value="+86中国大陆">
                      
                  <option value="+86中国大陆">+86中国大陆</option>
                      
                  <option value="+852中国香港">+852中国香港</option>
                      
                  <option value="+853中国澳门">+853中国澳门</option>
                      
                  <option value="+886中国台湾">+886中国台湾</option>
                </select>
                <div class="userName">
                  <span class="userName1"
                    ><input type="text" placeholder="请输入账号名"
                  /></span>
                </div>
                <div class="password">
                  <span class="passwrod"
                    ><input
                      type="password"
                      class="password"
                      placeholder="请输入密码"
                  /></span>
                </div>
              </div>
            </form>

            <!-- 登录按钮  -->
            <button>登录</button>
            <!-- 立即注册/忘记密码 -->
            <div class="registerBox">
              <a href="javascript:;" class="left_a">立即注册</a>
              <a href="javascript:;" class="right_a">忘记密码</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import iconfont from "./iconfont/iconfont.css";
import Banner from './components/banner'
// import Swiper from "swiper";
import { reqLogin } from "@/api/index";
export default {
  name: "Login",
  data() {
    return {
      username: "", //用户名
      password: "", //密码
    };
  },
  methods: {
    async toLogin() {
      // 获取手机号码和密码
      const { username, password } = this;
      // 判断数据是否存在
      if (username !== "" && password !== "") {
        let result = await reqLogin(username, password);
        console.log(result);
        if (result.code === 200) {
          localStorage.setItem("USERINFO_TOKEN", result.token);
          this.$router.replace("/home");
        } else {
          alert("登录失败");
        }
        //  console.log(username, password);
      } else {
        alert("手机号码或者密码不能为空");
      }
    },
  },
  components:{
      Banner
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.loginContainerWrap {
  position: relative;
  // z-index: 999;
  .header_fixed {
    position: fixed;
    top: 0px;
    z-index: 23;
    width: 100%;
    height: 100px;
    background: gray;
  }

  .loginContainer {
    height: 440px;
    margin-top: 100px;
    position: relative;

    // .bannerBox {
    //   .banner {
    //     position: relative;
    //     width: 100%;
    //     height: 466px;
    //     background: green;

    //     .bannerImg2 {
    //       width: 100%;
    //       height: 466px;
    //       background-image: url(./images/login2.png);
    //       background-position: center center;
    //       background-size: 1920px 466px;
    //     }

    //     .button {
    //       .pre {
    //         position: absolute;
    //         left: 0px;
    //         top: 185px;
    //         width: 56px;
    //         height: 100px;
    //         line-height: 100px;
    //         text-align: center;
    //         background-color: rgba(0, 0, 0, 0.5);
    //       }

    //       .next {
    //         position: absolute;
    //         top: 185px;
    //         right: 0px;
    //         width: 56px;
    //         height: 100px;
    //         line-height: 100px;
    //         text-align: center;
    //         background-color: rgba(0, 0, 0, 0.5);
    //       }
    //     }
    //   }
    // }

    .loginBoxWrap {
      position: absolute;
      z-index: 99;
      top: 58px;
      right: 75px;
      width: 384px;
      height: 280px;
      border-radius: 6px;
      background: #fff;

      .loginBox {
        margin: 16px;
        margin-top: 32px;
        width: 364px;
        height: 384px;
        padding: 0 40px 0 24px;
        position: relative;

        .loginMethodWrap {
          width: 320px;
          height: 20px;

          .left {
            font-size: 20px;
            font-weight: 600;
            color: #333;
            margin-right: 80px;
            margin-bottom: 16px;
          }

          .loginMethod {
            position: absolute;
            top: 0px;
            right: 127px;
            display: flex;
            font-size: 14px;
            color: #333;

            div {
              border-right: 1px solid grey;
              margin: 0 8px;
            }

            .passwordLogin {
              color: red;
            }
          }
        }

        // 密码登录
        form {
          margin-top: 10px;

          input {
            display: block;
            width: 300px;
            height: 30px;
            margin-bottom: 16px;
          }
        }

        //  手机号登录
        form {
          .userInfo {
            select {
              width: 307px;
              height: 35px;
              margin-bottom: 16px;
            }
          }
        }
        button {
          border-radius: 4px;
          padding: 0 12px;
          width: 307px;
          height: 32px;
          line-height: 30px;
          font-size: 14px;
          color: #fff;
          text-decoration: none;
          background-color: #e72b00;
        }

        .registerBox {
          margin-top: 40px;
          position: relative;

          a {
            text-decoration: none;
            font-size: 14px;
          }

          .right_a {
            position: absolute;
            top: 0px;
            right: 56px;
          }
        }
      }
    }
  }
}
</style>
