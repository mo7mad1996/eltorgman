<template>
  <div class="social">
    <a
      :href="link.to"
      v-for="link in links"
      :key="link.to"
      :title="link.title"
      target="_blank"
      ><Fa :icon="link.icon"
    /></a>
  </div>
</template>

<script>
export default {
  name: "Social",
  data() {
    return {
      links: [
        {
          title: "facebook",
          to: "https://www.facebook.com/Eltrgoman1",
          icon: ["fab", "facebook-f"],
        },
        {
          title: "instagram",
          to: "https://www.instagram.com/eltrgoman1/",
          icon: ["fab", "instagram"],
        },
        {
          title: "twitter",
          to: "https://www.twitter.com/Eltrgoman1/",
          icon: ["fab", "twitter"],
        },
        {
          title: "youtube",
          to: "https://www.youtube.com/channel/UCS4Os3aVseO0ThmbtGh5sVQ",
          icon: ["fab", "youtube"],
        },
        {
          title: "tiktok",
          to: "https://www.tiktok.com/@eltrgoman1/",
          icon: ["fab", "tiktok"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.social {
  position: sticky;
  z-index: 3;
  top: 0;
  padding: 10px;
  background-image: linear-gradient(#122851, #1b2b73);
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;

  a {
    color: #eee;
  }
}
</style>
