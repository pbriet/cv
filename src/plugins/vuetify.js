import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import fr from 'vuetify/es5/locale/fr'
import colors from '@/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: colors.light,
      dark: colors.dark
    }
  },
  lang: {
    locales: { fr },
    current: 'fr'
  }
})
