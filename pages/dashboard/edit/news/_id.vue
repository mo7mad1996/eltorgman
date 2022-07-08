<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">تعديل خبر</h1>
    <div class="dashboard_content">
      <Add_news :item="single_news" />
    </div>
  </section>
</template>

<script>
// components
import Add_news from "~/components/dashboard/add/news";

export default {
  name: "EditNewsPage",
  layout: "dashboard",
  async asyncData({ $axios, params }) {
    const single_news = await $axios.$get("/single_news/" + params.id);
    return { single_news };
  },
  components: { Add_news },
};
</script>

<style lang="scss" scoped>
</style>