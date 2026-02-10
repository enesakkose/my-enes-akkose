import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Enes Akkose | Software Developer',
  description:
    'Software Developer based in Istanbul, specializing in Angular, React, and Next.js. Building high-performance web and hybrid applications.',
  keywords: [
    'Enes Akkose',
    'Software Developer',
    'Frontend Developer',
    'Angular',
    'React',
    'Next.js',
    'Istanbul',
  ],
  openGraph: {
    title: 'Enes Akkose | Software Developer',
    description:
      'Software Developer based in Istanbul, specializing in Angular, React, and Next.js.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark overflow-x-hidden'>
      <body className={`${syne.variable} ${dmSans.variable} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
