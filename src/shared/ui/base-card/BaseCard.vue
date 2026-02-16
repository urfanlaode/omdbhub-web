<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/shared/utils/cn'
import { baseCardVariants } from './BaseCard.variants'

export type BaseCardProps = {
  variant?: 'default' | 'elevated'
  clickable?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<BaseCardProps>(), {
  variant: 'default',
  clickable: false,
  padding: 'md'
})

const attrs = useAttrs()

const classes = computed(() =>
  cn(
    baseCardVariants({
      variant: props.variant,
      clickable: props.clickable,
      padding: props.padding
    }),
    attrs.class
  )
)
</script>

<template>
  <div v-bind="attrs" :class="classes">
    <slot />
  </div>
</template>
