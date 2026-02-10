const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      'Angular',
      'React JS',
      'Next.js',
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'TailwindCSS',
      'Scss',
      'Redux',
      'Redux-Toolkit',
      'Zustand',
      'Ngxs',
      'RxJs',
    ],
  },
  {
    title: 'Backend & Others',
    skills: [
      'Firebase',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'Git',
      'GitHub',
      'Jenkins',
      'NGINX',
    ],
  },
] as const

export default function Skills() {
  return (
    <section id='skills' className='relative px-6 py-28'>
      {/* Subtle background accent */}
      <div
        className='pointer-events-none absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 opacity-[0.03]'
        style={{
          background: 'radial-gradient(ellipse, #d4a853 0%, transparent 70%)',
        }}
      />

      <div className='relative mx-auto max-w-5xl'>
        {/* Section heading */}
        <div className='animate-fade-in-up mb-16 text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.3em] text-accent uppercase'>
            Technologies
          </p>
          <h2 className='font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight'>
            Skills<span className='text-accent'>.</span>
          </h2>
        </div>

        {/* Skill grid */}
        <div className='grid gap-8 sm:grid-cols-2'>
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <div key={category.title} className={`animate-fade-in-up delay-${catIdx + 1}`}>
              <h3
                className='mb-4 text-sm font-bold tracking-wide text-foreground uppercase'
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {category.title}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className='inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent-dim whitespace-nowrap'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
