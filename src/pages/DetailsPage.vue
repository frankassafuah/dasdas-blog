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
      <div class="detail-wrapper">
        <div class="front-end">
          <h1 class="">By Ryan Jackson</h1>
          <h1 class="small">{{ timeAgo }}</h1>
        </div>
        <h2 v-html="blogTitle" />
        <span class="content" v-html="blogContent" />
      </div>
      <div>
        <h3>More Articles</h3>
        <div class="card-mini-wrapper">
          <CardMini
            v-for="blog in blogs"
            :key="blog.id"
            :blog="blog"
          ></CardMini>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardMini from "@/components/cardMini.vue";

export default {
  metaInfo: {
   title: 'Details'
  },
  components: {
    CardMini,
  },
  data() {
    return {
      blogDetail: {},
      loading: false,
    };
  },
  methods: {
    async fetchDetails() {
      this.loading = true;
      const response = await this.axios.get(`posts/${this.id}`);
      if (response) {
        this.loading = false;
        this.blogDetail = response.data;
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
    },
    blogs() {
      return this.$store.getters.getBlogs.slice(0, 3);
    },
    timeAgo() {
      return this.moment(this.blogDetail.date, "YYYYMMDD").fromNow();
    },
  },

  created() {
    this.fetchDetails();
    if (this.blogs.length <= 0) {
      this.$store.dispatch("getBlogs");
    }
  },

  watch: {
    id() {
      this.fetchDetails();
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

::v-deep .content .wp-caption {
  width: 100% !important;
}

::v-deep .content .wp-caption img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: center;
}

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
</style>