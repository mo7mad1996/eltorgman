<template>
  <section class="__add_new_subject dashboard_section">
    <h4 class="dashboard_title">إضافة موضوع</h4>

    <GET_artical />
  </section>
</template>

<script>
// components
import GET_artical from "~/components/dashboard/add/artical";

export default {
  name: "Add_new_artical",
  components: { GET_artical },
  layout: "dashboard",
};
</script>

<style lang="scss">
.__add_new_subject {
  margin-bottom: 20px;
}
</style>
