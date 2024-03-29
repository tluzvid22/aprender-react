//import { useState } from 'react'
import './App.css'
import {products as initialProducts} from './mocks/products.json'
import {Product} from './components/Product.jsx'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts({products: initialProducts})

  return (
    <CartProvider>
      <Header />
      <Cart className='cart' />
      <Product products={filteredProducts} />
    </CartProvider>
  )
}

export default App
