import styled from "styled-components";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";
import { useState } from "react";

export default function Gallery(props: {
  images: { width: number; height: number; url: string }[];
}) {
  const [imageCounter, setImageCounter] = useState(0);

  const { url, width, height } = props.images[imageCounter];

  return (
    <FlexContainer>
      <Navigation>
        <PiArrowLeftThin
          onClick={() =>
            setImageCounter((prev) => (prev > 0 ? (prev -= 1) : prev))
          }
        />
        <p>{`${imageCounter + 1}/${props.images.length}`}</p>
        <PiArrowRightThin
          onClick={() =>
            setImageCounter((prev) =>
              prev < props.images.length - 1 ? (prev += 1) : prev
            )
          }
        />
      </Navigation>
      <StyledImage alt="" src={url} width={width} height={height} />
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 90vh;
`;
