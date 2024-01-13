"use client";
import styled from "styled-components";
import { ArtworkData } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArtworksNav from "../ArtworksNav";
import NavElement from "../NavElement";
import { useKeyDown } from "@/lib/useKeyDown";

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

  return (
    <FlexContainer>
      <LeftSection>
        <ArtworksNav
          artworkData={artworkData}
          activeArtwork={activeArtwork}
          setActiveArtwork={setActiveArtwork}
        />

        <ArtworkDetails>
          <ImageNav>
            {activeArtwork.images.map((image, index) => (
              <NavElement
                handleClick={() => setActiveImage(index)}
                isActive={activeImage === index}
                key={image.url}
              >
                {index + 1}
              </NavElement>
            ))}
          </ImageNav>

          <Description>
            <Title>{activeArtwork.title}</Title>
            <p>{activeArtwork.year}</p>
            <p>{activeArtwork.description}</p>
            <Size>{activeArtwork.dimensions}</Size>
          </Description>
        </ArtworkDetails>
      </LeftSection>

      <RightSection>
        {activeArtwork.images[activeImage] && (
          <StyledImage
            src={"https:" + activeArtwork.images[activeImage].url}
            width={activeArtwork.images[activeImage].width}
            height={activeArtwork.images[activeImage].height}
            alt=""
          />
        )}
      </RightSection>
    </FlexContainer>
  );
}

const FlexContainer = styled.article`
  position: relative;
  display: flex;
  flex: 1;
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
`;

const ArtworkDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImageNav = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  gap: 10px;
  margin-bottom: 10vh;
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

const RightSection = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: ${({ width, height }) =>
    width && height && width > height ? "100%" : "calc(100vh - 160px)"};
  /* max-height: calc(100vh - 160px); */
  padding: 0 5vw;
`;
