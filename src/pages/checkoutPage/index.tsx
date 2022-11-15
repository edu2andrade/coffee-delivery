/* eslint-disable no-unused-vars */
import { useAppDispatch } from '../../app/hooks'
import { clearCart } from '../../features/cart/cart-slice'

import { FormProvider, useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import { CheckoutContainer } from './styles'

import { CompleteOrderForm } from './components/completeOrderForm'
import { OrderSummary } from './components/orderSummary'

enum PaymentMethods {
  credit = 'Credit Card',
  debit = 'Debit Card',
  cash = 'Cash',
}

export interface IFormInputs {
  zip: number
  street: string
  number: number
  adInfo: string
  district: string
  city: string
  uf: string
  paymentMethods: PaymentMethods
}

export function CheckoutPage() {
  const confirmOrderForm = useForm<IFormInputs>()

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  // Dispatch from Redux
  const dispacth = useAppDispatch()

  function handleConfirmOrder(data: IFormInputs) {
    navigate('/success', {
      state: data,
    })
    // Call the function to clean cart...
    dispacth(clearCart())
  }

  return (
    <CheckoutContainer>
      <FormProvider {...confirmOrderForm}>
        <form
          className="formContainer"
          onSubmit={handleSubmit(handleConfirmOrder)}
        >
          <CompleteOrderForm />
          <OrderSummary />
        </form>
      </FormProvider>
    </CheckoutContainer>
  )
}
