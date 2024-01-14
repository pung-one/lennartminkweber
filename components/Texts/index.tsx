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

      <RightSection>
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
      </RightSection>
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 12vw;
`;

const RightSection = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

const TextContainer = styled.article`
  position: relative;
  width: 100%;
  overflow-y: scroll;
  margin: -8vh 0;
  p {
    position: relative;
    left: calc(62vw - 400px);
    width: 350px;
    height: 100%;
    padding: 8vh 0;
  }
`;
