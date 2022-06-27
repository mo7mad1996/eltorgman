<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">الاسعار</h1>

    <div class="dashboard_content">
      <Prices_list :forms="prices" @remove="remove" />
    </div>
  </section>
</template>

<script>
// components
import Prices_list from "~/components/dashboard/content/prices_list";

export default {
  layout: "dashboard",
  async asyncData({ $axios }) {
    const prices = await $axios.$get("/prices");

    return { prices };
  },
  head() {
    return {
      title: "الاسعار",
    };
  },
  components: { Prices_list },
  methods: {
    remove(id) {
      this.prices = this.prices.filter((form) => form._id != id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>