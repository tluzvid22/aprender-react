import { useEffect, useState } from 'react'

const DEFAULT_CAT_IMAGE_URL = 'https://img.freepik.com/foto-gratis/retrato-gato-hermoso-cerca_23-2149214419.jpg'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState(DEFAULT_CAT_IMAGE_URL)
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}`)
      .then(res => res.blob())
      .then(data => setImageUrl(URL.createObjectURL(data)))
  }, [fact])

  return { imageUrl }
}
