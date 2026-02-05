import z from 'zod'

export const miniCheckoutFormSchema = z
  .object({
    email: z.email({ error: 'Email inválido' }),
    document: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { error: 'CPF inválido' }),
    payment_method: z.enum(['credit_card', 'pix'], {
      error: 'Método de pagamento inválido'
    }),
    installment_number: z.string().regex(/^\d+$/).optional()
  })
  .superRefine((data, ctx) => {
    if (data.payment_method === 'credit_card' && !data.installment_number) {
      ctx.addIssue({
        code: 'custom',
        expected: 'O número de parcelas é obrigatório para cartão de crédito',
        path: ['installment_number']
      })
    }
  })

export type MiniCheckoutFormSchema = z.infer<typeof miniCheckoutFormSchema>
