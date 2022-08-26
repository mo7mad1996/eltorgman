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
      gap: 2px;
      display: grid;
      grid-template:
        "a2 a2 a1 a1 a1"
        "a2 a2 a1 a1 a1"
        "a3 a4 a1 a1 a1"
        "a9 a8 a7 a6 a5";
      grid-template-rows: repeat(4, 200px);
      list-style: none;

      @media (max-width: 837px) {
        display: block;
      }

      a {
        position: relative;
        color: inherit;
        text-decoration: none;
        border-radius: 20px;
        overflow: hidden;

        li {
          border: 1px solid #222;
          width: 100%;
          height: 100%;
          @media (max-width: 837px) {
            display: flex;
            padding: 20px;
            border: none;
            border-top: 2px solid #122851;
            margin: 10px 0;
            background: white;
          }
          .img {
            width: 200px;
            max-width: 50%;
          }
          img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: #122851;

            @media (max-width: 837px) {
              all: unset;
              width: 100%;
              height: 120px;
              object-fit: contain;
              background: #122851;
            }
          }

          .content {
            position: absolute;
            z-index: 2;
            bottom: 0;
            text-align: center;
            width: 100%;
            color: white;
            padding: 2em;
            background-image: linear-gradient(transparent, black);

            @media (max-width: 837px) {
              all: unset;
              flex: 1;
            }
            * {
              margin: 0;
            }

            p {
              font-size: 0.7em;
            }
          }
        }
      }
    }
  }
}
</style>
