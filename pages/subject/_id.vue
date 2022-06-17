<template>
  <Single_news_component :subject="subject" v-if="subject.title" />
  <Not_found v-else :error="subject" type="الموضوع" />
</template>

<script>
// components
import Single_news_component from "~/components/subject/single";
import Not_found from "~/components/layouts/404/single";

export default {
  name: "Single_subject",
  async asyncData({ $axios, params }) {
    const subject = await $axios.$get("/single_subject/" + params.id);
    return { subject };
  },
  head() {
    return {
      title: this.subject.title,
    };
  },
  components: { Not_found, Single_news_component },
};
</script>
