import { MiniCheckoutProductInfo } from '@/features/mini-checkout/components/product-info'
import { getProduct } from '@/features/mini-checkout/data/getProduct'
import { MiniCheckoutWrapperLayout } from '@/features/mini-checkout/layouts/wrapper-layout'

export default function MiniCheckout() {
  const product = getProduct()

  return (
    <MiniCheckoutWrapperLayout>
      <MiniCheckoutProductInfo product={product} />
    </MiniCheckoutWrapperLayout>
  )
}
