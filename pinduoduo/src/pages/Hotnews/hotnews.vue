<template>
  <div>
    <h1>Hotnews...</h1>
  </div>
</template>
<script>
import { reqHotNews } from "@/api";
export default {
  name: "Hotnews",
  async mounted() {
    const result = await reqHotNews();
    console.log(result);
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
</style>