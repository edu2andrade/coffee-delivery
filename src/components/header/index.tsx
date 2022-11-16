import { ShoppingCart, MapPin } from 'phosphor-react'
import { useAppSelector } from '../../app/hooks'
import coffeeLogo from '../../assets/coffee_logo.svg'
import { Link } from 'react-router-dom'
import {
  HeaderContainer,
  CartContainer,
  QuantityContainer,
  ContentContainer,
  InfoContainer,
} from './styles'

export function Header() {
  const { totalAmount } = useAppSelector((store) => store)
  return (
    <HeaderContainer>
      <ContentContainer>
        <Link to="/">
          <img alt="Coffee Delivery Logo" src={coffeeLogo} />
        </Link>
        <InfoContainer>
          <button>
            <MapPin size={22} weight="fill" color="#8047F8" />
            Barcelona (SPAIN)
          </button>
          <Link to="/checkout">
            <CartContainer role="menuitem">
              <ShoppingCart size={22} weight="fill" color="#C47F17" />
              {totalAmount ? (
                <QuantityContainer>
                  <span>{totalAmount}</span>
                </QuantityContainer>
              ) : null}
            </CartContainer>
          </Link>
        </InfoContainer>
      </ContentContainer>
    </HeaderContainer>
  )
}
