"use client";
import styled from "styled-components";
import { useCallback, useRef, useState } from "react";
import { NavMain } from "../NavMain";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const getTiltParams = useCallback(
    (e: {
      currentTarget: { getBoundingClientRect: () => any };
      clientX: number;
    }) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const origin = e.clientX - rect.left;
      const direction = origin > rect.width / 2 ? "left" : "right";
      const angle = direction === "left" ? `-5` : `5`;

      const element = buttonRef.current;
      if (element) {
        element.style.setProperty("animation", "none");
        element.style.setProperty("--tilt-origin", `${origin}px center`);
        element.style.setProperty("--tilt-angle", `rotate(${angle}deg)`);
      }
    },
    []
  );

  return (
    <Container>
      <NavMain showNav={navOpen} onChange={() => setNavOpen(false)} />

      {navOpen ? (
        <MenuButtonClose
          type="button"
          aria-label="close navigation"
          onClick={() => setNavOpen(false)}
        >
          close
        </MenuButtonClose>
      ) : (
        <MenuButtonOpen
          type="button"
          aria-label="open navigation"
          ref={buttonRef}
          onMouseOver={getTiltParams}
          onClick={() => setNavOpen(true)}
        >
          <p>Lennart Mink Weber</p>
        </MenuButtonOpen>
      )}

      {children}
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  width: 100vw;
  height: 100dvh;
`;

const MenuButtonOpen = styled.button`
  z-index: 3;
  position: fixed;
  right: 50px;
  top: 20px;
  height: 50px;
  border: none;
  background: none;
  p {
    color: black;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 20px 12px white;
  }
  transition: all 0.2s ease;
  transform-origin: var(--tilt-origin, 50% top);
  @media only screen and (min-width: 1025px) {
    height: auto;
    top: 40px;
    &:hover {
      cursor: pointer;
      transform: var(--tilt-angle);
    }
  }

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    85% {
      transform: rotate(0deg);
    }
    90% {
      transform: rotate(3deg);
    }
    95% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  animation: 5s wiggle infinite;
`;

const MenuButtonClose = styled.button`
  z-index: 3;
  position: fixed;
  right: 50px;
  top: 20px;
  height: 50px;
  border: none;
  background: none;
  color: black;
  text-align: center;
  @media only screen and (min-width: 1025px) {
    height: auto;
    top: 40px;
    &:hover {
      cursor: pointer;
    }
  }
`;
