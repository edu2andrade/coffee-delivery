import { Minus, Plus, Trash } from 'phosphor-react'

import { useAppSelector } from '../../../../app/hooks'

import {
  Card,
  Actions,
  ConfirmOrderButton,
  Container,
  CounterSelect,
  Price,
  RemoveButton,
  SelectedCoffeeCard,
} from './styles'

export const OrderSummary = () => {
  const { products, cartItemsTotal } = useAppSelector((store) => store.cart)

  return (
    <Card>
      {products &&
        products.map((product) => (
          <SelectedCoffeeCard key={product.id}>
            <img src={product.image} alt="" />
            <div>
              <p>{product.name}</p>
              <Actions>
                <CounterSelect>
                  <button
                  // onClick={() => changeQuantityById(product.id, 'decrease')}
                  >
                    <Minus size={20} color="#8047F8" weight="fill" />
                  </button>
                  {product.amount}
                  <button
                  // onClick={() => changeQuantityById(product.id, 'increase')}
                  >
                    <Plus size={20} color="#8047F8" weight="fill" />
                  </button>
                </CounterSelect>
                <RemoveButton /* onClick={() => removeProduct(product.id)} */>
                  <Trash size={16} color="#8047F8" />
                  Remove
                </RemoveButton>
              </Actions>
            </div>
            <Price>{`€ ${product.price.toFixed(2)}`}</Price>
          </SelectedCoffeeCard>
        ))}

      <Container>
        <ul>
          <li>
            <span>Total Items</span>
            <span>{`€ ${cartItemsTotal.toFixed(2)}`}</span>
          </li>
          <li>
            <span>Delivery costs</span>
            <span>€ 5,50</span>
          </li>
          <li>
            <strong>Total</strong>
            <strong>{`€ ${(cartItemsTotal + 5.5).toFixed(2)}`}</strong>
          </li>
        </ul>
        <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
      </Container>
    </Card>
  )
}
