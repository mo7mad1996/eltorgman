<template>
  <div class="__layout">
    <Header_Component />
    <Social />

    <main>
        <!-- <router-view></router-view> -->
        <!-- can't set anmation well -->
        <nuxt />
    </main>

    <Alert />
  </div>
</template>

<script>
// components
import Header_Component from "~/components/layouts/default/header";
import Social from "~/components/layouts/default/social";
import Alert from "~/components/layouts/Alert";

export default {
  name: "DefaultLayout",
  components: {
    Alert,
    Header_Component,
    Social,
  },
};
</script>

<style lang="scss">
.__layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    overflow: hidden;
    flex: 1;
    position: relative;
  }
}
</style>
