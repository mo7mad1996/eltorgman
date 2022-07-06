<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">
      <span> الاخبار </span>

      <nuxt-link to="/dashboard/add/news" class="btn" title="إضافة خبر">
        <span>
          <fa icon="microphone" />
        </span>
      </nuxt-link>
    </h1>

    <div class="dashboard_content">
      <News_ul v-if="news.length" :content="news" @remove="remove" />
      <div v-else class="text-center">
        <No_items />
        <nuxt-link to="/dashboard/add/news">أضف خبر جديد</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
// compoenets
import News_ul from "~/components/dashboard/content/news_ul";
import No_items from "~/components/search/no_items.vue";
// vuex
import { mapActions } from "vuex";

export default {
  layout: "dashboard",
  name: "NewsPage",
  async asyncData({ $axios }) {
    const news = await $axios.$get("/news");

    return { news };
  },
  head: () => ({
    title: "الاخبار",
  }),
  methods: {
    ...mapActions(["set_alert"]),
    remove(id) {
      this.news = this.news.filter((el) => el._id !== id);
      this.set_alert({ type: "success", text: "تم حذف الخبر" });
    },
  },
  components: { News_ul, No_items },
};
</script>