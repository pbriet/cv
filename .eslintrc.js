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
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vuetify/no-deprecated-classes': 'error'
  },
  parserOptions: { parser: 'babel-eslint' },
  globals      : { vm: true },
}
