<template>
  <div>
    <!-- 主体内容区 -->
   
    <div v-if="path==='/career'">
      <!-- 背景图 -->
      <div class="setting">
        <img src="./images/recruitBanner-51483374151c764e6821ef8e2df9dcb5.jpg" alt="背景图" />
      </div>
      <div class="content">
        <div class="content_head">
          <div class="search">
            <input type="text" />
            <button>搜索</button>
          </div>
          <div class="hotSearch">
            <span>热门搜索:</span>
            <ul>
              <li>JAVA</li>
              <li>算法</li>
              <li>数据</li>
              <li>前端</li>
              <li>产品经理</li>
              <li>运营</li>
              <li>交互</li>
              <li>服务专家</li>
            </ul>
          </div>
        </div>
        <div class="content_main">
          <!-- 左侧标题区 -->
          <div class="main_left">
            <div class="main_title">
              <div class="title_card">
                <div class="title_card_body">
                  <span>职位类别</span>
                </div>
              </div>
              <div class="title_card_list">
                <div class="card_list">
                  <span @click="changLatestPositionList('')">全部</span>
                </div>
                <div class="card_list">
                  <span @click="changLatestPositionList('technology')">技术</span>
                </div>
                <div class="card_list">
                  <span @click="changLatestPositionList('product')">产品</span>
                </div>
                <div class="card_list">
                  <span @click="changLatestPositionList('design')">设计</span>
                </div>
                <div class="card_list">
                  <span @click="changLatestPositionList('market')">市场营销</span>
                </div>
                <div class="card_list">
                  <span @click="changLatestPositionList('investment')">招商运营</span>
                </div>
                <div class="card_list">
                  <span @click="changLatestPositionList('management')">市场管理</span>
                </div>
                <div class="card_list">
                  <span @click="changLatestPositionList('general')">综合</span>
                </div>
                <div class="card_list">
                  <span @click="changLatestPositionList('customerService')">客服</span>
                </div>
              </div>
            </div>
            <div class="main_title">
              <div class="title_card">
                <div class="title_card_body">
                  <span>热招岗位</span>
                </div>
              </div>
              <div class="title_card_list">
                <div
                  class="card_list_next"
                  v-for="item in hottestPositionList"
                  :key="item.name"
                  @click="toJobDetail(item.code)"
                >
                  <router-link to="/career/jobdetail">
                    <p>{{item.name}}</p>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="main_title">
              <div class="title_card">
                <div class="title_card_body">
                  <span>招聘小程序</span>
                </div>
              </div>
              <img src="./images/recruitQrcode-037c32b5e36961cbc22643cd850c7768.jpg" alt />
              <div class="recruit">
                <span>关注拼多多招聘</span>
              </div>
            </div>
          </div>
          <!-- 右侧内容区 -->
          <div class="main_text">
            <div class="main_head">
              <div class="left_text">最新发布</div>
              <div class="right_text">显示{{page}}-{{pageSize}},共{{total}}个职位</div>
            </div>
            <div
              class="main_list"
              v-for="item in latestPositionList"
              :key="item.code"
              @click="toJobDetail(item.code)"
            >
              <div class="main_list_text">
                  <p>{{item.name}}</p>
                <div class="detail">
                  <div class="detail_item">
                    <img src="./images/1.svg" alt />
                    <span>{{item.job}}</span>
                  </div>
                  <div class="detail_item">
                    <img src="./images/2.svg" alt />
                    <span>上海</span>
                  </div>
                  <div class="detail_item">
                    <img src="./images/3.svg" alt />
                    <span>若干</span>
                  </div>
                  <div class="detail_item">
                    <img src="./images/4.svg" alt />
                    <span>2020-10-18</span>
                  </div>
                </div>
                <span class="detail-text" @click="toJobDetail(item.code)">详情</span>
              </div>
            </div>
            <!-- 分页区 -->
            <div class="block" style="margin: 0 auto; width: 600px">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="sizes, prev, pager, next"
                :total="total"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
     <router-view v-else></router-view>
  </div>
