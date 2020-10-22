<template>
  <div>
    <!-- 详情区域 -->
    <div class="detail_page">
      <div class="main_list">
        <div class="main_list_text">
          <p>{{jobDetail.name}}</p>
          <div class="detail">
            <div class="detail_item">
              <img src="./images/1.svg" alt />
              <span>{{jobDetail.recruitType}}</span>
            </div>
            <div class="detail_item">
              <img src="./images/2.svg" alt />
              <span>{{jobDetail.workLocation}}</span>
            </div>
            <div class="detail_item">
              <img src="./images/3.svg" alt />
              <span>若干</span>
            </div>
            <div class="detail_item">
              <img src="./images/4.svg" alt />
              <span>{{jobDetail.updateTime}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_text">
        <div class="text_content">
          <h3>岗位职责</h3>
          <div class="text">
            <p>1、负责工具产品、增长玩法的用户运营</p>
            <p>2、负责增长产品的量级，重点要考虑召回策略、促活策略、分层运营</p>
            <p>3、通过数据监控及漏斗模型，分析用户行为，理解各个维度的转化，深耕核心因素，优化漏斗；</p>
            <p>4、能够使用AB test，以实验和数据驱动运营和产品，更快更好的做决策，实现快速迭代优化；</p>
          </div>
        </div>
        <div class="text_content">
          <h3>任职要求</h3>
          <div class="text">
            <p>1、熟悉工具产品的各个环节价值、对市面上的玩法有研究，对拉活策略、产品有一定的思考和经验；</p>
            <p>2、大学本科以上学历，2年以上互联网工作经验；</p>
            <p>3、具有强烈好奇心，对用户增长感兴趣，享受产品成功和数据指标提升带来的成就感；</p>
            <p>4、强烈的使命和自我驱动，抗压能力强；</p>
            <p>5、有成功的跨部门协作和项目推动经验，出色的口头和书面沟通能力</p>
          </div>
        </div>
        <div class="text_content">
          <h3>加分项</h3>
          <div class="text">
            <p>暂无</p>
          </div>
        </div>
      </div>
      <div class="resume">
        <div class="resume_text">
          <p>Tips: 简历还可投递到：hr@pinduoduo.com</p>
          <p>邮件/简历命名格式：【官网】岗位 - 姓名</p>
        </div>
        <button @click="deliver">简历投递</button>
      </div>
    </div>
  </div>
</template>

<script>
import {reqJobdetail} from '@/api'
export default {
  name: "JobDetail",
  data() {
    return {
      jobDetail:{},
      code:''
    }
  },
  methods: {
    async getDetail(){
      let result = await reqJobdetail(this.code)
      this.jobDetail=result
    },
    deliver(){
      window.open('https://mail.qq.com/cgi-bin/frame_html?sid=xVYWnqBUC9ZZFDlm&r=aba0033fd642660025768b596d21f8a8', "_blank");
    }
  },
  mounted() {
    this.code=this.$route.query.code
    this.getDetail(this.code)
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
// 详情区
.detail_page {
  width: 1200px;
  margin: 20px auto;
  padding: 10px;
  background-color: white;
  .main_list {
    width: 100%;
    height: 125px;
    margin-bottom: 20px;
    .main_list_text {
      background-color: #fff;
      padding: 30px;
      border-bottom: 1px solid #999;
      p {
        font-size: 30px;
        color: #3f3e3e;
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
    }
  }
  .detail_text {
    padding: 20px;
    border-bottom: 1px solid #999;
    .text_content {
      h3 {
        display: block;
        font-size: 24px;
        margin: 20px 0;
        border-left: 5px solid #f04055;
        padding-left: 10px;
      }
      .text {
        margin-bottom: 50px;
        p {
          display: block;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
  .resume {
    padding: 20px;
    margin: 30px 0;
    .resume_text {
      margin-bottom: 30px;
      p {
        display: block;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        &:last-child {
          margin-left: 40px;
        }
      }
    }
    button {
      width: 180px;
      height: 50px;
      margin-top: 30px;
      border: none;
      font-size: 20px;
      margin-bottom: 66px;
      background-color: #f04055;
      color: white;
      outline: none;
      &:hover{
        background: crimson;
      }
    }
  }
}
</style>