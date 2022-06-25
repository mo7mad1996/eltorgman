<template>
  <section class="dashboard_section">
    <h1 class="dashboard_title">
      المواضيع

      <nuxt-link
        to="/dashboard/add/subject"
        title="إضافة موضوع جديد"
        class="custom-btn btn-3"
      >
        <span>
          <fa icon="file-circle-plus" />
        </span>
      </nuxt-link>
    </h1>

    <div class="dashboard_content">
      <Subjects_ul :subjects="subjects" @removed="removed" />
    </div>
  </section>
</template>

<script>
// components
import Subjects_ul from "~/components/dashboard/content/sections_ul";

export default {
  layout: "dashboard",

  async asyncData({ $axios }) {
    const subjects = await $axios.$get("/subjects");
    return { subjects };
  },
  name: "Subjects",
  methods: {
    removed(id) {
      this.subjects = this.subjects.filter((subject) => subject._id != id);
    },
  },
  components: { Subjects_ul },
};
</script>

<style lang="scss" scoped>
.dashboard_title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-3 {
    background: rgb(0, 172, 238);
    position: relative;
    background: linear-gradient(
      0deg,
      rgba(0, 172, 238, 1) 0%,
      rgba(2, 126, 251, 1) 100%
    );
    width: 60px;
    text-align: center;
    border: none;
  }

  .btn-3 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    color: white;
  }
  .btn-3:before,
  .btn-3:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }
  .btn-3:before {
    height: 0%;
    width: 2px;
  }
  .btn-3:after {
    width: 0%;
    height: 2px;
  }
  .btn-3:hover {
    background: transparent;
    box-shadow: none;
  }
  .btn-3:hover:before {
    height: 100%;
  }
  .btn-3:hover:after {
    width: 100%;
  }
  .btn-3 span:hover {
    color: rgba(2, 126, 251, 1);
  }
  .btn-3 span:before,
  .btn-3 span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }
  .btn-3 span:before {
    width: 2px;
    height: 0%;
  }
  .btn-3 span:after {
    width: 0%;
    height: 2px;
  }
  .btn-3 span:hover:before {
    height: 100%;
  }
  .btn-3 span:hover:after {
    width: 100%;
  }
}
</style>