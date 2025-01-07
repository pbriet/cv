<template>
  <v-card
    id="main-container"
    color="grey-lighten-2"
    light
  >
    <v-card-text id="main-container-card-content">
      <content-section v-if="showLookingForSection"
        :title="trans('LOOKING_FOR')"
      >
        <template v-slot:short-version>
          <div v-html="trans('LOOKING_FOR_SHORT')"/>
        </template>
        <template v-slot:long-version>
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
        <template v-slot:short-version>
          <div v-html="trans('HUMAN_SKILLS_SHORT')"/>
        </template>
        <template v-slot:long-version>
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


      <content-section
        id="education"
        :title="trans('EDUCATION')"
        mono-slot
        :toggleButton="false"
      >
        <template v-slot:default>

          <v-container>
            <v-row>
              <v-col>
                <v-card id="education-card">
                  <v-card-text>
                    <v-icon size="large">mdi-certificate</v-icon> <b>{{ trans('EDUCATION_MAIN') }}</b><br>
                    <div v-html="trans('EDUCATION_DETAILS')"></div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

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
      showLookingForSection: false,
      translations: {
        TECHNICAL_SKILLS: {
          'FR': 'Compétences techniques',
          'EN': 'Technical skills',
        },
        EXPERIENCE: {
          'FR': 'Expérience',
          'EN': 'Experience',
        },
        EDUCATION: {
          'FR': 'Formation',
          'EN': 'Education',
        },
        EDUCATION_MAIN: {
          'FR': '2007 - Ingénieur EPITA (Mention Très Bien)',
          'EN': '2007 - EPITA Paris (first class honours)'
        },
        EDUCATION_DETAILS: {
          'FR': "Ecole pour l'informatique et les techniques avancées (Paris)",
          'EN': "Graduate software engineer masters degree.<br/>Ecole pour l'informatique et les techniques avancées (Paris)."
        },
        LOOKING_FOR: {
          'FR': 'Ce que je cherche',
          'EN': 'What I\'m looking for'
        },
        LOOKING_FOR_SHORT: {
          'FR': `
            Un nouveau défi à relever, pour évoluer techniquement et humainement.<br>
            Un projet d'entreprise fort dans un environnement chaleureux et bienveillant`,
          'EN': `
            A new challenge. I'd like to learn new technical and human skills.<br>
            An ambitious corporate vision, with benevolent leadership
          `        },
        LOOKING_FOR_LONG: {
          'FR': `

            <h3>Un challenge intellectuel</h3>

            Mon principal moteur est ma soif de connaissances. J'aime apprendre, me confronter à de nouveaux problèmes, les solutionner de manière élégante. J'y trouve beaucoup de satisfaction.<br>

            <h3>De l'émulation</h3>

            J'aimerais rejoindre une équipe compétente et ambitieuse (au bon sens du terme). Des personnes investies dans le projet d'entreprise et bienveillantes.<br><br>
            Idéalement, je souhaiterais retrouver l'univers de l'édition logicielle, où toute une équipe construit collectivement un produit de qualité.


            <h3>Une entreprise remote-friendly</h3>

            Je considère la pratique du télétravail partiel comme étant gagnant-gagnant : moins de fatigue, moins de temps dans les transports, une meilleure productivité.<br>
            Si j'apprécie l'ambiance de bureau et les interactions sociales avec les collègues, la flexibilité est un gros plus.
          `,
          'EN': `

            <h3>An intellectual challenge</h3>

            My main motives are: learning new things, resolving complex problems with simple and elegant solutions. It brings me high satisfaction.<br>

            <h3>Working in a motivated team</h3>

            I'd like to live a real collective experience by sharing common goals with my colleagues: building a great product, facing the same difficulties together and getting through them.<br/>

            <h3>A remote-friendly employer</h3>

            I believe that partial remote work is a win-win: less energy wasted in transports, better productivity.<br>
            I really do like spending time with my teammates, but I will value some flexibility.
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
            Quand je m'engage sur une date, je tiens toujours mes délais

            <h3>Forte capacité d'apprentissage</h3>

            Je n'ai pas peur de me confronter à l'inconnu et d'apprendre de nouvelles technologies/pratiques. J'y trouve d'ailleurs un certain plaisir.<br>

            Je me suis auto-formé à : Django, VueJS, Ansible, Docker, Kubernetes, Talos Linux. Puis j'ai formé les équipes dans lesquelles je travaillais.<br><br>

            Si j'apprécie certains univers (Kubernetes, on prem, ...), je suis parfaitement ouvert au travail dans d'autres environnements (Cloud notamment)
          `,
          'EN': `<h3>An entrepreneurial spirit</h3>

            Having co-created 2 businesses (twice my initiative), what I see in a company is much more than the technical aspects. What I care about is customer satisfaction and cost-effectiveness. I have a good culture in sales and marketing, but what I'm good at is engineering.

            <h3>Meticulous and efficient</h3>

            I like things to be pretty and clean. That's the only way a project can work in the medium-term.

            <br><br>

            Still, I'm not a perfectionist but a pragmatic developer. If the deadline is short, I won't waste time on details.<br>
            When I commit myself to a deadline, I always meet the expectations.

            <h3>Self-learner</h3>

            I'm not afraid to learn new technologies/methodologies. On the contrary, I really enjoy it.<br>

            I have self-learned: Django, VueJS, Ansible, Docker, Kubernetes, Talos Linux. Once I master a new technology, I also like to share it to my colleagues.<br><br>

            I'm fond of some technologies that I already master ((Kubernetes, on prem, ...), but I'm open to discover other environments (e.g. cloud)`
        }

      }
    }
  }
}


</script>

<style lang="sass">
#main-container-card-content
  .text-h6
    border-bottom: 2px #bfbfbf solid
    line-height: 1.5 !important

  h3
    &:not(:first-child)
      margin-top: 10px
    font-weight: 500
    color: $pink-color

  .progress
    margin-top: 0.1rem

#education-card
  width: 500px

</style>
