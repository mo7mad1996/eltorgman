<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">الاعدادات</h1>

    <div class="dashboard_content">
      <Settings :form="form" />
    </div>
  </section>
</template>

<script>
// components
import Settings from "~/components/dashboard/content/settings";

export default {
  layout: "dashboard",
  name: "SettingsPage",
  components: { Settings },
  head: { title: "الاعدادات" },
  async asyncData({ $axios }) {
    const form = await $axios.$get("/users/me");

    return { form };
  },
};
</script>

<style lang="scss" scoped>
.dashboard_content {
  height: 100vh;
}
</style>