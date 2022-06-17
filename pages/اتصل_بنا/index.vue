<template>
  <div class="__contact_us">
    <Form_ />
    <Canvas_ />
  </div>
</template>

<script>
import Form_ from "~/components/contact/form";
import Canvas_ from "~/components/contact/canvas";

export default {
  name: "Contact_us",
  components: {
    Form_,
    Canvas_,
  },
  head: {
    title: 'اتصل بنا'
  }
};
</script>

<style lang="scss" scoped>
.__contact_us {
  padding: 100px 12vw 100px;
  margin-bottom: -70px;
  background-image: linear-gradient(#f1e6e1, #faf3e1);
}
</style>
