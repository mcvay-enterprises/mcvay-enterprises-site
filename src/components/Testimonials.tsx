const testimonials = [
  {
    quote:
      'McVay provided the scorecard that finally aligned our board on which frontier models to deploy. Within 90 days our automation run-rate savings surpassed $8.7M.',
    name: 'Lydia Morrison',
    role: 'Chief Transformation Officer, Horizon Logistics',
  },
  {
    quote:
      'Their Navigator tier gives us instant access to analysts who understand both compliance constraints and practical LLM deployment. Manus orchestration is now embedded across our finance stack.',
    name: 'Rajiv Patel',
    role: 'SVP Data & AI, Northbridge Capital',
  },
  {
    quote:
      'The McVay team is the only partner we trust for executive-ready briefings. The clarity of their LLM benchmarks keeps us months ahead of competitors and regulators.',
    name: 'Elena Duarte',
    role: 'Managing Director, Vertex Aviation Group',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Outcomes</p>
          <h2 className="mt-4 font-heading text-4xl font-semibold text-ink">
            Trusted by executives orchestrating AI across regulated industries
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-10 shadow-soft"
            >
              <blockquote className="text-left text-lg text-neutral-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-neutral-200/80 pt-6 text-left">
                <div className="font-heading text-base font-semibold text-ink">{testimonial.name}</div>
                <div className="text-sm text-neutral-500">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
