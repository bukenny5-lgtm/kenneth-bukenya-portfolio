import { Route, Routes, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import { CaseStudyLayout } from '../components/projects/CaseStudyLayout'
import { HomePage } from '../pages/HomePage'
import { AboutPage, ContactPage, CredentialsPage, NotFoundPage, ProjectsPage, SkillsPage } from '../pages/GeneralPages'
export function AppRoutes() { return <Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/work" element={<ProjectsPage />} /><Route path="/skills" element={<SkillsPage />} /><Route path="/credentials" element={<CredentialsPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/projects/:slug" element={<ProjectRoute />} /><Route path="/work/:slug" element={<ProjectRoute />} /><Route path="*" element={<NotFoundPage />} /></Routes> }
function ProjectRoute() { const { slug } = useParams(); const project = slug ? getProject(slug) : undefined; return project ? <CaseStudyLayout project={project} /> : <NotFoundPage /> }
