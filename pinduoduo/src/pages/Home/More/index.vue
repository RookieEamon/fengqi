<template>
  <div>
    <div class="subject">
      <!-- 导航 -->
      <div class="navList">
        <ul class="nav"> 
          <li class="focus" >限时秒杀</li>
          <li >9.9特卖</li>
          <li >食品超市</li>
        </ul>
      </div>
      <!-- 大图 -->
      <div class="bannerGroup">
        <img src="../image/floorbannerMan.jpg" alt="" />
        <div class="rightTitle">
          <div class="title">限时秒杀</div>
          <div class="desc">每日精选好货超低价秒杀，限时限量，全场包邮。</div>
        </div>
      </div>
      <!-- 商品列表区 -->
      <div class="goodsList">
        <div
          class="goods"
          v-for="(item, index) in goodsItem.goodsList"
          :key="index"
        >
          <div class="scan">
            <img class="img" :src="item.hd_thumb_url" alt="" />
            <div class="qrcode">
              <img src="../image/saowogoumai.png" alt="" />
              <div class="qrcodeText">微信扫我购买</div>
            </div>
          </div>
          <div class="goodsIntroduce">
            {{ item.goods_name }}
          </div>
          <div class="price">
            ￥
            <span class="groupPrice">{{ item.group_price / 100 }}</span>
            <span class="marketPrice">￥{{ item.market_price / 100 }}</span>
            <span class="count">{{ item.sales_tip }}</span>
          </div>
        </div>

        
        <!-- 最后一个 -->
        <div class="goods">
          <div class="lastCode">
            <div class="lastCodeTop">更多商品优惠</div>
            <img src="../image/saowogoumai.png" alt="" />
            <div class="lastCodeBottom">尽在拼多多App</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "More",
  data() {
    return {
      goodsItem: [],
    };
  },
  mounted() {
    this.goodsItem = this.$route.query.goodsData
    console.log(this.goodsItem)
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
// 主题部分
.subject {
  margin-top: 107px;
  overflow: hidden;
  // 导航条部分
  .navList {
    background-color: #ed445b;
    position: fixed;
    width: 100%;
    height: 44px;
    z-index: 1;
    .nav {
      width: 1200px;
      margin: 0 auto;
      li {
        display: inline-block;
        height: 44px;
        line-height: 40px;
        padding: 0 18px;
        color: #fff;
        font-size: 18px;
        text-align: center;
        cursor: pointer;
      }
      .focus {
        background-color: #d53758;
      }
    }
  }
  // 大图部分
  .bannerGroup {
    width: 1200px;
    margin: 91px auto 35px auto;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    img {
      float: left;
      width: 546px;
      height: 271px;
    }
    .rightTitle {
      float: right;
      width: 582px;
      height: 270px;
      border: 1px solid #f6f6f6;
      padding-left: 30px;
      padding-right: 20px;
      .title {
        border-bottom: 1px solid #f6f6f6;
        color: #111;
        font-size: 24px;
        line-height: 56px;
        margin-top: 4px;
      }
      .desc {
        color: #686868;
        font-size: 16px;
        line-height: 30px;
        margin-top: 13px;
        padding-bottom: 13px;
      }
    }
  }
  //商品列表部分
  .goodsList {
    width: 1200px;
    // height: 100px;
    margin: 0 auto;
    // background-color: aquamarine;
    .goods:nth-child(4n) {
      margin-right: 0;
    }
    .goods {
      position: relative;
      background-color: #fff;
      float: left;
      margin: 0 30px 30px 0;
      width: 276px;
      img {
        width: 220px;
        height: 220px;
        margin: 28px 0 28px 28px;
      }
      .scan:hover .qrcode {
        display: block;
      }
      .qrcode {
        display: none;
        position: absolute;
        left: 28px;
        top: 28px;
        width: 220px;
        height: 220px;
        background-color: rgba(0, 0, 0, 0.6);
        img {
          margin-top: 20px;
          margin-bottom: 0px;
          width: 160px;
          height: auto;
          margin-left: 30px;
        }
        .qrcodeText {
          color: #fff;
          font-size: 14px;
          text-align: center;
          margin-top: 10px;
        }
      }
      .goodsIntroduce {
        color: #686868;
        font-size: 16px;
        line-height: 22px;
        height: 44px;
        margin: 0 14px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        padding: 30px 15px 20px 15px;
        line-height: 22px;
        .groupPrice {
          color: #111;
          font-size: 22px;
        }
        .marketPrice {
          color: #cbcbcb;
          font-size: 18px;
          text-decoration: line-through;
        }
        .count {
          float: right;
          color: #9c9c9c;
          font-size: 16px;
        }
      }
      // 最后一张更多二维码图
      .lastCode {
        background-color: #fff;
        padding: 60px 60px;
        .lastCodeTop {
          color: #999;
          font-size: 22px;
          text-align: center;
          margin-bottom: 30px;
        }
        img {
          width: 100%;
          height: 100%;
          margin: 28px auto;
        }
        .lastCodeBottom {
          color: #999;
          font-size: 22px;
          text-align: center;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>