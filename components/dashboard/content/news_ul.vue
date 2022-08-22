<template>
  <div class="">
    <h3>الاخبار:</h3>

    <ul>
      <li v-for="single_news in content" :key="single_news._id">
        <div>
          <div class="views" title="المشاهدات">
            <fa icon="eye" />
            <span> {{ single_news.views }} </span>
          </div>
        </div>
        <nuxt-link :to="'/news/' + single_news._id" class="content">
          <h3>{{ single_news.title }}</h3>
          <h5>{{ single_news.subtitle }}</h5>
        </nuxt-link>
        <div class="buttons">
          <button class="btn" title="حدف" @click="remove(single_news._id)">
            <fa icon="trash" />
          </button>
          <nuxt-link
            class="btn"
            :to="'/dashboard/edit/news/' + single_news._id"
            title="تعديل"
          >
            <fa icon="pen" />
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News_ul",
  props: ["content"],
  methods: {
    remove(id) {
      if (confirm("هل انت متأكد من حذف الخبر")) this.$axios;
      // this.$axios
      //   .$delete(this.content.find((el) => el._id == id).img)
      //   .then((_) =>
      this.$axios
        .$delete("/news/delete/" + id)
        .then((_) => this.$emit("remove", id))
        .catch((err) => console.log(err));
      // )
      // .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0 20px;
  list-style: none;

  li {
    margin-bottom: 30px;
    background: white;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    gap: 10px;

    .views {
      color: #ffffff;
      padding: 5px 10px;
      border-radius: 5px;
      background: #003fbc;

      svg {
        font-size: 14px;
      }
    }

    .content {
      flex: 1;
      color: inherit;
      border-right: 2px solid #333;
      padding: 0 10px;
      text-decoration: none;

      h3,
      h5 {
        margin: 0;
        line-height: 1;
      }
      h3 {
        margin-bottom: 10px;
      }
      h5 {
        color: #565656;
      }
    }

    .buttons {
      flex-direction: column;
      color: #00acee;
      gap: 10px;
      display: flex;
      opacity: 0;

      .btn {
        color: inherit;
        background: none;
        border: 1px solid #00acee;
        padding: 5px;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          background: #00acee;
          color: white;
        }
      }
    }
    &:hover .buttons {
      transition: 0.3s;
      opacity: 1;
    }
  }
}
</style>