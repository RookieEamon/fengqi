<template>
    
  <div>
    <div class="cartContainer">
      <!-- 固定的头部 -->
      <div class="header_fixed"></div>
      <div class="shopContainer">
        <!-- 空购物车界面 -->
        <!-- <div class="emptyShopContainer">
        <image class="emptyCart" src="./images/shop_cart.webp"></image>
        <span class="content">购物车还是空滴~~~</span>
        <button class="login">登录</button>
      </div> -->
        <!-- 购物列表界面 -->
        <div class="listContainer">
          <!-- 购物车列表 -->
          <div class="cart">
            <h4>全部商品</h4>
            <div class="cart-main">
              <div class="cart-th">
                <div class="cart-th1">全部</div>
                <div class="cart-th2">商品</div>
                <div class="cart-th3">单价（元）</div>
                <div class="cart-th4">数量</div>
                <div class="cart-th5">小计（元）</div>
                <div class="cart-th6">操作</div>
              </div>
              <div class="cart-body">
                <ul class="cart-list">
                  <li class="cart-list-con1">
                    <input type="checkbox" name="chk_list" />
                  </li>
                  <li class="cart-list-con2">
                    <img src="./images/goods1.png" />
                    <div class="item-msg">
                      米家（MIJIA） 小米小白智能摄像机增强版
                      1080p高清360度全景拍摄AI增强
                    </div>
                  </li>
                  <li class="cart-list-con3">
                    <div class="item-txt">语音升级款</div>
                  </li>
                  <li class="cart-list-con4">
                    <span class="price">399.00</span>
                  </li>
                  <li class="cart-list-con5">
                    <a href="javascript:void(0)" class="mins">-</a>
                    <input
                      autocomplete="off"
                      type="text"
                      value="1"
                      minnum="1"
                      class="itxt"
                    />
                    <a href="javascript:void(0)" class="plus">+</a>
                  </li>
                  <li class="cart-list-con6">
                    <span class="sum">399</span>
                  </li>
                  <li class="cart-list-con7">
                    <a href="#none" class="sindelet">删除</a>
                    <br />
                    <a href="#none">移到收藏</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cart-tool">
              <div class="select-all">
                <input class="chooseAll" type="checkbox" />
                <span>全选</span>
              </div>
              <div class="option">
                <a href="#none">删除选中的商品</a>
              </div>
              <div class="money-box">
                <div class="chosed">已选择 <span>0</span>件商品</div>
                <div class="sumprice">
                  <em>总价（不含运费） ：</em>
                  <i class="summoney">0</i>
                </div>
                <div class="sumbtn">
                  <a class="sum-btn" href="###" target="_blank">结算</a>
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
import {mapState} from 'vuex'
export default {
  name: "Cart",
  data() {
    return {
      shoppingCart:[]
    }
  },
  mounted() {
   this.shoppingCart= this.$route.query.shopItem.id
   console.log(this.$route.query.shopItem)
  },
  
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.cartContainer {
  width: 100%;
  position: relative;
  // 固定的头部
  .header_fixed {
    position: fixed;
    top: 0px;
    z-index: 23;
    width: 100%;
    height: 100px;
    background: gray;
  }
  // 购物车界面
  .shopContainer {
    margin-top: 100px;
    height: 999px;
    // 空购物车界面
    .emptyShopContainer {
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: skyblue;
      .emptyCart {
        width: 200px;
        height: 200px;
      }
      .content {
        display: inline-block;
        height: 40px;
        color: gray;
      }
      .login {
        margin-top: 40px;
        width: 180px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background-color: red;
      }
    }
    // 购物车列表界面
    .listContainer {
      .cart {
        width: 1200px;
        margin: 0 auto;
        h4 {
          margin: 9px 0;
          font-size: 14px;
          line-height: 21px;
        }
        .cart-main {
          .cart-th {
            background: #f5f5f5;
            border: 1px solid #ddd;
            padding: 10px;
            overflow: hidden;
            & > div {
              float: left;
            }
            .cart-th1 {
              width: 25%;
              input {
                vertical-align: middle;
              }
              span {
                vertical-align: middle;
              }
            }
            .cart-th2 {
              width: 25%;
            }
            .cart-th3,
            .cart-th4,
            .cart-th5,
            .cart-th6 {
              width: 12.5%;
            }
          }
          .cart-body {
            margin: 15px 0;
            border: 1px solid #ddd;
            .cart-list {
              padding: 10px;
              border-bottom: 1px solid #ddd;
              overflow: hidden;
              & > li {
                float: left;
              }
              .cart-list-con1 {
                width: 4.1667%;
              }
              .cart-list-con2 {
                width: 25%;
                img {
                  width: 82px;
                  height: 82px;
                  float: left;
                }
                .item-msg {
                  float: left;
                  width: 150px;
                  margin: 0 10px;
                  line-height: 18px;
                }
              }
              .cart-list-con3 {
                width: 20.8333%;
                .item-txt {
                  text-align: center;
                }
              }
              .cart-list-con4 {
                width: 12.5%;
              }
              .cart-list-con5 {
                width: 12.5%;
                .mins {
                  border: 1px solid #ddd;
                  border-right: 0;
                  float: left;
                  color: #666;
                  width: 6px;
                  text-align: center;
                  padding: 8px;
                }
                input {
                  border: 1px solid #ddd;
                  width: 40px;
                  height: 33px;
                  float: left;
                  text-align: center;
                  font-size: 14px;
                }
                .plus {
                  border: 1px solid #ddd;
                  border-left: 0;
                  float: left;
                  color: #666;
                  width: 6px;
                  text-align: center;
                  padding: 8px;
                }
              }
              .cart-list-con6 {
                width: 12.5%;
                .sum {
                  font-size: 16px;
                }
              }
              .cart-list-con7 {
                width: 12.5%;
                a {
                  color: #666;
                }
              }
            }
          }
        }
        .cart-tool {
          overflow: hidden;
          border: 1px solid #ddd;
          .select-all {
            padding: 10px;
            overflow: hidden;
            float: left;
            span {
              vertical-align: middle;
            }
            input {
              vertical-align: middle;
            }
          }
          .option {
            padding: 10px;
            overflow: hidden;
            float: left;
            a {
              float: left;
              padding: 0 10px;
              color: #666;
            }
          }
          .money-box {
            float: right;
            .chosed {
              line-height: 26px;
              float: left;
              padding: 0 10px;
            }
            .sumprice {
              width: 200px;
              line-height: 22px;
              float: left;
              padding: 0 10px;
              .summoney {
                color: #c81623;
                font-size: 16px;
              }
            }
            .sumbtn {
              float: right;
              a {
                display: block;
                position: relative;
                width: 96px;
                height: 52px;
                line-height: 52px;
                color: #fff;
                text-align: center;
                font-size: 18px;
                font-family: "Microsoft YaHei";
                background: #e1251b;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
}
</style>
