<template>
  <div class="continer">
    <h2>نتائج البحث عن {{ $route.params.query }}.</h2>

    <div v-if="subjects">
      <div v-if="subjects.length">
        <Search_subjects :subjects="subjects" />
      </div>
      <No_items v-else />
    </div>
    <Loadnig v-else />
  </div>
</template>

<script>
// components
import Loadnig from "~/components/loadnig";
import Search_subjects from "~/components/search/subject";
import No_items from "~/components/search/no_items";

export default {
  name: "Search_page",
  async asyncData({ params, $axios }) {
    const subjects = await $axios.$post("/subjects/search", {
      search: params.query,
    });
    return { subjects };
  },
  components: { Loadnig, Search_subjects, No_items },
  head() {
    return {
      title: "بحث " + this.$route.params.query,
    };
  },
};
</script>

<style lang="scss" scoped></style>
