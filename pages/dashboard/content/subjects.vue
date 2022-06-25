<template>
  <main>
    <h1>المواضيع</h1>
    <nuxt-link to="/dashboard/add/subject">إضافة موضوع</nuxt-link>
    <ul>
      <li v-for="subject in subjects" :key="subject._id">
        <span>
          {{ subject.title }}
        </span>
        <div>
          <button @click="remove(subject._id)">حذف</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  layout: "dashboard",

  async asyncData({ $axios }) {
    const subjects = await $axios.$get("/subjects");
    return { subjects };
  },
  name: "Subjects",
  methods: {
    remove(id) {
      this.$axios.$delete("/subjects/delete/" + id).then((_) => {
        this.subjects = this.subjects.filter((subject) => subject._id != id);
      });
    },
  },
};
</script>

<style></style>
