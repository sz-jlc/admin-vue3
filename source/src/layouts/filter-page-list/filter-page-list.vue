<template>
  <div class="ftp-wrap">
    <div class="filter-wrap" ref="filterWrap">
      <slot name="filter"></slot>
    </div>
    <div class="filter-bottom">
      <slot name="filter-bottom"></slot>
    </div>
    <div class="list-wrap" ref="listWrap">
      <slot name="list"></slot>
    </div>
    <div class="list-bottom">
      <slot name="list-bottom"></slot>
    </div>
    <div class="page-wrap" ref="pageWrap">
      <slot name="page"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'filter-page-list-layout'
})
</script>

<style lang="scss" scoped>
@import './filter-page-list.scss';
</style>
