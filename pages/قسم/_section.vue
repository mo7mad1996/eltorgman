<template>
  <div class="__section_page">
    <div class="continer">
      <h1>مقالات في ال{{ $route.params.section }}.</h1>

      <div class="row">
        <div class="right">
          <Search_subjects :subjects="subjects" />
        </div>
        <div class="left">ads here</div>
      </div>
    </div>
  </div>
</template>

<script>
import Search_subjects from "~/components/search/subject";

export default {
  name: "Section_page",
  async asyncData({ params, $axios }) {
    const subjects = await $axios.$post("/subjects/filter", params);
    return { subjects };
  },
  components: {
    Search_subjects,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: min(12vw, 2em);
}
.row {
  display: flex;
  gap: 20px;

  .right {
    flex: 3;
  }
  .left {
    flex: 1;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 1px;
      background: linear-gradient(transparent, #473293, transparent);
      margin-left: 5px;
      position: absolute;
      inset: 0;
      right: -5px;
    }
  }

  @media (max-width: 932px) {
    display: block;

    .left {
      margin-top: 20px;

      &::before {
        display: none;
      }
    }
  }
}
</style>
