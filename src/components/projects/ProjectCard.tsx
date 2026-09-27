import { Link } from 'react-router-dom'
import type { Project } from '../../types/project'

export function ProjectCard({ project }: { project: Project }) {
  return <article className="card"><Link to={`/projects/${project.slug}`}><div className="cover" style={{ backgroundImage: `url(${project.cover})` }}><span>{project.status}</span></div><div className="card-body"><div className="eyebrow">{project.category}</div><h3>{project.name}</h3><p>{project.summary}</p><div className="tags">{project.technologies.slice(0, 5).map(item => <small key={item}>{item}</small>)}</div><span className="text-link">Read case study <span aria-hidden="true">→</span></span></div></Link>{project.links?.filter(link => link.verified).map(link => <a className="live-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">→</span></a>)}</article>
}
