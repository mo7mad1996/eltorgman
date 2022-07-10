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
            <label for="key_words">الكلمات بحثيه</label>
            <input type="text" id="key_words" v-model="key_word" />
            <button type="submit">أضف</button>
          </form>
        </div>
      </div>
    </article>

    <ul class="key_words">
      <li v-for="(word, n) in subject.key_words" :key="n" class="word">
        <div @click="remove(n)" class="delete">
          <Fa icon="xmark" />
        </div>
        {{ word }}
      </li>
    </ul>

    <h4>عناصر التحكم</h4>
    <Controles />

    <article>
      <div class="input_field">
        <h3 for="article">
          الموضوع
          <button @click="in_edit = !in_edit" title="تعديل"><Toggle /></button>
        </h3>
        <p
          id="article"
          ref="article"
          :contentEditable="in_edit"
          class="subject"
          :class="in_edit && 'textarea'"
          v-html="subject.artcals"
        ></p>
      </div>
    </article>

    <button class="add" @click="add">
      <Loading v-if="loading" />
      <span v-else> {{ article ? "تعديل" : "إضافه" }} <Save /> </span>
    </button>
  </div>
</template>

<script>
// vuex
import { mapActions, mapGetters } from "vuex";

// components
import Controles from "../components/controlers";
import Toggle from "~/components/icons/toggle";
import Save from "~/components/icons/save";
import Loading from "~/components/loading";

export default {
  name: "GET_artical",
  props: {
    article: {
      require: false,
    },
  },
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
    loading: false,
  }),
  computed: mapGetters(["subject_sections"]),
  components: { Controles, Toggle, Save, Loading },
  mounted() {
    if (this.article) {
      this.subject = this.article;
      this.subject.artcals = this.article.content;
    }
  },
  methods: {
    ...mapActions(["set_alert"]),
    remove(n) {
      this.subject.key_words = this.subject.key_words.filter((el, ndx) => {
        if (ndx != n) return el;
      });
    },
    add() {
      let content = this.$refs.article.innerHTML;
      let article = {
        title: this.subject.title,
        subtitle: this.subject.subtitle,
        section: this.subject.section,
        content,
        key_words: this.subject.key_words,
      };
      if (this.subject.title) {
        this.loading = false;
        if (this.article) {
          this.$axios
            .$put("/update/subject/" + this.article._id, article)
            .then(() => {
              this.set_alert({ type: "success", text: "تم تعديل الموضوع" });
              // go back
              this.$router.go(-1);
            })
            .catch(() => {
              this.loading = false;
              this.set_alert({ type: "error", text: "تعذر تعديل الموضوع" });
            });
        } else {
          this.$axios
            .$post("/add/article", article)
            .then(() => {
              this.set_alert({ text: "تم حفظ الموضوع", type: "Success" });
              this.$refs.article.innerHTML = "<div>أضف مقالة جديده</div>";
              this.subject.title = "";
              this.subject.key_words = [];
              this.loading = false;
            })
            .catch((err) => {
              this.set_alert({ text: "خطأ في الاضافه", type: "error" });
              console.log(err);
            });
        }
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
.key_words {
  display: flex;
  flex-wrap: wrap;
  padding: 0.87em 0;
  gap: 0.87em;

  .word {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #12185e;
    color: #12185e;
    background: #f7f4f5;
    list-style: none;
    position: relative;

    .delete {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-50%, -50%);
      background: rgba(255, 0, 0, 0.2);
      display: none;
      border-radius: 50%;
      width: 1.4em;
      height: 1.4em;
      place-items: center;
      color: red;
      cursor: pointer;
    }
    &:hover {
      .delete {
        display: grid;
      }
    }
  }
}
.row {
  gap: 5px;

  > div {
    flex: 1;
  }
}
</style>
