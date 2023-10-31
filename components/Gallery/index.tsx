import styled from "styled-components";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import StyledButton from "../StyledButton";

export default function Gallery(props: {
  images: { width: number; height: number; url: string }[];
  imageCounter: number;
  setImageCounter: React.Dispatch<SetStateAction<number>>;
}) {
  const { images, imageCounter, setImageCounter } = props;
  const [imageData, setImageData] = useState<imageData>({
    url: "",
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setImageData({ ...images[imageCounter] });
  }, [imageCounter, images]);

  const { url, width, height } = imageData;

  return (
    <FlexContainer>
      <Navigation>
        <StyledButton
          onClick={() =>
            setImageCounter((prev) => (prev > 0 ? (prev -= 1) : prev))
          }
        >
          <PiArrowLeftThin />
        </StyledButton>
        <p>{`${imageCounter + 1}/${props.images.length}`}</p>
        <StyledButton
          onClick={() =>
            setImageCounter((prev) =>
              prev < props.images.length - 1 ? (prev += 1) : prev
            )
          }
        >
          <PiArrowRightThin />
        </StyledButton>
      </Navigation>
      <StyledImage alt="" src={url} width={width} height={height} />
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
