<template>
  <div class="card-container">
    <div class="cardMedia-box">
      <img :src="blog.jetpack_featured_media_url" />
    </div>
    <div class="description-container">
      <div class="description-details">
        <div class="front-end">
          <h1>Front-end</h1>
          <h1>·</h1>
          <h1 class="small">1 Hour Ago</h1>
        </div>
        <h4 v-html="blogTitle"></h4>
        <div class="description-text">
          <span v-html="blogContent" />
        </div>
      </div>
      <div class="read-full">
        <h1 class="small">3 Min Read</h1>
        <router-link :to="`/blogs/${blog.id}/details`">
          <h1 style="color: #1473e6">Read Full</h1>
          <img src="../assets/icon/Button/icon/arrow.svg" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    blogTitle() {
      return this.blog.title?.rendered || "";
    },
    blogContent() {
      return this.blog.content?.rendered || "";
    },
  },
};
</script>

<style scoped>
.card-container {
  padding: 8px;
  margin-top: 48px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  display: flex;
  gap: 16px;
}

.cardMedia-box {
  width: 500px;
  height: 280px;
}

.cardMedia-box img {
  width: 100%;
  height: 100%;
  /* when img width || heigth is changed */
  object-fit: cover;
  object-position: center;
}

.description-details {
  display: flex;
  flex-direction: column;
  column-gap: 8px;
}

.description-details .front-end {
  display: flex;
  gap: 4px;
}

/* truncate - elipsis */
h4 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: hidden;
}

/* truncate - elipsis */
.description-text span {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: hidden;
}

.description-container {
  max-width: calc(100% - 500px);
  position: relative;
  height: 280px;
}

.description-container .read-full {
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  bottom: 0px;
  left: 0;
  right: 0;
}

.description-container .read-full a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
</style>