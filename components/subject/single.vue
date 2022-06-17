<template>
  <div class="__single_subject">
    <div class="_subject">
      <div class="continer">
        <h1>{{ subject.title }}</h1>
        <h3>{{ subject.subtitle }}</h3>
        <div class="content subject" v-html="subject.content"></div>
        <section>{{ subject.section }}</section>
        <small class="gray">
          {{ new Date(subject.date).toLocaleString("ar-EG") }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subject"],
  name: "Single_subject_component",
};
</script>

<style lang="scss" scoped>
.content {
  margin: 2em 0;
}
</style>
