<template>
  <Single_news_component v-if="single_news.title" :single_news="single_news" />
  <Not_found v-else :error="single_news" type="الخبر" />
</template>

<script>
// components
import Single_news_component from "~/components/news/single";
import Not_found from "~/components/layouts/404/single";

export default {
  name: "Single_news",
  async asyncData({ $axios, params }) {
    const single_news = await $axios.$get("/single_news/" + params.id);
    return { single_news };
  },
  components: {
    Single_news_component,
    Not_found,
  },
  head() {
    return {
      title: this.single_news.title || this.single_news.name,
    };
  },
};
</script>
