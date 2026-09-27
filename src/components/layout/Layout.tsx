import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, type ReactNode } from 'react'

const CV_PATH = '/downloads/Alinaitwe_Kenneth_Bukenya_Updated_CV.pdf'
const Arrow = () => <span aria-hidden="true">→</span>

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => { const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }; window.addEventListener('keydown', onKeyDown); return () => window.removeEventListener('keydown', onKeyDown) }, [])
  const navItems = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/skills', 'Skills'], ['/credentials', 'Credentials'], ['/contact', 'Contact']]
  const active = (href: string) => href === '/' ? location.pathname === '/' : href === '/projects' ? location.pathname.startsWith('/projects') || location.pathname.startsWith('/work') : location.pathname === href
  return <><header><div className="container nav"><Link className="brand" to="/"><b>KB</b>Kenneth Bukenya</Link><button className="menu" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation">{open ? '×' : '☰'}</button><nav id="primary-navigation" className={open ? 'open' : ''}>{navItems.map(([href, label]) => <Link className={active(href) ? 'active' : ''} aria-current={active(href) ? 'page' : undefined} key={href} to={href}>{label}</Link>)}<a className="nav-cta" href={CV_PATH} download="Kenneth_Bukenya_CV.pdf">Download CV <Arrow /></a><Link className="nav-cta" to="/contact">Discuss a project <Arrow /></Link></nav></div></header><main>{children}</main><Footer /></>
}

function Footer() { return <footer><div className="container foot"><div><div className="eyebrow light">Hama Techservices</div><h2>Technology that makes the work clearer.</h2><p>Practical systems, thoughtful engineering and business-aware delivery from Kampala, Uganda.</p></div><div className="foot-links"><Link to="/about">About Kenneth</Link><Link to="/projects">Selected work</Link><Link to="/credentials">Credentials</Link><Link to="/contact">Contact Kenneth</Link><a href="mailto:bukenny5@gmail.com">Email Kenneth</a><a href="https://www.linkedin.com/in/kenneth-bukenya-774502214" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/bukenny5-lgtm" target="_blank" rel="noreferrer">GitHub</a></div></div><div className="container fine">© {new Date().getFullYear()} Kenneth Bukenya · Full-Stack Developer &amp; Business Systems Engineer</div></footer> }
