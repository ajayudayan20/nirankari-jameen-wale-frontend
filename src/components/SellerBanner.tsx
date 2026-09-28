import { ArrowRight, Plus } from "lucide-react";

type SellerBannerProps = { submitted: boolean; onSubmit: () => void };

export function SellerBanner({ submitted, onSubmit }: SellerBannerProps) {
  return (
    <section
      className="submit-banner flex flex-wrap items-center gap-5 rounded-xl border border-[#e4d8c5] bg-gradient-to-br from-[#efe5d5] to-[#f4eee3] p-6 sm:p-9"
    >
      <div className="banner-icon grid size-11 shrink-0 place-items-center rounded-full border border-[#e3d6c2] bg-[#f9f5ed] text-[var(--orange)]">
        <Plus size={23} />
      </div>
      <div className="min-w-0">
        <span className="section-kicker">HAVE A PROPERTY TO SELL?</span>
        <h2 className="mt-2 font-serif text-[23px] font-medium text-[var(--ink)]">
          Let's find it a good home.
        </h2>
      </div>
      <p className="max-w-xs text-[11px] leading-relaxed text-[#7e827a] sm:ml-auto">
        Submit your property and our team will help you prepare it for the right
        buyer.
      </p>
      <button
        className="flex items-center gap-3 rounded-md bg-[var(--green)] px-4 py-3 text-xs text-white transition hover:-translate-y-0.5 hover:bg-[#0d4b42]"
        onClick={onSubmit}
      >
        {submitted ? "Request received" : "Submit a property"}{" "}
        <ArrowRight size={17} />
      </button>
    </section>
  );
}
