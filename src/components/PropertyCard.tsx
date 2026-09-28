import { ArrowRight, Heart, MapPin, Sparkles } from 'lucide-react'
import type { Property } from './types'

type PropertyCardProps = { property: Property; favorite: boolean; onToggleFavorite: (id: string) => void }

export function PropertyCard({ property, favorite, onToggleFavorite }: PropertyCardProps) {
  return (
    <article className="property-card overflow-hidden rounded-[10px] border border-[#e0e7e2] bg-white shadow-[0_7px_19px_rgba(24,57,66,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(24,57,66,0.12)]">
      <div className="property-image relative overflow-hidden"><img className="block h-full w-full object-cover" src={property.image} alt={property.title} /><span className="property-tag inline-flex items-center gap-1 rounded-md bg-[rgba(21,93,82,0.9)] px-2 py-1 text-[9px] text-white"><Sparkles size={12} /> {property.tag}</span><button className={`heart-button ${favorite ? 'liked' : ''} absolute right-3 top-3 grid size-8 place-items-center rounded-full text-white`} onClick={() => onToggleFavorite(property.id)} aria-label={`${favorite ? 'Remove' : 'Save'} ${property.title}`}><Heart size={18} fill={favorite ? 'currentColor' : 'none'} /></button></div>
      <div className="property-info p-5"><div className="property-type flex items-center gap-1 text-[9px] font-bold uppercase tracking-[1px] text-[var(--orange)]">{property.type}<span>·</span>{property.id}</div><h3 className="mt-2 min-h-10 font-serif text-lg font-medium leading-tight text-[var(--ink)]">{property.title}</h3><p className="location mt-2 flex items-center gap-1 text-[11px] text-[var(--muted)]"><MapPin size={14} />{property.location}</p><div className="property-footer mt-4 flex items-center justify-between border-t border-[#edf0eb] pt-3"><div><strong className="block text-base text-[var(--ink)]">{property.price}</strong><small className="mt-0.5 block text-[10px] text-[#939b94]">{property.area}</small></div><button className="arrow-button grid size-8 place-items-center rounded-lg border border-[#d7ded5] text-[var(--green)]" aria-label={`View ${property.title}`}><ArrowRight size={17} /></button></div></div>
    </article>
  )
}
