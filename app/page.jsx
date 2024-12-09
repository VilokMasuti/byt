import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Palette } from 'lucide-react'

const services = [
  { id: 1, title: 'Web Development', description: 'Create stunning websites', icon: Code },
  { id: 2, title: 'Mobile Apps', description: 'Build powerful mobile applications', icon: Smartphone },
  { id: 3, title: 'UI/UX Design', description: 'Design beautiful user interfaces', icon: Palette },
]

export default function Home() {
  return (
    <div className="container mx-auto px-5">
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6   animate-fade-in">
          Welcome to ModernApp
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
          Building the future with cutting-edge technology
        </p>
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center group animate-bounce-in"
        >
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-card text-card-foreground p-6 rounded-lg shadow-lg hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 bg-accent rounded-lg shadow-inner animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-muted-foreground">Cutting-edge technology to solve modern problems</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Skilled professionals dedicated to your success</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Always here to help you, anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

