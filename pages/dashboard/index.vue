<template>
  <div class="__dashboard">
    <img src="/images/general/logo.svg" alt="الترجمان" />

    <h1 class="brown">الترجمان</h1>
    <span class="gray"> مقالات وأخبار حصريه، مميزه، جديده.</span>
  </div>
</template>

<script>
export default {
  name: "DashbordHomePage",
  layout: "dashboard",
};
</script>

<style lang="scss" scoped>
.__dashboard {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 10em;
    opacity: 0.6;
  }
  h1 {
    margin-bottom: 10px;
  }
}
</style>
