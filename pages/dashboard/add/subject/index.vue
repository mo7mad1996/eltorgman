<template>
  <div class="__add_new_subject">
    <div class="continer">
      <h4>إضافة موضوع</h4>
    </div>

    <GET_artical />
  </div>
</template>

<script>
// components
import GET_artical from "~/components/dashboard/add/artical";

export default {
  name: "Add_new_artical",
  components: { GET_artical },
};
</script>

<style lang="scss">
.__add_new_subject {
  margin-bottom: 20px;
}
</style>
