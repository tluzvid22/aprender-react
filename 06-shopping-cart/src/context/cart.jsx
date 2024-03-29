/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { useCartReducer, CART_ACTION_TYPES, INITIAL_CART_STATE } from "../reducer/cart";


export const CartContext = createContext()

function useCart () {
  const [state, dispatch] = useReducer(useCartReducer, INITIAL_CART_STATE())
  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })
  
  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  }) 
  
  const clearCart = () => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART,
  }) 

  const modifyProductQty = ({product, quantity}) => dispatch({
    type: CART_ACTION_TYPES.MODIFY_PRODUCT_QTY,
    payload: {product, quantity}
  }) 

  return {state, addToCart, removeFromCart, clearCart, modifyProductQty}
}

export const CartProvider = ({children}) => {
  const {state, addToCart, removeFromCart, clearCart, modifyProductQty} = useCart()

  return (
    <CartContext.Provider value={
      {cart: state,
      addToCart,
      removeFromCart,
      clearCart,
      modifyProductQty}
    }>
      {children}
    </CartContext.Provider>
    )
}