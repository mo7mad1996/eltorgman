<template>
  <div class="__form">
    <h1>اتصل بنا..</h1>
    <form @submit.prevent="">
      <div class="input_field">
        <label for="name">الاسم:</label>
        <input required id="name" />
      </div>
      <div class="input_field">
        <label for="phone">رقم التلفون او البريد الالكتروني:</label>
        <input required id="phone" />
      </div>
      <div class="input_field">
        <label for="msg">الرساله:</label>
        <textarea required id="msg" rows="4"></textarea>
      </div>

      <div class="submit_btn"><button type="submit">إرسال</button></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form_",
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
