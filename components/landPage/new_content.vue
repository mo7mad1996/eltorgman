<template>
  <section>
    <h1 class="title">أحدث المواضيع</h1>

    <main class="__subjects">
      <nuxt-link
        :to="`/subject/${subject._id}`"
        v-for="subject in subjects"
        :key="subject._id"
        class="_subject"
      >
        <div class="img"><img :alt="subject.title" :src="subject.img" /></div>
        <div class="titles">
          <h2>{{ subject.title }}</h2>
          <h3>{{ subject.subtitle }}</h3>
        </div>
      </nuxt-link>
    </main>
  </section>
</template>

<script>
export default {
  name: "New_content",
  props: ["new_subjects"],
  data() {
    return { subjects: [] };
  },
  mounted() {
    this.subjects = this.new_subjects.filter((subject) => {
      const text = subject.content;
      const start = text.indexOf('<img src="') + 10;
      const end = text.indexOf('"', start + 1);
      let img = text.substring(start, end);

      if (start < 10) img = "/images/general/logo.svg";
      return Object.assign(subject, { img });
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 10px;
  margin-top: 30px;

  ._subject {
    border: 1.6px solid #112026;
    border-radius: 10px;
    padding: 10px 20px;
    color: #112026;
    display: block;
    background: #eee7;
    margin-bottom: 10px;
    text-decoration: none;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media (max-width: 553px) {
      font-size: 2vw;
    }
    @media (max-width: 391px) {
      flex-direction: row;
      font-size: 10px;
    }

    .img {
      height: 160px;
      @media (max-width: 391px) {
        display: none;
      }
      @media (max-width: 553px) {
        height: 120px;
      }

      img {
        max-height: 100%;
      }
    }
  }
}
</style>