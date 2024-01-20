"use client";
import styled from "styled-components";
import { ArtworkData } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavElement from "../NavElement";
import { useKeyDown } from "@/lib/useKeyDown";
import SubNav from "../SubNav";
import { motion } from "framer-motion";
import ArtworkNavDesktop from "../ArtworkNavDesktop";
import ArtworkNavMobile from "../ArtworkNavMobile";
import { useViewportSize } from "@/lib/useViewportSize";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";

export default function Artworks({
  artworkData,
}: {
  artworkData: ArtworkData[];
}) {
  const [activeArtwork, setActiveArtwork] = useState<ArtworkData>(
    artworkData[0]
  );
  const [activeImage, setActiveImage] = useState<number>(0);

  const { viewportSize } = useViewportSize();

  useEffect(() => {
    setActiveImage(0);
  }, [activeArtwork]);

  function previousImage() {
    setActiveImage((prev) =>
      prev > 0 ? (prev -= 1) : activeArtwork.images.length - 1
    );
  }

  function nextImage() {
    setActiveImage((prev) =>
      prev < activeArtwork.images.length - 1 ? (prev += 1) : 0
    );
  }

  useKeyDown(previousImage, ["ArrowLeft"]);
  useKeyDown(nextImage, ["ArrowRight"]);

  console.log(artworkData);

  return (
    <Container>
      <LeftSection>
        <SubNav>
          {viewportSize.width > 1024 ? (
            <ArtworkNavDesktop
              artworkData={artworkData}
              activeArtworkId={activeArtwork.id}
              onChange={(artwork) => setActiveArtwork(artwork)}
            />
          ) : (
            <ArtworkNavMobile
              artworkData={artworkData}
              activeArtworkId={activeArtwork.id}
              onChange={(artwork) => setActiveArtwork(artwork)}
            />
          )}
        </SubNav>

        <ArtworkDetails
          key={activeArtwork.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0 }}
        >
          {viewportSize.width > 1024 && (
            <ImgNavDesktop>
              {activeArtwork.images.map((image, index) => (
                <NavElement
                  handleClick={() => setActiveImage(index)}
                  isActive={activeImage === index}
                  key={image.url}
                >
                  {index + 1}
                </NavElement>
              ))}
            </ImgNavDesktop>
          )}

          <Description>
            {viewportSize.width < 1024 && <Title>{activeArtwork.title}</Title>}
            <p>{activeArtwork.year}</p>
            <p>{activeArtwork.description}</p>
            <Size>{activeArtwork.dimensions}</Size>
          </Description>
        </ArtworkDetails>
      </LeftSection>
      <RightSection>
        {viewportSize.width < 1024 && (
          <ImgNavMobile
            key={activeArtwork.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0], transition: { duration: 3 } }}
          >
            <LeftClickSection onClick={() => previousImage()}>
              <PiArrowLeftThin />
            </LeftClickSection>

            <RightClickSection onClick={() => nextImage()}>
              <PiArrowRightThin />
            </RightClickSection>
          </ImgNavMobile>
        )}
        {activeArtwork.images[activeImage] && (
          <StyledImage
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            src={"https:" + activeArtwork.images[activeImage].url}
            width={activeArtwork.images[activeImage].width}
            height={activeArtwork.images[activeImage].height}
            alt=""
          />
        )}
      </RightSection>
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  display: flex;
  flex: 1;
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 12vw;
  overflow-y: scroll;
`;

const RightSection = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

const ArtworkDetails = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImgNavDesktop = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;
  margin-bottom: 8vh;
`;

const ImgNavMobile = styled(motion.div)`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  background: none;
`;

const LeftClickSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 5vh;
`;

const RightClickSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  padding-right: 5vh;
`;

const Description = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.p`
  position: relative;
  width: fit-content;
  font-style: italic;
`;

const Size = styled.p`
  font-family: "GaramondPremierProMedium";
`;

const StyledImage = styled(motion(Image))`
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: 100%;
  padding: 0 8vh;
`;
