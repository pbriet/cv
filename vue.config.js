const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  devServer: {
    port: 8080,
    disableHostCheck: true,
    progress: false,
    public: 'cv.localhost'
  },
  configureWebpack: config => {
    return { plugins: [
        new VuetifyLoaderPlugin()
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.sass`
        prependData: `@import "@/variables.sass"`
      }
    }
  }
}