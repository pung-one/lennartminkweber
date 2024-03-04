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
    <Container>
      <SubNav
        navListData={texts}
        onChange={(text) => setActiveText(text as TextData)}
        setModalOpen={setModalOpen}
      />

      <AnimatePresence>
        {activeText && modalOpen && (
          <TextModal
            key={activeText?.id}
            initial={{ opacity: 0, scaleX: 0.85 }}
            exit={{ opacity: 0, scaleX: 0.85 }}
            animate={{
              opacity: 1,
              scaleX: 1,
              transition: { duration: 0.2, ease: "easeInOut" },
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

const Container = styled.div`
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
    letter-spacing: 0.5px;
  }
  p,
  i {
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
