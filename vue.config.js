
module.exports = {
  devServer: {
    port: 8080,
    hot: true,
    host: '0.0.0.0',
    allowedHosts: ['cv.localhost']
  },
  // chainWebpack: config => {
  //   config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
  // },
  css: {
    // use: ['style-loader', 'css-loader', 'sass-loader'],
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/global.sass`
        additionalData: `@import "@/global.sass"`,
        sassOptions: {
          syntax: 'indented'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  }
}