"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function ContactPage() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <StyledLink href={"mailto:lennartminkweber@gmail.com"}>
        lennartminkweber@gmail.com
      </StyledLink>
    </Container>
  );
}

const Container = styled(motion.article)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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
