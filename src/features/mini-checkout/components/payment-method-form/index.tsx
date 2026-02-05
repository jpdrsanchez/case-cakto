'use client'

import { RadioButton } from '@/shared/components/common/radio-button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import { RadioGroup } from '@/shared/components/ui/radio-group'
import { Controller } from 'react-hook-form'
import { useMiniCheckoutFormContext } from '../../hooks/useMiniCheckoutFormContext'
import { Field, FieldLabel } from '@/shared/components/ui/field'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components/ui/select'
import { calculateInstallmentAmount } from '../../utils'
import { formatCurrency } from '@/shared/utils/formatters'
import { useMemo } from 'react'

interface PaymentMethodFormProps {
  productPrice: number
}

export const PaymentMethodForm = (props: PaymentMethodFormProps) => {
  const form = useMiniCheckoutFormContext()
  const paymentMethod = form.watch('payment_method')

  const installments = useMemo(
    () => calculateInstallmentAmount(props.productPrice),
    [props.productPrice]
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Pagamento</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Controller
          control={form.control}
          name="payment_method"
          render={({ field, fieldState }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              name={field.name}
            >
              <RadioButton
                id="pix"
                description="PIX (Taxa 0% 🔥)"
                value="pix"
                invalid={fieldState.invalid}
                data-invalid={fieldState.invalid}
              />
              <RadioButton
                id="credit_card"
                description="Cartão de Crédito"
                value="credit_card"
                invalid={fieldState.invalid}
                data-invalid={fieldState.invalid}
              />
            </RadioGroup>
          )}
        />
        {paymentMethod === 'credit_card' && (
          <Controller
            control={form.control}
            name="installment_number"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="installment_number">
                  Número de Parcelas
                </FieldLabel>
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="installment_number"
                    aria-invalid={fieldState.invalid}
                  >
                    <SelectValue placeholder="Selecionar número de parcelas" />
                  </SelectTrigger>
                  <SelectContent position="item-aligned">
                    {installments.map(
                      installment => (
                        <SelectItem
                          key={installment.installmentNumber}
                          value={`${installment.installmentValueWithoutFee}`}
                        >
                          {installment.installmentNumber}x de{' '}
                          {formatCurrency(
                            installment.installmentValueWithoutFee
                          )}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </Field>
            )}
          />
        )}
      </CardContent>
    </Card>
  )
}
