'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const primaryNav = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'LLM Rankings', href: '/llm-rankings' },
  { name: 'Insights', href: '/insights' },
  { name: 'Tools & Resources', href: '/resources' },
  { name: 'Company', href: '/company' },
]

const secondaryNav = [
  { name: 'Newsletter', href: '/newsletter' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/75 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-lg font-semibold text-white shadow-soft">
              ME
            </span>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-semibold tracking-tight text-ink">
                McVay Enterprises
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
                AI Clarity · Business Impact
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-neutral-600 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-2 transition-all hover:bg-neutral-100 hover:text-ink"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          {secondaryNav.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold text-neutral-600 hover:text-ink">
              {item.name}
            </Link>
          ))}
          <Link href="/book-session" className="btn btn-primary">
            Book Strategy Session
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className={cn('h-5 w-5 transition-transform duration-200', {
              'rotate-45 transform': open,
            })}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200/70 bg-white/90 shadow-soft lg:hidden">
          <div className="container flex flex-col gap-2 py-6 text-base">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-neutral-700 transition hover:bg-neutral-100 hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book-session"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Book Strategy Session
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
