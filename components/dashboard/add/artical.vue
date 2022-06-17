<template>
  <div class="continer">
    <article>
      <div class="row">
        <div class="input_field">
          <label for="title"> عنوان الموضوع </label>
          <input v-model="subject.title" id="title" />
          <label for="subtitle"> عنوان فرعي </label>
          <input v-model="subject.subtitle" id="subtitle" />
        </div>

        <div class="input_field">
          <label for="section"> قسم الموضوع </label>

          <select id="section" v-model="subject.section">
            <option
              v-for="section in subject_sections"
              :key="section"
              :value="section"
              v-text="section"
            ></option>
          </select>
        </div>

        <div class="input_field">
          <form @submit.prevent="addKeyWord">
            <label for="key_words">الكلمات الافتتاحيه</label>
            <input type="text" id="key_words" v-model="key_word" />
            <button type="submit">أضف</button>
          </form>
        </div>
      </div>
    </article>

    <ul class="key_words">
      <li v-for="word in subject.key_words" :key="word">{{ word }}</li>
    </ul>

    <h4>عناصر التحكم</h4>
    <Controles />

    <article>
      <div class="input_field">
        <h3 for="project">
          الموضوع
          <button @click="in_edit = !in_edit" title="تعديل"><Toggle /></button>
        </h3>
        <p
          id="project"
          ref="project"
          :contentEditable="in_edit"
          class="subject"
          :class="in_edit && 'textarea'"
          v-html="subject.artcals"
        ></p>
      </div>
    </article>

    <button class="add" @click="add">إضافة <Save /></button>
  </div>
</template>

<script>
// vuex
import { mapActions, mapGetters } from "vuex";

// components
import Controles from "../components/controlers";
import Toggle from "~/components/icons/toggle";
import Save from "~/components/icons/save";

export default {
  name: "GET_artical",
  data: () => ({
    in_edit: true,
    subject: {
      section: "ادب",
      title: "",
      subtitle: "",
      artcals: "<div>تفضل بكتابة الموضوع</div>",
      key_words: [],
    },
    key_word: "",
  }),
  computed: mapGetters(["subject_sections"]),
  components: { Controles, Toggle, Save },
  methods: {
    ...mapActions(["set_alert"]),

    add() {
      let content = this.$refs.project.innerHTML;
      let project = {
        title: this.subject.title,
        subtitle: this.subject.subtitle,
        section: this.subject.section,
        content,
        key_words: this.subject.key_words,
      };
      if (this.subject.title) {
        this.$axios.$post("/add/project", project).then((res) => {
          if (res.saved) {
            this.set_alert({ text: "تم حفظ الموضوع", type: "Success" });
            this.$refs.project.innerHTML = "<div>أضف مقالة جديده</div>";
            this.subject.title = "";
            this.subject.key_words = [];
          }
        });
      } else {
        this.set_alert({ type: "Error", text: "تاكد من كتابة عنوان المقال" });
      }
    },
    addKeyWord() {
      this.key_word.trim() && this.subject.key_words.push(this.key_word);
      this.key_word = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  gap: 5px;

  > div {
    flex: 1;
  }
}
</style>
