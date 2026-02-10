interface Project {
  name: string
  description: string
  tech: string[]
}

interface SubSection {
  client: string
  projects: Project[]
}

const EXPERIENCE_DATA = {
  company: 'Rast Mobile',
  role: 'Software Developer',
  period: 'Aug 2023 — Present',
  location: 'Istanbul, Turkey',
  sections: [
    {
      client: 'Rast Mobile',
      projects: [
        {
          name: 'Boom360',
          description:
            'Developed a hybrid application that allows users to rent and purchase equipment, access campaigns, create service requests, and track AI-powered updates. Implemented Angular modules including equipment notes calendar, leasing calculator, and order tracking.',
          tech: ['Angular', 'NGXS', 'Flutter', 'Java'],
        },
        {
          name: 'MINI',
          description:
            'Developed a web application enabling users to purchase vehicles, schedule test drives and appointments, and customize Prime packages. Implemented custom sliders with Swiper and SVG, improved payment features.',
          tech: ['Next.js', 'HookState', 'Framer Motion', 'Tailwind CSS'],
        },
      ],
    },
    {
      client: 'ETIYA (External)',
      projects: [
        {
          name: 'WSC & GD-Toolbox',
          description:
            'Developed end-to-end telecom applications for SIM card, phone, internet, and SMS services. Improved activation and fiber internet appointment processes using Angular 20 Signals, Effects, and Computed Functions in two-week Agile sprint cycles.',
          tech: ['Angular 20', 'NGXS', 'RxJS', 'Signals', 'Java'],
        },
        {
          name: 'CSR-Ticket',
          description:
            'Developed a ticketing application that allows users to create and manage support tickets. Optimized ticket creation workflows using Angular 20, NGXS, RxJS, and Signals.',
          tech: ['Angular 20', 'NGXS', 'RxJS', 'Signals', 'Java'],
        },
        {
          name: 'Control-Plane',
          description:
            'Developed enterprise application features for environment setup and metric visualization. Improved decision-making processes with interactive charts and dashboards.',
          tech: ['React', 'ViteJS', 'Zustand', 'Mantine UI', 'Java'],
        },
      ],
    },
    {
      client: 'TÜBİTAK',
      projects: [
        {
          name: 'ARGES',
          description:
            'Developed research and development infrastructure applications. Improved data grid features and export functionality, designed new UI focused on high user experience.',
          tech: ['Angular', 'NGXS', 'Nest.js', 'DevExtreme'],
        },
        {
          name: 'KİT-Sİ',
          description:
            'Developed the login system for certain books on the publications site. Implemented new UI and added features that allow users to upload book content.',
          tech: ['Angular', 'NgRx', 'Java'],
        },
      ],
    },
  ] satisfies SubSection[],
}

export default function Experience() {
  return (
    <section id='experience' className='relative px-6 py-28'>
      <div className='relative mx-auto max-w-5xl'>
        {/* Section heading */}
        <div className='animate-fade-in-up mb-16 text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.3em] text-accent uppercase'>
            Career
          </p>
          <h2 className='font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight'>
            Experience<span className='text-accent'>.</span>
          </h2>
        </div>

        {/* Company header */}
        <div className='animate-fade-in-up delay-1 mb-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h3
              className='text-2xl font-bold text-foreground'
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {EXPERIENCE_DATA.company}
            </h3>
            <p className='mt-1 text-sm text-muted'>{EXPERIENCE_DATA.role}</p>
          </div>
          <div className='flex items-center gap-3 text-sm text-muted'>
            <span className='rounded-full border border-border bg-surface px-3 py-1 text-xs'>
              {EXPERIENCE_DATA.period}
            </span>
            <span>{EXPERIENCE_DATA.location}</span>
          </div>
        </div>

        {/* Timeline */}
        <div className='relative space-y-12 pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-[1px] before:bg-gradient-to-b before:from-accent before:via-border before:to-transparent'>
          {EXPERIENCE_DATA.sections.map((section, sIdx) => (
            <div key={section.client} className={`animate-fade-in-up delay-${sIdx + 2}`}>
              {/* Client label */}
              <div className='relative mb-6'>
                {/* Timeline dot */}
                <div className='absolute -left-8 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center'>
                  <div className='h-2.5 w-2.5 rounded-full border-2 border-accent bg-background' />
                </div>
                <h4
                  className='text-xs font-bold tracking-[0.15em] text-accent uppercase'
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {section.client}
                </h4>
              </div>

              {/* Project cards */}
              <div className='grid gap-4 sm:grid-cols-2'>
                {section.projects.map((project) => (
                  <div key={project.name} className='card group'>
                    <h5
                      className='mb-2 text-base font-bold text-foreground transition-colors group-hover:text-accent'
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {project.name}
                    </h5>
                    <p className='mb-4 text-sm leading-relaxed text-muted'>{project.description}</p>
                    <div className='flex flex-wrap gap-1.5'>
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className='inline-flex items-center px-3 py-1 text-[11px] font-medium tracking-wide rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent-dim whitespace-nowrap'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
