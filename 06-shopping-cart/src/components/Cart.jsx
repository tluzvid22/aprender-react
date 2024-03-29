/* eslint-disable react/prop-types */
import { CartIcon } from "./Icons";
import './Cart.css'
import { useContext, useId } from "react";
import { CartContext } from "../context/cart";

function CartItem ({ product, quantity, removeFromCart, modifyProductQty}) {
  const title = product.title.split(' ').slice(0, 3).join(' ')

  const handleChange = (event) => {
    const newQuantity = event.target.value
    modifyProductQty({product, quantity: newQuantity})
  }

  return (
    <li className="cartProduct" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h3>{title}</h3>
      <h2>{product.price}$</h2>
      <div className="quantity">
        <button onClick={removeFromCart} className="removeFromCartBtn">🗑</button>
        <input type="number" min='1' max='5' value={quantity} onChange={handleChange} />
      </div>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const {cart, removeFromCart, clearCart, modifyProductQty} = useContext(CartContext)

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className="cart">
        {(cart && cart.length > 0) && <button onClick={clearCart}>Clear</button>}

        <ul className="cartProducts">

          {cart.map(product => {
            return <CartItem 
            removeFromCart={() => removeFromCart(product)} 
            product={product} 
            quantity={product.quantity} 
            modifyProductQty={modifyProductQty}
            key={product.id}/>
          })
          }

        </ul>
      </aside>

    </>
  )
}