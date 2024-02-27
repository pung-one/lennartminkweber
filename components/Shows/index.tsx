"use client";
import styled from "styled-components";
import { ShowsData } from "@/types";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SubNav from "../SubNav";

export default function Shows({ showsData }: { showsData: ShowsData[] }) {
  const [activeShow, setActiveShow] = useState<ShowsData>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <AnimatePresence>
      <Container
        key={"shows"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        {!modalOpen && (
          <SubNav
            navListData={showsData}
            onChange={(show) => setActiveShow(show as ShowsData)}
            setModalOpen={setModalOpen}
          />
        )}

        {activeShow && modalOpen && (
          <ImageSection
            id="contentSection"
            key={activeShow?.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
          >
            <CloseButton
              onClick={() => {
                setActiveShow(undefined);
                setModalOpen(false);
              }}
            >
              close
            </CloseButton>

            {activeShow?.images.map((image) => {
              return (
                <ImgWithDescription key={image.id}>
                  <StyledImage
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.5, ease: "easeIn" },
                    }}
                    exit={{ opacity: 0 }}
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt=""
                  />
                  {image.description}
                </ImgWithDescription>
              );
            })}
          </ImageSection>
        )}
      </Container>
    </AnimatePresence>
  );
}

const Container = styled(motion.article)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const ImageSection = styled(motion.section)`
  z-index: 4;
  position: absolute;
  top: 0;
  width: 100%;
  background: white;
  padding-bottom: 12vh;
`;

const CloseButton = styled.button`
  position: fixed;
  right: 35px;
  top: 20px;
  height: 45px;
  background: none;
  border: none;
  color: white;
  mix-blend-mode: difference;
  @media only screen and (min-width: 1025px) {
    height: auto;
    top: 40px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledImage = styled(motion(Image))`
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: fit-content;
`;

const ImgWithDescription = styled.div`
  margin-bottom: 100px;
  p {
    margin: 20px 20px 0;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 80px;
    p {
      margin: 10px 12px 0;
    }
  }
`;