</template>
<script>
import { reqHotpositionList, reqLatestPositionList, reqJobdetail } from "@/api";
import { Pagination } from "element-ui";
export default {
  name: "Career",
  data() {
    return {
      hottestPositionList: [], //热招岗位列表数组
      latestPositionList: [], //最新发布岗位列表数组
      jobDetail: {}, //岗位详情对象
      currentPage: 1,
      pageSizes: [5, 10, 15, 20],
      total: 0,
      job: "",
      pageSize: 10,
      page: 1,
      isShow: false,
      code: '',
    };
  },
  computed: {
    path(){
      return this.$route.path
    }
  },
  mounted() {
    // console.log(this.path)
    this.getHotpositionList();
    this.getLatestPositionList("", 1, 10);
  },
  methods: {
    //获取热招岗位列表和最新发布岗位列表
    async getHotpositionList() {
      const { hottestPositionList } = await reqHotpositionList();
      this.hottestPositionList = hottestPositionList;
    },
    //获取最新的岗位数据列表
    async getLatestPositionList(type) {
      let { job, page, pageSize } = this;
      const result = await reqLatestPositionList(type, page, pageSize);
      this.latestPositionList = result.list;
      this.total = result.total;
    },
    //点击job更新最新岗位数据
    changLatestPositionList(type) {
      this.job = type;
      this.getLatestPositionList(type);
    },
    // 获取岗位详情信息
    // async getJobdetail() {
    //   let code = data.code
    //   const result = await reqJobdetail({code});
    //   this.jobDetail = result;
    // },
    //点击跳转至JobDetail页面
    toJobDetail(code) {
      this.$router.push({path:"/career/jobdetail",query:{code:code}})
      // this.isShow = true;
    },
    //分页器函数
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getMediaReport(this.currentPage, pageSize);
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.getMediaReport(page, this.pageSize);
    },
    getMediaReport(){}
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
// 主体区域
// 背景图
.setting {
  width: 100%;
  height: 294px;
}
.content {
  width: 1200px;
  margin: 20px auto;
  .content_head {
    overflow: hidden;
    .search {
      input {
        width: 1000px;
        height: 70px;
        outline: none;
        padding: 6px 11px 6px 22px;
        font-size: 24px;
        line-height: 70px;
        border: 1px solid #c1c1c1;
        box-sizing: border-box;
        float: left;
        &:hover {
          border: 1px solid #ed435b;
        }
      }
      button {
        margin: 0;
        padding: 0;
        outline: none; //消除默认点击蓝色边框效果
        width: 200px;
        height: 70px;
        border: none;
        background-color: #ee445b;
        color: white;
        font-size: 24px;
        line-height: 70px;
        text-align: center;
        &:hover {
          cursor: pointer;
          background-color: #f1596d;
        }
      }
    }

    .hotSearch {
      float: left;
      line-height: 40px;
      font-size: 16px;
      margin-left: 10px 10px 26px 22px;
      color: #686868;
      span {
        margin: 15px;
        line-height: 60px;
      }
      ul {
        float: right;
        li {
          float: left;
          margin: 10px;
          &:hover {
            cursor: pointer;
            color: #f1596d;
          }
        }
      }
    }
  }

  .content_main {
    margin-top: 20px;
    overflow: hidden;
    // 左侧标题区
    .main_left {
      float: left;
      width: 25%;
      .main_title {
        padding: 10px;
        padding-bottom: 20px;
        background-color: #fff;
        overflow: hidden;
        margin-bottom: 20px;
        .title_card {
          border-bottom: 1px solid #c1c1c1;
          .title_card_body {
            span {
              font-size: 20px;
              font-weight: 700;
              color: #686868;
            }
          }
        }
        img {
          width: 235px;
          height: 235px;
          padding: 10px;
          border-bottom: 1px solid #c1c1c1;
        }
        span {
          display: block;
          padding: 20px;
          font-size: 16px;
        }
        .title_card_list {
          .card_list {
            width: 50%;
            float: left;
            font-size: 18px;
            display: block;
            height: 20px;
            line-height: 20px;
            text-align: center;
            margin: 20px auto;
            span {
              display: block;
              &:hover {
                cursor: default;
              }
            }
          }
          .card_list_next {
            width: 100%;
            p {
              display: block;
              height: 30px;
              line-height: 50px;
              margin: 10;
              width: 100%;
              font-size: 16px;
              padding: 10px;
              &:hover {
                color: crimson;
              }
            }
          }
        }
      }
    }

    // 右侧内容区
    .main_text {
      float: right;
      width: 73%;
      .main_head {
        width: 100%;
        height: 60px;
        font-size: 20px;
        line-height: 60px;
        background-color: #fff;
        margin-bottom: 10px;
        overflow: hidden;
        .left_text {
          float: left;
          width: 50%;
          padding-left: 30px;
          box-sizing: border-box;
        }
        .right_text {
          float: right;
          width: 50%;
          padding-left: 200px;
          box-sizing: border-box;
        }
      }
      .main_list {
        width: 100%;
        height: 125px;
        margin-bottom: 20px;
        .main_list_text {
          background-color: #fff;
          padding: 30px;
          position: relative;
          p {
            font-size: 30px;
            color: #3f3e3e;
            &:hover {
              color: crimson;
            }
          }
          .detail {
            width: 100%;
            height: 24px;
            margin-top: 20px;
            display: flex;
            .detail_item {
              margin-right: 40px;
              font-size: 0px;
              img {
                width: 18px;
                height: 18px;
                margin-right: 8px;
              }
              span {
                font-size: 16px;
              }
            }
          }
          .detail-text {
            float: right;
            position: absolute;
            right: 30px;
            top: 60px;
            font-size: 16px;
            &:hover{
              cursor: pointer;
              color: crimson;
            }
          }
        }
      }
    }
  }
}
</style>