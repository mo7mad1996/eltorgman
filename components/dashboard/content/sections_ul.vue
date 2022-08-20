<template>
  <div class="_component" v-if="subjects.length">
    <h3>جميع المواضيع.</h3>

    <ul class="section_container">
      <li v-for="(subject, n) in subjects" :key="subject._id" class="subject">
        <div class="index gray">{{ n + 1 }}</div>
        <nuxt-link :to="'/subject/' + subject._id" class="content">
          <div class="titles">
            <h5>{{ subject.title }}</h5>
            <h6 class="brown">{{ subject.subtitle }}</h6>
          </div>
          <div class="info">
            <div class="eye">{{ subject.vist }} <fa icon="eye" /></div>
            <div class="gray">{{ subject.section }}</div>
          </div>
        </nuxt-link>
        <div class="buttons">
          <button class="btn" @click="remove(subject._id)" title="حذف">
            <fa icon="trash" />
          </button>
          <nuxt-link
            :to="'/dashboard/edit/subject/' + subject._id"
            class="btn"
            @click="remove(subject._id)"
            title="تعديل"
          >
            <fa icon="pen" />
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>

  <div v-else class="text-center">
    <No_items />
    <nuxt-link to="/dashboard/add/subject">أضف موضوع جديد</nuxt-link>
  </div>
</template>

<script>
import No_items from "../../search/no_items.vue";
export default {
  props: ["subjects"],
  name: "Subjects_ul",
  methods: {
    remove(id) {
      if (confirm("هل انت متأكد من حذف الموضوع"))
        this.$axios
          .$delete("/subjects/delete/" + id)
          .then((_) => this.$emit("removed", id))
          .catch((err) => console.log(err));
    },
  },
  components: { No_items },
};
</script>

<style lang="scss" scoped>
._component {
  padding: 0 1.2em;
}
.section_container {
  padding: 0 1.2em;
  list-style: none;

  .info {
    text-align: left;
    font-size: 0.8em;
    .eye {
      margin-bottom: 5px;
    }
  }
  .subject {
    background: #b1a2c6;

    background-image: linear-gradient(-90deg, #b05b94, #5352ed);
    background-image: linear-gradient(#3c5ab2, #8880c9);
    padding: 10px;
    border-right: 10px solid #ab1554;
    gap: 10px;
    margin-bottom: 10px;
    line-height: 1;
    display: flex;

    .index {
      font-size: 30px;
    }

    .content {
      flex: 1;
      color: inherit;
      text-decoration: none;
      display: flex;
      padding: 10px;
      color: #fff;

      .titles {
        flex: 1;
      }

      h6,
      h5 {
        margin: 0;
      }

      h5 {
        font-size: 1.2em;
        margin-bottom: 0.4em;
      }

      h6 {
        color: rgb(32, 32, 32);
        font-size: 1.3em;
      }
    }

    .buttons .btn {
      color: white;
      background: none;
      cursor: pointer;
      padding: 5px 10px;
      border: 1px solid transparent;
      border-radius: 5px;
      display: block;
      text-align: center;
      width: 100%;

      &:hover {
        border: 1px solid white;
        background: #ffffff26;
      }
    }
  }
}
</style>