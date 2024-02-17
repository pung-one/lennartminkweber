"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useViewportSize } from "@/lib/useViewportSize";
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
      <MenuButton $isActive={navOpen} onClick={() => setNavOpen(!navOpen)}>
        Lennart Mink Weber
      </MenuButton>

      <AnimatePresence>
        {navOpen && <NavMain onChange={() => setNavOpen(false)} />}

        {children}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
`;

const MenuButton = styled.button<{ $isActive: boolean }>`
  z-index: 3;
  position: fixed;
  top: 40px;
  right: 40px;
  border: none;
  background: none;
  transform: ${({ $isActive }) =>
    $isActive ? `rotate(-7deg)` : "rotate(0deg)"};
  transition: transform 0.2s ease;
  &:hover {
    cursor: pointer;
    transform: rotate(7deg);
  }
`;
