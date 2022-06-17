<template>
  <div class="__login">
    <LoginForm />
    <ImageSection />
  </div>
</template>

<script>
// components
import ImageSection from "~/components/login/img.vue";
import LoginForm from "~/components/login/form.vue";

export default {
  name: "LoginPage",
  layout: "login",
  components: {
    ImageSection,
    LoginForm,
  },
  head: {
    title: "تسجيل الدخول",
  },
};
</script>

<style lang="scss">
.__login {
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column-reverse;

    > * {
      height: auto;
      display: block;
    }
  }

  > * {
    flex: 1;
    height: 100vh;
    display: grid;
    place-items: center;
  }
}
</style>
