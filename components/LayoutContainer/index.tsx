"use client";
import styled from "styled-components";
import { useState } from "react";
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
  const [turningParams, setTurningParams] = useState<TurningParams>({
    origin: 0,
    direction: "right",
  });

  function getTurningParams(e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
  }) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setTurningParams({
      origin: x,
      direction: x > rect.width / 2 ? "left" : "right",
    });
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
          $turningParams={turningParams}
          onMouseOver={getTurningParams}
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

const MenuButtonOpen = styled.button<{
  $turningParams: TurningParams;
}>`
  z-index: 3;
  position: fixed;
  right: 50px;
  top: 20px;
  height: 50px;
  border: none;
  background: none;
  color: black;
  transition: transform 0.2s ease;
  transform-origin: ${({ $turningParams }) => `${$turningParams.origin}px top`};
  @media only screen and (min-width: 1025px) {
    height: auto;
    top: 40px;
    &:hover {
      cursor: pointer;
      transform: ${({ $turningParams }) =>
        $turningParams.direction === "left" ? `rotate(-4deg)` : `rotate(4deg)`};
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
