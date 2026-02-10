export default function Hero() {
  return (
    <section
      id='about'
      className='relative flex min-h-screen items-center justify-center overflow-hidden px-6'
    >
      {/* Background geometric elements */}
      <div className='pointer-events-none absolute inset-0'>
        {/* Gradient orb top-right */}
        <div
          className='absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-[0.07]'
          style={{
            background: 'radial-gradient(circle, #d4a853 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        {/* Gradient orb bottom-left */}
        <div
          className='absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full opacity-[0.05]'
          style={{
            background: 'radial-gradient(circle, #d4a853 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite 2s',
          }}
        />
        {/* Thin diagonal line */}
        <div
          className='absolute top-1/4 left-[10%] h-[1px] w-[200px] rotate-[35deg] opacity-[0.08]'
          style={{ background: 'var(--gradient-gold)' }}
        />
        <div
          className='absolute bottom-1/3 right-[15%] h-[1px] w-[150px] -rotate-[25deg] opacity-[0.06]'
          style={{ background: 'var(--gradient-gold)' }}
        />
        {/* Grid dots */}
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: 'radial-gradient(circle, var(--foreground) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className='relative z-10 mx-auto max-w-4xl text-center'>
        {/* Status badge */}
        <div className='animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2'>
          <span className='relative flex h-2 w-2'>
            <span
              className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'
              style={{ animation: 'pulse-glow 2s infinite' }}
            />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
          </span>
          <span className='text-xs font-medium tracking-wide text-muted'>
            Available for work as Software Developer
          </span>
        </div>

        {/* Name */}
        <h1 className='animate-fade-in-up delay-1 mb-4' style={{ fontFamily: 'var(--font-syne)' }}>
          <span className='block text-lg font-medium tracking-[0.2em] text-muted uppercase sm:text-xl'>
            Hello, I&apos;m
          </span>
          <span className='mt-2 block text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl'>
            Enes <span className='text-shimmer'>Akkose</span>
          </span>
        </h1>

        {/* Title */}
        <p
          className='animate-fade-in-up delay-2 mb-6 text-xl font-light tracking-wide text-muted sm:text-2xl'
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          Software Developer
        </p>

        {/* Location */}
        <p className='animate-fade-in-up delay-3 mb-12 flex items-center justify-center gap-2 text-sm text-muted'>
          <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
          Istanbul, Turkey
        </p>

        {/* CTAs */}
        <div className='animate-fade-in-up delay-4 flex flex-wrap items-center justify-center gap-6'>
          <a
            href='#contact'
            className='group inline-flex items-center gap-2 rounded-full border-0 px-8 py-3.5 text-sm font-semibold text-background outline-none cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(212,168,83,0.3)]'
            style={{ background: 'linear-gradient(135deg, #d4a853 0%, #b8922e 50%, #d4a853 100%)' }}
          >
            Get in Touch
            <svg
              className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
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
          <a
            href='https://github.com/enesakkose'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-full border border-border bg-surface px-8 py-3.5 text-sm font-medium text-foreground outline-none transition-all duration-300 hover:border-accent hover:text-accent'
          >
            <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='animate-fade-in delay-10 absolute bottom-8 left-1/2 -translate-x-1/2'>
        <div className='flex flex-col items-center gap-2'>
          <span className='text-[10px] font-medium tracking-[0.3em] text-muted uppercase'>
            Scroll
          </span>
          <div className='h-10 w-[1.5px] overflow-hidden rounded-full bg-border'>
            <div
              className='h-4 w-full rounded-full bg-accent'
              style={{ animation: 'draw-line 1.5s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
