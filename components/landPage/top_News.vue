<template>
  <section v-if="top_news.length">
    <h2 class="title">أهم الأخبار لهذا الشهر</h2>

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
};
</script>


<style lang="scss" scoped>
.news {
  display: flex;
  gap: 1em;
  scrollbar-width: none; /* Firefox */
  overflow-x: auto;
  padding: 40px 5px;
  overflow-y: visible;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    position: relative;
    max-width: 220px;
    min-width: 220px;
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    background: white;

    * {
      position: relative;
      z-index: 1;
    }

    img {
      width: 100%;
      height: 160px;
      aspect-ratio: 16 / 9;
      background: #a7aeb6;
      // object-fit: cover;
    }

    .news_content {
      color: #313131;
      padding: 0 10px;
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