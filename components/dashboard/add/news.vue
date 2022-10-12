<template>
  <div class="__add_news continer">
    <form @submit.prevent="add" ref="form">
      <div class="input_field">
        <label for="title">عنوان الخبر</label>
        <input id="title" v-model="title" />
      </div>
      <div class="input_field">
        <label for="sub_title">فقرة افتتاحيه</label>
        <textarea id="sub_title" v-model="subtitle" />
      </div>
      <div class="input_field_file">
        <label for="file"> أضف صورة الخبر</label>
        <label for="file" class="for_input">
          <button v-if="preview_src" @click.prevent="delete_img">
            <Delete />
          </button>
          <img v-if="preview_src" ref="preview_src" :src="preview_src" />
          <div v-else class="text-center">
            <Camera />
          </div>
        </label>
        <input id="file" type="file" ref="file" @change="preview_img" />
      </div>

      <h4>عناصر التحكم</h4>
      <Controlers />

      <article>
        <div class="input_field">
          <div for="news">
            الخبر

            <button @click.prevent="in_edit = !in_edit" title="تعديل">
              <Toggle />
            </button>
          </div>
          <p
            class="subject"
            id="news"
            ref="news"
            :contentEditable="in_edit"
            :class="in_edit && 'textarea'"
            v-html="news"
          ></p>
        </div>
      </article>

      <button class="add" type="submit" :disabled="loading">
        <Loading v-if="loading" />
        <span v-else> {{ item ? "تعديل" : "إضافه" }} <Save /> </span>
      </button>
    </form>
  </div>
</template>

<script>
// vuex
import { mapActions } from "vuex";
// components
import Controlers from "../components/controlers.vue";
import Toggle from "~/components/icons/toggle";
import Delete from "~/components/icons/delete";
import Save from "~/components/icons/save";
import Camera from "~/components/icons/camera";
import Loading from "~/components/loading";

export default {
  name: "Add_news_component",
  props: { item: { require: false } },
  data: () => ({
    title: "",
    subtitle: "",
    preview_src: "",
    in_edit: true,
    news: "<div> الخبر</div>",
    loading: false,
  }),
  mounted() {
    if (this.item) {
      this.title = this.item.title;
      this.subtitle = this.item.subtitle;
      this.preview_src = this.item.img;
      this.news = this.item.content;
    }
  },
  methods: {
    ...mapActions(["set_alert"]),
    preview_img() {
      let file = this.$refs.file.files[0];
      const fileReader = new FileReader();
      fileReader.addEventListener(
        "load",
        () => (this.preview_src = fileReader.result)
      );
      fileReader.readAsDataURL(file);
    },
    delete_img() {
      this.$refs.file.value = "";
      this.preview_src = "";
    },

    add() {
      {
        if (this.title) {
          this.loading = true;
          if (Array.from(this.$refs.file.files).length) {
            let formdata = new FormData();
            formdata.append(
              "file",
              this.$refs.file.files[0],
              this.$refs.file.files[0].filename
            );

            this.$axios
              .$post("/save_file/", formdata, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then(({ file }) => this.save(file))
              .catch((err) => console.log(err));
          } else {
            this.save("");
          }
        } else this.set_alert({ type: "Error", text: "تأكد من عنوان الخبر" });
      }
    },
    save(img) {
      let content = this.$refs.news.innerHTML;
      let news = {
        content,
        img,
        title: this.title,
        subtitle: this.subtitle,
      };
      if (this.item) {
        if (!img) news.img = this.item.img;
        this.$axios
          .$put("/news/update/" + this.item._id, news)
          .then((_) => {
            // go back
            this.$router.go(-1);
            this.set_alert({ type: "success", text: "تم تعديل الخبر" });
          })
          .catch(() => {
            this.loading = false;
            this.set_alert({ type: "error", text: "تعذر تعديل الخبر" });
          });
      } else {
        this.$axios
          .$post("/news/add", news)
          .then((data) => {
            this.set_alert({ type: "Success", text: "تمت الاضافة" });
            this.$refs.form.reset();
            this.title = "";
            this.preview_src = "";
            this.news = "<div> الخبر</div>";
            this.subtitle = "";

            this.loading = false;
            this.$emit("go_to_top");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  components: { Controlers, Toggle, Delete, Save, Camera, Loading },
};
</script>

<style lang="scss" scoped>
form {
  margin-block: 2rem;

  .for_input {
    padding: 20px;

    b {
      display: block;
      margin-top: 10px;
    }
  }
}
</style>
