import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload
      state.cartItems[id] = (state.cartItems[id] || 0) + 1
    },
    increaseQuantity: (state, action) => {
      const id = action.payload
      if (state.cartItems[id]) state.cartItems[id] += 1
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload
      if (!state.cartItems[id]) return
      state.cartItems[id] -= 1
      if (state.cartItems[id] <= 0) delete state.cartItems[id]
    },
    removeItem: (state, action) => {
      delete state.cartItems[action.payload]
    }
  }
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions

export const selectCartItems = (state) => state.cart.cartItems
export const selectCartCount = (state) =>
  Object.values(state.cart.cartItems).reduce((sum, qty) => sum + qty, 0)

export default cartSlice.reducer
