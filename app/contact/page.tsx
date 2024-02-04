"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function ContactPage() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
    >
      <StyledLink href={"mailto:lennartminkweber@gmail.com"}>
        lennartminkweber@gmail.com
      </StyledLink>
    </Container>
  );
}

const Container = styled(motion.article)`
  flex: 1;
  display: flex;
  //distance without NavMain width
  padding: 0 8vh 0 calc(61.8vw - 12vw);
  @media only screen and (max-width: 1024px) {
    padding: 25px 0 0;
  }
`;

const StyledLink = styled.a`
  color: black;
  width: fit-content;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  @media only screen and (max-width: 1024px) {
    margin: auto;
  }
`;
