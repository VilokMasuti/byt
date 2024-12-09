import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
        Contact Us
      </h1>

      <div className="max-w-md mx-auto bg-card text-card-foreground p-8 rounded-lg shadow-lg animate-fade-in">
        <ContactForm />
      </div>
    </div>
  )
}

