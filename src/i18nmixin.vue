<script>
/*
** Base mixin  translation
*/
import Vue from 'vue'

export default {
  computed: {
    lang () {
      return this.$store.state.lang
    }
  },
  methods: {
    trans (key) {
      return this.translations[key][this.lang]
    },
    transDict (textDict) {
      return textDict[this.lang]
    }
  }
}

</script>
