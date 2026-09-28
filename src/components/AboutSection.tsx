import { ArrowRight, CheckCircle2, Compass, ShieldCheck } from "lucide-react";

type AboutSectionProps = { onDiscover: () => void };

export function AboutSection({ onDiscover }: AboutSectionProps) {
  return (
    <section
      className="about-section grid gap-8 rounded-[14px] p-8 sm:grid-cols-[145px_minmax(0,1fr)] sm:p-12 lg:grid-cols-[170px_minmax(0,1.25fr)_minmax(240px,.8fr)] lg:gap-12 lg:px-[12%]"
      id="about-us"
    >
      <div
        className="about-emblem grid size-[105px] place-content-center rounded-full text-center text-[var(--orange)] outline outline-1 outline-offset-8 outline-[rgba(199,101,67,0.16)] sm:size-[125px] lg:size-[145px]"
        aria-hidden="true"
      >
        <span className="font-serif text-3xl">NJW</span>
        <small className="mt-1 text-[7px] font-bold tracking-[1.2px] text-[var(--green)]">
          TRUSTED PROPERTY
        </small>
      </div>
      <div className="about-copy">
        <span className="section-kicker">ABOUT NIRANKARI JAMEEN WALE</span>
        <h2 className="mt-2 max-w-xl font-serif text-[27px] font-medium leading-tight text-[var(--ink)] sm:text-[32px]">
          A more thoughtful way to find your place.
        </h2>
        <p className="mt-3 max-w-xl text-[13px] leading-7 text-[var(--muted)]">
          We believe property decisions deserve more than listings and hurried
          conversations. Nirankari Jameen Wale brings verified land and homes
          together with clear information, private communication, and a team
          that keeps the human part in view.
        </p>
        <button
          className="text-link mt-4 inline-flex items-center gap-2"
          onClick={onDiscover}
        >
          Explore our properties <ArrowRight size={16} />
        </button>
      </div>
      <div className="about-points grid gap-4 border-t border-[#d8cfc0] pt-5 sm:col-start-2 lg:col-start-3 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
        <div className="flex items-start gap-2 text-[var(--orange)]">
          <ShieldCheck size={19} />
          <span className="grid gap-1 text-[11px] leading-snug text-[var(--muted)]">
            <strong className="text-xs text-[var(--ink)]">
              Verified before visible
            </strong>
            Every listing is reviewed by our team.
          </span>
        </div>
        <div className="flex items-start gap-2 text-[var(--orange)]">
          <Compass size={19} />
          <span className="grid gap-1 text-[11px] leading-snug text-[var(--muted)]">
            <strong className="text-xs text-[var(--ink)]">
              Rooted in India
            </strong>
            Local knowledge across growing cities and quiet corners.
          </span>
        </div>
        <div className="flex items-start gap-2 text-[var(--orange)]">
          <CheckCircle2 size={19} />
          <span className="grid gap-1 text-[11px] leading-snug text-[var(--muted)]">
            <strong className="text-xs text-[var(--ink)]">
              Clear at every step
            </strong>
            Simple inquiries, private details, and human help.
          </span>
        </div>
      </div>
    </section>
  );
}
