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
          item-title="label"
          item-value="value"
          label="Type"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="levels"
          multiple
          chips
          :items="trans('LEVEL_CHOICES')"
          item-title="label"
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
          :key="tech.key"
          class="tech-col"
        >
          <v-card
            class="tech"
          >
            <v-card-title>
              <v-row justify="center">
                <v-col
                  :cols="nbColsIcon(detailed)"
                  class="text-center"
                >
                  <v-icon
                    v-if="tech.icon"
                    :size="detailed ? 'large' : ''"
                    start
                  >
                    {{ tech.icon }}
                  </v-icon>
                  <v-img
                    v-if="tech.img"
                    :src="tech.img"
                  />
                </v-col>
                <v-col
                  :cols="nbColsTechTitle(detailed)"
                  class="text-center"
                >
                  <span class="tech-title">
                    <template v-if="tech.name.FR">
                      {{ transDict(tech.name) }}
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
                <div class="text-h5">
                  {{ tech.experience }} {{ trans('YEARS') }}
                </div>
              </div>
              <div v-if="tech.details" class="tech-details">
                <ul>
                  <li v-for="detail in transDict(tech.details)" :key="detail">
                    {{ detail }}
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
  name: 'ContentTechs',
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
            { value: 'devops', label: 'DevOps / Ops' },
            { value: 'back', label: 'Backend' },
            { value: 'front', label: 'Frontend' }
          ],
          'EN': [
            { value: 'all', label: 'All' },
            { value: 'devops', label: 'DevOps / Ops' },
            { value: 'back', label: 'Backend' },
            { value: 'front', label: 'Frontend' }
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
          categories: ['devops'],
          icon: 'mdi-kubernetes',
          name: 'Kubernetes',
          key: 'kubernetes',
          level: 'expert',
          experience: 5,
          details: {
            'FR': [
              'Déploiement de charges en HA',
              'Gestion des secrets, GitOPS, best practices',
              'Connaissance des mécanismes internes',
              'Installation de clusters on premise et hybrides',
              'Helm, Kustomize, DevSpace'
            ],
            'EN': [
              'HA deployments',
              'Secret management, GitOps, best practices',
              'Deep understanding of internal mechanisms',
              'On prem/hybrid cluster deployments',
              'Helm, Kustomize, DevSpace'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-docker',
          name: 'Docker',
          key: 'docker',
          level: 'expert',
          experience: 7,
          details: {
            'FR': [
              'Docker-compose, Podman',
              'Volumes, réseaux',
              'Best practices',
              'Multi-stage builds, optimisations, ...'
            ],
            'EN': [
              'Docker-compose, Podman',
              'Volumes, networks',
              'Best practices',
              'Multi-stage builds, optimizations, ...'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-cloud-refresh',
          name: { 'FR': 'CI/CD', 'EN': 'CI/CD' },
          level: 'high',
          experience: 4,
          key: 'cicd',
          details: {
            'FR': [
              'Gitlab CI, Bamboo',
              'ArgoCD, Tekton',
              'Nexus', 'Vault'
            ],
            'EN': [
              'Gitlab CI, Bamboo',
              'ArgoCD, Tekton',
              'Nexus', 'Vault'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-git',
          name: { 'FR': 'GitOPS', 'EN': 'GitOPS' },
          level: 'high',
          experience: 2,
          key: 'gitops',
          details: {
            'FR': [
              'PoC GitOps de déploiement applicatif',
              'ArgoCD, câblage de la CI/CD',
              'Gestion des secrets avec Hashicorp Vault'
            ],
            'EN': [
              'GitOps deployments Proof of concept',
              'ArgoCD, with continuous integration',
              'Secrets handling with Hashicorp Vault'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-ansible',
          name: 'Ansible',
          key: 'ansible',
          level: 'high',
          experience: 9,
          details: {
            'FR': [
              'Déploiement de projets applicatifs',
              'Rôles, templates, handlers'
            ],
            'EN': [
              'Application deployments',
              'Roles, templates, handlers'
            ]
          }
        },
        {
          categories: ['back'],
          icon: 'mdi-language-python',
          name: 'Python',
          key: 'python',
          level: 'expert',
          experience: 15,
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
          key: 'django',
          level: 'expert',
          experience: 9,
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
          categories: ['front'],
          icon: 'mdi-vuejs',
          name: 'VueJS',
          key: 'vuejs',
          level: 'high',
          experience: 5,
          details: {
            'FR': [
              'Développement de gros projets SPA',
              'VueX, Vuetify, Vue-router, Websockets'
            ],
            'EN':  [
              'Large SPA projects',
              'VueX, Vuetify, Vue-router, Websockets'
            ]
          }
        },
        {
          categories: ['back'],
          icon: 'mdi-language-cpp',
          name: 'C++',
          key: 'cpp',
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
          key: 'html',
          level: 'high',
          experience: 14
        },
        {
          categories: ['front'],
          icon: 'mdi-language-javascript',
          name: 'Javascript',
          key: 'js',
          level: 'high',
          experience: 10,
          details: {
            'FR': [
              'Longue expérience (jQuery, AngularJS, VueJS, ES6)',
              'Uniquement côté client (peu de NodeJS)'
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
          key: 'flask',
          level: 'medium',
          experience: 3,
          details: {
            'FR': [
              'API REST',
              'Flask-cors, Flask-jwt, Flask-socketio'
            ],
            'EN': [
              'REST API',
              'Flask-cors, Flask-jwt, Flask-socketio'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-chart-bell-curve-cumulative',
          name:  { 'FR': 'Observabilité', 'EN': 'Observability' },
          key: 'observability',
          level: 'medium',
          experience: 2,
          details: {
            'FR': [
              'Prometheus, Thanos, Grafana',
              'FluentD, ElasticSearch, Kibana',
              'OpenTelemetry'
            ],
            'EN': [
              'Prometheus, Thanos, Grafana',
              'FluentD, ElasticSearch, Kibana',
              'OpenTelemetry'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-linux',
          name: 'Linux',
          key: 'linux',
          level: 'high',
          experience: 12,
          details: {
            'FR': [
              'Administration : utilisateurs, SSH, sudoers',
              'Gestion de paquets. Installations / Configurations.',
              'cron, systemd, DNS, rotation de logs',
              'Distribs : Debian, Alpine, CentOS'
            ],
            'EN': [
              'User management, Package management',
              'cron, systemd, DNS, logs analysis',
              'Debian, Alpine, CentOS'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-arrow-decision',
          name: 'Reverse Proxy',
          key: 'reverseproxy',
          level: 'high',
          experience: 8,
          details: {
            'FR': [
              'Nginx, Traefik, HaProxy',
              'Configurations web, optimisations, gestion de cache',
              'Routing, certificats SSL, headers HTTP, ...'
            ],
            'EN': [
              'Nginx, Traefik, HaProxy',
              'Webserver configuration, optimizations, cache management',
              'Routing, SSL certificates, HTTP headers, ...'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-terraform',
          name: { 'FR': 'Terraform', 'EN': 'Terraform' },
          level: 'high',
          experience: 2,
          key: 'terraform',
          details: {
            'FR': [
              'Déploiement de clusters Kubernetes on premise / hybrides / full-cloud',
              'Templating, modules, structure multi-layers, ...'
            ],
            'EN': [
              'Kubernetes cluster deployment (on premise / hybrids / full-cloud)',
              'Templating, modules, multi-layers architecture, ...'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-cloud',
          name: { 'FR': 'Cloud', 'EN': 'Cloud' },
          level: 'medium',
          experience: 3,
          key: 'cloud',
          details: {
            'FR': [
              'AWS : VPC, networks, gateways, security groups, ...',
              'AWS EKS, GCP GKE, Scaleway'
            ],
            'EN': [
              'AWS : VPC, networks, gateways, security groups, ...',
              'AWS EKS, GCP GKE, Scaleway'
            ]
          }
        },
        {
          categories: ['devops'],
          icon: 'mdi-source-branch',
          name: 'GIT',
          key: 'git',
          level: 'high',
          experience: 12,
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
          categories: ['back'],
          icon: 'mdi-database-search',
          name: 'SQL',
          key: 'sql',
          level: 'high',
          experience: 11,
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
          key: 'mongodb',
          level: 'medium',
          experience: 11,
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
          icon: 'mdi-cogs',
          name: { 'FR': 'Algorithmie', 'EN': 'Algorithms' },
          level: 'high',
          key: 'algo',
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
        {
          categories: ['back', 'devops'],
          icon: 'mdi-graph-outline',
          name: { 'FR': 'Micro-services', 'EN': 'Micro-services' },
          level: 'medium',
          key: 'microservices',
          details: {
            'FR': [
              'Bagage théorique (App gateways, transactions, CQRS, DDD)',
              'Cas d\'usage : Pattern ou anti-pattern ?',
              'Peu d\'expérience pratique'
            ],
            'EN': [
              'Theoretical knowledge (App gateways, transactions, CQRS, DDD)',
              'Use cases: Pattern or anti-pattern ?',
              'Low level of practice'
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
      return res.sort(function(a, b) {
        if (b.level === 'expert') {
          return 1
        }
        if (a.level === 'expert') {
          return -1
        }
        if (b.level === 'high') {
          return 1
        }
        if (a.level === 'high') {
          return -1
        }
        return 0
      })
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
  padding: 10px 5px
  width: 100%
  display: inline-block
  .v-img
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
    flex: 0 0 45%
    justify-content: space-around
    transition: transform 0.8s ease

  &.small-techs
    .tech-col
      flex: 0 0 15%
      .v-card-title
        font-size: 0.8em
        line-height: 0.8em
        padding: 2px
      .v-card-text
        display: none
      .v-img
        width: 24px
        height: 24px
      .mdi
        font-size: 24px
        color: rgba(0,0,0,.54)


  @media screen and (max-width: 640px)
    .tech-col
      flex: 0 0 100%
    &.small-techs .tech-col
      flex: 0 0 30%

  &:not(.small-techs)
    .v-card-title
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
