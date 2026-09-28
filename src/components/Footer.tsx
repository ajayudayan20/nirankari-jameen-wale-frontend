export function Footer() {
  return (
    <footer className="flex flex-col items-start gap-2 border-t border-[var(--line)] bg-[#edf2ed] px-4 py-5 text-[10px] leading-relaxed text-[#8b9891] sm:flex-row sm:items-center sm:justify-between sm:px-[7%]">
      <span>© 2024 Nirankari Jameen Wale</span>
      <span className="hidden sm:inline">
        Built around trust, not transactions.
      </span>
      <span>
        Help <span className="px-2 text-[var(--orange)]">·</span> Privacy
      </span>
    </footer>
  );
}
