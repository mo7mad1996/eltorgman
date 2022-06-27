<template>
  <div class="__Alert" :class="className" @click="close_alert">
    {{ alert.text }}
  </div>
</template>

<script>
// vuex
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Alert",
  computed: {
    ...mapGetters(["alert"]),
    className() {
      let myClass = this.alert.type.toLocaleLowerCase();
      myClass += this.alert.active && " active";
      return myClass;
    },
  },
  methods: mapMutations(["close_alert"]),
};
</script>

<style lang="scss" scoped>
.__Alert {
  position: fixed;
  bottom: -100%;
  cursor: pointer;
  user-select: none;
  left: 50%;
  padding: 10px 30px;
  border-radius: 7px;
  transition: 0.3s;
  z-index: 10;
  transform: translateX(-50%);
  font-weight: bold;
  box-shadow: rgba(181, 179, 179, 0.59) 0px 2px 70px 4px;

  &.active {
    bottom: 10px;
  }

  &.error {
    border: 2px solid #e8584b;
    background-color: #ffd4de;
    color: #e8584b;
  }
  &.success {
    border: 2px solid #409f6b;
    color: #409f6b;
    background-color: #d9fdad;
  }
}
</style>
