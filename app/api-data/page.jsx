import QuoteList from '../components/QuoteList'

export default function ApiData() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
        Inspirational Quotes
      </h1>

      <QuoteList />
    </div>
  )
}

