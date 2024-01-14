"use client";
import styled from "styled-components";
import { SideNav } from "../SideNav";
import { useEffect, useState } from "react";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouseMovement, setMouseMovement] = useState<number>(1);
  const [viewportSize, setViewportSize] = useState<{
    width: number;
    heigth: number;
  }>({ width: 0, heigth: 0 });

  function handleResize() {
    setViewportSize({ width: window.innerWidth, heigth: window.innerHeight });
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setViewportSize({ width: window.innerWidth, heigth: window.innerHeight });
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("mousemove", () =>
        setMouseMovement((prev) => (prev > 0 ? (prev -= prev * 0.0000007) : 0))
      );
      return () =>
        window.removeEventListener("mousemove", () =>
          setMouseMovement((prev) =>
            prev > 0 ? (prev -= prev * 0.0000007) : 0
          )
        );
    }
  }, [mouseMovement]);

  return viewportSize.width < viewportSize.heigth ? (
    <TurnDevice>
      <p>Please use your device in landscape mode.</p>
    </TurnDevice>
  ) : (
    <Container $opacity={mouseMovement > 1 ? 1 : mouseMovement}>
      <SideNav />

      {children}
    </Container>
  );
}

const Container = styled.main.attrs(({ $opacity }: { $opacity: number }) => ({
  style: {
    opacity: $opacity,
    pointerEvents: $opacity === 0 ? "none" : "auto",
  },
}))<{ $opacity: number }>`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 8vh 0;
`;

const TurnDevice = styled.main`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  p {
    transform: rotate(-90deg);
  }
`;
