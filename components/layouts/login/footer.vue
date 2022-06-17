<template>
  <footer>&copy; {{ new Date().getFullYear() }} الترجمان.</footer>
</template>

<script>
export default {
  name: "Login_footer",
};
</script>

<style lang="scss" scoped>
$gray: #c2c3c7;

footer {
  bottom: 0;
  color: $gray;
  font-size: 0.85rem;
  position: absolute;
  padding: 20px;
}
</style>
