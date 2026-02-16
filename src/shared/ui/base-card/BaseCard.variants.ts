import { cva } from 'class-variance-authority'

export const baseCardVariants = cva('rounded-lg border bg-neutral-900 overflow-hidden shadow-sm', {
  variants: {
    variant: {
      default: 'border-neutral-800',
      elevated: 'border-neutral-800 shadow-md'
    },
    clickable: {
      true: 'cursor-pointer hover:shadow-lg transition',
      false: ''
    },
    padding: {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6'
    }
  },
  defaultVariants: {
    variant: 'default',
    clickable: false,
    padding: 'md'
  }
})
