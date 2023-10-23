const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        sassOptions: {
          prependData: `@import "@/styles/global.scss";`
        }
      },
    },
  },
});
