<template>
  <div>
    <!-- 主体部分 -->
    <div class="main">
      <!-- 大图部分 -->
      <div class="banner">
        <!-- <router-link to="Download"> -->
        <a href="/home/download">
          <img src="./image/banner.jpg" alt="" />
        </a>
        <!-- </router-link> -->
      </div>
      <!-- 商品部分 -->
      <div class="body">
        <!-- 精彩活动和更多栏 -->
        <div class="titleGroup">
          <span class="recommend">精彩活动</span>
          <!-- <router-link to="/home/more"> -->
          <!-- <a href="/home/more"> -->
          <span class="more">更多 ></span>

          <!-- </router-link> -->
        </div>
        <!-- 精彩活动图片区 -->
        <div class="wonderfulActivities">
          <!-- 秒杀一元秒 -->
          <div class="seckillOds">
            <a href="javascript:;">
              <img src="./image/xianshimiaosha.jpg" alt="" />
            </a>
            <a href="javascript:;">
              <img src="./image/9.9small.jpg" alt="" />
            </a>
            <a href="javascript:;">
              <img src="./image/supermarket_v2.jpg" alt="" />
            </a>
            <a href="javascript:;" class="moreExciting">
              <img src="./image/download.jpg" alt="" />
            </a>
          </div>
        </div>
        <!-- 精选专题和更多栏 -->
        <div class="titleGroup">
          <span class="selectedTopics">精选专题</span>
          <!-- <router-link to="more"> -->
          <a href="/home/more">
            <span class="more">更多 ></span>
          </a>
          <!-- </router-link> -->
        </div>
        <!-- 精选活动图片商品区 -->
        <div class="contentGroup">
          <div class="floor">
            <a
              href="javascript:;"
              class="subjectWrap"
              v-for="(item, index) in goods"
              :key="index"
              @click="goMore(item)"
            >
              <img :src="item.coverImgUrl" alt="" />
              <!-- 小图商品 -->
              <div class="goodsGroup">
                <div
                  class="goods"
                  v-for="(goodsItem, index) in item.goodsList.slice(0, 3)"
                  :key="index"
                >
                  <img :src="goodsItem.hd_thumb_url" alt="" />
                  <div class="title">
                    {{ goodsItem.goods_name }}
                  </div>
                  <div class="price">
                    ￥
                    <span class="groupPrice">{{
                      goodsItem.group_price / 100
                    }}</span>
                    <span class="marketPrice"
                      >￥{{ goodsItem.market_price / 100 }}</span
                    >
                  </div>
                </div>
                <!-- <div class="goods">
                  <img src="./image/floorListSmall.jpeg" alt="" />
                  <div class="title">
                    高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                  </div>
                  <div class="price">
                    ￥
                    <span class="groupPrice">93</span>
                    <span class="marketPrice">￥999</span>
                  </div>
                </div>
                <div class="goods">
                  <img src="./image/floorListSmall.jpeg" alt="" />
                  <div class="title">
                    高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                  </div>
                  <div class="price">
                    ￥
                    <span class="groupPrice">93</span>
                    <span class="marketPrice">￥999</span>
                  </div>
                </div> -->
              </div>
            </a>
          </div>
          <!-- <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
             
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
             
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
          
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
            
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
           
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
             小图商品 
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
          
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
           
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
         
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="subjectWrap">
            <img src="./image/floorBanner.jpg" alt="" />
           
            <div class="goodsGroup">
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
              <div class="goods">
                <img src="./image/floorListSmall.jpeg" alt="" />
                <div class="title">
                  高梵轻薄羽绒服女2020年新款短款时尚反季节超薄休闲轻便冬外套潮
                </div>
                <div class="price">
                  ￥
                  <span class="groupPrice">93</span>
                  <span class="marketPrice">￥999</span>
                </div>
              </div>
            </div>
          </a> -->
        </div>
      </div>
      <div class="stopLeftCode">
        <div class="leftCodeContainer">
          <img src="./image/LeftStop.png" alt="" />
          <div class="leftCodeTitle">
            <div>微信扫码下载</div>
            <div>APP专享优惠</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      goodsData: []
    };
  },
  computed: {
    ...mapState({
      goods: state => state.home.goodsList
    })
  },
  mounted() {
    this.getGoodsList();
    // console.log(this.goods);
    this.goodsData = this.goods;
    // console.log(this.goodsData)
  },
  methods: {
    ...mapActions({
      getGoodsList: "getGoodsList"
    }),
    
    goMore(item) {
      // console.log(item)
      const { path, query } = this.$route;
      this.$router.push({
        path: "/home/more",
        query: {
          goodsData:item
        }
      });
    }
  },
  components: {}
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
//主体部分
.main {
  width: 100%;
  // 大图
  .banner {
    img {
      width: 100%;
      // margin-top: 107px;
      margin: 0 aoto;
    }
  }
  //内容
  .body {
    width: 1200px;
    height: 4079px;
    margin: 77px auto 30px auto;
    //  background-color: aquamarine;
    .titleGroup {
      overflow: hidden;
      width: 100%;
      margin-top: 55px;
      border-bottom: 1px solid #c1c1c1;
      padding-bottom: 17px;
      margin-bottom: 45px;
      font-size: 20px;
      color: #363636;
      .more {
        font-size: 18px;
        margin-right: 5px;
        float: right;
        color: #6c6c6c;
      }
    }
    .wonderfulActivities {
      overflow: hidden;
      .seckillOds {
        a {
          margin: 0 17px 17px 0;
          padding: 14px;
          float: left;
          background-color: #fff;
        }
        .moreExciting {
          margin: 0 0 17px 0;
        }
      }
    }
    .contentGroup {
      overflow: hidden;
      box-sizing: border-box;
      a {
        float: left;
        background-color: #fff;
        padding: 10px;
        margin-right: 45px;
        margin-bottom: 45px;
        img {
          width: 556px;
          height: 276px;
        }
        .goodsGroup {
          border: 1px solid #f6f6f6;
          overflow: hidden;
          .goods {
            background-color: #fff;
            float: left;
            margin: 0 12px;
            width: 160px;
            // position: relative;
            img {
              width: 125px;
              height: 125px;
              margin: 7px auto;
            }
            .title {
              color: #111;
              font-size: 12px;
              line-height: 18px;
              height: 36px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .price {
              font-size: 12px;
              line-height: 30px;
              text-align: center;
              .groupPrice {
                color: #111;
                font-size: 16px;
              }
              .marketPrice {
                color: #cbcbcb;
                font-size: 14px;
                text-decoration: line-through;
              }
            }
          }
        }
      }
      .subjectWrap:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  // 右侧悬浮二维码
  .stopLeftCode {
    position: fixed;
    bottom: 150px;
    left: 0px;
    z-index: 5;
    width: 162px;
    background-color: #fff;
    .leftCodeContainer {
      margin: 8px;
      padding: 20px 15px 8px;
      border: 2px solid #ffedf1;
      img {
        width: 100%;
        height: 100%;
        min-height: 112px;
      }
      .leftCodeTitle {
        margin-top: 10px;
        color: #666;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>