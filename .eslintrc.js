module.exports = {
  root: true,
  plugins: [
    'vuetify'
  ],
  env : {
    node   : true,
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vuetify/base'
  ],
  globals      : { vm: true },
}