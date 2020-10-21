<template>
  <div>
    <div class="body-nav">
      <!-- 头部 -->
      <div class="nav">
        <div class="nav-top">
          <!-- logo -->
          <div class="LOGO">
            <img src="./images/LOGO.5a06cbea.png" alt="" />
          </div>
          <!-- logo旁边三个东西 -->
          <div class="nav-list">
            <a class="nav-list-one" href="###">
              <img src="./images/IMG_8045.jpg" alt="" />
            </a>
            <a class="nav-list-two" href="###">
              <img src="./images/IMG_8047.jpg" alt="" />
            </a>
            <a class="nav-list-three" href="###">
              <img src="./images/IMG_8091.jpg" alt="" />
            </a>
          </div>
          <!-- logo旁边三个东西结束 -->
          <!-- 搜索框 -->
          <div class="search">
            <input class="search-box" type="text" placeholder="女式大衣" />
            <!-- 搜索按钮 -->
            <button class="search-botton" @click="toMore()">
              <i class="fa fa-snowflake-o" aria-hidden="true"></i>
            </button>
          </div>
          <!-- 购物车 -->
          <div class="shopping-bag">
            <span><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
            <span>购物袋</span>
            <span>0</span>

            <!-- 隐藏框 -->
            <div class="shopping-bag-hidden">
              好像还未登录！<a href="">马上登录</a>查看购物袋吧!
              <div class="yin"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 商品分类 那行 -->
      <div class="main-nav">
        <!-- 商品分类中心层 -->
        <div class="head-inner">
          <!-- 这个是商品分类 -->
          <div class="shop-category">
            <a href="###">
              <i class="fa fa-tasks" aria-hidden="true"></i>
              商品分类
            </a>
            <div class="shop-category-he">
              <ul id="shop-category-yin">
                <li>
                  <span class="menu-item-tit">女装/男装/内衣</span>
                  <div class="sort" style="background: seagreen"></div>
                </li>

                <li>
                  <span class="menu-item-tit">女鞋/男鞋/箱包</span>
                  <div class="sort" style="background: rgb(32, 34, 33)">
                    sss
                  </div>
                </li>
                <li>
                  <span class="menu-item-tit">护肤彩妆/个护</span>
                  <div class="sort" style="background: rgb(46, 60, 139)"></div>
                </li>
                <li>
                  <span class="menu-item-tit">运动户外</span>
                  <div class="sort">hh</div>
                </li>
                <li>
                  <span class="menu-item-tit">家电数码</span>
                  <div class="sort">heihei</div>
                </li>
                <li>
                  <span class="menu-item-tit">女婴童装</span>
                  <div class="sort"></div>
                </li>
                <li>
                  <span class="menu-item-tit">手表配饰</span>
                  <div class="sort"></div>
                </li>
                <li>
                  <span class="menu-item-tit">居家用品</span>
                  <div class="sort"></div>
                </li>
                <li>
                  <span class="menu-item-tit">唯品生活</span>
                  <div class="sort"></div>
                </li>
                <li>
                  <span class="menu-item-tit">唯品国际/唯品奢</span>
                  <div class="sort"></div>
                </li>
                <li>
                  <span class="menu-item-tit">医药健康</span>
                  <div class="sort"></div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 商品分类结束 -->
          <!-- 这个是商品分类旁边那几个标签 -->
          <ul class="Label-container">
            <li class="shop-label">
              <a href="##">首页</a>
            </li>
            <li class="shop-label">
              <a href="##">最后疯抢</a>
            </li>
            <li class="shop-label">
              <a href="##">唯品快抢</a>
            </li>
            <li class="shop-label">
              <a href="##">品牌清仓</a>
            </li>
            <li class="shop-label">
              <a href="##">女装</a>
            </li>
            <li class="shop-label">
              <a href="##">母婴</a>
            </li>
            <li class="shop-label">
              <a href="##">家电</a>
            </li>
            <li class="shop-label">
              <a href="##">国际</a>
            </li>
            <li class="shop-label">
              <a href="##">美妆</a>
            </li>
            <li class="shop-label">
              <a href="##">鞋包</a>
            </li>
            <li class="shop-label">
              <a href="##">男装</a>
            </li>
            <li class="shop-label">
              <a class="shop-label-a" href="##"
                >更多<i class="fa fa-caret-down" aria-hidden="true"></i
              ></a>
              <div class="shop-yin">
                <ol>
                  <a class="shop-yin-a" href="##">运动</a>
                </ol>
                <ol>
                  <a class="shop-yin-a" href="##">家具</a>
                </ol>
                <ol>
                  <a class="shop-yin-a" href="##">生活</a>
                </ol>
                <ol>
                  <a class="shop-yin-a" href="##">配饰</a>
                </ol>
                <ol>
                  <a class="shop-yin-a" href="##">唯品.奢</a>
                </ol>
                <ol>
                  <a class="shop-yin-a" href="##">扶贫</a>
                </ol>
              </div>
            </li>
          </ul>
          <!-- 标签结束 -->
        </div>
        <!-- 商品分类中心层结束 -->
      </div>
      <!-- 商品分类 那行结束 -->
      <!-- 中心层大分类 -->
      <div class="list-define-w">
        <!-- 商品分多分类 -->
        <div class="c-filter-groups">
          <!-- 最少一套 -->
          <div class="c-filter-groups-item">
            <div class="button-visited">
              <span>更多选项^</span>
            </div>
            <h3 class="c-filter-groups-item-title">唯品服务</h3>
            <ul class="c-filter-groups-content">
              <li>
                <a href="">超值优惠</a>
              </li>
              <li>
                <a href="">专柜同步</a>
              </li>
            </ul>
            <div class="c-filter-groups-botton">
              <button>
                <i>+</i>
                <span>多选</span>
              </button>
            </div>
          </div>
          <div class="c-filter-groups-item">
            <h3 class="c-filter-groups-item-title">品牌</h3>
            <ul class="c-filter-groups-content">
              <li>
                <a href="">JEEP</a>
              </li>
              <li>
                <a href="">稻草人</a>
              </li>
              <li>
                <a href="">Columbia</a>
              </li>
              <li>
                <a href="">美津浓</a>
              </li>
              <li>
                <a href="">耐克</a>
              </li>
              <li>
                <a href="">骆驼牌</a>
              </li>
              <li>
                <a href="">凯乐石</a>
              </li>
              <li>
                <a href="">牧高笛</a>
              </li>
            </ul>
            <div class="c-filter-groups-botton">
              <button>
                <i>+</i>
                <span>多选</span>
              </button>
            </div>
          </div>
          <div class="c-filter-groups-item">
            <h3 class="c-filter-groups-item-title">品类</h3>
            <ul class="c-filter-groups-content">
              <li>
                <a href="">户外风衣</a>
              </li>
              <li>
                <a href="">女款外套</a>
              </li>
              <li>
                <a href="">运动外套</a>
              </li>
            </ul>
            <div class="c-filter-groups-botton">
              <button>
                <i>+</i>
                <span>多选</span>
              </button>
            </div>
          </div>
          <div class="c-filter-groups-item">
            <h3 class="c-filter-groups-item-title">尺码</h3>
            <ul class="c-filter-groups-content">
              <li>
                <a href="">XXS</a>
              </li>
              <li>
                <a href="">XS</a>
              </li>
              <li>
                <a href="">S</a>
              </li>
              <li>
                <a href="">M</a>
              </li>
              <li>
                <a href="">L</a>
              </li>
              <li>
                <a href="">XL</a>
              </li>
              <li>
                <a href="">2XL</a>
              </li>
              <li>
                <a href="">3XL</a>
              </li>
              <li>
                <a href="">4XL</a>
              </li>
              <li>
                <a href="">均码</a>
              </li>
            </ul>
            <div class="c-filter-groups-botton">
              <button>
                <i>+</i>
                <span>多选</span>
              </button>
            </div>
          </div>
          <!-- 最多一套 -->
          <!-- <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">唯品服务</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">超值优惠</a>
                    </li>
                    <li>
                        <a href="">专柜同步</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">品牌</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">JEEP</a>
                    </li>
                    <li>
                        <a href="">稻草人</a>
                    </li>
                    <li>
                        <a href="">Columbia</a>
                    </li>
                    <li>
                        <a href="">美津浓</a>
                    </li>
                    <li>
                        <a href="">耐克</a>
                    </li>
                    <li>
                        <a href="">骆驼牌</a>
                    </li>
                    <li>
                        <a href="">凯乐石</a>
                    </li>
                    <li>
                        <a href="">牧高笛</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">品类</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">户外风衣</a>
                    </li>
                    <li>
                        <a href="">女款外套</a>
                    </li>
                    <li>
                        <a href="">运动外套</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">唯品服务</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">XXS</a>
                    </li>
                    <li>
                        <a href="">XS</a>
                    </li>
                    <li>
                        <a href="">S</a>
                    </li>
                    <li>
                        <a href="">M</a>
                    </li>
                    <li>
                        <a href="">L</a>
                    </li>
                    <li>
                        <a href="">XL</a>
                    </li>
                    <li>
                        <a href="">2XL</a>
                    </li>
                    <li>
                        <a href="">3XL</a>
                    </li>
                    <li>
                        <a href="">4XL</a>
                    </li>
                    <li>
                        <a href="">均码</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">适用性别</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">男士</a>
                    </li>
                    <li>
                        <a href="">女士</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">颜色</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">黑色</a>
                    </li>
                    <li>
                        <a href="">白色</a>
                    </li>
                    <li>
                        <a href="">灰色</a>
                    </li>
                    <li>
                        <a href="">米色</a>
                    </li>
                    <li>
                        <a href="">红色</a>
                    </li>
                    <li>
                        <a href="">粉色</a>
                    </li>
                    <li>
                        <a href="">粉红色</a>
                    </li>
                    <li>
                        <a href="">橙色</a>
                    </li>
                    <li>
                        <a href="">黄色</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">厚薄</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">薄</a>
                    </li>
                    <li>
                        <a href="">常规</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">衣长</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">短</a>
                    </li>
                    <li>
                        <a href="">常规</a>
                    </li>
                    <li>
                        <a href="">长</a>
                    </li>
                    <li>
                        <a href="">中长</a>
                    </li>
                    <li>
                        <a href="">不对称衣长</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">版型</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">修身</a>
                    </li>
                    <li>
                        <a href="">常规</a>
                    </li>
                    <li>
                        <a href="">宽松</a>
                    </li>
                    <li>
                        <a href="">收腰</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">功能</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">保暖</a>
                    </li>
                    <li>
                        <a href="">防紫外线</a>
                    </li>
                    <li>
                        <a href="">速干</a>
                    </li>
                    <li>
                        <a href="">轻盈</a>
                    </li>
                    <li>
                        <a href="">透气</a>
                    </li>
                    <li>
                        <a href="">反光夜视</a>
                    </li>
                    <li>
                        <a href="">防虫</a>
                    </li>
                    <li>
                        <a href="">耐磨</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <h3 class="c-filter-groups-item-title">适用项目</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">XXS</a>
                    </li>
                    <li>
                        <a href="">XS</a>
                    </li>
                    <li>
                        <a href="">S</a>
                    </li>
                    <li>
                        <a href="">M</a>
                    </li>
                    <li>
                        <a href="">L</a>
                    </li>
                    <li>
                        <a href="">XL</a>
                    </li>
                    <li>
                        <a href="">2XL</a>
                    </li>
                    <li>
                        <a href="">3XL</a>
                    </li>
                    <li>
                        <a href="">4XL</a>
                    </li>
                    <li>
                        <a href="">均码</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>
                </div>
            </div>
            <div class="c-filter-groups-item">
                <div class="button-visited">
                    <span>收起选项^</span>
                </div>
                <h3 class="c-filter-groups-item-title">唯品服务</h3>
                <ul class="c-filter-groups-content">
                    <li>
                        <a href="">XXS</a>
                    </li>
                    <li>
                        <a href="">XS</a>
                    </li>
                    <li>
                        <a href="">S</a>
                    </li>
                    <li>
                        <a href="">M</a>
                    </li>
                    <li>
                        <a href="">L</a>
                    </li>
                    <li>
                        <a href="">XL</a>
                    </li>
                    <li>
                        <a href="">2XL</a>
                    </li>
                    <li>
                        <a href="">3XL</a>
                    </li>
                    <li>
                        <a href="">4XL</a>
                    </li>
                    <li>
                        <a href="">均码</a>
                    </li>
                </ul>
                <div class="c-filter-groups-botton">
                    <button>
                        <i>+</i>
                        <span>多选</span>
                    </button>

                </div>
            </div> -->
        </div>
        <!-- 商品价格区 -->
        <div class="pro-list-oper">
          <!-- 商品价格区左边 -->
          <div class="pro-left-oper">
            <div class="pro-left-one">
              <p>综合</p>
            </div>
            <div class="pro-left">
              <p>销量</p>
            </div>
            <div class="pro-left">
              <p>价格</p>
            </div>
            <div class="pro-left">
              <p>折扣</p>
            </div>
            <!-- 选项价格 -->
            <div class="shop-pro-right">
              <input
                class="input-one-pro"
                type="text"
                placeholder="￥"
                value="￥"
              />
              -<input
                class="input-two-pro"
                type="text"
                placeholder="￥"
                value="￥"
              />
              <div class="btn-con-div">
                <i class="btn-con">确定</i>
                <i class="btn-con">清除</i>
              </div>
            </div>
            <!-- 商品价格区右边 -->
            <div class="page-pro-list">
              <span class="page-total">
                <em class="page-num">440</em>
                件商品
              </span>
              <span>
                <em class="page-num2">1</em>
                /4
              </span>
              <span class="page-pre">
                <i> < </i>
              </span>
              <a href="##" class="page-page">
                下一页
                <i> > </i>
              </a>
            </div>
          </div>
        </div>
        <!-- 商品图片区 -->
        <div class="shop-list-img">
          <!-- 这是一个容器 -->
          <div
            class="shop-list-one"
            @click="shoplist(item)"
            v-for="item in goodsList"
            :key="item.id"
          >
            <!-- 这是一个装img的div -->
            <div class="shop-list-div">
              <img class="shop-list-tu" :src="item.coverImgUrl" />
            </div>
            <!-- 这是装价格和介绍商品 -->
            <div class="shop-list-introduce">
              <!-- 介绍价格 -->
              <div class="shop-list-item-goods">
                <div class="shop-list-item-item">
                  <div class="shop-list-item_temai">
                    <span class="shop-list-item_text">特卖价</span>
                  </div>
                  <div class="shop-list-item_temai2">
                    <span class="shop-list-item_text2"></span>
                   给老子跳给老子跳
                   给老子跳给老子跳
                  </div>
                </div>
              </div>
              <!-- 介绍商品样式 -->
              <div class="shop-list-item-content">
                {{ item.goods_name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Detail",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getGoodsList: "getGoodsList",
    }),
    shoplist(item) {
      this.$router.push({
        path: "/shopping",
        query: {
          item: item,
        },
      });
    },
    toMore() {
      this.$router.push("/more");
    },
  },
  computed: {
    ...mapState({
      goodsList: (state) => state.home.goodsList,
    }),
  },
  mounted() {
    this.getGoodsList();
    console.log(this.goodsList);
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.body-nav {
  width: 100%;
  height: 100%;

  .nav {
    /* // width: 100%;
        // height: 100px; */
    .nav-top {
      width: 1170px;
      height: 100px;
      line-height: 100px;
      margin: 0 auto;
      /* // logo区 */
      .LOGO {
        float: left;
        margin-left: -17px;

        img {
          width: 160px;
          height: 56px;
          margin-top: 20px;
        }
      }
      /* //logo结束
            //logo旁边三个沙雕 */
      .nav-list {
        width: 304px;
        height: 100px;
        line-height: 100px;
        float: left;
        margin-right: 90px;

        img {
          width: 50px;
          height: 50px;
          margin-top: 20px;
          margin-left: 23px;
        }

        .nav-list-one {
          float: left;
          display: inline-block;
          width: 101px;
          height: 100px;
        }

        .nav-list-two {
          float: left;
          display: inline-block;
          width: 101px;
          height: 100px;
        }

        .nav-list-three {
          float: left;
          display: inline-block;
          width: 101px;
          height: 100px;
        }
      }

      //旁边沙雕结束
      //搜索框
      .search {
        float: left;

        .search-box {
          width: 360px;
          height: 33px;
          border: 2px solid #fa2a83;
          padding: 1px 15px;
          margin-left: 55px;
          position: relative;
        }

        //搜索按钮
        .search-botton {
          width: 53px;
          height: 39px;
          border: 2px solid #fa2a83;
          border-left: none;
          position: absolute;
          box-sizing: border-box;
          top: 31px;
          background: #fa2a83;

          i {
            width: 20px;
            height: 20px;
            margin-top: 6px;
            color: #fff;
          }
        }
      }

      //搜索框结束
      //购物袋
      .shopping-bag {
        display: inline;
        width: 94px;
        height: 31px;
        border: 1px solid #a4a4a573;
        background: #f6f7f9;
        float: right;
        margin-top: 35px;
        position: relative;
        z-index: 1;

        &:hover {
          height: 45px;
          border-bottom: none;
          background: #fff;

          .shopping-bag-hidden {
            display: block;
            background: #fff;
          }

          .yin {
            position: relative;
            top: -101px;
            left: 257px;
            width: 94px;
            height: 5px;
            background: #fff;
          }
        }

        span {
          margin-left: 5px;
          text-align: center;

          &:nth-child(1) {
            font-size: 18px;
            position: absolute;
            top: -34px;
          }

          &:nth-child(2) {
            font-size: 10px;
            position: absolute;
            top: -35px;
            left: 17px;
          }

          &:nth-child(3) {
            background: #fa2a83;
            width: 24px;
            height: 16px;
            line-height: 16px;
            position: absolute;
            top: 8px;
            left: 66px;
            border-radius: 8px;
            color: #fff;
          }
        }

        //隐藏框
        .shopping-bag-hidden {
          display: none;
          width: 351px;
          height: 87px;
          border: 1px solid #a4a4a573;
          //   background: seagreen;
          position: absolute;
          top: 44px;
          left: -258px;
          text-align: center;

          a {
            color: #fa2a83;
          }
        }
      }
    }
  }

  //商品分类那行
  .main-nav {
    width: 100%;
    height: 43px;
    line-height: 43px;
    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.1);

    .head-inner {
      width: 1170px;
      height: 43px;
      margin: 0 auto;

      //商品分类
      .shop-category {
        width: 156px;
        height: 43px;
        background: #fa2a83;
        font-size: 16px;
        text-align: center;
        float: left;
        margin-left: -144px;
        &:hover {
          .shop-category-he {
            display: block;
            z-index: 10000;
          }
        }

        a {
          color: #fff;
          display: inline-block;
          width: 156px;
          height: 43px;
        }

        //商品隐藏列表
        .shop-category-he {
          width: 156px;
          height: 440px;
          font-size: 12px;
          background: #fa2a83;
          position: relative;
          display: none;

          #shop-category-yin {
            //  &:hover li {
            //      background: #fff;
            //  }
            li {
              width: 100%;
              height: 40px;

              .sort {
                width: 694px;
                height: 474px;
                position: absolute;
                top: 0px;
                left: 156px;
                display: none;
              }
            }

            .menu-item-tit {
              padding-left: 35px;
              height: 41px;
              display: block;
              color: #fff;
              text-align: left;
              margin-bottom: 1px;
              cursor: pointer;
            }
          }
        }
      }

      //这个是商品分类旁边那几个标签
      .Label-container {
        vertical-align: top;
        margin-left: 32px;
        width: 812px;
        height: 43px;
        float: left;
        cursor: pointer;

        .shop-label {
          float: left;
          font-size: 16px;
          height: 43px;

          a {
            display: inline-block;
            padding: 0 12px;
            line-height: 43px;
          }
          &:nth-child(1) {
            a {
              color: #fa2a83;
            }
          }
          &:nth-child(12) {
            text-align: center;
            width: 86px;
            position: relative;
            .shop-yin {
              display: none;
              width: 85px;
              height: 259px;
              position: absolute;
              top: 43px;
              left: 0;
            }

            &:hover {
              box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.06);

              .shop-yin {
                box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
                display: inline-block;
                background: #fff;
                z-index: 10000;
              }
            }
          }
        }
      }
    }
  }

  //中心分类层
  .list-define-w {
    width: 1170px;
    margin: 0 auto;

    // 商品分多分类
    .c-filter-groups {
      width: 1170px;
      // height: 202px;
      margin-top: 20px;
      border: 1px solid #dfdfdf;
      position: relative;
      //点击显示更多的按钮

      //一个单行
      // 最多一套样式
      // .c-filter-groups-item{
      //     display: none;
      //     width: 100%;
      //     height: 50px;
      //     line-height: 50px;
      //     border-bottom: 1px dotted #dfdfdf;
      //     position: relative;
      //     &:nth-child(12){
      //         border-bottom: none;
      //         .button-visited {
      //             position: absolute;
      //             bottom: -32px;
      //             left: 502px;
      //             width: 120px;
      //             height: 30px;
      //             line-height: 30px;
      //             border: 1px solid #b6b3b3;
      //             text-align: center;
      //             border-top: 1px solid #fff;
      //             z-index: 50;
      //             cursor: pointer;
      //         }
      //     }
      //    //ul 每行的选项
      //     .c-filter-groups-content {
      //         width: 711px;
      //         height: 48px;
      //         margin-left: 111px;
      //         li {
      //           float: left;
      //           margin-right: 50px;
      //         }
      //     }
      //     //唯品服务
      //     .c-filter-groups-item-title{
      //         font-weight: 400;
      //         padding-left: 20px;
      //         float: left;

      //     }
      //     // 按钮多选
      //     .c-filter-groups-botton{
      //          position: absolute;
      //          top: 0px;
      //          right: 0px;
      //          margin-right: 10px;
      //          button{
      //              border: 1px solid #dfdfdf;
      //              border-radius:10px;
      //              width: 55px;
      //              height: 25px;
      //          }
      //     }
      // }
      //最少一套样式
      .c-filter-groups-item {
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px dotted #dfdfdf;
        position: relative;

        .button-visited {
          position: absolute;
          bottom: -185px;
          left: 502px;
          width: 120px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #b6b3b3;
          text-align: center;
          border-top: 1px solid #fff;
          z-index: 50;
          cursor: pointer;
        }

        &:nth-child(4) {
          border-bottom: none;
        }

        //ul 每行的选项
        .c-filter-groups-content {
          width: 711px;
          height: 48px;
          margin-left: 111px;

          li {
            float: left;
            margin-right: 50px;
          }
        }

        //唯品服务
        .c-filter-groups-item-title {
          font-weight: 400;
          padding-left: 20px;
          float: left;
        }

        // 按钮多选
        .c-filter-groups-botton {
          position: absolute;
          top: 0px;
          right: 0px;
          margin-right: 10px;

          button {
            border: 1px solid #dfdfdf;
            border-radius: 10px;
            width: 55px;
            height: 25px;
          }
        }
      }
    }

    //商品价格区
    .pro-list-oper {
      width: 1170px;
      height: 48px;
      border: 1px solid #dfdfdf;
      margin-top: 50px;
      position: relative;

      //商品价格区左边
      .pro-left-oper {
        cursor: pointer;
        float: left;

        .pro-left-one {
          width: 69px;
          height: 46px;
          border: 1px solid #fa2a83;
          float: left;

          p {
            text-align: center;
            line-height: 46px;
          }
        }

        //商品筛选区销量价格折扣
        .pro-left {
          width: 69px;
          height: 46px;
          float: left;
          border-right: 1px solid #dfdfdf;

          p {
            text-align: center;
            line-height: 46px;
          }
        }

        //选项价格
        .shop-pro-right {
          float: left;
          height: 47px;
          line-height: 47px;
          padding-left: 15px;
          width: 286px;
          border: 1px solid rgba(100, 100, 100, 0);

          &:hover {
            width: 286px;
            height: 47px;
            border: 1px solid #999797;

            .btn-con-div {
              display: block;
            }
          }

          input {
            width: 50px;
            height: 20px;
            padding: 0 5px;
            border: 1px solid #e5e5e5;

            &:nth-child(2) {
              margin-left: 3px;
            }
          }

          .btn-con-div {
            float: right;
            margin-right: 20px;
            display: none;

            .btn-con {
              margin-left: 20px;
              width: 36px;
              height: 20px;
              line-height: 20px;
              background: #f20280;
              color: #fff;
              cursor: pointer;
              display: inline-block;
              text-align: center;
              border-radius: 4px;
            }
          }
        }
      }

      //商品价格区右边
      .page-pro-list {
        position: absolute;
        right: 0;
        height: 47px;
        line-height: 47px;

        .page-total {
          margin-right: 22px;

          .page-num {
            color: #f10180;
            font-weight: 400;
          }
        }

        span {
          .page-num2 {
            color: #f10180;
          }
        }

        .page-pre {
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          padding: 4px 12px;
          border: 1px solid #dbdbdb;
          background: #fafafa;
          color: #d1d1d1;
          text-align: center;
          border-radius: 6px;
          margin-left: 15px;

          &:hover {
            color: #f10180;
            border: 1px solid #f10180;
            transition: all 1.5s;
            background: #f0cfe0;
          }
        }

        .page-page {
          display: inline-block;
          background: #fafafa;
          width: 60px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 3px;
          border: 1px solid #dbdbdb;
          margin-left: 12px;
          margin-right: 10px;

          &:hover {
            color: #f10180;
            border: 1px solid #f10180;
            transition: all 1.5s;
            background: #f0cfe0;
          }
        }
      }
    }
    // 商品图片区
    .shop-list-img {
      width: 1170px;
      //< !-- 这是一个容器 -->
      .shop-list-one {
        width: 216px;
        border: 1px solid #d1d1d1;
        float: left;
        margin: 10px 8px;
        //< !-- 这是一个装img的div -->
        .shop-list-div {
          width: 216px;
          height: 218px;
          // background: springgreen;

          .shop-list-tu {
            width: 100%;
            height: 100%;
          }
        }
        // <!-- 这是装价格和介绍商品 -->
        .shop-list-introduce {
          //  width: 170px;
          height: 120px;
          // background: steelblue;
          padding-left: 12px;
          padding-right: 12px;
          position: relative;
          //<!-- 介绍价格 -->
          .shop-list-item-goods {
            width: 100%;
            height: 42px;
            .shop-list-item-item {
              height: 30px;
              padding-top: 12px;
            }
            .shop-list-item_temai {
              background: #f10180;
              display: inline-block;
              border-radius: 5px;
              .shop-list-item_text {
                color: #fff;
              }
            }
          }
          .shop-list-item_temai2 {
            display: inline-block;
            color: #333;
            font-weight: 700;
            font-size: 23px;
            line-height: 18px;
          }
        }
      }
    }
  }
}
</style>