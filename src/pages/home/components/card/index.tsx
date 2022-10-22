import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
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
  // Set all state management on Redux...
  const [quantity, setQuantity] = useState(1)

  const handleIncreaseQuantity = () => {
    setQuantity((state) => state + 1)
  }

  const handleDecreaseQuantity = () => {
    setQuantity((state) => state - 1)
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
            {quantity}
            <button onClick={handleIncreaseQuantity}>
              <Plus size={14} color="#8047F8" weight="fill" />
            </button>
          </QuantitySelect>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </UserActions>
      </DetailsContainer>
    </CardContainer>
  )
}
