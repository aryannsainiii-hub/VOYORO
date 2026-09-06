import { createContext, useContext, useEffect, useState, useCallback } from "react";

// Lightweight client-side router (no external dependency).
// Supports path + query-string params, back/forward via popstate.

const RouterContext = createContext(null);

function parseLocation() {
  const url = new URL(window.location.href);
  return {
    path: url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "") || "/",
    query: Object.fromEntries(url.searchParams.entries()),
  };
}

export function RouterProvider({ children }) {
  const [location, setLocation] = useState(parseLocation);

  useEffect(() => {
    const onPop = () => setLocation(parseLocation());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((path, query = {}) => {
    const search = new URLSearchParams(query).toString();
    const url = search ? `${path}?${search}` : path;
    window.history.pushState({}, "", url);
    setLocation({ path, query });
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, []);

  return (
    <RouterContext.Provider value={{ ...location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error("useRouter must be used within RouterProvider");
  return ctx;
}
