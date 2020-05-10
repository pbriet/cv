import Vue from 'vue'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(helper)

new Vue({
    vuetify,
    render: (h) => h(App)
}).$mount('#app')
