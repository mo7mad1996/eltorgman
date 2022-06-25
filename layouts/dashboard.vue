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
          <li v-for="link in links" :key="link.to">
            <nuxt-link :to="link.to" class="active">
              <fa :icon="link.icon" class="icon" />
              <span>
                {{ link.title }}
              </span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-link to="/logout" class="logout">خروج</nuxt-link>
    </aside>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data: () => ({
    links: [
      {
        to: "/dashboard/content/subjects",
        img: "/images/dashboard/subject.webp",
        title: "المواضيع",
        icon: "building-columns",
      },
      {
        to: "/dashboard/content/news",
        img: "/images/dashboard/subject.webp",
        title: "الاخبار",
        icon: "radio",
      },
      {
        to: "/dashboard/الاقتراحات",
        img: "/images/dashboard/contant.webp",
        title: "الاقتراحات والشكاوي",
        icon: "arrows-split-up-and-left",
      },
      {
        to: "/dashboard/settings",
        img: "/images/dashboard/settings.svg",
        title: "الإعدادات",
        icon: "bug",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  display: block;
  text-decoration: none;
}
.__dashboard {
  display: flex;
  height: 100vh;
  overflow: hidden;

  main {
    flex: 1;
    padding: 5px;
    overflow: auto;
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

      &:hover {
        filter: brightness(80%);
      }
    }
  }
}
</style>