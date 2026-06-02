import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Domain Organizer | All Your Domains in One Clean View',
  description:
    'Track domain renewals, registrar details, DNS verification, folders, and notifications with Domain Organizer.',
  openGraph: {
    title: 'Domain Organizer',
    description: 'All your domains, renewals, verification, and folders in one clean view.',
    url: 'https://www.enesakkose.com/domain-organizer',
    images: ['/domain-organizer/all-domains.png'],
  },
}

const colors = {
  primary: '#00D54B',
  onPrimary: '#0E0E0E',
  secondary: '#679CFF',
  onSecondary: '#001F4A',
  surface: '#0E0E0E',
  onSurface: '#FFFFFF',
  onSurfaceVariant: '#ADAAAA',
  onSurfaceMuted: '#9CA3AF',
  charcoal: '#0E0E0E',
  surfaceContainerLow: '#131313',
  surfaceContainer: '#1A1A1A',
  surfaceContainerHigh: '#20201F',
  surfaceContainerHighest: '#262626',
  surfaceContainerLowest: '#0E0E0E',
  outline: '#484847',
  error: '#FF4B4B',
  onError: '#450900',
  warning: '#FFB800',
  onWarning: '#0E0E0E',
  success: '#00D54B',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 48,
  '4xl': 64,
} as const

const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 32,
  full: 9999,
} as const

const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 48,
  '5xl': 60,
} as const

const themeStyle = {
  '--primary': colors.primary,
  '--onPrimary': colors.onPrimary,
  '--secondary': colors.secondary,
  '--onSecondary': colors.onSecondary,
  '--surface': colors.surface,
  '--onSurface': colors.onSurface,
  '--onSurfaceVariant': colors.onSurfaceVariant,
  '--onSurfaceMuted': colors.onSurfaceMuted,
  '--charcoal': colors.charcoal,
  '--surfaceContainerLow': colors.surfaceContainerLow,
  '--surfaceContainer': colors.surfaceContainer,
  '--surfaceContainerHigh': colors.surfaceContainerHigh,
  '--surfaceContainerHighest': colors.surfaceContainerHighest,
  '--surfaceContainerLowest': colors.surfaceContainerLowest,
  '--outline': colors.outline,
  '--error': colors.error,
  '--onError': colors.onError,
  '--warning': colors.warning,
  '--onWarning': colors.onWarning,
  '--success': colors.success,
  '--white': colors.white,
  '--black': colors.black,
  '--transparent': colors.transparent,
  '--xs': `${spacing.xs}px`,
  '--sm': `${spacing.sm}px`,
  '--md': `${spacing.md}px`,
  '--lg': `${spacing.lg}px`,
  '--xl': `${spacing.xl}px`,
  '--2xl': `${spacing['2xl']}px`,
  '--3xl': `${spacing['3xl']}px`,
  '--4xl': `${spacing['4xl']}px`,
  '--radius-sm': `${borderRadius.sm}px`,
  '--radius-md': `${borderRadius.md}px`,
  '--radius-lg': `${borderRadius.lg}px`,
  '--radius-xl': `${borderRadius.xl}px`,
  '--radius-full': `${borderRadius.full}px`,
  '--font-xs': `${fontSize.xs}px`,
  '--font-sm': `${fontSize.sm}px`,
  '--font-base': `${fontSize.base}px`,
  '--font-lg': `${fontSize.lg}px`,
  '--font-xl': `${fontSize.xl}px`,
  '--font-2xl': `${fontSize['2xl']}px`,
  '--font-3xl': `${fontSize['3xl']}px`,
  '--font-4xl': `${fontSize['4xl']}px`,
  '--font-5xl': `${fontSize['5xl']}px`,
} as CSSProperties

const features = [
  {
    marker: '01',
    title: 'Renewals stay visible.',
    body: 'See days remaining, registrar, expiry dates, and nameservers before anything gets close.',
  },
  {
    marker: '02',
    title: 'Verification is guided.',
    body: 'Copy the TXT key, update DNS, and confirm ownership without digging through scattered notes.',
  },
  {
    marker: '03',
    title: 'Folders keep context.',
    body: 'Separate company, personal, and client domains so the right list is always one tap away.',
  },
]

const showcase = [
  {
    image: '/domain-organizer/domain-detail.png',
    title: 'Domain details',
    body: 'Registrar, expiry, RDAP, status, and nameservers in one focused screen.',
  },
  {
    image: '/domain-organizer/filter.png',
    title: 'Fast filters',
    body: 'Jump between active, expiring, draft, and folder views instantly.',
  },
  {
    image: '/domain-organizer/folders.png',
    title: 'Clean folders',
    body: 'Group domains by project, client, company, or personal ownership.',
  },
  {
    image: '/domain-organizer/dns-check.png',
    title: 'DNS checks',
    body: 'Verify ownership with a clear TXT record workflow.',
  },
]

const appStoreUrl = 'https://apps.apple.com/tr/app/domain-organizer-tracker/id6766611220'

