'use server'

import { MiniCheckoutFormSchema } from '../hooks/useMiniCheckoutForm/schema'

export const purchaseProduct = async (
  purchaseData: MiniCheckoutFormSchema & { productId: number }
) => {
  await new Promise(resolve => setTimeout(() => resolve(purchaseData), 2000))

  return {
    message: 'Purchase completed successfully!'
  }
}
