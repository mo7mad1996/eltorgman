<template>
  <header>
    <nuxt-link to="/" class="__home_link">
      <img src="/images/general/logo.png" alt="الترجمان" class="logo" />
      <span>الترجمان</span>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: "Login_header",
};
</script>

<style lang="scss" scoped>
header {
  top: 0;
  position: absolute;
  padding: 20px;

  .__home_link {
    display: flex;
    text-decoration: none;
    align-items: center;
    gap: 10px;
    color: inherit;

    .logo {
      height: 2em;
    }

    @media (max-width: 720px) {
      display: none;
    }
  }
}
</style>
