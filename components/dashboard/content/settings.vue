<template>
  <form @submit.prevent="submited = true">
    <div class="input_field">
      <label for="name">الاسم</label>
      <input v-model="name" id="name" required />
    </div>
    <div class="input_field">
      <label for="username">اسم المستخدم</label>
      <input v-model="username" id="username" required />
    </div>
    <div class="input_field">
      <label for="newPass">كلمة المرور الدجديده</label>
      <input v-model="newPass" id="newPass" />
    </div>

    <form @submit.prevent="submit" v-if="submited" class="alert">
      <div class="content">
        <button class="close" @click="submited = false"><fa icon="x" /></button>

        <div class="input_field">
          <label for="password">كلمة المرور الحاليه</label>
          <input v-model="password" id="password" required />
        </div>

        <button type="submit">
          <Loading v-if="loading" />
          <span v-else>إرسال</span>
        </button>
      </div>
    </form>
    <button type="submit">تعديل</button>
  </form>
</template>

<script>
// components
import Loading from "../../loading.vue";

// vuex
import { mapActions } from "vuex";

export default {
  name: "Settings",
  props: ["form"],
  data: () => ({
    username: "",
    password: "",
    newPass: "",
    name: "",
    submited: false,
    loading: false,
  }),
  mounted() {
    this.username = this.form.username;
    this.name = this.form.name;
  },
  methods: {
    ...mapActions(["set_alert"]),
    submit() {
      this.loading = true;
      const data = {
        password: this.password,
        name: this.name,
        username: this.username,
        newPass: this.newPass,
      };
      if (this.password)
        this.$axios
          .$post("/users/update", data)
          .then((_) => {
            this.submited = false;
            this.set_alert({ type: "success", text: "تم تحديث البيانات" });
          })
          .catch((_) => {
            this.set_alert({ type: "error", text: "تأكد من كلمة المرور!!" });
          })
          .finally((_) => {
            this.loading = false;
          });
    },
  },
  components: { Loading },
};
</script>

<style lang="scss" scoped>
form {
  padding: 20px;

  .alert {
    position: fixed;
    inset: 0;
    z-index: 9;
    display: grid;
    place-items: center;

    .close {
      position: absolute;
      font-size: 12px;
      z-index: 2;
      top: 1em;
      left: 1em;
      cursor: pointer;
      width: 2em;
      height: 2em;
      border: 1px solid transparent;

      &:hover {
        border: 1px solid #1b6213;
      }
    }

    &::before {
      position: absolute;
      inset: 0;
      background: #333b;
      content: "";
      z-index: 1;
    }
    .content {
      position: relative;
      background: white;
      z-index: 2;
      width: 100%;
      padding: 1em 2em;
      max-width: 420px;
    }
  }
}
</style>