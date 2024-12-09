import Link from 'next/link'

const services = [
  { id: 1, title: 'Web Development', description: 'Create stunning websites' },
  { id: 2, title: 'Mobile Apps', description: 'Build powerful mobile applications' },
  { id: 3, title: 'UI/UX Design', description: 'Design beautiful user interfaces' },
  { id: 4, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure' },
  { id: 5, title: 'AI Integration', description: 'Implement cutting-edge AI solutions' },
  { id: 6, title: 'Cybersecurity', description: 'Protect your digital assets' },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <Link
              href={`/services/${service.id}`}
              className="text-primary hover:underline"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

