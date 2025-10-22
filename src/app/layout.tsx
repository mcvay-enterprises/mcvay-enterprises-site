import type { Metadata } from 'next'
import { Lato, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const heading = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const body = Lato({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'McVay Enterprises | Business Solutions & Whitehall CAP',
    template: '%s | McVay Enterprises'
  },
  description: 'McVay Enterprises provides innovative business solutions and supports Whitehall Civil Air Patrol. Discover our services, mission, and commitment to excellence.',
  keywords: ['McVay Enterprises', 'Whitehall CAP', 'Civil Air Patrol', 'business solutions', 'consulting'],
  authors: [{ name: 'McVay Enterprises' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mcvayenterprises.com',
    siteName: 'McVay Enterprises',
    title: 'McVay Enterprises | Business Solutions & Whitehall CAP',
    description: 'Innovative business solutions and Civil Air Patrol support',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'McVay Enterprises',
    description: 'Business solutions and Civil Air Patrol support',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col bg-neutral-25 text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
