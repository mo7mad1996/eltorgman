<template>
  <div class="__land_page">
    <!-- Intro -->
    <Intro />

    <div class="continer">
      <!-- <Top_10 /> -->
      <main class="row">
        <div class="right">
          <Top_10 :top_subjects="top_subjects" />

          <!-- <new_content /> -->
          <New_content :new_subjects="new_subjects" />
        </div>
        <div class="left">
          <h3>الأخبار العاجله::</h3>
          <News :news="new_news" />

          <h3>الاسعار هنا</h3>
          <Price />
        </div>
      </main>

      <div class="__fast_links">
        <nuxt-link to="/login">Login</nuxt-link>
        <nuxt-link to="/dashboard">dashboard</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Intro from "~/components/landPage/Intro";
import Top_10 from "~/components/landPage/top_10";
import New_content from "~/components/landPage/new_content";
import News from "~/components/landPage/news";
import Price from "~/components/landPage/price";

export default {
  name: "LandPage",
  head: { title: "الرئيسيه" },
  async asyncData({ $axios }) {
    const top_subjects = await $axios.$get("/subjects/top?limit=10");
    const new_subjects = await $axios.$get("/subjects/new?limit=10");
    const new_news = await $axios.$get("/news/new?limit=4");

    return { top_subjects, new_subjects, new_news };
  },
  components: {
    Top_10,
    New_content,
    Intro,
    News,
    Price,
  },
};
</script>

<style lang="scss" scoped>
.__land_page {
  background: #eee;

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
