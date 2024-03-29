/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './Product.css'
import { CartContext } from '../context/cart'

export function Product({products}) {
  const {addToCart} = useContext(CartContext)

  return (
    <>
      <main className='contenedor'>
        <ul className='products'>
          {products.map(product => {
            const title = product.title.split(' ').slice(0, 3).join(' ')

            return (
              <li className='product' key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3 className='title'>{title}</h3>
                <h2 className='price'>{product.price}$</h2>
                <p className='category'>{product.category}</p>
                <button onClick={() => addToCart(product)}>Add</button>
              </li>
            )
          })
          }
        </ul>
      </main>
    </>
  )
}