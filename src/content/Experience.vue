<template>
  <div>
    <v-timeline
      dense
      align-top
    >
      <v-timeline-item
        v-for="experience in experiences"
        :key="transDict(experience.title)"
        color="secondary darken-4"
        style="page-break-inside: avoid !important"
        :small="true"
      >
        <v-card class="elevation-2">
          <v-card-title class="headline">
            {{ experience.company }}
          </v-card-title>
          <v-card-subtitle>
            {{ experience.date }}
          </v-card-subtitle>
          <v-card-text>
            <template v-if="!detailed">
              {{ transDict(experience.shortContent) }}
            </template>
            <template v-else>
              <div>
                <span class="exp-title">{{ trans('THE_COMPANY') }}:</span> {{ transDict(experience.companyDetails) }}
              </div>
              <div class="exp-section">
                <div class="exp-title">{{ trans('MY_ROLE') }}:</div>
                <ul>
                  <li v-for="role in transDict(experience.roles)" :key="role">
                    {{ role }}
                  </li>
                </ul>
              </div>
              <div class="exp-section" v-if="experience.projects">
                <div class="exp-title">{{ trans('MAIN_PROJECTS') }}:</div>
                <ul>
                  <li v-for="project in transDict(experience.projects)" :key="project">
                    {{ project }}
                  </li>
                </ul>
              </div>
              <div class="exp-section">
                <div class="exp-title">Technologies :</div>
                <ul>
                  <li v-for="tech in transDict(experience.techs)" :key="tech">
                    {{ tech }}
                  </li>
                </ul>
              </div>
              <div class="exp-section" v-if="experience.links">
                <div class="exp-title">{{ trans('MORE_ABOUT') }}:</div>
                <ul>
                  <li v-for="link in experience.links" :key="link.url">
                    <a target="_blank" :href="link.url">{{ transDict(link.label) }}</a>
                  </li>
                </ul>
              </div>
            </template>
            <div class="exp-tags" v-if="experience.tags">
              <v-chip
                v-for="item in transDict(experience.tags)"
                :key="item"
                class="ma-2"
              >
                {{ item }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>


<script>
import I18nMixin from '@/i18nmixin'

export default {
  name: 'Experience',
  mixins: [I18nMixin],
  props: ['detailed'],
  data () {
    return {
      translations: {
        'THE_COMPANY': {
          'FR': "L'entreprise ",
          'EN': "Company"
        },
        'MY_ROLE': {
          'FR': "Mon rôle ",
          'EN': "My role"
        },
        'MAIN_PROJECTS': {
          'FR': "Projets principaux ",
          'EN': "Main projects"
        },
        'MORE_ABOUT': {
          'FR': "Pour en savoir plus ",
          'EN': "More about this experience"
        }
      },
      experiences: [
        { date: '2020-2021',
          company: 'Apalia (Annecy)',
          title: 'Kubernetes/Devops consultant',
          shortContent: {
            'FR': 'Installation de clusters Openshift. Mise en place en pipelines CI/CD. Veille technologique sur multiples sujets.',
            'EN': 'Installation of Openshift clusters. Setting up CI/CD pipelines. Technology intelligence.'
          },
          companyDetails: {
            'FR': 'Petite entreprise de consulting haut de gamme sur Kubernetes et les pratiques DevOps',
            'EN': 'Providing highly-skilled consultants for adopting Kubernetes/Devops practices'
          },
          roles: {
            'FR': [
              'Consultant'
            ],
            'EN': [
              'Consultant'
            ],
          },
          projects: {
            'FR': [
              'Installation de clusters Openshift on premise et hybride (vSphere, AWS, Terraform)',
              'Mise en place de CI/CD sur des projets sous-traités (Bamboo, Maven, Gradle, Npm, Powershell, Openshift)',
              'Veille technologique (GitOps, Secrets management, Edge computing, univers Kubernetes)'
            ],
            'EN': [
              'Installation of Openshift clusters : on premise and hybrid (vSphere, AWS, Terraform)',
              'Setting up CI/CD pipelines on outsourced projects (Bamboo, Maven, Gradle, Npm, Powershell, Openshift)',
              'Technology intelligence (GitOps, Secrets management, Edge computing, everything around Kubernetes)'
            ]
          },
          techs: {
            'FR': [
              'Kubernetes : Openshift, Rancher, K3S',
              'CI/CD : Terraform, Ansible, Gitlab CI, Bamboo, ArgoCD, Tekton',
              'Docker : docker-compose, podman, buildah, kaniko, optimisations, builds Openshift',
              'Divers : Traefik, Nginx, Haproxy'
            ],
            'EN': [
              'Kubernetes : Openshift, Rancher, K3S',
              'CI/CD : Terraform, Ansible, Gitlab CI, Bamboo, ArgoCD, Tekton',
              'Docker : docker-compose, podman, buildah, kaniko, optimisations, builds Openshift',
              'Miscellaneous : Traefik, Nginx, Haproxy'
            ],
          },
          // links: [
          //   { label: {'FR': 'Apalia', 'EN': 'Apalia'}, url: 'https://www.apalia.net' }
          // ],
          tags: {
            'FR': ['Devops', 'Kubernetes'],
            'EN': ['Devops', 'Kubernetes']
          }
        },
        { date: '2016-2020',
          company: 'Les Octets Libres (Quimperlé)',
          title: 'Ingénieur full-stack/devops - Associé co-fondateur',
          shortContent: {
            'FR': 'Réalisation de projets sur mesure pour des TPE/PME : backoffice, API, connexion aux CRM',
            'EN': 'Building custom solutions for small businesses: backoffice, APIs, connections with CRM/ERP'
          },
          companyDetails: {
            'FR': 'Petite ESN (4 salariés) en coopérative. Développement de solutions à haute valeur ajoutée pour les entreprises. Edition d\'une solution SAAS : SLEAD',
            'EN': 'Small business (4 employees). Designing custom solutions for businesses (automation, APIs, backoffice, connections with CRM/ERP). Also: editor of a SAAS solution named SLEAD.'
          },
          roles: {
            'FR': [
              'Relation client',
              'Architecte de solutions (choix des technologies, architecture logicielle)',
              'Développeur backoffice',
              'Développeur front',
              'Devops',
              'Stratégie d\'entreprise (marketing, commercial)',
              'Co-fondateur'
            ],
            'EN': [
              'Customer relationship',
              'Solution architect (picking the right techs, software design)',
              'Backend development (mostly)',
              'Frontend development',
              'Devops',
              'Business strategy (marketing, sales)',
              'Co-founder'
            ],
          },
          projects: {
            'FR': [
              'Outil de réalisation de devis automatisés pour les commerciaux d\'une PME d\'expertise comptable (lié à Salesforce)',
              'Outil de réalisation de devis sur site public (https://www.slead.co)',
              'Backoffice pour site de mise en relation de vétérinaire en ligne (téléphone, visio, via Twilio)',
              'Outil de suivi de l\'entretien des bâtiments de La Défense (nettoyage, contrôle)',
              'Renfort de l\'équipe Weenat pour finalisation d\'une nouvelle version (dont DevOps)'
            ],
            'EN': [
              'Automated tool for sales people to build custom quotes (connected with Salesforce)',
              'SAAS solution to build custom public quotes and gather some leads (https://www.slead.co)',
              'Backoffice of a website that connects together vets and customers (through phone and videoconference)',
              'Solution for supervising the maintenance of buildings (French secretary of Defense)',
              'Joining the Weenat team to finalize a relase (mostly DevOps)'
            ]
          },
          techs: {
            'FR': [
              'Python : Django, Flask',
              'PHP : Wordpress (plus anecdotique)',
              'JS : ES6, VueJS, Webpack, jQuery',
              'Devops : Ansible, Docker, Kubernetes, Vagrant',
              'Système : Linux (administration)'
            ],
            'EN': [
              'Python : Django, Flask',
              'PHP : Wordpress',
              'JS : ES6, VueJS, Webpack, jQuery',
              'Devops : Ansible, Docker, Kubernetes, Vagrant',
              'Sysadmin : Linux (admin)'
            ],
          },
          links: [
            { label: {'FR': 'Les Octets Libres', 'EN': 'Les Octets Libres'}, url: 'https://www.lesoctetslibres.com' },
            { label: {'FR': 'SLEAD', 'EN': 'SLEAD'}, url: 'https://www.slead.co' }
          ],
          tags: {
            'FR': ['Backend', 'Devops', 'Entrepreneuriat'],
            'EN': ['Backend', 'Devops', 'Entrepreneurship']
          }
        },
        { date: '2013-2016',
          company: 'Cook&Be (Quimperlé)',
          title: 'Président co-fondateur',
          shortContent: {
            'FR': 'Création d\'une startup tech : du développement de la solution à la vente et au financement',
            'EN': 'Building a tech startup: from development to sales&marketing'
          },
          companyDetails: {
            'FR': 'Petite entreprise éditrice d\'un planificateur de repas en ligne ultra-personnalisé. Les utilisateurs peuvent saisir leurs goûts, contraintes, objectifs, et des plannings de repas leur sont proposés sur mesure.',
            'EN': 'Startup: Higly-personnalized online meal planner. Users can define their tastes, personal constraints and targets. Cook&Be then generates custom meal plannings for the week from all these parameters.'
          },
          roles: {
            'FR': [
              'Chef d\'entreprise (création à mon initiative)',
              'Business plan, prévisionnels',
              'Recherche de financements',
              'Juridique',
              'Développeur FullStack',
              'Marketing/commercial',
              'Pitchs et concours'
            ],
            'EN': [
              'CEO',
              'Business plan, forecast budget',
              'Looking for fundings',
              'FullStack developer',
              'Marketing/sales',
              'Pitching and participating to startups contests'
            ]
          },
          techs: {
            'FR': [
              'Python : Django',
              'C++ : Algorithme haute performance + librairie Boost',
              'JS : AngularJS, Grunt',
              'Devops : Ansible, Vagrant',
              'Système : Linux (administration)'
            ],
            'EN': [
              'Python: Django',
              'C++: Highly optimized genetic algorithm, Boost library',
              'JS: AngularJS, Grunt',
              'Devops: Ansible, Vagrant',
              'Sysadmin: Linux (admin)'
            ]
          },
          links: [
            { label: {'FR': 'Cook&Be', 'EN': 'Cook&Be'}, url: 'https://www.cookandbe.com' }
          ],
          tags: {
            'FR': ['FullStack', 'Entrepreneuriat'],
            'EN': ['FullStack', 'Entrepreneurship']
          }
        },
        { date: '2011-2013',
          company: 'Optimor Labs (Oxford - Angleterre)',
          title: 'Ingénieur backend',
          shortContent: {
            'FR': 'Développement de solutions d\'analyse de factures téléphoniques (scraping, Big data)',
            'EN': 'Development of a solution that scrapes mobile bills, and apply your usage to the others mobile offers in the market'
          },
          companyDetails: {
            'FR': 'Analyse en ligne des factures téléphoniques, et application de l\'usage aux offres du marché',
            'EN': 'Online analysis of mobile bills (with scraping) by applying your usage (voice, texts, data) to the mobile offers available in the market'
          },
          roles: {
            'FR': [
              'Développeur Backend',
              'Web scraping',
              'Monitoring',
              'Big data (réalisation d\'analyses statistiques)'
            ],
            'EN': [
              'Backend developer',
              'Web scraping',
              'Monitoring',
              'Big data (looking for usage patterns, plotting)'
            ]
          },
          techs: {
            'FR': [
              'Python',
              'Devops : Munin',
              'Système : Linux/MacOS'
            ],
            'EN': [
              'Python',
              'Devops: Munin',
              'Sysadmin: Linux/MacOS'
            ]
          },
          links: [
            { label: {'FR': 'BillMonitor', 'EN': 'BillMonitor'}, url: 'https://www.billmonitor.com/' }
          ],
          tags: {
            'FR': ['Backend', 'English spoken'],
            'EN': ['Backend', 'English spoken']
          }
        },
        { date: '2007-2011',
          company: 'OptimProcess (Paris)',
          title: 'Ingénieur logiciel',
          shortContent: {
            'FR': 'Développement d\'un logiciel Windows d\'analyse de données industrielles',
            'EN': 'Development of a data analysis Windows software for the industry (understanding production defaults)',
          },
          companyDetails: {
            'FR': 'Editeur d\'une solution d\'analyse des défauts de production sur les chaînes de production industrielles',
            'EN': 'Editing a data analysis Windows software for the industry, that helps customers understanding their defaults in production lines.'
          },
          roles: {
            'FR': [
              'Développeur',
              'Scrum Master'
            ],
            'EN': [
              'Developer (Software, MVC)',
              'Scrum Master'
            ]
          },
          techs: {
            'FR': [
              'Python : numpy, matplotlib, wxPython',
              'C++ : algorithme de data mining',
              'Système : Windows'
            ],
            'EN': [
              'Python: numpy, matplotlib, wxPython',
              'C++: data mining algorithm',
              'Windows'
            ]
          },
          links: [
            {
              label: {'FR': 'Acquisition par BearingPoint', 'EN': 'BearingPoint acquires OptimProcess'},
              url: 'https://www.lemondeinformatique.fr/actualites/lire-bearingpoint-s-offre-optimprocess-specialise-dans-l-optimisation-des-procedes-industriels-68193.html'
            }
          ],
          tags: {
            'FR': ['Logiciel Windows', 'Scrum'],
            'EN': ['Windows software', 'Scrum'],
          }
        },
        { date: '2005',
          company: 'Critéo (Paris)',
          title: 'Stagiaire',
          shortContent: {
            'FR': 'Premier "employé" de Critéo, les tous premiers jours d\'une grande entreprise française !',
            'EN': 'First "employee". The very first days of a big European success-story!'
          },
          companyDetails: {
            'FR': 'Expert du reciblage publicitaire',
            'EN': 'Advertising platform (custom retargeting)',
          },
          roles: {
            'FR': [
              'Stagiaire',
              'Premier "employé" de Critéo, les tous premiers jours !',
              'Développement de la première maquette produit (PHP)'
            ],
            'EN': [
              'First "employee". The very first days of a big European success-story!',
              'Development of the a first MVP in PHP'
            ]
          },
          techs: {
            'FR': ['PHP', 'MySQL'],
            'EN': ['PHP', 'MySQL'],
          },
          tags: {
            'FR': ['Stage', 'Anecdote'],
            'EN': ['Internship', 'Anecdote']
          }
        },
      ]
    }
  }
}
</script>

<style scoped lang="sass">
  .exp-title
    font-weight: bold
  .exp-section
    padding-top: 10px
</style>

<style lang="sass">
  .v-timeline-item__dot
    margin-top: 10px
</style>
