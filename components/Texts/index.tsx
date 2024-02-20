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
          activeItemId={activeText?.id}
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
              X
            </CloseButton>

            {activeText.text}

            <p>- {activeText.author}</p>
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
`;

const TextContainer = styled(motion.article)`
  z-index: 4;
  position: absolute;
  top: 0;
  width: 100%;
  overflow-y: scroll;
  padding: 8vh 0 2vh;
  background: white;
  p {
    position: relative;
    //distance without NavMain and DetailSection width
    max-width: 600px;
    padding: 0 5px 40px;
    left: 50%;
    transform: translateX(-50%);
    @media only screen and (min-width: 1025px) {
      left: 60%;
    }
  }
`;

const CloseButton = styled.button`
  z-index: 5;
  position: fixed;
  top: 40px;
  right: 40px;
  width: fit-content;
  background: none;
  border: none;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;
