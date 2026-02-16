<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '@/shared/utils/cn'
import { baseSelectVariants } from './BaseSelect.variants'
import { ChevronDown } from 'lucide-vue-next'

export type SelectOption = {
  label: string
  value: string | number
}

export type BaseSelectProps = {
  modelValue?: string | number | null
  options?: SelectOption[]
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
  variant?: 'default' | 'subtle'
  name?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<BaseSelectProps>(), {
  modelValue: null,
  options: () => [],
  placeholder: undefined,
  size: 'md',
  full: true,
  variant: 'default',
  name: undefined,
  disabled: false
})

const emits = defineEmits(['update:modelValue', 'change'])
const attrs = useAttrs()

const sizePadding = computed(() => {
  return props.size === 'sm' ? 'pr-8' : props.size === 'lg' ? 'pr-12' : 'pr-10'
})

const classes = computed(() =>
  cn(
    baseSelectVariants({ size: props.size, full: props.full, variant: props.variant }),
    sizePadding.value,
    attrs.class
  )
)

function onChange(e: Event) {
  const target = e.target as HTMLSelectElement
  const val = target.value
  emits('update:modelValue', val)
  emits('change', e)
}
</script>

<template>
  <div class="relative">
    <select
      v-bind="attrs"
      :class="classes"
      :name="props.name"
      :disabled="props.disabled"
      :value="props.modelValue ?? ''"
      @change="onChange"
      aria-invalid="false"
    >
      <option v-if="props.placeholder" disabled value="">{{ props.placeholder }}</option>

      <option v-for="opt in props.options" :key="String(opt.value)" :value="opt.value">
        {{ opt.label }}
      </option>

      <slot />
    </select>

    <ChevronDown
      class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 stroke-current"
    />
  </div>
</template>
