<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">
      المواضيع

      <nuxt-link
        to="/dashboard/subjects/add"
        title="إضافة موضوع جديد"
        class="btn"
      >
        <span>
          <fa icon="file-circle-plus" />
        </span>
      </nuxt-link>
    </h1>

    <div class="dashboard_content">
      <Subjects_ul :subjects="subjects" @removed="removed" />
    </div>
  </section>
</template>

<script>
// components
import Subjects_ul from "~/components/dashboard/content/sections_ul";
// vuex
import { mapActions } from "vuex";

export default {
  layout: "dashboard",
  head: { title: "المواضيع" },
  async asyncData({ $axios }) {
    const subjects = await $axios.$get("/subjects");
    return { subjects };
  },
  name: "Subjects",
  methods: {
    ...mapActions(["set_alert"]),
    removed(id) {
      this.subjects = this.subjects.filter((subject) => subject._id != id);
      this.set_alert({ type: "success", text: "تم حذف الموضوع" });
    },
  },
  components: { Subjects_ul },
};
</script>
