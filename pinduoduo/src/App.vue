<template>
  <div id="app">
    <Header 
    v-show="path !== '/recruitment' 
    && path !== '/recruitment/jobinformation'
    && path !== '/recruitment/intern'
    &&path !== '/recruitment/jobinformation/position'
    &&path !== '/recruitment/jobinformation/process'"
    />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  beforeCreate() { 
    Vue.prototype.$Eventbus = new Vue()
  },
  mounted() {
    this.$Eventbus.$emit('changeLogin',false)
  },
  computed: {
    path(){
      return this.$route.path;
    }
  },
};
</script>

<style>
</style>
