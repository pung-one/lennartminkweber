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
  overflow-y: scroll;
`;

const TextContainer = styled(motion.article)`
  z-index: 4;
  position: absolute;
  top: 0;
  width: 100%;
  overflow-y: scroll;
  background: white;
  p {
    position: relative;
    padding: 20vh 0 0 10vw;
    max-width: 700px;
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
