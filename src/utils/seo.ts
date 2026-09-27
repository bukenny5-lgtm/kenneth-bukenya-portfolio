const configuredOrigin = import.meta.env.VITE_SITE_URL || (typeof window === 'undefined' ? '' : window.location.origin)
const siteOrigin = configuredOrigin.replace(/\/+$/, '')

export function setPageMetadata(title: string, description: string, path: string, image: string) {
  document.title = title
  const canonical = `${siteOrigin}${path}`
  const absoluteImage = image.startsWith('http') ? image : `${siteOrigin}${image}`
  const values: Record<string, string> = { description, 'og:title': title, 'og:description': description, 'og:image': absoluteImage, 'og:type': 'website', 'og:url': canonical }
  Object.entries(values).forEach(([key, content]) => {
    const selector = key.startsWith('og:') ? `meta[property="${key}"]` : `meta[name="${key}"]`
    let node = document.querySelector<HTMLMetaElement>(selector)
    if (!node) { node = document.createElement('meta'); node.setAttribute(key.startsWith('og:') ? 'property' : 'name', key); document.head.appendChild(node) }
    node.content = content
  })
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
  link.href = canonical
}

export function setProjectStructuredData(name: string, description: string, image: string, url: string) {
  const id = 'project-structured-data'
  document.getElementById(id)?.remove()
  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'CreativeWork', name, description, image: `${siteOrigin}${image}`, url: `${siteOrigin}${url}`, author: { '@type': 'Person', name: 'Kenneth Bukenya' } })
  document.head.appendChild(script)
}
