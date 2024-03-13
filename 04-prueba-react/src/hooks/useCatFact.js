import { useEffect, useState } from 'react'
import { getRandomFact } from '../facts'

export function useCatFact () {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
