import { ShoppingCart, MapPin } from 'phosphor-react'
import coffeeLogo from '../../assets/coffee_logo.svg'
import {
  HeaderContainer,
  CartContainer,
  QuantityContainer,
  ContentContainer,
  InfoContainer,
} from './styles'

export function Header() {
  const isQuantityExists = true
  return (
    <HeaderContainer>
      <ContentContainer>
        <img alt="Coffee Delivery Logo" src={coffeeLogo} />
        <InfoContainer>
          <button>
            <MapPin size={22} weight="fill" color="#8047F8" />
            Barcelona (SPAIN)
          </button>
          <CartContainer role="menuitem">
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            {isQuantityExists && (
              <QuantityContainer>
                <span>3</span>
              </QuantityContainer>
            )}
          </CartContainer>
        </InfoContainer>
      </ContentContainer>
    </HeaderContainer>
  )
}
