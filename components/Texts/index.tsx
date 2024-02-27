"use client";
import { TextData } from "@/types";
import styled from "styled-components";
import { useState } from "react";
import SubNav from "../SubNav";
import { AnimatePresence, motion } from "framer-motion";

export default function Texts({ texts }: { texts: TextData[] }) {
  const [activeText, setActiveText] = useState<TextData>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <SubNav
          navListData={texts}
          onChange={(text) => setActiveText(text as TextData)}
          setModalOpen={setModalOpen}
        />

        {activeText && modalOpen && (
          <TextContainer
            key={activeText?.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
          >
            <CloseButton
              onClick={() => {
                setActiveText(undefined);
                setModalOpen(false);
              }}
            >
              close
            </CloseButton>

            {activeText.text}

            <span>- {activeText.author}</span>
          </TextContainer>
        )}
      </Container>
    </AnimatePresence>
  );
}

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const TextContainer = styled(motion.article)`
  z-index: 4;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 35px;
  top: 0;
  width: 100%;
  overflow: hidden;
  background: white;
  padding: 20vh 0 20vh 130px;
  @media only screen and (max-width: 1024px) {
    padding: 20vh 15px;
    margin: 0 auto;
  }
  h1 {
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 2px;
  }
  p {
    max-width: 500px;
  }
`;

const CloseButton = styled.button`
  z-index: 5;
  position: fixed;
  right: 50px;
  top: 20px;
  height: 50px;
  background: none;
  border: none;
  @media only screen and (min-width: 1025px) {
    height: auto;
    top: 40px;
    &:hover {
      cursor: pointer;
    }
  }
`;
