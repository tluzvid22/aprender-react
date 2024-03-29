/* eslint react/prop-types: 0 */
import {  useRef } from 'react'

export function Movies ({movies}) {
  const previousSearched = useRef(false)
  const hasMovies = movies?.length > 0

  function ListOfMovies ({movies}) {
    return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li  className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
          ))
      }
    </ul>
    )
  }

  function NoMoviesResult () {
    return (
      <>
      <p>No existen las peliculas con dicha busqueda</p>
      </>
    )
  }

  function PreviousSearchedResult () {
    previousSearched.current = true
    return (<>
    <p style={{color: 'yellow'}}>
      Busca una nueva película en nuestro buscador
    </p>
    </>)
  }

  return (
    <>
      {hasMovies 
        ? <ListOfMovies movies={movies} />
        : previousSearched.current ? 
          <NoMoviesResult /> :
          <PreviousSearchedResult />           
      }
    </>
  )
}