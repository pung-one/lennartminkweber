"use client";
import styled from "styled-components";

export default function ContactPage() {
  return (
    <Container>
      <StyledLink href={"mailto:lennartminkweber@gmail.com"}>
        lennartminkweber@gmail.com
      </StyledLink>
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 120px 5px 2vh;
`;

const StyledLink = styled.a`
  position: relative;
  display: flex;
  color: black;
  width: fit-content;
  text-decoration: none;
  margin: 0 auto;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
