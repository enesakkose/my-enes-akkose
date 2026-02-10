export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id='contact' className='relative px-6 py-28'>
      {/* Top separator */}
      <div className='absolute top-0 left-1/2 h-[1px] w-3/4 max-w-xl -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent' />

      <div className='relative mx-auto max-w-5xl'>
        {/* Section heading */}
        <div className='animate-fade-in-up mb-16 text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.3em] text-accent uppercase'>
            Let&apos;s Work Together
          </p>
          <h2 className='font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight'>
            Contact<span className='text-accent'>.</span>
          </h2>
        </div>

        {/* Contact cards */}
        <div className='animate-fade-in-up delay-1 mx-auto mb-16 grid max-w-3xl gap-4 sm:grid-cols-3'>
          {/* Email */}
          <a
            href='mailto:ens.akkose@gmail.com'
            className='card group flex flex-col items-center gap-3 text-center'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface transition-colors group-hover:border-accent group-hover:bg-accent-dim'>
              <svg
                className='h-5 w-5 text-muted transition-colors group-hover:text-accent'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <div>
              <p className='text-xs text-muted'>Email</p>
              <p className='mt-0.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent'>
                ens.akkose@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href='tel:+905051695460'
            className='card group flex flex-col items-center gap-3 text-center'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface transition-colors group-hover:border-accent group-hover:bg-accent-dim'>
              <svg
                className='h-5 w-5 text-muted transition-colors group-hover:text-accent'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
            </div>
            <div>
              <p className='text-xs text-muted'>Phone</p>
              <p className='mt-0.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent'>
                +90 505 169 5460
              </p>
            </div>
          </a>

          {/* Location */}
          <div className='card group flex flex-col items-center gap-3 text-center'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface transition-colors group-hover:border-accent group-hover:bg-accent-dim'>
              <svg
                className='h-5 w-5 text-muted transition-colors group-hover:text-accent'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </div>
            <div>
              <p className='text-xs text-muted'>Location</p>
              <p className='mt-0.5 text-sm font-medium text-foreground'>Istanbul, Turkey</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className='animate-fade-in-up delay-2 mb-12 flex items-center justify-center gap-4'>
          <a
            href='https://linkedin.com/in/enesakkose'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(212,168,83,0.15)]'
            aria-label='LinkedIn'
          >
            <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
          </a>
          <a
            href='https://github.com/enesakkose'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(212,168,83,0.15)]'
            aria-label='GitHub'
          >
            <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className='animate-fade-in text-center'>
          <div className='mx-auto mb-6 h-[3px] w-[60px] rounded-sm bg-linear-to-r from-accent via-[#b8922e] to-accent' />
          <p className='text-xs text-muted'>© {currentYear} Enes Akkose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
