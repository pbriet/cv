<template>
  <v-card
    id="main-container"
    color="grey lighten-2"
    light
  >
    <v-card-text>
      <content-section
        title="Qui suis-je ?"
      >
        <template slot="short-version">
          Un développeur <b>full-stack</b> et architecte logiciel avec 13 ans d'expérience.<br>
          Un esprit d'entrepreneur, pragmatique, rigoureux et efficace.
        </template>
        <template slot="long-version">
          TODO
        </template>
      </content-section>

      <content-section
        title="Ce que je cherche"
      >
        <template slot="short-version">
          Un nouveau défi à relever, pour évoluer techniquement et humainement.<br>
          Idéalement orienté <b>Devops</b>, mais possiblement IA ou autre.
        </template>
        <template slot="long-version">
          TODO
        </template>
      </content-section>


      <content-section
        id="skills-list"
        title="Compétences techniques"
        mono-version
      >
        <v-select
          v-model="techTypes"
          :items="techTypesChoices"
          item-text="label"
          item-value="value"
          label="Type"
        />
        <v-container id="tech-list">
          <transition-group
            id="tech-transition-group"
            name="list"
            tag="div"
          >
            <div
              v-for="tech in filteredTechs"
              :key="tech.name"
              class="tech-col"
            >
              <v-card
                class="tech"
              >
                <v-card-title>
                  <v-icon
                    v-if="tech.icon"
                    large
                    left
                  >
                    {{ tech.icon }}
                  </v-icon>
                  <v-img
                    v-if="tech.svg"
                    :src="tech.svg"
                  />
                  <span class="tech-title">
                    {{ tech.name }}
                  </span>
                </v-card-title>

                <v-card-text>
                  <div class="headline">
                    {{ tech.experience }}
                  </div>
                  années<br>

                  <span
                    class="medal-badge"
                    :color="tech.medal"
                  />
                </v-card-text>
              </v-card>
            </div>
          </transition-group>
        </v-container>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/content/Section'

export default {
  name      : 'MainContent',
  components: { ContentSection },
  data () {
    return {
      techTypes: 'all',
      techTypesChoices: [
        { value: 'all', label: 'Toutes' },
        { value: 'back', label: 'Backend' },
        { value: 'front', label: 'Frontend' },
        { value: 'devops', label: 'DevOps' }
      ],
      techs: [
        {
          categories: ['front'],
          icon: 'mdi-vuejs',
          name: 'VueJS',
          medal: 'silver',
          experience: 3
        },
        {
          categories: ['back'],
          icon: 'mdi-language-python',
          name: 'Python',
          medal: 'gold',
          experience: 13
        },
        {
          categories: ['back'],
          svg: '/img/techs/django.svg',
          name: 'Django',
          medal: 'gold',
          experience: 7
        },
        {
          categories: ['devops'],
          icon: 'mdi-docker',
          name: 'Docker',
          medal: 'silver',
          experience: 4
        },
        {
          categories: ['devops'],
          icon: 'mdi-ansible',
          name: 'Ansible',
          medal: 'silver',
          experience: 7
        },
      ]
    }
  },
  computed: {
    filteredTechs () {
      let res = []
      for (var tech of this.techs) {
        tech = JSON.parse(JSON.stringify(tech))
        if (this.techTypes !== 'all' && !tech.categories.includes(this.techTypes)) {
          continue
        }
        res.push(tech)
      }
      return res
    }
  }
}
</script>

<style scoped lang="sass">
.title
  border-bottom: 2px #bfbfbf solid
  line-height: 1.5 !important

.progress
  margin-top: 0.1rem

.tech
  margin-top: 10px
  padding-right: 30px
  display: inline-block
  .v-image
    max-width: 36px
    max-height: 36px
    margin-left: 5px
    margin-right: 5px
    -webkit-filter: grayscale(100%)
    display: inline-block

  &:hover
    box-shadow: 0px 12px 4px -8px $secondary-color, 0px 8px 8px 0px $secondary-color, 0px 4px 20px 0px $secondary-color

#tech-list
  padding-top: 20px


.list-move
  transition: all 1s

.list-leave-active
  position: absolute

.list-leave-to, .list-enter
  opacity: 0


#tech-transition-group

  width: 100%
  display: flex
  flex: 1 1 auto
  flex-wrap: wrap
  justify-content: space-around !important

  .tech-col
    display: flex
    flex: 0 0 20%
    margin-left: 10px
    margin-right: 10px
    justify-content: space-around
    transition: all 1s

</style>
