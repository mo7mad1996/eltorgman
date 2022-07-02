<template>
  <div>
    <form class="__form" @submit.prevent="login">
      <div class="_header">
        <h4>أهلا بعودتك..</h4>
        <p class="gray">من فضلك ادخل البيانات التاليه.</p>
      </div>
      <div class="input_field">
        <label for="username">المستخدم</label>
        <input v-model="user.username" required id="username" autofocus />
      </div>
      <div class="input_field">
        <label for="password">كلمة المرور</label>
        <input v-model="user.password" required type="password" id="password" />
      </div>
      <div class="submit_btn"><button type="submit">دخول</button></div>
    </form>
  </div>
</template>

<script>
// vuex
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  data: () => ({
    user: {
      username: "",
      password: "",
    },
  }),
  mounted() {},
  methods: {
    ...mapActions(["set_alert"]),
    async login() {
      if (!this.user.username)
        this.set_alert({ type: "error", text: "تاكد من توضيح المستخدم" });
      else if (!this.user.password)
        this.set_alert({ type: "error", text: "تأكد من إدخال كلمة المرور" });
      else {
        try {
          const { data } = await this.$auth.loginWith("local", {
            data: this.user,
          });
          this.set_alert({
            type: "success",
            text:
              "مرحباً بعدوتك اخر دخول كان في " +
              new Date(data.lastLogin).toLocaleString("ar-EG"),
          });
        } catch ({ response }) {
          this.set_alert({ text: response.data, type: "Error" });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.__form {
  ._header {
    > * {
      margin: 0;
    }
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 25px;
  }

  @media (max-width: 720px) {
    margin-top: 5rem;
  }
}
</style>
