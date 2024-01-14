"use client";
import { TextData } from "@/types";
import styled from "styled-components";
import LayoutContainer from "../LayoutContainer";
import SubNav from "../SubNav";
import NavElement from "../NavElement";
import { useState } from "react";

export default function Texts({ texts }: { texts: TextData[] }) {
  const [activeText, setActiveText] = useState<TextData>(texts[0]);

  return (
    <Container>
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

      <TextContainer>
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

const Container = styled.article`
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

const TextContainer = styled.article`
  flex: 1;
  overflow-y: scroll;
  margin: -8vh 0;
  p {
    position: relative;
    //distance without SideNav and LeftSection width
    padding: 8vh 12vw 0 calc(61.8vw - 32vw);
    height: 100%;
  }
`;
