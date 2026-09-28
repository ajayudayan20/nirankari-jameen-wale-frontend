import { useState } from "react";
import { ArrowRight, Bell, ChevronDown, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Brand } from "./Brand";
import type { AuthMode } from "./types";

type HeaderProps = {
  favorites: number;
  signedIn: boolean;
  onAuth: (mode: AuthMode) => void;
};

export function Header({ favorites, signedIn, onAuth }: HeaderProps) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  return (
    <header
      className={`topbar sticky top-0 z-50 flex h-[76px] items-center justify-between border-b border-[#e2e8e4] bg-white/90 px-4 shadow-[0_4px_18px_rgba(24,57,66,0.08)] backdrop-blur-md sm:px-[7%] ${mobileOpen ? "mobile-open" : ""}`}
    >
      <Brand onClick={() => navigate("/")} />
      <nav
        className="main-nav absolute left-1/2 flex -translate-x-1/2 gap-1 rounded-lg border border-[#e4eae6] bg-[#f8faf8] p-1 max-[820px]:hidden"
        aria-label="Primary navigation"
      >
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/saved">
          Saved <span className="nav-count">{favorites}</span>
        </NavLink>
      </nav>
      <div className="top-actions flex items-center gap-2">
        {signedIn ? (
          <>
            <button
              className="icon-button notification"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <i></i>
            </button>
            <button className="profile-button">
              <span className="avatar">AM</span>
              <span className="profile-name">Arjun Mehta</span>
              <ChevronDown size={15} />
            </button>
          </>
        ) : (
          <>
            <button className="login-link" onClick={() => onAuth("login")}>
              Log in
            </button>
            <button className="signup-button" onClick={() => onAuth("signup")}>
              Create account <ArrowRight size={15} />
            </button>
          </>
        )}
        <button
          className="menu-button hidden items-center justify-center border-0 bg-transparent max-[820px]:flex"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <NavLink to="/" end onClick={closeMobile}>
            Home
          </NavLink>
          <NavLink to="/discover" onClick={closeMobile}>
            Discover
          </NavLink>
          <NavLink to="/saved" onClick={closeMobile}>
            Saved <span className="nav-count">{favorites}</span>
          </NavLink>
          {!signedIn && (
            <>
              <button
                onClick={() => {
                  closeMobile();
                  onAuth("login");
                }}
              >
                Log in
              </button>
              <button
                className="mobile-signup"
                onClick={() => {
                  closeMobile();
                  onAuth("signup");
                }}
              >
                Create account <ArrowRight size={15} />
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
