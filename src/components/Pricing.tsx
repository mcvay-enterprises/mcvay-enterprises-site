import Link from 'next/link'

const plans = [
  {
    name: 'Signals',
    description: 'Daily AI briefings, LLM performance trackers, and priority access to benchmarks.',
    price: '$149',
    period: 'per month',
    badge: 'Best for teams validating AI strategy',
    features: [
      'Daily executive LLM briefings delivered at 6am ET',
      'Access to live McVay 1–100 LLM leaderboard',
      'Comparative scorecards for top 12 frontier models',
      'Compliance snapshots and deployment guardrails',
      'Private LinkedIn community with weekly Q&A',
    ],
    href: '/subscribe/signals',
  },
  {
    name: 'Navigator',
    description: 'Hybrid intelligence subscription with analyst sprints and automation playbooks.',
    price: '$1,950',
    period: 'per month',
    badge: 'Most popular',
    features: [
      'Signals tier included for up to 10 executives',
      'Quarterly AI opportunity & risk assessment workshops',
      'Bespoke automation blueprints aligned to operating model',
      'Manus orchestration design + implementation oversight',
      'On-demand compliance + security advisory with response in <24h',
    ],
    href: '/subscribe/navigator',
    featured: true,
  },
  {
    name: 'Atlas',
    description: 'Full-stack transformation program led by McVay executive partners.',
    price: 'Custom',
    period: 'engagement',
    badge: 'For enterprise & private equity portfolios',
    features: [
      'Joint AI steering committee and executive sponsor alignment',
      'End-to-end operating model redesign and change management',
      'Build-out of AI Center of Excellence with quantified KPIs',
      'Integrated data, compliance, and security architecture delivery',
      'Dedicated McVay partner embedded for 6–12 months',
    ],
    href: '/contact?type=enterprise',
  },
]

export default function Pricing() {
  return (
    <section className="bg-neutral-25 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Subscription & Advisory</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold text-ink sm:text-5xl">
            Scale from insight to enterprise deployment with McVay
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Choose an engagement model that matches your ambition. Each subscription expands access to our frontier model intelligence, analyst team, and automation architects.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl border border-neutral-200 bg-white/90 p-10 shadow-soft backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-card ${
                plan.featured ? 'border-brand-200 shadow-card' : ''
              }`}
            >
              {plan.badge && (
                <span className="mb-6 inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
                  {plan.badge}
                </span>
              )}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">{plan.name}</h3>
                <p className="text-sm text-neutral-500">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-ink">{plan.price}</span>
                  <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-neutral-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-accent-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href={plan.href}
                  className={`btn w-full justify-center ${
                    plan.featured ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Explore {plan.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
