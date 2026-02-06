'use client'

import { Button } from '@/shared/components/ui/button'
import { useMiniCheckoutFormContext } from '../../hooks/useMiniCheckoutFormContext'
import { useTransition } from 'react'
import { purchaseProduct } from '../../actions/purchaseProduct'
import { Spinner } from '@/shared/components/ui/spinner'
import { toast } from 'sonner'

interface MiniCheckoutPaymentSubmitButtonProps {
  productId: number
}

export const MiniCheckoutPaymentSubmitButton = ({
  productId
}: MiniCheckoutPaymentSubmitButtonProps) => {
  const form = useMiniCheckoutFormContext()
  const [pending, startTransition] = useTransition()

  return (
    <Button
      variant="default"
      size="lg"
      onClick={form.handleSubmit(data =>
        startTransition(async () => {
          try {
            await purchaseProduct({ ...data, productId })
            toast.success('Compra realizada com sucesso!', {
              position: 'bottom-center',
              richColors: true
            })
          } catch {
            toast.error('Erro ao processar a compra. Tente novamente.', {
              position: 'bottom-center',
              richColors: true
            })
          } finally {
            form.reset()
          }
        })
      )}
      disabled={pending}
    >
      Finalizar Compra 🚀
      {pending && <Spinner data-icon="inline-start" />}
    </Button>
  )
}
