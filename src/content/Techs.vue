<template>
  <div>
    <v-row
      id="tech-filters"
      align="start"
    >
      <v-col
        id="tech-type-select-col"
        cols="6"
        lg="4"
      >
        <v-select
          v-model="techTypes"
          :items="techTypesChoices"
          item-text="label"
          item-value="value"
          label="Type"
        />
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="levels"
          multiple
          chips
          :items="levelChoices"
          item-text="label"
          item-value="value"
          label="Niveau"
        />
      </v-col>
    </v-row>
    <v-container
      id="tech-list"
      :class="{ 'small-techs': !detailed }"
    >
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
              <v-row align="center">
                <v-col :cols="nbColsIcon(detailed)">
                  <v-icon
                    v-if="tech.icon"
                    :large="detailed"
                    left
                  >
                    {{ tech.icon }}
                  </v-icon>
                  <v-img
                    v-if="tech.img"
                    :src="tech.img"
                  />
                </v-col>
                <v-col :cols="nbColsTechTitle(detailed)">
                  <span class="tech-title">
                    {{ tech.name }}
                  </span>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-text>
              <div v-if="tech.experience">
                <div class="headline">
                  {{ tech.experience }}
                </div>
                années<br>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </transition-group>
    </v-container>
  </div>
</template>


<script>
export default {
  name: 'Techs',
  props: ['detailed'],
  data () {
    return {
      techTypes: 'all',
      techTypesChoices: [
        { value: 'all', label: 'Toutes' },
        { value: 'back', label: 'Backend' },
        { value: 'front', label: 'Frontend' },
        { value: 'devops', label: 'DevOps / Système' }
      ],
      levels: ['expert', 'high'],
      levelChoices : [
        { value: 'expert', label: 'Expert' },
        { value: 'high', label: 'Avancé' },
        { value: 'medium', label: 'Moyen' },
      ],
      techs: [
        {
          categories: ['back'],
          icon: 'mdi-language-python',
          name: 'Python',
          level: 'expert',
          experience: 13
        },
        {
          categories: ['back'],
          img: '/img/techs/django.svg',
          name: 'Django',
          level: 'expert',
          experience: 7
        },
        {
          categories: ['devops'],
          icon: 'mdi-docker',
          name: 'Docker',
          level: 'high',
          experience: 4
        },
        {
          categories: ['front'],
          icon: 'mdi-vuejs',
          name: 'VueJS',
          level: 'high',
          experience: 3
        },
        {
          categories: ['devops'],
          icon: 'mdi-ansible',
          name: 'Ansible',
          level: 'high',
          experience: 7
        },
        {
          categories: ['devops'],
          icon: 'mdi-linux',
          name: 'Linux',
          level: 'high',
          experience: 9
        },
        {
          categories: ['front'],
          icon: 'mdi-angular',
          name: 'AngularJS',
          level: 'high',
          experience: 4
        },
        {
          categories: ['devops'],
          icon: 'mdi-kubernetes',
          name: 'Kubernetes',
          level: 'high',
          experience: 2
        },
        {
          categories: ['devops'],
          icon: 'mdi-source-branch',
          name: 'GIT',
          level: 'high',
          experience: 9
        },
        {
          categories: ['front'],
          icon: 'mdi-webpack',
          name: 'Webpack',
          level: 'medium',
          experience: 2
        },
        {
          categories: ['back'],
          icon: 'mdi-database-search',
          name: 'SQL',
          level: 'high',
          experience: 9
        },
        {
          categories: ['back'],
          img: '/img/techs/mongo.jpeg',
          name: 'MongoDB',
          level: 'medium',
          experience: 9
        },
        {
          categories: ['back'],
          icon: 'mdi-language-cpp',
          name: 'C++',
          level: 'high',
          experience: 8
        },
        {
          categories: ['front'],
          icon: 'mdi-language-html5',
          name: 'HTML',
          level: 'high',
          experience: 14
        },
        {
          categories: ['front'],
          icon: 'mdi-language-javascript',
          name: 'Javascript',
          level: 'high',
          experience: 10
        },
        {
          categories: ['back'],
          img: '/img/techs/flask.png',
          name: 'Flask',
          level: 'medium',
          experience: 10
        },
        {
          categories: ['back'],
          icon: 'mdi-cogs',
          name: 'Algorithmie',
          level: 'high'
        },
      ],
      experiences: [
        { date: '2016-2020',
          company: 'Les Octets Libres',
          content: 'Yay' },
        { date: '2013-2015',
          company: 'Cook&Be',
          content: 'Yay' },
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
        if (!this.levels.includes(tech.level)) {
          continue
        }
        res.push(tech)
      }
      return res
    }
  },
  methods: {
    nbColsIcon (detailed) {
      if (detailed) {
        return 3
      }
      return 4
    },
    nbColsTechTitle (detailed) {
      if (detailed) {
        return 9
      }
      return 8
    }
  }
}
</script>

<style lang="sass">
#tech-filters
  .v-text-field__details
    display: none
</style>

<style scoped lang="sass">

#tech-filters
  .v-select
    max-height: 40px

#tech-type-select-col
  padding-top: 21px

.tech
  margin-top: 10px
  width: 100%
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

  .tech-col
    display: flex
    flex: 0 0 30%
    justify-content: space-around
    transition: all 1s

  &.small-techs
    .tech-col
      flex: 0 0 18%
      .v-card__title
        font-size: 0.8em
        line-height: 0.8em
      .v-card__text
        display: none
      .v-image
        max-width: 24px
        max-height: 24px


#tech-transition-group

  width: 100%
  display: flex
  flex: 1 1 auto
  flex-wrap: wrap
  justify-content: space-around !important


.list-move
  transition: all 1s

.list-leave-active
  position: absolute

.list-leave-to, .list-enter
  opacity: 0


</style>
