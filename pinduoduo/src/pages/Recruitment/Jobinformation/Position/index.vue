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
    <div class="infoContainer" v-for="item in jobList" :key="item.id">
      <!-- 信息元素 每个信息 -->
      <div class="infoItem">
        <!-- 信息头部部分 -->
        <div class="infoItemHeader">
          <!-- 信息头部部分 标题 -->
          <span class="infoItemHeaderTitle">{{ item.name }} </span>

          <!-- 信息头部部分 详情 -->
          <span class="infoItemHeaderDetail">详情</span>

          <!-- 信息头部部分 定位 -->

          <span class="infoItemHeaderLocation">
            <div class="locationItem">
              <i class="iconfont icon-tubiaozhizuomoban-115"></i>
              <span>{{ item.jobName }}</span>
            </div>
            <div class="locationItem">
              <i class="iconfont icon-weibiaoti-"></i>
              <span>{{ item.workLocationName }}</span>
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
            <div>
              <div
                v-for="(shoItem, index) in item.jobDuty.split('\n')"
                :key="index"
              >
                {{ shoItem }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页器 -->
    <!-- <div style="margin: 0 auto; margin-bottom: 20px;background-color:> -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[3, 5, 8, 10]"
        :page-size="100"
        layout="prev, pager, next,sizes"
        align="right"
        :total="total"
        background
      >
      </el-pagination>
      <span class="demonstration">调整每页显示条数</span>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { reqInternJobList } from "@/api";
import { Pagination } from "element-ui";
export default {
  name: "Position",
  data() {
    return {
      page: 1,
      pageSize: 3,
      currentPage: 1,
      recruitType: "headquarters", //recruitType参数初始值
      total: 0, //分页组件的总页数
      jobList: [], //所有职位信息列表

      jobDutyItem: {}, //职责列表
    };
  },
  mounted() {
    //调用方法获取职位列表
    let { page, pageSize, recruitType } = this;
    this.getPositionList(page, pageSize, recruitType);
  },
  methods: {
    //获取职位列表的方法
    async getPositionList(page, pageSize, recruitType) {
      const resultObj = await reqInternJobList(page, pageSize, recruitType);
      console.log("resultObj", resultObj);
      this.jobList = resultObj.list;
      const totalPageSize = resultObj.total;
      // console.log(totalPageSize);
      this.total = totalPageSize * 1;
      console.log(this.total);
    },

    handleSizeChange(pageSize) {
      console.log(pageSize);
      this.pageSize = pageSize;
      this.getPositionList(this.page, pageSize, this.recruitType);

      //处理点击分页后返回顶部的方法

      // if (document.body.scrollTop) {
      //   document.body.scrollTop = 0;
      // } else {
      //   document.documentElement.scrollTop = 0;
      // }
    },
    handleCurrentChange(page) {
      console.log(page);
      this.page = page;
      this.getPositionList(this.page, this.pageSize, this.recruitType);

      //处理点击分页后返回顶部的方法

      // if (document.body.scrollTop) {
      //   document.body.scrollTop = 0;
      // } else {
      //   document.documentElement.scrollTop = 0;
      // }
    },
    //处理点击分页后返回顶部的方法
    // opt() {
    //   if (document.body.scrollTop) {
    //     document.body.scrollTop = 0;
    //   } else {
    //     document.documentElement.scrollTop = 0;
    //   }
    // },
  },
};
</script>

<style lang = 'less' rel='stylesheet/less' scoped>
/* @import url("") */
//右侧信息区域
.right {
  width: 900px;

  display: flex;
  flex-direction: column;
  overflow: hidden;
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

  /* 分页器样式 */
  .block {
    margin: 20px 0;
  }
}
</style>
