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
  metadataBase: new URL('https://enesakkose.com'),
  title: 'Enes Akköse | Software Developer | Building Digital Excellence',
  description:
    'Experienced Full Stack Developer based in Istanbul, Turkey. Specialized in high-performance web and mobile applications using Angular, React, and Next.js, along with robust backend systems with Java. Delivering end-to-end scalable digital solutions with a focus on clean code and modern UI/UX.',
  keywords: [
    'Enes Akköse',
    'Software Developer',
    'Full Stack Developer',
    'Frontend Engineer',
    'Backend Developer',
    'Angular Expert',
    'React Developer',
    'Java Developer',
    'Next.js Portfolio',
    'React Native Mobile App',
    'TypeScript Developer',
    'Istanbul Software Engineer',
    'Web Performance',
    'Scalable Architecture',
  ],
  openGraph: {
    title: 'Enes Akköse | Software Developer | Portfolio',
    description:
      'Explore the portfolio of Enes Akköse, a Full Stack Developer specialized in modern web and mobile ecosystems and Java backend development.',
    url: 'https://enesakkose.com',
    siteName: 'Enes Akköse Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Enes Akköse | Software Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enes Akköse | Software Developer',
    description:
      'Building high-performance end-to-end web and mobile applications with modern technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
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
