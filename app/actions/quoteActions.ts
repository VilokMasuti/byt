'use server'

import { cache } from 'react'

interface Quote {
  content: string
  author: string
}

export const getQuotes = cache(async (): Promise<Quote[]> => {
  try {
    const response = await fetch(
      'https://dummyjson.com/quotes/random?limit=5',
      { next: { revalidate: 0 } }
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching quotes:', error)
    throw new Error('Failed to fetch quotes')
  }
})
