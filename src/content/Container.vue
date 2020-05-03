<template>
  <v-card
    color="grey lighten-2"
    light
    id="main-container"
  >
    <v-card-text>
      <content-section
        title="Qui suis-je ?"
      >
        <template slot="short-version">
          Un développeur <b>full-stack</b> et architecte logiciel avec 13 ans d'expérience.<br/>
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
          Un nouveau défi à relever, pour évoluer techniquement et humainement.<br/>
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
        <div id="tech-list">
          <div
            class="tech"
            v-for="tech in techs"
            :key="tech.icon"
          >
            <v-hover
              v-slot:default="{ hover }"
            >
              <v-badge
                :value="!!tech.medal"
                :color="tech.medal"
                class="medal-badge"
                content=""
                bottom
                :offset-y="15"
                :offset-x="15"
              >
                <v-badge
                color="secondary darken-3"
                :content="tech.experience"
                >
                  <v-icon
                    v-if="tech.icon"
                    large
                    :color="hover ? 'secondary darken-3' : 'grey'">
                    {{ tech.icon }}
                  </v-icon>
                  <v-img
                    v-if="tech.svg"
                    :src="tech.svg"
                  >
                  </v-img>
                  <div class="tech-name" :class="{'with-details': hover}">
                    {{ tech.name }}
                  </div>
                </v-badge>
              </v-badge>
            </v-hover>
          </div>
        </div>
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
      techs: [
        {
          categories: ['front'],
          icon: 'mdi-vuejs',
          name: 'VueJS',
          medal: 'silver',
          experience: 3
        },
        {
          category: ['back'],
          icon: 'mdi-language-python',
          name: 'Python',
          medal: 'gold',
          experience: 13
        },
        {
          category: ['back'],
          svg: '/img/techs/django.svg',
          name: 'Django',
          medal: 'gold',
          experience: 7
        },
        {
          category: ['devops'],
          icon: 'mdi-docker',
          name: 'Docker',
          medal: 'silver',
          experience: 4
        },
        {
          category: ['devops'],
          icon: 'mdi-ansible',
          name: 'Ansible',
          medal: 'silver',
          experience: 7
        },
      ]
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
  padding-right: 30px
  display: inline-block
  .v-image
    max-width: 36px
    max-height: 36px
    color: grey
    display: inline-block

#tech-list
  padding-top: 20px

.tech-name
  display: inline-block
  overflow: hidden
  overflow-wrap: normal
  max-width: 0px
  -webkit-transition: max-width 1s ease
  transition: max-width 1s ease

  &.with-details
    max-width: 200px
    padding-right: 10px

.medal-badge .v-badge__badge
  min-width: 15px
  height: 15px
</style>
