"use client";
import styled from "styled-components";
import { SideNav } from "../SideNav";
import { useEffect, useState } from "react";
import { useViewportSize } from "@/lib/useViewportSize";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mouseMovement, setMouseMovement] = useState<number>(1);

  const { viewportSize } = useViewportSize();

  const decayRate = 0.0000007;

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("mousemove", () =>
        setMouseMovement((prev) => (prev > 0 ? (prev -= prev * decayRate) : 0))
      );
      return () =>
        window.removeEventListener("mousemove", () =>
          setMouseMovement((prev) =>
            prev > 0 ? (prev -= prev * decayRate) : 0
          )
        );
    }
  }, [mouseMovement]);

  return viewportSize.width < viewportSize.height ? (
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
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: -webkit-fill-available;
  padding: 8vh 0;
  @media only screen and (max-width: 1024px) {
    padding: 5vh 0;
  }
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
