<template>
  <div :class="{ unread: msg.unread }" class="msg">
    <button class="btn" :disabled="loading" @click="remove(msg._id)">
      <fa icon="spinner" class="fa-spin" v-if="loading" />
      <fa icon="x" v-else />
    </button>
    <div class="contant">
      <div class="gray">{{ new Date(msg.date).toLocaleString("ar-EG") }}</div>
      <h1>{{ msg.name }}</h1>
      <div class="phone">{{ msg.phone }}</div>
      <p>{{ msg.msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Single_msg",
  props: ["msg"],
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    if (this.msg.unread) this.$axios.$post("/contact/" + this.msg._id);
  },
  methods: {
    remove(id) {
      this.loading = true;
      this.$axios.$delete("/contact/" + id).then((_) => {
        this.loading = false;

        this.$emit("remove", this.msg);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.msg {
  background: white;
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;

  position: relative;

  .btn {
    position: absolute;
    top: 20px;
    left: 30px;
    background: #f996;
    border: 1.3px solid #f99;
    width: 25px;
    height: 25px;
    border-radius: 4px;
    display: grid;
    place-items: center;
    font-size: 12px;
    cursor: pointer;

    &:hover,
    &:focus {
      filter: brightness(120%);
    }
  }

  &.unread {
    animation: unread 3s ease-in-out forwards;
    border: 2px solid transparent;
  }

  * {
    margin: 0;
    color: #333;
  }

  .phone {
    color: black;
    margin: 10px;
  }
}

@keyframes unread {
  from {
    border: 2px solid #12c1f2;
  }
}
</style>