import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { fr } from 'vuetify/locale'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import themes from '@/themes'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import store from './store'

const app = createApp(App, {
  created () {
    this.$store.dispatch('initLang')
  }
})

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: themes.light,
      'custom-dark': themes.dark
    }
  },
  locale: {
    locale: 'fr',
    messages: { fr },
  },
})

app.use(vuetify)
app.use(store)

app.use(helper)

app.mount('#app')
