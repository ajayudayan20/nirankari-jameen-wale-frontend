import { useMemo, useState } from "react";
import {
  ChevronDown,
  ListFilter,
  MapPin,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { properties } from "../components/data";
import { PropertyGrid } from "../components/PropertyGrid";
import { SearchBar } from "../components/SearchBar";

type DiscoveryPageProps = {
  search: string;
  favorites: string[];
  onSearch: (value: string) => void;
  onToggleFavorite: (id: string) => void;
};

const filters = [
  "All properties",
  "Residential Plot",
  "Agricultural Land",
  "Commercial Land",
];
const priceInLakh = (price: string) => {
  const value = Number.parseFloat(price.replace(/[^0-9.]/g, ""));
  return price.includes("Cr") ? value * 100 : value;
};

export function DiscoveryPage({
  search,
  favorites,
  onSearch,
  onToggleFavorite,
}: DiscoveryPageProps) {
  const [activeFilter, setActiveFilter] = useState("All properties");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const toggleFeature = (feature: string) =>
    setFeatures((current) =>
      current.includes(feature)
        ? current.filter((item) => item !== feature)
        : [...current, feature],
    );
  const resetFilters = () => {
    setActiveFilter("All properties");
    setLocation("");
    setMinPrice("");
    setMaxPrice("");
    setFeatures([]);
  };
  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        const query = search.toLowerCase().trim();
        const place = location.toLowerCase().trim();
        const propertyPrice = priceInLakh(property.price);
        const minimum = Number.parseFloat(minPrice) || 0;
        const maximum = Number.parseFloat(maxPrice) || Number.POSITIVE_INFINITY;
        return (
          (!query ||
            `${property.title} ${property.location} ${property.type}`
              .toLowerCase()
              .includes(query)) &&
          (!place || property.location.toLowerCase().includes(place)) &&
          (activeFilter === "All properties" ||
            property.type === activeFilter) &&
          propertyPrice >= minimum &&
          propertyPrice <= maximum
        );
      }),
    [activeFilter, location, maxPrice, minPrice, search],
  );
  return (
    <main id="top" className="discovery-page min-h-screen bg-[var(--paper)]">
      <section className="discovery-toolbar flex flex-col justify-between gap-6 bg-gradient-to-br from-[#e3f0e7] to-[#f3ede1] px-5 py-9 sm:px-[7%] lg:flex-row lg:items-center lg:px-[12%] lg:py-16">
        <div>
          <span className="section-kicker">THE NJW COLLECTION</span>
          <h1 className="mt-2 font-serif text-3xl font-medium tracking-[-1px] text-[var(--ink)] sm:text-4xl">
            Explore verified properties
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Search, compare, and save places across India.
          </p>
        </div>
        <SearchBar value={search} onChange={onSearch} />
      </section>
      <section className="discovery-workspace grid gap-7 px-4 py-8 sm:px-[7%] lg:grid-cols-[235px_minmax(0,1fr)] lg:gap-10 lg:px-[12%] lg:py-14">
        <aside className="filter-sidebar h-fit rounded-[10px] border border-[#dce7e0] bg-white/85 p-5 shadow-sm lg:sticky lg:top-24">
          <div className="filter-sidebar-heading flex items-center justify-between border-b border-[var(--line)] pb-5">
            <div className="flex items-center gap-2 text-[var(--green)]">
              <SlidersHorizontal size={17} />
              <h2 className="text-lg font-semibold text-[var(--ink)]">
                Filters
              </h2>
            </div>
            <button
              className="flex items-center gap-1 border-0 bg-transparent text-[10px] text-[var(--orange)]"
              onClick={resetFilters}
            >
              <RotateCcw size={13} /> Reset
            </button>
          </div>
          <div className="sidebar-group py-5">
            <label className="mb-2 block text-[11px] font-bold text-[var(--ink)]">
              Property type
            </label>
            <div className="sidebar-options grid gap-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`flex justify-between rounded px-2 py-2 text-left text-[11px] ${activeFilter === filter ? "selected bg-[#e4f0eb] font-semibold text-[var(--green)]" : "text-[var(--muted)]"}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                  <span>
                    {filter === "All properties"
                      ? properties.length
                      : properties.filter(
                          (property) => property.type === filter,
                        ).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="sidebar-group border-t border-[#e7ebe4] py-5">
            <label className="mb-2 block text-[11px] font-bold text-[var(--ink)]">
              Location
            </label>
            <div className="sidebar-input flex h-9 items-center gap-2 border border-[var(--line)] bg-white px-2 text-[var(--muted)]">
              <MapPin size={15} />
              <input
                className="w-full bg-transparent text-[11px] outline-none"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="City or state"
              />
            </div>
          </div>
          <div className="sidebar-group border-t border-[#e7ebe4] py-5">
            <label className="mb-2 block text-[11px] font-bold text-[var(--ink)]">
              Price range
            </label>
            <div className="price-inputs flex items-center gap-1">
              <input
                className="h-9 w-full border border-[var(--line)] px-2 text-[11px] outline-none"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
                placeholder="Min price"
              />
              <span className="text-[10px] text-[#a0aaa1]">to</span>
              <input
                className="h-9 w-full border border-[var(--line)] px-2 text-[11px] outline-none"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
                placeholder="Max price"
              />
            </div>
          </div>
          <div className="sidebar-group border-t border-[#e7ebe4] py-5">
            <label className="mb-2 block text-[11px] font-bold text-[var(--ink)]">
              Must have
            </label>
            <div className="feature-options grid gap-2">
              {[
                "Road access",
                "Water connection",
                "Electricity",
                "Boundary wall",
                "Parking",
              ].map((feature) => (
                <label
                  key={feature}
                  className="feature-option flex items-center gap-2 text-[11px] text-[var(--muted)]"
                >
                  <input
                    className="accent-[var(--orange)]"
                    type="checkbox"
                    checked={features.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>
          <div className="sidebar-approval flex gap-2 pt-5 text-[10px] leading-relaxed text-[var(--green)]">
            <ShieldCheck size={16} />
            <span>
              <strong className="block text-[var(--ink)]">Verified only</strong>{" "}
              All properties are reviewed before publication.
            </span>
          </div>
        </aside>
        <section className="discovery-results min-w-0">
          <div className="section-heading mb-7 flex items-end justify-between gap-4">
            <div>
              <span className="section-kicker">JUST IN</span>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[var(--ink)]">
                Properties with potential
              </h2>
            </div>
            <div className="view-actions flex items-center">
              <button className="sort-button hidden sm:flex">
                Most relevant <ChevronDown size={15} />
              </button>
              <button
                className="view-button active grid size-8 place-items-center border-0 bg-[#f1e7dc] text-[var(--orange)]"
                aria-label="Grid view"
              >
                <ListFilter size={17} />
              </button>
            </div>
          </div>
          <div className="results-meta mb-5 flex items-center justify-between text-[11px] text-[var(--muted)]">
            <span>
              <strong className="text-[var(--ink)]">
                {filteredProperties.length}
              </strong>{" "}
              properties found
            </span>
            <span className="approval-note flex items-center gap-1 text-[var(--green)]">
              <ShieldCheck size={15} /> Approved listings only
            </span>
          </div>
          <PropertyGrid
            properties={filteredProperties}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
          <div className="browse-more mt-9 flex flex-col items-center gap-3 text-center">
            <button
              className="rounded-md bg-[var(--green)] px-4 py-3 text-xs text-white"
              onClick={() => onSearch("")}
            >
              Clear search <ChevronDown size={17} />
            </button>
            <span className="text-[11px] text-[#9da49d]">
              Showing {filteredProperties.length} of {properties.length}{" "}
              verified listings
            </span>
          </div>
        </section>
      </section>
    </main>
  );
}
