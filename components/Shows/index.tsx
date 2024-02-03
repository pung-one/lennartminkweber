"use client";
import styled from "styled-components";
import { ShowsData } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavElement from "../NavElement";
import { useKeyDown } from "@/lib/useKeyDown";
import SubNav from "../SubNav";
import { motion } from "framer-motion";
import ArtworkNavDesktop from "../ArtworkNavDesktop";
import ArtworkNavMobile from "../ArtworkNavMobile";
import { useViewportSize } from "@/lib/useViewportSize";

export default function Shows({ showsData }: { showsData: ShowsData[] }) {
  const [activeShow, setActiveShow] = useState<ShowsData>(showsData[0]);
  const [activeImage, setActiveImage] = useState<number>(0);

  const { viewportSize } = useViewportSize();

  useEffect(() => {
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
  useKeyDown(nextImage, ["ArrowRight"]);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
    >
      <LeftSection>
        <SubNav>
          <ArtworkNavDesktop
            showsData={showsData}
            activeItemId={activeShow.id}
            onChange={(artwork) => setActiveShow(artwork)}
          />
        </SubNav>

        <ShowInfo
          key={activeShow.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: "easeIn" },
          }}
        >
          {viewportSize.width > 1024 && (
            <ImgNavDesktop>
              {activeShow.images.map((image, index) => (
                <ImgNavElement
                  onClick={() => setActiveImage(index)}
                  $isActive={activeImage === index}
                  key={image.src}
                >
                  {index + 1}
                </ImgNavElement>
              ))}
            </ImgNavDesktop>
          )}

          <Description
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
          >
            {activeShow.images[activeImage]?.description}
          </Description>
        </ShowInfo>
      </LeftSection>
      <RightSection
        key={activeShow.id}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: "easeIn" },
        }}
      >
        {viewportSize.width < 1024 && (
          <ArtworkNavMobile
            itemListLength={activeShow.images.length}
            activeItemId={activeImage}
            onChange={(id) => setActiveImage(id)}
          />
        )}
        {activeShow.images[activeImage] && (
          <StyledImage
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: "easeIn" },
            }}
            exit={{ opacity: 0 }}
            src={activeShow.images[activeImage]?.src}
            width={activeShow.images[activeImage]?.width}
            height={activeShow.images[activeImage]?.height}
            $isLandscapeMode={
              activeShow.images[activeImage]?.width >
              activeShow.images[activeImage]?.height
            }
            alt=""
          />
        )}
      </RightSection>
    </Container>
  );
}

const Container = styled(motion.article)`
  position: relative;
  display: flex;
  flex: 1;
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
`;

const RightSection = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ShowInfo = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
`;

const ImgNavDesktop = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;
`;

const ImgNavElement = styled.p<{ $isActive: boolean }>`
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};
  padding-right: 2px;
  &:hover {
    cursor: pointer;
  }
`;

const Description = styled(motion.div)`
  position: relative;
  display: flex;
  p {
    line-height: 35px;
  }
`;

const StyledImage = styled(motion(Image))<{ $isLandscapeMode: boolean }>`
  object-fit: ${({ $isLandscapeMode }) =>
    $isLandscapeMode ? "cover" : "contain"};
  object-position: center;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    padding: 3vh 8vh;
  }
  padding: 0 3vw 0;
`;
