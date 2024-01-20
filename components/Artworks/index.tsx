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

export default function Artworks({
  artworkData,
}: {
  artworkData: ArtworkData[];
}) {
  const [activeArtwork, setActiveArtwork] = useState<ArtworkData>(
    artworkData[0]
  );
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    setActiveImage(0);
  }, [activeArtwork]);

  function previousImage() {
    setActiveImage((prev) => (prev > 0 ? (prev -= 1) : 0));
  }

  function nextImage() {
    setActiveImage((prev) =>
      prev < activeArtwork.images.length - 1 ? (prev += 1) : prev
    );
  }

  useKeyDown(previousImage, ["ArrowLeft"]);
  useKeyDown(nextImage, ["ArrowRight"]);

  console.log(artworkData);

  return (
    <Container>
      <LeftSection>
        <SubNav>
          <ArtworkNavDesktop
            artworkData={artworkData}
            activeArtworkId={activeArtwork.id}
            onChange={(artwork) => setActiveArtwork(artwork)}
          />
        </SubNav>

        <ArtworkDetails
          key={activeArtwork.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0 }}
        >
          <ImgNav>
            {activeArtwork.images.map((image, index) => (
              <NavElement
                handleClick={() => setActiveImage(index)}
                isActive={activeImage === index}
                key={image.url}
              >
                {index + 1}
              </NavElement>
            ))}
          </ImgNav>

          <Description>
            {/* <Title>{activeArtwork.title}</Title> */}
            <p>{activeArtwork.year}</p>
            <p>{activeArtwork.description}</p>
            <Size>{activeArtwork.dimensions}</Size>
          </Description>
        </ArtworkDetails>
      </LeftSection>
      <RightSection>
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

const ImgNav = styled.ul`
  display: flex;
  list-style: none;
  gap: 5px;
`;

const Description = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.p`
  position: relative;
  width: fit-content;
  transform: skew(-20deg);
  /* &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    right: 0;
    background-color: black;
  } */
`;

const Size = styled.p`
  font-family: "GaramondPremierProMedium";
`;

const StyledImage = styled(motion(Image))`
  object-fit: contain;
  object-position: top;
  width: 100%;
  height: 100%;
  padding: 0 8vh;
`;
