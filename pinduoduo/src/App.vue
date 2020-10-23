<template>
  <div id="app">
    <Header
      v-show="
        path !== '/recruitment' &&
        path !== '/recruitment/jobinformation' &&
        path !== '/recruitment/intern' &&
        path !== '/recruitment/jobinformation/position' &&
        path !== '/recruitment/jobinformation/process' &&
        path !== '/complaint/integrityreport' &&
        path !== '/complaint/merchantbackground' &&
        path !== '/complaint/reportdetail' &&
        path !== '/complaint/contraband' &&
        path !== '/complaint' &&
        path !== '/detail/0' &&
        path !== '/recruitment/jobinformation/journey'
      "/>
     
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
  computed: {
    path() {
      return this.$route.path;
    },
  },
};
</script>

<style>
</style>
