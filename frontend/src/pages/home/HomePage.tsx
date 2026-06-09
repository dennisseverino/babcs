import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import heroBuilding from '../../assets/hero-building.jpg'
import serverRoom from '../../assets/server-room.jpg'
import strategyMeeting from '../../assets/strategy-meeting.jpg'
import './HomePage.css'

type IconName =
  | 'accounting'
  | 'arrow'
  | 'audit'
  | 'check'
  | 'globe'
  | 'hr'
  | 'network'
  | 'security'

const iconPaths: Record<IconName, ReactNode> = {
  accounting: <><rect x="4" y="5" width="16" height="15" rx="1"/><path d="M8 5V3h8v2M8 9h8M8 13h3M8 17h3M15 13h1M15 17h1"/></>,
  arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  audit: <><path d="M12 3l7 3v5c0 4.6-2.7 8.3-7 10-4.3-1.7-7-5.4-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9s-1.2 6.5-3.5 9c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3z"/></>,
  hr: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 19v-2c0-3 2.7-5 6-5s6 2 6 5v2M15 13c3 0 5 1.7 5 4v2"/></>,
  network: <><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 11l8-4M8 13l8 4"/></>,
  security: <><path d="M12 3l7 3v5c0 4.6-2.7 8.3-7 10-4.3-1.7-7-5.4-7-10V6l7-3z"/><path d="M9.5 12l1.5 1.5 3.5-3.5"/></>,
}

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size}>{iconPaths[name]}</svg>
}

