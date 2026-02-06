import { useFormContext } from "react-hook-form"
import { MiniCheckoutFormSchema } from "../useMiniCheckoutForm/schema"

export const useMiniCheckoutFormContext = () => {
  return useFormContext<MiniCheckoutFormSchema>()
}
