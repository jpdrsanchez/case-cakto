import { useEffect, useState } from "react"


export const useShakeAnimation = () => {
  const [isShaking, setIsShaking] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setIsShaking(prev => !prev)
    }, 3000)
  }, [])

  return {
    isShaking
  }
}
