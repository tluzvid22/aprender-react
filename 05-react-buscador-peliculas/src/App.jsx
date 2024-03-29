import { useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import { useSort, SORT_OPTIONS } from './hooks/useSort.js'

function App() {
  const { search, setSearch, error: searchError } = useSearch()
  const { loading , getMovies } = useMovies({ search })
  const { sortedMovies, updateSort, updateMovies } = useSort([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const fetchMovies = await getMovies({ search })
    updateMovies({updatedMovies: fetchMovies})
  }

  const handleChange = async (event) => {
    event.preventDefault()
    const newQuery = event.target.value
    setSearch(newQuery)
  }

  const handleSortChange = (event) => {
    event.preventDefault()
    const selectedSort = event.target.value
    updateSort({selectedSort})
  }

  return (
    <div className='page'>
    <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <section className='searchBar'>
            <input name='query' 
            onChange={handleChange} 
            value={search} 
            placeholder='Avengers, Star Wars, The Matrix ...'/>
            <button type='submit'>Buscar</button>
          </section>
          <section className='sortBox'>
            <select onChange={handleSortChange} >
              <option value={`${SORT_OPTIONS[0]}`}>Por relevancia</option>
              <option value={`${SORT_OPTIONS[1]}`}>Por año</option>
              <option value={`${SORT_OPTIONS[2]}`}>Por nombre</option>
          </select>
          </section>
        </form>
        {searchError && <p style={{color: 'red'}}>{searchError}</p>}
        {loading && <p style={{color: 'yellow'}}>Cargando resultados...</p>}
    </header>

    <main>
      <Movies movies={sortedMovies}/>
    </main>
    </div>
  )
}

export default App
