export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  MODIFY_PRODUCT_QTY: 'MODIFY_PRODUCT_QTY'
}

export const INITIAL_CART_STATE = () => {
  const savedCart = window.localStorage.getItem('cart')

  if (!savedCart) return []

  return JSON.parse(savedCart)
}


const UPDATE_STATE_BY_ACTION = {

  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const id = action.payload.id
    
    const productIndex = state.findIndex(product => product.id === id)
    //chequear existencia de producto en carrito

    if (productIndex >= 0) {
      if (state[productIndex].quantity == 5) return state
      

      const newState = [
          ...state.slice(0, productIndex),
          {...state[productIndex], quantity: (state[productIndex].quantity + 1)},
          ...state.slice(productIndex+1)
      ]
      window.localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    }
    //si existe, sumar qty+1

    const newState = [
      ...state,
      {...action.payload, quantity: 1}
    ]
    window.localStorage.setItem('cart', JSON.stringify(newState))
    return newState
    //si no existe, agregarlo con qty=1
  },  
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const id = action.payload.id
    const newState = state.filter(product => product.id !== id)
    window.localStorage.setItem('cart', JSON.stringify(newState))
    return newState
  },  
  [CART_ACTION_TYPES.MODIFY_PRODUCT_QTY]: (state, action) => {
    //debe utilizarse exclusivamente con productos que ya estén en el carrito
    // const id = action.payload.product.id
    const id = action.payload.product.id
    const productIndex = state.findIndex(product => product.id === id)
    if (action.payload.quantity > 5) return state
    const newState = [
      ...state.slice(0, productIndex),
      {...state[productIndex], quantity: action.payload.quantity},
      ...state.slice(productIndex+1)
    ]
    window.localStorage.setItem('cart', JSON.stringify(newState))
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    const newState = []
    window.localStorage.setItem('cart', JSON.stringify(newState))
    return newState
  }  
}

export const useCartReducer = (state, action) => {
  const {type: actionType} = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}