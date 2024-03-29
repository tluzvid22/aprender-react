import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
  const {filters, setFilters} = useFilters([])
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPriceChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice:  event.target.value
    }))
  }
  
  const handleCategoryChange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category:  event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div className='slider'>
        <label htmlFor={minPriceFilterId}>Price: </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPriceChange}
          value={filters.minPrice}
        />
        <span> ${filters.minPrice}</span>
      </div>

      <div className='categories'>
        <label htmlFor={categoryFilterId}>Category: </label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value='womens'>Womens clothing</option>
          <option value='mens'>Mens Clothing</option>
          <option value='jewelery'>Jewelery</option>
          <option value='electronics'>Electronics</option>
        </select>
      </div>
    </section>
  )
}