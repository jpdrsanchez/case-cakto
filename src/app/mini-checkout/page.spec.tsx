import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import MiniCheckout from './page'

test('MiniCheckoutPage', () => {
  render(<MiniCheckout />)
  screen.getByRole('heading', {
    level: 1,
    name: /Curso de Marketing Digital 2025/i
  })
  screen.getByText(/Dados Pessoais/i)
  screen.getByText(/Pagamento/i)
  screen.getByText(/Resumo do pedido/i)
  screen.getByRole('button', { name: /Finalizar Compra/i })
})
