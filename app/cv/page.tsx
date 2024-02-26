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
          Hamburg with <span>Prof. Andreas Slominski</span> and Dr. Hanne
          Loreck. In 2022 he received the Deutschlandstipendium and the
          publication sponsorship of Materialverlag, Hamburg. In 2023 he was
          supported by the Friends of the HFBK.
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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 80px 5px 2vh;
  max-width: 600px;
  word-wrap: break-word;
  span {
    line-break: strict;
  }
  padding: 20vh 10px;
  @media only screen and (min-width: 1025px) {
    padding: 20vh 0 0 130px;
  }
`;
