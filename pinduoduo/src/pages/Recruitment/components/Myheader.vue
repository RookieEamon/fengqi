<template>
  <!-- 头部容器 -->
  <div class="headerContainer" background-color="pink">
    <!-- 头部内容 -->
    <div class="header">
      <!-- 头部logo容器 -->
      <router-link to="/">
        <div class="logoContainer">
          <a href="javascript:;" title="点击返回主页">
            <img
              src="https://funimg.pddpic.com/career/img/pdd_logo_1.png.slim.png"
              alt="官网logo"
              class="logo"
            />
          </a>
        </div>
      </router-link>
      <!-- 头部导航栏 -->
      <ul class="headerNav">
        <li class="firstLi">
          <router-link to="/recruitment">
            <div>
              <span>首页</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/recruitment/jobinformation">
            <div>
              <span>应届生招聘</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/recruitment/intern">
            <div>
              <span>实习生招聘</span>
            </div>
          </router-link>
        </li>
        <li>
          <div>
            <span>个人中心</span>
          </div>
        </li>
        <li>
          <div>
            <span>关于我们</span>
          </div>
        </li>
      </ul>
      <!-- 头部登录/注册 -->
      <div class="loginAndRegister">登录/注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myheader",
};
</script>

<style lang = 'less' rel='stylesheet/less' scoped>
//头部容器
.headerContainer {
  height: 107px;
  width: 100%;
  background-color: rgb(250, 250, 250);

  //头部内容
  .header {
    font-size: 0px;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    position: relative;

    //头部logo容器
    .logoContainer {
      overflow: hidden;
      height: 100%;
      width: 180px;

      //头部logo
      .logo {
        font-size: 0px;
        height: 63px;
        width: 100%;
        display: block;
        margin: 20px 0;
      }
    }

    //头部导航栏
    .headerNav {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0 auto 30px;
      width: 800px;
      height: 20px;
      position: absolute;
      left: 180px;

      //设置列表项li的通用样式
      li {
        display: inline-block;
        height: 20px;
        font-size: 18px;
        //设置鼠标移入时 小手图标
        cursor: pointer;

        div {
          height: 100%;

          //文本
          span {
            margin: 0 15px;
          }
        }

        :hover {
          color: red;
        }
      }

      //设置第一个列表项 的样式
      .firstLi {
        color: red;

        // .firstLi 下面的所有兄弟元素的样式
        & ~ li {
          color: #686868;
          border-left: 1px solid #686868;
        }
      }
    }

    //头部登录/注册
    .loginAndRegister {
      font-size: 18px;
      color: #686868;
      height: 20px;
      line-height: 20px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      padding-right: 55px;
      //设置鼠标移入时 小手图标
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }
}
</style>
