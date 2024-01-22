"use client";
import { TextData } from "@/types";
import styled from "styled-components";
import SubNav from "../SubNav";
import NavElement from "../NavElement";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        <SubNav>
          {texts.map((text) => (
            <NavElement
              key={text.title}
              handleClick={() => setActiveText(text)}
              isActive={text === activeText}
            >
              {text.title}
            </NavElement>
          ))}
        </SubNav>
      </LeftSection>

      <TextContainer
        key={activeText.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
      >
        <p>
          {activeText.text}
          <br />
          <br />- {activeText.author}
          <br />
          <br />
          <br />
        </p>
      </TextContainer>
    </Container>
  );
}

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex: 1;
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
`;

const TextContainer = styled(motion.article)`
  flex: 1;
  overflow-y: scroll;
  margin: -8vh 0;
  p {
    position: relative;
    //distance without SideNav and LeftSection width
    padding: 8vh 12vw 0 calc(61.8vw - 32vw);
    height: 100%;
    @media only screen and (max-width: 1024px) {
      padding: 6vh 12vw 0;
    }
  }
`;
