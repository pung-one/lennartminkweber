"use client";
import styled from "styled-components";
import { useState } from "react";
import { NavMain } from "../NavMain";
import { AnimatePresence } from "framer-motion";

export default function LayoutContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <Container>
      <NavMain showNav={navOpen} onChange={() => setNavOpen(false)} />

      <MenuButton $navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? "close" : "Lennart Mink Weber"}
      </MenuButton>

      {children}
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  width: 100vw;
  height: 100dvh;
`;

const MenuButton = styled.button<{ $navOpen: boolean }>`
  position: fixed;
  z-index: 3;
  top: 1.5vw;
  right: 1.5vw;
  top: 40px;
  right: 50px;
  border: none;
  background: none;
  color: black;
  transition: transform 0.2s ease;
  transform-origin: ${({ $navOpen }) => ($navOpen ? "50%" : "80%")};
  &:hover {
    cursor: pointer;
    transform: ${({ $navOpen }) =>
      $navOpen ? "rotate(-7deg)" : "rotate(-4deg)"};
  }
`;
