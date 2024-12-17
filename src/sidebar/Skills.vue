<template>
  <div class="text-center">
    <v-chip
      v-for="item in items"
      :key="item.icon"
      class="ma-2"
      theme="light"
    >
      <v-avatar start>
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
    name: 'SidebarSkills',
    data () {
      return {
        items: [
          {
            icon: 'mdi-kubernetes',
            text: {
              'FR': 'Devops Kubernetes',
              'EN': 'Kubernetes Devops'
            }
          },
          {
            icon: 'mdi-language-python',
            text: {
              'FR': 'Développeur full-stack',
              'EN': 'Backend full-stack'
            }
          }
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