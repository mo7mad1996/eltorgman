<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">تعديل الموضوع</h1>
    <div class="dashboard_content"><GET_artical :article="subject" /></div>
  </section>
</template>

<script>
// components
import GET_artical from "~/components/dashboard/add/artical";

export default {
  name: "EditSubjectPage",
  async asyncData({ params, $axios }) {
    const subject = await $axios.$get("/single_subject/" + params.id);
    return { subject };
  },
  head: { title: "تعديل الموضوع" },
  layout: "dashboard",
  components: { GET_artical },
};
</script>

<style lang="scss" scoped>
</style>