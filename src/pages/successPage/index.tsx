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

export function SuccessPage() {
  const theme = useTheme()

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
                Order <strong>confirmed</strong>
              </p>
            }
            subtitle={<p>Order confirmed</p>}
          />
          <OrderDetail
            icon={<Timer weight="fill" />}
            iconBG={theme['yellow-regular']}
            title={
              <p>
                Order <strong>confirmed</strong>
              </p>
            }
            subtitle={<p>Order confirmed</p>}
          />
          <OrderDetail
            icon={<CurrencyDollar weight="fill" />}
            iconBG={theme['yellow-dark']}
            title={
              <p>
                Order <strong>confirmed</strong>
              </p>
            }
            subtitle={<p>Order confirmed</p>}
          />
        </OrderInfoContainer>
        <img src={deliveryImg} alt="Motorbike delivery image" />
      </ContentContainer>
    </SuccessPageContainer>
  )
}
