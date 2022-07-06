<template>
  <div>
    <div class="body">
      <div class="content">
        <h3>{{ subject.title }}</h3>
        <h4>{{ subject.subtitle }}</h4>
        <span class="gray">{{ subject.section }}</span>
      </div>

      <div class="img">
        <img :src="img_src" :alt="subject.title" />
      </div>
    </div>

    <div class="key_words">
      <nuxt-link
        v-for="(word, n) in subject.key_words"
        :key="n"
        @click.stop
        class="word"
        :to="'/search/' + word"
        :title="word"
      >
        {{ word }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subject"],
  name: "Single_item",
  computed: {
    img_src() {
      const text = this.subject.content;
      const start = text.indexOf('<img src="') + 10;
      const end = text.indexOf('"', start + 1);

      let src = text.substring(start, end);

      if (start < 10) return "/images/general/logo.svg";
      return src;
    },
  },
};
</script>

<style lang="scss" scoped>
h3,
h4 {
  margin: 0;
  line-height: 2;
}
.key_words {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  .word {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #12185e;
    color: #12185e;
    background: #f7f4f5;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
.body {
  display: flex;
  .content {
    flex: 1;
  }

  .img img {
    width: 180px;
    aspect-ratio: 16 / 9;
    object-fit: contain;
  }
}
</style>
