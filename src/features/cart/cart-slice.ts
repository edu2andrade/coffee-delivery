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
    // ↓ this is working fine!
    addToCart: (state, action: PayloadAction<ProductsType>) => {
      const productAlreadyExists = state.products.find(
        (product) => product.id === action.payload.id,
      )
      if (productAlreadyExists) {
        productAlreadyExists.amount++
        state.totalAmount = productAlreadyExists.amount
      } else {
        state.products.push({ ...action.payload })
        state.totalAmount = state.totalAmount + action.payload.amount
      }

      // productAlreadyExists
      //   ? productAlreadyExists.amount++
      //   : state.products.push({ ...action.payload })

      // ↓ update total
      state.cartItemsTotal = state.products.reduce((total, item) => {
        return total + item.price * item.amount
      }, 0)
    },
    // need to verify this...
    incrementAmount: (state, action: PayloadAction<number>) => {
      const product = state.products.find(
        (product) => product.id === action.payload,
      )
      if (product) {
        product.amount++
      }
    },
    // need to verify this...
    decrementAmount: (state, action: PayloadAction<number>) => {
      const product = state.products.find(
        (product) => product.id === action.payload,
      )
      if (product) {
        product.amount === 1 ? (product.amount = 1) : product.amount--
      }
    },
    // need to verify this...
    removeProduct: (state, action: PayloadAction<ProductsType>) => {
      const removedProduct = state.products.filter(
        (product) => product.id !== action.payload.id,
      )
      state.products = removedProduct
    },
  },
})

export const { addToCart, incrementAmount, decrementAmount, removeProduct } =
  cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
