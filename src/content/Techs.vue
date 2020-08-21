<template>
  <div>
    <v-row
      id="tech-filters"
      align="start"
      class="d-print-none"
    >
      <v-col
        id="tech-type-select-col"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-select
          v-model="techTypes"
          :items="trans('TECH_TYPE_CHOICES')"
          item-text="label"
          item-value="value"
          label="Type"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          v-model="levels"
          multiple
          chips
          :items="trans('LEVEL_CHOICES')"
          item-text="label"
          item-value="value"
          :label="trans('LEVEL')"
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
          :key="tech.icon"
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
                    <template v-if="tech.name.FR">
                      {{ transDict(tech.name) }}
                    </template>
                    <template v-else>
                      {{ tech.name }}
                    </template>
                  </span>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-text>
              <div v-if="tech.experience">
                <div class="headline">
                  {{ tech.experience }} {{ trans('YEARS') }}
                </div>
              </div>
              <div v-if="tech.details" class="tech-details">
                <ul>
                  <li v-for="detail in transDict(tech.details)" :key="detail">
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
import I18nMixin from '@/i18nmixin'

export default {
  name: 'Techs',
  mixins: [I18nMixin],
  props: ['detailed'],
  data () {
    return {
      translations: {
        LEVEL: {
          'FR': 'Niveau',
          'EN': 'Level'
        },
        YEARS: {
          'FR': 'années',
          'EN': 'years'
        },
        TECH_TYPE_CHOICES: {
          'FR': [
            { value: 'all', label: 'Toutes' },
            { value: 'back', label: 'Backend' },
            { value: 'front', label: 'Frontend' },
            { value: 'devops', label: 'DevOps / Système' }
          ],
          'EN': [
            { value: 'all', label: 'All' },
            { value: 'back', label: 'Backend' },
            { value: 'front', label: 'Frontend' },
            { value: 'devops', label: 'DevOps / Sysadmin' }
          ],
        },
        LEVEL_CHOICES: {
          'FR': [
            { value: 'expert', label: 'Expert' },
            { value: 'high', label: 'Avancé' },
            { value: 'medium', label: 'Moyen' },
          ],
          'EN': [
            { value: 'expert', label: 'Expert' },
            { value: 'high', label: 'Proficient' },
            { value: 'medium', label: 'Competent' },
          ]
        }
      },
      techTypes: 'all',
      levels: ['expert', 'high'],
      techs: [
        {
          categories: ['back'],
          icon: 'mdi-language-python',
          name: 'Python',
          level: 'expert',
          experience: 13,
          details: {
            'FR': [
              '100% orienté objet',
              'Tout l\'univers du web',
              'Bibliothèques scientifiques (numpy, matplotlib, ...)',
              'Bonne maîtrise des mécanismes internes'
            ],
            'EN': [
              '100% object-oriented',
              'Web frameworks and libraries',
              'Scientific libraries (numpy, matplotlib, ...)',
              'Good knowledge of internals'
            ]
          }
        },
        {
          categories: ['back'],
          img: '/img/techs/django.svg',
          name: 'Django',
          level: 'expert',
          experience: 7,
          details: {
            'FR': [
              'API REST',
              'ORM, MongoEngine, migrations, optimisation',
              'Middlewares, widgets, templatetags, cache, ...',
              'Celery'
            ],
            'EN': [
              'REST API',
              'ORM, MongoEngine, migrations, optimization',
              'Middlewares, widgets, templatetags, cache, ...',
              'Celery'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-docker',
          name: 'Docker',
          level: 'high',
          experience: 4,
          details: {
            'FR': [
              'Projets multi-containers avec Docker-compose',
              'Volumes, réseaux',
              'Multi-stage builds, optimisations, ...'
            ],
            'EN': [
              'Container orchestration with Docker-compose',
              'Volumes, networks',
              'Multi-stage builds, optimizations, ...'
            ]
          }
        },
        {
          categories: ['front'],
          icon: 'mdi-vuejs',
          name: 'VueJS',
          level: 'high',
          experience: 3,
          details: {
            'FR': [
              'Développement de gros projets SPA',
              'VueX, Vuetify, Vue-router'
            ],
            'EN':  [
              'Large SPA projects',
              'VueX, Vuetify, Vue-router'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-ansible',
          name: 'Ansible',
          level: 'high',
          experience: 7,
          details: {
            'FR': [
              'Déploiement de projets iso dev/staging/prod',
              'Rôles, templates, handlers'
            ],
            'EN': [
              'Multi-environment deployments (dev/staging/prod)',
              'Roles, templates, handlers'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-linux',
          name: 'Linux',
          level: 'high',
          experience: 9,
          details: {
            'FR': [
              'Administration : utilisateurs, SSH, sudoers',
              'Gestion de paquets. Installations / Configurations.',
              'cron, systemd, rotation de logs',
              'Distribs : Debian, Ubuntu. Egalement : Alpine'
            ],
            'EN': [
              'Users management: SSH, sudoers',
              'Package management',
              'cron, systemd, logs analysis',
              'Debian, Ubuntu. A little bit of Alpine'
            ]
          }
        },
        {
          categories: ['front'],
          icon: 'mdi-angular',
          name: 'AngularJS',
          level: 'high',
          experience: 4,
          details: {
            'FR': [
              'Gros projet SPA',
              'Problématiques de SEO (génération statique)'
            ],
            'EN': [
              'Large SPA project',
              'Handling of SEO issues (static serving)'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-kubernetes',
          name: 'Kubernetes',
          level: 'high',
          experience: 2,
          details: {
            'FR': [
              'Configuration from scratch sur 2 projets',
              'Google Cloud, Amazon EKS (kube2iam, ALB, external-secrets)',
              'Skaffold, Helm, Minikube',
              'Configs, Secrets, Jobs, Deployment, Ingress, Services',
              'Ligne de commande'
            ],
            'EN': [
              'Configuring 2 projects from scratch',
              'Google Cloud, Amazon EKS (kube2iam, ALB, external-secrets)',
              'Skaffold, Helm, Minikube',
              'Configs, Secrets, Jobs, Deployment, Ingress, Services',
              'Command line tool'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-source-branch',
          name: 'GIT',
          level: 'high',
          experience: 9,
          details: {
            'FR': [
              'Utilisation quotidienne',
              'clone, checkout, commit, pull, push, logs, ...',
              'Rarement : cherry-pick, rebase'
            ],
            'EN': [
              'Daily use',
              'clone, checkout, commit, pull, push, logs, ...',
              'Rarely: cherry-pick, rebase'
            ]
          }
        },
        {
          categories: ['front'],
          icon: 'mdi-webpack',
          name: 'Webpack',
          level: 'medium',
          experience: 2,
          details: {
            'FR': [
              'Configuration pour VueJS (via vue-cli)',
              'Quelques customisations (configureWebpack, chainWebpack, ...)'
            ],
            'EN': [
              'VueJS configurations (vue-cli)',
              'Customizations (configureWebpack, chainWebpack, ...)'
            ]
          }
        },
        {
          categories: ['back'],
          icon: 'mdi-database-search',
          name: 'SQL',
          level: 'high',
          experience: 9,
          details: {
            'FR': [
              'Requêtage (direct ou via ORM)',
              'PostgreSQL, MySQL',
              'Administration : uniquement les bases',
              'Optimisation de requêtes'
            ],
            'EN': [
              'Queries (raw or through ORM)',
              'PostgreSQL, MySQL',
              'Basic administration knowledge',
              'Query optimizations'
            ]
          }
        },
        {
          categories: ['back'],
          img: '/img/techs/mongo.jpeg',
          name: 'MongoDB',
          level: 'medium',
          experience: 9,
          details: {
            'FR': [
              'Requêtage (direct ou via ORM)',
              'MongoAtlas'
            ],
            'EN': [
              'Queries (raw or through ORM)',
              'MongoAtlas'
            ]
          }
        },
        {
          categories: ['back'],
          icon: 'mdi-language-cpp',
          name: 'C++',
          level: 'high',
          experience: 8,
          details: {
            'FR': [
              'Utilisation avancée (méthodes templatées)',
              'Peu manipulé ces dernières années'
            ],
            'EN': [
              'Advanced usage (templated methods)',
              'No project in recent years'
            ]
          }
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
          details: {
            'FR': [
              'Longue expérience (jQuery, AngularJS, VueJS, ES6)',
              'Uniquement côté client (pas de NodeJS)'
            ],
            'EN': [
              'Longtime experience (jQuery, AngularJS, VueJS, ES6)',
              'Only client-side (no NodeJS)'
            ]
          }
        },
        {
          categories: ['back'],
          img: '/img/techs/flask.png',
          name: 'Flask',
          level: 'medium',
          experience: 3,
          details: {
            'FR': [
              'API REST',
              'Flask-cors, Flask-jwt, Flask-socketio'
            ],
            'EN': [
              'API REST',
              'Flask-cors, Flask-jwt, Flask-socketio'
            ]
          }
        },
        {
          categories: ['back'],
          icon: 'mdi-cogs',
          name: { 'FR': 'Algorithmie', 'EN': 'Algorithms' },
          level: 'high',
          details: {
            'FR': [
              'Spécialisation master',
              'Datamining',
              'Optimisation avec heuristique'
            ],
            'EN': [
              'Datamining',
              'Optimization with meta-heuristics'
            ]
          }
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
    page-break-inside: avoid !important
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


  @media screen and (max-width: 640px)
    .tech-col
      flex: 0 0 100%
    &.small-techs .tech-col
      flex: 0 0 30%

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
