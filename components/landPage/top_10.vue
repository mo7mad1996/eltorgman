<template>
  <section>
    <h2>افضل {{ subjects.length }} مواضيع::</h2>
    <main class="__subjects">
      <nuxt-link
        :to="`/subject/${subject._id}`"
        v-for="subject in subjects"
        :key="subject._id"
        :title="subject.title"
      >
        <div class="_subject">
          <div class="detailes">
            <h3>{{ subject.title }}</h3>
            <div class="brown">{{ subject.subtitle }}</div>
            <p>{{ subject.content }}...</p>
          </div>
          <div class="views">{{ subject.vist }} <Eye /></div>
        </div>
      </nuxt-link>
    </main>
  </section>
</template>

<script>
// conponents
import Eye from "~/components/icons/eye";

export default {
  name: "Top_10",
  props: ["top_subjects"],
  data() {
    return { subjects: [] };
  },
  components: { Eye },
  mounted() {
    this.subjects = this.top_subjects.filter((subject) => {
      const div = document.createElement("div");
      div.innerHTML = subject.content
        .replaceAll("<div>", "&nbsp;")
        .replaceAll("<br>", "&nbsp;");

      let content = div.innerText;
      return Object.assign(subject, { content: content.slice(0, 100) });
    });
  },
};
</script>

<style lang="scss" scoped>
.__subjects {
  a {
    text-decoration: none;
    color: #333;

    ._subject {
      margin: 2em 0;
      flex: 1;
      background: #eee;
      display: flex;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

      .views {
        font-size: 0.8em;
        transition: 0.3s;
        opacity: 0;

        @media (max-width: 720px) {
          display: none;
        }
      }

      .detailes {
        flex: 1;

        h3 {
          margin: 0;
          &::before {
            content: "#";
            margin: 0 5px;
            color: #28bda5;
            opacity: 0;
            transition: 0.2s;
          }
        }
        .brown {
          margin: 0 0 10px;
          font-size: 0.7em;
        }

        p {
          color: #4b4a4a;
          margin: 0;
          font-size: 0.89em;
        }
      }
    }

    .views {
      display: flex;
      gap: 4px;
      align-items: center;
      height: 2em;
    }
    &:hover {
      .views,
      .views,
      .detailes h3::before {
        opacity: 1;
      }
    }
  }
}
</style>
