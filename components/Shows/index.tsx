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
    <Container>
      {!modalOpen && (
        <SubNav
          navListData={showsData}
          onChange={(show) => setActiveShow(show as ShowsData)}
          setModalOpen={setModalOpen}
        />
      )}

      <AnimatePresence>
        {activeShow && modalOpen && (
          <ImageSection
            aria-modal="true"
            key={activeShow?.id}
            initial={{ opacity: 0, scaleX: 0.9 }}
            exit={{ opacity: 0, scaleX: 0.9 }}
            animate={{
              opacity: 1,
              scaleX: 1,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <CloseButton
              type="button"
              onClick={() => {
                setActiveShow(undefined);
                setModalOpen(false);
              }}
            >
              close
            </CloseButton>

            {activeShow?.images.map((image, index) => {
              return (
                <ImgWithDescription key={image.id}>
                  <StyledImage
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading="eager"
                  />
                  {image.description}
                </ImgWithDescription>
              );
            })}
          </ImageSection>
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled.article`
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

const StyledImage = styled(Image)`
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: fit-content;
`;

const ImgWithDescription = styled.div`
  margin-bottom: 100px;
  * {
    font-size: 18px;
  }
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
