<template>
  <div>
    <div class="banner">
      <el-carousel indicator-position="none" arrow="never">
        <el-carousel-item>
          <div>
            <h1>拼多多商务合作</h1>
            <div class="line"></div>
            <div class="slogan">
              诚信合作 <span></span> 本分做事 <span></span> 携手共赢
            </div>
          </div>
          <div>
            <h1>拼多多商务合作</h1>
            <div class="line"></div>
            <div class="slogan">
              诚信合作 <span></span> 本分做事 <span></span> 携手共赢
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <h1>拼多多商务合作</h1>
          <div class="line"></div>
          <div class="slogan">
            廉洁公正 <span></span> 公开透明 <span></span> 阳光采购
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.banner {
  margin-top: 111px;
  width: 100%;
  height: 514px;
  background-image: url(https://pinduoduoimg.yangkeduo.com/srm/banner1.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-top: 1px solid transparent;
  &:last-child {
    background-image: url("https://pinduoduoimg.yangkeduo.com/srm/banner2.jpg");
  }
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
</style>