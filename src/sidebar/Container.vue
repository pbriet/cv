<template>
  <v-card
    id="sidebar"
    color="primary darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Pascal Briet
        </h1>
        <span>
          Ingénieur web en quête de challenge
        </span>
      </div>

      <div class="mb-4">
        <div class="title mb-3">
          Infos
        </div>
        <sidebar-infos :options="sections.info" />
      </div>

      <div class="mb-4">
        <div class="title mb-3">
          Profil
        </div>
        <sidebar-skills/>
      </div>

      <div class="mb-4">
        <div class="title mb-3">
          Points clés
        </div>
        <ul>
          <li>Développeur <b>full-stack</b></li>
          <li>Architecte logiciel</li>
          <li>13 ans d'expérience</li>
          <li>Esprit d'entrepreneur</li>
          <li>Pragmatique</li>
          <li>Rigoureux et efficace</li>
        </ul>
      </div>


      <div class="mb-4">
        <div class="title mb-3">
          Loisirs
        </div>
        <v-row>
          <v-col cols="6">
            <div class="leasure">
              <v-icon>mdi-feather</v-icon> Ecriture
            </div>
            <div class="leasure">
              <v-icon>mdi-earth</v-icon> Géopolitique
            </div>
          </v-col>
          <v-col cols="6">
            <div class="leasure">
              <v-icon>mdi-tennis</v-icon> Badminton
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="mb-4">
        <div class="title mb-3">
          Langues
        </div>
        Français : natif<br/>
        Anglais : professionnel
      </div>

    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/sidebar/Avatar'
import SidebarInfos from '@/sidebar/Infos'
import SidebarSkills from '@/sidebar/Skills'

export default {
  name      : 'Sidebar',
  components: { SidebarInfos, SidebarSkills, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Annecy (Haute-savoie)',
              icon: 'mdi-map-marker',
              text: 'A partir de mi-Août 2020'
            },
            {
              name: '13 janvier 1985',
              icon: 'mdi-cake-variant',
              text: '35 ans - Français'
            },
            {
              name: 'Disponible Octobre 2020',
              icon: 'mdi-calendar',
              text: 'Entretiens à partir de mi-Août'
            }
          ],
        }
      },
    }
  },
}
</script>

<style scoped lang="sass">

#sidebar
  color: white

.title
  border-bottom: 2px #bfbfbf solid
  font-weight: 300
  line-height: 1.5 !important
  letter-spacing: 0.2em !important

.leasure
  padding-bottom: 8px
  .v-icon
    margin-right: 5px

</style>
