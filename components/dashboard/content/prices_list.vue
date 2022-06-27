<template>
  <div class="Prices_list">
    <div class="forms">
      <h4>قائمة الاسعار:</h4>

      <div v-for="form in forms" :key="form._id" class="form">
        <form @submit.prevent="update(form)">
          <label :for="form._id">{{ form.name }}:</label>
          <div class="input">
            <input
              :id="form._id"
              :value="form.value"
              @input="(e) => input(e, form)"
              placeholder="السعر..."
            />
            <span class="gray">
              أخر تعديل:
              {{ new Date(form.lastUpdate).toLocaleString("ar-EG") }}
            </span>
          </div>

          <div class="buttons">
            <button type="submit">تعديل</button>
            <button type="button" class="red" @click="remove(form._id)">
              حذف
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="add_form">
      <h4>إضافة عنصر جديد:</h4>
      <form @submit.prevent="add">
        <input v-model="newItem" required placeholder="صنف جديد" />
        <button class="btn"><fa icon="plus" /></button>
      </form>
    </div>
  </div>
</template>

<script>
// vuex
import { mapActions } from "vuex";

export default {
  name: "Prices_list",
  props: ["forms"],
  data() {
    return {
      newItem: "",
      newData: {},
    };
  },
  methods: {
    ...mapActions(["set_alert"]),
    input(e, form) {
      this.newData[form._id] = e.target.value;
    },
    add() {
      this.$axios.$post("/prices/add", { name: this.newItem }).then((item) => {
        this.forms.push(item);
        this.newItem = "";
      });
    },
    remove(id) {
      if (confirm("هل تريد حذف المنتج من التسعير؟"))
        this.$axios.$delete("/prices/delete/" + id).then((item) => {
          this.$emit("remove", id);
          this.set_alert({ type: "success", text: "تم حذف العنصر" });
        });
    },
    update(form) {
      this.$axios
        .$patch("/prices/" + form._id, { value: this.newData[form._id] })
        .then((_) =>
          this.set_alert({ type: "success", text: "تم تحديث البيانات" })
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.Prices_list {
  padding: 10px;

  .forms {
    .form {
      background: white;
      padding: 10px;
      margin: 30px 0;

      label {
        display: block;
        font-size: 1.6em;
        font-weight: bold;
      }

      .input {
        display: flex;
        gap: 10px;
        align-items: center;

        span {
          font-size: 0.7em;
        }
      }
      .buttons {
        display: flex;
        margin-top: 20px;
        gap: 10px;

        button {
          all: unset;
          background: #56fa7d;
          color: #0f235c;
          flex: 1;
          padding: 10px;
          text-align: center;
          display: block;
          border-radius: 5px;
          cursor: pointer;

          &:hover {
            filter: brightness(120%);
          }

          &.red {
            color: white;
            background: #ab1554;
          }
        }
      }
    }

    &::after {
      display: block;
      content: "";
      margin: 10px;
      height: 1px;
      background-image: linear-gradient(
        to left,
        transparent,
        #849de3,
        transparent
      );
    }
  }

  input {
    flex: 1;
    padding: 8px 15px;
    background: #d8e0f7;
    color: #0f235c;
    border: 2px solid #c7cee4;
    margin: 0;
    outline: none;
  }

  .add_form form {
    padding: 10px;
    display: flex;
    gap: 10px;

    button {
      border: 1px solid #0f235c;
      color: #0f235c;
      background: #56fa7d;
      padding: 2px 10px;
      cursor: pointer;
      padding: 8px 15px;
      display: block;
      border-radius: 5px;

      &:hover {
        filter: brightness(120%);
      }
    }
  }
}
</style>