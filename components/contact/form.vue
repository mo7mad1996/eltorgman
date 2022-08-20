<template>
  <div class="__form">
    <h1>اتصل بنا..</h1>
    <form @submit.prevent="submit">
      <div class="input_field">
        <label for="name">الاسم:</label>
        <input required id="name" v-model="form.name" />
      </div>
      <div class="input_field">
        <label for="phone">رقم التلفون او البريد الالكتروني:</label>
        <input required id="phone" v-model="form.phone" />
      </div>
      <div class="input_field">
        <label for="msg">الرساله:</label>
        <textarea required id="msg" rows="4" v-model="form.msg"></textarea>
      </div>

      <div class="submit_btn">
        <button type="submit">
          <span v-if="!loading">إرسال</span>
          <Loading v-else />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// vuex
import { mapActions } from "vuex";

// components
import Loading from "~/components/loading";

export default {
  name: "Form_",
  data: () => ({
    form: {
      name: "",
      phone: "",
      msg: "",
    },
    loading: false,
  }),
  methods: {
    ...mapActions(["set_alert"]),
    submit() {
      this.loading = true;
      this.$axios
        .$post("/contact", this.form)
        .then(({ sent }) => {
          this.loading = false;
          this.set_alert({
            type: sent ? "success" : "error",
            text: sent
              ? "شكرا على إقتراحك، سنحاول التواصل معك"
              : "تعذر إرسال اقتراحك",
          });

          this.form = {
            name: "",
            phone: "",
            msg: "",
          };
        })
        .catch((err) => console.log(err));
    },
  },
  components: { Loading },
};
</script>

<style lang="scss" scoped>
$gray: #f8f8f8;

.__form {
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  background: $gray;
  box-shadow: 10px 5px 12px rgba(75, 74, 74, 0.313);
  position: relative;
  z-index: 1;
  max-width: 420px;
}
</style>
