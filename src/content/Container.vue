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
        :title="trans('TECHNICAL_SKILLS')"
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
        :title="trans('EXPERIENCE')"
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
        TECHNICAL_SKILLS: {
          'FR': 'Compétences techniques',
          'EN': 'Technical skills',
        },
        EXPERIENCE: {
          'FR': 'Expérience',
          'EN': 'Experience',
        },
        LOOKING_FOR: {
          'FR': 'En bref',
          'EN': 'What I\'m looking for'
        },
        LOOKING_FOR_SHORT: {
          'FR': `
            Un nouveau défi à relever, pour évoluer techniquement et humainement.<br>
            J'envisage notamment d'évoluer dans les domaines suivants : <b>Devops</b>, IA, management, ...`,
          'EN': `
            A new challenge. I'd like to learn new technical and human skills.<br>
            I'm especially attracted by the following : <b>Devops</b>, AI, management, ...
          `
        },
        LOOKING_FOR_LONG: {
          'FR': `

            <h3>Expert Python</h3>

            Avec 13 ans d'expérience dans l'univers Python, je suis parfaitement opérationnel, notamment dans tout l'univers du web  (Django, Flask). Très productif, je peux notamment vous aider à atteindre des deadlines serrées.

            <h3>DevOps</h3>

            Ces dernières années, je me suis davantage focalisé sur les aspects DevOps : microservices (Docker), Kubernetes, déploiement dans le cloud (AWS, Google).<br>
            Si mon expérience est plus modeste dans le domaine, j'ai déjà accompagné 2 structures dans la refonte de leur architecture. Mon sens de la rigueur et ma capacité d'apprentissage me permettent d'affronter tout sujet autour du DevOps.

            <h3>VueJS</h3>

            Bien qu'avant tout un développeur backend, j'ai trouvé en VueJS ce qui pour moi se fait de mieux en technologie Frontend/SPA. Après 2 années d'utilisation assez intensive, ce serait un plaisir retravailler sur ce framework et/ou de vous accompagner dans cette direction.
          `,
          'EN': `

            <h3>An intellectual challenge</h3>

            My main motives are: learning new things, resolving complex problems with simple and elegant solutions. It brings me high satisfaction.<br><br>

            At this point of my career, I have a pretty good knowledge in 2 fields: frontend and backend development (especially the last one). I'd like to extend my expertise to new domains: DevOPS, artificial intelligence, or any intersting topic that you may suggest.

            <h3>A new working environment</h3>

            Until this day, I've always worked in small businesses (1 to 11 employees). I'm now curious to discover medium/large enterprises.<br>

            But I'm still open to opportunities in startups, or as a freelance.

            <h3>Working with top-level engineers</h3>

            I wish to join a team with highly-skilled colleagues, involved in a team with benevolent leadership.

            <h3>A remote-friendly employer</h3>

            I think that working remotely is a win-win: less energy wasted in transports, better productivity.<br>
            I really do like spending time with my teammates, but I will value a few days of remote work.
          `
        },
        HUMAN_SKILLS: {
          'FR': 'Qualités humaines',
          'EN': 'Personal skills'
        },
        HUMAN_SKILLS_SHORT: {
          'FR': `Exigeant envers moi-même, investi et pragmatique. Je ne sais pas faire les choses à moitié.<br>
             Moteur et force de proposition, je m'épanouis dans un environnement peu conflictuel et bienveillant.`,
          'EN': `Setting myself high-standards, involved and pragmatic. My only way to work is intensely.<br>
             Proactive, with leadership skills, I'm at my best in a peaceful and harmonious workplace.`
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

          `,
          'EN': `<h3>An entrepreneurial spirit</h3>

            Having co-created 2 businesses (twice my initiative), what I see in a company is much more than the technical aspects. What I care about is customer satisfaction and cost-effectiveness. I have a good culture in sales and marketing, but what I'm good at is engineering.

            <h3>Meticulous and efficient</h3>

            I like things to be pretty and clean. That's the only way a project can work in the medium-term.

            <br><br>

            Still, I'm not a perfectionist but a pragmatic developer. If the deadline is short, I won't waste time on details.<br>
            When I commit myself to a deadline, I always meet the expectations (which is quite rare in the world of developers!)
`
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
