"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function CvPage() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
    >
      <header>
        Lennart Mink Weber
        <br />
        *1994 in Bremen
      </header>

      <h2>Ausbildung</h2>
      <p>
        2023
        <br />
        MFA, Fine Arts, Hochschule für Bildende Künste, Prof. Andreas Slominski,
        Hamburg
      </p>

      <p>
        2017-2021
        <br />
        BFA, Fine Arts, Hochschule für Bildende Künste, Prof. Andreas Slominski,
        Hamburg
      </p>

      <h2>Grants/Scholarships</h2>

      <p>
        2023
        <br />
        Funding, Freundeskreis HFBK, Hamburg
      </p>

      <p>
        2022 - 2023
        <br />
        Deutschlandstipendium Scholarship
      </p>
    </Container>
  );
}

const Container = styled(motion.article)`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  //distance without SideNav width
  padding: 0 8vh 0 calc(61.8vw - 12vw);
  @media only screen and (max-width: 1024px) {
    padding: 0 5vw 0 32vw;
  }
  h2 {
    margin-top: 50px;
  }
  p {
    margin-top: 20px;
  }
`;
