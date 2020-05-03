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
      {{ item.text }}
    </v-chip>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            icon: 'mdi-language-python',
            text: 'Développeur backend'
          },
          {
            icon: 'mdi-cogs',
            text: 'Architecte web'
          },
          {
            icon: 'mdi-docker',
            text: 'Devops'
          },
        ]
      }
    }
  }
</script>