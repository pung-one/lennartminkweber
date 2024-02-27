"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function CvPage() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <Content>
        <p>
          Lennart Mink Weber (*1994, Bremen) lives and works in Hamburg. He
          studied from 2017-2023 at the Hochschule für Bildende Künste in
          Hamburg with Prof. Andreas Slominski and Dr. Hanne Loreck. In 2022 he
          received the Deutschland&shy;stipendium and the publication
          sponsorship of Materialverlag, Hamburg. In 2023 he was supported by
          the Friends of the HFBK.
        </p>
      </Content>
    </Container>
  );
}

const Container = styled(motion.article)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Content = styled.section`
  max-width: 500px;
  margin: 20vh 0 0 130px;
  @media only screen and (max-width: 1024px) {
    margin: 20vh auto;
    padding: 0 15px;
  }
`;
