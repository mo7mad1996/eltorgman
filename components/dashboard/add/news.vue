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
            <b>أضف صورة الخبر</b>
          </div>
        </label>
        <input id="file" type="file" ref="file" @change="preview_img" />
      </div>

      <h4>عناصر التحكم</h4>
      <Controlers />

      <article>
        <div class="input_field">
          <h3 for="news">
            الخبر
            <button @click.prevent="in_edit = !in_edit" title="تعديل">
              <Toggle />
            </button>
          </h3>
          <p
            id="news"
            ref="news"
            :contentEditable="in_edit"
            class="subject"
            :class="in_edit && 'textarea'"
            v-html="news"
          ></p>
        </div>
      </article>

      <button class="add" type="submit">إضافة <Save /></button>
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

export default {
  name: "Add_news_component",
  data: () => ({
    title: "",
    subtitle: "",
    preview_src: "",
    in_edit: true,
    news: "المحتوى...",
  }),
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
          let formdata = new FormData();
          if (Array.from(this.$refs.file.files).length)
            formdata.append(
              "file",
              this.$refs.file.files[0],
              this.$refs.file.files[0].filename
            );
          let content = this.$refs.news.innerHTML;
          formdata.append("content", content);
          formdata.append("title", this.title);
          formdata.append("subtitle", this.subtitle);

          this.$axios
            .$post("/news/add", formdata, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              if (res.saved) {
                this.set_alert({ type: "Success", text: "تمت الاضافة" });
                this.$refs.form.reset();
                this.title = "";
                this.preview_img = "";
                this.news = "";
                this.subtitle = "";
              } else this.set_alert({ type: "Error", text: res.data._message });
            });
        } else this.set_alert({ type: "Error", text: "تأكد من عنوان الخبر" });
      }
    },
  },
  components: { Controlers, Toggle, Delete, Save, Camera },
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
