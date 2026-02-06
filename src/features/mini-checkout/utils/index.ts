import Decimal from 'decimal.js'

export const calculateProducerFee = (params: {
  installmentNumber: number
  totalAmount: number
}) => {
  const { installmentNumber, totalAmount } = params

  if (installmentNumber === 1) {
    return Decimal(0.0399).times(totalAmount).toNumber()
  }

  return Decimal(0.0499).times(totalAmount).toNumber()
}

export const calculateBuyerFee = (params: {
  installmentNumber: number
  totalAmount: number
}) => {
  const { installmentNumber, totalAmount } = params

  if (installmentNumber === 1) {
    return 0
  }

  const extraInstallments = installmentNumber - 1
  const extraInstallmentsFeeValue = Decimal(0.02).times(extraInstallments)

  return extraInstallmentsFeeValue.times(totalAmount).toNumber()
}

export const calculateInstallmentAmount = (totalAmount: number) => {
  return Array.from({ length: 12 }, (_, index) => {
    const installmentNumber = index + 1
    const installmentValueWithoutFee = totalAmount / installmentNumber

    const producerFee = calculateProducerFee({ installmentNumber, totalAmount })
    const buyerFee = calculateBuyerFee({ installmentNumber, totalAmount })

    const installmentValueWithBuyerFee = Decimal(buyerFee).plus(installmentValueWithoutFee).toNumber()

    return {
      installmentNumber,
      installmentValueWithoutFee,
      installmentValueWithBuyerFee,
      producerFee,
      buyerFee,
    }
  })
}
