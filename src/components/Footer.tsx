import Link from 'next/link'

const footerNav = {
  solutions: [
    { label: 'Executive Advisory', href: '/solutions/executive-advisory' },
    { label: 'Subscription Intelligence', href: '/solutions/subscription' },
    { label: 'Automation Blueprints', href: '/solutions/automation-blueprints' },
    { label: 'Manus Orchestration', href: '/solutions/manus-orchestration' },
  ],
  insights: [
    { label: 'LLM Rankings', href: '/llm-rankings' },
    { label: 'Research Library', href: '/insights/research' },
    { label: 'Blog', href: '/blog' },
    { label: 'Podcast', href: '/podcast' },
  ],
  resources: [
    { label: 'AI Tools Directory', href: '/resources/tools' },
    { label: 'Downloads & Guides', href: '/resources/guides' },
    { label: 'Daily Briefings', href: '/newsletter' },
    { label: 'Support', href: '/support' },
  ],
  company: [
    { label: 'About', href: '/company' },
    { label: 'Partners', href: '/company/partners' },
    { label: 'Press', href: '/company/press' },
    { label: 'Careers', href: '/company/careers' },
  ],
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mcvay-enterprises',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M16.338 16.338h-2.62V11.49c0-1.155-.024-2.641-1.61-2.641-1.613 0-1.861 1.26-1.861 2.56v4.929H7.628V7.5h2.514v1.18h.036c.351-.665 1.209-1.366 2.489-1.366 2.66 0 3.153 1.752 3.153 4.028v5.996zM5.005 6.318a1.52 1.52 0 110-3.04 1.52 1.52 0 010 3.04zM6.315 16.338H3.69V7.5h2.625v8.838zM17.666 2H2.327C1.594 2 1 2.586 1 3.309v13.382C1 17.414 1.594 18 2.327 18h15.339C18.4 18 19 17.414 19 16.691V3.309C19 2.586 18.4 2 17.666 2z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/mcvayenterprises',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 3h3.093l-6.76 7.737L22 21h-6.802l-4.425-5.79L5.64 21H2.545l7.182-8.22L2 3h6.977l4.01 5.273L18.245 3zm-1.08 16.2h1.714L7.92 4.685H6.094L17.165 19.2z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-brand text-lg font-semibold text-white shadow-soft">
                ME
              </span>
              <div>
                <p className="font-heading text-lg font-semibold text-ink">McVay Enterprises</p>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  AI Clarity · Business Impact
                </p>
              </div>
            </Link>
            <p className="max-w-sm text-sm text-neutral-600">
              We equip forward-looking leaders with the intelligence, advisors, and automation systems to turn AI into continuous enterprise advantage.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition hover:border-neutral-400 hover:text-ink"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">Solutions</h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              {footerNav.solutions.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">Insights</h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              {footerNav.insights.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">Resources</h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              {footerNav.resources.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/book-session" className="btn btn-secondary w-full justify-center">
                Book Strategy Session
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200/80 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} McVay Enterprises Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="transition hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-ink">
              Terms
            </Link>
            <Link href="/security" className="transition hover:text-ink">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
