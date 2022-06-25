<template>
  <div>
    <img src="../../static/images/general/logo.png" alt="الترجمان" />
  </div>
</template>

<script>
export default {
  name: "DashbordHomePage",
  middleware: "auth",
  layout: "dashboard",
};
</script>

<style lang="scss" scoped>
</style>
