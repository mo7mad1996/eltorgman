<template>
  <header @click="active = false">
    <div class="continer">
      <div class="row">
        <nuxt-link to="/" class="logo" title="الترجمان">
          <!-- عاوز يتعدل -->
          <img src="/images/general/logo.svg" alt="الترجمان" />
        </nuxt-link>

        <div class="search-bar">
          <input type="text" placeholder="بحث..." v-model="search" />
          <Fa icon="magnifying-glass" class="fa" />
        </div>

        <nav class="links">
          <div class="menu">
            <ul class="sections-links" :class="active && 'active'">
              <nuxt-link
                v-for="link in subject_sections"
                :to="'/قسم/' + link"
                :key="link"
                class="link"
              >
                <li :title="link">{{ link }}</li>
              </nuxt-link>
            </ul>
            <ul class="nav-links" :class="active && 'active'">
              <nuxt-link
                v-for="link in nav"
                :to="link.url"
                :key="link.title"
                class="link"
              >
                <li :title="link.title">{{ link.title }}</li>
              </nuxt-link>
            </ul>
          </div>
          <button @click.stop="active = !active"><fa icon="bars" /></button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
// vuex
import { mapGetters } from "vuex";

export default {
  name: "Header_Component",
  data() {
    return {
      active: false,
      search: "",
      nav: [
        {
          title: "اتصل بنا",
          url: "/اتصل_بنا",
        },
        {
          title: "عن الموقع",
          url: "/عن_الموقع",
        },
      ],
    };
  },
  watch: {
    search() {
      if (this.search.trim()) {
        this.$router.push("/search/" + this.search.trim());
      } else {
        this.$router.push("/");
      }
    },
  },
  computed: mapGetters(["subject_sections"]),
};
</script>

<style lang="scss" scoped>
@mixin menu {
  display: none;
  flex-direction: column;
  width: 150px;
  padding: 0;
  background: #26447bd2;
  color: #f1f1f1;
}
@mixin effect {
  &:hover {
    background: #212121;
    color: #8beab6;
  }
}
@mixin normal-effect {
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

header {
  background: #122851;
  color: #f0f1f3;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    gap: 20px;

    .logo {
      img {
        max-height: 50px;
      }
      &::after {
        content: "";
        width: 2px;
        height: 100%;
        background: #f0f1f3;
      }
    }

    .search-bar {
      background: #f0f1f3;
      padding: 4px 10px;
      border-radius: 50px;
      overflow: hidden;

      * {
        border: none;
        outline: none;
        background: transparent;
        font-size: 1em;
        color: #122851;
      }

      input {
        width: 160px;
        max-width: 30vw;
      }
    }

    nav {
      position: relative;
      display: flex;
      flex: 1;
      justify-content: flex-end;

      button {
        display: none;
        color: inherit;
        background: none;
        padding: 5px 10px;
        border: none;
        cursor: pointer;

        @include normal-effect;

        @media (max-width: 1020px) {
          display: block;
        }
      }

      .menu {
        display: flex;
        z-index: 30;

        @media (max-width: 582px) {
          border: #183153 2px solid;
          box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
            rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          position: absolute;
          top: 100%;
          flex-direction: column;
          left: 0;

          a {
            width: 100%;

            @include effect;
          }
        }
      }
      ul {
        padding: 0;
        list-style: none;
        margin: 0;

        display: flex;
        align-items: center;

        a {
          color: inherit;
          text-decoration: none;
          padding: 5px 10px;

          @include normal-effect;
        }
        &.nav-links {
          @media (max-width: 582px) {
            @include menu;

            position: relative;

            &::after {
              content: "";
              height: 1px;
              width: 90%;
              margin: 5px auto;
              background: #183153;
            }
          }
        }
        &.sections-links {
          @media (max-width: 1020px) {
            @include menu;

            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
              rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            position: absolute;
            top: 100%;
            left: 2px;
            border: #183153 2px solid;

            a {
              width: 100%;

              @include effect;
            }
          }
          @media (max-width: 582px) {
            position: relative;
            left: 0;
            top: 0;
            order: 2;
            border: none;
          }
        }

        &.active {
          display: flex;
        }
      }
    }
  }
}
</style>
