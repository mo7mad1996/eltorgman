<template>
  <div class="canvas-container" ref="canvas"></div>
</template>

<script>
export default {
  name: "Canvas_",
  mounted() {
    if (process.client) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = 520;
      canvas.height = 350;

      class Line {
        constructor(x, y) {
          this.x1 = this.x2 =
            (canvas.width / linesX) * x + canvas.width / linesX / 2;
          this.y1 = this.y2 =
            (canvas.height / linesY) * y + canvas.height / linesY / 2;
        }

        draw() {
          ctx.beginPath();
          ctx.moveTo(this.x1, this.y1);
          ctx.lineTo(this.x2, this.y2);
          ctx.strokeStyle = this.color;
          ctx.stroke();
        }
      }

      ctx.lineCap = "round";
      ctx.lineWidth = 3;

      const linesX = 16;
      const linesY = 15;
      const lines = [];

      for (let x = 0; x < linesX; x++) {
        for (let y = 0; y < linesY; y++) {
          lines.push(new Line(x, y));
        }
      }

      lines.forEach((line) => line.draw());

      this.$refs.canvas.appendChild(canvas);
    }
  },
};
</script>

<style lang="scss" scoped>
.canvas-container {
  position: absolute;
  left: 32vh;
  z-index: 0;
  top: 100px;
}
</style>
