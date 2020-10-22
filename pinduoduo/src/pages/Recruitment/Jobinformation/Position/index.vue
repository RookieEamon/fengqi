<template>
  <!-- 右侧内容 -->
  <div class="right">
    <!-- 搜索部分 -->
    <div class="searchContainer">
      <span class="iconfont icon-Search"></span>
      <!-- 注意：水印颜色为默认的 不可以设置 -->
      <input type="text" placeholder="搜索职位名称" />
      <button>搜索</button>
    </div>

    <!-- 职位类别切换部分 -->
    <div class="jobCategory">
      <span class="categoryTitle">职位类别:</span>
      <span class="category1">技术</span>
      <span class="category2">非技术</span>
    </div>

    <!-- 信息容器  重复 封装组件-->
    <div class="infoContainer">
      <!-- 信息元素 每个信息 -->
      <div class="infoItem">
        <!-- 信息头部部分 -->
        <div class="infoItemHeader">
          <!-- 信息头部部分 标题 -->
          <span class="infoItemHeaderTitle"
            >视频算法工程师（编解码及图像处理）
          </span>

          <!-- 信息头部部分 详情 -->
          <span class="infoItemHeaderDetail">详情</span>

          <!-- 信息头部部分 定位 -->

          <span class="infoItemHeaderLocation">
            <div class="locationItem">
              <i class="iconfont icon-tubiaozhizuomoban-115"></i>
              <span>技术</span>
            </div>
            <div class="locationItem">
              <i class="iconfont icon-weibiaoti-"></i>
              <span>北京</span>
            </div>
            <div class="locationItem">
              <i class="iconfont icon-yonghu"></i>
              <span>若干</span>
            </div>
            <div class="locationItem">
              <i class="iconfont icon-shijian"></i>
              <span>2020-10-10</span>
            </div>
          </span>
        </div>
        <!-- 信息内容部分 -->
        <div class="infoItemContent">
          <p class="jobDuty">岗位职责</p>
          <div class="jobDetail">
            <p>
              1.需要对拼多多用户的需求进行分析和拆解，并能通过设计产品方案来满足用户的需求。
            </p>
            <p>
              2.和技术团队、设计团队等部门进行良好的沟通协作，可以有效执行任务并推动项目落地。
            </p>
            <p>
              3.日常需要通过对用户需求的洞察和数据分析，主动发现问题并提出有效的创新解决方案。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 信息容器  即主体部分-->
    <div class="infoContainer">
      <!-- 信息元素 每个信息 -->
      <div class="infoItem">
        <!-- 信息头部部分 -->
        <div class="infoItemHeader">
          <!-- 信息头部部分 标题 -->
          <span class="infoItemHeaderTitle"
            >视频算法工程师（编解码及图像处理）
          </span>

          <!-- 信息头部部分 详情 -->
          <span class="infoItemHeaderDetail">详情</span>

          <!-- 信息头部部分 定位 -->

          <span class="infoItemHeaderLocation">
            <div class="locationItem">
              <i class="iconfont icon-tubiaozhizuomoban-115"></i>
              <span>技术</span>
            </div>
            <div class="locationItem">
              <i class="iconfont icon-weibiaoti-"></i>
              <span>北京</span>
            </div>
            <div class="locationItem">
              <i class="iconfont icon-yonghu"></i>
              <span>若干</span>
            </div>
            <div class="locationItem">
              <i class="iconfont icon-shijian"></i>
              <span>2020-10-10</span>
            </div>
          </span>
        </div>
        <!-- 信息内容部分 -->
        <div class="infoItemContent">
          <p class="jobDuty">岗位职责</p>
          <div class="jobDetail">
            <p>
              1.需要对拼多多用户的需求进行分析和拆解，并能通过设计产品方案来满足用户的需求。
            </p>
            <p>
              2.和技术团队、设计团队等部门进行良好的沟通协作，可以有效执行任务并推动项目落地。
            </p>
            <p>
              3.日常需要通过对用户需求的洞察和数据分析，主动发现问题并提出有效的创新解决方案。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Position",
};
</script>

<style lang = 'less' rel='stylesheet/less' scoped>
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
</style>
