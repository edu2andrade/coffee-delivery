import { useLocation } from 'react-router-dom'
import { IFormInputs } from '../checkoutPage'

import {
  ContentContainer,
  OrderInfoContainer,
  SuccessPageContainer,
  Title,
} from './styles'
import deliveryImg from '../../../src/assets/delivery_image.svg'
import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'

import { OrderDetail } from './orderDetail'
import { useTheme } from 'styled-components'

type LocationType = {
  state: IFormInputs
}

export function SuccessPage() {
  const theme = useTheme()

  // Retrieve data from react hook form
  const { state } = useLocation() as LocationType

  return (
    <SuccessPageContainer>
      <ContentContainer>
        <Title>
          <h1>Yes! Order confirmed</h1>
          <p>Now you can relax and just wait for your coffee.</p>
        </Title>
        <OrderInfoContainer>
          <OrderDetail
            icon={<MapPin weight="fill" />}
            iconBG={theme['purple-regular']}
            title={
              <p>
                Delivery address:{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
              </p>
            }
            subtitle={
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
            }
          />
          <OrderDetail
            icon={<Timer weight="fill" />}
            iconBG={theme['yellow-regular']}
            title={<p>Delivery time preview</p>}
            subtitle={<strong>20 - 30 minutes</strong>}
          />
          <OrderDetail
            icon={<CurrencyDollar weight="fill" />}
            iconBG={theme['yellow-dark']}
            title={<p>Payment Method:</p>}
            subtitle={<strong>{state.paymentMethods}</strong>}
          />
        </OrderInfoContainer>
        <img src={deliveryImg} alt="Motorbike delivery image" />
      </ContentContainer>
    </SuccessPageContainer>
  )
}
