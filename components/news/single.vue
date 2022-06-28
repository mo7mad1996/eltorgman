<template>
  <div class="__single_news subject">
    <div class="continer">
      <h1>{{ single_news.title }}</h1>
      <h3>{{ single_news.subtitle }}</h3>

      <img
        v-if="single_news.img"
        :src="single_news.img"
        :alt="single_news.title"
      />
      <div class="content subject" v-html="single_news.content"></div>
      <section>{{ single_news.section }}</section>
      <small class="gray">
        {{ new Date(single_news.date).toLocaleString("ar-EG") }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["single_news"],
  name: "Single_news_component",
};
</script>

<style lang="scss" scoped>
img {
  max-height: 400px;
}
.content {
  margin: 2em 0;
  line-height: 1.2;
}
</style>
