import { getQuotes } from '../actions/quoteActions'
import { Suspense } from 'react'

interface Quote {
  quote: string
  author: string
}

function QuoteListContent() {
  return (
    <Suspense fallback={<p className="text-center">Loading quotes...</p>}>
      <AsyncQuoteList />
    </Suspense>
  )
}

async function AsyncQuoteList() {
  let quotes: Quote[] = []
  try {
    // Fetch quotes data
    const fetchedQuotes = await getQuotes()

    // If the response is not an array, make it one
    quotes = Array.isArray(fetchedQuotes) ? fetchedQuotes : [fetchedQuotes]

    // Log the fetched data for debugging
    console.log('Fetched quotes:', quotes)
  } catch (error) {
    console.error('Error fetching quotes:', error)

    return (
      <p className="text-center text-red-500">
        An error occurred while fetching quotes. Please try again later.
      </p>
    )
  }

  if (quotes.length === 0) {
    return <p className="text-center">No quotes available at the moment.</p>
  }

  return (
    <div className="space-y-6">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="bg-card text-card-foreground p-6 rounded-lg shadow-lg animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <p className="text-lg mb-2">{quote.quote}</p>
          <p className="text-right text-muted-foreground">- {quote.author}</p>
        </div>
      ))}
    </div>
  )
}

export default function QuoteList() {
  return <QuoteListContent />
}
