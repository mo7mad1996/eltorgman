<template>
  <section class="__add_new_subject dashboard_section" ref="continer">
    <h4 class="dashboard_title">إضافة موضوع</h4>

    <GET_artical @go_to_top="scroll_up" />
  </section>
</template>

<script>
// components
import GET_artical from "~/components/dashboard/add/artical";

export default {
  name: "Add_new_artical",
  components: { GET_artical },
  layout: "dashboard",
  head: { title: "إضافة موضوع جديد" },
  methods: {
    scroll_up() {
      this.$refs.continer.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.__add_new_subject {
  margin-bottom: 20px;
}
</style>
