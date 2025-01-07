<template>
  <div class="text-center">
    <v-chip
      v-for="item in items"
      :key="item.icon"
      class="ma-2"
      theme="light"
      variant="elevated"
      color="white"
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
              'FR': 'Ex - Développeur full-stack',
              'EN': 'Prev: fullstack dev'
            }
          }
        ]
      }
    }
  }
</script>

