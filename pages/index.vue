<template>
  <div class="__land_page" v-once>
    <Price :prices="prices" v-if="prices.length" />

    <div class="continer">
      <!-- <Top_10 /> -->
      <main>
        <News :news="new_news" />
        <Top_News :top_news="top_news" />

        <Top_10 :top_subjects="top_subjects" />
        <!-- <new_content /> -->
        <New_content :new_subjects="new_subjects" />
      </main>
    </div>
  </div>
</template>

<script>
// components
import Price from "~/components/landPage/price";
import News from "~/components/landPage/news";
import Top_News from "~/components/landPage/top_News";
import Top_10 from "~/components/landPage/top_10";
import New_content from "~/components/landPage/new_content";

export default {
  name: "LandPage",
  head: { title: "الرئيسيه" },
  async asyncData({ $axios }) {
    const response = await Promise.all([
      $axios.$get("/prices"),
      $axios.$get("/news/new?limit=9"),
      $axios.$get("/news/top"),
      $axios.$get("/subjects/new?limit=10"),
      $axios.$get("/subjects/top"),
    ]);

    return {
      prices: response[0],
      new_news: response[1],
      top_news: response[2],
      new_subjects: response[3],
      top_subjects: response[4],
    };
  },
  components: {
    Price,
    News,
    Top_News,
    Top_10,
    New_content,
  },
};
</script>

<style lang="scss" scoped>
.__land_page {
  background: rgba(255, 255, 255, 0.73);
  background-image: url("/images/general/bg.png");
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
