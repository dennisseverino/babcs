import { useState } from 'react'

const links = [
  ['Accounting', '/accounting'],
  ['HR', '/hr'],
  ['IT', '/it'],
  ['Audit', '/audit'],
  ['Mission', '/mission'],
]

export function SiteHeader({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="service-header">
      <nav className="service-nav page-container" aria-label="Primary navigation">
        <a className="service-brand" href="/">BABCS Corp</a>
        <button className="service-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="service-navigation" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <div className={`service-nav-links ${menuOpen ? 'is-open' : ''}`} id="service-navigation">
          {links.map(([label, href]) => <a className={active === label.toLowerCase() ? 'active' : ''} href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </div>
        <a className="service-contact" href="/inquire">Inquire</a>
      </nav>
    </header>
  )
}
