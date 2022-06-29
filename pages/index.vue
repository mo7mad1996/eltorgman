<template>
  <div class="__land_page">
    <Price :prices="prices" v-if="prices.length" />

    <div class="continer">
      <!-- <Top_10 /> -->
      <main>
        <News :news="new_news" />
        <Top_10 :top_subjects="top_subjects" />

        <!-- <new_content /> -->
        <New_content :new_subjects="new_subjects" />
      </main>
    </div>
  </div>
</template>

<script>
import Top_10 from "~/components/landPage/top_10";
import New_content from "~/components/landPage/new_content";
import News from "~/components/landPage/news";
import Price from "~/components/landPage/price";

export default {
  name: "LandPage",
  head: { title: "الرئيسيه" },
  async asyncData({ $axios }) {
    const response = await Promise.all([
      $axios.$get("/subjects/top?limit=10"),
      $axios.$get("/subjects/new?limit=10"),
      $axios.$get("/news/new?limit=4"),
      $axios.$get("/prices"),
    ]);

    return {
      top_subjects: response[0],
      new_subjects: response[1],
      new_news: response[2],
      prices: response[3],
    };
  },
  components: {
    Top_10,
    New_content,
    News,
    Price,
  },
};
</script>

<style lang="scss" scoped>
.__land_page {
  background: rgba(255, 255, 255, 0.73);
  background-image: url("/images/general/bg.webp");
  background-size: 400px;
  background-blend-mode: soft-light;

  .row {
    display: flex;
    gap: 1.2em;

    @media (max-width: 820px) {
      display: block;
    }

    .right {
      flex: 1;
    }
    .left {
      width: 400px;

      @media (max-width: 1020px) {
        width: 300px;
      }
      @media (max-width: 820px) {
        width: auto;
      }
    }
  }
}
</style>
