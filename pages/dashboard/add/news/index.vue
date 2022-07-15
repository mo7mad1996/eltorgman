<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">إضافة خبر جديد</h1>

    <Add_news />
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
};
</script>

<style></style>
