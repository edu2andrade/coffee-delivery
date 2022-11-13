import { PaymentMethodsContainer, ContentContainer } from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

interface PaymentMethodsInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  label: string
}

export const PaymentMethodsInput = forwardRef<
  HTMLInputElement,
  PaymentMethodsInputProps
>(function PaymentMethodsInput({ id, icon, label, ...props }, ref) {
  return (
    <PaymentMethodsContainer>
      <input id={id} name="paymentMethod" {...props} type="radio" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodsContainer>
  )
})
