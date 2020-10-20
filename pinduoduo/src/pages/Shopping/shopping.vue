<template>
  <div>
    <div class="body-nav">
      <!-- 一个大容器 -->
      <div class="shopping-page">
        <!-- 大容器左边部分 -->
        <div class="shopping-page-left">
          <!-- 这个是大图 -->
          <div class="block">
            <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
            <el-carousel height="400px" style="width: 400px">
              <el-carousel-item
                v-for="item in detGoodsList.goodsList.slice(0, 4)"
                :key="item"
              >
                <img style="width=420px" :src="item.hd_thumb_url" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- <div class="shopping-page-img">
            <img src="./images/shal.E咖啡.jpg" alt="" />
          </div> -->
          <!-- 这个是下面4个小图 -->
          <div class="shopping-page-main">
            <div class="shopping-page-item">
              <img src="./images/shal.E咖啡.jpg" alt="" />
            </div>
            <div class="shopping-page-item">
              <img src="./images/shal.E咖啡.jpg" alt="" />
            </div>
            <div class="shopping-page-item">
              <img src="./images/shal.E咖啡.jpg" alt="" />
            </div>
            <div class="shopping-page-item">
              <img src="./images/shal.E咖啡.jpg" alt="" />
            </div>
          </div>
          <!-- 这是商品编码信息 -->
          <div class="shopping-product-centent">
            <p class="shopping-product-centent-text">商品编码：19851101257</p>
            <p class="shopping-product-centent-text2">
              <i class="fa fa-blind" aria-hidden="true"></i>
              <span>收藏商品</span>
            </p>
            <!-- 分享 -->
            <div class="shopping-share-box">
              <!-- 分享图标 -->
              <i id="fa-reply" class="fa fa-reply" aria-hidden="true"></i>
              <!-- 分享文字 -->
              <span class="shopping-share-box-text">分享到:</span>
              <!-- 分享的小三角 -->
              <i
                id="fa-caret-down"
                class="fa fa-caret-down"
                aria-hidden="true"
              ></i>
              <!-- 隐藏样式 -->
              <div class="shopping-share-box-icon">
                <!-- 隐藏样式第1个图 -->
                <a href="" class="shopping-share-item-icon">
                  <i
                    id="fa-fort-awesome"
                    class="fa fa-fort-awesome"
                    aria-hidden="true"
                  ></i>
                </a>
                <!-- 隐藏样式第2个图 -->
                <a href="" class="shopping-share-item-icon2">
                  <i class="fa fa-qq"></i>
                </a>
                <!-- 隐藏样式第3个图 -->
                <a href="" class="shopping-share-item-icon3">
                  <i class="fa fa-weixin" aria-hidden="true"></i>
                </a>
                <!-- 隐藏样式第4个图 -->
                <a href="" class="shopping-share-item-icon4">
                  <i class="fa fa-weibo" aria-hidden="true"></i>
                </a>
              </div>
              <div class="shopping-yin"></div>
            </div>
          </div>
        </div>
        <!--大容器右边部分  -->
        <div class="shopping-page-right">
          <!-- 前2行文字的容器 -->
          <div class="shopping-page-right-centent">
            <a
              href="https://list.vip.com/brand.html?sn=10013999"
              class="shopping-page-right-centent-text"
            >
              MORELINE
            </a>
            <p class="shopping-page-right-centent-title">
              沐兰2019秋冬新款长袖女装半高圆领修身弹力典雅印花衬衫
            </p>
          </div>
          <!-- 价格图片 -->
          <div class="shopping-page-right-img">
            <div class="shopping-page-right-img-qian">
              <i>￥</i>
              <span>447</span>
              <span class="shopping-page-right-img-jiage">1.9折</span>
            </div>
          </div>
          <!-- 最后部分大容器 -->
          <div class="shopping-page-right-bottom">
            <!-- 配送行 -->
            <div class="shopping-page-right-bottom-one">
              <span class="heihei">配送</span>
              <!-- 选择市区 -->
              <div class="shopping-page-right-bottom-one-city">
                请选择省市区
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </div>
            </div>
            <!-- 运送行 -->
            <div class="shopping-page-right-bottom-two">
              <span class="haha">运送</span>
              <p>新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</p>
            </div>
            <!-- 颜色 -->
            <div class="shopping-page-right-bottom-three">
              <p class="giao">颜色</p>
              <ul class="shopping-page-right-bottom-three-item">
                <li>
                  <span>黑色</span>
                </li>
                <li>
                  <span>黑色</span>
                </li>
                <li>
                  <span>黑色</span>
                </li>
                <li>
                  <span>黑色</span>
                </li>
                <li>
                  <span>黑色</span>
                </li>
                <li>
                  <span>黑色</span>
                </li>
                <li>
                  <span>黑色</span>
                </li>
              </ul>
            </div>
            <!-- 数量 -->
            <div class="shopping-page-right-bottom-Four">
              <p>数量</p>
              <!-- 增选价格小容器 -->
              <div class="shopping-page-right-bottom-Four-item">
                <!-- 减号 -->
                <div class="shopping-page-right-bottom-Four-item-minus-sign">
                  <span>-</span>
                </div>
                <!-- 数量 -->
                <div class="shopping-page-right-bottom-Four-item-number">
                  <span>1</span>
                </div>
                <!-- 加号 -->
                <div class="shopping-page-right-bottom-Four-item-plus">
                  <span class="plus-span">+</span>
                </div>
              </div>
              <div class="shopping-page-right-bottom-Four-text">
                <p class="plus-pone">
                  仅剩 <span>10件</span> ，抓紧时间抢购哦!
                </p>
              </div>
            </div>
            <!-- 点击购买 -->
            <div class="shopping-page-right-bottom-Five">
              <!-- 第一个按钮 -->
              <div class="shopping-page-right-bottom-Five-one">
                <span class="Five-spanOne">￥636.8</span>
                <span class="Five-spanTwo">全网低价</span>
              </div>
              <!-- 第二个按钮 -->
              <div class="shopping-page-right-bottom-Five-Two">
                <span class="Five-spanOne">￥636.8</span>
                <span class="Five-spanTwo">全网低价</span>
              </div>
            </div>
            <!-- 客服在线 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detGoodsList: [],
    };
  },
  mounted() {
    console.log(this.$route);
    this.detGoodsList = this.$route.query.item;
  },
  components: {},
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.body-nav {
  width: 100%;
  .shopping-page {
    width: 1000px;
    height: 1000px;

    margin: 0 auto;
    //<!-- 大容器左边部分 -->
    .shopping-page-left {
      float: left;
      width: 420px;
      height: 550px;
      background: #fff;
      border-bottom: 1px solid #8d8989;
      // <!-- 这个是大图 -->
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
      // .shopping-page-img {
      //   width: 420px;
      //   height: 420px;
      //   img {
      //     width: 100%;
      //     height: 100%;
      //   }
      // }
      //<!-- 这个是下面4个小图 -->
      .shopping-page-main {
        width: 100%;
        height: 64px;
        margin-top: 10px;
        float: left;
        .shopping-page-item {
          width: 62px;
          height: 62px;
          float: left;
          margin-right: 10px;
          &:nth-child(1) {
            margin-left: 37px;
          }
          img {
            width: 62px;
            height: 62px;
            background: rgb(27, 26, 26);
          }
        }
      }
      //<!-- 这是商品编码信息 -->
      .shopping-product-centent {
        width: 420px;
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #fafafa;
        // background: slategray;
        margin-top: 74px;
        .shopping-product-centent-text {
          float: left;
          margin-right: 20px;
        }
        .shopping-product-centent-text2 {
          float: left;
          i {
            color: #f10180;
          }

          &:hover {
            span {
              color: #f10180;
            }
          }
        }
      }
      //<!-- 分享 -->
      .shopping-share-box {
        position: relative;
        width: 95px;
        height: 25px;
        line-height: 25px;
        border: 1px solid #8d8989;
        background: rgb(221, 223, 224);
        float: right;
        margin-top: 12px;

        &:hover {
          .shopping-yin {
            background: #fff;
            width: 95px;
            height: 1px;
            position: absolute;
            left: 0;
            top: 25px;
          }
          background: #fff;
          border-bottom: 2px solid #fff;
          .shopping-share-box-icon {
            display: block;
          }
        }
        // <!-- 分享图标 -->
        #fa-reply {
          margin-left: 10px;
        }
        //<!-- 分享的小三角 -->
        #fa-caret-down {
          margin-left: 5px;
        }
        //<!-- 分享文字 -->
        .shopping-share-box-text {
          font-size: 12px;
          margin-left: 3px;
        }
        //<!-- 隐藏样式 -->
        .shopping-share-box-icon {
          position: absolute;
          top: 25px;
          left: -1px;
          display: none;
          width: 125px;
          height: 32px;
          line-height: 32px;
          background: #fff;
          border: 1px solid #8d8989;
          //< !-- 隐藏样式第1个图 -->
          .shopping-share-item-icon {
            display: inline-block;
            width: 20%;
            height: 20px;
            margin-left: 10px;
          }
          // <!-- 隐藏样式第2个图 -->
          .shopping-share-item-icon2 {
            display: inline-block;
            width: 20%;
            height: 20px;
            margin-left: 2px;
          }
          //< !-- 隐藏样式第3个图 -->
          .shopping-share-item-icon3 {
            display: inline-block;
            width: 20%;
            height: 20px;
            margin-left: 1px;
          }
        }
      }
    }
    // 大容器右边部分
    .shopping-page-right {
      float: right;
      width: 550px;
      height: 530px;
      //<!-- 前2行文字的容器 -->
      .shopping-page-right-centent {
        width: 100%;
        height: 50px;
        .shopping-page-right-centent-text {
          color: #007cff;
          font-size: 16px;
          display: block;
          margin-bottom: 6px;
        }
        .shopping-page-right-centent-title {
          font-size: 16px;
          color: #333;
          font-weight: 700;
        }
      }
      //<!-- 价格图片 -->
      .shopping-page-right-img {
        width: 550px;
        height: 94px;
        margin-top: 12px;
        background: url("https://b.appsimg.com/upload/momin/2020/08/19/123/1597801521599.png");
        .shopping-page-right-img-qian {
          width: 200px;
          height: 60px;
          line-height: 60px;
          color: #fff;
          font-size: 38px;
          padding-top: 15px;
          padding-left: 29px;
          i {
            display: inline-block;
            margin-right: -4px;
          }
          .shopping-page-right-img-jiage {
            font-size: 15px;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      //<!-- 最后部分大容器 -->
      .shopping-page-right-bottom {
        width: 550px;
        height: 330px;
        margin-top: 21px;
        border-bottom
        //  <!-- 配送行 -->
        .shopping-page-right-bottom-one {
          width: 100%;
          height: 32px;
          line-height: 32px;
          //  <!-- 配送 -->
          .heihei {
            font-size: 12px;
            color: #999;
            float: left;
          }
          //<!-- 选择市区 -->
          .shopping-page-right-bottom-one-city {
            width: 252px;
            height: 32px;
            line-height: 32px;
            float: left;
            margin-left: 12px;
            padding-left: 8px;
            border: 1px solid rgb(180, 178, 178);
            i {
              float: right;
              margin-top: 11px;
              margin-right: 10px;
            }
          }
        }
        // <!-- 运送行 -->
        .shopping-page-right-bottom-two {
          width: 100%;
          height: 32px;
          line-height: 32px;
          margin-top: 8px;
          p {
            display: inline-block;
            margin-left: 17px;
          }
        }
        //<!-- 颜色 -->
        .shopping-page-right-bottom-three {
          width: 539px;
          height: 80px;
          margin-top: 12px;
          p {
            float: left;
            margin-top: 15px;
            margin-right: 15px;
          }
          .shopping-page-right-bottom-three-item {
            width: 400px;

            float: left;
            li {
              float: left;
              width: 32px;
              height: 26px;
              line-height: 26px;
              background: rgb(197, 194, 194);
              padding: 0 20px;
              text-align: center;
              margin-right: 10px;
              margin-top: 10px;
              border: 1px solid rgb(192, 190, 190);
            }
          }
        }
        // <!-- 数量 -->
        .shopping-page-right-bottom-Four {
          width: 540px;
          height: 30px;
          line-height: 30px;
          padding: 11px 0px;
          margin-top: 15px;
          position: relative;
          .shopping-page-right-bottom-Four-text {
            position: absolute;
            top: 10px;
            left: 138px;
            height: 30px;
            width: 200px;
            span {
              color: #f43499;
            }
          }
          p {
            float: left;
          }
          .shopping-page-right-bottom-Four-item {
            width: 75px;
            height: 30px;
            border: 1px solid #8d8989;
            margin-left: 33px;
            //< !-- 减号 -->
            .shopping-page-right-bottom-Four-item-minus-sign {
              float: left;
              width: 21px;
              height: 30px;
              text-align: center;
              border-right: 1px solid #bdbbbb;
            }
            //<!-- 数量 -->
            .shopping-page-right-bottom-Four-item-number {
              float: left;
              width: 31px;
              height: 30px;
              text-align: center;
              line-height: 30px;
            }
            //<!-- 加号 -->
            .shopping-page-right-bottom-Four-item-plus {
              float: right;
              width: 21px;
              height: 30px;
              text-align: center;
              border-left: 1px solid #bdbbbb;
              position: relative;
            }
          }
        }
        //  点击购买
        .shopping-page-right-bottom-Five {
          width: 550px;
          height: 46px;

          margin-top: 15px;
          // 第一个按钮
          .shopping-page-right-bottom-Five-one {
            float: left;
            width: 113px;
            height: 46px;
            background: #f688a4;
            border-radius: 3px;
            color: #fff;
            text-align: center;
            margin-left: 40px;
            position: relative;
            .Five-spanOne {
              font-size: 20px;
              display: block;
              padding-top: 2px;
              position: absolute;
              top: -6px;
              left: 17px;
            }
            .Five-spanTwo {
              font-size: 14px;
              position: absolute;
              top: 23px;
              left: 28px;
            }
          }
          //第二个按钮
          .shopping-page-right-bottom-Five-Two {
            float: left;
            width: 130px;
            height: 46px;
            background: #f03867;
            border-radius: 3px;
            color: #fff;
            text-align: center;

            position: relative;

            .Five-spanOne {
              font-size: 20px;
              display: block;
              padding-top: 2px;
              position: absolute;
              top: -6px;
              left: 17px;
            }

            .Five-spanTwo {
              font-size: 14px;
              position: absolute;
              top: 23px;
              left: 28px;
            }
          }
        }
      }
    }
  }
}
</style>
