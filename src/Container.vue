<template>
  <v-app id="dark-template">
    <div
      id="print-header"
      class="d-none d-print-block"
    >
      Retrouvez ce CV sous format interactif :
      <a
        href="https://pbriet.github.io"
        target="_blank"
      >
        https://pbriet.github.io
      </a>
    </div>
    <div id="flags">
      <a
        v-for="lang in langs"
        :key="lang"
        :href="lang_href(lang)"
      >
        {{ lang }}
      </a>
    </div>
    <v-fade-transition
      mode="out-in"
      type="animation"
    >
      <v-main>
        <v-container
          fluid
          fill-height
        >
          <v-layout
            align-center
            justify-center
          >
            <v-flex
              lg10
              sm12
            >
              <v-layout wrap>
                <v-flex
                  sm4
                >
                  <sidebar-container class="fill-height" />
                </v-flex>
                <v-flex
                  sm8
                >
                  <content-container class="fill-height" />
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
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
  data () {
    return {
      langs: ['FR', 'EN']
    }
  },
  methods: {
    lang_href (lang) {
      return '?lang=' + lang
    }
  }
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

<style lang="sass">
body, .v-card__subtitle, .v-card__text
    font-size: 0.95rem
    line-height: 1.4rem

@media print
  @page
    size: 420mm 594mm
    margin: 0mm

#print-header
  padding: 30px 0px 10px 0px
  text-align: center
  font-size: 22px

#flags
  text-align: center
  a:not(:first-child)
    margin-left: 10px

  a.active
    text-decoration: none
    color: black
    font-weight: bold

</style>