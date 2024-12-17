<template>
  <v-row>
    <v-col
      v-if="hasIcon"
      cols="2"
    >
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-col>
    <v-col
      :cols="hasIcon ? 10 : 12"
    >
      <div>
        {{ transDict(item.name) }}
      </div>
      <p class="text-light-grey">
        <span v-if="item.text">
          {{ transDict(item.text) }}
        </span>
      </p>
    </v-col>
  </v-row>
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
