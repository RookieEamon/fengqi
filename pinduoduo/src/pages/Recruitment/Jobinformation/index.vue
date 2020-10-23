<template>
  <div>
    <!-- <Myheader></Myheader> -->
    <div class="job1Container">
      <!-- <img
      src="https://funimg.pddpic.com/Recruit/2021_campus_banner.jpg"
      alt=""
    /> -->
      <div class="bannerContainer"></div>
      <!-- 主体内容 -->
      <div class="main">
        <!-- 左侧内容 -->
        <div class="left">
          <!-- 左侧导航栏文字内容 -->
          <ul>
            <router-link to="/recruitment/jobinformation/position"
              ><li>招聘职位</li></router-link
            >
            <router-link to="/recruitment/jobinformation/process">
              <li>招聘流程</li>
            </router-link>
            <router-link to="/recruitment/jobinformation/journey">
              <li>校招行程</li>
            </router-link>

          </ul>
          <!-- 左侧导航栏二维码 -->
          <div>
            <p class="words">招聘公众号</p>
            <img
              src="https://funimg.pddpic.com/career/img/wechat-qrcode.jpg"
              alt=""
            />
          </div>
        </div>

        <!-- 右侧内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Myheader from "../components/Myheader";
export default {
  name: "Jobinformation",
  components: {
    Myheader,
  },
};
</script>

<style lang = 'less' rel='stylesheet/less' scoped>
.job1Container {
  font-size: 0;
  overflow: hidden;
  background-color: rgb(250, 250, 250);

  /* //头部
  //图片
  //图片banner */
  .bannerContainer {
    //设置背景图片的尺寸
    width: 100%;
    height: 294px;
    font-size: 0; //加给父容器解决图片底部白边
    background-image: url(https://funimg.pddpic.com/Recruit/2021_campus_banner.jpg);
    //背景图片的定位原点
    // background-origin:
    // //背景图片的背景位置
    background-position-x: 50%;
  }
  //主体内容
  .main {
    width: 1200px;
    margin: 0 auto;
    padding-top: 22px;
    // background-color: yellowgreen;

    display: flex;

    //左侧导航栏
    .left {
      width: 278px;
      margin-right: 22px;
      display: flex;
      flex-direction: column;

      // 左侧导航栏文字内容
      ul {
        margin-bottom: 30px;
        //<li招聘流程校招行程相关视频Q&A专区>招聘职位</li招聘流程校招行程相关视频Q&A专区
        //li通用样式
        li {
          // display:block;
          color: black;
          background-color: white;
          font-size: 20px;
          width: 278px;
          height: 60px;
          box-sizing: border-box;
          padding-left: 38px;
          line-height: 60px;
          cursor: pointer;

          &:hover {
            background-color: #f04055;
            color: white;
          }
        }
      }

      // 左侧导航栏二维码
      div {
        background-color: white;

        // 左侧导航栏二维码
        .words {
          height: 60px;
          font-size: 20px;
          color: #686868;
          text-align: center;
          line-height: 60px;
          background-color: white;
          border-bottom: 1px solid #686868;
        }

        img {
          display: block;
          margin: 10px auto;
        }
      }
    }

    //右侧信息区域
    .right {
      width: 900px;

      display: flex;
      flex-direction: column;

      //  搜索部分
      .searchContainer {
        background-color: white;
        height: 70px;
        display: flex;
        align-items: center;

        &:hover {
          // box-shadow:颜色 水平偏移量 垂直偏移量 虚化半径 [inset];
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
        }

        span {
          text-align: center;
          width: 60px;
          font-size: 22px;
        }

        input {
          padding: 10px;
          font-size: 20px;
          width: 680px;
          border-style: none;
          outline-style: none; //输入框的轮廓线
        }

        button {
          outline-style: none;
          font-size: 24px;
          color: white;
          background-color: #f04055;
          width: 200px;
          height: 100%;
          border-style: none;

          &:hover {
            background-color: #f15366;
          }
        }
      }

      // 职位类别切换部分
      .jobCategory {
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 20px;

        span {
          color: rgb(104, 104, 104);
          font-size: 16px;
          margin-right: 30px;
          height: 100%;
          line-height: 40px; //行高不能写百分比
        }
        .category1:hover,
        .category2:hover {
          color: #f04055;
          cursor: pointer;
        }
      }

      //信息容器部分  主体部分
      .infoContainer {
        width: 850px;
        background-color: white;
        margin: 0 auto;
        margin-right: 30px;
        margin-bottom: 30px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        &:hover {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
        }
        // 信息元素 每个信息
        .infoItem {
          //信息头部部分
          .infoItemHeader {
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            // 标题
            .infoItemHeaderTitle {
              font-size: 28px;
              font-weight: 700; //注意：字重不要加单位

              &:hover {
                color: #f04055;
              }
            }
            // 详情
            .infoItemHeaderDetail {
              font-size: 16px;
              padding-right: 20px;
              color: rgb(153, 153, 153);
              text-align: right;

              &:hover {
                color: #f04055;
              }
            }

            //定位
            .infoItemHeaderLocation {
              font-size: 16px;
              display: flex;

              .locationItem {
                color: #999;

                margin-right: 20px;
                i {
                  font-size: 16px;
                  margin-right: 3px;
                }
              }
            }
          }

          //信息内容部分
          .infoItemContent {
            display: flex;
            flex-direction: column;

            .jobDuty {
              font-size: 18px;
              color: #595959;
              padding-bottom: 20px;
            }

            .jobDetail {
              font-size: 16px;
              color: #595959;
              line-height: 2;
            }
          }
        }
      }
    }
  }
}
</style>
