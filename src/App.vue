<template>
  <v-app>
    <v-main>
      <main-container />
    </v-main>
  </v-app>
</template>

<script>
import MainContainer from '@/Container'

export default {
  name      : 'App',
  components: { MainContainer },
  data () {
    return {}
  },
}
</script>
