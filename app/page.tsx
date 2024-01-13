"use client";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <p>Lennart Mink Weber</p>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  p {
    position: relative;
    width: fit-content;
    left: 62%;
    transform: translate(-50%);
  }
`;