export default function DomainOrganizerLandingPage() {
  return (
    <main className={styles.page} style={themeStyle}>
      <nav className={styles.nav} aria-label='Domain Organizer navigation'>
        <div className={`${styles.shell} ${styles.navInner}`}>
          <a className={styles.brand} href='/domain-organizer' aria-label='Domain Organizer home'>
            <span className={styles.brandMark} aria-hidden='true'>
              <Image
                className={styles.appIcon}
                src='/domain-organizer/icon-dark.png'
                alt=''
                width={1024}
                height={1024}
                unoptimized
              />
            </span>
            <span>Domain Organizer</span>
          </a>
          <div className={styles.navLinks}>
            <a href='#features'>Features</a>
            <a href='#screens'>Screens</a>
            <a href='/domain-organizer/privacy-policy'>Privacy</a>
            <a href='/domain-organizer/terms-of-use'>Terms</a>
          </div>
        </div>
      </nav>

      <section className={`${styles.shell} ${styles.hero}`}>
        <div>
          <span className={styles.eyebrow}>Liquid green domain control</span>
          <h1>
            All your domains.
            <span className={styles.accent}>One clean view.</span>
          </h1>
          <p className={styles.lead}>
            Track renewals, verify ownership, organize folders, and keep every registrar detail
            close before anything slips.
          </p>
          <div className={styles.actions}>
            <a className={`${styles.primaryButton} ${styles.storeButton}`} href={appStoreUrl}>
              <span className={styles.storeIcon} aria-hidden='true' />
              App Store
            </a>
            <a className={styles.secondaryButton} href='#screens'>
              Explore the app
            </a>
          </div>
          <div className={styles.stats} aria-label='Domain Organizer highlights'>
            <div className={styles.stat}>
              <strong>Days</strong>
              <span>renewal countdowns shown clearly</span>
            </div>
            <div className={styles.stat}>
              <strong>DNS</strong>
              <span>verification with TXT guidance</span>
            </div>
            <div className={styles.stat}>
              <strong>Folders</strong>
              <span>for company, clients, and personal domains</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={`${styles.floatCard} ${styles.floatLeft}`}>
            <strong>Active</strong>
            <span>Status at a glance</span>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              className={styles.heroImage}
              src='/domain-organizer/all-domains.png'
              alt='Domain Organizer app showing all domains with renewal status'
              width={1242}
              height={2688}
              sizes='(max-width: 980px) 80vw, 430px'
              unoptimized
              priority
            />
          </div>
          <div className={`${styles.floatCard} ${styles.floatRight}`}>
            <strong>Auto</strong>
            <span>Renewal reminders</span>
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`} id='features'>
        <div className={styles.sectionHeader}>
          <h2>
            Built for domains that need attention, not another spreadsheet.
          </h2>
          <p>
            Domain Organizer keeps the operational pieces visible: status, dates, DNS, ownership,
            registrars, and the folders that make your portfolio usable.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <span className={styles.featureIcon}>{feature.marker}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.splitFeature}>
          <div className={styles.splitContent}>
            <h2>
              Add a domain.
              <span className={styles.accent}>Get the details.</span>
            </h2>
            <p>
              Enter a domain name and keep registrar, expiry, DNS, and verification state attached
              to the same record from the start.
            </p>
            <ul className={styles.checkList}>
              <li>Registrar and expiry tracking</li>
              <li>Ownership verification workflow</li>
              <li>Nameservers and domain detail view</li>
            </ul>
          </div>
          <div className={styles.splitImages}>
            <Image
              className={styles.featureImage}
              src='/domain-organizer/add-domain.png'
              alt='Domain Organizer add domain workflow'
              width={1242}
              height={2688}
              sizes='(max-width: 720px) 100vw, 320px'
              unoptimized
            />
            <Image
              className={styles.featureImage}
              src='/domain-organizer/verify-ownership.png'
              alt='Domain Organizer ownership verification workflow'
              width={1242}
              height={2688}
              sizes='(max-width: 720px) 100vw, 320px'
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`} id='screens'>
        <div className={styles.sectionHeader}>
          <h2>
            Every screen is tuned for quick decisions.
          </h2>
          <p>
            Dense where it matters, calm where it helps, and always anchored by the domain you are
            managing.
          </p>
        </div>
        <div className={styles.showcase}>
          {showcase.map((item) => (
            <article className={styles.showcaseItem} key={item.title}>
              <Image
                className={styles.showcaseImage}
                src={item.image}
                alt={`${item.title} screen in Domain Organizer`}
                width={1242}
                height={2688}
                sizes='(max-width: 720px) 72vw, 280px'
                unoptimized
              />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.cta}`}>
        <div>
          <h2>Keep your domain portfolio under control.</h2>
          <p>
            A focused place for renewals, verification, folders, and registrar details, designed
            around the way domain owners actually check their assets.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a className={`${styles.secondaryButton} ${styles.storeButton}`} href={appStoreUrl}>
            <span className={styles.storeIcon} aria-hidden='true' />
            App Store
          </a>
          <a className={styles.secondaryButton} href='/domain-organizer/terms-of-use'>
            Read terms
          </a>
        </div>
      </section>

      <footer className={`${styles.shell} ${styles.footer}`}>
        <span>Domain Organizer. Last updated: May 25, 2026.</span>
        <div className={styles.footerLinks}>
          <a href='/domain-organizer/privacy-policy'>Privacy Policy</a>
          <a href='/domain-organizer/terms-of-use'>Terms of Use</a>
        </div>
      </footer>
    </main>
  )
}
