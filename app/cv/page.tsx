"use client";
import styled from "styled-components";

export default function CvPage() {
  return (
    <Container>
      <Content>
        <p>*1994 in Bremen</p>

        <h2>Ausbildung</h2>

        <p>
          2023
          <br />
          MFA, Fine Arts, Hochschule für Bildende Künste, Prof. Andreas
          Slominski, Hamburg
        </p>

        <p>
          2017-2021
          <br />
          BFA, Fine Arts, Hochschule für Bildende Künste, Prof. Andreas
          Slominski, Hamburg
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
      </Content>
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const Content = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 80px 5px 2vh;
  max-width: 600px;
  left: 50%;
  transform: translateX(-50%);
  @media only screen and (min-width: 1025px) {
    left: 60%;
  }
`;
