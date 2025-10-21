import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
