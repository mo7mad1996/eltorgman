<template>
  <section v-if="news.length">
    <h1 class="title">أخر الاخبار</h1>

    <div class="__news">
      <div class="right">
        <ul>
          <nuxt-link
            v-for="(n, index) in news"
            :to="'/news/' + n._id"
            :key="n._id"
            :title="n.title"
            :style="`grid-area: a${index + 1};`"
          >
            <li>
              <div class="content">
                <h3>{{ n.title }}</h3>
                <p>{{ n.subtitle }}</p>
              </div>
              <div class="img">
                <img
                  :src="n.img || '/images/general/logo.svg'"
                  :alt="n.img ? n.title : 'الترجمان'"
                />
              </div>
            </li>
          </nuxt-link>
        </ul>
      </div>

      <div class="left">
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-client="ca-pub-2911925716359981"
          data-ad-slot="5073119586"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  </section>
  <No_items v-else type="أخبار بعد" />
</template>

<script>
if (process.title == "browser") {
  setTimeout((_) => (adsbygoogle = window.adsbygoogle || []).push({}), 10000);
}
import No_items from "~/components/search/no_items";

export default {
  props: ["news"],
  name: "News",
  components: { No_items },
};
</script>

<style lang="scss" scoped>
.__news {
  display: flex;
  @media (max-width: 582px) {
    flex-direction: column;
  }

  .right {
    flex: 1;
  }
  .left {
    width: 320px;

    @media (max-width: 1020px) {
      width: 200px;
    }
    @media (max-width: 582px) {
      width: 100%;
    }
  }

  .right {
    ul {
      padding: 0;
      display: grid;
      grid-template:
        "a1 a1 a1 a2 a2"
        "a1 a1 a1 a2 a2"
        "a3 a4 a5 a6 a7"
        "a8 a8 a9 a9 a10";
      grid-template-rows: repeat(4, 200px);

      li {
        display: block;
        list-style: none;
        width: 100%;
        height: 100%;

        .content {
          display: none;
        }

        .img {
          height: 100%;
          width: 100%;
          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
