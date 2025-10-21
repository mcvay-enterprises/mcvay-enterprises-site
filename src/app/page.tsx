import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Build Amazing Products
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Enterprise solutions that scale with your business needs
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Fast Performance</h3>
              <p className="text-gray-600">Lightning-fast load times and optimized delivery</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Secure by Default</h3>
              <p className="text-gray-600">Enterprise-grade security built in</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance when you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* CTA */}
      <CTA />
    </div>
  )
}
