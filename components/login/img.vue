<template>
  <div class="img-corner">
    <img src="/images/general/logo.svg" />
  </div>
</template>

<script>
export default {
  name: "ImageSection",
};
</script>

<style lang="scss" scoped>
.img-corner {
  background: #f3f5f9;
  padding: 20px;
  box-sizing: border-box;

  img {
    pointer-events: none;
    height: 30vw;
    min-height: 360px;
    object-fit: cover;
  }

  @media (max-width: 720px) {
    text-align: center;

    img {
      height: 100px;
      min-height: 100px;
    }
  }
}
</style>
