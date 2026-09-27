import { useEffect, useRef, useState } from 'react'
import type { Diagram, ProjectImage } from '../../types/project'

type GalleryItem = (ProjectImage | Diagram) & { kind?: ProjectImage['kind'] }

export function MediaGallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null)
  const [zoom, setZoom] = useState(1)
  const lastFocused = useRef<HTMLElement | null>(null)
  const dialog = useRef<HTMLDivElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const close = () => { setActive(null); setZoom(1) }
  useEffect(() => {
    if (active === null) return
    lastFocused.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') setActive(value => value === null ? null : (value + 1) % items.length)
      if (event.key === 'ArrowLeft') setActive(value => value === null ? null : (value - 1 + items.length) % items.length)
      if (event.key === '+' || event.key === '=') setZoom(value => Math.min(2, +(value + .25).toFixed(2)))
      if (event.key === '-') setZoom(value => Math.max(1, +(value - .25).toFixed(2)))
      if (event.key === 'Tab') { const focusable = dialog.current?.querySelectorAll<HTMLElement>('button, a'); if (!focusable?.length) return; const current = document.activeElement as HTMLElement; const index = Array.from(focusable).indexOf(current); const next = event.shiftKey ? (index - 1 + focusable.length) % focusable.length : (index + 1) % focusable.length; event.preventDefault(); focusable[next].focus() }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; lastFocused.current?.focus() }
  }, [active, items.length])
  if (!items.length) return null
  const item = active === null ? null : items[active]
  return <div className="media-gallery" aria-label="Project media"><div className="media-grid">{items.map((entry, index) => <button className="media-thumb" key={entry.src} onClick={() => { setActive(index); setZoom(1) }} aria-label={`Open ${entry.caption}`}><img src={entry.src} alt={entry.alt} loading="lazy" width="640" height="400" /><span>{entry.caption}</span></button>)}</div>{item && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded project media" onMouseDown={event => { if (event.target === event.currentTarget) close() }}><div ref={dialog} className="lightbox-panel"><div className="lightbox-toolbar"><button ref={closeButton} onClick={close} aria-label="Close media viewer">×</button><button onClick={() => setZoom(1)} aria-label="Fit media to screen">Fit</button><button onClick={() => setZoom(1)} aria-label="View media at 100 percent">100%</button><button onClick={() => setZoom(1.5)} aria-label="View media at 150 percent">150%</button><button onClick={() => setZoom(2)} aria-label="View media at 200 percent">200%</button><button onClick={() => setZoom(value => Math.min(2, +(value + .25).toFixed(2)))} aria-label="Zoom in">+</button><button onClick={() => setZoom(value => Math.max(1, +(value - .25).toFixed(2)))} aria-label="Zoom out">−</button><button onClick={() => setZoom(1)} aria-label="Reset zoom">Reset</button>{item.src.endsWith('.svg') && <a href={item.src} target="_blank" rel="noreferrer" aria-label="Open original SVG in a new tab">Original SVG</a>}<a href={item.src} download aria-label="Download this diagram or image">Download</a></div><div className="lightbox-stage"><button className="lightbox-prev" onClick={() => { setActive((active! - 1 + items.length) % items.length); setZoom(1) }} aria-label="Previous media">←</button><div className="lightbox-scroll"><img src={item.src} alt={item.alt} style={{ transform: `scale(${zoom})` }} /></div><button className="lightbox-next" onClick={() => { setActive((active! + 1) % items.length); setZoom(1) }} aria-label="Next media">→</button></div><p>{item.caption}</p></div></div>}</div>
}
