'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card'
import { formatCurrency } from '@/shared/utils/formatters'
import { useMemo } from 'react'
import { calculateInstallmentAmount } from '../../utils'
import { useMiniCheckoutFormContext } from '../../hooks/useMiniCheckoutFormContext'
import { Separator } from '@/shared/components/ui/separator'

interface MiniCheckoutPaymentInfoProps {
  productPrice: number
}

export const MiniCheckoutPaymentInfo = (
  props: MiniCheckoutPaymentInfoProps
) => {
  const { watch } = useMiniCheckoutFormContext()
  const installmentNumber = watch('installment_number')
  const paymentMethod = watch('payment_method')

  const installment = useMemo(() => {
    return calculateInstallmentAmount(props.productPrice).find(
      installment => installment.installmentNumber === Number(installmentNumber)
    )
  }, [props.productPrice, installmentNumber])

  const cacktoFeeValue =
    paymentMethod === 'credit_card' && installment?.producerFee
      ? installment.producerFee
      : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo do pedido</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-wrap items-center justify-between">
          <span>Preço do produto</span>
          <span>{formatCurrency(props.productPrice)}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <span>Taxa Cakto</span>
          <span>{formatCurrency(cacktoFeeValue)}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <span>Total</span>
          <span>{formatCurrency(props.productPrice)}</span>
        </div>
        <Separator />
        <div className="flex flex-wrap items-center justify-between font-semibold text-green-700">
          <span>João Silva recebe</span>
          <span>{formatCurrency(props.productPrice - cacktoFeeValue)}</span>
        </div>
        {paymentMethod === 'credit_card' && (
          <p className="text-xs text-gray-600">Você economiza {formatCurrency(cacktoFeeValue)} com PIX</p>
        )}
      </CardContent>
    </Card>
  )
}
