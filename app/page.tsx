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
  display: flex;
  h1 {
    position: relative;
    width: fit-content;
    //distance without NavMain width
    left: calc(61.8vw - 12vw);
    font-size: 20px;
    font-weight: normal;
    z-index: 3;
    @media only screen and (max-width: 1024px) {
      left: 0;
      margin: 25px auto;
    }
  }
`;
