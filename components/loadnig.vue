<template>
  <div class="__loading">
    <div id="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.__loading {
  height: 250px;
  display: grid;
  place-items: center;
  background: #fff;
  #loader {
    display: block;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: #271347;
    animation: spin 2s linear infinite;

    &::after,
    &::before {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: inherit;
      border-top-color: inherit;
    }
    &::before {
      animation: spin 3s linear infinite;
      inset: 8px;
    }

    &::after {
      inset: 17px;
      animation: spin 1.5s linear infinite;
    }
  }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
