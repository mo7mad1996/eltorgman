<template>
  <section>
    <h2 class="title">اهم الاخبار لهذا الشهر</h2>

    <div class="news">
      <div class="item" v-for="news in top_news" :key="news._id">
        <div class="news_img">
          <img
            :alt="news.title"
            :src="news.img || '/images/general/logo.svg'"
          />
        </div>

        <div class="news_content">
          <h4>{{ news.title }}</h4>
          <p>{{ news.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Top_News",
  props: ["top_news"],
  mounted() {
    console.log(this.top_news);
  },
};
</script>


<style lang="scss" scoped>
.news {
  display: flex;
  gap: 1em;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    position: relative;
    padding: 10px;
    max-width: 220px;
    min-width: 220px;
    flex: 1;
    border-radius: 5px;

    * {
      position: relative;
      z-index: 1;
    }

    &::before,
    &::after {
      border-radius: 5px;
      content: "";
      position: absolute;
      inset: 2px;
      background: white;
      z-index: 0;
    }
    &::before {
      background-image: conic-gradient(
        #c3e7e8,
        #e4c162,
        #fae7d0,
        #e6a4cf,
        #f19c92,
        #e5bde3,
        #cfe8eb,
        #c3e7e8
      );
      inset: 0;
    }

    img {
      max-width: 100%;
      height: 160px;
      aspect-ratio: 16 / 9;
      background: #a7aeb6;
      object-fit: cover;
      border-radius: 5px;
    }

    .news_content {
      color: #313131;
      margin: 10px 0;

      h4,
      p {
        margin: 0;
      }

      p {
        font-size: 0.8em;
      }
    }
  }
}
</style>