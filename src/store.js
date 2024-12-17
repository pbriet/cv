import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: 'FR'
  },
  mutations: {
    setLang (state, value) {
      state.lang = value
    }
  },
  actions: {
    initLang (context) {
      const urlParams = new URLSearchParams(window.location.search);
      var lang = urlParams.get('lang');
      if (!lang) {
        return
      }
      context.commit('setLang', lang)
    }
  }
})

