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
    <Container
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <SubNav
        navListData={texts}
        onChange={(text) => setActiveText(text as TextData)}
        setModalOpen={setModalOpen}
      />

      <AnimatePresence>
        {activeText && modalOpen && (
          <TextModal
            key={activeText?.id}
            initial={{ opacity: 0, x: -20 }}
            exit={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
          >
            <CloseButton
              onClick={() => {
                setActiveText(undefined);
                setModalOpen(false);
              }}
            >
              <p>close</p>
            </CloseButton>

            <TextContainer>
              {activeText.text}

              <p>- {activeText.author}</p>
            </TextContainer>
          </TextModal>
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const TextModal = styled(motion.section)`
  z-index: 4;
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background: white;
`;

const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 35px;
  max-width: 500px;
  margin: 20vh 0 20vh 15vw;
  @media only screen and (max-width: 1024px) {
    margin: 150px auto;
    padding: 0 15px;
  }
  h1 {
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 2px;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  right: 35px;
  top: 20px;
  height: 45px;
  background: none;
  border: none;
  p {
    color: black;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 20px 15px white;
  }
  @media only screen and (min-width: 1025px) {
    height: auto;
    top: 40px;
    &:hover {
      cursor: pointer;
    }
  }
`;
