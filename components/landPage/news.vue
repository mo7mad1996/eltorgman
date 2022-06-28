<template>
  <div class="__news">
    <ul>
      <nuxt-link
        :to="'/news/' + n._id"
        v-for="n in news"
        :key="n._id"
        :title="n.title"
      >
        <li>
          <div class="img">
            <img
              :src="n.img || '/images/general/logo.jpg'"
              :alt="n.img ? n.title : 'الترجمان'"
            />
          </div>
          <div class="content">
            <h3>{{ n.title }}</h3>
            <p>{{ n.subtitle }}</p>
          </div>
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["news"],
  name: "News",
};
</script>

<style lang="scss" scoped>
.__news {
  ul {
    padding: 0;
    li {
      position: relative;
      margin-bottom: 10px;
      list-style: none;

      overflow: hidden;
      aspect-ratio: 16 / 9;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        img {
          transition: 0.3s;
          filter: blur(3px);
          opacity: 0.9;
        }
        .content {
          opacity: 1;
          transition: 0.3s;
        }
      }

      .content {
        inset: 0;
        opacity: 0;
        // top: auto;
        position: absolute;
        color: rgb(88, 247, 14);
        background: rgba(170, 67, 67, 0.533);
        display: grid;
        place-items: center;
        background-image: linear-gradient(transparent, rgb(53, 96, 124));
        padding: 10px;
        z-index: 2;
      }
    }
  }
}
</style>
