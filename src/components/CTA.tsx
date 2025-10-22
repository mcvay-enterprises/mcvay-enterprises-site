import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-brand px-6 py-16 text-center shadow-card sm:px-12">
          <div className="absolute -right-24 top-10 hidden h-64 w-64 rounded-full bg-white/10 blur-3xl lg:block" />
          <div className="absolute -bottom-28 -left-14 hidden h-56 w-56 rounded-full bg-accent-400/30 blur-3xl lg:block" />

          <div className="mx-auto max-w-3xl space-y-6">
            <p className="eyebrow text-white/80">Enterprise Activation</p>
            <h2 className="text-balance font-heading text-4xl font-semibold text-white sm:text-5xl">
              Book the 90-minute AI strategy intensive with our executive team
            </h2>
            <p className="text-lg text-white/80">
              Translate LLM benchmarks and automation blueprints into an actionable roadmap tailored to your operating model, compliance posture, and growth objectives.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/book-session" className="btn btn-outline min-w-[14rem] justify-center">
              Book Strategy Session
            </Link>
            <Link href="/newsletter" className="btn btn-ghost min-w-[14rem] justify-center bg-white/10 text-white hover:bg-white/20">
              Join Daily LLM Briefing
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 text-sm font-medium text-white/80 sm:flex-row sm:justify-center">
            <span>Trusted by venture-backed and Fortune 100 transformation leaders</span>
            <span className="hidden text-white/40 sm:inline">•</span>
            <span>Average 6.5x ROI documented within 120 days</span>
          </div>
        </div>
      </div>
    </section>
  )
}
