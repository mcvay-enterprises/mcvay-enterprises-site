export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content: 'This platform transformed how we build and deploy applications. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering at StartupXYZ',
      content: 'The best decision we made for our infrastructure. Support is outstanding.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Developer at InnovateCo',
      content: 'Incredible performance and reliability. Our team productivity has increased significantly.',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
