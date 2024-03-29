import { useState, useRef, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const previousSearched = useRef({search})

  const getMovies = useCallback(async ({search}) => {
    if (search === previousSearched.current) return movies

    try {
      setError(null)
      setLoading(true)
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
      previousSearched.current = search
      return newMovies
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }

  }, [search])

  return { movies, loading, error, getMovies }
}