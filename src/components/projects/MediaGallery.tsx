import { useEffect, useRef, useState } from 'react'
import type { Diagram, ProjectImage } from '../../types/project'

type GalleryItem = (ProjectImage | Diagram) & { kind?: ProjectImage['kind'] }

export function MediaGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null)
  const lastFocused = useRef<HTMLElement | null>(null)
  const dialog = useRef<HTMLDivElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (active === null) return
    lastFocused.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive(value => value === null ? null : (value + 1) % items.length)
      if (event.key === 'ArrowLeft') setActive(value => value === null ? null : (value - 1 + items.length) % items.length)
      if (event.key === 'Tab') {
        const focusable = dialog.current?.querySelectorAll<HTMLElement>('button')
        if (!focusable?.length) return
        const current = document.activeElement as HTMLElement
        const index = Array.from(focusable).indexOf(current)
        const next = event.shiftKey ? (index - 1 + focusable.length) % focusable.length : (index + 1) % focusable.length
        event.preventDefault(); focusable[next].focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; lastFocused.current?.focus() }
  }, [active, items.length])
  if (!items.length) return null
  return <div className="media-gallery" aria-label="Project media"><div className="media-grid">{items.map((item, index) => <button className="media-thumb" key={item.src} onClick={() => setActive(index)} aria-label={`Open ${item.caption}`}><img src={item.src} alt={item.alt} loading="lazy" width="640" height="400" /><span>{item.caption}</span></button>)}</div>{active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded project media" onMouseDown={event => { if (event.target === event.currentTarget) setActive(null) }}><div ref={dialog} className="lightbox-panel"><button ref={closeButton} className="lightbox-close" onClick={() => setActive(null)} aria-label="Close media viewer">×</button><button className="lightbox-prev" onClick={() => setActive((active - 1 + items.length) % items.length)} aria-label="Previous media">←</button><img src={items[active].src} alt={items[active].alt} /><button className="lightbox-next" onClick={() => setActive((active + 1) % items.length)} aria-label="Next media">→</button><p>{items[active].caption}</p></div></div>}</div>
}
