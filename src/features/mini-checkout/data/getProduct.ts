import { Product } from "../models/product"

export const getProduct = () => {
  return {
    id: 1,
    name: 'Curso de Marketing Digital 2025',
    originalPrice: 497.00,
    currentPrice: 297.00,
    producer: 'João Silva',
    format: 'digital',
    deliveryTime: 'imediato'
  } satisfies Product
}
