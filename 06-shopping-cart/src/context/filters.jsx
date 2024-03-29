/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext()

const DEFAULT_FILTERS = {
  minPrice: 0,
  category: 'all'
}

export function FiltersProvider ({children}) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >

      {children}
    </FiltersContext.Provider>  
  )
}