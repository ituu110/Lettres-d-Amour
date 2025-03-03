import { useState, useCallback, useEffect } from "react";

export const useHashLocation = () => {
  const [loc, setLoc] = useState(window.location.hash.replace("#", "") || "/");

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.replace("#", "") || "/";
      setLoc(hash);
    };

    window.addEventListener("hashchange", handler);
    if (!window.location.hash) {
      window.location.hash = "#/";
    }

    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [loc, navigate] as const;
};
