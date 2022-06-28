<template>
  <div class="__news">
    <div class="right">
      <ul>
        <nuxt-link
          :to="'/news/' + n._id"
          v-for="n in news"
          :key="n._id"
          :title="n.title"
        >
          <li>
            <div class="content">
              <h3>{{ n.title }}</h3>
              <p>{{ n.subtitle }}</p>
            </div>
            <div class="img">
              <img
                :src="n.img || '/images/general/logo.jpg'"
                :alt="n.img ? n.title : 'الترجمان'"
              />
            </div>
          </li>
        </nuxt-link>
      </ul>
    </div>

    <div class="left">Ads here</div>
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
  display: flex;
  @media (max-width: 653px) {
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
    @media (max-width: 653px) {
      width: 100%;
    }
  }

  .right {
    ul {
      padding: 20px;
      color: #333;

      a {
        color: inherit;
        text-decoration: none;
      }

      li {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        background: white;
        // border: 2px solid #122851;
        border-radius: 20px;
        position: relative;
        margin-bottom: 50px;
        list-style: none;
        display: flex;
        transition: 0.2s;
        padding: 20px;
        top: 20px;

        .content {
          flex: 1;

          h3 {
            margin: 0;
            font-size: 1.5em;
          }
        }
        .img {
          width: 120px;

          // border-radius: 10px;
          overflow: hidden;
          position: relative;
          top: -50px;
          transition: inherit;

          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &:hover {
          text-decoration: underline;

          top: 0;
          .img {
            top: 0;
          }
        }
      }
    }
  }
}
</style>
