import { useMemo, useState } from 'react'

export const SORT_OPTIONS = [
  'sortBy_relevance',
  'sortBy_year',
  'sortBy_name'
]

export function useSort({movies}) {
  const [inputMovies, setMovies] = useState({movies})
  const [sort, setSort] = useState(`${SORT_OPTIONS[0]}`)

  const updateSort = ({selectedSort}) => {
    setSort(selectedSort)
  }

  const updateMovies = ({updatedMovies}) => {
    setMovies(updatedMovies)
  }

  const sortedMovies = useMemo(() => {
    if (sort == SORT_OPTIONS[0]) {
      return inputMovies
    }
    
    if (sort == SORT_OPTIONS[1]) {
      return [...inputMovies].sort((a, b) => a.year.localeCompare(b.year)) 
    }
    
    if (sort == SORT_OPTIONS[2]) {
      return [...inputMovies].sort((a, b) => a.title.localeCompare(b.title)) 
    }
  }, [sort, inputMovies])

  return {sortedMovies, updateSort, updateMovies}
}