import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { MainLayout } from "./Layout/MainLayout";
import { AuthPage } from "./Pages/AuthPage";
import { DiscoveryPage } from "./Pages/DiscoveryPage";
import { HowItWorksPage } from "./Pages/HowItWorksPage";
import { HomePage } from "./Pages/HomePage";
import { SavedPage } from "./Pages/SavedPage";
import type { AuthMode } from "./components/types";

function AppRoutes({
  favorites,
  search,
  submitted,
  setSearch,
  setSubmitted,
  toggleFavorite,
}: {
  favorites: string[];
  search: string;
  submitted: boolean;
  setSearch: (value: string) => void;
  setSubmitted: (value: boolean) => void;
  toggleFavorite: (id: string) => void;
}) {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            search={search}
            favorites={favorites}
            submitted={submitted}
            onSearch={setSearch}
            onDiscover={() => navigate("/discover")}
            onToggleFavorite={toggleFavorite}
            onSubmitProperty={() => setSubmitted(true)}
          />
        }
      />
      <Route
        path="/discover"
        element={
          <DiscoveryPage
            search={search}
            favorites={favorites}
            onSearch={setSearch}
            onToggleFavorite={toggleFavorite}
          />
        }
      />
      <Route
        path="/how-it-works"
        element={
          <HowItWorksPage
            submitted={submitted}
            onSubmitProperty={() => setSubmitted(true)}
          />
        }
      />
      <Route
        path="/saved"
        element={
          <SavedPage favorites={favorites} onToggleFavorite={toggleFavorite} />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const toggleFavorite = (id: string) =>
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );

  if (authMode)
    return (
      <AuthPage
        mode={authMode}
        onModeChange={setAuthMode}
        onBack={() => setAuthMode(null)}
        onSuccess={() => {
          setIsSignedIn(true);
          setAuthMode(null);
        }}
      />
    );

  return (
    <BrowserRouter>
      <MainLayout
        favorites={favorites.length}
        submitted={submitted}
        isSignedIn={isSignedIn}
        onAuth={setAuthMode}
      >
        <AppRoutes
          favorites={favorites}
          search={search}
          submitted={submitted}
          setSearch={setSearch}
          setSubmitted={setSubmitted}
          toggleFavorite={toggleFavorite}
        />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
