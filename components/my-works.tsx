import Image from 'next/image'

type Work = {
  name: string
  description: string
  tech: readonly string[]
  icon:
    | { type: 'image'; src: string }
    | { type: 'svg'; d: string }
  link: {
    href: string
    label: string
    type: 'appStore' | 'github' | 'npm'
  }
  screenshots?: string[]
}

const WORKS_DATA: Work[] = [
  {
    name: 'Chronic: Daily History Archive',
    description:
      'A beautifully crafted mobile app that delivers a curated historical event every day, tied to the calendar date. Users can browse events across centuries, read concise deep dives with source references, and save stories to a personal archive. Features include calendar-based navigation, multi-language support (i18n), push notifications for daily history, and a minimalist, distraction-free reading experience. Published on the App Store.',
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'NativeWind',
    ],
    icon: { type: 'image', src: '/chronic.png' },
    link: {
      href: 'https://apps.apple.com/tr/app/chronic-daily-history-archive/id6760256547',
      label: 'View on App Store',
      type: 'appStore',
    },
    screenshots: [
      '/app-store-en/chronic_shot_1_en.png',
      '/app-store-en/chronic_shot_2_en.png',
      '/app-store-en/chronic_shot_3_en.png',
      '/app-store-en/chronic_shot_4_en.png',
    ],
  },
  {
    name: 'Bulmate',
    description:
      'AI-powered, blazing fast command-line price comparison tool. It helps you find the absolute cheapest prices for any product across different countries and search engines, directly from your terminal. Features include global search (15+ countries), native HTTP parsing for speed, and intelligent engine switching.',
    tech: ['Node.js', 'Commander', 'Cheerio', 'Axios', 'Chalk'],
    icon: {
      type: 'svg',
      d: 'M0 0v24h24V0H0zm18 18h-3V9h-3v9h-6V6h12v12z',
    },
    link: {
      href: 'https://www.npmjs.com/package/@enesakkose/bulmate',
      label: 'View on NPM',
      type: 'npm',
    },
  },
  {
    name: 'Music-Player',
    description:
      'A music application with features for listening, following, creating playlists, and commenting. Includes user authentication, data management, and form validation.',
    tech: ['React', 'Redux Toolkit', 'Firebase', 'Formik', 'Yup', 'CSS'],
    icon: {
      type: 'svg',
      d: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    },
    link: {
      href: 'https://github.com/enesakkose',
      label: 'GitHub repository',
      type: 'github',
    },
  },
]

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M8.8086 14.9194l6.1107-11.0368c.0837-.1513.1682-.302.2437-.4584.0685-.142.1267-.2854.1646-.4403.0803-.3259.0588-.6656-.066-.9767-.1238-.3095-.3417-.5678-.6201-.7355a1.4175 1.4175 0 0 0-.921-.1924c-.3207.043-.6135.1935-.8443.4288-.1094.1118-.1996.2361-.2832.369-.092.1463-.175.2979-.259.4492l-.3864.6979-.3865-.6979c-.0837-.1515-.1667-.303-.2587-.4492-.0837-.1329-.1739-.2572-.2835-.369-.2305-.2353-.5233-.3857-.844-.429a1.4181 1.4181 0 0 0-.921.1926c-.2784.1677-.4964.426-.6203.7355-.1246.311-.1461.6508-.066.9767.038.155.0962.2984.1648.4403.0753.1564.1598.307.2437.4584l1.248 2.2543-4.8625 8.7825H2.0295c-.1676 0-.3351-.0007-.5026.0092-.1522.009-.3004.0284-.448.0714-.3108.0906-.5822.2798-.7783.548-.195.2665-.3006.5929-.3006.9279 0 .3352.1057.6612.3006.9277.196.2683.4675.4575.7782.548.1477.043.296.0623.4481.0715.1675.01.335.009.5026.009h13.0974c.0171-.0357.059-.1294.1-.2697.415-1.4151-.6156-2.843-2.0347-2.843zM3.113 18.5418l-.7922 1.5008c-.0818.1553-.1644.31-.2384.4705-.067.1458-.124.293-.1611.452-.0785.3346-.0576.6834.0645 1.0029.1212.3175.3346.583.607.7549.2727.172.5891.2416.9013.1975.3139-.044.6005-.1986.8263-.4402.1072-.1148.1954-.2424.2772-.3787.0902-.1503.1714-.3059.2535-.4612L6 19.4636c-.0896-.149-.9473-1.4704-2.887-.9218m20.5861-3.0056a1.4707 1.4707 0 0 0-.779-.5407c-.1476-.0425-.2961-.0616-.4483-.0705-.1678-.0099-.3352-.0091-.503-.0091H18.648l-4.3891-7.817c-.6655.7005-.9632 1.485-1.0773 2.1976-.1655 1.0333.0367 2.0934.546 3.0004l5.2741 9.3933c.084.1494.167.299.2591.4435.0837.131.1739.2537.2836.364.231.2323.5238.3809.8449.4232.3192.0424.643-.0244.9217-.1899.2784-.1653.4968-.4204.621-.7257.1246-.3072.146-.6425.0658-.9641-.0381-.1529-.0962-.2945-.165-.4346-.0753-.1543-.1598-.303-.2438-.4524l-1.216-2.1662h1.596c.1677 0 .3351.0009.5029-.009.1522-.009.3007-.028.4483-.0705a1.4707 1.4707 0 0 0 .779-.5407A1.5386 1.5386 0 0 0 24 16.452a1.539 1.539 0 0 0-.3009-.9158Z' />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill='currentColor' viewBox='0 0 24 24'>
      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
    </svg>
  )
}

function NpmIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill='currentColor' viewBox='0 0 24 24'>
      <path d='M0 0v24h24V0H0zm18 18h-3V9h-3v9h-6V6h12v12z' />
    </svg>
  )
}

export default function MyWorks() {
  return (
    <section id='my-works' className='relative px-6 py-28'>
      <div className='relative mx-auto max-w-5xl'>
        {/* Section heading */}
        <div className='animate-fade-in-up mb-16 text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.3em] text-accent uppercase'>
            Showcase
          </p>
          <h2 className='font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight'>
            My Works<span className='text-accent'>.</span>
          </h2>
        </div>

        {/* Works cards */}
        <div className='mx-auto max-w-2xl space-y-6'>
          {WORKS_DATA.map((work, idx) => (
            <div
              key={work.name}
              className={`card animate-fade-in-up delay-${idx + 1} group relative overflow-hidden`}
            >
              {/* Accent top border */}
              <div
                className='absolute top-0 left-0 h-0.5 w-full'
                style={{ background: 'var(--gradient-gold)' }}
              />

              <div className='flex items-start justify-between gap-4'>
                <div>
                  <div className='mb-2 flex items-center gap-3'>
                    {/* Icon */}
                    <div className='flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-accent-dim overflow-hidden'>
                      {work.icon.type === 'image' ? (
                        <Image
                          src={work.icon.src}
                          alt={work.name}
                          width={40}
                          height={40}
                          className='rounded-xl object-cover'
                        />
                      ) : (
                        <svg
                          className='h-5 w-5 text-accent'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1.5}
                            d={work.icon.d}
                          />
                        </svg>
                      )}
                    </div>
                    <h3
                      className='text-xl font-bold text-foreground transition-colors group-hover:text-accent'
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {work.name}
                    </h3>
                  </div>
                  <p className='mb-5 text-sm leading-relaxed text-muted'>
                    {work.description}
                  </p>
                  {work.link.type === 'appStore' && (
                    <a
                      href={work.link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group/btn inline-flex items-center gap-2 rounded-full border-0 px-6 py-2.5 text-xs font-semibold text-background outline-none cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(212,168,83,0.3)] mb-5'
                      style={{ background: 'linear-gradient(135deg, #d4a853 0%, #b8922e 50%, #d4a853 100%)' }}
                    >
                      Download on App Store
                      <svg
                        className='h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </a>
                  )}
                  {work.link.type === 'npm' && (
                    <a
                      href={work.link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group/btn inline-flex items-center gap-2 rounded-full border-0 px-6 py-2.5 text-xs font-semibold text-background outline-none cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(212,168,83,0.3)] mb-5'
                      style={{
                        background: 'linear-gradient(135deg, #d4a853 0%, #b8922e 50%, #d4a853 100%)',
                      }}
                    >
                      View on NPM
                      <svg
                        className='h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </a>
                  )}
                </div>

                {/* External link icon */}
                <a
                  href={work.link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='shrink-0 rounded-full border border-border bg-surface p-2.5 text-muted transition-all duration-300 hover:border-accent hover:text-accent'
                  aria-label={work.link.label}
                >
                  {work.link.type === 'appStore' && <AppStoreIcon className='h-4 w-4' />}
                  {work.link.type === 'github' && <GitHubIcon className='h-4 w-4' />}
                  {work.link.type === 'npm' && <NpmIcon className='h-4 w-4' />}
                </a>
              </div>

              {/* Tech stack */}
              <div className='flex flex-wrap gap-1.5'>
                {work.tech.map((t) => (
                  <span
                    key={t}
                    className='inline-flex items-center px-3 py-1 text-[11px] font-medium tracking-wide rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent-dim whitespace-nowrap'
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* App Store screenshots */}
              {work.screenshots && work.screenshots.length > 0 && (
                <div className='mt-6 pt-6 border-t border-border'>
                  <p className='mb-4 text-xs font-semibold tracking-[0.15em] text-accent uppercase'>
                    Screenshots
                  </p>
                  <div className='flex gap-3 overflow-x-auto pb-2 scrollbar-thin'>
                    {work.screenshots.map((src, i) => (
                      <div
                        key={i}
                        className='shrink-0 overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-accent'
                      >
                        <Image
                          src={src}
                          alt={`${work.name} screenshot ${i + 1}`}
                          width={180}
                          height={390}
                          className='h-auto w-45 object-cover'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
