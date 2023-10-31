<template>
  <div class="main">
    <div id="layout">
      <canvas ref="canvas1" class="canvas" width="1100" height="850"></canvas>
      <canvas ref="canvas2" class="canvas" width="1100" height="850"></canvas>
      <!-- <canvas ref="canvas" width="1920" height="720" v-on:mousemove="handleMouseMove"></canvas>   -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctx: null,
      cars: [
        // 添加更多小车数据...
        { x: 0, y: 0, default: 2, color: 1 },
        { x: 0, y: 0, default: 5, color: 1 },
        { x: 0, y: 0, default: 7, color: 1 },
        { x: 0, y: 0, default: 10, color: 2 },
        { x: 0, y: 0, default: 14, color: 1 },
        { x: 0, y: 0, default: 25, color: 1 },
        { x: 0, y: 0, default: 30, color: 3 },
        { x: 0, y: 0, default: 35, color: 1 },
        { x: 0, y: 0, default: 40, color: 2 },
        { x: 0, y: 0, default: 44, color: 1 },
      ],
      mapCoordinateList: [
        //第一行
        { x: 0, y: 100 },
        { x: 100, y: 100 },
        { x: 200, y: 100 },
        { x: 300, y: 100 },
        { x: 400, y: 100 },
        { x: 500, y: 100 },
        { x: 600, y: 100 },
        { x: 700, y: 100 },
        { x: 800, y: 100 },
        { x: 900, y: 100 },
        { x: 1000, y: 100 },
        // 第二行
        { x: 1000, y: 200 },
        { x: 1000, y: 300 },
        // 第三行
        { x: 900, y: 300 },
        { x: 800, y: 300 },
        { x: 700, y: 300 },
        // 第四行
        { x: 700, y: 400 },
        { x: 700, y: 500 },
        // 第五行
        { x: 800, y: 500 },
        { x: 900, y: 500 },
        { x: 1000, y: 500 },
        // 第六行
        { x: 1000, y: 600 },
        { x: 900, y: 600 },
        { x: 800, y: 600 },
        { x: 700, y: 600 },
        // 第七行
        { x: 700, y: 700 },
        { x: 700, y: 800 },
        // 第八行
        { x: 600, y: 800 },
        // 第九行
        { x: 600, y: 700 },
        { x: 600, y: 600 },
        { x: 600, y: 500 },
        { x: 600, y: 400 },
        { x: 600, y: 300 },
        // 第十行
        { x: 500, y: 300 },
        { x: 400, y: 300 },
        { x: 300, y: 300 },
        // 第十一行
        { x: 300, y: 400 },
        { x: 300, y: 500 },
        { x: 300, y: 600 },
        { x: 300, y: 700 },
        { x: 300, y: 800 },
        // 第十二行
        { x: 200, y: 800 },
        { x: 200, y: 700 },
        { x: 200, y: 600 },
        { x: 200, y: 500 },
        { x: 200, y: 400 },
        { x: 200, y: 300 },
        // 第十三行
        { x: 100, y: 300 },
        { x: 0, y: 300 },
        // 第十四行
        { x: 0, y: 200 },
      ],
      colors: ["green", "red", "yellow"],
      moveLen: 0,
    };
  },
  // 类似程序main函数进口
  mounted() {
    // this.canvas = this.$refs.canvas;
    // this.ctx = this.$refs.canvas.getContext("2d");
    this.handleCanvasBG();
    // this.setCarCoordinate();
    // this.animate();
    this.setCarCoordinate();
    const timer = setInterval(() => {
      this.animate();
    }, 10);

    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
  methods: {
    setCarCoordinate() {
      const len = this.mapCoordinateList.length;
      this.cars.forEach((car) => {
        car.x = this.mapCoordinateList[car.default].x;
        car.y = this.mapCoordinateList[car.default].y;
        if (car.default < len - 1) {
          car.default++;
        } else {
          car.default = 0;
        }
      });
    },
    animate() {
      const canvas2 = this.$refs.canvas2;
      const ctx = canvas2.getContext("2d");
      // 清除canvas
      ctx.clearRect(-11, -6, canvas2.width, canvas2.height);
      // 绘制小车轨迹
      // ctx.beginPath();
      this.cars.forEach((car) => {
        switch (car.color) {
          case 1:
            ctx.strokeStyle = "green";
            break;
          case 2:
            ctx.strokeStyle = "red";
            break;
          default:
            ctx.strokeStyle = "yellow";
            break;
        }
        const valx = this.mapCoordinateList[car.default].x;
        const valy = this.mapCoordinateList[car.default].y;
        if (valx - car.x + valy - car.y == 0) {
          this.setCarCoordinate();
          return;
        }
        if (valx - car.x + valy - car.y > 0) {
          car.x == this.mapCoordinateList[car.default].x
            ? (car.y += 1)
            : (car.x += 1);
        } else {
          car.x == this.mapCoordinateList[car.default].x
            ? (car.y -= 1)
            : (car.x -= 1);
        }
        ctx.lineWidth = 20;
        ctx.strokeRect(car.x, car.y, 20, 10);
        ctx.moveTo(car.x, car.y);
        // ctx.lineTo(valx, valy);
      });
      ctx.stroke();

      // 更新小车位置并重绘
      // this.cars[0].x += this.cars[0].dx;
      // this.cars[0].y += this.cars[0].dy;
      // console.log(this.canvas.width)
      // if (this.cars[0].x > canvas2.width) {
      //   this.cars[0].x = 0;
      //   this.cars[0].y = 0;
      // }
    },
    handleCanvasBG() {
      const canvas1 = this.$refs.canvas1;
      const ctx = canvas1.getContext("2d");
      ctx.beginPath();
      this.mapCoordinateList.forEach((item, index) => {
        if (index + 1 < this.mapCoordinateList.length) {
          ctx.moveTo(item.x, item.y);
          ctx.lineTo(
            this.mapCoordinateList[index + 1].x,
            this.mapCoordinateList[index + 1].y
          );
        } else {
          ctx.moveTo(item.x, item.y);
          ctx.lineTo(this.mapCoordinateList[0].x, this.mapCoordinateList[0].y);
        }
      });
      ctx.stroke();
    },
  },
};
</script>

<style scoped>
.main {
  position: relative;
  background-color: #ffffff;
  padding-top: 10px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  min-height: 800px;
}

.canvas {
  position: absolute;
  left: 300px;
  overflow: scroll;
}
</style>
