export type ProjectStatus = string
export type ProjectCategory = string
export type TechnologyTag = string

export interface ProjectSection {
  title: string
  paragraphs?: string[]
  items?: string[]
  subsections?: Array<{ title: string; paragraphs?: string[]; items?: string[] }>
}

export interface Feature { title: string; description: string }
export interface Responsibility { title: string; description: string }
export interface ChallengeSolution { challenge: string; response: string }

export interface ProjectImage {
  src: string
  alt: string
  caption: string
  kind?: 'screenshot' | 'chart' | 'cover'
}

export interface Diagram {
  src: string
  alt: string
  caption: string
}

export interface SupportingDocument {
  label: string
  href: string
  type: 'PDF' | 'download' | 'external'
  note?: string
}

export interface ExternalLink { label: string; href: string; verified: boolean }
export interface ProjectLimitation { title: string; description: string }
export interface EvaluationMetric { label: string; value: string; scope: string }

export interface Project {
  slug: string
  name: string
  category: ProjectCategory
  status: ProjectStatus
  summary: string
  role?: string
  mediaHeading?: string
  cover: string
  technologies: TechnologyTag[]
  sections: ProjectSection[]
  features?: Feature[]
  responsibilities?: Responsibility[]
  challengeSolutions?: ChallengeSolution[]
  images?: ProjectImage[]
  diagrams?: Diagram[]
  supportingDocuments?: SupportingDocument[]
  links?: ExternalLink[]
  limitations?: ProjectLimitation[]
  evaluationMetrics?: EvaluationMetric[]
  privateRepository?: boolean
}
