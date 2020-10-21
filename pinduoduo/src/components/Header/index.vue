<template>
  <!-- 头部导航部分 -->
  <div class="app">
    <header class="header">
      <!-- 导航栏 -->
      <div class="navTop">
        <div>
          <!-- 导航logo -->
          <router-link to="/" class="logo">
            <img src="./images/LOGO.png" alt="拼多多LOGO" />
          </router-link>
          <!-- 导航List -->
          <ul class="navList" @click="addActive" id="ul">
            <li>
              <router-link to="/home">
                <span>首页</span>
              </router-link>
              <i></i>
            </li>
            <li>
              <router-link to="/login">
                <span>{{ isLogin ? "个人中心" : "登录/注册" }}</span>
              </router-link>
              <i></i>
            </li>
            <li>
              <router-link to="/cart">
                <span>购物车</span>
              </router-link>
              <i></i>
            </li>
            <li>
              <router-link to="/career">
                <span>社会招聘</span>
              </router-link>
              <i></i>
            </li>
            <li>
              <router-link to="/recruitment">
                <span>校园招聘</span>
              </router-link>
              <i></i>
            </li>
            <li>
              <router-link to="/cooperation">
                <span>招采中心</span>
              </router-link>
              <i></i>
            </li>
            <li>
              <router-link to="/hotnews">
                <span>热点资讯</span>
              </router-link>
              <i></i>
            </li>
            <li>
              <router-link to="/help">
                <span>帮助</span>
              </router-link>
              <i></i>
            </li>
            <li>
              <router-link to="/complaint">
                <span>举报</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      isLogin: false,
    };
  },
  mounted() {
    this.$Eventbus.$on("changeLogin", (data) => {
      this.isLogin = data;
    });
  },
  methods: {
    addActive(event) {
      
    },
  },

 
};
</script>
<style lang='less' rel='stylesheet/less'>
.app {
  width: 100%;
  // height: 10000px;
  margin-bottom: 111px;
  overflow: hidden;
  .header {
    width: 100%;
    height: 111px;
    background-color: #fff;
    border-bottom: 4px solid #ed435b;
    position: fixed;
    z-index: 999;
    height: 107px;
    .navTop {
      margin: 0 auto;
      width: 1200px;
      overflow: hidden;
      position: relative;

      // background-color: pink;
      .logo {
        float: left;
        height: auto;
        margin: 21px 0 21px 0;
        max-width: 180px;

        img {
          width: 180px;
          height: 63px;
        }
      }

      .navList {
        float: right;
        height: 30px;
        line-height: 30px;
        text-align: right;
        position: absolute;
        top: 50%;
        left: 230px;
        margin-top: -15px;
        // color: #6c6c6c;
        // color:red;
        li {
          float: left;
          
          &:first-child a {
            margin: 0 15px 0 0;
          }
          a {
            font-size: 18px;
            font-weight: 500;
            &.router-link-active{
            color: #fc475d;
            // font-size: 50px;
          }
            // .highlight {
            //   // color: #fc475d;
            //   margin: 0 15px 0 0;
            // }

            span {
              margin: 0 15px;
            }
          }

          i {
            border-left: 1px solid #6c6c6c;
          }
        }
        // .active,
        // .active a {
        //   color: #fc475d;
        // }
      }
    }
  }
}
</style>