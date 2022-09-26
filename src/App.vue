<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  name: "App",
  metaInfo: {
   title: 'Dasdas',
   meta: [
    { charset: 'utf-8'}
   ]
  },
  components: {
    Header,
  },
};
</script>

<style>
@import url("@/assets/css/styles.css");
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 4px
}
</style>
