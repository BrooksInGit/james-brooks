import type { Metadata } from 'next'
import { Cormorant_Garamond, Barlow } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'James Brooks — Analytics Engineer',
  description:
    'Senior BI Developer pivoting to Analytics Engineering. 10+ years across Ford Motor Company, Warner Bros. Discovery, and Kaiser Permanente.',
  openGraph: {
    title: 'James Brooks — Analytics Engineer',
    description:
      'Senior BI Developer pivoting to Analytics Engineering. Turning raw data into strategic intelligence.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${barlow.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
