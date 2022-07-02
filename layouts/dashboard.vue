<template>
  <div class="__dashboard">
    <aside>
      <nuxt-link to="/" class="logo">
        <div class="content">
          <img src="/images/general/logo.png" alt="الترجمان" />
          <span>الترجمان</span>
        </div>
      </nuxt-link>

      <nav class="links">
        <ul>
          <li v-for="(link, n) in links" :key="link.to">
            <nuxt-link
              :to="link.to"
              class="active"
              :class="{ unread: unread && n == 3 }"
            >
              <fa :icon="link.icon" class="icon" />
              <span>
                {{ link.title }}
              </span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <button @click="$auth.logout()" class="logout">خروج</button>
    </aside>
    <main>
      <nuxt />
    </main>

    <Alert />
  </div>
</template>

<script>
// components
import Alert from "~/components/layouts/Alert";
// vuex
import { mapActions, mapGetters } from "vuex";

export default {
  name: "dashboard",
  mounted() {
    this.$axios.$get("/contact/unread").then((data) => this.set_unread(data));
  },
  methods: mapActions(["set_unread"]),
  computed: mapGetters(["unread"]),
  middleware: "auth",

  data: () => ({
    links: [
      {
        to: "/dashboard/content/subjects",
        title: "المواضيع",
        icon: "building-columns",
      },
      {
        to: "/dashboard/content/news",
        title: "الاخبار",
        icon: "radio",
      },
      {
        to: "/dashboard/content/prices",
        title: "الاسعار",
        icon: "money-bill-1-wave",
      },
      {
        to: "/dashboard/الاقتراحات",
        title: "الاقتراحات والشكاوي",
        icon: "arrows-split-up-and-left",
      },
      {
        to: "/dashboard/settings",
        title: "الإعدادات",
        icon: "bug",
      },
    ],
  }),
  components: { Alert },
};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  display: block;
  text-decoration: none;

  &.unread {
    position: relative;

    &::after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: #ab1554;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
.__dashboard {
  display: flex;
  height: 100vh;
  overflow: hidden;

  main {
    flex: 1;
    overflow: hidden;
    background: #f3f3f3;
  }

  aside {
    max-width: 280px;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    color: #333;
    background: #eee;

    .logo {
      padding: 10px;
      .content {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
          height: 50px;
          display: block;
        }
      }

      &::after {
        content: "";
        background-image: linear-gradient(
          to right,
          transparent,
          #ab1554,
          transparent
        );
        margin: 10px 0;
        height: 1px;
        display: block;
      }
    }

    .links {
      flex: 1;
      ul {
        list-style: none;
        padding-right: 10px;

        a {
          border-radius: 0 20px 20px 0;
          padding: 10px 20px;
          display: flex;
          gap: 15px;

          &:hover {
            text-decoration: underline;
          }

          &.nuxt-link-exact-active {
            background: linear-gradient(to left, #c46b90, transparent);

            .icon {
              color: white;
            }
          }
        }
      }
    }

    .logout {
      padding: 20px 10px;
      background: #ab1554;
      color: white;
      padding: 10px 10px;
      display: block;
      text-align: center;
      margin: 20px;
      border-radius: 7px;
      cursor: pointer;

      &:hover {
        filter: brightness(80%);
      }
    }
  }
}
</style>