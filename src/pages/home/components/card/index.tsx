import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import { useAppDispatch } from '../../../../app/hooks'
import { addToCart } from '../../../../features/cart/cart-slice'

import { CoffeeType } from '../../../../data/data'

import {
  CardContainer,
  TagContainer,
  Tag,
  CartButton,
  DetailsContainer,
  Price,
  QuantitySelect,
  UserActions,
} from './styles'

interface CardProps {
  coffee: CoffeeType
}

export function Card({ coffee }: CardProps) {
  const { name, tags, description, image, price } = coffee
  const [amount, setAmount] = useState(1)
  // Call dispatch from Redux here...
  const dispatch = useAppDispatch()

  function handleIncreaseQuantity() {
    setAmount((state) => state + 1)
  }
  function handleDecreaseQuantity() {
    setAmount((state) => state - 1)
  }
  function handleAddToCart() {
    dispatch(
      addToCart({
        ...coffee,
        amount,
      }),
    )
  }

  return (
    <CardContainer>
      <img src={image} alt={`A cup of ${name} image`} />
      <h3>{name}</h3>
      <TagContainer>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
      <p>{description}</p>
      <DetailsContainer>
        <Price>
          € <span>{price.toFixed(2)}</span>
        </Price>
        <UserActions>
          <QuantitySelect>
            <button onClick={handleDecreaseQuantity}>
              <Minus size={14} color="#8047F8" weight="fill" />
            </button>
            {amount}
            <button onClick={handleIncreaseQuantity}>
              <Plus size={14} color="#8047F8" weight="fill" />
            </button>
          </QuantitySelect>
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </UserActions>
      </DetailsContainer>
    </CardContainer>
  )
}
