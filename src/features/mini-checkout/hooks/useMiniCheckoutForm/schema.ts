import z from 'zod'

export const miniCheckoutFormSchema = z.object({
  email: z.email({ error: 'Email inválido' }),
  document: z.string().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { error: 'CPF inválido' })
})

export type MiniCheckoutFormSchema = z.infer<typeof miniCheckoutFormSchema>
