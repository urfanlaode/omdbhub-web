<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/shared/utils/cn'
import { baseInputVariants } from './BaseInput.variants'

export type BaseInputProps = {
  modelValue?: string | number
  type?: 'text' | 'password' | 'search' | 'email'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
  variant?: 'default' | 'subtle'
  name?: string
}

const props = withDefaults(defineProps<BaseInputProps>(), {
  modelValue: '',
  type: 'text',
  size: 'md',
  full: true,
  variant: 'default'
})

const emits = defineEmits(['update:modelValue', 'input'])
const attrs = useAttrs()

const classes = computed(() =>
  cn(baseInputVariants({ size: props.size, full: props.full, variant: props.variant }), attrs.class)
)

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', target.value)
  emits('input', e)
}
</script>

<template>
  <input
    v-bind="attrs"
    :class="classes"
    :value="props.modelValue"
    :type="props.type"
    @input="onInput"
  />
</template>
