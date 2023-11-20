<template>
  <div class="main">
    <div>
      <h1>
        布局
      </h1>
    </div>
    <div id="layout">
      <canvas ref="canvas1" class="canvas" width="1100" height="850"></canvas>
      <canvas ref="canvas2" class="canvas" width="1100" height="850"></canvas>
      <!-- <canvas ref="canvas" width="1920" height="720" v-on:mousemove="handleMouseMove"></canvas>   -->
    </div>
  </div>
</template>

<script>
import indexjs from "./index.js";
export default {
  ...indexjs,
}
</script>

<style scoped>
@import "./index.css";
</style>
