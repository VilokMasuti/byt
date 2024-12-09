const teamMembers = [
  { name: 'John Doe', role: 'CEO' },
  { name: 'Jane Smith', role: 'CTO' },
  { name: 'Mike Johnson', role: 'Lead Designer' },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fade-in">
        About Us
      </h1>

      <section className="mb-16 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-muted-foreground">
          To empower businesses with innovative technology solutions that drive growth and success.
        </p>
      </section>

      <section className="mb-16 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-muted-foreground">
          To be the leading provider of cutting-edge digital solutions, shaping the future of technology.
        </p>
      </section>

      <section className="animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-card text-card-foreground p-6 rounded-lg shadow-lg text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

