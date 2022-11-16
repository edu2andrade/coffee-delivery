import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { CoffeeType } from '../../data/data'

interface ProductsType extends CoffeeType {
  amount: number
}
interface CartState {
  products: ProductsType[]
  totalAmount: number
  cartItemsTotal: number
}
const initialState: CartState = {
  products: [],
  totalAmount: 0,
  cartItemsTotal: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ↓ Adding items to cart
    addToCart: (state, action: PayloadAction<ProductsType>) => {
      // ↓ verifying if exists
      const productExists = state.products.find(
        (product) => product.id === action.payload.id,
      )
      // ↓ update cart, item.amount and totalAmount
      if (productExists) {
        productExists.amount++
        state.totalAmount++
      } else {
        state.products.push({ ...action.payload })
        state.totalAmount = state.totalAmount + action.payload.amount
      }
      // ↓ update cartItemsTotal
      state.cartItemsTotal = state.products.reduce((total, item) => {
        return total + item.price * item.amount
      }, 0)
    },
    // Increment items
    incrementAmount: (state, action: PayloadAction<number>) => {
      // ↓ verifying if exists
      const productExists = state.products.find(
        (product) => product.id === action.payload,
      )
      // ↓ Updating item.amount and totalAmount
      if (productExists) {
        productExists.amount++
        state.totalAmount++
      }
      // ↓ update cartItemsTotal
      state.cartItemsTotal = state.products.reduce((total, item) => {
        return total + item.price * item.amount
      }, 0)
    },
    // Decrement items
    decrementAmount: (state, action: PayloadAction<number>) => {
      // ↓ verifying if exists
      const productExists = state.products.find(
        (product) => product.id === action.payload,
      )
      // ↓ Updating item.amount and totalAmount
      if (productExists) {
        productExists.amount === 1
          ? (productExists.amount = 1)
          : productExists.amount-- && state.totalAmount--
      }

      // ↓ update cartItemsTotal
      state.cartItemsTotal = state.products.reduce((total, item) => {
        return total + item.price * item.amount
      }, 0)
    },
    // Remove an item from the cart
    removeProduct: (state, action: PayloadAction<number>) => {
      // ↓ Create an updatedCart
      const updatedCart = state.products.filter(
        (product) => product.id !== action.payload,
      )
      // ↓ update the cart in state
      state.products = updatedCart
      // ↓ update totalAmount
      state.totalAmount = updatedCart.reduce((total, item) => {
        return total + item.amount
      }, 0)
      // ↓ update cartItemsTotal
      state.cartItemsTotal = updatedCart.reduce((total, item) => {
        return total + item.price * item.amount
      }, 0)
    },
    clearCart: (state) => {
      state.products = []
      state.cartItemsTotal = 0
      state.totalAmount = 0
    },
  },
})

export const {
  addToCart,
  incrementAmount,
  decrementAmount,
  removeProduct,
  clearCart,
} = cartSlice.actions

export const selectCart = (state: RootState) => state

export default cartSlice.reducer
