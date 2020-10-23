<template>
  <div class="homeContainer">
      <Myheader/>
      <router-view></router-view>
 
  </div>
</template>
<script>
import Myheader from './components/Myheader'
export default {
  name: "Recruitment",
  data() {
    return {
    }
  },
  mounted() {
   
  },

  methods:{
    


  },


  components:{
      Myheader,
  }
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.homeContainer {
  width: 100%;

  

  //信息容器 展示信息
  .mainContainer {
    width: 100%;
    background-color: rgb(250, 250, 250);
    overflow: hidden;
    // margin-bottom:30px;
  }
}
</style>