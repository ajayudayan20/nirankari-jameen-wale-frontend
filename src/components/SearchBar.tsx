import { ArrowRight, ChevronDown, MapPin, Search, X } from 'lucide-react'

type SearchBarProps = { value: string; onChange: (value: string) => void; onSubmit?: () => void }

export function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  return (
    <div className="search-panel flex items-center gap-2 rounded-[10px] bg-white p-2 shadow-[0_19px_42px_rgba(24,57,66,0.13)]">
      <div className="search-main flex min-w-0 flex-1 items-center gap-3"><Search size={20} /><label className="grid min-w-0 flex-1 gap-0.5 text-left"><span className="text-[9px] font-bold uppercase tracking-[.7px] text-[#9aa69d]">Search properties</span><input className="w-full min-w-0 border-0 bg-transparent text-[13px] text-[var(--ink)] outline-none" value={value} onChange={(event) => onChange(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && onSubmit?.()} placeholder="City, area, or property type" aria-label="Search properties" /></label>{value && <button className="clear-search grid size-7 shrink-0 place-items-center rounded-full" onClick={() => onChange('')} aria-label="Clear search"><X size={15} /></button>}</div>
      <button className="search-location flex min-w-0 items-center gap-2 border-l border-[var(--line)] bg-transparent px-5 text-left text-[var(--muted)]"><MapPin size={17} /><label className="grid min-w-0 gap-0.5"><span className="text-[9px] font-bold uppercase tracking-[.7px] text-[#9aa69d]">Location</span><strong className="max-w-44 truncate text-xs font-semibold text-[var(--ink)]">Anywhere in India</strong></label><ChevronDown size={15} /></button>
      <button className="search-button flex h-[52px] min-w-[58px] items-center justify-center gap-2 rounded-[7px] border-0 bg-[var(--green)] px-4 text-[11px] font-bold text-white" onClick={onSubmit} aria-label="Search"><span className="hidden sm:inline">Search</span><ArrowRight size={19} /></button>
    </div>
  )
}
