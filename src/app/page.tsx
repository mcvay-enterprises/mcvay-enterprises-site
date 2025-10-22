import Link from 'next/link'
import CTA from '@/components/CTA'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'

const proofPoints = [
  { label: 'Models evaluated', value: '38 frontier & proprietary' },
  { label: 'Automation hours unlocked', value: '112k+ this year' },
  { label: 'Compliance jurisdictions', value: '24 with active oversight' },
]

const pillars = [
  {
    title: 'LLM Intelligence Platform',
    copy: 'Daily scoring, comparative benchmarks, and deployment guardrails for every major model family.',
    link: { href: '/llm-rankings', label: 'View McVay leaderboard' },
  },
  {
    title: 'Executive Advisory Bench',
    copy: 'Partner with former Fortune 50 leaders to translate AI ambition into operating reality.',
    link: { href: '/solutions/executive-advisory', label: 'Explore advisory approach' },
  },
  {
    title: 'Automation Blueprint Studio',
    copy: 'Codified playbooks, Manus orchestrations, and build oversight to ship production-ready systems.',
    link: { href: '/solutions/automation-blueprints', label: 'Browse blueprints' },
  },
]

const spotlight = [
  {
    model: 'Claude 3.5 Sonnet',
    score: 94,
    summary: 'Leading on reasoning depth and regulatory-safe deployment in financial services workloads.',
  },
  {
    model: 'GPT-4o Enterprise',
    score: 92,
    summary: 'Best-in-class multi-modal fidelity with strong latency for customer operations.',
  },
  {
    model: 'Llama 3.1 405B',
    score: 89,
    summary: 'Open-weight flexibility for on-prem orchestration across sensitive data enclaves.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <section className="relative overflow-hidden bg-neutral-25 pt-20">
        <div className="absolute inset-x-0 -top-40 h-[520px] bg-gradient-radial" />
        <div className="container relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow text-accent-500">McVay Enterprises</p>
            <h1 className="mt-6 text-balance font-heading text-5xl font-semibold text-ink sm:text-6xl">
              Elite intelligence and automation systems for the AI-first enterprise
            </h1>
            <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
              We benchmark every frontier model, orchestrate Manus-driven workflows, and embed executive advisors so your organization captures disproportionate advantage from AI—without compromising resilience or compliance.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/book-session" className="btn btn-primary min-w-[14rem] justify-center">
                Book Strategy Session
              </Link>
              <Link href="/llm-rankings" className="btn btn-secondary min-w-[14rem] justify-center">
                Explore LLM Leaderboard
              </Link>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-3 font-heading text-2xl font-semibold text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Trusted By</p>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-ink sm:text-4xl">
              Private equity, venture-backed scale-ups, and Fortune 100 transformation leaders
            </h2>
          </div>
          <div className="mt-10 grid gap-6 text-center text-sm font-semibold uppercase tracking-[0.4em] text-neutral-400 sm:grid-cols-3">
            <span>Northbridge Capital</span>
            <span>Vertex Aviation</span>
            <span>Horizon Logistics</span>
            <span>Atlas Private Markets</span>
            <span>Summit Health Systems</span>
            <span>Panorama Retail</span>
          </div>
        </div>
      </section>

      <section className="bg-neutral-25 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Operating Model</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold text-ink">
              One integrated partnership powering intelligence, advisory, and deployment
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Every engagement combines proprietary data, executive-level guidance, and technology orchestration to accelerate value realization while strengthening governance.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white/90 p-10 shadow-soft">
                <h3 className="font-heading text-2xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-4 text-sm text-neutral-600">{pillar.copy}</p>
                <Link
                  href={pillar.link.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-400"
                >
                  {pillar.link.label}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">LLM Rankings</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold text-ink">
                The McVay 1–100 frontier model score delivers conviction for regulated industries
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Our evaluation framework spans reasoning capability, latency, tooling ecosystems, compliance posture, and total cost of ownership. Clients use the score to govern procurement, vendor management, and risk committees.
              </p>
              <div className="mt-6 space-y-3 text-sm text-neutral-600">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
                  <span>Updated weekly with scenario testing across nine industry-grade prompts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-700" />
                  <span>Includes deployment guidance for public cloud, private cloud, and on-prem enclaves</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-400" />
                  <span>Benchmarks connect directly to Manus orchestration templates</span>
                </div>
              </div>
              <Link href="/llm-rankings" className="btn btn-primary mt-10 inline-flex min-w-[12rem] justify-center">
                View Full Leaderboard
              </Link>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-neutral-25 p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold text-ink">Top Performing Models</h3>
                <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  Week 42
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {spotlight.map((item) => (
                  <div key={item.model} className="rounded-2xl border border-white/60 bg-white/80 p-5 shadow-soft backdrop-blur">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading text-lg font-semibold text-ink">{item.model}</p>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
                          Composite score
                        </p>
                      </div>
                      <span className="rounded-full bg-brand-700 px-4 py-2 font-heading text-xl font-semibold text-white shadow-soft">
                        {item.score}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-neutral-600">{item.summary}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white/90 p-5 text-sm text-neutral-600">
                <p>
                  Each score represents composite performance across reasoning, latency, ecosystem maturity, compliance assurances, and total cost. Subscribers access full methodology, prompt stacks, and deployment advisories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  )
}
