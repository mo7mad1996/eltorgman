<template>
  <div class="continer">
    <h3>dashboard</h3>

    <nuxt-link to="/dashboard/content/subjects">المواضيع</nuxt-link>
    <nuxt-link to="/dashboard/add/news">إضافة خبر</nuxt-link>
    <nuxt-link to="/dashboard/الاقتراحات">الاقتراحات والشكاوي</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "DashbordHomePage",
  middleware: "auth",
};
</script>

<style></style>
