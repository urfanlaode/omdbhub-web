import { useForm } from 'vee-validate'
import { useLogin } from './useLogin'
import { loginSchema, type LoginFormDto } from '../schema/login.schema'
import { toTypedSchema } from '@vee-validate/zod'
import { router } from '@/app/router'

export function useLoginForm() {
  const login = useLogin()

  const form = useForm<LoginFormDto>({
    validationSchema: toTypedSchema(loginSchema)
  })

  const submit = form.handleSubmit((values) => {
    login.mutate(values, {
      onSuccess: () => {
        router.replace({ name: 'Movies' })
      }
    })
  })

  return {
    ...form,
    submit,
    isPending: login.isPending,
    error: login.error
  }
}
