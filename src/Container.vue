<template>
  <v-app id="dark-template">
    <v-fade-transition
      mode="out-in"
      type="animation"
    >
      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-layout
            align-center
            justify-center
          >
            <v-flex
              md10
              sm12
            >
              <v-layout wrap>
                <v-flex
                  md4
                >
                  <sidebar-container class="fill-height" />
                </v-flex>
                <v-flex
                  md8
                >
                  <content-container class="fill-height" />
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-fade-transition>
  </v-app>
</template>

<script>
import SidebarContainer from '@/sidebar/Container'
import ContentContainer from '@/content/Container'

export default {
  name      : 'MainContainer',
  components: {
    ContentContainer,
    SidebarContainer,
  },
}
</script>

<style scoped lang="sass">
#dark-template
  height: 100%
  background: $bgcolor-1
  background: -webkit-linear-gradient(to left, $bgcolor-1, $bgcolor-2)
  background: linear-gradient(to left, $bgcolor-1, $bgcolor-2)
  background-size: cover
</style>
