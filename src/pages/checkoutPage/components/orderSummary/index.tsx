import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
import {
  incrementAmount,
  decrementAmount,
  removeProduct,
} from '../../../../features/cart/cart-slice'

import { Minus, Plus, Trash } from 'phosphor-react'

import {
  Card,
  Actions,
  ConfirmOrderButton,
  CartTotalContainer,
  CounterSelect,
  Price,
  RemoveButton,
  SelectedCoffeeCard,
  OrderSummaryContainer,
} from './styles'

export const OrderSummary = () => {
  const { products, cartItemsTotal } = useAppSelector((store) => store)
  const dispatch = useAppDispatch()

  return (
    <OrderSummaryContainer>
      <h3>Selected Coffees</h3>
      <Card>
        {products &&
          products.map((product) => {
            return (
              <SelectedCoffeeCard key={product.id}>
                <img src={product.image} alt="" />
                <div>
                  <p>{product.name}</p>
                  <Actions>
                    <CounterSelect>
                      <button
                        type="button"
                        onClick={() => dispatch(decrementAmount(product.id))}
                      >
                        <Minus size={20} color="#8047F8" weight="fill" />
                      </button>
                      {product.amount}
                      <button
                        type="button"
                        onClick={() => dispatch(incrementAmount(product.id))}
                      >
                        <Plus size={20} color="#8047F8" weight="fill" />
                      </button>
                    </CounterSelect>
                    <RemoveButton
                      type="button"
                      onClick={() => dispatch(removeProduct(product.id))}
                    >
                      <Trash size={16} color="#8047F8" />
                      Remove
                    </RemoveButton>
                  </Actions>
                </div>
                <Price>{`€ ${product.price.toFixed(2)}`}</Price>
              </SelectedCoffeeCard>
            )
          })}

        {products.length !== 0 ? (
          <CartTotalContainer>
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
            <ConfirmOrderButton type="submit">Confirm Order</ConfirmOrderButton>
          </CartTotalContainer>
        ) : (
          <p>There are no items in your cart!</p>
        )}
      </Card>
    </OrderSummaryContainer>
  )
}
