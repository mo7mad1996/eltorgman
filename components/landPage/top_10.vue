<template>
  <section>
    <h2>افضل {{ subjects.length }} مواضيع::</h2>
    <main class="__subjects">
      <nuxt-link
        :to="`/subject/${subject._id}`"
        v-for="(subject, n) in subjects"
        :key="subject._id"
        :title="subject.title"
        class="_subject"
        :style="'grid-area: A' + n"
      >
        <div class="img">
          <img :src="subject.img" />
        </div>

        <div class="details">
          <h2>{{ subject.title }}</h2>
        </div>
      </nuxt-link>
    </main>
  </section>
</template>

<script>
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
      console.log(start);

      if (start < 10) img = "/images/general/logo.jpg";
      return Object.assign(subject, { img });
    });
  },
};
</script>

<style lang="scss" scoped>
.__subjects {
  display: grid;
  grid-template-areas:
    "A0 A0 A0 A1"
    "A0 A0 A0 A2"
    "A0 A0 A0 A3"
    "A5 A5 A4 A4"
    "A5 A5 A4 A4"
    "A6 A7 A8 A9";
  grid-template-rows: repeat(7, 100px);
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

  a {
    position: relative;
    color: white;

    .details {
      inset: 0;
      position: absolute;
      display: grid;
      place-items: center;
      background: linear-gradient(
        rgba(101, 19, 142, 0.8),
        rgba(18, 18, 118, 0.8)
      );
      z-index: 2;
      transition: 0.3s;
      opacity: 0;

      h2 {
        font-size: 16px;
        margin: 0;
      }
    }

    .img {
      inset: 0;
      position: absolute;
      z-index: 1;

      img {
        width: 100%;
        height: 100%;
        transition: 0.3s;
        object-fit: cover;
      }
    }

    &:hover {
      .details {
        opacity: 1;
      }
      img {
        object-fit: contain;
        transform: scale(0.7);
      }
    }

    &:nth-of-type(1),
    &:nth-of-type(5),
    &:nth-of-type(6) {
      overflow: hidden;

      .details {
        display: block;
        padding: 1em 1.3em;
        top: auto;
        bottom: -100%;
      }
      &:hover {
        .details {
          bottom: 0;
        }
        img {
          object-fit: cover;
          transform: scale(1);
        }
      }
    }
  }
}
</style>
