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
            <el-carousel height="400px" width="400px">
              <el-carousel-item
                v-for="item in shopItem.goodsList.slice(0, 5)"
                :key="item.goods_id"
              >
                <img :src="item.hd_thumb_url" alt="" />
                <div class="event" ref="event" @mousemove="moveHandle"></div>
                <div class="big">
                  <img :src="item.hd_url" alt="" ref="bigImg">
                </div>
                <div class="mask" ref="mask"></div>
                <img :src="item.hd_url" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- <div class="shopping-page-img">
            <img src="./images/shal.E咖啡.jpg" alt="" />
          </div> -->
          <!-- 这个是下面4个小图 -->
          <!-- <div class="shopping-page-main">
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
          </div> -->
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
              <!-- {{this.detailData.goods_name}} -->
            </p>
          </div>
          <!-- 价格图片 -->
          <div class="shopping-page-right-img">
            <div class="shopping-page-right-img-qian">
              <i>￥</i>
              <span >{{skuNum*400}}</span>
              <!-- <span>{{this.detailData.group_price}}</span> -->
              <span>999</span>
              <span class="shopping-page-right-img-jiage">1.9折</span>
            </div>
          </div>
          <!-- 最后部分大容器 -->
          <div class="shopping-page-right-bottom">
            <!-- 配送行 -->
            <div class="shopping-page-right-bottom-one">
              <span class="heihei">配送</span>
              <!-- 选择市区 -->
              <!-- <div class="shopping-page-right-bottom-one-city">
                请选择省市区
                <i class="fa fa-caret-down" aria-hidden="true"></i>
              </div> -->
              <!-- <el-row class="block-col-2"> -->
  <el-col :span="12">
    <el-dropdown>
      <span class="el-dropdown-link">
        选择市区宝贝<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">北京市</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">上海市</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">深圳市</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">giao市</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">啥也不是</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
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
                  <span>蓝色</span>
                </li>
                <li>
                  <span>绿色</span>
                </li>
                <li>
                  <span>红色</span>
                </li>
                <li>
                  <span>灰色</span>
                </li>
                <li>
                  <span>白色</span>
                </li>
                <li>
                  <span>紫色</span>
                </li>
              </ul>
            </div>
            <!-- 数量 -->
            <div class="shopping-page-right-bottom-Four" style="cursor: pointer;" >
              <p>数量</p>
              <!-- 增选价格小容器 -->
              <div class="shopping-page-right-bottom-Four-item">
                <!-- 减号 -->
                <div class="shopping-page-right-bottom-Four-item-minus-sign">
                  <span @click="skuNum>1?skuNum--:''">-</span>
                </div>
                <!-- 数量 -->
                <input class="shopping-page-right-bottom-Four-item-number" v-model="skuNum">
                <!-- </input> -->
                <!-- 加号 -->
                <div class="shopping-page-right-bottom-Four-item-plus">
                  <span class="plus-span" @click="skuNum++">+</span>
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
              <div class="shopping-page-right-bottom-Five-one" @click="toLogin">
           
                <span class="Five-spanTwo">给老子结算</span>
              </div>
            </div>
            <!-- 客服 -->
            <div class="shopping-page-right-bottom-Siz">
              <!--  //第一行 -->
              <div class="shopping-page-right-bottom-Siz-item">
                <span>客服</span>
                <!-- <span></span> -->
                <img src="./atm-away.png" alt="" />

                <a href="##">在线客服</a>
                （09:00-22:59）
              </div>
              <!--  //第二行 -->
              <div class="shopping-page-right-bottom-Siz-item2">
                <div class="shopping-page-right-bottom-Siz-item2-one">
                  <span>服务</span>
                </div>
                <div class="shopping-page-right-bottom-Siz-item2-two">
                  <img src="./images/bussiness-man.png" alt="" />
                </div>
                <div class="shopping-page-right-bottom-Siz-item2-three">
                  <span>唯品会发货及售后</span>
                </div>
                <div class="shopping-page-right-bottom-Siz-item2-four">
                  <img src="./images/bussiness-man.png" alt="" />
                  <span>顺丰发送</span>
                </div>
                <div class="shopping-page-right-bottom-Siz-item2-six">
                  <img src="./images/prompt.png" alt="" />
                  <span>不支持7天无理由退货</span>
                </div>
                <div class="shopping-page-right-bottom-Siz-item2-Seven">
                  <img src="./images/prompt.png" alt="" />
                  <span>不支持换货</span>
                </div>
                <div class="shopping-page-right-bottom-Siz-item2-Eight">
                  <img src="./images/arrow-down.png" alt="" />
                </div>
                <div
                  class="shopping-page-right-bottom-Siz-item2-yin"
                  style="display: none"
                >
                  <ul>
                    <li>
                      <span></span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 第三行 -->
              <div class="shopping-page-right-bottom-Siz-item3">
                <div>提示 <img src="./images/bussiness-man.png" alt="" /></div>

                <div class="shopping-page-right-bottom-Siz-item3-one">
                  <span
                    >国家药监局提示您：法规规定的特殊用途化妆品，如祛斑美白、防晒等化妆品，产品标签上应标注“国妆特字”或者“国妆特进字”的批准文号。</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Shopping',
  data() {
    return {
      shopItem: [], //商品数据
      skuNum: 1, //个数
      detailId: "", //商品id
      count: 400, //商品价格
      detailId: "" //商品id
    };
  },
  methods: {
    //宝贝这个是判断登录跳转带参数页面去购物车结算
    toLogin() {
      console.log(this.detailId);
      const query = { shopItem: this.shopItem.id, skuNum: this.skuNum };
      if (!localStorage.getItem("USERINFO_TOKEN")) {
        this.$router.push("/login");
      } else {
        this.$router.push({ path: "/cart", query });
      }
    },
    moveHandle(event) {
      // 获取鼠标移动的时候的横纵坐标
      const { offsetX, offsetY } = event;
      // 获取当前的遮挡层的宽度---200
      const maskWidth = this.maskWidth;
      // 获取遮挡层的div对象
      const maskDiv = this.$refs.mask;
      // 获取大图的div对象
      const bigImg = this.$refs.bigImg;
      var left = offsetX - maskWidth / 2;
      var top = offsetY - maskWidth / 2;
      // 横坐标的限定
      left = left < 0 ? 0 : left > maskWidth ? maskWidth : left;
      // 纵坐标的限定
      top = top < 0 ? 0 : top > maskWidth ? maskWidth : top;
      // 设置遮挡层的left和top
      maskDiv.style.left = left + "px";
      maskDiv.style.top = top + "px";
      // 设置大图的移动操作
      bigImg.style.left = -left * 2 + "px";
      bigImg.style.top = -top * 2 + "px";
    },
  },

  mounted() {
    this.shopItem = this.$route.query.item;
    console.log(this.$route);
    this.maskWidth = this.$refs.event.clientWidth / 2;
  },
  components: {},
  computed: {
    detailData() {
      if (this.shopItem.goodsList) {
        return this.shopItem.goodsList.find((item) => {
          item.cat_id1 === detailId;
        });
      }
    },
  },
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
      border-bottom: 1px dashed #dfdfdf;
      img {
        width: 420px;
        height: 550px;
      }
      //<!-- 这个是大图 -- >
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
      // .shopping-page-main {
      //   width: 100%;
      //   height: 64px;
      //   margin-top: 10px;
      //   float: left;
      //   .shopping-page-item {
      //     width: 62px;
      //     height: 62px;
      //     float: left;
      //     margin-right: 10px;
      //     &:nth-child(1) {
      //       margin-left: 37px;
      //     }
      //     img {
      //       width: 62px;
      //       height: 62px;
      //       background: rgb(27, 26, 26);
      //     }
      //   }
      // }
      //<!-- 这是商品编码信息 -->
      .shopping-product-centent {
        width: 420px;
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #fafafa;
        // background: slategray;
        margin-top: 40px;
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
      height: 500px;
      border-bottom: 1px dashed #dfdfdf;
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
            margin-right: 18px;
          }
          //<!-- 选择市区 -->
          .el-dropdown-link {
            cursor: pointer;
            color: #454649;
          }
          .el-icon-arrow-down {
            font-size: 12px;
          }
          .demonstration {
            display: block;
            color: #8492a6;
            font-size: 12px;
            margin-bottom: 20px;
          }
          // .shopping-page-right-bottom-one-city {
          //   width: 252px;
          //   height: 32px;
          //   line-height: 32px;
          //   float: left;
          //   margin-left: 12px;
          //   padding-left: 8px;
          //   border: 1px solid rgb(180, 178, 178);
          //   i {
          //     float: right;
          //     margin-top: 11px;
          //     margin-right: 10px;
          //   }
          // }
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
              border: none;
              box-sizing: border-box;
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
            cursor: pointer;
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
              top: 15px;
              left: 23px;
            }
          }
          //第二个按钮
          .shopping-page-right-bottom-Five-Two {
            cursor: pointer;
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
        //  客服
        .shopping-page-right-bottom-Siz {
          width: 550px;
          height: 300px;
          margin-top: 44px;
          //第一行
          .shopping-page-right-bottom-Siz-item {
            width: 100%;
            height: 33px;
            line-height: 33px;
            position: relative;
            span {
              color: #999;
              margin-right: 11px;
            }
            img {
              margin-top: 5px;
              position: absolute;
              top: 3px;
              left: 36px;
            }
            a {
              color: #f43499;
              display: inline-block;
              margin-left: 20px;
            }
          }
          //第二行
          .shopping-page-right-bottom-Siz-item2 {
            width: 550px;
            height: 33px;
            line-height: 33px;
            margin-top: 4px;
            cursor: pointer;
            position: relative;
            .shopping-page-right-bottom-Siz-item2-yin {
              box-sizing: border-box;
              width: 538px;
              height: 307px;
              background: rgb(233, 243, 253);
              position: absolute;
              top: 34px;
              left: 12px;
              box-shadow: 0px -1px 3px 2px #bbb8b8;
            }
            .shopping-page-right-bottom-Siz-item2-one {
              float: left;
              span {
                color: #999;
                margin-right: 9px;
              }
            }

            .shopping-page-right-bottom-Siz-item2-two {
              float: left;
              padding-top: 5px;
              margin-right: 2px;
              img {
                width: 20px;
                height: 21px;
              }
            }
            .shopping-page-right-bottom-Siz-item2-three {
              float: left;
              span {
                color: #7a7878;
              }
            }
            .shopping-page-right-bottom-Siz-item2-four {
              float: left;
              margin-left: 12px;
              padding-top: 5px;
              margin-right: 2px;
              span {
                color: #7a7878;
                display: block;
                float: right;
                margin-top: -6px;
              }
              img {
                width: 20px;
                height: 21px;
              }
            }
            .shopping-page-right-bottom-Siz-item2-six {
              float: left;
              margin-left: 15px;
              padding-top: 5px;
              img {
                width: 20px;
                height: 21px;
              }
              span {
                color: #7a7878;
                display: block;
                float: right;
                margin-top: -6px;
              }
            }
            .shopping-page-right-bottom-Siz-item2-Seven {
              float: left;
              margin-left: 15px;
              padding-top: 5px;
              img {
                width: 20px;
                height: 21px;
              }
              span {
                color: #7a7878;
                display: block;
                float: right;
                margin-top: -6px;
              }
            }
            .shopping-page-right-bottom-Siz-item2-Eight {
              float: right;
              margin-right: 5px;
              margin-top: 5px;
            }
          }
          //第三行
          .shopping-page-right-bottom-Siz-item3 {
            width: 550px;
            height: 40px;
            margin-top: 4px;
            float: left;
            div {
              float: left;
              margin-right: 31px;
              position: relative;
              top: 13px;
              img {
                width: 20px;
                height: 21px;
                position: absolute;
                top: -3px;
                left: 33px;
                padding-right: 5px;
              }
            }
            .shopping-page-right-bottom-Siz-item3-one {
              width: 400px;
              float: left;
              margin-right: 2px;
            }
          }
        }
      }
    }
  }
}
</style>
