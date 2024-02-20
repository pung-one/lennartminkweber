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
      <MenuButton onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? "X" : "Lennart Mink Weber"}
      </MenuButton>

      <NavMain showNav={navOpen} onChange={() => setNavOpen(false)} />

      {children}
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100dvh;
`;

const MenuButton = styled.button`
  z-index: 3;
  position: fixed;
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
