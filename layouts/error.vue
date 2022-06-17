<template>
  <div class="__error">
    <div class="canvas_container" ref="canvas_container"></div>

    <div class="_detailes text-center">
      <h1>{{ error.statusCode }}</h1>
      <h2 class="gray" v-if="error.statusCode == 404">
        الصفحه المطلوبه غير موجوده
      </h2>
      <h2 v-else>{{ error.message }}</h2>

      <p>من الأفضل الإطلاع على <NuxtLink to="/"> صفحة البدء</NuxtLink>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  layout: "empty",

  mounted() {
    class Char {
      constructor(x) {
        this.ctx = ctx;
        this.charSpeed = Math.random();
        this.reset();
        this.y = Math.random() * canvas.height;
      }
      reset() {
        this.font_size = Math.floor(Math.random() * 40 + 12);
        this.font = this.font_size + "px monospace";
        this.char = Math.random() * 600 + 140;
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.posY = 0;
        this.speed = Math.random() * 10 + 3;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.save();
        ctx.font = this.font;
        ctx.fillStyle = "#11f312";
        ctx.fillText(String.fromCharCode(this.char), this.x, this.y);
        ctx.restore();
      }
      update() {
        this.posY += this.speed;
        this.char =
          Math.floor(this.posY / this.font_size) *
          this.font_size *
          this.charSpeed;
        this.y = Math.floor(this.posY / this.font_size) * this.font_size;
        if (this.y > canvas.height) this.reset();

        this.draw(this.ctx);
      }
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    window.onresize = (_) => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    ctx.textAlign = "center";

    ctx.fillStyle = "rgb(11, 12, 11)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let count = canvas.width / 70;
    let chars = [];

    for (let x = 0; x < count; x++) {
      chars.push(new Char(x, canvas, ctx));
    }

    function anmate() {
      ctx.fillStyle = "rgb(11, 12, 11, 0.17)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      chars.forEach((c) => c.update());
      requestAnimationFrame(anmate);
    }

    anmate();

    this.$refs.canvas_container.appendChild(canvas);
  },
};
</script>

<style scoped lang="scss">
.__error {
  display: grid;
  place-items: center;
  color: white;

  min-height: 100vh;

  .canvas_container {
    overflow: hidden;
    position: fixed;
    inset: 0;
  }
  ._detailes {
    z-index: 2;
    background: #fff1;
    backdrop-filter: blur(2px);
    font-size: 20px;
    padding: 10px 40px;
    line-height: 1.3;

    h1 {
      font-size: 3em;
      margin: 0;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    h2 {
      font-size: 1.3em;
      margin: 0px;
    }
    p a {
      color: #117198;
    }
  }
}
</style>
