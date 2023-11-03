import styled from "styled-components";
import ArtworkInfo from "../ArtworkInfo";
import { SetStateAction, useEffect, useState } from "react";
import StyledButton from "../StyledButton";

export default function SideBar({
  artworkData,
  artworkCount,
  setArtworkCount,
  setShowInfo,
}: {
  artworkData: ArtworkData;
  artworkCount: number;
  setArtworkCount: React.Dispatch<SetStateAction<number>>;
  setShowInfo: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [viewportWidth, setViewportWidth] = useState<number | undefined>(
    undefined
  );

  function handleResize() {
    setViewportWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  console.log(viewportWidth);

  return (
    <Container>
      <ArtworkInfo
        artworkData={artworkData}
        artworkCount={artworkCount}
        setArtworkCount={setArtworkCount}
      />
      {viewportWidth && viewportWidth > 1024 ? (
        <InfoButton>
          <StyledButton onClick={() => setShowInfo(true)}>Info</StyledButton>
        </InfoButton>
      ) : viewportWidth && viewportWidth <= 1024 ? (
        <InfoButtonMobile onClick={() => setShowInfo(true)}>i</InfoButtonMobile>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 100vh;
  border-right: 1px solid black;
  @media only screen and (max-width: 1024px) {
    position: relative;
    border-right: none;
    border-bottom: 1px solid black;
    width: 100%;
    height: auto;
  }
`;

const InfoButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50%;
  transform: translateX(+50%);
  * {
    font-size: 20px;
  }
`;

const InfoButtonMobile = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  border: 1px solid black;
  border-radius: 50%;
  background: none;
  color: black;
  font-size: 20px;
`;
