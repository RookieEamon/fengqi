<template>
  <!-- 右侧内容 --> 
  <div class="right">
   
    <!-- 标题 -->
    <div class="title">校招行程</div>
    <div class="des">
      <div class="ei-rich-editor-viewer braft-output-content">
        <p class="MsoNormal">
          <span>
            以下为拼多多2021届校招，【非技术岗】现场面试站点的时间安排及说明
          </span>
        </p>
        <p class="inforItem">
          <span>
            1）【非技术岗】仅支持现场面试，请就近选择有现场面试行程，且可到场参加面试的城市为面试站点。</span
          >
        </p>
        <p class="inforItem">
          <span>
            2）请投递非技术岗的同学，仔细阅读各现场面试站点的时间安排，并在意向面试站点的【网申截止时间】前完成简历投递。若简历筛选通过，请于【测评截止时间】前，完成并提交测试内容，请收到笔试邀请的同学务必按时参加~</span
          >
        </p>
        <p class="inforItem">
          <span>
            3）现场面试行程及更多招聘安排，请持续关注拼多多校招官网，且以官方更新发布为准。面试前，我们将通过邮件或短信形式发送通知，请注意查收。</span
          >
        </p>
      </div>
    </div>

    <div class="content" v-for="(item, index) in list" :key="index">
      <div class="item___1afPq">
        <img :src="item.imgUrl" alt="" />
        <div class="text___2gBlc">
          <div class="ei-rich-editor-viewer braft-output-content">
            <p class="MsoNormal"></p>
            <p>
              <strong
                ><span class="words">{{ item.title }}</span></strong
              >
            </p>
            <p class="MsoNormal">
              <span> {{ item.interviewTime }} </span>
            </p>
            <p class="MsoNormal">
              <span>{{ item.applyStopTime }}</span>
            </p>
            <p class="MsoNormal">
              <span>{{ item.deadline }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { reqJourney } from "@/api";

export default {
  name: "Journey",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    //调用方法获取行程信息
    this.getJourney();
  },
  methods: {
    //获取行程信息的方法
    async getJourney() {
      const res = await reqJourney();
      console.log("journey", res);
      // const tripList = res.tripList;
      this.list = res.tripList;
      console.log("tripList", this.list);
    },
    opt() {
      console.log('111');
      if (document.body.scrollTop) {
        document.body.scrollTop = 0;
      } else {
        document.documentElement.scrollTop = 0;
      }

    },
  },
};
</script>

<style lang = 'less' rel='stylesheet/less' scoped>
.right {

 
 

  //  标题部分
  .title {
    background-color: white;
    height: 70px;
    font-size: 28px;
    color: black;
    line-height: 70px;
    padding-left: 20px;
    margin-bottom: 30px;
  }

  /* 主体内容 */
  .des {
    padding-top: 20px;
    padding-left: 30px;
    background-color: #fff9eb;
    margin-bottom: 20px;
    margin-top: -10px;
    .MsoNormal {
      span {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 2;
        font-size: 16px;
        color: #c0392b;
      }
    }
    /* 每个部分 */
    .inforItem {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 2;
      font-size: 14px;
    }
  }

  .content {
    padding-left: 20px;
    background-color: white;
    margin-bottom: 20px;
    .item___1afPq {
      display: flex;
      align-items: center;

      .text___2gBlc {
        margin-left: 20px;

        span {
          font-family: Arial, Helvetica, sans-serif;
          line-height: 2;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
