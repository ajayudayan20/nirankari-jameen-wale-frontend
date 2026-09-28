import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AboutSection } from "../components/AboutSection";
import { properties } from "../components/data";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { PropertyGrid } from "../components/PropertyGrid";
import { SearchBar } from "../components/SearchBar";
import { SellerBanner } from "../components/SellerBanner";

type HomePageProps = {
  search: string;
  favorites: string[];
  submitted: boolean;
  onSearch: (value: string) => void;
  onDiscover: () => void;
  onToggleFavorite: (id: string) => void;
  onSubmitProperty: () => void;
};

export function HomePage({
  search,
  favorites,
  submitted,
  onSearch,
  onDiscover,
  onToggleFavorite,
  onSubmitProperty,
}: HomePageProps) {
  return (
    <main id="top" className="home-page min-h-screen bg-[var(--paper)]">
      <section className="home-hero relative grid min-h-[570px] items-center gap-8 overflow-hidden px-5 py-14 sm:px-[7%] lg:grid-cols-2 lg:gap-[7%] lg:px-[12%] lg:py-20">
        <div className="home-hero-copy relative z-10 max-w-2xl">
          <span className="eyebrow">
            <span></span> NIRANKARI JAMEEN WALE
          </span>
          <h1 className="mt-5 max-w-3xl font-serif text-[47px] font-medium leading-[.94] tracking-[-2px] text-[var(--ink)] sm:text-6xl lg:text-[82px] lg:tracking-[-3.5px]">
            Property decisions,
            <br />
            <em>made with trust.</em>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#5e746e] sm:text-[15px]">
            Discover verified land and thoughtfully selected properties across
            India, with a team that stays with you at every step.
          </p>
          <div className="home-actions mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <button className="primary-action inline-flex items-center gap-2 rounded-md bg-[var(--green)] px-4 py-3 text-xs text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0d4b42]" onClick={onDiscover}>
              Explore properties <ArrowRight size={17} />
            </button>
            <a className="inline-flex items-center gap-2 text-xs text-[var(--green)]" href="#how-it-works">
              How it works <ArrowRight size={15} />
            </a>
          </div>
        </div>
        <div className="home-hero-art relative z-10 min-h-[260px] sm:min-h-[340px]">
          <div className="art-card art-card-main">
            <img
              src={properties[0].image}
              alt="Open land near the Aravali foothills"
            />
            <span>
              <MapPin size={13} /> Sohna, Gurugram
            </span>
          </div>
          <div className="art-card art-card-small">
            <ShieldCheck size={16} />
            <strong>{properties.length}</strong>
            <small>verified listings</small>
          </div>
          <span className="art-stamp">
            NJW
            <br />
            <small>EST. 2024</small>
          </span>
        </div>
      </section>
      <section className="home-search">
        <SearchBar value={search} onChange={onSearch} onSubmit={onDiscover} />
      </section>
      <section className="trust-strip">
        <div>
          <ShieldCheck size={18} />
          <span>
            <strong>Admin reviewed</strong> Every listing is checked before it
            goes live.
          </span>
        </div>
        <div>
          <CheckCircle2 size={18} />
          <span>
            <strong>Private by design</strong> Seller details stay hidden from
            buyers.
          </span>
        </div>
        <div>
          <Sparkles size={18} />
          <span>
            <strong>Human guidance</strong> We help you move from search to
            inquiry.
          </span>
        </div>
      </section>

      <section className="home-featured">
        <div className="section-heading">
          <div>
            <span className="section-kicker">A QUIETLY BETTER WAY</span>
            <h2>Places worth a closer look</h2>
          </div>
          <button className="text-link" onClick={onDiscover}>
            View all <ArrowRight size={16} />
          </button>
        </div>
        <PropertyGrid
          properties={properties.slice(0, 3)}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      </section>
      <AboutSection onDiscover={onDiscover} />
      <HowItWorksSection />
      <SellerBanner submitted={submitted} onSubmit={onSubmitProperty} />
    </main>
  );
}
