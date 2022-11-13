import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { SectionTitle } from '../sectionTitle'
import { AddressForm } from './addressForm'
import { PaymentMethodsOptions } from './paymentMethodsOptions'

import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  const theme = useTheme()
  return (
    <CompleteOrderFormContainer>
      <h3>Complete your order</h3>
      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine size={22} color={theme['yellow-dark']} />}
          title={'Delivery Address'}
          subtitle={'Tell us the address you want to receive your order'}
        />
        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar size={22} color={theme['purple-regular']} />}
          title={'Payment'}
          subtitle={'Choose your preferred payment method'}
        />
        <PaymentMethodsOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
