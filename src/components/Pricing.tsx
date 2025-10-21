export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: ['Up to 10 users', 'Basic support', '5GB storage', 'API access'],
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      features: ['Up to 50 users', 'Priority support', '50GB storage', 'Advanced API', 'Custom integrations'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited users', '24/7 dedicated support', 'Unlimited storage', 'Custom features', 'SLA guarantee'],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12">Choose the plan that fits your needs</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-8 ${
                plan.featured ? 'border-primary-600 shadow-lg scale-105' : 'border-gray-200'
              }`}
            >
              {plan.featured && (
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
