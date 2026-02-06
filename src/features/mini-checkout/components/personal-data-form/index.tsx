'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import { Field, FieldError } from '@/shared/components/ui/field'
import { useMiniCheckoutFormContext } from '../../hooks/useMiniCheckoutFormContext'
import { Controller } from 'react-hook-form'
import { TextField } from '@/shared/components/common/text-field'

export const MiniCheckoutPersonalDataForm = () => {
  const form = useMiniCheckoutFormContext()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dados Pessoais</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field className="relative" data-invalid={fieldState.invalid}>
              <TextField
                label="E-mail"
                id="email"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="document"
          render={({ field, fieldState }) => (
            <Field className="relative" data-invalid={fieldState.invalid}>
              <TextField
                label="CPF"
                id="document"
                aria-invalid={fieldState.invalid}
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </CardContent>
    </Card>
  )
}
