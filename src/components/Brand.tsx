type BrandProps = { onClick?: () => void; className?: string };

export function Brand({ onClick, className = "" }: BrandProps) {
  return (
    <a
      className={`brand ${className}`}
      href="#home"
      aria-label="Nirankari Jameen Wale home"
      onClick={(event) => {
        event.preventDefault();
        onClick?.();
      }}
    >
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <path className="logo-roof" d="M7 19 20 8l13 11" />
          <path className="logo-home" d="M11 17v14h18V17" />
          <path className="logo-ground" d="M6 32h28" />
          <text x="20" y="28">
            NJW
          </text>
        </svg>
      </span>
      <span>
        Nirankari
        <br />
        Jameen Wale
      </span>
    </a>
  );
}
