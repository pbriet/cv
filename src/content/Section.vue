<template>
  <v-card
    v-if="true"
    flat
    class="content-section"
  >
    <v-card-title>
      <div class="title">
        <div class="d-flex justify-space-between align-end">
          <h3 class="mb-1 primary--text text--darken-2">
            {{ title }}
          </h3>
          <v-switch
            v-model="detailed"
            dense
            class="title-switch d-none d-sm-flex d-print-none"
            :label="detailed ? trans('LONG_VERSION') : trans('SHORT_VERSION')"
          />
        </div>
      </div>
      <v-switch
        v-model="detailed"
        dense
        class="title-switch title-switch-xs d-sm-none d-print-none"
        :label="detailed ? trans('LONG_VERSION') : trans('SHORT_VERSION')"
      />
      <v-spacer />
      <slot name="actions" />
    </v-card-title>
    <v-card-text>
      <div
        v-show="!monoSlot && !detailed"
      >
        <slot name="short-version"/>
      </div>
      <div
        v-show="!monoSlot && detailed"
      >
        <slot name="long-version"/>
      </div>
      <div
        v-show="monoSlot"
      >
        <slot :detailed="detailed" name="default"/>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import I18nMixin from '@/i18nmixin'

export default {
  name      : 'ContentSection',
  mixins: [I18nMixin],
  components: { },
  props     : {
    title: { type: String, default: '' },
    monoSlot: { type: Boolean, default: false }
  },
  data () {
    return {
      detailed: false,
      translations: {
        LONG_VERSION: {
          'FR': 'Version longue',
          'EN': 'Long version'
        },
        SHORT_VERSION: {
          'FR': 'Version courte',
          'EN': 'Short version'
        }
      }
    }
  }
}
</script>

<style lang="sass">
.content-section
  .title
    border-bottom: 2px #bfbfbf solid
    width: 100%

  .title-switch
    margin: 0
    height: 32px
    .v-label
      font-weight: 400
      font-size: 14px

  .title-switch-xs
    padding-top: 10px

  .switch-col
    text-align: right

</style>
