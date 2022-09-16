<template>
  <div class="detail-container">
    <div class="detail-wrapper">
      <div class="front-end">
        <h1 class="">By Ryan Jackson</h1>
        <h1 class="small">2 Month Ago</h1>
      </div>
      <h2 v-html="blogTitle" />
      <p v-html="blogContent" />
    </div>
    <div>
      <h3>More Articles</h3>
      <div class="card-mini-wrapper">
        <CardMini v-for="blog in blogs" :key="blog.id" :blog="blog"></CardMini>
      </div>
    </div>
  </div>
</template>
<script>
import CardMini from "@/components/cardMini.vue";

export default {
  components: {
    CardMini,
  },
  data() {
    return {
      blogDetail: {},
      blogs: [],
    };
  },
  methods: {
    async fetchDetails() {
      const response = await this.axios.get(`posts/${this.id}`);
      this.blogDetail = response.data;
    },
    async fetchData() {
      const response = await this.axios.get("posts");
      if (response) {
        this.blogs = response.data.slice(0, 3);
      }
    },
  },

  computed: {
    blogTitle() {
      return this.blogDetail.title?.rendered || "";
    },
    blogContent() {
      return this.blogDetail.content && this.blogDetail.content.rendered;
    },
    id() {
      return this.$route.params.id;
    }
  },

  created() {
    this.fetchDetails();
    this.fetchData();
  },

  watch: {
    id() {
      this.fetchDetails()
    },
  },
};
</script>

<style scoped>
.detail-wrapper {
  max-width: 705px;
  margin: 91px auto 0;
}
.front-end {
  display: flex;
  column-gap: 4px;
  margin-bottom: 10px;
}

h2 {
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 23px;
}

h3 {
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: #2c2c2c;
}

.detail-wrapper p {
  margin: 0;
}

.detail-wrapper {
  padding-bottom: 80px;
}
.card-mini-wrapper {
  margin-top: 37px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
  margin-bottom: 227px;
}
</style>