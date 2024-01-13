"use client";
import styled from "styled-components";

export function LayoutContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 80px 0;
`;
