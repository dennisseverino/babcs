const links = [
  ['Accounting', '/accounting'],
  ['HR', '/hr'],
  ['IT', '/it'],
  ['Audit', '/audit'],
  ['Mission', '/mission'],
]

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="service-header">
      <nav className="service-nav page-container" aria-label="Primary navigation">
        <a className="service-brand" href="/">BABCS Corp</a>
        <div className="service-nav-links">
          {links.map(([label, href]) => <a className={active === label.toLowerCase() ? 'active' : ''} href={href} key={label}>{label}</a>)}
        </div>
        <a className="service-contact" href="/inquire">Contact Sales</a>
      </nav>
    </header>
  )
}
