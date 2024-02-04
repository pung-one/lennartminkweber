"use client";
import { TextData } from "@/types";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubNav from "../SubNav";

export default function Texts({ texts }: { texts: TextData[] }) {
  const [activeText, setActiveText] = useState<TextData>(texts[0]);

  useEffect(() => {
    const article = document.getElementsByTagName("article");
    article[0].scrollTo({ top: 0 });
  }, [activeText]);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
    >
      <LeftSection>
        <SubNav
          navListData={texts}
          activeItemId={activeText.id}
          onChange={(text) => setActiveText(text as TextData)}
        />
      </LeftSection>

      <TextContainer
        key={activeText.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
      >
        {activeText.text}
        <p>- {activeText.author}</p>
      </TextContainer>
    </Container>
  );
}

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex: 1;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 15vw;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const TextContainer = styled(motion.article)`
  flex: 1;
  overflow-y: scroll;
  margin: -8vh 0;
  padding: 8vh 0 2vh;
  p {
    position: relative;
    //distance without NavMain and DetailSection width
    margin: 0 12vw 3vh calc(55vw - 30vw);
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 0;
    margin: 0 0 50px;
    p {
      padding: 20px 0 0;
      margin: 0 0;
    }
  }
`;
