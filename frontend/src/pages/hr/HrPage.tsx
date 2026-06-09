import hrCulture from '../../assets/hr-culture.jpg'
import hrHero from '../../assets/hr-hero.jpg'
import hrMandate from '../../assets/hr-mandate.jpg'
import { SiteFooter } from '../../components/site/SiteFooter'
import { SiteHeader } from '../../components/site/SiteHeader'
import '../services/ServicePages.css'

export default function HrPage() {
  return <div className="service-page"><SiteHeader active="hr"/><main>
    <section className="hr-hero"><img src={hrHero} alt="Professionals collaborating in a modern office"/><div className="page-container hr-hero-content"><span className="service-kicker">Human Capital Excellence</span><h1>Strategic HR for the Modern Enterprise.</h1><p>We balance high-stakes operational precision with a human-centric approach to build authoritative, resilient cultures.</p><div className="service-actions"><a className="service-button primary" href="#contact">Partner with Us</a><a className="service-button outline" href="#pillars">View Case Studies</a></div></div></section>
    <section className="service-section"><div className="page-container hr-mandate"><div><h2>The &quot;Human-Centric&quot; Mandate.</h2><p>At BABCS Corp, we believe that strategic transparency is the foundation of institutional trust. Our HR frameworks are not just about management; they are about empowering the individuals who drive your mission.</p><ul className="feature-list"><li>Inclusion by Design</li><li>Behavioral Intelligence</li></ul></div><div className="hr-mandate-image"><img src={hrMandate} alt="Business leaders collaborating with a tablet"/><div className="hr-quote">&quot;Precision in practice, humanity in purpose.&quot;</div></div></div></section>
    <section className="service-section hr-pillars" id="pillars"><div className="page-container"><div className="service-heading"><h2>Core HR Pillars</h2><p>Navigating the complexities of human capital with authoritative precision and strategic foresight.</p></div><div className="hr-grid">
      <article className="service-card talent"><div className="service-icon">♙</div><h3>Talent Acquisition</h3><p>Beyond recruitment. We identify and integrate high-caliber leaders who align with your long-term cultural and strategic objectives.</p><ul className="feature-list"><li>Executive Search &amp; Placement</li><li>Employer Branding Strategy</li><li>Global Mobility Services</li></ul></article>
      <article className="service-card payroll"><div className="service-icon">▣</div><h3>Payroll Management</h3><p>Flawless execution of compensation structures and benefits administration across multiple jurisdictions.</p><strong>99.9%</strong><span>Compliance Accuracy</span></article>
      <article className="service-card half"><div className="service-icon">⌁</div><h3>Compliance</h3><p>Mitigating risk through rigorous adherence to evolving labor laws and international standards.</p><a className="service-button outline" href="#contact">Request Audit</a></article>
      <article className="service-card culture"><div className="culture-layout"><div><div className="service-icon">✦</div><h3>Cultural Strategy</h3><p>Transforming organizational DNA to foster high performance and psychological safety.</p></div><img src={hrCulture} alt="Collaborative workplace workshop"/></div></article>
    </div></div></section>
    <section className="service-section hr-cta" id="contact"><div className="page-container hr-cta-box"><h2>Ready to Evolve Your Workforce?</h2><p>Partner with BABCS Corp to implement strategic HR frameworks that prioritize your most valuable asset: your people.</p><div className="service-actions" style={{justifyContent:'center'}}><a className="service-button primary" href="mailto:inquiries@babcs.example">Contact Our HR Consultants</a><a className="service-button outline" href="#pillars">Download Service Brochure</a></div></div></section>
  </main><SiteFooter/></div>
}
