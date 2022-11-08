import { CompleteOrderForm } from './components/completeOrderForm'
import { OrderSummary } from './components/orderSummary'
import { CheckoutContainer } from './styles'

export function CheckoutPage() {
  return (
    <CheckoutContainer>
      <CompleteOrderForm />
      <OrderSummary />
    </CheckoutContainer>
  )
}
