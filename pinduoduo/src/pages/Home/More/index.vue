<template>
  <div>
    <div class="subject">
      <!-- 导航 -->
      <div class="navList">
        <ul class="nav">
          <router-link to='/home/more/seckill'><li>限时秒杀</li></router-link>
          <router-link to='/home/more/specialsale'><li>9.9特卖</li></router-link>
          <router-link to='/home/more/supermarket'><li>食品超市</li></router-link>
          <!-- <router-link :to="{path:'/home/more/seckill',query:{goodsData:goodsItem}}"><li>限时秒杀</li></router-link>
          <router-link :to="{path:'/home/more/specialsale',query:{goodsData:goodsItem}}"><li>9.9特卖</li></router-link>
          <router-link :to="{path:'/home/more/supermarket',query:{goodsData:goodsItem}}"><li>食品超市</li></router-link> -->
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import { mapState, mapActions } from "vuex";
export default {
  name: "More",
  data() {
    return {
      goodsItem: []
    };
  },
  mounted() {
    
    // this.goodsItem = this.$route.query.goodsData 
    // console.log('@@@@',this.$route.query.goodsData)
  //  localStorage.setItem('goodsList',JSON.stringify(this.$route.query.goodsData))
   this.goodsItem = JSON.parse(localStorage.getItem('goodsList'))
    // console.log(localStorage.getItem('goodsList'))
  // methods: {
  //   change() {
  //     const { path, query } = this.$route;
  //     this.$router.push({
  //       path: "/home/more/seckill",
  //       query: {
  //         goodsData: this.goodsItem
  //       }
  //     });
  //   }
  // }
  }
  }
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
      .router-link-active {
        li{
          background-color: #d53758;
        }
      }
    }
  }
}
</style>