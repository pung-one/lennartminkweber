"use client";
import styled from "styled-components";
import { ShowsData } from "@/types";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useViewportSize } from "@/lib/useViewportSize";
import SubNav from "../SubNav";

export default function Shows({ showsData }: { showsData: ShowsData[] }) {
  const [activeShow, setActiveShow] = useState<ShowsData>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { viewportSize } = useViewportSize();

  /* useEffect(() => {
    setActiveImage(0);
  }, [activeShow]);

  function previousImage() {
    setActiveImage((prev) =>
      prev > 0 ? (prev -= 1) : activeShow.images.length - 1
    );
  }

  function nextImage() {
    setActiveImage((prev) =>
      prev < activeShow.images.length - 1 ? (prev += 1) : 0
    );
  }

  useKeyDown(previousImage, ["ArrowLeft"]);
  useKeyDown(nextImage, ["ArrowRight"]); */

  return (
    <Container>
      {!modalOpen && (
        <SubNav
          navListData={showsData}
          activeItemId={activeShow?.id}
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
            X
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
  );
}

const Container = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageSection = styled(motion.section)`
  z-index: 4;
  position: absolute;
  top: 0;
  width: 100%;
  background: white;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 40px;
  right: 40px;
  width: fit-content;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const StyledImage = styled(motion(Image))`
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: fit-content;
`;

const ImgWithDescription = styled.div`
  margin-bottom: 60px;
  p {
    margin: 20px 0 0 5vw;
  }
`;
