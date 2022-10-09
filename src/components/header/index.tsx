import { ShoppingCart, GoogleLogo } from 'phosphor-react'
import coffeeLogo from '../../assets/coffee_logo.svg'
import {
  HeaderContainer,
  CartContainer,
  QuantityContainer,
  ContentContainer,
  InfoContainer,
} from './styles'

export function Header() {
  const isQuantityExists = false
  return (
    <HeaderContainer>
      <ContentContainer>
        <img alt="Coffee Delivery Logo" src={coffeeLogo} />
        <InfoContainer>
          <button>
            <GoogleLogo size={28} weight="fill" color="#8047F8" />
            Login with Google
          </button>
          <CartContainer>
            <ShoppingCart size={28} weight="fill" color="#C47F17" />
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
