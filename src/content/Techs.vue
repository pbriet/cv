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
              <v-row justify="center">
                <v-col :cols="nbColsIcon(detailed)" class="text-center">
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
                <v-col :cols="nbColsTechTitle(detailed)"  class="text-center">
                  <span class="tech-title">
                    {{ tech.name }}
                  </span>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-text>
              <div v-if="tech.experience">
                <div class="headline">
                  {{ tech.experience }} années
                </div>
              </div>
              <div v-if="tech.details" class="tech-details">
                <ul>
                  <li v-for="detail in tech.details" :key="detail">
                    {{ detail }}
                  </li>
                </ul>
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
          experience: 13,
          details: [
            '100% orienté objet',
            'Tout l\'univers du web',
            'Bibliothèques scientifiques (numpy, matplotlib, ...)',
            'Bonne maîtrise des mécanismes internes'
          ]
        },
        {
          categories: ['back'],
          img: '/img/techs/django.svg',
          name: 'Django',
          level: 'expert',
          experience: 7,
          details: [
            'API REST',
            'ORM, MongoEngine, migrations, optimisation',
            'Middlewares, widgets, templatetags, cache, ...',
            'Celery'
          ]
        },
        {
          categories: ['devops'],
          icon: 'mdi-docker',
          name: 'Docker',
          level: 'high',
          experience: 4,
          details: [
            'Projets multi-containers avec Docker-compose',
            'Volumes, réseaux',
            'Multi-stage builds, optimisations, ...'
          ]
        },
        {
          categories: ['front'],
          icon: 'mdi-vuejs',
          name: 'VueJS',
          level: 'high',
          experience: 3,
          details: [
            'Développement de gros projets SPA',
            'VueX, Vuetify, Vue-router'
          ]
        },
        {
          categories: ['devops'],
          icon: 'mdi-ansible',
          name: 'Ansible',
          level: 'high',
          experience: 7,
          details: [
            'Déploiement de projets iso dev/staging/prod',
            'Rôles, templates, handlers'
          ]
        },
        {
          categories: ['devops'],
          icon: 'mdi-linux',
          name: 'Linux',
          level: 'high',
          experience: 9,
          details: [
            'Administration : utilisateurs, SSH, sudoers',
            'Gestion de paquets. Installations / Configurations.',
            'cron, systemd, rotation de logs',
            'Distris : Debian, Ubuntu. Egalement : Alpine'
          ]
        },
        {
          categories: ['front'],
          icon: 'mdi-angular',
          name: 'AngularJS',
          level: 'high',
          experience: 4,
          details: [
            'Gros projet SPA',
            'Problématiques de SEO (génération statique)'
          ]
        },
        {
          categories: ['devops'],
          icon: 'mdi-kubernetes',
          name: 'Kubernetes',
          level: 'high',
          experience: 2,
          details: [
            'Configuration from scratch sur 2 projets',
            'Google Cloud, Amazon EKS (kube2iam, ALB, external-secrets)',
            'Skaffold, Helm, Minikube',
            'Configs, Secrets, Jobs, Deployment, Ingress, Services',
            'Ligne de commande'
          ]
        },
        {
          categories: ['devops'],
          icon: 'mdi-source-branch',
          name: 'GIT',
          level: 'high',
          experience: 9,
          details: [
            'Utilisation quotidienne',
            'clone, checkout, commit, pull, push, logs, ...',
            'Rarement : cherry-pick, rebase'
          ]
        },
        {
          categories: ['front'],
          icon: 'mdi-webpack',
          name: 'Webpack',
          level: 'medium',
          experience: 2,
          details: [
            'Configuration pour VueJS (via vue-cli)',
            'Quelques customisations (configureWebpack, chainWebpack, ...)'
          ]
        },
        {
          categories: ['back'],
          icon: 'mdi-database-search',
          name: 'SQL',
          level: 'high',
          experience: 9,
          details: [
            'Requêtage (direct ou via ORM)',
            'PostgreSQL, MySQL',
            'Administration : uniquement les bases',
            'Optimisation de requêtes'
          ]
        },
        {
          categories: ['back'],
          img: '/img/techs/mongo.jpeg',
          name: 'MongoDB',
          level: 'medium',
          experience: 9,
          details: [
            'Requêtage (direct ou via ORM)',
            'MongoAtlas'
          ]
        },
        {
          categories: ['back'],
          icon: 'mdi-language-cpp',
          name: 'C++',
          level: 'high',
          experience: 8,
          details: [
            'Utilisation avancée (méthodes templatées)',
            'Peu manipulé ces dernières années'
          ]
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
          experience: 10,
          details: [
            'Longue expérience (jQuery, AngularJS, VueJS, ES6)',
            'Uniquement côté client (pas de NodeJS)'
          ]
        },
        {
          categories: ['back'],
          img: '/img/techs/flask.png',
          name: 'Flask',
          level: 'medium',
          experience: 3,
          details: [
            'API REST',
            'Flask-cors, Flask-jwt, Flask-socketio'
          ]
        },
        {
          categories: ['back'],
          icon: 'mdi-cogs',
          name: 'Algorithmie',
          level: 'high',
          details: [
            'Spécialisation master',
            'Datamining',
            'Optimisation avec heuristique'
          ]
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
      return 12
    },
    nbColsTechTitle (detailed) {
      if (detailed) {
        return 9
      }
      return 12
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

  .tech-details
    padding-top: 10px
    font-size: 0.85rem
    ul
      padding-left: 15px


#tech-list
  padding-top: 20px

  .tech-col
    display: flex
    flex: 0 0 30%
    justify-content: space-around
    transition: transform 0.8s ease

  &.small-techs
    .tech-col
      flex: 0 0 15%
      .v-card__title
        font-size: 0.8em
        line-height: 0.8em
        padding: 2px
      .v-card__text
        display: none
      .v-image
        max-width: 24px
        max-height: 24px

  &:not(.small-techs)
    .v-card__title
      height: 80px



#tech-transition-group

  width: 100%
  display: flex
  flex: 1 1 auto
  flex-wrap: wrap
  justify-content: space-around !important


.list-move
  transition: transform 0.8s ease

.list-leave-active
  position: absolute

.list-leave-to, .list-enter
  opacity: 0


</style>
