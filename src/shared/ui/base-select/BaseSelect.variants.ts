import { cva } from 'class-variance-authority'

export const baseSelectVariants = cva(
  'rounded-md bg-neutral-900 text-gray-100 placeholder:text-neutral-500 border transition focus:outline-none focus:ring-2 focus:ring-offset-0 appearance-none',
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-sm',
        lg: 'px-4 py-4 text-base'
      },
      full: {
        true: 'w-full',
        false: ''
      },
      variant: {
        default: 'border-neutral-800 focus:border-yellow-500 focus:ring-yellow-600/30',
        subtle: 'border-neutral-800 bg-neutral-850'
      }
    },
    defaultVariants: {
      size: 'md',
      full: true,
      variant: 'default'
    }
  }
)
