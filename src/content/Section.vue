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
            class="title-switch"
            :label="detailed ? 'Version longue' : 'Version courte'"
          />
        </div>
      </div>
      <v-spacer />
      <slot name="actions" />
    </v-card-title>
    <v-card-text>
      <slot
        v-if="!monoSlot && !detailed"
        name="short-version"
      />
      <slot
        v-if="monoSlot && detailed"
        name="long-version"
      />
      <slot
        v-if="monoSlot"
        v-bind:detailed="detailed"
        name="default"
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name      : 'ContentSection',
  components: { },
  props     : {
    title: { type: String, default: '' },
    monoSlot: { type: Boolean, default: false }
  },
  data () {
    return {
      detailed: false
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

  .switch-col
    text-align: right

</style>
