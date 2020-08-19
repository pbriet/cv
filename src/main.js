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
    render: (h) => h(App),
    created () {
      this.$store.dispatch('initLang')
    }
}).$mount('#app')
