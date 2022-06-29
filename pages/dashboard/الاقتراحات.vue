<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">الاقتراحات والشكاوي</h1>

    <div class="dashboard_contant">
      <Messages_list :data="messages" @remove="remove" />
    </div>
  </section>
</template>

<script>
// vuex
import { mapActions } from "vuex";
// components
import Messages_list from "~/components/dashboard/content/messages_list";

export default {
  layout: "dashboard",
  async asyncData({ $axios }) {
    const messages = await $axios.$get("/contact");

    return { messages };
  },
  methods: {
    ...mapActions(["set_unread"]),
    remove(msg) {
      this.messages = this.messages.filter((el) => el != msg);
    },
  },
  components: { Messages_list },
  mounted() {
    this.set_unread(false);
  },
};
</script>

<style></style>
