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
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
    >
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
              itemListLength={artworkData.length}
              activeItemId={activeArtwork.id}
              onChange={(id) =>
                setActiveArtwork(
                  artworkData.find((artwork) => artwork.id === id)!
                )
              }
            />
          )}
        </SubNav>

        <ArtworkDetails
          key={activeArtwork.title}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: "easeIn" },
          }}
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
      <RightSection
        key={activeArtwork.title}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: "easeIn" },
        }}
      >
        {viewportSize.width < 1024 && (
          <ArtworkNavMobile
            itemListLength={activeArtwork.images.length}
            activeItemId={activeImage}
            onChange={(id) => setActiveImage(id)}
          />
        )}
        {activeArtwork.images[activeImage] && (
          <StyledImage
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: "ease" },
            }}
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
  @media only screen and (max-width: 1024px) {
    padding: 3vh 8vh 0;
  }
  padding: 0 3vw 0;
`;
