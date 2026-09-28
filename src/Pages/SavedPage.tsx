import { ArrowRight, Heart } from "lucide-react";
import { properties } from "../components/data";
import { PropertyGrid } from "../components/PropertyGrid";

type SavedPageProps = {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
};

export function SavedPage({ favorites, onToggleFavorite }: SavedPageProps) {
  const savedProperties = properties.filter((property) =>
    favorites.includes(property.id),
  );
  return (
    <main id="top" className="saved-page min-h-screen bg-[var(--paper)]">
      <section className="saved-heading bg-gradient-to-br from-[#eee8dc] to-[#e1ebe0] px-5 py-12 sm:px-[7%] sm:py-16 lg:px-[12%]">
        <span className="section-kicker">YOUR COLLECTION</span>
        <h1 className="mt-4 font-serif text-5xl font-medium leading-none tracking-[-2px] text-[var(--ink)] sm:text-6xl lg:text-[68px]">
          Places you want
          <br />
          <em>to remember.</em>
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
          Keep the properties that caught your eye close by while you explore.
        </p>
      </section>
      <section className="saved-content px-4 py-14 sm:px-[7%] lg:px-[12%]">
        <div className="section-heading mb-7 flex items-end justify-between gap-4">
          <div>
            <span className="section-kicker">SAVED PROPERTIES</span>
            <h2>
              {savedProperties.length
                ? `${savedProperties.length} places to revisit`
                : "Your shortlist is waiting"}
            </h2>
          </div>
          <Heart size={22} />
        </div>
        {savedProperties.length ? (
          <PropertyGrid
            properties={savedProperties}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        ) : (
          <div className="saved-empty w-full rounded-xl px-6 py-16 shadow-sm sm:px-10">
            <Heart size={26} />
            <h3 className="mt-3 text-2xl">Nothing saved yet</h3>
            <p className="max-w-md text-center">
              Tap the heart on any property to build your shortlist.
            </p>
            <a className="mt-2 inline-flex items-center gap-2" href="/discover">
              Discover properties <ArrowRight size={16} />
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
