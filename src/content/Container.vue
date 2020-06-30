<template>
  <v-card
    id="main-container"
    color="grey lighten-2"
    light
  >
    <v-card-text>
      <content-section
        title="Ce que je cherche"
      >
        <template slot="short-version">
          Un nouveau défi à relever, pour évoluer techniquement et humainement.<br>
          J'envisage notamment d'évoluer dans les domaines suivants : <b>Devops</b>, IA, management, ...
        </template>
        <template slot="long-version">
          <div>
            <h3>Un challenge intellectuel</h3>

            Mon principal moteur est ma soif de connaissances. J'aime apprendre, me confronter à de nouveaux problèmes, les solutionner de manière élégante. J'y trouve beaucoup de satisfaction.<br><br>

            Ayant désormais une bonne maîtrise de la plupart des problématiques backend/frontend, j'aimerais tendre vers une nouvelle direction : DevOPS, Intelligence Artificielle, ou autre univers connexe au développement.

            <h3>De l'émulation</h3>

            J'aimerais rejoindre une équipe compétente et ambitieuse (au bon sens du terme). Des personnes investies dans le projet d'entreprise, et surtout bienveillantes.

            <h3>Une entreprise ouverte au télé-travail</h3>

            Je pratique le télé-travail complet depuis 7 ans. J'y suis donc parfaitement familiarisé, et ma personnalité s'y prête bien. Mon idéal serait du télétravail à 50%, pour un meilleur équilibre de vie. A adapter selon la nature du poste (le management ne s'y prêtant pas forcément bien).
          </div>
        </template>
      </content-section>

      <content-section
        id="skills-list"
        title="Compétences techniques"
        mono-slot
      >
        <template v-slot:default="slotProps">
          <Techs :detailed="slotProps.detailed"></Techs>
        </template>
      </content-section>


      <content-section
        title="Qualités humaines"
      >
        <template slot="short-version">
          Exigeant envers moi-même, investi et pragmatique. Je ne sais pas faire les choses à moitié.<br>
          Moteur et force de proposition, je m'épanouis dans un environnement peu conflictuel et bienveillant.
        </template>
        <template slot="long-version">
          <div>
            <h3>Entrepreneur dans l'âme</h3>

            Avec 2 expériences de création de société, ma vision de l'entreprise ne se restreint pas à la technique. Je suis motivé par la finalité : satisfaction client, bénéfice commercial/marketing, automatisation de tâches administratives.

            <br><br>

            Ce passé d'entrepreneur m'a également démontré que j'étais avant tout un ingénieur, et non un commercial de terrain (le networking n'est pas ma tasse de thé...)

            <h3>Rigoureux et efficace</h3>

            J'aime que les choses soient bien faites. Je pense que la rigueur est une qualité essentielle de tout ingénieur.

            <br><br>

            Pour autant, je ne suis pas un perfectionniste, mais un pragmatique. Si les délais sont courts, il faut aller à l'essentiel et faire les sacrifices nécessaires.<br>
            Quand je m'engage sur une date, je tiens toujours mes délais (peu commun dans le métier !)

            <h3>Discret mais leader</h3>

            D'un naturel plutôt discret, toutes mes expériences professionnelles m'ont amené à prendre le lead des équipes dans lesquelles j'ai été. Dans le cadre privé, je ne suis pas un grand bavard, mais dans le cadre professionnel je suis communiquant - avec un bon esprit de synthèse.

          </div>
        </template>
      </content-section>


      <content-section
        id="skills-list"
        title="Expérience"
        mono-slot
      >
        <template v-slot:default="slotProps">
          <Experience :detailed="slotProps.detailed"></Experience>
        </template>
      </content-section>



    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/content/Section'
import Techs from '@/content/Techs'
import Experience from '@/content/Experience'

export default {
  name      : 'MainContent',
  components: { ContentSection, Techs, Experience }
}
</script>

<style scoped lang="sass">
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
