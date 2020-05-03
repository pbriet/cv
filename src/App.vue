<template>
  <v-app>
    <v-content>
      <main-container />
    </v-content>
  </v-app>
</template>

<script>
import MainContainer from '@/views/Container'

export default {
  name      : 'App',
  components: { MainContainer },
  data () {
    return {}
  },
}
</script>
