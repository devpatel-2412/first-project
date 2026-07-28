import { useState } from 'react'
import './Header.css'

const NAV_LINKS = ['Services', 'Process', 'Work', 'Pricing', 'About', 'Contact']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#home" className="header-logo">
          <span className="header-logo-icon" aria-hidden="true">🥑</span>
          zerocode
        </a>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
          <a href="#get-started" className="header-cta header-cta-mobile" onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </nav>

        <a href="#get-started" className="header-cta header-cta-desktop">
          Get Started
        </a>

        <button
          type="button"
          className={`header-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
