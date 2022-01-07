<template>
  <v-layout>
    <v-flex
      v-if="hasIcon"
      xs2
    >
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-flex>
    <v-flex
      :xs10="hasIcon"
      :xs12="!hasIcon"
    >
      <div>
        {{ transDict(item.name) }}
      </div>
      <p class="light_grey--text">
        <span v-if="item.text">
          {{ transDict(item.text) }}
        </span>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>

import I18nMixin from '@/i18nmixin'

export default {
  name: 'SidebarInfoItem',
  mixins: [I18nMixin],
  props: { item: { type: Object, default: () => {} } },
  computed: {
    hasIcon () {
      return !!this.item.icon
    },
  },
}
</script>

<style scoped>
</style>
