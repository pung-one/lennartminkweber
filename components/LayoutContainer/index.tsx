"use client";
import styled from "styled-components";
import { useRef, useState } from "react";
import { NavMain } from "../NavMain";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  function getTiltParams(e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
  }) {
    const rect = e.currentTarget.getBoundingClientRect();
    const origin = e.clientX - rect.left;
    const direction = origin > rect.width / 2 ? "left" : "right";
    const angle = direction === "left" ? `-7` : `7`;

    const element = buttonRef.current;
    if (element) {
      element.style.setProperty("animation", "none");
      element.style.setProperty("--tilt-origin", `${origin}px top`);
      element.style.setProperty("--tilt-angle", `rotate(${angle}deg)`);
    }
  }

  return (
    <Container>
      <NavMain showNav={navOpen} onChange={() => setNavOpen(false)} />

      {navOpen ? (
        <MenuButtonClose onClick={() => setNavOpen(false)}>
          close
        </MenuButtonClose>
      ) : (
        <MenuButtonOpen
          ref={buttonRef}
          onMouseOver={getTiltParams}
          onClick={() => setNavOpen(true)}
        >
          Lennart Mink Weber
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
  color: black;
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

  @keyframes pulse {
    /* 0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(4deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-4deg);
    }
    100% {
      transform: rotate(0deg);
    } */
    /* 0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    } */
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
  animation: 5s pulse 3s infinite;
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
