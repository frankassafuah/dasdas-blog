<template>
  <div>
    <div v-if="loading">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div v-else>
      <CardLarge :blog="randomBlog"></CardLarge>
      <div class="card-mini-wrapper">
        <CardMini v-for="blog in blogs" :key="blog.id" :blog="blog"></CardMini>
      </div>
      <JoinWriters></JoinWriters>
    </div>
  </div>
</template>

<script>
import CardLarge from "@/components/cardLarge.vue";
import CardMini from "@/components/cardMini.vue";
import JoinWriters from "@/components/joinWriters.vue";

export default {
  metaInfo: {
   title: 'Dasdas'
  },
  components: {
    CardLarge,
    CardMini,
    JoinWriters,
  },
  data() {
    return {};
  },

  methods: {},
  computed: {
    randomBlog() {
      const random = Math.floor(Math.random() * 10);
      return this.blogs[random];
    },
    blogs() {
      return this.$store.getters.getBlogs;
    },

    loading() {
      return this.$store.getters.getLoading;
    },
  },

  created() {
    this.$store.dispatch("getBlogs");
  },
};
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: fixed;
  text-align: center;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #000;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.card-mini-wrapper {
  margin-top: 58px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
}
</style>