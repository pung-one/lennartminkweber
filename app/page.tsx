"use client";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <h1>Lennart Mink Weber</h1>
    </Container>
  );
}

const Container = styled.article`
  flex: 1;
  h1 {
    position: relative;
    width: fit-content;
    //distance without SideNav width
    left: calc(61.8vw - 12vw);
    font-size: 16px;
    font-weight: normal;
    z-index: 3;
  }
`;
