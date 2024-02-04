"use client";
import styled from "styled-components";
import { ShowsData } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavElement from "../NavElement";
import { useKeyDown } from "@/lib/useKeyDown";
import SubNav from "../SubNav";
import { motion } from "framer-motion";
import { useViewportSize } from "@/lib/useViewportSize";
import ShowsNav from "../ArtworkNavDesktop";

export default function Shows({ showsData }: { showsData: ShowsData[] }) {
  const [activeShow, setActiveShow] = useState<ShowsData>(showsData[1]);
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

  function getDetailSectionDesktopView() {
    return (
      <DetailSection>
        <SubNav>
          <ShowsNav
            showsData={showsData}
            activeItemId={activeShow.id}
            onChange={(show) => setActiveShow(show)}
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
          <ImgNavDesktop>
            {activeShow.images.map((image, index) => (
              <NavElement
                handleClick={() => setActiveImage(index)}
                isActive={activeImage === index}
                turningAngle={20}
                key={image.src}
              >
                <p>{index + 1}</p>
              </NavElement>
            ))}
          </ImgNavDesktop>

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
      </DetailSection>
    );
  }

  function getImagesMobileView() {
    return activeShow.images.map((image) => {
      return (
        <MobileImageContainer key={image.id}>
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
            $coverContainer={false}
            alt=""
          />
          {image.description}
        </MobileImageContainer>
      );
    });
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
    >
      {viewportSize.width > 1025 ? (
        getDetailSectionDesktopView()
      ) : (
        <ShowsNav
          showsData={showsData}
          activeItemId={activeShow.id}
          onChange={(artwork) => setActiveShow(artwork)}
        />
      )}
      <ImageSection
        key={activeShow.id}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: "easeIn" },
        }}
      >
        {viewportSize.width > 1025 && activeShow.images[activeImage] ? (
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
            $coverContainer={
              activeShow.images[activeImage]?.width >
              activeShow.images[activeImage]?.height
            }
            alt=""
          />
        ) : (
          getImagesMobileView()
        )}
      </ImageSection>
    </Container>
  );
}

const Container = styled(motion.article)`
  position: relative;
  display: flex;
  flex: 1;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const DetailSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
`;

const ImageSection = styled(motion.div)`
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

const Description = styled(motion.div)`
  position: relative;
  display: flex;
  p {
    line-height: 35px;
  }
`;

const StyledImage = styled(motion(Image))<{ $coverContainer: boolean }>`
  object-fit: ${({ $coverContainer }) =>
    $coverContainer ? "cover" : "contain"};
  object-position: center;
  width: 100%;
  height: 100%;
  padding: 0 3vw 0;
  @media only screen and (max-width: 1024px) {
    padding: 3vh 0 0;
    height: auto;
  }
`;

const MobileImageContainer = styled.section`
  p {
    margin: 5px 0 5vh;
  }
`;
