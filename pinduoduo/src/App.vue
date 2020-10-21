<template>
  <div id="app">
    <Header v-show="!$route.meta.isHeaderAndFooter" />
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHeaderAndFooter" />
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
    Vue.prototype.$Eventbus = new Vue();
  },
  mounted() {
    this.$Eventbus.$emit("changeLogin", false);
  },
};
</script>

<style>
</style>
