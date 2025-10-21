export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      annualSavings: 'Save 15% annually',
      features: ['Up to 10 users', 'Basic compliance tools', '5GB storage', 'Email support', 'API access'],
    },
    {
      name: 'Growth',
      price: '$299',
      period: '/month',
      annualSavings: 'Save 15% annually',
      features: ['Up to 50 users', 'Advanced compliance suite', '50GB storage', 'Priority support', 'Advanced API', 'Custom integrations'],
      featured: true,
    },
    {
      name: 'Pro',
      price: '$699',
      period: '/month',
      annualSavings: 'Save 15% annually',
      features: ['Unlimited users', 'Full compliance platform', '500GB storage', '24/7 dedicated support', 'Custom features', 'SLA guarantee'],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose the plan that fits your needs
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-8 ${
                plan.featured ? 'border-primary-600 shadow-lg scale-105' : 'border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
                {plan.annualSavings && (
                  <div className="mt-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded">
                      {plan.annualSavings}
                    </span>
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold ${
                plan.featured
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
