"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useViewportSize } from "@/lib/useViewportSize";
import { NavMain } from "../NavMain";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [startFadeOut, setStartFadeOut] = useState<boolean>(false);

  const { viewportSize } = useViewportSize();

  let timeout: NodeJS.Timeout;

  useEffect(() => {
    if (viewportSize.width > 1025 && typeof window !== undefined) {
      window.document.onmousemove = () => {
        clearTimeout(timeout);
        setStartFadeOut(false);
        timeout = setTimeout(() => setStartFadeOut(true), 15000);
      };
    }
  }, [startFadeOut]);

  return (
    <Container $startFadeOut={startFadeOut}>
      <NavMain />

      {children}
    </Container>
  );
}

const Container = styled.main<{ $startFadeOut: boolean }>`
  /* @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
  animation: ${({ $startFadeOut }) =>
    $startFadeOut ? "fadeOut 10s forwards" : "fadeIn 0.5s forwards"}; */
  opacity: ${({ $startFadeOut }) => ($startFadeOut ? "0" : "1")};
  transition: opacity 6s;
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: -webkit-fill-available;
  padding: 8vh 0;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    width: auto;
    padding: 0 15px;
  }
`;
