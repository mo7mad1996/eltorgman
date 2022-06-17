<template>
  <div class="contollers active border">
    <input v-model="val" />
    <div v-for="(control, n) in controllers" :key="n">
      <button @click.prevent="edit(control)" class="controller">
        {{ control }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controles",
  data() {
    return {
      val: "",
      controllers: [
        "justifyCenter",
        "justifyFull",
        "justifyLeft",
        "justifyRight",
        "createLink",
        "unlink",
        "foreColor",
        "backColor",
        "bold",
        "strikethrough",
        "insertImage",
        "subscript",
        "superscript",
        "insertUnorderedList",
        "insertOrderedList",
        "fontSize",
        "insertHorizontalRule", // work but never used
        "removeFormat",
      ],
    };
  },
  methods: {
    edit(action) {
      document.execCommand(action, false, this.val);
    },
  },
};
</script>

<style lang="scss" scoped>
.contollers {
  display: block;
  flex-wrap: wrap;
  gap: 5px;
  flex: 1;
  border: 2px solid #a5a5b1;

  &.active {
    display: flex;

    > div {
      flex: 1;

      button {
        width: 100%;
        height: 100%;
      }

      .controller {
        padding: 5px 10px;
        background: #147b8d;
        color: white;
        width: 100%;
        height: 100%;
        text-transform: capitalize;

        border: none;
        border-radius: 5px;
      }
    }
  }
}
</style>
