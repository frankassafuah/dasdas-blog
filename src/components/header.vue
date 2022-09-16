<template>
  <div class="header-container">
    <router-link to="/">
      <img class="logo" src="../assets/Dasdas Logo 1.png" />
    </router-link>
    <div class="icons">
      <img class="twitter" src="../assets/icon/twitter.svg" />
      <span>.</span>
      <img class="dribble" src="../assets/icon/dribbble.svg" />
      <span>.</span>
      <img class="figma" src="../assets/icon/figma.svg" />
      <span>.</span>
      <img class="github" src="../assets/icon/github.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.icons img {
  transition-duration: 0.25s;
  cursor: pointer;
}

.icons img:hover {
  animation: shake 0.25s;
}

@keyframes shake {
  10% {
    transform: rotate (15deg);
  }
  20% {
    transform: rotate(-15deg);
  }
  30% {
    transform: rotate (15deg);
  }
  40% {
    transform: rotate(-15deg);
  }
}

img.logo {
  height: 80px;
  width: 80px;
}

.header-container .icons {
  display: flex;
  flex-direction: row;
  column-gap: 14px;
  align-items: center;
}

.icons span {
  margin-top: -10px;
}
</style>