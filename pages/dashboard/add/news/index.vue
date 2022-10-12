<template>
  <section class="dashboard_section" ref="continer">
    <h1 class="dashboard_title">إضافة خبر جديد</h1>

    <Add_news @go_to_top="scroll_up" />
  </section>
</template>

<script>
// components
import Add_news from "~/components/dashboard/add/news";

export default {
  name: "Add_news_page",
  components: { Add_news },
  layout: "dashboard",
  head: { title: "إضافة خبر جديد" },
  methods: {
    scroll_up() {
      this.$refs.continer.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
