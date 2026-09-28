import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { SellerBanner } from "../components/SellerBanner";

type HowItWorksPageProps = { submitted: boolean; onSubmitProperty: () => void };

export function HowItWorksPage({
  submitted,
  onSubmitProperty,
}: HowItWorksPageProps) {
  return (
    <main id="top" className="how-page min-h-screen bg-[var(--paper)]">
      <section className="how-hero bg-gradient-to-br from-[#e3f0e7] to-[#f3ede1] px-5 py-12 sm:px-[7%] sm:py-16 lg:px-[12%]">
        <span className="section-kicker">THE NJW APPROACH</span>
        <h1 className="mt-4 font-serif text-5xl font-medium leading-none tracking-[-2px] text-[var(--ink)] sm:text-6xl lg:text-[68px]">
          Property decisions
          <br />
          <em>without the noise.</em>
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
          Buying or selling land should feel considered, clear, and human. Here
          is how we keep it that way.
        </p>
      </section>
      <HowItWorksSection />
      <SellerBanner submitted={submitted} onSubmit={onSubmitProperty} />
      <section className="how-note mx-5 flex flex-wrap items-center gap-4 rounded-xl border border-[#d8e1d7] bg-[#e9f0e7] p-6 text-[var(--green)] sm:mx-[7%] lg:mx-[12%]">
        <ShieldCheck size={22} />
        <div className="flex-1">
          <h2 className="font-serif text-2xl font-medium text-[var(--ink)]">Trust is part of the product.</h2>
          <p className="mt-1 max-w-xl text-xs leading-relaxed text-[var(--muted)]">
            Seller contact details stay private, listings are reviewed by Admin,
            and every inquiry has a human team behind it.
          </p>
        </div>
        <a href="/discover">
          Explore properties <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}
