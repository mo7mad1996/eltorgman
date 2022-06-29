<template>
  <div class="__message_list">
    <div v-for="msg in data" :key="msg._id">
      <Single_msg :msg="msg" @remove="remove" />
    </div>
  </div>
</template>

<script>
// components
import Single_msg from "~/components/dashboard/content/msg";

export default {
  components: { Single_msg },
  name: "Messages_list",
  props: ["data"],
  methods: {
    remove(msg) {
      this.$emit("remove", msg);
    },
  },
};
</script>

<style lang="scss" scoped>
.__message_list {
  padding: 20px;
}
</style>