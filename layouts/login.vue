<template>
  <div class="__login_layout">
    <Login_header />

    <main class="__main">
      <nuxt />
    </main>

    <Login_footer />

    <Alert />
  </div>
</template>

<script>
import Alert from "~/components/layouts/Alert";
import Login_header from "~/components/layouts/login/header.vue";
import Login_footer from "~/components/layouts/login/footer.vue";

export default {
  components: { Login_header, Login_footer, Alert },
  name: "Login_layout",
};
</script>

<style lang="scss" scoped>
$black: #121a29;

.__login_layout {
  color: $black;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .__main {
    flex: 1;
  }
}
</style>
