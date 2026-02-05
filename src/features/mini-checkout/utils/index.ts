import Decimal from 'decimal.js'

export const calculateProducerFee = (params: {
  installmentNumber: number
  totalAmount: number
}) => {
  const { installmentNumber, totalAmount } = params

  if (installmentNumber === 1) {
    return Decimal(0.0399).times(totalAmount).toNumber()
  }

  const baseFee = Decimal(0.0499).times(totalAmount)

  const extraInstallments = installmentNumber - 1
  const extraInstallmentsFeeValue = Decimal(0.02).times(extraInstallments)
  const extraInstallmentsFeeAmount = baseFee.plus(extraInstallmentsFeeValue)

  return extraInstallmentsFeeAmount.toNumber()
}

export const calculateInstallmentAmount = (totalAmount: number) => {
  return Array.from({ length: 12 }, (_, index) => {
    const installmentNumber = index + 1
    const installmentValueWithoutFee = totalAmount / installmentNumber
    const producerFee = calculateProducerFee({ installmentNumber, totalAmount })

    return {
      installmentNumber,
      installmentValueWithoutFee,
      producerFee
    }
  })
}
