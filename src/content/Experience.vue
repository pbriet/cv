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
        { date: '2016-2020',
          company: 'Les Octets Libres (Quimperlé)',
          title: 'Ingénieur full-stack/devops - Associé co-fondateur',
          shortContent: {
            'FR': 'Réalisation de projets sur mesure pour des TPE/PME : backoffice, API, connexion aux CRM',
            'EN': 'Building custom solutions for small businesses: backoffice, APIs, connections with CRM/ERP'
          },
          companyDetails: {
            'FR': 'Petite ESN (4 salariés) en coopérative. Développement de solutions à haute valeur ajoutée pour les entreprises. Edition d\'une solution SAAS : SLEAD',
            'EN': 'Small business (4 employees). High added value custom solutions for customers. Also: development of a SAAS service.'
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
              'Backoffice pour site de mise en relation de vétérinaire en ligne (téléphone, visio, ...)',
              'Outil de suivi de l\'entretien des bâtiments de La Défense (nettoyage, contrôle)',
              'Renfort de l\'équipe Weenat pour finalisation d\'une nouvelle version (dont DevOps)'
            ],
            'EN': [
              'Automated tool for sales people to build custom quotes (connected with Salesforce)',
              'SAAS solution to build custom public quotes and gather some leads (https://www.slead.co)',
              'Backoffice of a website that connects together vets and customers (through phone and webconference)',
              'Solution for supervising maintenance of buildings (French secretary of Defense)',
              'Joining the Weenat team to finalize a relase (mostly DevOps)'
            ]
          },
          techs: {
            'FR': [
              'Python : Django, Flask',
              'PHP : Wordpress (plus anecdotique)',
              'JS : ES6, VueJS, Webpack, jQuery',
              'Devops : Ansible, Docker, Kubernetes, Vagrant',
              'Système : Linux'
            ],
            'EN': [
              'Python : Django, Flask',
              'PHP : Wordpress',
              'JS : ES6, VueJS, Webpack, jQuery',
              'Devops : Ansible, Docker, Kubernetes, Vagrant',
              'Sysadmin : Linux'
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
            'EN': 'Création d\'une startup tech : du développement de la solution à la vente et au financement'
          },
          companyDetails: {
            'FR': 'Planificateur de repas en ligne ultra-personnalisé',
            'EN': 'Planificateur de repas en ligne ultra-personnalisé'
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
              'Chef d\'entreprise (création à mon initiative)',
              'Business plan, prévisionnels',
              'Recherche de financements',
              'Juridique',
              'Développeur FullStack',
              'Marketing/commercial',
              'Pitchs et concours'
            ]
          },
          techs: {
            'FR': [
              'Python : Django',
              'C++ : Algorithme haute performance + librairie Boost',
              'JS : AngularJS, Grunt',
              'Devops : Ansible, Vagrant',
              'Système : Linux'
            ],
            'EN': [
              'Python : Django',
              'C++ : Algorithme haute performance + librairie Boost',
              'JS : AngularJS, Grunt',
              'Devops : Ansible, Vagrant',
              'Système : Linux'
            ]
          },
          links: [
            { label: {'FR': 'Cook&Be', 'EN': 'Cook&Be'}, url: 'https://www.cookandbe.com' }
          ],
          tags: {
            'FR': ['FullStack', 'Entrepreneuriat'],
            'EN': ['FullStack', 'Entrepreneuriat']
          }
        },
        { date: '2011-2013',
          company: 'Optimor Labs (Oxford - Angleterre)',
          title: 'Ingénieur backend',
          shortContent: {
            'FR': 'Développement de solutions d\'analyse de factures téléphoniques (scraping, Big data)',
            'EN': 'Développement de solutions d\'analyse de factures téléphoniques (scraping, Big data)'
          },
          companyDetails: {
            'FR': 'Analyse en ligne des factures téléphoniques, et application de l\'usage aux offres du marché',
            'EN': 'Analyse en ligne des factures téléphoniques, et application de l\'usage aux offres du marché'
          },
          roles: {
            'FR': [
              'Développeur Backend',
              'Web scraping',
              'Monitoring',
              'Big data (réalisation d\'analyses statistiques)'
            ],
            'EN': [
              'Développeur Backend',
              'Web scraping',
              'Monitoring',
              'Big data (réalisation d\'analyses statistiques)'
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
              'Devops : Munin',
              'Système : Linux/MacOS'
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
            'EN': 'Développement d\'un logiciel Windows d\'analyse de données industrielles',
          },
          companyDetails: {
            'FR': 'Editeur d\'une solution d\'analyse des défauts de production sur les chaînes de production industrielles',
            'EN': 'Editeur d\'une solution d\'analyse des défauts de production sur les chaînes de production industrielles'
          },
          roles: {
            'FR': [
              'Développeur',
              'Scrum Master'
            ],
            'EN': [
              'Développeur',
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
              'Python : numpy, matplotlib, wxPython',
              'C++ : algorithme de data mining',
              'Système : Windows'
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
            'EN': ['Logiciel Windows', 'Scrum'],
          }
        },
        { date: '2005',
          company: 'Critéo (Paris)',
          title: 'Stagiaire',
          shortContent: {
            'FR': 'Premier "employé" de Critéo, les tous premiers jours d\'une grande entreprise française !',
            'EN': 'Premier "employé" de Critéo, les tous premiers jours d\'une grande entreprise française !'
          },
          companyDetails: {
            'FR': 'Expert du reciblage publicitaire',
            'EN': 'Expert du reciblage publicitaire',
          },
          roles: {
            'FR': [
              'Stagiaire',
              'Premier "employé" de Critéo, les tous premiers jours !',
              'Développement de la première maquette produit (PHP)'
            ],
            'EN': [
              'Stagiaire',
              'Premier "employé" de Critéo, les tous premiers jours !',
              'Développement de la première maquette produit (PHP)'
            ]
          },
          techs: {
            'FR': ['PHP', 'MySQL'],
            'EN': ['PHP', 'MySQL'],
          },
          tags: {
            'FR': ['Stage', 'Anecdote'],
            'EN': ['Stage', 'Anecdote']
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
