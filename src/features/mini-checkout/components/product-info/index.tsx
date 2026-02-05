import { Card, CardContent } from '@/shared/components/ui/card'
import { Product } from '../../models/product'
import { formatCurrency } from '@/shared/utils/formatters'

export interface MiniCheckoutProductInfoProps {
  product: Pick<Product, 'name' | 'currentPrice' | 'originalPrice'>
}

export const MiniCheckoutProductInfo = (
  props: MiniCheckoutProductInfoProps
) => {
  return (
    <Card>
      <CardContent>
        <h1 className='text-xl/normal font-bold mb-2'>{props.product.name}</h1>
        <p className='text-base'>
          De <span className='line-through'>{formatCurrency(props.product.originalPrice)}</span> por{' '}
          <span className='font-semibold'>{formatCurrency(props.product.currentPrice)}</span>
        </p>
      </CardContent>
    </Card>
  )
}
