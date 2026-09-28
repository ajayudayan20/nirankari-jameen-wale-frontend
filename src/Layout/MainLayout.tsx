import type { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import type { AuthMode } from "../components/types";

type MainLayoutProps = {
  children: ReactNode;
  favorites: number;
  submitted: boolean;
  isSignedIn: boolean;
  onAuth: (mode: AuthMode) => void;
};

export function MainLayout({
  children,
  favorites,
  submitted,
  isSignedIn,
  onAuth,
}: MainLayoutProps) {
  return (
    <div className="app-shell min-h-screen w-full bg-[var(--paper)]">
      <Header favorites={favorites} signedIn={isSignedIn} onAuth={onAuth} />
      {children}
      {submitted && (
        <div className="toast">
          Request received. Our property team will be in touch shortly.
        </div>
      )}
      <Footer />
    </div>
  );
}