const navItems = [
  ['Accounting', '/accounting'],
  ['HR', '/hr'],
  ['IT', '/it'],
  ['Audit', '/audit'],
  ['Mission', '/mission'],
]

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top">BABCS Corp</a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map(([label, href]) => <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
          <a className="button button-small button-dark nav-cta" href="/inquire">Inquire</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <img className="hero-image" src={heroBuilding} alt="Modern glass corporate tower" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow pill">Strategic corporate solutions</span>
            <h1>Multidisciplinary Excellence for the Modern Enterprise.</h1>
            <p>BABCS Corp provides specialized expertise in Accounting, IT, HR, and Audit services. We empower C-suite executives with transparent, authoritative strategies that drive high-stakes reliability and operational growth.</p>
            <div className="button-row">
              <a className="button button-dark" href="/inquire">Get Started</a>
              <a className="button button-light" href="#services">View Case Studies</a>
            </div>
          </div>
        </section>

        <section className="services-section section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <h2>Comprehensive Service Ecosystem</h2>
                <p>Our core competencies are structured to provide seamless integration across your most critical business functions.</p>
              </div>
              <span className="heading-rule" />
            </div>

            <div className="services-grid">
              <article className="service-card accounting-card" id="accounting">
                <div className="icon-box"><Icon name="accounting" size={28} /></div>
                <h3>Accounting</h3>
                <p>Precision-driven financial management. From tax optimization to detailed bookkeeping and international financial reporting.</p>
                <ul className="check-list">
                  <li><Icon name="check" size={16} /> Strategic Tax Planning</li>
                  <li><Icon name="check" size={16} /> IFRS Compliance</li>
                </ul>
                <a className="text-link" href="/accounting">Explore Accounting <Icon name="arrow" size={17} /></a>
              </article>

              <article className="service-card it-card" id="it">
                <div className="it-copy">
                  <div className="icon-box icon-box-dark"><Icon name="security" size={28} /></div>
                  <h3>Advanced IT Infrastructure</h3>
                  <p>Securing your enterprise with cloud-native solutions, robust cybersecurity frameworks, and scalable IT infrastructure.</p>
                  <div className="capabilities">
                    <div><span>Cybersecurity</span><strong>Zero-Trust Frameworks</strong></div>
                    <div><span>Cloud</span><strong>Hybrid Architecture</strong></div>
                  </div>
                </div>
                <img src={serverRoom} alt="Secure enterprise server room" />
              </article>

              <article className="service-card" id="hr">
                <div className="icon-box"><Icon name="hr" size={28} /></div>
                <h3>Human Capital</h3>
                <p>Managing the lifeblood of your organization through modern recruitment, payroll, and cultural strategy.</p>
                <a className="text-link" href="/hr">Learn More <Icon name="arrow" size={17} /></a>
              </article>

              <article className="service-card" id="audit">
                <div className="icon-box"><Icon name="audit" size={28} /></div>
                <h3>Audit &amp; Assurance</h3>
                <p>Upholding transparency through rigorous internal audits and specialized compliance reporting.</p>
                <div className="tags"><span>ISO Certified</span><span>Regulatory Ready</span></div>
              </article>

              <article className="advice-card">
                <div className="advice-copy">
                  <h3>Need Custom Advice?</h3>
                  <p>Our consultants are available for complex multidisciplinary projects.</p>
                </div>
                <Icon name="network" size={150} />
                <a className="advice-button" href="#inquiry">Speak to a Partner</a>
              </article>
            </div>
          </div>
        </section>

        <section className="mission-section section" id="mission">
          <div className="container mission-grid">
            <div className="mission-copy">
              <span className="eyebrow green">Our strategic mission</span>
              <h2>Driving Structural Clarity through Innovation.</h2>
              <p>At BABCS Corp, our mission is to act as the structural anchor for global enterprises. We believe that professional services should not just be compliant, but transformative. By bridging the gap between technical IT infrastructure and financial accounting, we create a unified operational foundation for our clients.</p>
              <div className="stats">
                <div><strong>99.8%</strong><span>Audit accuracy rate</span></div>
                <div><strong>500+</strong><span>Enterprise clients</span></div>
              </div>
            </div>
            <img className="mission-image" src={strategyMeeting} alt="Executives discussing business strategy" />
          </div>
        </section>

        <section className="inquiry-section section" id="inquiry">
          <div className="inquiry-card">
            <div className="inquiry-heading">
              <h2>Request a Strategic Consultation</h2>
              <p>Complete the form below and one of our multidisciplinary leads will reach out within 24 hours.</p>
            </div>
            {submitted ? (
              <div className="success-message" role="status">
                <Icon name="check" size={34} />
                <h3>Inquiry received</h3>
                <p>Thank you. A BABCS representative will contact you shortly.</p>
                <button className="button button-dark" type="button" onClick={() => setSubmitted(false)}>Send another inquiry</button>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={submitInquiry}>
                <label>Full Name<input name="name" placeholder="Johnathan Smith" required /></label>
                <label>Corporate Email<input name="email" type="email" placeholder="jsmith@enterprise.com" required /></label>
                <label className="full-field">Primary Service of Interest
                  <select name="service" defaultValue="Accounting & Financial Reporting">
                    <option>Accounting &amp; Financial Reporting</option><option>IT Infrastructure &amp; Cloud</option><option>Human Resources Strategy</option><option>Comprehensive Audit</option><option>Multidisciplinary Bundle</option>
                  </select>
                </label>
                <label className="full-field">Message / Project Scope<textarea name="message" placeholder="Briefly describe your requirements..." rows={5} required /></label>
                <button className="button button-dark full-field" type="submit">Submit Inquiry</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-intro">
            <a className="brand" href="#top">BABCS Corp</a>
            <p>Strategic, transparent, and authoritative multidisciplinary professional services.</p>
            <div className="social-links"><a href="#top" aria-label="Global presence"><Icon name="globe" size={16} /></a><a href="#services" aria-label="Our network"><Icon name="network" size={16} /></a></div>
          </div>
          <div><h3>Services</h3><a href="/accounting">Accounting</a><a href="/it">IT Services</a><a href="/hr">HR Management</a><a href="/audit">Audit &amp; Compliance</a></div>
          <div><h3>Company</h3><a href="/mission">About Us</a><a href="/inquire">Careers</a><a href="/mission">Mission</a><a href="/inquire">Contact Us</a></div>
          <div><h3>Legal</h3><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 BABCS Corp. All rights reserved.</span><div><span>Global Headquarters: NYC</span><span>Precision Driven</span></div></div>
      </footer>
    </div>
  )
}

export default HomePage
