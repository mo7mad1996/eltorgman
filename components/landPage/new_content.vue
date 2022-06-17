<template>
  <section>
    <h2>المحتوى الجديد هنا</h2>

    <main class="__subjects">
      <nuxt-link
        :to="`/subject/${subject._id}`"
        v-for="subject in new_subjects"
        :key="subject._id"
      >
        <div class="_subject">
          {{ subject.title }}
        </div>
      </nuxt-link>
    </main>
  </section>
</template>

<script>
export default {
  name: "New_content",
  props: ["new_subjects"],
};
</script>

<style></style>
