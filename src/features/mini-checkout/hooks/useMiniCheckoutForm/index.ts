import { useForm } from "react-hook-form"
import { miniCheckoutFormSchema, MiniCheckoutFormSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const useMiniCheckoutForm = () => {
  const form = useForm<MiniCheckoutFormSchema>({
    resolver: zodResolver(miniCheckoutFormSchema),
    mode: 'onBlur',
    defaultValues: {
      document: '',
      email: ''
    }
  })

  return form
}
