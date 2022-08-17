<template>
  <section v-if="subjects.length" class="continer">
    <main class="__subjects">
      <nuxt-link
        :to="`/subject/${subject._id}`"
        v-for="subject in subjects"
        :key="subject._id"
        :title="subject.title"
        class="_subject"
        :style="`--color: hsla( ${Math.floor(Math.random() * 360)},30% ,50% ,0.2)`"
      >
        <div class="img">
          <img :src="subject.img" />
        </div>

        <div class="details">
          <h2>{{ subject.title }}</h2>
          <h4>{{ subject.subtitle }}</h4>
        </div>
      </nuxt-link>
    </main>
  </section>

  <No_items v-else type="مواضيع" />
</template>

<script>
import No_items from "~/components/search/no_items";

export default {
  name: "Top_10",
  props: ["top_subjects"],
  data() {
    return { subjects: [] };
  },
  mounted() {
    this.subjects = this.top_subjects.filter((subject) => {
      const text = subject.content;
      const start = text.indexOf('<img src="') + 10;
      const end = text.indexOf('"', start + 1);
      let img = text.substring(start, end);

      if (start < 10) img = "/images/general/logo.svg";
      return Object.assign(subject, { img });
    });
  },
  components: { No_items },
};
</script>

<style lang="scss" scoped>
.__subjects {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 350px) {
    // display: block;
    flex-direction: column;
  }

  a {
    position: relative;
    height: 320px;
    border-radius: 10px;
    overflow: hidden;
    min-height: 140px;
    min-width: 160px;
    max-width: 200px;
    flex: 1;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    @media (max-width: 633px) {
      font-size: max(1vw, 12px);
      width: 100%;
      max-width: none;
      height: 50vw;
    }

    .img {
      background: #eee;
      height: 100%;
      position: relative;

      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
        object-fit: cover;
      }

      &::after {
        content: "";
        background: var(--color);
        position: absolute;
        inset: 0;
        z-index: 2;
      }
    }

    .details {
      position: absolute;
      z-index: 2;
      color: white;
      bottom: 0;
      line-height: 1;
      padding: 0 0.3em;

      h2 {
        margin: 0;
        font-size: 1.3em;
      }
      h4 {
        margin-top: 10px;
        font-size: 1em;
      }
    }
  }
}
</style>
