import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, type ReactNode } from 'react'

const CV_PATH = '/downloads/Alinaitwe_Kenneth_Bukenya_Updated_CV.pdf'
const HAMA_LOGO = '/branding/hama-techservices-logo-dark-background.png'
const Arrow = () => <span aria-hidden="true">→</span>
const navItems = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/skills', 'Skills'], ['/credentials', 'Credentials'], ['/contact', 'Contact']]

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false); const location = useLocation()
  const isActive = (href: string) => href === '/' ? location.pathname === '/' : href === '/projects' ? location.pathname.startsWith('/projects') || location.pathname.startsWith('/work') : location.pathname === href
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => { const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }; window.addEventListener('keydown', onKeyDown); return () => window.removeEventListener('keydown', onKeyDown) }, [])
  return <><header><div className="container nav"><Link className="brand" to="/"><b>KB</b>Kenneth Bukenya</Link><button className="menu" onClick={() => setOpen(value => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation">{open ? '×' : '☰'}</button><nav id="primary-navigation" className={open ? 'open' : ''}>{navItems.map(([href, label]) => <Link className={isActive(href) ? 'active' : ''} aria-current={isActive(href) ? 'page' : undefined} key={href} to={href}>{label}</Link>)}<a className="nav-cta" href={CV_PATH} download="Kenneth_Bukenya_CV.pdf">Download CV <Arrow /></a><Link className="nav-cta" to="/contact">Discuss a project <Arrow /></Link></nav></div></header><main>{children}</main><Footer isActive={isActive} /></>
}

function Footer({ isActive }: { isActive: (href: string) => boolean }) { return <footer><div className="container foot"><div className="footer-brand"><img src={HAMA_LOGO} alt="Hama Techservices" width="520" height="180" /><h2>Technology that makes the work clearer.</h2><p>Practical systems, thoughtful engineering and business-aware delivery from Kampala, Uganda.</p><Link className="footer-cta" to="/skills">Explore technology services <Arrow /></Link></div><div className="footer-columns"><nav className="foot-links footer-nav" aria-label="Footer navigation">{navItems.slice(1).map(([href, label]) => <Link className={isActive(href) ? 'active' : ''} aria-current={isActive(href) ? 'page' : undefined} key={href} to={href}>{label}</Link>)}</nav><nav className="foot-links footer-external" aria-label="Professional links"><a href="mailto:bukenny5@gmail.com?subject=Portfolio%20enquiry%20for%20Kenneth%20Bukenya">Email Kenneth</a><a href="https://www.linkedin.com/in/kenneth-bukenya-774502214" target="_blank" rel="noopener noreferrer" aria-label="Open Kenneth Bukenya on LinkedIn in a new tab">LinkedIn ↗</a><a href="https://github.com/bukenny5-lgtm" target="_blank" rel="noopener noreferrer" aria-label="Open Kenneth Bukenya’s GitHub in a new tab">GitHub ↗</a></nav></div></div><div className="container fine">© {new Date().getFullYear()} Kenneth Bukenya · Full-Stack Developer &amp; Business Systems Engineer</div></footer> }
