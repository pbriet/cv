import Vue from 'vue'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(helper)

new Vue({
    vuetify,
    store,
    created () {
      this.$store.dispatch('initLang')
    },
    render: (h) => h(App)
}).$mount('#app')
