const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭遮罩层报错
  devServer: {
    // 配置 start
    client: {
      overlay: false
    },
    // 配置 end
  }
})
