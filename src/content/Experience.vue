<template>
  <div>
    <v-timeline
      dense
      align-top
    >
      <v-timeline-item
        v-for="experience in experiences"
        :key="experience.title"
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
              {{ experience.shortContent }}
            </template>
            <template v-else>
              <div>
                <span class="exp-title">L'entreprise :</span> {{ experience.companyDetails }}
              </div>
              <div class="exp-section">
                <div class="exp-title">Mon rôle :</div>
                <ul>
                  <li v-for="role in experience.roles" :key="role">
                    {{ role }}
                  </li>
                </ul>
              </div>
              <div class="exp-section">
                <div class="exp-title">Technologies :</div>
                <ul>
                  <li v-for="tech in experience.techs" :key="tech">
                    {{ tech }}
                  </li>
                </ul>
              </div>
              <div class="exp-section" v-if="experience.links">
                <div class="exp-title">Pour en savoir plus :</div>
                <ul>
                  <li v-for="link in experience.links" :key="link.url">
                    <a target="_blank" :href="link.url">{{ link.label }}</a>
                  </li>
                </ul>
              </div>
            </template>
            <div class="exp-tags" v-if="experience.tags">
              <v-chip
                v-for="item in experience.tags"
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
export default {
  name: 'Experience',
  props: ['detailed'],
  data () {
    return {
      experiences: [
        { date: '2016-2020',
          company: 'Les Octets Libres (Quimperlé)',
          title: 'Ingénieur full-stack/devops - Associé co-fondateur',
          shortContent: 'Réalisation de projets sur mesure pour des TPE/PME : backoffice, API, connexion aux CRM',
          companyDetails: 'Petite ESN (4 salariés) en coopérative. Développement de solutions à haute valeur ajoutée pour les entreprises. Edition d\'une solution SAAS : SLEAD',
          roles: [
            'Relation client',
            'Architecte de solutions (choix des technologies, architecture logicielle)',
            'Développeur backoffice',
            'Développeur front',
            'Devops',
            'Stratégie d\'entreprise'
          ],
          techs: [
            'Python : Django, Flask',
            'PHP : Wordpress (plus anecdotique)',
            'JS : ES6, VueJS, Webpack, jQuery',
            'Devops : Ansible, Docker, Kubernetes, Vagrant',
            'Système : Linux'
          ],
          links: [
            { label: 'Les Octets Libres', url: 'https://www.lesoctetslibres.com' },
            { label: 'SLEAD', url: 'https://www.slead.co' }
          ],
          tags: ['Backend', 'Devops', 'Entrepreneuriat']
        },
        { date: '2013-2016',
          company: 'Cook&Be (Quimperlé)',
          title: 'Président co-fondateur',
          shortContent: 'Création d\'une startup tech : du développement de la solution à la vente et au financement',
          companyDetails: 'Planificateur de repas en ligne ultra-personnalisé',
          roles: [
            'Chef d\'entreprise (création à mon initiative)',
            'Business plan, prévisionnels',
            'Recherche de financements',
            'Juridique',
            'Développeur FullStack',
            'Marketing/commercial',
            'Pitchs et concours'
          ],
          techs: [
            'Python : Django',
            'C++ : Algorithme haute performance + librairie Boost',
            'JS : AngularJS, Grunt',
            'Devops : Ansible, Vagrant',
            'Système : Linux'
          ],
          links: [
            { label: 'Cook&Be', url: 'https://www.cookandbe.com' }
          ],
          tags: ['FullStack', 'Entrepreneuriat']
        },
        { date: '2011-2013',
          company: 'Optimor Labs (Oxford)',
          title: 'Ingénieur backend',
          shortContent: 'Développement de solutions d\'analyse de factures téléphoniques (scraping, Big data)',
          companyDetails: 'Analyse en ligne des factures téléphoniques, et application de l\'usage aux offres du marché',
          roles: [
            'Développeur Backend',
            'Big data (réalisation d\'analyses statistiques)'
          ],
          techs: [
            'Python',
            'Devops : Munin',
            'Système : Linux/MacOS'
          ],
          links: [
            { label: 'BillMonitor', url: 'https://www.billmonitor.com/' }
          ],
          tags: ['Backend', 'English spoken']
        },
        { date: '2007-2011',
          company: 'OptimProcess',
          title: 'Ingénieur logiciel',
          shortContent: 'Développement d\'un logiciel Windows d\'analyse de données industrielles',
          companyDetails: 'Editeur d\'une solution d\'analyse des défauts de production sur les chaînes de production industrielles',
          roles: [
            'Développeur',
            'Scrum Master'
          ],
          techs: [
            'Python : numpy, matplotlib',
            'C++ : algorithme de data mining',
            'Système : Windows'
          ],
          links: [
            { label: 'Acquisition par BearingPoint', url: 'https://www.lemondeinformatique.fr/actualites/lire-bearingpoint-s-offre-optimprocess-specialise-dans-l-optimisation-des-procedes-industriels-68193.html' }
          ],
          tags: ['Logiciel Windows', 'Scrum']
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
