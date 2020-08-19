<template>
  <v-card
    id="main-container"
    color="grey lighten-2"
    light
  >
    <v-card-text id="main-container-card-content">
      <content-section
        :title="trans('LOOKING_FOR')"
      >
        <template slot="short-version">
          <div v-html="trans('LOOKING_FOR_SHORT')"/>
        </template>
        <template slot="long-version">
          <div v-html="trans('LOOKING_FOR_LONG')"/>
        </template>
      </content-section>

      <content-section
        id="skills-list"
        title="Compétences techniques"
        mono-slot
      >
        <template v-slot:default="slotProps">
          <Techs :detailed="slotProps.detailed"/>
        </template>
      </content-section>


      <content-section
        :title="trans('HUMAN_SKILLS')"
      >
        <template slot="short-version">
          <div v-html="trans('HUMAN_SKILLS_SHORT')"/>
        </template>
        <template slot="long-version">
          <div v-html="trans('HUMAN_SKILLS_LONG')"/>
        </template>
      </content-section>


      <content-section
        id="experience-list"
        title="Expérience"
        mono-slot
      >
        <template v-slot:default="slotProps">
          <Experience :detailed="slotProps.detailed"/>
        </template>
      </content-section>

    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/content/Section'
import Techs from '@/content/Techs'
import Experience from '@/content/Experience'
import I18nMixin from '@/i18nmixin'

export default {
  name: 'MainContent',
  mixins: [I18nMixin],
  components: { ContentSection, Techs, Experience },
  data () {
    return {
      'translations': {
        LOOKING_FOR: {
          'FR': 'Ce que je cherche',
          'EN': 'What I\'m looking for'
        },
        LOOKING_FOR_SHORT: {
          'FR': `
            Un nouveau défi à relever, pour évoluer techniquement et humainement.<br>
            J'envisage notamment d'évoluer dans les domaines suivants : <b>Devops</b>, IA, management, ...`,
          'EN': ``
        },
        LOOKING_FOR_LONG: {
          'FR': `

            <h3>Un challenge intellectuel</h3>

            Mon principal moteur est ma soif de connaissances. J'aime apprendre, me confronter à de nouveaux problèmes, les solutionner de manière élégante. J'y trouve beaucoup de satisfaction.<br><br>

            Ayant désormais une bonne maîtrise de la plupart des problématiques backend/frontend, j'aimerais tendre vers une nouvelle direction : DevOPS, Intelligence Artificielle, ou autre univers connexe au développement.

            <h3>Un nouvel environnement</h3>

            Pendant toute ma carrière, j'ai travaillé dans des petites structures (de 1 à 11 salariés). J'ai aujourd'hui la curiosité de découvrir l'univers d'entreprises de taille plus critique.<br>
            Je reste néanmoins ouvert à des opportunités dans de petites structures.

            <h3>De l'émulation</h3>

            J'aimerais rejoindre une équipe compétente et ambitieuse (au bon sens du terme). Des personnes investies dans le projet d'entreprise et bienveillantes.

            <h3>Une entreprise remote-friendly</h3>

            Je considère la pratique du télétravail comme étant gagnant-gagnant : moins de fatigue, moins de temps dans les transports, une meilleure productivité.<br>
            Si j'apprécie l'ambiance de bureau et les interactions sociales avec les collègues, pouvoir se déplacer moins de 5 jours par semaine est un gros plus.
          `,
          'EN': ``
        },
        HUMAN_SKILLS: {
          'FR': 'Qualités humaines',
          'EN': 'People skills'
        },
        HUMAN_SKILLS_SHORT: {
          'FR': ``,
          'EN': `Exigeant envers moi-même, investi et pragmatique. Je ne sais pas faire les choses à moitié.<br>
             Moteur et force de proposition, je m'épanouis dans un environnement peu conflictuel et bienveillant.`
        },
        HUMAN_SKILLS_LONG: {
          'FR': `<h3>Entrepreneur dans l'âme</h3>

            Avec 2 expériences de création de société, ma vision de l'entreprise ne se restreint pas à la technique. Je suis motivé par la finalité : satisfaction client, bénéfice commercial/marketing, automatisation de tâches administratives.

            <br><br>

            Ce passé d'entrepreneur m'a également démontré que j'étais avant tout un ingénieur, et non un commercial de terrain (le networking n'est pas ma tasse de thé...)

            <h3>Rigoureux et efficace</h3>

            J'aime que les choses soient bien faites. Je pense que la rigueur est une qualité essentielle de tout ingénieur.

            <br><br>

            Pour autant, je ne suis pas un perfectionniste, mais un pragmatique. Si les délais sont courts, il faut aller à l'essentiel et faire les sacrifices nécessaires.<br>
            Quand je m'engage sur une date, je tiens toujours mes délais (peu commun dans le milieu !)

            <h3>Forte capacité d'apprentissage</h3>

            Je n'ai pas peur de me confronter à l'inconnu et d'apprendre de nouvelles technologies/pratiques. J'y trouve d'ailleurs un certain plaisir.<br>

            Je me suis auto-formé à : Django, VueJS, Ansible, Kubernetes. Puis j'ai formé les équipes dans lesquelles je travaillais.<br><br>

            Si j'apprécie certains univers (Python, Docker, ...), je suis donc parfaitement ouvert au travail dans d'autres environnements (Java, NodeJS, ...)

            <h3>Leadership horizontal</h3>

            Bien que d'un naturel plutôt discret, j'ai toujours naturellement pris le lead des équipes dans lesquelles j'ai été (et ce, même en télétravail). Je sais organiser, accompagner, écouter, impulser de nouvelles pratiques. J'ai une forte préférence pour les organisations peu hiérarchiques.
          `,
          'EN': ``
        }

      }
    }
  }
}


</script>

<style lang="sass">
#main-container-card-content
  .title
    border-bottom: 2px #bfbfbf solid
    line-height: 1.5 !important

  h3
    &:not(:first-child)
      margin-top: 10px
    font-weight: 500
    color: $pink-color

  .progress
    margin-top: 0.1rem

</style>
