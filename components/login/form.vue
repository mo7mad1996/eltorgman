<template>
  <div>
    <form class="__form" @submit.prevent="login">
      <div class="_header">
        <h4>أهلا بعودتك..</h4>
        <p class="gray">من فضلك ادخل البيانات التاليه.</p>
      </div>
      <div class="input_field">
        <label for="username">المستخدم</label>
        <input v-model="user.username" required id="username" />
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
  methods: {
    ...mapActions(["set_alert"]),
    login() {
      if (!this.user.username)
        this.set_alert({ type: "error", text: "تاكد من توضيح المستخدم" });
      else if (!this.user.username)
        this.set_alert({ type: "error", text: "تأكد من إدخال كلمة المرور" });
      else {
        this.$auth.loginWith("local", this.user);
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
