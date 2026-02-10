'use client'

import { useState, useEffect, useCallback } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)

    const sections = NAV_ITEMS.map((item) => item.href.slice(1))
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.getBoundingClientRect().top <= 120) {
        setActiveSection(sections[i])
        return
      }
    }
    setActiveSection('')
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: scrolled ? '70px' : '80px',
        padding: scrolled ? '16px 24px' : '24px 24px',
        transition: 'all 0.5s ease',
      }}
      className={
        scrolled
          ? 'bg-[rgba(17,17,20,0.7)] backdrop-blur-[20px] border border-border'
          : 'bg-transparent'
      }
    >
      {/* Desktop Nav */}
      <nav
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          listStyle: 'none',
        }}
        className='hidden md:flex'
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              position: 'relative',
              fontSize: '15px',
              fontWeight: 500,
              padding: '8px 16px',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              color: activeSection === item.href.slice(1) ? 'var(--accent)' : 'var(--muted)',
            }}
            onMouseEnter={(e) => {
              if (activeSection !== item.href.slice(1)) {
                e.currentTarget.style.color = 'var(--foreground)'
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.href.slice(1)) {
                e.currentTarget.style.color = 'var(--muted)'
              }
            }}
          >
            {item.label}
            {activeSection === item.href.slice(1) && (
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '16px',
                  height: '2px',
                  borderRadius: '9999px',
                  background: 'var(--accent)',
                }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className='flex flex-col md:hidden'
        aria-label='Toggle menu'
        style={{
          gap: '5px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            background: 'var(--foreground)',
            transition: 'all 0.3s ease',
            transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            background: 'var(--foreground)',
            transition: 'all 0.3s ease',
            opacity: mobileOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            background: 'var(--foreground)',
            transition: 'all 0.3s ease',
            transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className='bg-[rgba(17,17,20,0.7)] backdrop-blur-[20px] border border-border'
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            borderTop: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px' }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  color: activeSection === item.href.slice(1) ? 'var(--accent)' : 'var(--muted)',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
