<template>
  <div>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      class="swiper-container"
      :auto-update="true"
    >
      <swiper-slide>
        <div class="banner">
          <!-- <h1>拼多多商务合作</h1> -->
          <div class="line"></div>
          <div class="slogan">
            <!-- 诚信合作 <span></span> 本分做事 <span></span> 携手共赢 -->
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner2">
          <!-- <h1>拼多多商务合作</h1> -->
          <div class="line"></div>
          <div class="slogan">
            <!-- 廉洁公正 <span></span> 公开透明 <span></span> 阳光采购 -->
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- <div class="banner">
            <h1>拼多多商务合作</h1>
            <div class="line"></div>
            <div class="slogan">
              廉洁公正 <span></span> 公开透明 <span></span> 阳光采购
            </div>
          </div> -->
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Banner",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay:true,
        loop: true,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // const swiper = new Swiper('swiper-container',this.swiperOptions);
    //this.swiper.slideTo(2, 3000, false);
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.banner,
.banner2 {
  // margin-top: 111px;
  width: 100%;
  height: 514px;
  background-image: url(./images/login2.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-top: 1px solid transparent;
  h1 {
    font-size: 64px;
    line-height: 64px;
    color: white;
    font-weight: bold;
    margin-left: 418px;
    margin-top: 140px;
  }
  .line {
    height: 1px;
    margin: 24px 0;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.1) 0%,
      #fff 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    opacity: 0.6;
    width: 572px;
    margin-left: 350px;
  }
  .slogan {
    font-size: 32px;
    color: white;
    margin-left: 400px;
    span {
      display: inline-block;
      border: 4px solid white;
      border-radius: 50%;
      position: relative;
      top: -5px;
      margin: 0 15px;
    }
  }
}
.banner2 {
  background-image: url("./images/login1.png");
}
</style>