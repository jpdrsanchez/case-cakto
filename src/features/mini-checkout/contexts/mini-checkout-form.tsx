'use client'

import { FormProvider } from 'react-hook-form'
import { useMiniCheckoutForm } from '../hooks/useMiniCheckoutForm'

export const MiniCheckoutFormProvider = (
  props: Readonly<React.PropsWithChildren>
) => {
  const form = useMiniCheckoutForm()

  return <FormProvider {...form}>{props.children}</FormProvider>
}
