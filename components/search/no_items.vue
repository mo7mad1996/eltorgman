<template>
  <div class="_no_items text-center">
    <div class="icon">
      <fa icon="circle-radiation" />
    </div>
    <div class="brown">للاسف لا توجد عناصر.</div>
  </div>
</template>

<script>
export default {
  name: "No_items",
};
</script>

<style lang="scss" scoped>
._no_items {
  padding: 20px;
  // background: linear-gradient(#131e99, #293081);
  // border-radius: 10px;

  .icon {
    font-size: 10em;
    color: #f72f3c;
  }

  .brown {
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 1.2em;
  }
}
</style>
