import itHero from '../../assets/it-hero.jpg'
import itMobile from '../../assets/it-mobile.jpg'
import itOperations from '../../assets/it-operations.jpg'
import itUx from '../../assets/it-ux.jpg'
import { SiteFooter } from '../../components/site/SiteFooter'
import { SiteHeader } from '../../components/site/SiteHeader'
import '../services/ServicePages.css'

export default function ItPage() {
  return <div className="service-page it-page"><SiteHeader active="it"/><main>
    <section className="it-hero"><img src={itHero} alt="Web and mobile product dashboard workspace"/><div className="page-container it-hero-copy"><span className="service-kicker">Digital Product Engineering</span><h1>Strategic Web &amp; Mobile Development for the Authoritative Enterprise.</h1><p>We design secure, high-performance digital products that unite technical excellence with measurable business outcomes.</p><div className="service-actions"><a className="service-button primary" href="/inquire">Start a Project</a><a className="service-button outline" href="#specializations">Explore Services</a></div></div></section>
    <section className="service-section" id="specializations"><div className="page-container"><div className="service-heading"><h2>Core Development Specializations</h2><p>We combine technical excellence with strategic business logic to deliver applications that define industry standards.</p></div><div className="it-specializations">
      <article className="it-feature web-platform"><div><span>01 / Web</span><h3>Custom Web Platforms</h3><p>Scalable, secure web applications engineered around your operations, customers, and long-term growth.</p><ul><li>Enterprise architecture</li><li>Secure cloud integration</li><li>Performance optimization</li></ul></div><div className="code-panel"><b>production-ready</b><code>deploy(productStrategy)<br/>.withSecurity()<br/>.atEnterpriseScale()</code></div></article>
      <article className="it-feature ux-card"><img src={itUx} alt="UI and UX design process"/><div><span>02 / Experience</span><h3>UI/UX Strategy</h3><p>Research-led experiences that turn complex workflows into clear, confident decisions.</p></div></article>
      <article className="it-feature mobile-card"><div><span>03 / Mobile</span><h3>Enterprise Mobile Apps</h3><p>Native-quality mobile products with resilient architecture and focused user journeys.</p></div><img src={itMobile} alt="Enterprise mobile dashboard"/></article>
    </div></div></section>
    <section className="it-stats"><div className="page-container">{[['40%','Avg. Engagement Boost'],['99.9%','App Availability'],['2x','Speed-to-Market'],['Global','Deployment Ready']].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section className="service-section"><div className="page-container it-value"><img src={itOperations} alt="Modern development operations center"/><div><h2>Technology that respects your bottom line.</h2>{[['↗','Speed-to-Market','Agile development cycles prioritize high-impact features, ensuring your enterprise stays ahead of market shifts.'],['▥','Engagement Metrics','Every interface is engineered to optimize user retention and conversion.'],['⌁','Digital Transformation','Modernize legacy workflows with intelligent, interconnected application ecosystems.']].map(([icon,title,copy])=><article key={title}><b>{icon}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>
    <section className="service-section it-cta"><div className="page-container"><h2>Ready to build your digital future?</h2><p>Partner with our development team to engineer a product that balances technical complexity with intuitive authority.</p><div className="service-actions"><a className="service-button dark" href="/inquire">Inquire Now</a><a className="service-button outline" href="#specializations">Review Service Tiers</a></div></div></section>
  </main><SiteFooter/></div>
}
