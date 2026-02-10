export default function Projects() {
  return (
    <section id='projects' className='relative px-6 py-28'>
      <div className='relative mx-auto max-w-5xl'>
        {/* Section heading */}
        <div className='animate-fade-in-up mb-16 text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.3em] text-accent uppercase'>
            Portfolio
          </p>
          <h2 className='font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight'>
            Projects<span className='text-accent'>.</span>
          </h2>
        </div>

        {/* Project card */}
        <div className='animate-fade-in-up delay-1 mx-auto max-w-2xl'>
          <div className='card group relative overflow-hidden'>
            {/* Accent top border */}
            <div
              className='absolute top-0 left-0 h-[2px] w-full'
              style={{ background: 'var(--gradient-gold)' }}
            />

            <div className='flex items-start justify-between gap-4'>
              <div>
                <div className='mb-2 flex items-center gap-3'>
                  {/* Music icon */}
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-accent-dim'>
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
                        d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
                      />
                    </svg>
                  </div>
                  <h3
                    className='text-xl font-bold text-foreground transition-colors group-hover:text-accent'
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    Music-Player
                  </h3>
                </div>
                <p className='mb-5 text-sm leading-relaxed text-muted'>
                  A music application with features for listening, following, creating playlists,
                  and commenting. Includes user authentication, data management, and form
                  validation.
                </p>
              </div>

              {/* GitHub link */}
              <a
                href='https://github.com/enesakkose'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 rounded-full border border-border bg-surface p-2.5 text-muted transition-all duration-300 hover:border-accent hover:text-accent'
                aria-label='GitHub repository'
              >
                <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </a>
            </div>

            {/* Tech stack */}
            <div className='flex flex-wrap gap-1.5'>
              {['React', 'Redux Toolkit', 'Firebase', 'Formik', 'Yup', 'CSS'].map((t) => (
                <span
                  key={t}
                  className='inline-flex items-center px-3 py-1 text-[11px] font-medium tracking-wide rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent-dim whitespace-nowrap'
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
