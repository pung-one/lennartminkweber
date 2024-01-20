import { useEffect, useState } from "react";

type ViewportSize = {
  width: number;
  height: number;
};

export function useViewportSize(): { viewportSize: ViewportSize } {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setViewportSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return { viewportSize };
}
