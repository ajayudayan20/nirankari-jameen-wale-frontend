import type { Property } from './types'
import { PropertyCard } from './PropertyCard'

type PropertyGridProps = { properties: Property[]; favorites: string[]; onToggleFavorite: (id: string) => void }

export function PropertyGrid({ properties, favorites, onToggleFavorite }: PropertyGridProps) {
  if (!properties.length) return <div className="empty-state grid min-h-72 place-content-center rounded-[10px] border border-dashed border-[var(--line)] bg-white p-8 text-center"><h3 className="font-serif text-2xl font-medium text-[var(--ink)]">No properties found</h3><p className="mt-2 text-xs text-[var(--muted)]">Try a different city, area, or property type.</p></div>
  return <div className="property-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{properties.map((property) => <PropertyCard key={property.id} property={property} favorite={favorites.includes(property.id)} onToggleFavorite={onToggleFavorite} />)}</div>
}
