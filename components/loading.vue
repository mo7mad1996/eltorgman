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
  height: auto;
  display: grid;
  place-items: center;
  background: transparent;

  #loader {
    display: block;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    border: 0.1em solid transparent;
    border-top-color: #d0c6e1;
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
      inset: 0.2em;
    }

    &::after {
      inset: 0.4em;
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
