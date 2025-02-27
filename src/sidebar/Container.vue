<template>
  <v-card
    theme="custom-dark"
    id="sidebar"
    color="primary-darken-3"
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Pascal Briet
        </h1>
        <span>
          {{ trans('SUBTITLE') }}
        </span>
      </div>

      <div class="mb-4">
        <div class="text-h6 mb-3">
          Infos
        </div>
        <sidebar-infos :options="sections.info" />
      </div>

      <div class="mb-4">
        <div class="text-h6 mb-3">
          {{ trans('PROFILE_TITLE') }}
        </div>
        <sidebar-skills />
      </div>

      <div class="mb-4">
        <div class="text-h6 mb-3">
          {{ trans('KEYPOINT_TITLE') }}
        </div>
        <ul>
          <li v-html="trans('DEVOPS')"/>
          <li v-html="trans('FULLSTACK_DEVELOPER')"/>
          <li>{{ trans('DEVOPS_SKILLS') }}</li>
          <li>{{ trans('EXPERIENCE') }}</li>
          <li>{{ trans('ENTREPRENEUR') }}</li>
          <li>{{ trans('PRAGMATIC') }}</li>
          <li>{{ trans('RIGOROUS') }}</li>
          <li>{{ trans('SELFTRAINING') }}</li>
        </ul>
      </div>


      <div class="mb-4">
        <div class="text-h6 mb-3">
          {{ trans('HOBBIES') }}
        </div>
        <v-row>
          <v-col cols="6">
            <div class="leasure">
              <v-icon>mdi-feather</v-icon> {{ trans('WRITING') }}
            </div>
            <div class="leasure">
              <v-icon>mdi-earth</v-icon> {{ trans('GEOPOLITICS') }}
            </div>
          </v-col>
          <v-col cols="6">
            <div class="leasure">
              <v-icon>mdi-tennis</v-icon> {{ trans('BADMINTON') }}
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="mb-4">
        <div class="text-h6 mb-3">
          {{ trans('LANGUAGES') }}
        </div>
        {{ trans('FRENCH') }}<br>
        {{ trans('ENGLISH') }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/sidebar/Avatar'
import SidebarInfos from '@/sidebar/Infos'
import SidebarSkills from '@/sidebar/Skills'
import I18nMixin from '@/i18nmixin'

export default {
  name: 'SidebarContainer',
  components: { SidebarInfos, SidebarSkills, Avatar },
  mixins: [I18nMixin],
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: {
                'FR': 'Ancenis (Loire-Atlantique)',
                'EN': 'Ancenis (France, Loire-Atlantique)'
              },
              text: {
                'FR': 'Permis A',
                'EN': 'Driving Licence'
              },
              icon: 'mdi-map-marker'
            },
            {
              name: {
                'FR': '06.80.32.77.81',
                'EN': '(+33) (0)6 80 32 77 81'
              },
              icon: 'mdi-phone'
            },
            {
              name: {
                'FR': '13 janvier 1985',
                'EN': 'Jan 13th, 1985'
              },
              icon: 'mdi-cake-variant',
              text: {
                'FR': '40 ans - Français',
                'EN': '40 years old - French'
              }
            },
            {
              name: {
                'FR': 'Freelance',
                'EN': 'Freelancer'
              },
              icon: 'mdi-calendar'
            }
          ],
        }
      },
      translations: {
        SUBTITLE: {
          'FR': 'Ingénieur Devops',
          'EN': 'Devops Engineer'
        },
        KEYPOINT_TITLE: {
          'FR': 'Points clés',
          'EN': 'Key points'
        },
        PROFILE_TITLE: {
          'FR': 'Profil',
          'EN': 'Main skills'
        },
        FULLSTACK_DEVELOPER: {
          'FR': 'Ex - Développeur <b>full-stack</b> Python/Django/JS',
          'EN': 'Prev: <b>Full stack</b> developer (Python/Django/JS)'
        },
        DEVOPS: {
          'FR': 'Ingénieur <b>Devops</b> - Kubernetes',
          'EN': '<b>Devops</b> Engineer - Kubernetes'
        },
        DEVOPS_SKILLS: {
          'FR': 'Containerisation, migrations, DevSecOps, CI/CD',
          'EN': 'Containerization, migrations, DevSecOps, CI/CD'
        },
        EXPERIENCE: {
          'FR': '18 ans d\'expérience',
          'EN': '18 years experience'
        },
        ENTREPRENEUR: {
          'FR': 'Esprit d\'entrepreneur',
          'EN': 'Entrepreneurship'
        },
        PRAGMATIC: {
          'FR': 'Pragmatique',
          'EN': 'Pragmatic'
        },
        RIGOROUS: {
          'FR': 'Rigoureux et efficace',
          'EN': 'Efficient and meticulous'
        },
        SELFTRAINING: {
          'FR': 'Auto-apprentissage',
          'EN': 'Self-learner'
        },
        HOBBIES: {
          'FR': 'Loisirs',
          'EN': 'Hobbies'
        },
        WRITING: {
          'FR': 'Ecriture',
          'EN': 'Writing'
        },
        BADMINTON: {
          'FR': 'Badminton',
          'EN': 'Badminton'
        },
        GEOPOLITICS: {
          'FR': 'Géopolitique',
          'EN': 'Geopolitics'
        },
        LANGUAGES: {
          'FR': 'Langues',
          'EN': 'Spoken languages'
        },
        FRENCH: {
          'FR': 'Français : natif',
          'EN': 'French: native'
        },
        ENGLISH: {
          'FR': 'Anglais : professionnel (1 an à Oxford)',
          'EN': 'English: professional (1 year spent in Oxford)'
        }
      }
    }
  }
}
</script>

<style scoped lang="sass">

#sidebar
  color: white

.text-h6
  border-bottom: 2px #bfbfbf solid
  font-weight: 300
  line-height: 1.5 !important
  letter-spacing: 0.2em !important

.leasure
  padding-bottom: 8px
  .v-icon
    margin-right: 5px

</style>
