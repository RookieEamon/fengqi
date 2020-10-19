<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer />
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
};
</script>

<style>
</style>
