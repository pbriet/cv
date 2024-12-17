<template>
  <v-app id="dark-template">
    <div
      id="print-header"
      class="d-none d-print-block"
    >
      {{ trans('SEE_CV') }}
      <a
        href="https://pbriet.github.io"
        target="_blank"
      >
        https://pbriet.github.io?lang={{ lang }}
      </a>
    </div>
    <div id="flags" class="d-print-none">
      <a
        v-for="langOption in langs"
        :key="langOption"
        :href="lang_href(langOption)"
      >
        {{ langOption }}
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
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              lg="10"
              sm="12"
            >
              <v-row no-gutters>
                <v-col
                  sm="4"
                  id="sidebar-column"
                >
                  <sidebar-container class="fill-height" />
                </v-col>
                <v-col
                  sm="8"
                  id="content-column"
                >
                  <content-container class="fill-height" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-fade-transition>
  </v-app>
</template>

<script>
import SidebarContainer from '@/sidebar/Container'
import ContentContainer from '@/content/Container'
import I18nMixin from '@/i18nmixin'

export default {
  name: 'MainContainer',
  mixins: [I18nMixin],
  components: {
    ContentContainer,
    SidebarContainer,
  },
  data () {
    return {
      langs: ['FR', 'EN'],
      translations: {
        'SEE_CV': {
          'FR': 'Retrouvez ce CV sous format interactif :',
          'EN': 'Read this CV in interactive mode at'
        }
      }
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

  #sidebar-column
    flex-basis: 25%

  #content-column
    flex-basis: 75%

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