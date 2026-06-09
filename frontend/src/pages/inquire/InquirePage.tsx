import { useState } from 'react'
import type { FormEvent } from 'react'
import inquireOffices from '../../assets/inquire-offices.jpg'
import { SiteFooter } from '../../components/site/SiteFooter'
import { SiteHeader } from '../../components/site/SiteHeader'
import '../services/ServicePages.css'

const services = [['Accounting & Tax','Strategic financial reporting and compliance.'],['Human Resources','Workforce planning and culture optimization.'],['IT Infrastructure','Digital transformation and cybersecurity.'],['Internal Audit','Risk assessment and authoritative validation.']]

export default function InquirePage() {
  const [step,setStep] = useState(1)
  const [selected,setSelected] = useState<string[]>([])
  const [submitted,setSubmitted] = useState(false)
  const toggle = (service:string) => setSelected(current => current.includes(service) ? current.filter(item=>item!==service) : [...current,service])
  const submit = (event:FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true) }
  return <div className="service-page inquire-page"><SiteHeader/><main className="page-container inquire-main">
    <header className="inquire-intro"><h1>Partnering in your <span>Strategic</span> Growth.</h1><p>Initiate a consultation with our multidisciplinary team. Provide details below to be matched with the appropriate regional expert in Accounting, HR, IT, or Audit.</p></header>
    <div className="inquire-layout"><section className="inquire-form-card">{submitted ? <div className="inquire-success"><b>✓</b><h2>Consultation request received.</h2><p>Our regional team will review your requirements and contact you within 24 hours.</p><a className="service-button dark" href="/">Return Home</a></div> : <form onSubmit={submit}>
      <div className="form-progress"><div><span>Step {step} of 3: {step===1?'Primary Objective':step===2?'Project Context':'Point of Contact'}</span><b>{Math.round(step/3*100)}%</b></div><i style={{width:`${step/3*100}%`}}/></div>
      {step===1 && <div><h2>What are you looking to achieve?</h2><div className="objective-grid">{services.map(([title,copy])=><button className={selected.includes(title)?'selected':''} type="button" key={title} onClick={()=>toggle(title)}><span>{title}</span><p>{copy}</p><i>{selected.includes(title)?'✓':''}</i></button>)}</div></div>}
      {step===2 && <div><h2>Project Context</h2><div className="context-fields"><label>Organization<input required placeholder="Company or organization name"/></label><label>Organization Size<select required defaultValue=""><option value="" disabled>Select company size</option><option>1–50 employees</option><option>51–250 employees</option><option>251–1,000 employees</option><option>1,000+ employees</option></select></label><label className="full">Project Brief<textarea required rows={7} placeholder="Describe your objectives, challenges, and preferred timeline."/></label></div></div>}
      {step===3 && <div><h2>Point of Contact</h2><div className="context-fields"><label>Full Name<input required placeholder="Your full name"/></label><label>Corporate Email<input required type="email" placeholder="name@company.com"/></label><label>Phone Number<input required type="tel" placeholder="+1 555 000 0000"/></label><label>Preferred Region<select required defaultValue=""><option value="" disabled>Select region</option><option>Americas</option><option>Europe</option><option>Asia Pacific</option></select></label></div></div>}
      <div className="form-actions">{step>1&&<button className="service-button outline" type="button" onClick={()=>setStep(step-1)}>Back</button>}{step<3?<button className="service-button dark" disabled={step===1&&!selected.length} type="button" onClick={()=>setStep(step+1)}>Continue</button>:<button className="service-button primary" type="submit">Submit Request</button>}</div>
    </form>}</section><aside className="inquire-sidebar"><div className="process-card"><h2>Our Process</h2>{[['1','Strategic Review','Our sector leads analyze your requirements against current market benchmarks.'],['2','Consultation Call','A 30-minute discovery session with a dedicated BABCS advisor.'],['3','Engagement Model','Receive a transparent, milestone-driven proposal tailored to your scale.']].map(([n,title,copy])=><article key={n}><b>{n}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><div className="office-card"><img src={inquireOffices} alt="Global financial district headquarters"/><div className="office-caption"><span>Headquarters</span><strong>London, United Kingdom</strong></div><ul><li><b>New York</b><span>Wall Street District</span></li><li><b>Singapore</b><span>Marina Bay Financial</span></li><li><b>Zurich</b><span>Bahnhofstrasse Hub</span></li></ul></div></aside></div>
  </main><SiteFooter/></div>
}
