"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function Info() {
  return (
    <Container
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
    >
      <Content>
        <ImpressumContainer>
          <p>
            Lennart Mink Weber (*1994, Bremen) lives and works in Hamburg. From
            2017 to 2023, he studied at the Hochschule für Bildende Künste in
            Hamburg with Prof. Andreas Slominski and Prof. Dr. Hanne Loreck. In
            2022, he received the &quot;Deutschland&shy;stipendium&quot; and
            publication sponsorship from &quot;Materialverlag Hamburg&quot;. In
            2023, he was kindly supported by the &quot;Freundeskreis der
            Hochschule für bildende Künste Hamburg e.V.&quot;.
          </p>
        </ImpressumContainer>

        <Credits>
          <ImpressumContainer>
            <h2>Photo Credits</h2>
            <p>
              Volker Renner (<i>Graduationshow</i>, <i>relate to…</i>), Oskar
              Lee (<i>I Can&#39;t Tell a Hawk From a Handsaw</i>) and Helge
              Mundt (<i>Annual Exhibition</i>).
            </p>
          </ImpressumContainer>

          <ImpressumContainer>
            <h2>Webdesign and Development</h2>
            <StyledLink href="https://github.com/pung-one" target="_blank">
              Paul Ungerer{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="18px"
                height="18px"
              >
                <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z" />
              </svg>
            </StyledLink>
          </ImpressumContainer>
        </Credits>
      </Content>
    </Container>
  );
}

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Content = styled.article`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 150px;
  margin: 20vh 0 0 15vw;
  @media only screen and (max-width: 1024px) {
    margin: 150px auto;
    padding: 0 15px;
  }
`;

const ImpressumContainer = styled.section`
  position: relative;
  h2 {
    margin-bottom: 8px;
    font-weight: normal;
    letter-spacing: 0.5px;
  }
  p,
  i {
    font-size: 18px;
  }
`;

const Credits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const StyledLink = styled.a`
  position: relative;
  color: black;
  width: fit-content;
  text-decoration: none;
  white-space: nowrap;
  font-size: 18px;
  svg {
    margin-bottom: -3px;
  }
  @media only screen and (min-width: 1025px) {
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;
