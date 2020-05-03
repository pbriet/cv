<template>
  <div>
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