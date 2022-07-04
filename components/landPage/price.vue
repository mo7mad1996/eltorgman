<template>
  <marquee
    direction="right"
    ref="marquee"
    @touchstart="$refs.marquee.stop()"
    @mouseenter="$refs.marquee.stop()"
    @mouseleave="$refs.marquee.start()"
    @touchleave="$refs.marquee.start()"
  >
    <span v-for="price in prices" :key="price._id">
      سعر {{ price.name }} اليوم: {{ price.value }}
    </span>
  </marquee>
</template>

<script>
export default {
  name: "Price",
  props: ["prices"],
};
</script>

<style lang="scss" scoped>
marquee {
  background-image: linear-gradient(#f6ea00, #f49c13);
  padding: 5px 0;
  direction: ltr;
  box-shadow: 0 4px 4px rgba(51, 51, 51, 0.2);
  white-space: nowrap;
  display: flex;
  font-size: 1.1em;
  align-items: center;
  span {
    display: inline-flex;
    align-items: center;
  }

  span:not(:last-of-type)::after {
    content: "";
    margin: 0 10px;
    background-image: url("/images/general/logo.svg");
    width: 40px;
    display: inline-block;
    height: 1em;
    background-position: center;
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
}
</style>
