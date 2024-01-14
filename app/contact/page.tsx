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
  flex: 1;
  //distance without SideNav width
  padding: 0 8vh 0 calc(61.8vw - 12vw);
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
