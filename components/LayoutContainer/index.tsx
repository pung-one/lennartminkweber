"use client";
import styled from "styled-components";
import { useRef, useState } from "react";
import { NavMain } from "../NavMain";
import { AnimatePresence } from "framer-motion";

type TurningParams = {
  origin: number;
  direction: "left" | "right";
};

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
    const x = e.clientX - rect.left;
    const direction = x > rect.width / 2 ? "left" : "right";
    const origin = x;
    const angle = direction === "left" ? `-3` : `3`;

    console.log(`${origin}px top`);
    const element = buttonRef.current;
    if (element) {
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
  transition: transform 0.2s ease;
  transform-origin: var(--tilt-origin);
  @media only screen and (min-width: 1025px) {
    height: auto;
    top: 40px;
    &:hover {
      cursor: pointer;
      transform: var(--tilt-angle);
    }
  }
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
