import { useState, useEffect } from 'react'

interface SpotifyEmbedHookResult {
  html: string | null
  isLoading: boolean
  error: Error | null
}

export const useSpotifyEmbed = (link: string): SpotifyEmbedHookResult => {
  const [html, setHtml] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchOembedData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`https://open.spotify.com/oembed?url=${link}`)
        if (!response.ok) {
          throw new Error('Failed to fetch data from Spotify API')
        }
        const json = await response.json()
        setHtml(json.html)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchOembedData()
  }, [link])

  return { html, isLoading, error }
}
