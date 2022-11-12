<template>
  <slot></slot>
</template>

<script setup lang='ts' name="jlc-config-provider">
import { configProviderContextKey } from '@/utils/global-config'
import { propsType } from './config-provider'

const props = defineProps(propsType)

provide(configProviderContextKey, props as any)
</script>
