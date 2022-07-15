<template>
  <div class="__about_us" ref="container">
    <h1>الترجمان</h1>
    <div class="img_continer">
      <img alt="الترجمان" src="/images/general/about/index.png" />
    </div>

    <section class="one">
      <div class="continer">
        <h3>من نحن</h3>
        <p>
          موقع <nuxt-link to="/">الترجمان</nuxt-link> هو موقع عربي مصري بالكامل
          داعم تماماً للشريعه الإسلاميه، تم اطلاقه لاول مره في عام 2022م.
          <br />
          موقع <nuxt-link to="/">الترجمان</nuxt-link> هو اول نتائج تجمع ثلاث
          شباب مصرين قرروا ان يقدموا للمجتمع العربي موقع متخصص لنشر مقالات
          ومواضيع في مجالات فنيه، رياضيه، سياسيه، تاريخيه، ثقافيه وايضاً
          أدبيه... وغيرها، بهدف الإفاده ونشر المعرفه اكثر في وسط الشعب العربي
          العظيم.
          <br />
          موقع <nuxt-link to="/">الترجمان</nuxt-link>
          هو موقع رائد في نشر الاخبار الحصريه المتداوله في وسط المجتمع العربي
          المليئ بالأخبار الجديده والمحتوى المتميز والجديد كل يوم.
          <br />
          موقع <nuxt-link to="/">الترجمان</nuxt-link> يقدم أيضاً لك اخر الاسعار
          لأهم السلع المتوفره بالسوق المصري المتاحه في اغلب المتاجر والمولات.
        </p>
      </div>
    </section>

    <div class="Components continer">
      <h2>المؤسسين</h2>
      <div class="person">
        <img src="/images/general/about/ahmed.jpg" alt="احمد طايل" />

        <div class="data">
          <h3>أحمد طايل</h3>
          <p class="gray">
            صاحب فكرة موقع الترجما
            <br />
            المسؤول عن المحتوى وإدارة الموقع
          </p>
        </div>
      </div>
      <div class="person">
        <img src="/images/general/about/mohamed.jpg" alt="احمد طايل" />

        <div class="data">
          <h3>محمد إبراهيم</h3>
          <p class="gray">المطور والقائم على اعمال التطوير بالموقع</p>
        </div>
      </div>
      <div class="person">
        <img src="/images/general/about/nassem.jpg" alt="احمد طايل" />

        <div class="data">
          <h3>محمد نسيم</h3>
          <p class="gray">المسؤول عن القسم الاعلاني والدعائي بالموقع</p>
        </div>
      </div>
    </div>

    <footer class="continer">
      جميع الحقوق محفوظه لصالح موقع
      <nuxt-link to="/">الترجمان</nuxt-link> &copy;
      {{ new Date().getFullYear() }} .
    </footer>
  </div>
</template>

<script>
export default {
  name: "About_us_page",
};
</script>

<style lang="scss" scoped>
@import url("http://fonts.cdnfonts.com/css/aref-ruqaa");
.__about_us {
  color: #060913;
  background: #e9e3ff;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  h1 {
    margin: 0;
    padding: 20px 0 0;
    text-align: center;
    font-size: 60px;
    font-family: "Aref Ruqaa", sans-serif;

    &::after {
      content: "";
      height: 1.4px;
      display: block;
      background-image: linear-gradient(
        to right,
        transparent 40%,
        #616c87,
        transparent 60%
      );
    }
  }

  .img_continer {
    width: 100%;

    img {
      max-width: 100%;
      max-height: 90vh;
      display: block;
      margin: auto;
    }
  }

  section {
    margin: 10px 0;
    padding: 0.3em 0;

    h3 {
      padding: 0.3em;
      margin-top: 0;
    }
    &.one {
      margin: 0;
      background-image: linear-gradient(#c3e6ab, #e9e3ff);
    }
    p {
      padding: 0 2em;
      text-align: justify;
      line-height: 1.9;
    }
  }

  .person {
    display: flex;
    background: white;

    &:nth-of-type(even) {
      flex-direction: row-reverse;

      .data {
        text-align: left;
      }
    }
    img {
      width: 50%;
      display: block;
      height: 400px;
      object-fit: cover;
    }
    .data {
      padding: 10px;
      width: 50%;
    }

    @media (max-width: 620px) {
      display: block;
      .data,
      img {
        width: 100%;
      }
    }
  }

  .Components {
    margin-top: 4em;

    h2 {
      margin: 0;
      margin-bottom: 1.4em;
    }
  }

  footer {
    padding: 2em 0;
  }
}
</style>