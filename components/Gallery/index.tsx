import styled from "styled-components";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import StyledButton from "../StyledButton";
import { useKeyDown } from "@/lib/useKeyDown";

export default function Gallery({
  artworkData,
  artworkCount,
}: {
  artworkData: ArtworkData;
  artworkCount: number;
}) {
  const [images, setImages] = useState<ArtworkImageData>(
    artworkData[artworkCount].images
  );
  const [imageCount, setImageCount] = useState<number>(0);

  useEffect(() => {
    setImageCount(0);
    setImages(artworkData[artworkCount].images);
  }, [artworkCount]);

  const { url, width, height } = images[imageCount];

  function prevImage() {
    setImageCount((prev) => (prev > 0 ? (prev -= 1) : prev));
  }

  function nextImage() {
    setImageCount((prev) => (prev < images.length - 1 ? (prev += 1) : prev));
  }

  useKeyDown(prevImage, ["ArrowLeft"]);
  useKeyDown(nextImage, ["ArrowRight"]);

  return (
    <FlexContainer>
      <Navigation>
        <StyledButton onClick={() => prevImage()}>
          <PiArrowLeftThin />
        </StyledButton>
        <p>{`${imageCount + 1}/${images.length}`}</p>
        <StyledButton onClick={() => nextImage()}>
          <PiArrowRightThin />
        </StyledButton>
      </Navigation>
      {images && (
        <StyledImage
          alt=""
          src={"https:" + url}
          width={width}
          height={height}
        />
      )}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 5vh;
`;

const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  p {
    height: 20px;
    padding: 0 35px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  object-position: top;
  width: 100%;
  height: ${({ width, height }) =>
    width && height && width > height ? "100%" : "75vh"};
  padding: 0 5vw;
`;
