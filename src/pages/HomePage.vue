<template>
  <div>
    <CardLarge :blog="randomBlog" ></CardLarge>
    <div class="card-mini-wrapper">
      <CardMini v-for="blog in blogs" :key="blog.id" :blog="blog"></CardMini>
    </div>
    <JoinWriters></JoinWriters>
  </div>
</template>

<script>
import CardLarge from "@/components/cardLarge.vue";
import CardMini from "@/components/cardMini.vue";
import JoinWriters from "@/components/joinWriters.vue";

export default {
  components: {
    CardLarge,
    CardMini,
    JoinWriters,
  },
  data() {
    return {
      blogs: [],
    };
  },

  methods: {
    async fetchData() {
      const response = await this.axios.get("posts");
      if (response) {
        this.blogs = response.data;
      }
    },
  },
  computed: {
    randomBlog() {
      const random = Math.floor(Math.random() * 10);
      return this.blogs[random];
    },
  },

  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.card-mini-wrapper {
  margin-top: 58px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
}
</style>