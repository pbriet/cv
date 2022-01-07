<template>
  <div class="text-center">
    <v-chip
      v-for="item in items"
      :key="item.icon"
      class="ma-2"
      light
      color="white"
      text-color="secondary darken-4"
    >
      <v-avatar left>
        <v-icon>{{ item.icon }}</v-icon>
      </v-avatar>
      {{ transDict(item.text) }}
    </v-chip>
  </div>
</template>

<script>
  import I18nMixin from '@/i18nmixin'

  export default {
    mixins: [I18nMixin],
    data () {
      return {
        items: [
          {
            icon: 'mdi-language-python',
            text: {
              'FR': 'Développeur backend',
              'EN': 'Backend developer'
            }
          },
          {
            icon: 'mdi-cogs',
            text: {
              'FR': 'Architecte web',
              'EN': 'Web architect'
            }
          },
          {
            icon: 'mdi-docker',
            text: {
              'FR': 'Devops',
              'EN': 'Devops'
            }
          },
          {
            icon: 'mdi-language-javascript',
            text: {
              'FR': 'Développeur webapp',
              'EN': 'Webapp developer'
            }
          },
        ]
      }
    }
  }
</script>


      translations: {
        SUBTITLE: {
          'FR': 'Ingénieur web en quête de challenge',
          'EN': 'Full-stack web engineer, looking for challenge'
        },