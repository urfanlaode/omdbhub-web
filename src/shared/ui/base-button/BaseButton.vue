<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/shared/utils/cn'
import { baseButtonVariants } from './ButtonBase.variants'

export type BaseButtonProps = {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  variant: 'default',
  size: 'md',
  type: 'button'
})

const attrs = useAttrs()

const classes = computed(() =>
  cn(baseButtonVariants({ variant: props.variant, size: props.size }), attrs.class)
)
</script>

<template>
  <button v-bind="attrs" :type="props.type" :class="classes">
    <slot />
  </button>
</template>
