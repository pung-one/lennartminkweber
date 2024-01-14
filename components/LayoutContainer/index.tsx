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

  useEffect(() => {
    console.log(mouseMovement);
    if (window) {
      window.addEventListener("mousemove", () =>
        setMouseMovement((prev) => (prev > 0 ? (prev -= 0.000003) : 0))
      );
      return () =>
        window.removeEventListener("mousemove", () =>
          setMouseMovement((prev) => (prev > 0 ? (prev -= 0.000003) : 0))
        );
    }
  }, [mouseMovement]);
  return (
    <Container $mouseMovement={mouseMovement}>
      <SideNav />

      {children}
    </Container>
  );
}

const Container = styled.main.attrs(
  ({ $mouseMovement }: { $mouseMovement: number }) => ({
    style: {
      opacity: $mouseMovement,
      pointerEvents: $mouseMovement === 0 ? "none" : "auto",
    },
  })
)<{ $mouseMovement: number }>`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 8vh 0;
`;
