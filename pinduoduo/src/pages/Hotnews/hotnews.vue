<template>
  <!-- 主体内容 -->
  <div class="contentWrapper">
    <!-- banner图 -->
    <div class="bannerWrapper">
      <img
        src="./static/images/pdd_news_banner.jpg"
        alt="newsbanner"
        class="bannerImg"
      />
    </div>
    <!-- 公开信札 -->
    <div class="letter">
      <div class="letterHead">公开信札</div>
      <div class="letterContent">
        <div class="letterTitle">致股东信</div>
        <div class="lettterList">
          <div class="letterItem">
            <a
              class="letterName"
              @click="
                openNews(
                  'https://www.pinduoduo.com/home/static/pdf/2020%E5%B9%B4%E8%87%B4%E8%82%A1%E4%B8%9C%E4%BF%A1.pdf'
                )
              "
              >2020年致股东信</a
            >
            <div class="letterTime">2020-04-20</div>
          </div>
          <div class="letterItem">
            <a
              class="letterName"
              @click="
                openNews(
                  'https://www.pinduoduo.com/home/static/pdf/2019%E5%B9%B4%E8%87%B4%E8%82%A1%E4%B8%9C%E4%BF%A1.pdf'
                )
              "
              >2019年致股东信</a
            >
            <div class="letterTime">2019-04-20</div>
          </div>
          <div class="letterItem">
            <a
              class="letterName"
              @click="
                openNews(
                  'https://www.pinduoduo.com/home/static/pdf/2018%E5%B9%B4%E8%87%B4%E8%82%A1%E4%B8%9C%E4%BF%A1.pdf'
                )
              "
              >2018年致股东信</a
            >
            <div class="letterTime">2018-06</div>
          </div>
        </div>
      </div>
      <div class="letterContent">
        <div class="letterTitle">其他</div>
        <div class="lettterList">
          <div class="letterItem">
            <a
              class="letterName"
              @click="
                openNews(
                  'https://www.pinduoduo.com/home/static/pdf/%E9%BB%84%E5%B3%A5%E8%87%B4%E5%85%AC%E5%8F%B8%E5%85%A8%E5%91%98%E4%BF%A1%EF%BC%9A%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%9A%84%E4%B8%80%E5%B0%8F%E6%AD%A5.pdf'
                )
              "
              >黄峥致公司全员信：拼多多的一小步</a
            >
            <div class="letterTime">2020-07-01</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 热点资讯 -->
    <div class="message">
      <div class="letterHead">热点资讯</div>
      <div
        class="messageItem"
        v-for="item in hotNewsList"
        :key="item.id"
        @click="openNews(item.jump_url)"
      >
        <img :src="item.main_img_url" alt="messageItem" />
        <div class="messageContent">
          <img :src="item.sub_img_url" alt="" class="hotNewsLogo" />
          <div class="text">
            <h3>
              {{ item.main_title }}
            </h3>
            <p>
              {{ item.sub_title }}
            </p>
            <p class="lookAll">查看全文</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 媒体报道 -->
    <div class="mediaReport">
      <div class="letterHead">媒体报道</div>
      <div
        class="reportItem"
        v-for="item in mediaReport"
        :key="item.id"
        @click="openNews(item.jump_url)"
      >
        <h4>{{ item.main_title }}</h4>
        <div class="reportFooter">
          <div class="from">转自：{{ item.source }}</div>
          <div class="time">{{ item.sourceDate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reqHotNews, reqMediaReports } from "@/api";
export default {
  name: "Hotnews",
  data() {
    return {
      hotNewsList: [],
      mediaReport: [],
    };
  },
  methods: {
    //获取热点新闻列表
    async getHotnews() {
      const result = await reqHotNews();
      this.hotNewsList = result;
    },
    //获取媒体报道列表
    async getMediaReport(page = 1, pageSize = 10) {
      const result = await reqMediaReports(page, pageSize);
      this.mediaReport = result;
    },
    //点击跳转
    openNews(url) {
      window.open(url, "_blank");
    },
  },
  mounted() {
    this.getHotnews();
    this.getMediaReport();
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
//主体内容
.contentWrapper {
  width: 1200px;
  margin: 0 auto;
  // height: 3000px;
  background-color: #fff;

  // banner图
  .bannerWrapper {
    width: 100%;
    height: 384px;
    margin-top: 111px;

    .bannerImg {
      width: 100%;
      height: 294px;
      display: block;
    }
  }

  //公开信札
  .letter {
    margin-bottom: 50px;

    .letterHead {
      width: 188px;
      height: 56px;
      background-color: #f04055;
      color: white;
      line-height: 56px;
      text-align: center;
      margin-left: -18px;
      font-size: 30px;
      position: relative;
      margin-bottom: 70px;

      &::after {
        border-bottom: 6px solid transparent;
        border-right: 18px solid #be1e31;
        bottom: -6px;
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
      }
    }

    .letterContent {
      width: 100%;
      height: 164px;
      margin-top: 42px;

      // background-color: yellowgreen;
      &::after {
        display: block;
        width: 1000px;
        height: 0;
        content: "";
        border-bottom: 1px solid #ccc;
        // margin: 0,auto;
        margin: 20px 0 0 62px;
      }

      .letterTitle {
        width: 1138px;
        height: 30px;
        line-height: 30px;
        margin-left: 62px;
        margin-bottom: 25px;
        // background-color: yellow;
        font-size: 30px;
        font-weight: bold;
        color: #000;

        &::before {
          display: inline-block;
          content: ".";
          margin-right: 15px;
          width: 6px;
          height: 30px;
          box-sizing: border-box;
          color: #f04055;
          background-color: #f04055;
        }
      }

      .lettterList {
        display: flex;
        height: 78px;
        width: 100%;

        .letterItem {
          // flex: 1;
          width: 33.33%;
          flex-direction: row;
          padding-left: 65px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          .letterName {
            font-size: 20px;
            color: #363636;

            &:hover {
              color: #f04055;
              cursor: pointer;
              text-decoration: underline;
            }
          }

          .letterTime {
            font-size: 14px;
            color: #6c6c6c;
          }
        }
      }
    }
  }

  // 热点资讯
  .message {
    margin-bottom: 50px;

    .letterHead {
      width: 188px;
      height: 56px;
      background-color: #f04055;
      color: white;
      line-height: 56px;
      text-align: center;
      margin-left: -18px;
      font-size: 30px;
      position: relative;
      margin-bottom: 70px;

      &::after {
        border-bottom: 6px solid transparent;
        border-right: 18px solid #be1e31;
        bottom: -6px;
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
      }
    }

    .messageItem {
      width: 1120px;
      height: 196px;
      // background-color: #bfa;
      margin: 0 auto;
      padding: 50px 0;

      &::after {
        content: "";
        display: block;
        background-color: #eee;
        height: 1px;
        width: 1070px;
        position: relative;
        bottom: -50px;
        margin: 0 auto;
      }

      &:last-child::after {
        background-color: transparent;
      }

      img {
        margin-left: 26px;
      }

      .messageContent {
        float: right;
        margin-right: 20px;
        height: 100%;
        width: 709px;
        position: relative;
        // background-color: pink;

        .hotNewsLogo {
          height: 50px;
          width: 146px;
          margin: 0 0 32px;
          display: block;
        }

        .text {
          h3 {
            font-size: 20px;
            font-weight: bold;
            color: #363636;
            margin-bottom: 10px;
          }

          p {
            color: #6c6c6c;
            font-size: 16px;
            line-height: 30px;
          }

          .lookAll {
            position: absolute;
            bottom: 0;
            right: 0;
            line-height: 20px;
          }

          &:hover h3,
          &:hover p {
            color: #f04055;
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }

  // 媒体报道
  .mediaReport {
    margin-bottom: 50px;

    .letterHead {
      width: 188px;
      height: 56px;
      background-color: #f04055;
      color: white;
      line-height: 56px;
      text-align: center;
      margin-left: -18px;
      font-size: 30px;
      position: relative;
      margin-bottom: 70px;

      &::after {
        border-bottom: 6px solid transparent;
        border-right: 18px solid #be1e31;
        bottom: -6px;
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
      }
    }

    .reportItem {
      width: 1120px;
      height: 78px;
      margin: 0 auto;
      padding: 21px 0;

      // background-color: pink;
      &::after {
        content: "";
        display: block;
        background-color: #eee;
        height: 1px;
        width: 1120px;
        position: relative;
        bottom: -20px;
        margin: 0 auto;
      }

      &:last-child::after {
        background-color: transparent;
      }

      h4 {
        font-size: 20px;
        color: #363636;
        line-height: 42px;

        &:hover {
          color: #f04055;
          cursor: pointer;
          text-decoration: underline;
        }
      }

      .reportFooter {
        font-size: 14px;
        color: #6c6c6c;
        height: 36px;
        line-height: 36px;

        .from {
          float: left;
        }

        .time {
          float: left;
          margin-left: 40px;
        }
      }
    }
  }
}
</style>