const API_KEY = '7066fe0b'

export const searchMovies =  async ({ search }) => {
  if (search === '') return null

  try {
    const response = 
      await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()
    const movies = json.Search

    const mappedMovies = movies?.length > 0 ? movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    })) : []

    return mappedMovies
  } catch (e) {
    throw new Error('Error searching movies')
  }
}