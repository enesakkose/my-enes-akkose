const EDUCATION_DATA = [
  {
    school: 'Istanbul University',
    degree: 'Tourism Management',
    level: 'Bachelor of Economics',
    period: 'Sep 2020 — May 2023',
    icon: '🎓',
  },
  {
    school: 'Istanbul Kültür University',
    degree: 'Logistics',
    level: 'Associate of Degree',
    period: 'Sep 2018 — Nov 2020',
    icon: '📚',
  },
] as const

export default function Education() {
  return (
    <section id='education' className='relative px-6 py-28'>
      {/* Background accent */}
      <div
        className='pointer-events-none absolute bottom-0 right-0 h-[300px] w-[500px] opacity-[0.03]'
        style={{
          background: 'radial-gradient(ellipse at bottom right, #d4a853 0%, transparent 70%)',
        }}
      />

      <div className='relative mx-auto max-w-5xl'>
        {/* Section heading */}
        <div className='animate-fade-in-up mb-16 text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.3em] text-accent uppercase'>
            Academic
          </p>
          <h2 className='font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight'>
            Education<span className='text-accent'>.</span>
          </h2>
        </div>

        {/* Education cards */}
        <div className='grid gap-6 sm:grid-cols-2'>
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={edu.school}
              className={`card animate-fade-in-up delay-${idx + 1} group relative overflow-hidden`}
            >
              {/* Decorative corner */}
              <div className='absolute -top-1 -right-1 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                <div
                  className='h-full w-full'
                  style={{
                    background:
                      'linear-gradient(225deg, rgba(212,168,83,0.15) 0%, transparent 60%)',
                  }}
                />
              </div>

              <div className='relative'>
                <span className='mb-4 block text-2xl'>{edu.icon}</span>
                <h3
                  className='mb-1 text-lg font-bold text-foreground'
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {edu.school}
                </h3>
                <p className='mb-1 text-sm font-medium text-foreground/80'>{edu.degree}</p>
                <p className='mb-4 text-xs text-muted'>{edu.level}</p>
                <span className='inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted'>
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
