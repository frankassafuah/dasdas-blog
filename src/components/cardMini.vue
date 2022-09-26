<template>
  <div class="card-mini">
    <div class="card-image-wrapper">
      <img
        :src="blog.jetpack_featured_media_url"
        :alt="blog.title.rendered"
        class="card-image"
      />
    </div>
    <div class="description-container">
      <div class="description-details">
        <div class="front-end">
          <h1>Front-end</h1>
          <h1>·</h1>
          <h1 class="small">{{timeAgo}}</h1>
        </div>
        <h4 v-html="blog.title.rendered" />
        <div class="description-text">
          <span v-html="blog.excerpt.rendered" />
        </div>
      </div>
      <div class="read-full">
        <h1 class="small">12 Min Read</h1>
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
    timeAgo() {
      return this.moment(this.blog.date, "YYYYMMDD").fromNow();
    },
  },
};
</script>

<style scoped>
.card-mini {
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 402px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  gap: 16px;
  align-items: center;
}
.card-image-wrapper {
  width: 330px;
  height: 200px;
  background: #e5f4ff;
  border-radius: 5px;
}
.card-mini .card-image {
  width: 100%;
  height: 100%;
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

.description-container {
  height: 202px;
  position: relative;
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: hidden;
}
</style>