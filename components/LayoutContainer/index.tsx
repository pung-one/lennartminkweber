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

      <MenuButton onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? "X" : "Lennart Mink Weber"}
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

const MenuButton = styled.button`
  position: fixed;
  z-index: 3;
  top: 40px;
  right: 40px;
  border: none;
  background: none;
  color: black;
  transition: transform 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: rotate(-7deg);
  }
`;
