<template>
  <div class="mb-4">
    <div class="title mb-3">
      {{ options.title }}
    </div>
    <SidebarInfoItem
      v-for="(item, index) in options.items"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import SidebarInfoItem from '@/sidebar/InfoItem'
export default {
  name      : 'SidebarInfos',
  components: { SidebarInfoItem },
  props     : { options: { type: Object, default: () => {} } },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  font-weight: 300;
  line-height: 1.5 !important;
  letter-spacing: 0.2em !important;
}
</style>
