export default function CTA() {
  return (
    <section className="bg-primary-600 py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of companies already using our platform
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}
