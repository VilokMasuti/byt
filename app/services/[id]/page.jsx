import { notFound } from 'next/navigation'

const services = [
  { id: 1, title: 'Web Development', description: 'Create stunning websites', details: 'Our web development service focuses on creating responsive, user-friendly websites using the latest technologies and best practices.' },
  { id: 2, title: 'Mobile Apps', description: 'Build powerful mobile applications', details: 'We develop native and cross-platform mobile apps that provide seamless user experiences across iOS and Android devices.' },
  { id: 3, title: 'UI/UX Design', description: 'Design beautiful user interfaces', details: 'Our design team creates intuitive and visually appealing interfaces that enhance user engagement and satisfaction.' },
  { id: 4, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure', details: 'We provide cloud solutions that help businesses scale their operations, improve efficiency, and reduce costs.' },
  { id: 5, title: 'AI Integration', description: 'Implement cutting-edge AI solutions', details: 'Our AI integration services help businesses leverage machine learning and artificial intelligence to gain insights and automate processes.' },
  { id: 6, title: 'Cybersecurity', description: 'Protect your digital assets', details: 'We offer comprehensive cybersecurity solutions to protect your business from evolving digital threats and ensure data privacy.' },
]

export default function ServicePage({ params }) {
  const service = services.find(s => s.id === parseInt(params.id))

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
        {service.title}
      </h1>

      <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-muted-foreground mb-8">{service.description}</p>

        <h2 className="text-2xl font-semibold mb-4">Details</h2>
        <p className="text-muted-foreground">{service.details}</p>
      </div>
    </div>
  )
}

