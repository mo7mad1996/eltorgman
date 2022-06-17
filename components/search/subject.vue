<template>
  <div class="_subjects" v-if="subjects.length">
    <nuxt-link
      :to="'/subject/' + subject._id"
      class="subject"
      v-for="subject in subjects"
      :key="subject._id"
      :title="subject.title"
    >
      <Single_item :subject="subject" />
    </nuxt-link>
  </div>
  <No_items v-else />
</template>

<script>
import Single_item from "~/components/search/single_item";
import No_items from "~/components/search/no_items";

export default {
  name: "Search_subjects",
  props: ["subjects"],
  components: { Single_item, No_items },
};
</script>

<style lang="scss" scoped>
.subject {
  border: 1px solid #ccc;
  border-right: 10px solid rgb(50, 27, 118);
  padding: 20px;
  color: inherit;
  display: block;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  margin-bottom: 2em;
  text-decoration: none;
  background: white;
}
</style>
