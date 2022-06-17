<template>
  <div class="error">
    <div class="error-page">
      <div>
        <h1 data-h1="404"></h1>
        <p>غير موجود</p>
        <div>
          نعتقد بان هذا {{ type }} غير موجود،
          <br />
          او ان عنوان الصفحة هذا غير صحيح.
        </div>
      </div>
    </div>
    <nav class="continer brown">
      <p>
        ننصحك بزياره
        <nuxt-link to="/"> الصفحه الرئيسيه</nuxt-link>
        لنا . <br />
        اذا كنت تعتقد ان الخطأ هذا من طرفنا فرجاء
        <nuxt-link to="/اتصل_بنا">اتصل بنا</nuxt-link>.
      </p>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Not_found",
  props: ["error", "type"],
  mounted() {
    console.error(this.error);
  },
};
</script>

<style lang="scss" scoped>
.error {
  position: relative;
  margin-bottom: -4em;
  overflow: hidden;
  // background: #efefef;

  &::before {
    content: "";
    position: absolute;
    inset: -50%;
    left: 50%;
    background: #b2b2b232;
    transform: skew(-30deg);
  }
}
.error-page {
  text-align: center;

  h1 {
    font-size: 10rem;
    font-family: arial;
    font-weight: bold;
    position: relative;
    padding: 0;
    margin: 0;

    &:after {
      content: attr(data-h1);
      color: transparent;
      background: linear-gradient(
        -45deg,
        #71b7e6,
        #69a6ce,
        #b98acc,
        #ee8176,
        #b98acc,
        #69a6ce,
        #9b59b6
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 400%;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);
      animation: animateTextBackground 10s ease-in-out infinite;
    }
  }
  p {
    color: #d6d6d6;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 0;
    position: relative;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    background-clip: text;
  }
}
nav {
  padding-bottom: 3em;
  text-align: center;
  font-size: 1.2em;

  a {
    color: #71b7e6;
  }
}

@keyframes animateTextBackground {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 100% 0;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0 100%;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
