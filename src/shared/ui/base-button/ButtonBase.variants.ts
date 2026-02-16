import { cva } from 'class-variance-authority'

export const baseButtonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-medium',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none',
    'focus:ring-2 focus:ring-[var(--color-primary-500)]',
    'focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]',
    'disabled:opacity-50 disabled:pointer-events-none',
    'rounded-[var(--radius-button)]'
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-gradient-to-b',
          'from-[var(--color-primary-500)]',
          'to-[var(--color-primary-600)]',
          'text-black',
          'hover:from-[var(--color-primary-600)]',
          'hover:to-[var(--color-primary-700)]',
          'active:scale-[0.98]'
        ].join(' '),

        outline: [
          'border',
          'border-[var(--color-primary-500)]',
          'text-[var(--color-primary-500)]',
          'bg-transparent',
          'hover:bg-[rgba(245,185,66,0.08)]'
        ].join(' '),

        ghost: [
          'text-[var(--color-muted)]',
          'hover:bg-[var(--color-surface)]',
          'hover:text-white'
        ].join(' '),

        destructive: [
          'bg-[var(--color-danger)]',
          'text-white',
          'hover:brightness-110',
          'active:scale-[0.98]'
        ].join(' ')
      },

      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base'
      }
    },

    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)
