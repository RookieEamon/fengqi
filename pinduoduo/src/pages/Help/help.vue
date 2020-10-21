<template>
  <div>
    <!-- 内容区 -->
    <div class="content">
      <!-- 内容区头部图片 -->
      <div>
        <img src="./images/pdd_help_banner_v2.jpg" alt="内容区头部图片" />
      </div>
      <div class="content_title_nav">
        <!-- 左侧标题导航 -->
        <div class="content_help_nav">
          <div class="content_red_title">常见问题</div>
          <div class="title_group">
            <div class="title">新手指南</div>
            <div class="sub_title">> 购物流程</div>
          </div>
          <div class="title_group">
            <div class="title">交易问题</div>
            <div class="sub_title">> 我拍下来后的商品什么时候发货？</div>
            <div class="sub_title">> 已成团未发货如何退款？</div>
            <div class="sub_title">> 没有收到货/商家发错地址了怎么办？</div>
            <div class="sub_title">> 收到商品有问题怎么办？</div>
            <div class="sub_title">> 如何联系商家客服？</div>
            <div class="sub_title">> 为什么我的优惠券不能使用？</div>
            <div class="sub_title">> “全网总售”和“已拼”有什么区别？</div>
            <div class="sub_title">> 收到的商品能退换货么？</div>
          </div>
          <div class="title_group">
            <div class="title">退款&售后</div>
            <div class="sub_title">> 退换货流程</div>
            <div class="sub_title">> 退换货规则</div>
            <div class="sub_title">> 7天无理由退换货</div>
          </div>
          <div class="title_group">
            <div class="title">账户相关</div>
            <div class="sub_title">> 账户安全与账户信息</div>
          </div>
          <div class="title_group">
            <div class="title">联系我们</div>
            <div class="sub_title">> 如何联系拼多多客服？</div>
          </div>
        </div>
        <!-- 右侧文本内容区 -->
        <div class="content_help_text">
          <div class="content_title">
            新手指南
            <span class="title">> 购物流程</span>
          </div>
          <div class="content_main">
            <p>
              <img src="./images/NewerGuide.png" alt="购物流程图" />
            </p>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Help",
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
// 内容区
.content {
  width: 1200px;
  margin: 0 auto;
  margin-top: 118px;
  .content_title_nav {
    padding-top: 38px;
    // 左侧标题导航
    .content_help_nav {
      float: left;
      width: 394px;
      padding-top: 38px;
      margin-bottom: 85px;
      background-color: #fff;
      .content_red_title {
        position: relative;
        background-color: #f04055;
        display: table;
        width: fit-content;
        height: 56px;
        line-height: 56px;
        padding: 0 25px;
        margin-left: -18px;
        text-align: center;
        color: #fff;
        font-size: 30px;
        text-indent: 18px;
        &:after {
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
      .title_group {
        margin: 17px 19px;
        padding-left: 50px;
        padding-bottom: 18px;
        border-bottom: 1px solid #eaeaea;
        .title {
          font-size: 20px;
          font-weight: 700;
          line-height: 2.8;
          color: #363636;
        }
        .sub_title {
          font-size: 16px;
          color: #363636;
          font-weight: 400;
          line-height: 3;
          text-indent: 20px;
          cursor: pointer;
        }
        .sub_title:hover {
          color: #f04055;
        }
      }
    }
    // 右侧文本内容区
    .content_help_text {
      float: right;
      width: 790px;
      background-color: #fff;
      .content_title {
        padding-left: 42px;
        font-size: 18px;
        line-height: 5.8;
        color: #6c6c6c;
        border-bottom: 1px solid #eaeaea;
        .title {
          font-size: 18px;
          font-weight: 700;
          color: #363636;
        }
      }
      .content_main {
        padding: 42px;
        p {
          width: 706px;
          height: 98px;
          font-size: 16px;
          line-height: 46px;
          color: #363636;
          img {
            display: block;
            border: none;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  .clear {
    clear: both;
  }
}
</style>